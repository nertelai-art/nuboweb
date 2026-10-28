# CLAUDE.md — Nubo IA (nuboweb)

La web dels **agents de veu i WhatsApp amb IA de Nubo Telecom**. Nubo és partner:
ven el producte amb la seva marca i el seu ecosistema, i **la web no diu enlloc
qui hi ha al darrere**. Res de «Nertel» ni de «Nertus» al codi de la web, als
textos, a les metadades ni als noms de fitxer públics.

L'única excepció és el kit de demo (`src/demo-kit`) mentre la web és una demo: la
pàgina de bloqueig i la insígnia són de Nertel. Marxen amb el kit.

## Demo per a un lead

Ara mateix és una **demo per a Nubo** i porta el kit de demo (skill `demo-leads`):
només s'hi entra amb un enllaç personal que caduca; qui no el porta veu la pàgina de
bloqueig, i PostHog registra la visita (`site`: `nubo-ia`).

- Enllaços: `pnpm demo:link "Nom del lead" --days 15`. El secret (`DEMO_SECRET`) és a
  `.env.local` i a Vercel; no s'imprimeix mai.
- `src/demo-kit` **no s'edita aquí**: la font és `nertel-demo-kit/kit/demo-kit`.
- El proxy (`src/proxy.ts`) passa primer per la porta i després resol l'idioma; si
  redirigeix, s'emporta les galetes de la porta i treu el codi de l'adreça.
- Quan sigui la web de Nubo, es treu el kit sencer: la porta del proxy, `DemoTracker`
  i `DemoBadge` del layout, `src/demo-kit`, `posthog-js`, l'script `demo:link` i les
  variables `DEMO_*` i `NEXT_PUBLIC_POSTHOG_*` de Vercel.

## Idiomes

Quatre idiomes, cada un amb la seva URL: `/es` (el principal i el de reserva, com
a nubotelecom.com), `/ca`, `/en` i `/fr`. L'arrel `/` redirigeix (`src/proxy.ts`)
a l'idioma desat a la galeta o al del navegador.

- Els textos són a `src/i18n/dictionaries/`. El castellà (`es.ts`) és el de
  referència: el tipus `Dictionary` en surt i els altres l'han de complir sencer.
- Cap text de la web dins d'un component: tot passa pel diccionari.
- Comentaris i documentació, en català; codi i commits, en anglès.

## Direcció visual

Surt de la marca de Nubo (logo i web, mirats el 28/10/2026):

| Peça           | Tria                                                             | D'on surt                                                        |
| -------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| Tema           | **Clar per defecte** (`#f4f7fb`); fosc opcional, nit `#07111f`   | Ho va demanar el client; el fosc és el blau del logo enfosquit   |
| Logo           | PNG oficial; al clar, amb el text recolorit a `#0c1a2e`          | `public/brand/nubo-telecom-dark.png`, fet a partir de l'original |
| Accent         | Blau `#2160af` → verd blavós `#12978f` → llima `#88c023`         | Les tres cintes de la N, mesurades al PNG del logo               |
| Botó principal | Llima                                                            | L'última cinta, la que «arriba»                                  |
| Titulars       | Montserrat 800                                                   | La lletra de nubotelecom.com                                     |
| Text           | Figtree                                                          | Llegible i amb caràcter; Montserrat cansa en paràgrafs llargs    |
| Motiu          | Les tres cintes (hero, N en 3D, barres) i el punt rosa `#ff9597` | El punt és el `title_dot.svg` dels seus titulars                 |

## Stack

Next.js 16 (webpack: el SWC natiu està bloquejat en aquesta màquina) · React 19 ·
Tailwind 4 · three + React Three Fiber per a l'escena de la N · Vitest.
TypeScript 6 i ESLint 9 (no 7 i 10): `typescript-eslint` encara no suporta TS 7
i `eslint-plugin-react` no arriba a ESLint 10. `@types/node` 24, com el Node.

## Estructura

```
src/app/[lang]/          layout (tema, idioma), pàgina, 404
src/proxy.ts             redirecció a l'idioma
src/i18n/                idiomes i diccionaris
src/components/three/    «Cómo funciona»: la N en 3D i l'esquema (skill scroll-3d-scenes)
src/components/demo/     el simulador de trucada i de WhatsApp
src/components/sections/ seccions (Server Components; les animades, client)
src/components/layout/   capçalera, peu, logo, geometria de la N, entrades en fer scroll
src/content/             estructura de sectors i dades de Nubo
```

La geometria de la N (`nubo-geometry.ts`) està mesurada sobre el PNG gran del logo
i és la mateixa per al vector i per a l'escena 3D: si canvia, canvia a tot arreu.

## El simulador

- Guions escrits als diccionaris (`demos`), **no** un model: sona sempre igual i
  no gasta res. Els negocis són inventats i la web ho diu.
- La veu és la del navegador (Web Speech API). El text apareix paraula a paraula
  quan la veu la diu (`onboundary`); si el sistema no ho avisa o no té àudio, al
  ritme estimat. La veu de l'agent és de dona; la de qui truca, segons el
  personatge (`callerVoice`). Les veus són les de l'idioma de la pàgina; si el
  sistema no en té (passa sovint amb el català), la conversa surt escrita i ho diu.
- Si la conversa va i el telèfon surt de la pantalla, es queda petit a baix a la
  dreta (`.phone-dock[data-floating]`).
- Amb `prefers-reduced-motion`, la conversa surt sencera de cop.

## Pendent de validar amb Nubo

- Nom del producte («Nubo IA») i domini (`site.url` és provisional).
- Logo de Nubo IA (`nubo-ia-logo.tsx`): proposta nostra a l'estil de Nubo Energy i
  Nubo Security (bafarada amb ones de veu sobre el pal llima). El text és
  Montserrat; per a un fitxer definitiu caldria passar-lo a corbes.
- La N surt del PNG oficial (`public/brand/nubo-n.png` i `nubo-shapes.ts`, fets amb
  `scripts/brand/`): si Nubo ens dona el logo en vector, es refà a partir d'aquell.
- Afirmacions de producte: integració directa amb la Centralita Virtual, idiomes,
  RGPD i suport. Estan escrites amb prudència, però les ha de confirmar Nubo.
- Textos legals (avís legal, privacitat, galetes).
- Traduccions fetes per nosaltres: les ha de llegir algú de Nubo, sobretot el
  català i el francès.
- Formulari de contacte: ara només hi ha telèfon i correu de Nubo, perquè no hi
  ha on enviar un formulari.
- Àudios gravats amb la veu de debò del producte en lloc de la del navegador:
  arreglaria també els idiomes sense veu al sistema.

## Desplegament

Vercel, projecte `nuboweb` (equip `nertelai-7298s-projects`), connectat a GitHub
(`nertelai-art/nuboweb`, públic). Les pujades a `developer` no despleguen a producció
(`ignoreCommand` de `vercel.json`): a producció només quan l'usuari ho diu, cada vegada,
amb `npx vercel deploy --prod --build-env ALLOW_PRODUCTION=1`.

## Qualitat

```bash
pnpm run check
```

Typecheck, lint, format i tests. El hook de pre-push l'executa.
Previsualització: `.claude/launch.json` (`nubo-dev`, port 3400).
