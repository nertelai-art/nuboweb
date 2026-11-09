import type { MetadataRoute } from 'next';
import { site } from '@/content/site';
import { LOCALE_TAGS, LOCALES } from '@/i18n/config';

const PATHS = ['', '/sectors'];

/** Totes les pàgines en els quatre idiomes, cadascuna amb les seves alternatives. */
export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.flatMap((path) =>
    LOCALES.map((locale) => ({
      url: `${site.url}/${locale}${path}`,
      changeFrequency: 'monthly' as const,
      priority: path === '' ? 1 : 0.7,
      alternates: {
        languages: Object.fromEntries(
          LOCALES.map((l) => [LOCALE_TAGS[l].html, `${site.url}/${l}${path}`]),
        ),
      },
    })),
  );
}
