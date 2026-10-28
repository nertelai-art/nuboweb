'use client';

import { useEffect, useState } from 'react';
import type { Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/dictionaries';
import { NuboIaLogo } from './nubo-ia-logo';
import { LanguageMenu, ThemeToggle } from './header-controls';

/** `base`: buit a la landing (àncores); `/${lang}` a les altres pàgines, perquè les àncores hi tornin. */
export function SiteHeader({
  lang,
  t,
  base = '',
}: {
  lang: Locale;
  t: Dictionary['nav'];
  base?: string;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { href: `${base}#como-funciona`, label: t.how },
    { href: `${base}#demo`, label: t.demo },
    { href: `${base}#ventajas`, label: t.benefits },
    { href: `${base}#sectores`, label: t.sectors },
    { href: `${base}#grupo`, label: t.group },
    { href: `${base}#preguntas`, label: t.faq },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        scrolled || open
          ? 'border-b border-[var(--line)] bg-[color-mix(in_oklab,var(--bg)_85%,transparent)] backdrop-blur-xl'
          : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <a href={`${base}#inicio`} className="flex shrink-0 items-center gap-2" aria-label={t.home}>
          <NuboIaLogo className="h-8 w-auto sm:h-9" />
        </a>

        <nav aria-label={t.main} className="hidden xl:block">
          <ul className="flex items-center gap-0.5">
            {links.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-3 py-2 text-sm font-medium text-[var(--ink-muted)] transition hover:bg-[var(--surface-2)] hover:text-[var(--ink)]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <LanguageMenu current={lang} label={t.language} />
          <ThemeToggle toLight={t.themeToLight} toDark={t.themeToDark} />
          <a
            href={`${base}#contacto`}
            className="btn btn-primary hidden min-h-10 px-4 text-sm md:inline-flex"
          >
            {t.cta}
          </a>
          <button
            type="button"
            className="flex size-10 items-center justify-center rounded-full border border-[var(--line-strong)] xl:hidden"
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? t.menuClose : t.menuOpen}
            onClick={() => setOpen((value) => !value)}
          >
            <svg
              viewBox="0 0 24 24"
              className="size-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="menu-movil"
          aria-label={t.main}
          className="border-t border-[var(--line)] px-4 pt-2 pb-6 xl:hidden"
        >
          <ul className="grid gap-1">
            {links.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-display block rounded-xl px-3 py-3 font-semibold hover:bg-[var(--surface-2)]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={`${base}#contacto`}
            onClick={() => setOpen(false)}
            className="btn btn-primary mt-4 w-full"
          >
            {t.cta}
          </a>
        </nav>
      ) : null}
    </header>
  );
}
