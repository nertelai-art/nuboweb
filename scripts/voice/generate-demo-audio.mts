/**
 * Gravacions d'ElevenLabs dels torns de trucada de les demos, en els quatre idiomes.
 *
 *   pnpm voice:demos                  grava amb l'API el que falta o ha canviat
 *                                     (necessita ELEVENLABS_API_KEY a .env.local)
 *   pnpm voice:demos --estimate       només compta caràcters (no gasta res)
 *   pnpm voice:demos --jobs <fitxer>  escriu la llista del que falta, per gravar-ho
 *                                     des d'un altre lloc (p. ex. el connector)
 *   pnpm voice:demos --import         indexa els MP3 que ja són a public/audio/demo
 *   ... --lang ca                     només un idioma
 *
 * Els MP3 van a `public/audio/demo/<idioma>/<sector>-<torn>.mp3` i l'índex a
 * `src/components/demo/voice-tracks.ts`, amb quan acaba cada paraula perquè el
 * text aparegui al ritme de la veu. Amb l'API, el temps de cada paraula surt de
 * l'alineació; amb --import, es reparteix la durada de l'àudio.
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { DEMO_SECTORS } from '@/content/sectors';
import { LOCALES, type Locale } from '@/i18n/config';
import { dictionaries } from '@/i18n/dictionaries';
import { voiceKey, type VoiceTracks } from '@/components/demo/voice-key';
import { VOICE_TRACKS } from '@/components/demo/voice-tracks';
import { MODEL, voiceFor } from '@/components/demo/voices';
import { mp3DurationMs, spreadWordEnds } from './mp3';

const ROOT = process.cwd();
const args = process.argv.slice(2);
const flag = (name: string) => args.includes(name);
const value = (name: string) => (flag(name) ? args[args.indexOf(name) + 1] : undefined);
const estimate = flag('--estimate');
const jobsFile = value('--jobs');
const importing = flag('--import');
const onlyLang = value('--lang');
const usesApi = !estimate && !jobsFile && !importing;

if (usesApi) {
  if (existsSync(join(ROOT, '.env.local'))) process.loadEnvFile(join(ROOT, '.env.local'));
  if (!process.env.ELEVENLABS_API_KEY) {
    console.error('Falta ELEVENLABS_API_KEY a .env.local (o fes servir --jobs i --import).');
    process.exit(1);
  }
}

interface Alignment {
  characters: string[];
  character_end_times_seconds: number[];
}

/** Quan acaba cada paraula (ms), a partir de l'alineació per caràcters. */
function alignedWordEnds(text: string, alignment: Alignment) {
  const ends: number[] = [];
  let index = 0;
  for (const word of text.split(/\s+/)) {
    index = text.indexOf(word, index) + word.length - 1;
    ends.push(Math.round((alignment.character_end_times_seconds[index] ?? 0) * 1000));
    index += 1;
  }
  return ends;
}

async function synthesize(text: string, voiceId: string, lang: Locale) {
  const response = await fetch(
    `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}/with-timestamps?output_format=mp3_44100_128`,
    {
      method: 'POST',
      headers: {
        'xi-api-key': process.env.ELEVENLABS_API_KEY!,
        'content-type': 'application/json',
      },
      body: JSON.stringify({ text, model_id: MODEL, language_code: lang }),
    },
  );
  if (!response.ok) {
    throw new Error(`ElevenLabs ${response.status}: ${(await response.text()).slice(0, 300)}`);
  }
  const body = (await response.json()) as { audio_base64: string; alignment: Alignment | null };
  const audio = Buffer.from(body.audio_base64, 'base64');
  const ends = body.alignment
    ? alignedWordEnds(text, body.alignment)
    : spreadWordEnds(text, mp3DurationMs(audio));
  return { audio, ends };
}

const tracks: Partial<Record<Locale, VoiceTracks>> = structuredClone(VOICE_TRACKS);
const jobs: { file: string; lang: Locale; voice: string; text: string }[] = [];
let characters = 0;
let done = 0;

for (const lang of LOCALES) {
  if (onlyLang && lang !== onlyLang) continue;
  const current: VoiceTracks = (tracks[lang] ??= {});
  mkdirSync(join(ROOT, 'public', 'audio', 'demo', lang), { recursive: true });

  for (const sector of DEMO_SECTORS) {
    for (const [i, turn] of dictionaries[lang].demos[sector.id].call.entries()) {
      const id = `${sector.id}/${i}`;
      const voice = voiceFor(turn.from, sector);
      const key = voiceKey(turn.text, voice);
      const file = `/audio/demo/${lang}/${sector.id}-${i}.mp3`;
      const path = join(ROOT, 'public', file);
      if (current[id]?.key === key && existsSync(path)) continue;

      if (importing) {
        if (!existsSync(path)) continue;
        current[id] = {
          file,
          key,
          ends: spreadWordEnds(turn.text, mp3DurationMs(readFileSync(path))),
        };
        done += 1;
        continue;
      }

      characters += turn.text.length;
      if (jobsFile) jobs.push({ file, lang, voice, text: turn.text });
      if (!usesApi) continue;

      const { audio, ends } = await synthesize(turn.text, voice, lang);
      writeFileSync(path, audio);
      current[id] = { file, key, ends };
      done += 1;
      console.log(`${lang} ${id} (${turn.from})`);
    }
  }
}

if (estimate) {
  console.log(`Per gravar: ${characters} caràcters (model ${MODEL}).`);
} else if (jobsFile) {
  writeFileSync(jobsFile, JSON.stringify(jobs, null, 2));
  console.log(`${jobs.length} torns per gravar (${characters} caràcters) a ${jobsFile}.`);
} else {
  const source = `// Generat per scripts/voice/generate-demo-audio.mts. No s'edita a mà.
import type { Locale } from '@/i18n/config';
import type { VoiceTracks } from './voice-key';

export const VOICE_TRACKS: Partial<Record<Locale, VoiceTracks>> = ${JSON.stringify(tracks, null, 2)};
`;
  writeFileSync(join(ROOT, 'src', 'components', 'demo', 'voice-tracks.ts'), source);
  console.log(`${importing ? 'Indexats' : 'Gravats'} ${done} torns.`);
}
