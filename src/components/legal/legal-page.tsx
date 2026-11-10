import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SiteFooter } from '@/components/layout/site-footer';
import { SiteHeader } from '@/components/layout/site-header';
import { holder } from '@/content/site';
import { isLocale, LOCALE_TAGS, LOCALES, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
import { getLegal, LEGAL_PATHS, type LegalDocId } from '@/i18n/legal';
import type { LegalBlock, LegalDictionary } from '@/i18n/legal/types';

export type LegalPageProps = { params: Promise<{ lang: string }> };

export function legalStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function legalMetadata(
  { params }: LegalPageProps,
  doc: LegalDocId,
): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getLegal(lang).docs[doc];
  const path = LEGAL_PATHS[doc];
  return {
    title: `${t.title} · Nubo IA`,
    description: t.description,
    alternates: {
      canonical: `/${lang}${path}`,
      languages: {
        ...Object.fromEntries(LOCALES.map((l) => [LOCALE_TAGS[l].html, `/${l}${path}`])),
        'x-default': `/es${path}`,
      },
    },
  };
}

function Holder({ t }: { t: LegalDictionary }) {
  const rows: [string, React.ReactNode][] = [
    [t.holderLabels.name, holder.name],
    [t.holderLabels.nif, holder.nif],
    [t.holderLabels.address, holder.address],
    [
      t.holderLabels.phone,
      <a key="p" href={holder.phoneHref} className="underline-offset-2 hover:underline">
        {holder.phone}
      </a>,
    ],
    [
      t.holderLabels.email,
      <a key="e" href={`mailto:${holder.email}`} className="underline-offset-2 hover:underline">
        {holder.email}
      </a>,
    ],
    [t.holderLabels.registry, t.registry(holder.registry)],
  ];
  return (
    <dl className="grid gap-x-6 gap-y-2 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5 sm:grid-cols-[auto_1fr]">
      {rows.map(([label, value]) => (
        <div key={label} className="contents">
          <dt className="text-sm font-semibold text-[var(--ink-muted)]">{label}</dt>
          <dd className="min-w-0 [overflow-wrap:anywhere]">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

function Block({ block, t }: { block: LegalBlock; t: LegalDictionary }) {
  if (typeof block === 'string') return <p>{block}</p>;
  if ('holder' in block) return <Holder t={t} />;
  if ('list' in block)
    return (
      <ul className="grid list-disc gap-2 pl-5 marker:text-[var(--color-nubo-teal)]">
        {block.list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  if ('links' in block)
    return (
      <ul className="flex flex-wrap gap-2">
        {block.links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              rel="noopener noreferrer"
              target="_blank"
              className="inline-flex rounded-full border border-[var(--line-strong)] px-3.5 py-1.5 text-sm font-semibold transition hover:border-[var(--color-nubo-teal)]"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    );
  return (
    <div className="overflow-x-auto rounded-2xl border border-[var(--line)]">
      <table className="w-full min-w-[32rem] text-left text-sm">
        <thead className="bg-[var(--surface-2)] text-[var(--ink-muted)]">
          <tr>
            {block.table.head.map((cell) => (
              <th key={cell} scope="col" className="px-4 py-3 font-semibold">
                {cell}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {block.table.rows.map((row) => (
            <tr key={row.join('|')} className="border-t border-[var(--line)]">
              {row.map((cell, i) => (
                <td
                  key={cell}
                  className={`px-4 py-3 ${i === 0 ? 'font-mono text-[0.8rem] whitespace-nowrap' : ''}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Pàgina d'un document legal: capçalera i peu de la web, i el text a una columna. */
export async function LegalPage({ params, doc }: LegalPageProps & { doc: LegalDocId }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale: Locale = lang;
  const t = getDictionary(locale);
  const legal = getLegal(locale);
  const content = legal.docs[doc];
  const base = `/${locale}`;

  return (
    <>
      <SiteHeader lang={locale} t={t.nav} base={base} />
      <main id="contenido" className="px-4 pt-32 pb-20 sm:px-6 lg:px-8">
        <article className="mx-auto grid max-w-3xl gap-10">
          <header className="grid gap-3">
            <p className="font-display text-xs font-bold tracking-[0.14em] text-[var(--ink-faint)] uppercase">
              {legal.nav.label}
            </p>
            <h1 className="font-display text-4xl font-extrabold text-balance sm:text-5xl">
              {content.title}
            </h1>
            <p className="text-sm text-[var(--ink-faint)]">{legal.updated}</p>
          </header>
          {content.sections.map((section, i) => (
            <section
              key={section.heading ?? i}
              className="grid gap-4 leading-relaxed text-[var(--ink-muted)]"
            >
              {section.heading ? (
                <h2 className="font-display text-xl font-bold text-[var(--ink)]">
                  {section.heading}
                </h2>
              ) : null}
              {section.blocks.map((block, j) => (
                <Block key={j} block={block} t={legal} />
              ))}
            </section>
          ))}
        </article>
      </main>
      <SiteFooter t={t.footer} nav={t.nav} legal={legal.nav} lang={locale} base={base} />
    </>
  );
}
