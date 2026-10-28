import type { Dictionary } from '@/i18n/dictionaries';
import { site } from '@/content/site';
import { Icon } from '@/components/ui/icon';

/**
 * La crida final. Sense formulari a posta: encara no hi ha on enviar-lo, i
 * un formulari que no arriba enlloc és pitjor que cap. Telèfon i correu de
 * Nubo, que són de debò.
 */
export function Contact({ t }: { t: Dictionary['contact'] }) {
  const mail = `mailto:${site.email}?subject=${encodeURIComponent(t.mailSubject)}`;
  return (
    <section
      id="contacto"
      aria-labelledby="contacto-titulo"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          data-reveal="scale"
          className="relative isolate overflow-hidden rounded-[2.5rem] bg-[#07111f] px-6 py-14 text-white shadow-[var(--shadow)] sm:px-14 sm:py-20"
        >
          <div
            aria-hidden="true"
            className="absolute -top-1/3 -right-1/4 -z-10 size-[36rem] rounded-full bg-[radial-gradient(circle,rgb(18_151_143/0.45),transparent_65%)]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-1 bg-[image:var(--ribbon)]"
          />

          <div className="relative grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="eyebrow text-white/70">{t.eyebrow}</p>
              <h2
                id="contacto-titulo"
                className="font-display mt-4 text-3xl leading-tight font-extrabold sm:text-5xl"
              >
                {t.title} <span className="text-ribbon">{t.titleHighlight}</span>
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/75">{t.text}</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href={site.phoneHref} className="btn btn-primary">
                  <Icon name="phone" className="size-4" />
                  {t.call} {site.phone}
                </a>
                <a
                  href={mail}
                  className="btn border border-white/25 text-white hover:border-[var(--color-nubo-teal)]"
                >
                  {t.write} {site.email}
                </a>
              </div>
              <p className="mt-4 text-sm text-white/55">{t.free}</p>
            </div>

            <div className="rounded-3xl border border-white/12 bg-white/5 p-6">
              <p className="font-display font-bold">{t.partnerTitle}</p>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{t.partnerText}</p>
              <a
                href={site.distribuidores}
                className="font-display mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[var(--color-nubo-lime)] hover:underline"
              >
                {t.partnerCta}
                <Icon name="arrow" className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
