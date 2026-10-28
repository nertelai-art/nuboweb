import type { Locale } from '../config';
import { ca } from './ca';
import { en } from './en';
import { es, type Dictionary } from './es';
import { fr } from './fr';

export type { Dictionary };

export const dictionaries: Record<Locale, Dictionary> = { es, ca, en, fr };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
