import type { Dictionary } from '@/i18n/dictionaries';
import { NuboMark } from '@/components/layout/nubo-mark';
import { site } from '@/content/site';

// Les peces de Nubo que ja té el client: l'agent hi viu a dins.
const NODES = [
  { key: 'centralita', href: site.centralita, x: 50, y: 6 },
  { key: 'fijo', href: site.fijo, x: 86, y: 30 },
  { key: 'movil', href: site.movil, x: 80, y: 84 },
  { key: 'whatsapp', href: null, x: 20, y: 84 },
  { key: 'crm', href: null, x: 14, y: 30 },
] as const;

const POINT_COLORS = ['#2160af', '#12978f', '#88c023'];

export function Ecosystem({ t }: { t: Dictionary['ecosystem'] }) {
  return (
    <section
      aria-labelledby="ecosistema-titulo"
      className="relative overflow-hidden bg-[var(--bg-deep)] py-24 sm:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="eyebrow" data-reveal>
            {t.eyebrow}
          </p>
          <h2
            id="ecosistema-titulo"
            data-reveal
            className="font-display mt-4 text-3xl leading-tight font-extrabold sm:text-5xl"
          >
            {t.title} <span className="text-ribbon">{t.titleHighlight}</span>
          </h2>
          <ul className="mt-10 grid gap-6">
            {t.points.map((point, index) => (
              <li
                key={point.title}
                data-reveal="left"
                style={{ ['--reveal-index' as string]: index }}
                className="flex gap-4"
              >
                <span
                  aria-hidden="true"
                  className="mt-1 h-10 w-1 shrink-0 rounded-full"
                  style={{ background: POINT_COLORS[index] }}
                />
                <span>
                  <strong className="font-display text-lg">{point.title}</strong>
                  <span className="mt-1 block leading-relaxed text-[var(--ink-muted)]">
                    {point.text}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div data-reveal="scale" className="relative mx-auto aspect-square w-full max-w-[34rem]">
          <svg viewBox="0 0 100 100" className="absolute inset-0 size-full" aria-hidden="true">
            <defs>
              <linearGradient id="eco-line" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#2160af" />
                <stop offset="0.5" stopColor="#12978f" />
                <stop offset="1" stopColor="#88c023" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="30" fill="none" stroke="var(--line)" strokeWidth="0.3" />
            <circle cx="50" cy="50" r="44" fill="none" stroke="var(--line)" strokeWidth="0.3" />
            {NODES.map((node) => (
              <line
                key={node.key}
                x1="50"
                y1="50"
                x2={node.x}
                y2={node.y}
                stroke="url(#eco-line)"
                strokeWidth="0.35"
                strokeDasharray="1.2 1.6"
                className="eco-flow"
              />
            ))}
          </svg>

          <div className="absolute top-1/2 left-1/2 flex size-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[2rem] border border-[var(--line-strong)] bg-[var(--surface)] shadow-[0_0_80px_-10px_rgb(18_151_143/0.5)] sm:size-32">
            <NuboMark className="h-12 w-auto sm:h-14" />
          </div>

          {NODES.map((node) => {
            const text = t.nodes[node.key];
            const content = (
              <>
                <span className="font-display block text-[0.8125rem] font-bold sm:text-sm">
                  {text.label}
                </span>
                <span className="block text-[0.6875rem] text-[var(--ink-faint)]">{text.note}</span>
              </>
            );
            const className =
              'absolute w-28 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-[var(--line)] bg-[var(--surface)] px-3 py-2 text-center shadow-[var(--shadow)] sm:w-40';
            const style = { left: `${node.x}%`, top: `${node.y}%` };
            return node.href ? (
              <a
                key={node.key}
                href={node.href}
                className={`${className} transition hover:border-[var(--color-nubo-teal)]`}
                style={style}
              >
                {content}
              </a>
            ) : (
              <div key={node.key} className={className} style={style}>
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
