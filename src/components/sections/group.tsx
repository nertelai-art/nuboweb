import Image from 'next/image';
import type { Dictionary } from '@/i18n/dictionaries';
import { site } from '@/content/site';
import { Icon } from '@/components/ui/icon';

/**
 * El Grupo Nubo: qui hi ha darrere de l'agent. Les tres marques del grup amb
 * els seus logos (els de nubotelecom.com) sobre fosc, que és com estan fets,
 * i l'enllaç a la web de Nubo Telecom.
 */
export function Group({ t }: { t: Dictionary['group'] }) {
  return (
    <section id="grupo" aria-labelledby="grupo-titulo" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <p className="eyebrow" data-reveal>
              {t.eyebrow}
            </p>
            <h2
              id="grupo-titulo"
              data-reveal
              className="font-display mt-4 text-3xl leading-tight font-extrabold sm:text-5xl"
            >
              {t.title} <span className="text-ribbon">{t.titleHighlight}</span>
            </h2>
          </div>
          <p data-reveal className="text-lg leading-relaxed text-[var(--ink-muted)]">
            {t.intro}
          </p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
          {/* Nubo Telecom, la gran */}
          <a
            href={site.telecom}
            target="_blank"
            rel="noopener"
            data-reveal="scale"
            className="group relative isolate flex min-h-[22rem] flex-col justify-between overflow-hidden rounded-[2rem] bg-[#07111f] p-8 text-white shadow-[var(--shadow)] sm:p-10"
          >
            <div
              aria-hidden="true"
              className="absolute -top-24 -right-16 -z-10 flex h-[140%] gap-4 opacity-30 transition duration-700 group-hover:translate-x-4"
            >
              <span className="block w-16 -skew-x-12 rounded-full bg-[var(--color-nubo-blue)]" />
              <span className="block w-16 -skew-x-12 rounded-full bg-[var(--color-nubo-teal)]" />
              <span className="block w-16 -skew-x-12 rounded-full bg-[var(--color-nubo-lime)]" />
            </div>
            <Image
              src="/brand/nubo-telecom.png"
              alt={t.telecom.name}
              width={1794}
              height={566}
              className="h-12 w-auto self-start sm:h-14"
            />
            <div>
              <p className="max-w-md text-lg leading-relaxed text-white/80">{t.telecom.text}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {t.telecom.services.map((service) => (
                  <li
                    key={service}
                    className="rounded-full border border-white/20 px-3 py-1 text-sm font-semibold"
                  >
                    {service}
                  </li>
                ))}
              </ul>
              <span className="btn btn-primary mt-7">
                {t.cta}
                <Icon name="external" className="size-4" />
                <span className="sr-only">{t.newTab}</span>
              </span>
            </div>
          </a>

          <div className="grid gap-4">
            {(
              [
                ['energy', '/brand/nubo-energy.png', 1024, 365, 'https://nubo.energy/'],
                ['security', '/brand/nubo-security.png', 1799, 632, 'https://nuboip.com/'],
              ] as const
            ).map(([key, src, width, height, href], index) => (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noopener"
                data-reveal="right"
                style={{ ['--reveal-index' as string]: index + 1 }}
                className="group flex flex-col justify-between gap-6 rounded-[2rem] bg-[#0c1a2e] p-7 text-white shadow-[var(--shadow)] transition hover:-translate-y-1"
              >
                <Image
                  src={src}
                  alt={t[key].name}
                  width={width}
                  height={height}
                  className="h-11 w-auto self-start"
                />
                <div className="flex items-end justify-between gap-4">
                  <p className="leading-relaxed text-white/75">{t[key].text}</p>
                  <span className="flex shrink-0 items-center gap-1.5 text-sm font-bold text-[var(--color-nubo-lime)]">
                    {t.visit}
                    <Icon name="external" className="size-4" />
                    <span className="sr-only">{t.newTab}</span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
