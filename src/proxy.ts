import { NextResponse, type NextFetchEvent, type NextRequest } from 'next/server';
import { demoGate } from '@/demo-kit/gate';
import { DEMO_QUERY } from '@/demo-kit/names';
import { isLocale, negotiateLocale } from '@/i18n/config';

export const LOCALE_COOKIE = 'nubo-lang';

/**
 * Dues coses, en aquest ordre:
 * - La porta de la demo (`src/demo-kit`, no s'edita aquí): sense enllaç personal, la pàgina de
 *   bloqueig. Sense `DEMO_SECRET` i `DEMO_SITE` (en local), no fa res.
 * - L'idioma: tota URL sense idioma va a la seva versió amb prefix (l'idioma desat a la galeta, el
 *   del navegador o el castellà). Si s'hi arriba amb l'enllaç de la demo, la redirecció s'emporta les
 *   galetes que el recorden i treu el codi de l'adreça.
 */
export async function proxy(request: NextRequest, event: NextFetchEvent) {
  const gate = await demoGate(request, event);
  if (gate && !gate.ok) return gate;

  const { pathname } = request.nextUrl;
  // Fitxers de `public` (imatges de marca…): ni idioma ni redirecció.
  if (/\.[a-z0-9]+$/i.test(pathname)) return gate;

  const first = pathname.split('/')[1];
  if (isLocale(first)) {
    const response = gate ?? NextResponse.next();
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
  url.searchParams.delete(DEMO_QUERY);
  const response = NextResponse.redirect(url, 307);
  for (const cookie of gate?.headers.getSetCookie() ?? [])
    response.headers.append('set-cookie', cookie);
  response.headers.append('Vary', 'Accept-Language, Cookie');
  return response;
}

// Literal: Next el llegeix sense executar el fitxer. És el `demoMatcher` del kit.
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon\\.ico|icon\\.svg|apple-icon|robots\\.txt|opengraph-image|twitter-image).*)',
  ],
};
