import { NextRequest } from 'next/server';
import { describe, expect, it } from 'vitest';
import { config, LOCALE_COOKIE, proxy } from '@/proxy';

const request = (url: string, headers: Record<string, string> = {}) =>
  new NextRequest(url, { headers });

describe('proxy', () => {
  it("l'arrel porta a l'idioma del navegador", () => {
    const response = proxy(request('https://nubo.test/', { 'accept-language': 'ca-ES' }));
    expect(response.status).toBe(307);
    expect(response.headers.get('location')).toBe('https://nubo.test/ca');
  });

  it("l'idioma desat a la galeta mana sobre el del navegador", () => {
    const response = proxy(
      request('https://nubo.test/sectors', {
        'accept-language': 'ca-ES',
        cookie: `${LOCALE_COOKIE}=fr`,
      }),
    );
    expect(response.headers.get('location')).toBe('https://nubo.test/fr/sectors');
  });

  it('sense coincidència, castellà', () => {
    const response = proxy(request('https://nubo.test/', { 'accept-language': 'de-DE' }));
    expect(response.headers.get('location')).toBe('https://nubo.test/es');
  });

  it('una pàgina amb idioma passa i el recorda', () => {
    const response = proxy(request('https://nubo.test/fr'));
    expect(response.status).toBe(200);
    expect(response.cookies.get(LOCALE_COOKIE)?.value).toBe('fr');
  });
});

describe('matcher', () => {
  const matcher = new RegExp(`^${config.matcher[0]}$`);

  it('deixa fora els fitxers i els interns de Next', () => {
    for (const path of ['/icon.svg', '/favicon.ico', '/brand/nubo-n.png', '/_next/static/a.js'])
      expect(matcher.test(path), path).toBe(false);
  });

  it('passa per les pàgines', () => {
    for (const path of ['/', '/es', '/ca/sectors']) expect(matcher.test(path), path).toBe(true);
  });
});
