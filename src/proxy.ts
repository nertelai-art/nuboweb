import { NextResponse, type NextRequest } from 'next/server';
import { isLocale, negotiateLocale } from '@/i18n/config';

export const LOCALE_COOKIE = 'nubo-lang';

/**
 * Tota URL sense idioma va a la seva versió amb prefix: primer l'idioma que
 * la persona ja ha triat (galeta), després el del navegador, i si no, el
 * castellà. El 307 depèn de tot això, i ho diu (`Vary`).
 */
export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const first = pathname.split('/')[1];
  if (isLocale(first)) {
    const response = NextResponse.next();
    response.cookies.set(LOCALE_COOKIE, first, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
      sameSite: 'lax',
    });
    return response;
  }

  const saved = request.cookies.get(LOCALE_COOKIE)?.value;
  const locale = isLocale(saved) ? saved : negotiateLocale(request.headers.get('accept-language'));
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;
  url.search = search;
  const response = NextResponse.redirect(url, 307);
  response.headers.append('Vary', 'Accept-Language, Cookie');
  return response;
}

export const config = {
  // Ni fitxers estàtics ni interns de Next.
  matcher: ['/((?!_next|api|.*\\..*).*)'],
};
