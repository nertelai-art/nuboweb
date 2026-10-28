import { NextRequest, type NextFetchEvent } from 'next/server';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { DEMO_ACCESS_COOKIE } from '@/demo-kit/names';
import { signDemoToken } from '@/demo-kit/token';
import { config, LOCALE_COOKIE, proxy } from '@/proxy';

const secret = 'un-secret-de-proves-prou-llarg';
const site = 'nubo-ia';
const now = Date.UTC(2026, 9, 28, 10, 0, 0);
const event = { waitUntil: () => {} } as unknown as NextFetchEvent;
const request = (url: string, headers: Record<string, string> = {}) =>
  new NextRequest(url, { headers });
const link = () => signDemoToken(secret, { site, name: 'Nubo Telecom', days: 15, now });

beforeEach(() => {
  vi.useFakeTimers({ toFake: ['Date'] });
  vi.setSystemTime(now);
});
afterEach(() => {
  vi.useRealTimers();
  vi.unstubAllEnvs();
});

describe('proxy sense la porta de la demo (en local)', () => {
  it("l'arrel porta a l'idioma del navegador", async () => {
    const response = await proxy(
      request('https://nubo.test/', { 'accept-language': 'ca-ES' }),
      event,
    );
    expect(response?.headers.get('location')).toBe('https://nubo.test/ca');
  });

  it('una pàgina amb idioma passa i el recorda', async () => {
    const response = await proxy(request('https://nubo.test/fr'), event);
    expect(response?.status).toBe(200);
    expect(response?.cookies.get(LOCALE_COOKIE)?.value).toBe('fr');
  });

  it('els fitxers de public no es redirigeixen', async () => {
    expect(await proxy(request('https://nubo.test/brand/nubo-n.png'), event)).toBeUndefined();
  });
});

describe('proxy amb la porta de la demo', () => {
  beforeEach(() => {
    vi.stubEnv('DEMO_SECRET', secret);
    vi.stubEnv('DEMO_SITE', site);
  });

  it("sense enllaç, ni l'arrel ni cap idioma: la pàgina de bloqueig", async () => {
    expect((await proxy(request('https://nubo.test/'), event))?.status).toBe(403);
    expect((await proxy(request('https://nubo.test/es'), event))?.status).toBe(403);
    expect((await proxy(request('https://nubo.test/brand/nubo-n.png'), event))?.status).toBe(403);
  });

  it("amb l'enllaç a l'arrel, porta a l'idioma, s'emporta les galetes i treu el codi", async () => {
    const token = await link();
    const response = await proxy(
      request(`https://nubo.test/?d=${token}`, { 'accept-language': 'en-GB' }),
      event,
    );
    expect(response?.status).toBe(307);
    expect(response?.headers.get('location')).toBe('https://nubo.test/en');
    expect(
      response?.headers.getSetCookie().some((c) => c.startsWith(`${DEMO_ACCESS_COOKIE}=`)),
    ).toBe(true);
  });

  it("amb l'enllaç a una pàgina amb idioma, entra i recorda l'idioma", async () => {
    const response = await proxy(request(`https://nubo.test/ca?d=${await link()}`), event);
    expect(response?.status).toBe(200);
    const cookies = response?.headers.getSetCookie() ?? [];
    expect(cookies.some((c) => c.startsWith(`${DEMO_ACCESS_COOKIE}=`))).toBe(true);
    expect(cookies.some((c) => c.startsWith(`${LOCALE_COOKIE}=ca`))).toBe(true);
  });

  it('amb la galeta, tot passa', async () => {
    const cookie = `${DEMO_ACCESS_COOKIE}=${await link()}`;
    expect((await proxy(request('https://nubo.test/es', { cookie }), event))?.status).toBe(200);
    expect(
      await proxy(request('https://nubo.test/brand/nubo-n.png', { cookie }), event),
    ).toBeUndefined();
  });
});

describe('matcher', () => {
  const matcher = new RegExp(`^${config.matcher[0]}$`);

  it("deixa fora de la porta el que ha de veure qui no té l'enllaç", () => {
    for (const path of ['/icon.svg', '/favicon.ico', '/robots.txt', '/_next/static/chunks/a.js'])
      expect(matcher.test(path), path).toBe(false);
  });

  it('passa per la porta les pàgines i les imatges', () => {
    for (const path of ['/', '/es', '/ca/res', '/brand/nubo-n.png'])
      expect(matcher.test(path), path).toBe(true);
  });
});
