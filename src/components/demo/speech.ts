import type { VoiceKind } from '@/content/sectors';

export type { VoiceKind };

/**
 * La veu de la demo és la del navegador (Web Speech API): no costa res, no
 * necessita cap clau i funciona sense servidor. Sona com sona cada sistema;
 * la veu de debò del producte és una altra (pendent: àudios gravats).
 */

export function speechAvailable() {
  return typeof window !== 'undefined' && 'speechSynthesis' in window;
}

/** Durada estimada d'un torn dit en veu alta, en ms. */
export function turnDuration(text: string) {
  const words = text.split(/\s+/).length;
  return 500 + words * 270;
}

// L'API no diu si una veu és d'home o de dona: els noms masculins habituals
// de les veus de Windows, macOS, Android i Chrome en els quatre idiomes.
const MALE_VOICE =
  /pablo|[aá]lvaro|jorge|ra[uú]l|enrique|diego|carlos|dar[ií]o|alonso|arnau|gerard|jordi|tom[aá]s|juan|antonio|jaime|george|ryan|thomas|daniel|oliver|arthur|guy|david|mark|henri|paul|claude|r[ée]my|\bmale\b/i;

const normal = (lang: string) => lang.toLowerCase().replace('_', '-');

function voicesFor(lang: string) {
  if (!speechAvailable()) return [];
  const base = normal(lang).split('-')[0] ?? '';
  return window.speechSynthesis
    .getVoices()
    .filter((voice) => normal(voice.lang).split('-')[0] === base);
}

/** Si el sistema té alguna veu en aquest idioma. */
export function hasVoiceFor(lang: string) {
  return voicesFor(lang).length > 0;
}

/**
 * Dues veus en l'idioma de la pàgina (`lang`, p. ex. `ca-ES`), una per a
 * l'agent i una per a qui truca, i si pot ser del gènere del personatge. Si
 * el sistema només en té una, la mateixa amb un to diferent; si no en té cap,
 * `null` i la trucada va sense so.
 */
export function pickVoices(
  lang: string,
  callerKind: VoiceKind,
): { agent: SpeechSynthesisVoice; caller: SpeechSynthesisVoice; callerPitch: number } | null {
  const candidates = voicesFor(lang);
  if (candidates.length === 0) return null;
  // Primer les de la variant exacta i les «naturals» o de Google, que sonen millor.
  const score = (voice: SpeechSynthesisVoice) =>
    (normal(voice.lang) === normal(lang) ? 4 : 0) +
    (/natural|online|neural/i.test(voice.name) ? 3 : 0) +
    (/google/i.test(voice.name) ? 2 : 0);
  const ranked = candidates.toSorted((a, b) => score(b) - score(a));
  const female = ranked.filter((voice) => !MALE_VOICE.test(voice.name));
  const male = ranked.filter((voice) => MALE_VOICE.test(voice.name));

  // L'agent, amb veu de dona: és la del producte a totes les demos.
  const agent = female[0] ?? ranked[0]!;
  const others = ranked.filter((voice) => voice !== agent);
  const caller =
    (callerKind === 'male' ? male[0] : female.find((voice) => voice !== agent)) ??
    others[0] ??
    agent;
  // Si qui truca acaba amb la mateixa veu que l'agent, almenys un altre to.
  const callerPitch = caller === agent ? 0.8 : callerKind === 'male' ? 0.95 : 0.92;
  return { agent, caller, callerPitch };
}

/** Chrome carrega les veus tard: es demanen un cop i s'escolta quan arriben. */
export function subscribeVoices(onChange: () => void) {
  if (!speechAvailable()) return () => {};
  window.speechSynthesis.getVoices();
  window.speechSynthesis.addEventListener('voiceschanged', onChange);
  return () => window.speechSynthesis.removeEventListener('voiceschanged', onChange);
}
