/**
 * Fases de «Cómo funciona» (0–1 del scroll de la secció). Sense three.js:
 * l'HTML les llegeix per saber quin pas és actiu i l'escena per moure la N.
 */
export const N_PHASES = {
  /** Les tres cintes del logo entren volant i formen la N. */
  assemble: [0, 0.2],
  /** La N es fa petita i es queda al centre, com a agent. */
  shrink: [0.18, 0.3],
  /** Ones de veu: l'agent parla i entén. */
  waves: [0.44, 0.72],
  /** La N gira poc a poc fins a quedar de cara. */
  settle: [0.6, 1],
} as const;

export const STEP_COUNT = 4;

/** Pas actiu: 0 la N, 1 entra la trucada, 2 entén, 3 actua. */
export function stepFor(progress: number): number {
  if (progress < 0.22) return 0;
  if (progress < 0.46) return 1;
  if (progress < 0.7) return 2;
  return 3;
}

export function phase(progress: number, [start, end]: readonly [number, number]): number {
  return Math.min(1, Math.max(0, (progress - start) / (end - start)));
}
