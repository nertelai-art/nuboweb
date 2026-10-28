import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Reveal } from '@/components/layout/reveal';
import { SiteFooter } from '@/components/layout/site-footer';
import { SiteHeader } from '@/components/layout/site-header';
import { Contact } from '@/components/sections/contact';
import { SectorsGrid } from '@/components/sections/sectors-grid';
import { isLocale, LOCALE_TAGS, LOCALES } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';

type Props = { params: Promise<{ lang: string }> };

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getDictionary(lang).sectors;
  return {
    title: t.pageTitle,
    description: t.pageDescription,
    alternates: {
      canonical: `/${lang}/sectors`,
      languages: {
        ...Object.fromEntries(LOCALES.map((l) => [LOCALE_TAGS[l].html, `/${l}/sectors`])),
        'x-default': '/es/sectors',
      },
    },
  };
}

/**
 * Els sectors en una pàgina pròpia: a mòbil, la landing només en porta els noms
 * i un botó cap aquí, perquè no s'allargui. A escriptori la landing els porta
 * sencers igualment.
 */
export default async function SectorsPage({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang);
  const base = `/${lang}`;

  return (
    <>
      <SiteHeader lang={lang} t={t.nav} base={base} />
      <main id="contenido">
        <SectorsGrid t={t.sectors} lang={lang} variant="page" />
        <Contact t={t.contact} />
      </main>
      <SiteFooter t={t.footer} nav={t.nav} base={base} />
      <Reveal />
    </>
  );
}
