import { notFound } from 'next/navigation';
import { CallDemo } from '@/components/demo/call-demo';
import { Reveal } from '@/components/layout/reveal';
import { SiteFooter } from '@/components/layout/site-footer';
import { SiteHeader } from '@/components/layout/site-header';
import { BeforeAfter } from '@/components/sections/before-after';
import { Benefits } from '@/components/sections/benefits';
import { Contact } from '@/components/sections/contact';
import { Ecosystem } from '@/components/sections/ecosystem';
import { Faq } from '@/components/sections/faq';
import { Group } from '@/components/sections/group';
import { Hero } from '@/components/sections/hero';
import { Onboarding } from '@/components/sections/onboarding';
import { SectorsGrid } from '@/components/sections/sectors-grid';
import { NShowcase } from '@/components/three/n-showcase';
import { site } from '@/content/site';
import { isLocale, LOCALE_TAGS } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';

/**
 * L'ordre: què fa (hero), com funciona (la N i l'esquema), prova-ho
 * (simulador), què hi guanyes, el dia a dia, per a qui, per què Nubo, com
 * s'hi arriba, el grup, dubtes i contacte. Un sol botó principal: escoltar
 * una trucada.
 */
export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: site.product,
    description: t.meta.description,
    inLanguage: LOCALE_TAGS[lang].html,
    provider: {
      '@type': 'Organization',
      name: site.company,
      url: site.telecom,
      telephone: '+34900264324',
      email: site.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'C/ Mas Plentis, 14 b',
        postalCode: '17458',
        addressLocality: 'Fornells de la Selva',
        addressRegion: 'Girona',
        addressCountry: 'ES',
      },
      sameAs: [site.instagram, site.linkedin],
    },
    areaServed: 'ES',
  };

  return (
    <>
      <SiteHeader lang={lang} t={t.nav} />
      <main id="contenido">
        <Hero t={t.hero} />
        <NShowcase t={t.how} />
        <section id="demo" aria-labelledby="demo-titulo" className="relative py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="eyebrow" data-reveal>
                {t.demo.eyebrow}
              </p>
              <h2
                id="demo-titulo"
                data-reveal
                className="font-display mt-4 text-3xl leading-tight font-extrabold sm:text-5xl"
              >
                {t.demo.title} <span className="text-ribbon">{t.demo.titleHighlight}</span>
              </h2>
              <p data-reveal className="mt-5 text-lg text-[var(--ink-muted)]">
                {t.demo.subtitle}
              </p>
            </div>
            <div className="mt-12" data-reveal>
              <CallDemo
                t={t.demo}
                sectors={t.sectors.items}
                demos={t.demos}
                speechLang={LOCALE_TAGS[lang].speech}
              />
            </div>
          </div>
        </section>
        <Benefits t={t.benefits} />
        <BeforeAfter t={t.compare} />
        <SectorsGrid t={t.sectors} />
        <Ecosystem t={t.ecosystem} />
        <Onboarding t={t.onboarding} />
        <Group t={t.group} />
        <Faq t={t.faq} />
        <Contact t={t.contact} />
      </main>
      <SiteFooter t={t.footer} nav={t.nav} />
      <Reveal />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
