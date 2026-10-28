import { N_POLYGONS, N_SIZE } from './nubo-shapes';

/**
 * La N de Nubo, del logo de debò. `nubo-shapes.ts` és la zona visible de cada
 * cinta mesurada fila a fila sobre el PNG gran (`scripts/brand/`); els colors i
 * els degradats no es redibuixen: surten de `public/brand/nubo-n.png`, la N
 * retallada del mateix PNG.
 *
 * A dalt, la diagonal verd blavós tapa el cap del pal blau; a baix, passa per
 * davant del peu rodó del pal llima. Cada polígon ja és només la part que es veu.
 */
export { N_SIZE };

export type Ribbon = keyof typeof N_POLYGONS;
export const RIBBONS: Ribbon[] = ['blue', 'teal', 'lime'];

/** Punts [x, y] en px del logo (y cap avall). */
export function ribbonPoints(ribbon: Ribbon): [number, number][] {
  const flat = N_POLYGONS[ribbon];
  const points: [number, number][] = [];
  for (let i = 0; i < flat.length; i += 2) points.push([flat[i]!, flat[i + 1]!]);
  return points;
}

/** El mateix polígon com a camí SVG (viewBox 0 0 578 566). */
export function ribbonPath(ribbon: Ribbon) {
  return ribbonPoints(ribbon)
    .map(([x, y], i) => `${i ? 'L' : 'M'}${x} ${y}`)
    .join('')
    .concat('Z');
}

/** Colors de les cintes, per a les parets laterals en 3D i els logos en vector. */
export const RIBBON_COLORS: Record<Ribbon, { top: string; base: string; bottom: string }> = {
  blue: { top: '#7393d3', base: '#2a63b0', bottom: '#2a63b0' },
  teal: { top: '#117a6e', base: '#1a978d', bottom: '#11786b' },
  lime: { top: '#88c02a', base: '#88c02a', bottom: '#a9d265' },
};
