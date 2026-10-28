import type { Dictionary } from '@/i18n/dictionaries';
import { site } from '@/content/site';
import { BrandLogo } from './brand-logo';

const GROUP = [
  { href: site.telecom, label: 'Nubo Telecom' },
  { href: 'https://nubo.energy/', label: 'Nubo Energy' },
  { href: 'https://nuboip.com/', label: 'Nubo Security' },
  { href: site.centralita, label: 'Centralita Virtual' },
];

export function SiteFooter({ t, nav }: { t: Dictionary['footer']; nav: Dictionary['nav'] }) {
  const links = [
    { href: '#como-funciona', label: nav.how },
    { href: '#demo', label: nav.demo },
    { href: '#ventajas', label: nav.benefits },
    { href: '#sectores', label: nav.sectors },
    { href: '#preguntas', label: nav.faq },
  ];
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--bg-deep)]">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <BrandLogo className="h-9 w-auto" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-[var(--ink-faint)]">
            {t.tagline}
          </p>
          <p className="mt-4 text-sm text-[var(--ink-faint)]">{site.address}</p>
        </div>

        <nav aria-label={t.thisPage}>
          <p className="font-display text-sm font-bold">{t.thisPage}</p>
          <ul className="mt-4 grid gap-2.5 text-sm text-[var(--ink-muted)]">
            {links.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-[var(--ink)]">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label={t.group}>
          <p className="font-display text-sm font-bold">{t.group}</p>
          <ul className="mt-4 grid gap-2.5 text-sm text-[var(--ink-muted)]">
            {GROUP.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-[var(--ink)]">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-display text-sm font-bold">{t.contact}</p>
          <ul className="mt-4 grid gap-2.5 text-sm text-[var(--ink-muted)]">
            <li>
              <a href={site.phoneHref} className="hover:text-[var(--ink)]">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-[var(--ink)]">
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.linkedin} className="hover:text-[var(--ink)]">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={site.instagram} className="hover:text-[var(--ink)]">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[var(--line)]">
        <p className="mx-auto max-w-7xl px-4 py-6 text-xs text-[var(--ink-faint)] sm:px-6 lg:px-8">
          © {site.company}. {t.legalNote}
        </p>
      </div>
    </footer>
  );
}
