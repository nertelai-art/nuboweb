'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { NuboMark } from '@/components/layout/nubo-mark';
import { DEFAULT_LOCALE, isLocale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';

// `not-found` no rep `params`: l'idioma surt de la URL.
export default function NotFound() {
  const params = useParams<{ lang?: string }>();
  const lang = isLocale(params.lang) ? params.lang : DEFAULT_LOCALE;
  const t = getDictionary(lang).notFound;
  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center px-4 text-center">
      <NuboMark className="h-16 w-auto" />
      <h1 className="font-display mt-8 text-4xl font-extrabold">{t.title}</h1>
      <p className="mt-3 text-[var(--ink-muted)]">{t.text}</p>
      <Link href={`/${lang}`} className="btn btn-primary mt-8">
        {t.back}
      </Link>
    </main>
  );
}
