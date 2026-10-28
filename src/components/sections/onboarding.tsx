import type { Dictionary } from '@/i18n/dictionaries';
import { Icon, type IconName } from '@/components/ui/icon';

const STEP_COLORS = ['#2160af', '#12978f', '#88c023'];
const GUARANTEE_ICONS: IconName[] = ['shield', 'sliders', 'people'];

export function Onboarding({ t }: { t: Dictionary['onboarding'] }) {
  return (
    <section aria-labelledby="empezar-titulo" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="eyebrow" data-reveal>
          {t.eyebrow}
        </p>
        <h2
          id="empezar-titulo"
          data-reveal
          className="font-display mt-4 max-w-3xl text-3xl leading-tight font-extrabold sm:text-5xl"
        >
          {t.title} <span className="text-ribbon">{t.titleHighlight}</span>
        </h2>

        <ol className="relative mt-14 grid gap-8 lg:grid-cols-3 lg:gap-6">
          <span
            aria-hidden="true"
            className="absolute top-6 right-[16%] left-[16%] hidden h-0.5 bg-[image:var(--ribbon)] opacity-60 lg:block"
          />
          {t.steps.map((step, index) => (
            <li
              key={step.title}
              data-reveal
              style={{ ['--reveal-index' as string]: index }}
              className="relative flex gap-5 lg:flex-col lg:items-center lg:text-center"
            >
              <span
                className="font-display relative flex size-12 shrink-0 items-center justify-center rounded-full text-lg font-extrabold"
                style={{ background: STEP_COLORS[index], color: index === 2 ? '#040a14' : '#fff' }}
              >
                {index + 1}
              </span>
              <span>
                <strong className="font-display text-xl">{step.title}</strong>
                <span className="mt-2 block max-w-sm leading-relaxed text-[var(--ink-muted)]">
                  {step.text}
                </span>
              </span>
            </li>
          ))}
        </ol>

        <ul className="mt-20 grid gap-4 md:grid-cols-3">
          {t.guarantees.map((item, index) => (
            <li
              key={item.title}
              data-reveal
              style={{ ['--reveal-index' as string]: index }}
              className="card flex gap-4 p-6"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[var(--surface-2)] text-[var(--teal-ink)]">
                <Icon name={GUARANTEE_ICONS[index] ?? 'check'} className="size-5" />
              </span>
              <span>
                <strong className="font-display">{item.title}</strong>
                <span className="mt-1 block text-sm leading-relaxed text-[var(--ink-muted)]">
                  {item.text}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
