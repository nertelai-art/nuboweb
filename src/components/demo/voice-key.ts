/**
 * Clau d'un àudio gravat: depèn del text i de la veu. Si el guió canvia, la
 * clau ja no coincideix i la demo torna a la veu del navegador fins que es
 * regrava (`pnpm voice:demos`). La comparteixen el generador i el reproductor.
 */
export function voiceKey(text: string, voiceId: string) {
  // FNV-1a de 32 bits: prou per detectar canvis, sense dependències.
  let hash = 0x811c9dc5;
  for (const char of `${voiceId}\u0000${text}`) {
    hash ^= char.codePointAt(0)!;
    hash = Math.imul(hash, 0x01000193) >>> 0;
  }
  return hash.toString(36);
}

/** Un torn gravat: el fitxer i quan acaba cada paraula, en ms. */
export interface VoiceTrack {
  file: string;
  key: string;
  ends: number[];
}

/** Torns gravats d'un idioma, per `sector/índex`. */
export type VoiceTracks = Record<string, VoiceTrack>;
