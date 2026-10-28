import type { Dictionary } from '@/i18n/dictionaries';
import { Icon } from '@/components/ui/icon';

// Qualitatiu a posta: cap percentatge que no puguem sostenir amb dades.
export function BeforeAfter({ t }: { t: Dictionary['compare'] }) {
  return (
    <section aria-labelledby="antes-titulo" className="bg-[var(--bg-deep)] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="eyebrow" data-reveal>
          {t.eyebrow}
        </p>
        <h2
          id="antes-titulo"
          data-reveal
          className="font-display mt-4 max-w-3xl text-3xl leading-tight font-extrabold sm:text-5xl"
        >
          {t.title} <span className="text-ribbon">{t.titleHighlight}</span>
        </h2>

        <div className="card mt-12 overflow-hidden p-0" data-reveal="scale">
          <div className="font-display hidden grid-cols-3 bg-[var(--surface-2)] text-sm font-bold sm:grid">
            <span className="px-6 py-4 text-[var(--ink-faint)]">{t.colSituation}</span>
            <span className="px-6 py-4 text-[var(--ink-muted)]">{t.colToday}</span>
            <span className="px-6 py-4 text-[var(--accent-ink)]">{t.colWith}</span>
          </div>
          <ul>
            {t.rows.map(([situation, before, after], index) => (
              <li
                key={situation}
                data-reveal
                style={{ ['--reveal-index' as string]: index }}
                className="grid gap-1 border-t border-[var(--line)] px-6 py-5 first:border-t-0 sm:grid-cols-3 sm:gap-0 sm:px-0 sm:py-0 sm:first:border-t"
              >
                <span className="font-display font-bold sm:px-6 sm:py-5">{situation}</span>
                <span className="flex gap-2 text-[var(--ink-faint)] sm:px-6 sm:py-5">
                  <Icon name="close" className="mt-0.5 size-4 shrink-0" />
                  <span>
                    <span className="sr-only">{t.colToday}: </span>
                    {before}
                  </span>
                </span>
                <span className="flex gap-2 sm:bg-[color-mix(in_oklab,var(--color-nubo-teal)_8%,transparent)] sm:px-6 sm:py-5">
                  <Icon name="check" className="mt-0.5 size-4 shrink-0 text-[var(--accent-ink)]" />
                  <span>
                    <span className="sr-only">{t.colWith}: </span>
                    {after}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
