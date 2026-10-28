import type { Dictionary } from '@/i18n/dictionaries';

export function Faq({ t }: { t: Dictionary['faq'] }) {
  return (
    <section
      id="preguntas"
      aria-labelledby="preguntas-titulo"
      className="bg-[var(--bg-deep)] py-24 sm:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow" data-reveal>
            {t.eyebrow}
          </p>
          <h2
            id="preguntas-titulo"
            data-reveal
            className="font-display mt-4 text-3xl leading-tight font-extrabold sm:text-5xl"
          >
            {t.title} <span className="text-ribbon">{t.titleHighlight}</span>
          </h2>
          <p data-reveal className="mt-5 max-w-sm text-[var(--ink-muted)]">
            {t.intro}
          </p>
        </div>

        <div className="grid gap-3">
          {t.items.map((item, index) => (
            <details
              key={item.q}
              data-reveal
              style={{ ['--reveal-index' as string]: index % 4 }}
              className="group card p-0 shadow-none open:border-[var(--line-strong)] open:shadow-[var(--shadow)]"
              name="faq"
            >
              <summary className="font-display flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-lg font-bold [&::-webkit-details-marker]:hidden">
                {item.q}
                <span
                  aria-hidden="true"
                  className="flex size-8 shrink-0 items-center justify-center rounded-full border border-[var(--line-strong)] transition group-open:rotate-45 group-open:border-[var(--color-nubo-teal)] group-open:text-[var(--teal-ink)]"
                >
                  +
                </span>
              </summary>
              <p className="px-6 pb-6 leading-relaxed text-[var(--ink-muted)]">{item.a}</p>
            </details>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: t.items.map((item) => ({
              '@type': 'Question',
              name: item.q,
              acceptedAnswer: { '@type': 'Answer', text: item.a },
            })),
          }),
        }}
      />
    </section>
  );
}
