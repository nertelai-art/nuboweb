import { describe, expect, it } from 'vitest';
import { negotiateLocale } from '@/i18n/config';
import { dictionaries } from '@/i18n/dictionaries';

describe('negotiateLocale', () => {
  it('tria la llengua del navegador si la tenim', () => {
    expect(negotiateLocale('ca-ES,ca;q=0.9,es;q=0.8')).toBe('ca');
    expect(negotiateLocale('fr-FR')).toBe('fr');
  });

  it('respecta l’ordre de preferència', () => {
    expect(negotiateLocale('de;q=0.9,en;q=0.5,fr;q=0.7')).toBe('fr');
  });

  it('sense coincidència ni capçalera, castellà', () => {
    expect(negotiateLocale('de-DE,it;q=0.8')).toBe('es');
    expect(negotiateLocale(null)).toBe('es');
  });
});

describe('diccionaris', () => {
  // Les claus ja les garanteix el tipus; aquí, que cap text quedi buit.
  const empty = (value: unknown, path: string): string[] => {
    if (typeof value === 'string') return value.trim() ? [] : [path];
    if (Array.isArray(value)) return value.flatMap((item, i) => empty(item, `${path}[${i}]`));
    if (value && typeof value === 'object')
      return Object.entries(value).flatMap(([key, item]) => empty(item, `${path}.${key}`));
    return [];
  };

  it.each(Object.entries(dictionaries))('%s no té cap text buit', (_, dictionary) => {
    expect(empty(dictionary, '')).toEqual([]);
  });

  it('les converses tenen els mateixos torns a tots els idiomes', () => {
    const shape = (locale: keyof typeof dictionaries) =>
      Object.fromEntries(
        Object.entries(dictionaries[locale].demos).map(([id, demo]) => [
          id,
          [demo.call.map((t) => t.from).join(), demo.whatsapp.map((t) => t.from).join()],
        ]),
      );
    for (const locale of Object.keys(dictionaries) as (keyof typeof dictionaries)[]) {
      expect(shape(locale)).toEqual(shape('es'));
    }
  });
});
