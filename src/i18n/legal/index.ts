import type { Locale } from '../config';
import { ca } from './ca';
import { en } from './en';
import { es } from './es';
import { fr } from './fr';
import type { LegalDictionary, LegalDocId } from './types';

export type { LegalDictionary, LegalDocId };

const legal: Record<Locale, LegalDictionary> = { es, ca, en, fr };

export function getLegal(locale: Locale): LegalDictionary {
  return legal[locale];
}

/** Ruta de cada document, la mateixa en tots els idiomes. */
export const LEGAL_PATHS: Record<LegalDocId, string> = {
  legal: '/legal',
  privacy: '/privacy',
  cookies: '/cookies',
};

export const LEGAL_DOCS = Object.keys(LEGAL_PATHS) as LegalDocId[];
