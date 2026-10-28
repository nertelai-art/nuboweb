'use client';

import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { LOCALE_LABELS, LOCALES, type Locale } from '@/i18n/config';

type Theme = 'light' | 'dark';

const subscribeTheme = (callback: () => void) => {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  return () => observer.disconnect();
};
const readTheme = (): Theme =>
  document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';

const THEME_MS = 900;

/**
 * Canvi de tema amb cortina: el tema nou baixa de dalt a baix per sobre del
 * vell, amb una vora suau de les tres cintes. Fa servir View Transitions (una
 * captura del vell i del nou); on no n'hi ha o amb moviment reduït, els colors
 * canvien amb una transició curta i prou.
 */
function switchTheme(next: Theme) {
  const root = document.documentElement;
  const apply = () => {
    root.dataset.theme = next;
    try {
      localStorage.setItem('nubo-theme', next);
    } catch {
      // Navegació privada: el canvi val per a aquesta visita.
    }
  };
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced || typeof document.startViewTransition !== 'function') {
    root.classList.add('theme-fade');
    apply();
    window.setTimeout(() => root.classList.remove('theme-fade'), 400);
    return;
  }
  root.classList.add('theme-curtain');
  const transition = document.startViewTransition(apply);
  void transition.ready.then(() => {
    root.animate(
      {
        clipPath: ['inset(0 0 100% 0)', 'inset(0 0 0% 0)'],
      },
      {
        duration: THEME_MS,
        easing: 'cubic-bezier(0.65, 0, 0.35, 1)',
        pseudoElement: '::view-transition-new(root)',
      },
    );
  });
  void transition.finished.finally(() => root.classList.remove('theme-curtain'));
}

/** El tema el posa l'script d'arrencada; aquí només es llegeix i es canvia. */
export function ThemeToggle({ toLight, toDark }: { toLight: string; toDark: string }) {
  const theme = useSyncExternalStore(subscribeTheme, readTheme, () => 'light' as Theme);
  const next: Theme = theme === 'dark' ? 'light' : 'dark';

  return (
    <button
      type="button"
      onClick={() => switchTheme(next)}
      aria-label={theme === 'dark' ? toLight : toDark}
      title={theme === 'dark' ? toLight : toDark}
      className="flex size-10 items-center justify-center rounded-full border border-[var(--line-strong)] text-[var(--ink)] transition hover:border-[var(--color-nubo-teal)]"
    >
      <svg
        viewBox="0 0 24 24"
        className="size-[1.15rem]"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        aria-hidden="true"
      >
        {theme === 'dark' ? (
          <>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
          </>
        ) : (
          <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" />
        )}
      </svg>
    </button>
  );
}

/** Desplegable d'idiomes: cada idioma és la seva URL. */
export function LanguageMenu({ current, label }: { current: Locale; label: string }) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const close = (event: MouseEvent | KeyboardEvent) => {
      if (
        event instanceof KeyboardEvent
          ? event.key === 'Escape'
          : !root.current?.contains(event.target as Node)
      )
        setOpen(false);
    };
    document.addEventListener('mousedown', close);
    document.addEventListener('keydown', close);
    return () => {
      document.removeEventListener('mousedown', close);
      document.removeEventListener('keydown', close);
    };
  }, [open]);

  return (
    <div ref={root} className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        aria-label={`${label}: ${LOCALE_LABELS[current].name}`}
        onClick={() => setOpen((value) => !value)}
        className="font-display flex h-10 items-center gap-1.5 rounded-full border border-[var(--line-strong)] px-2.5 text-sm font-bold transition hover:border-[var(--color-nubo-teal)] sm:px-3"
      >
        <svg
          viewBox="0 0 24 24"
          className="size-4"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3Z" />
        </svg>
        {LOCALE_LABELS[current].short}
      </button>
      {open ? (
        <ul className="pop absolute right-0 mt-2 w-40 overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-1 shadow-[var(--shadow)]">
          {LOCALES.map((locale) => (
            <li key={locale}>
              <a
                href={`/${locale}`}
                hrefLang={locale}
                lang={locale}
                aria-current={locale === current ? 'true' : undefined}
                className="flex items-center justify-between rounded-xl px-3 py-2 text-sm hover:bg-[var(--surface-2)] aria-[current]:font-bold"
              >
                {LOCALE_LABELS[locale].name}
                <span className="font-display text-xs text-[var(--ink-faint)]">
                  {LOCALE_LABELS[locale].short}
                </span>
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
