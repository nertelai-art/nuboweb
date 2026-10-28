import type { Dictionary } from '@/i18n/dictionaries';
import { NuboMark } from '@/components/layout/nubo-mark';
import { Icon, type IconName } from '@/components/ui/icon';
import { HeroLive } from './hero-live';

const CAPABILITY_ICONS: IconName[] = ['phone', 'chat', 'calendar', 'forward'];

/**
 * Primera pantalla: què fa, dit en una frase i ensenyat en quatre passos que
 * es repeteixen sols (truca un client → contesta la IA → reserva → confirma
 * per WhatsApp). Un sol botó principal: escoltar una trucada d'exemple.
 */
export function Hero({ t }: { t: Dictionary['hero'] }) {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-titulo"
      className="relative isolate overflow-hidden pt-28 pb-20 sm:pt-32 lg:pb-24"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_85%_10%,var(--glow),transparent_70%)]" />
        <div className="absolute top-[-14%] right-[-18%] flex h-[135%] gap-5 opacity-[0.13] sm:right-[-6%] dark:opacity-[0.2]">
          <span className="hero-ribbon block w-20 rounded-full bg-[var(--color-nubo-blue)] sm:w-28" />
          <span
            className="hero-ribbon block w-20 rounded-full bg-[var(--color-nubo-teal)] sm:w-28"
            style={{ animationDelay: '0.15s' }}
          />
          <span
            className="hero-ribbon block w-20 rounded-full bg-[var(--color-nubo-lime)] sm:w-28"
            style={{ animationDelay: '0.3s' }}
          />
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <p className="eyebrow" data-reveal>
            {t.eyebrow}
          </p>
          <h1
            id="hero-titulo"
            data-reveal
            style={{ ['--reveal-index' as string]: 1 }}
            className="font-display mt-5 text-[2.5rem] leading-[1.05] font-extrabold tracking-tight text-balance sm:text-6xl xl:text-[4.1rem]"
          >
            {t.titleStart} <span className="text-ribbon">{t.titleHighlight}</span> {t.titleEnd}
          </h1>
          <p
            data-reveal
            style={{ ['--reveal-index' as string]: 2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--ink-muted)]"
          >
            {t.subtitle}
          </p>

          <ul
            data-reveal
            style={{ ['--reveal-index' as string]: 3 }}
            className="mt-8 grid max-w-xl grid-cols-2 gap-2.5"
          >
            {t.capabilities.map((item, index) => (
              <li
                key={item}
                className="flex items-center gap-2.5 rounded-2xl border border-[var(--line)] bg-[var(--surface)] px-3 py-2.5 text-sm font-semibold"
              >
                <span
                  className="flex size-8 shrink-0 items-center justify-center rounded-xl text-white"
                  style={{ background: ['#2160af', '#12978f', '#88c023', '#0c1a2e'][index] }}
                >
                  <Icon name={CAPABILITY_ICONS[index] ?? 'check'} className="size-4" />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div
            data-reveal
            style={{ ['--reveal-index' as string]: 4 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a href="#demo" className="btn btn-primary">
              <Icon name="play" className="size-4" />
              {t.ctaPrimary}
            </a>
            <a href="#contacto" className="btn btn-ghost">
              {t.ctaSecondary}
            </a>
          </div>
        </div>

        <div data-reveal="scale" style={{ ['--reveal-index' as string]: 2 }} className="relative">
          <NuboMark className="absolute top-1/2 left-1/2 -z-10 h-[115%] w-auto -translate-x-1/2 -translate-y-1/2 opacity-[0.07] dark:opacity-[0.1]" />
          <HeroLive t={t.live} />
        </div>
      </div>
    </section>
  );
}
