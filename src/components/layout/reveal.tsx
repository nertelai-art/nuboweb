'use client';

import { useEffect } from 'react';

/**
 * Entrades en fer scroll per a tota la pàgina: un sol IntersectionObserver
 * marca `data-shown` a cada `[data-reveal]` quan entra. L'aspecte és CSS
 * (globals.css); sense JS, tot es veu des del principi.
 */
export function Reveal() {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>('[data-reveal]:not([data-shown])');
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.shown = '';
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return null;
}
