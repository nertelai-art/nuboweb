import { holder } from '@/content/site';

/** El que guarda la web al navegador. Si canvia el codi, s'ha de canviar aquí. */
export const STORAGE = {
  localeCookie: 'nubo-lang',
  themeKey: 'nubo-theme',
} as const;

/** Ajuda oficial de cada navegador per esborrar galetes (es tradueix sola). */
export const BROWSER_HELP = [
  { label: 'Google Chrome', href: 'https://support.google.com/chrome/answer/95647' },
  {
    label: 'Mozilla Firefox',
    href: 'https://support.mozilla.org/kb/clear-cookies-and-site-data-firefox',
  },
  { label: 'Safari', href: 'https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac' },
  {
    label: 'Microsoft Edge',
    href: 'https://support.microsoft.com/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09',
  },
];

export const H = holder;
export const SITE_DOMAIN = 'nuboai.es';
