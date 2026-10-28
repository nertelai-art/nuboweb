import Link from 'next/link';
import type { Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/dictionaries';
import { SECTORS } from '@/content/sectors';
import { Icon } from '@/components/ui/icon';
import { SectorIcon } from './sector-icon';

/**
 * Sectors. A la landing (`variant="home"`), a escriptori la graella sencera; a
 * mòbil, perquè la pàgina no s'allargui, només els noms i un botó cap a la
 * pàgina de sectors. La pàgina (`variant="page"`) ensenya sempre la graella, i
 * «Escuchar ejemplo» torna a la demo de la landing.
 */
export function SectorsGrid({
  t,
  lang,
  variant = 'home',
}: {
  t: Dictionary['sectors'];
  lang: Locale;
  variant?: 'home' | 'page';
}) {
  const page = variant === 'page';
  const Heading = page ? 'h1' : 'h2';

  return (
    <section
      id="sectores"
      aria-labelledby="sectores-titulo"
      className={page ? 'pt-28 pb-24 sm:pt-36' : 'py-24 sm:py-32'}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {page ? (
          <Link
            href={`/${lang}`}
            className="font-display mb-8 inline-flex items-center gap-2 text-sm font-bold text-[var(--ink-muted)] hover:text-[var(--ink)]"
          >
            <Icon name="arrow" className="size-4 rotate-180" />
            {t.back}
          </Link>
        ) : null}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow" data-reveal>
              {t.eyebrow}
            </p>
            <Heading
              id="sectores-titulo"
              data-reveal
              className="font-display mt-4 text-3xl leading-tight font-extrabold sm:text-5xl"
            >
              {t.title} <span className="text-ribbon">{t.titleHighlight}</span>
            </Heading>
          </div>
          <p data-reveal className="max-w-sm text-[var(--ink-muted)]">
            {t.intro}
          </p>
        </div>

        {page ? null : (
          <div className="mt-8 md:hidden" data-reveal>
            <ul className="flex flex-wrap gap-2">
              {SECTORS.map((sector) => (
                <li
                  key={sector.id}
                  className="flex items-center gap-1.5 rounded-full border border-[var(--line)] bg-[var(--surface)] px-3 py-1.5 text-sm font-semibold"
                >
                  <SectorIcon name={sector.icon} className="size-4 text-[var(--teal-ink)]" />
                  {t.items[sector.id].name}
                </li>
              ))}
            </ul>
            <Link href={`/${lang}/sectors`} className="btn btn-primary mt-6 w-full">
              {t.seeAll}
              <Icon name="arrow" className="size-4" />
            </Link>
          </div>
        )}

        <ul
          className={`mt-14 gap-4 sm:grid-cols-2 lg:grid-cols-5 ${page ? 'grid' : 'hidden md:grid'}`}
        >
          {SECTORS.map((sector, index) => {
            const text = t.items[sector.id];
            return (
              <li
                key={sector.id}
                data-reveal
                style={{ ['--reveal-index' as string]: index % 5 }}
                className="card group flex flex-col p-6 transition duration-300 hover:-translate-y-1 hover:border-[color-mix(in_oklab,var(--color-nubo-teal)_60%,transparent)]"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-[var(--surface-2)] text-[var(--teal-ink)] transition group-hover:bg-[var(--color-nubo-teal)] group-hover:text-white">
                  <SectorIcon name={sector.icon} className="size-5" />
                </span>
                <h3 className="font-display mt-5 text-lg font-bold">{text.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[var(--ink-muted)]">
                  {text.pitch}
                </p>
                <ul className="mt-4 grid gap-1.5 border-t border-[var(--line)] pt-4 text-[0.8125rem] text-[var(--ink-faint)]">
                  {text.useCases.map((useCase) => (
                    <li key={useCase} className="flex gap-2">
                      <Icon
                        name="check"
                        className="mt-0.5 size-3.5 shrink-0 text-[var(--teal-ink)]"
                      />
                      {useCase}
                    </li>
                  ))}
                </ul>
                {sector.callerVoice ? (
                  <a
                    href={page ? `/${lang}#demo-${sector.id}` : `#demo-${sector.id}`}
                    className="font-display mt-auto flex items-center gap-1.5 pt-5 text-sm font-bold text-[var(--accent-ink)] hover:underline"
                  >
                    <Icon name="play" className="size-3.5" />
                    {t.listen}
                  </a>
                ) : null}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
