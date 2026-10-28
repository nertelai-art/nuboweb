import type { Dictionary } from '@/i18n/dictionaries';
import { Icon, type IconName } from '@/components/ui/icon';

type T = Dictionary['benefits'];

/**
 * «Ventajas» com a bento: cada avantatge porta una peça petita de producte
 * que el demostra (registre de trucades, agenda que s'omple, fitxa feta,
 * transferència, salutacions en quatre idiomes, panell). Res d'emojis: si
 * no es pot ensenyar, no és un avantatge.
 */
export function Benefits({ t }: { t: T }) {
  return (
    <section id="ventajas" aria-labelledby="ventajas-titulo" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow" data-reveal>
            {t.eyebrow}
          </p>
          <h2
            id="ventajas-titulo"
            data-reveal
            className="font-display mt-4 text-3xl leading-tight font-extrabold sm:text-5xl"
          >
            {t.title} <span className="text-ribbon">{t.titleHighlight}</span>
          </h2>
        </div>

        <ul className="mt-14 grid gap-4 md:grid-cols-6">
          <Tile
            className="md:col-span-6 lg:col-span-3 lg:row-span-2"
            index={0}
            icon="phone"
            color="#2160af"
            title={t.calls.title}
            text={t.calls.text}
            big
          >
            <CallsIllustration t={t.calls} />
          </Tile>
          <Tile
            className="md:col-span-3"
            index={1}
            icon="calendar"
            color="#12978f"
            title={t.bookings.title}
            text={t.bookings.text}
          >
            <BookingsIllustration days={t.bookings.days} />
          </Tile>
          <Tile
            className="md:col-span-3"
            index={2}
            icon="user"
            color="#88c023"
            title={t.leads.title}
            text={t.leads.text}
          >
            <LeadIllustration t={t.leads} />
          </Tile>
          <Tile
            className="md:col-span-3 lg:col-span-2"
            index={0}
            icon="forward"
            color="#2160af"
            title={t.handoff.title}
            text={t.handoff.text}
          >
            <HandoffIllustration t={t.handoff} />
          </Tile>
          <Tile
            className="md:col-span-3 lg:col-span-2"
            index={1}
            icon="globe"
            color="#12978f"
            title={t.languages.title}
            text={t.languages.text}
          >
            <LanguagesIllustration greetings={t.languages.greetings} />
          </Tile>
          <Tile
            className="md:col-span-6 lg:col-span-2"
            index={2}
            icon="chart"
            color="#88c023"
            title={t.records.title}
            text={t.records.text}
          >
            <RecordsIllustration t={t.records} />
          </Tile>
        </ul>
      </div>
    </section>
  );
}

function Tile({
  className,
  index,
  icon,
  color,
  title,
  text,
  big,
  children,
}: {
  className: string;
  index: number;
  icon: IconName;
  color: string;
  title: string;
  text: string;
  big?: boolean;
  children: React.ReactNode;
}) {
  return (
    <li
      data-reveal
      style={{ ['--reveal-index' as string]: index }}
      className={`card group relative flex flex-col overflow-hidden p-0 transition duration-300 hover:-translate-y-1 ${className}`}
    >
      <div
        aria-hidden="true"
        className={`relative overflow-hidden border-b border-[var(--line)] bg-[var(--surface-2)] ${big ? 'min-h-72 flex-1' : 'h-48'}`}
      >
        {children}
      </div>
      <div className="flex gap-4 p-6">
        <span
          className="flex size-10 shrink-0 items-center justify-center rounded-xl text-white"
          style={{ background: color }}
        >
          <Icon name={icon} className="size-5" />
        </span>
        <div>
          <h3 className={`font-display font-bold ${big ? 'text-2xl' : 'text-lg'}`}>{title}</h3>
          <p className="mt-1.5 leading-relaxed text-[var(--ink-muted)]">{text}</p>
        </div>
      </div>
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-[image:var(--ribbon)] transition duration-500 group-hover:scale-x-100"
      />
    </li>
  );
}

/** Rellotge de 24 h tancat i un registre de trucades ateses que no s'atura. */
function CallsIllustration({ t }: { t: T['calls'] }) {
  const log = [...t.log, ...t.log];
  return (
    <div className="absolute inset-0 flex items-center justify-center gap-8 p-6">
      <div className="relative size-40 shrink-0 sm:size-48">
        <svg viewBox="0 0 120 120" className="size-full -rotate-90">
          <circle cx="60" cy="60" r="50" fill="none" stroke="var(--line-strong)" strokeWidth="10" />
          <circle
            cx="60"
            cy="60"
            r="50"
            fill="none"
            stroke="url(#ring)"
            strokeWidth="10"
            strokeLinecap="round"
            pathLength={1}
            strokeDasharray="1"
            className="transition-[stroke-dashoffset] delay-300 duration-[1600ms] ease-out [stroke-dashoffset:1] group-data-[shown]:[stroke-dashoffset:0]"
          />
          <defs>
            <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#2160af" />
              <stop offset="0.5" stopColor="#12978f" />
              <stop offset="1" stopColor="#88c023" />
            </linearGradient>
          </defs>
        </svg>
        <span className="font-display absolute inset-0 flex items-center justify-center text-4xl font-extrabold">
          {t.ring}
        </span>
      </div>
      <div className="relative hidden h-44 w-48 overflow-hidden [mask-image:linear-gradient(transparent,black_20%,black_80%,transparent)] sm:block">
        <ul className="ticker grid gap-2">
          {log.map((entry, i) => (
            <li
              key={`${entry}-${i}`}
              className="flex items-center gap-2 rounded-xl border border-[var(--line)] bg-[var(--surface)] px-3 py-2 text-sm font-semibold"
            >
              <span className="flex size-6 items-center justify-center rounded-full bg-[color-mix(in_oklab,var(--color-nubo-lime)_25%,transparent)] text-[var(--accent-ink)]">
                <Icon name="phone" className="size-3" />
              </span>
              {entry}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Les cites que s'omplen: [dia, franja] dins d'una setmana de 5 × 4.
const SLOTS = [
  [0, 1],
  [1, 0],
  [2, 2],
  [3, 1],
  [4, 3],
  [1, 3],
  [3, 0],
] as const;

function BookingsIllustration({ days }: { days: string[] }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-5">
      <div className="grid w-full max-w-xs grid-cols-5 gap-1.5">
        {days.map((day, i) => (
          <span
            key={`${day}-${i}`}
            className="font-display text-center text-xs font-bold text-[var(--ink-faint)]"
          >
            {day}
          </span>
        ))}
        {Array.from({ length: 20 }, (_, cell) => {
          const day = cell % 5;
          const row = Math.floor(cell / 5);
          const booked = SLOTS.findIndex(([d, r]) => d === day && r === row);
          return (
            <span
              key={cell}
              className="relative h-7 rounded-md border border-dashed border-[var(--line-strong)]"
            >
              {booked >= 0 ? (
                <span
                  className="slot-fill absolute inset-0 rounded-md bg-[var(--color-nubo-teal)]"
                  style={{ ['--i' as string]: String(booked) }}
                />
              ) : null}
            </span>
          );
        })}
      </div>
    </div>
  );
}

function LeadIllustration({ t }: { t: T['leads'] }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-5">
      <div className="w-full max-w-xs rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-4 shadow-[var(--shadow)]">
        <div className="flex items-center justify-between">
          <span className="flex size-9 items-center justify-center rounded-full bg-[var(--surface-2)]">
            <Icon name="user" className="size-4" />
          </span>
          <span className="font-display rounded-full bg-[color-mix(in_oklab,var(--color-nubo-lime)_25%,transparent)] px-2.5 py-1 text-xs font-bold text-[var(--accent-ink)]">
            {t.badge}
          </span>
        </div>
        <dl className="mt-3 grid gap-1.5 text-sm">
          {t.fields.map((field, i) => (
            <div
              key={field.label}
              className="flex justify-between gap-3 opacity-0 transition duration-500 group-data-[shown]:opacity-100"
              style={{ transitionDelay: `${400 + i * 250}ms` }}
            >
              <dt className="text-[var(--ink-faint)]">{field.label}</dt>
              <dd className="font-semibold">{field.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

function HandoffIllustration({ t }: { t: T['handoff'] }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-5">
      <div className="relative flex w-full max-w-[15rem] items-center justify-between">
        <span className="flex size-11 items-center justify-center rounded-full bg-[var(--color-nubo-blue)] text-white">
          <Icon name="phone" className="size-5" />
        </span>
        <span className="absolute inset-x-12 top-1/2 h-px -translate-y-1/2 border-t-2 border-dashed border-[var(--line-strong)]" />
        <span
          className="transfer-dot absolute top-1/2 left-12 size-3 -translate-y-1/2 rounded-full bg-[var(--color-nubo-lime)]"
          style={{ ['--to' as string]: '8.5rem' }}
        />
        <span className="flex size-11 items-center justify-center rounded-full bg-[var(--color-nubo-teal)] text-white">
          <Icon name="people" className="size-5" />
        </span>
      </div>
      <p className="font-display text-sm font-bold">{t.transferring}</p>
      <p className="max-w-[16rem] rounded-xl border border-[var(--line)] bg-[var(--surface)] px-3 py-2 text-center text-xs text-[var(--ink-muted)]">
        {t.summary}
      </p>
    </div>
  );
}

function LanguagesIllustration({ greetings }: { greetings: string[] }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-5">
      <div className="relative h-14 w-full max-w-[16rem]">
        {greetings.map((greeting, i) => (
          <p
            key={greeting}
            className="greet absolute inset-0 flex items-center justify-center rounded-2xl rounded-br-md bg-[color-mix(in_oklab,var(--color-nubo-teal)_16%,var(--surface))] px-4 text-center text-sm font-semibold ring-1 ring-[color-mix(in_oklab,var(--color-nubo-teal)_40%,transparent)]"
            style={{ ['--i' as string]: String(i) }}
          >
            {greeting}
          </p>
        ))}
      </div>
    </div>
  );
}

const BARS = [42, 58, 51, 73, 66, 88, 61];

function RecordsIllustration({ t }: { t: T['records'] }) {
  return (
    <div className="absolute inset-0 flex items-end justify-center gap-5 p-5">
      <div className="flex h-28 items-end gap-2">
        {BARS.map((height, i) => (
          <span
            key={i}
            className="bar-grow w-4 rounded-t-md"
            style={{
              height: `${height}%`,
              background: i === 5 ? 'var(--color-nubo-lime)' : 'var(--color-nubo-teal)',
              opacity: i === 5 ? 1 : 0.55,
              ['--i' as string]: String(i),
            }}
          />
        ))}
      </div>
      <dl className="mb-2 grid gap-1 text-xs">
        <dt className="text-[var(--ink-faint)]">{t.week}</dt>
        <dd className="font-display text-lg font-extrabold">
          214 <span className="text-xs font-semibold text-[var(--ink-faint)]">{t.calls}</span>
        </dd>
        <dd className="font-display text-lg font-extrabold text-[var(--accent-ink)]">
          63 <span className="text-xs font-semibold text-[var(--ink-faint)]">{t.booked}</span>
        </dd>
      </dl>
    </div>
  );
}
