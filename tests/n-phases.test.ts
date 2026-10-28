import { describe, expect, it } from 'vitest';
import { N_PHASES, phase, STEP_COUNT, stepFor } from '@/components/three/n-phases';

describe('fases de «Cómo funciona»', () => {
  it('cada progrés té un pas, en ordre, i el final és l’últim', () => {
    const steps = [0, 0.1, 0.3, 0.5, 0.8, 1].map(stepFor);
    expect(steps).toEqual([...steps].sort((a, b) => a - b));
    expect(stepFor(0)).toBe(0);
    expect(stepFor(1)).toBe(STEP_COUNT - 1);
  });

  it('la N s’ha muntat abans que entri la primera trucada', () => {
    const firstCall = [0, 1].find((p) => stepFor(p) === 1) ?? 0.22;
    expect(N_PHASES.assemble[1]).toBeLessThanOrEqual(firstCall + 0.22);
    expect(phase(0.22, N_PHASES.assemble)).toBe(1);
  });

  it('les fases cobreixen tot el recorregut sense forats', () => {
    const ranges = Object.values(N_PHASES).toSorted((a, b) => a[0] - b[0]);
    expect(ranges[0]?.[0]).toBe(0);
    expect(Math.max(...ranges.map((r) => r[1]))).toBe(1);
    let reach = 0;
    for (const [start, end] of ranges) {
      expect(start).toBeLessThanOrEqual(reach + 0.15);
      reach = Math.max(reach, end);
    }
  });

  it('phase queda dins de 0–1', () => {
    expect(phase(-1, N_PHASES.assemble)).toBe(0);
    expect(phase(2, N_PHASES.assemble)).toBe(1);
    expect(phase(0.1, N_PHASES.assemble)).toBeCloseTo(0.5, 5);
  });
});
