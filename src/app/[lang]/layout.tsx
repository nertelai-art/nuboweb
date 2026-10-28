import type { Metadata, Viewport } from 'next';
import { Figtree, Montserrat } from 'next/font/google';
import { notFound } from 'next/navigation';
import { site } from '@/content/site';
import { DemoBadge } from '@/demo-kit/DemoBadge';
import { DemoTracker } from '@/demo-kit/DemoTracker';
import { isLocale, LOCALE_TAGS, LOCALES } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
import '../globals.css';

// Montserrat és la lletra de nubotelecom.com; Figtree, la del text llarg.
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-montserrat',
  display: 'swap',
});
const figtree = Figtree({ subsets: ['latin'], variable: '--font-figtree', display: 'swap' });

type Props = { children: React.ReactNode; params: Promise<{ lang: string }> };

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getDictionary(lang).meta;
  return {
    metadataBase: new URL(site.url),
    title: t.title,
    description: t.description,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        ...Object.fromEntries(LOCALES.map((l) => [LOCALE_TAGS[l].html, `/${l}`])),
        'x-default': '/es',
      },
    },
    openGraph: {
      type: 'website',
      locale: LOCALE_TAGS[lang].og,
      siteName: site.product,
      title: t.ogTitle,
      description: t.ogDescription,
    },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f4f7fb' },
    { media: '(prefers-color-scheme: dark)', color: '#07111f' },
  ],
};

// Abans de pintar: el tema desat (clar si no n'hi ha cap) i la marca que hi ha
// JS, perquè les entrades parteixin d'amagat només quan es poden mostrar.
const BOOT = `(function(){var d=document.documentElement;d.classList.add('js');try{d.dataset.theme=localStorage.getItem('nubo-theme')==='dark'?'dark':'light'}catch(e){d.dataset.theme='light'}})()`;

export default async function LocaleLayout({ children, params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang);

  return (
    <html
      lang={LOCALE_TAGS[lang].html}
      data-theme="light"
      className={`${montserrat.variable} ${figtree.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: BOOT }} />
      </head>
      <body>
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-[var(--color-nubo-lime)] focus:px-4 focus:py-2 focus:font-bold focus:text-[var(--color-night-950)]"
        >
          {t.nav.skip}
        </a>
        {children}
        {/* Demo per a un lead (src/demo-kit): seguiment i insígnia. Es treuen quan sigui la web de Nubo. */}
        <DemoTracker site="nubo-ia" />
        <DemoBadge site="nubo-ia" locale={lang === 'ca' ? 'ca' : 'es'} />
      </body>
    </html>
  );
}
