/**
 * Grava amb ElevenLabs els torns de trucada de les demos, en els quatre idiomes.
 *
 *   pnpm voice:demos              grava el que falta o ha canviat
 *   pnpm voice:demos --estimate   només compta caràcters (no gasta res)
 *   pnpm voice:demos --lang ca    només un idioma
 *
 * Necessita ELEVENLABS_API_KEY a `.env.local` (no s'imprimeix mai).
 * Escriu els MP3 a `public/audio/demo/<idioma>/` i l'índex a
 * `src/components/demo/voice-tracks.ts`, amb quan acaba cada paraula perquè
 * el text aparegui al ritme de la veu.
 */
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { DEMO_SECTORS } from '@/content/sectors';
import { LOCALES, type Locale } from '@/i18n/config';
import { dictionaries } from '@/i18n/dictionaries';
import { voiceKey, type VoiceTracks } from '@/components/demo/voice-key';
import { VOICE_TRACKS } from '@/components/demo/voice-tracks';
import { MODEL, voiceFor } from '@/components/demo/voices';

const ROOT = process.cwd();
const args = process.argv.slice(2);
const estimate = args.includes('--estimate');
const onlyLang = args.includes('--lang') ? args[args.indexOf('--lang') + 1] : undefined;

if (!estimate) {
  if (existsSync(join(ROOT, '.env.local'))) process.loadEnvFile(join(ROOT, '.env.local'));
  if (!process.env.ELEVENLABS_API_KEY) {
    console.error('Falta ELEVENLABS_API_KEY a .env.local.');
    process.exit(1);
  }
}

interface Alignment {
  characters: string[];
  character_end_times_seconds: number[];
}

/** Quan acaba cada paraula (ms), a partir de l'alineació per caràcters. */
function wordEnds(text: string, alignment: Alignment | null, durationMs: number) {
  const words = text.split(/\s+/);
  if (!alignment) {
    // Sense alineació, proporcional a la llargada de cada paraula.
    const total = text.replace(/\s+/g, '').length;
    let acc = 0;
    return words.map((word) => Math.round(((acc += word.length) / total) * durationMs));
  }
  const ends: number[] = [];
  let index = 0;
  for (const word of words) {
    index = text.indexOf(word, index) + word.length - 1;
    const time = alignment.character_end_times_seconds[index];
    ends.push(Math.round((time ?? durationMs / 1000) * 1000));
    index += 1;
  }
  return ends;
}

async function synthesize(text: string, voiceId: string, lang: Locale) {
  const response = await fetch(
    `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}/with-timestamps?output_format=mp3_44100_64`,
    {
      method: 'POST',
      headers: {
        'xi-api-key': process.env.ELEVENLABS_API_KEY!,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        text,
        model_id: MODEL,
        language_code: lang,
        voice_settings: { stability: 0.5, similarity_boost: 0.8, style: 0.2, speed: 1.05 },
      }),
    },
  );
  if (!response.ok) {
    throw new Error(`ElevenLabs ${response.status}: ${(await response.text()).slice(0, 300)}`);
  }
  const body = (await response.json()) as {
    audio_base64: string;
    alignment: Alignment | null;
  };
  const audio = Buffer.from(body.audio_base64, 'base64');
  const lastEnd = body.alignment?.character_end_times_seconds.at(-1);
  // A 64 kbps, 8 bytes per ms: l'estimació només es fa servir sense alineació.
  const durationMs = lastEnd ? lastEnd * 1000 : audio.length / 8;
  return { audio, ends: wordEnds(text, body.alignment, durationMs) };
}

const tracks: Partial<Record<Locale, VoiceTracks>> = structuredClone(VOICE_TRACKS);
let characters = 0;
let recorded = 0;

for (const lang of LOCALES) {
  if (onlyLang && lang !== onlyLang) continue;
  const current: VoiceTracks = (tracks[lang] ??= {});
  const dir = join(ROOT, 'public', 'audio', 'demo', lang);
  mkdirSync(dir, { recursive: true });

  for (const sector of DEMO_SECTORS) {
    const turns = dictionaries[lang].demos[sector.id].call;
    for (const [i, turn] of turns.entries()) {
      const id = `${sector.id}/${i}`;
      const voiceId = voiceFor(turn.from, sector);
      const key = voiceKey(turn.text, voiceId);
      const file = `/audio/demo/${lang}/${sector.id}-${i}.mp3`;
      if (current[id]?.key === key && existsSync(join(ROOT, 'public', file))) continue;

      characters += turn.text.length;
      if (estimate) continue;

      const { audio, ends } = await synthesize(turn.text, voiceId, lang);
      writeFileSync(join(ROOT, 'public', file), audio);
      current[id] = { file, key, ends };
      recorded += 1;
      console.log(`${lang} ${id} (${turn.from})`);
    }
  }
}

if (estimate) {
  console.log(`Per gravar: ${characters} caràcters (model ${MODEL}).`);
} else {
  const source = `// Generat per scripts/voice/generate-demo-audio.mts. No s'edita a mà.
import type { Locale } from '@/i18n/config';
import type { VoiceTracks } from './voice-key';

export const VOICE_TRACKS: Partial<Record<Locale, VoiceTracks>> = ${JSON.stringify(tracks, null, 2)};
`;
  writeFileSync(join(ROOT, 'src', 'components', 'demo', 'voice-tracks.ts'), source);
  console.log(`Gravats ${recorded} torns (${characters} caràcters).`);
}
