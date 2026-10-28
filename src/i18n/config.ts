/**
 * Idiomes de la web. Cada un té URL pròpia (`/es`, `/ca`, `/en`, `/fr`), amb
 * metadades i `hreflang`: res de traduir per JS sobre una sola URL.
 * El castellà va primer i és el de reserva: és el principal de nubotelecom.com.
 */
export const LOCALES = ['es', 'ca', 'en', 'fr'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'es';

export const LOCALE_LABELS: Record<Locale, { short: string; name: string }> = {
  es: { short: 'ES', name: 'Español' },
  ca: { short: 'CA', name: 'Català' },
  en: { short: 'EN', name: 'English' },
  fr: { short: 'FR', name: 'Français' },
};

/** Etiqueta BCP 47 per a `<html lang>`, Open Graph i la veu de la demo. */
export const LOCALE_TAGS: Record<Locale, { html: string; og: string; speech: string }> = {
  es: { html: 'es', og: 'es_ES', speech: 'es-ES' },
  ca: { html: 'ca', og: 'ca_ES', speech: 'ca-ES' },
  en: { html: 'en', og: 'en_GB', speech: 'en-GB' },
  fr: { html: 'fr', og: 'fr_FR', speech: 'fr-FR' },
};

export function isLocale(value: string | undefined): value is Locale {
  return LOCALES.includes(value as Locale);
}

/**
 * L'idioma preferit segons `Accept-Language`, o el de reserva. Només mira la
 * llengua (`ca-ES` → `ca`) i respecta l'ordre de preferència (`q`).
 */
export function negotiateLocale(header: string | null): Locale {
  if (!header) return DEFAULT_LOCALE;
  const ranked = header
    .split(',')
    .map((part) => {
      const [tag = '', ...params] = part.trim().split(';');
      const q = params.find((param) => param.trim().startsWith('q='));
      return { lang: tag.toLowerCase().split('-')[0], q: q ? Number(q.split('=')[1]) : 1 };
    })
    .filter((entry) => !Number.isNaN(entry.q))
    .toSorted((a, b) => b.q - a.q);
  return (
    (ranked.find((entry) => isLocale(entry.lang))?.lang as Locale | undefined) ?? DEFAULT_LOCALE
  );
}
