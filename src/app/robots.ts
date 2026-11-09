import type { MetadataRoute } from 'next';
import { site } from '@/content/site';

/**
 * Les previsualitzacions no s'indexen. A producció sí; si algú arriba per
 * nuboweb.vercel.app, la canònica de cada pàgina ja apunta a nuboai.es.
 */
export default function robots(): MetadataRoute.Robots {
  const production = process.env.VERCEL_ENV === 'production';
  return production
    ? { rules: { userAgent: '*', allow: '/' }, sitemap: `${site.url}/sitemap.xml` }
    : { rules: { userAgent: '*', disallow: '/' } };
}
