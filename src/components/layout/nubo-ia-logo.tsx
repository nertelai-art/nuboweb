import { useId } from 'react';
import { RIBBON_COLORS, ribbonPath } from './nubo-geometry';

/**
 * Logo de Nubo IA, a l'estil de la família (Nubo Energy porta una fulla sobre
 * l'últim pal de la N; Nubo Security, un escut): la N de Nubo Telecom amb el
 * pal llima escurçat i, al damunt, una bafarada amb ones de veu, separada per
 * un tall en V. Sota «NUBO», «IA» amb el mateix pes que «TELECOM» o «ENERGY».
 *
 * La bafarada i el text van amb `currentColor`: fosc al tema clar, blanc al fosc.
 * Proposta nostra, pendent que Nubo la validi.
 */
export function NuboIaLogo({
  className,
  title = 'Nubo IA',
  wordmark = true,
}: {
  className?: string;
  title?: string;
  wordmark?: boolean;
}) {
  const id = useId();
  const gradient = (key: keyof typeof RIBBON_COLORS, stops: [number, string][]) => (
    <linearGradient id={`${id}${key}`} x1="0" y1="0" x2="0" y2="566" gradientUnits="userSpaceOnUse">
      {stops.map(([offset, color]) => (
        <stop key={offset} offset={offset} stopColor={color} />
      ))}
    </linearGradient>
  );

  return (
    <svg
      viewBox={wordmark ? '0 0 1800 566' : '0 0 620 566'}
      className={className}
      role="img"
      aria-label={title}
    >
      <defs>
        {gradient('blue', [
          [0, RIBBON_COLORS.blue.top],
          [0.16, RIBBON_COLORS.blue.base],
        ])}
        {gradient('teal', [
          [0, RIBBON_COLORS.teal.top],
          [0.25, RIBBON_COLORS.teal.base],
          [0.82, RIBBON_COLORS.teal.base],
          [1, RIBBON_COLORS.teal.bottom],
        ])}
        {gradient('lime', [
          [0.72, RIBBON_COLORS.lime.base],
          [1, RIBBON_COLORS.lime.bottom],
        ])}
        {/* El pal llima comença més avall, amb una V que fa lloc a la punta de la bafarada. */}
        <clipPath id={`${id}stem`}>
          <path d="M380 196H468L497 225L526 196H620V566H380Z" />
        </clipPath>
      </defs>

      <path d={ribbonPath('blue')} fill={`url(#${id}blue)`} />
      <path d={ribbonPath('lime')} fill={`url(#${id}lime)`} clipPath={`url(#${id}stem)`} />
      <path d={ribbonPath('teal')} fill={`url(#${id}teal)`} />

      {/* La bafarada amb l'ona de veu */}
      <path
        d="M446 0H548A52 52 0 0 1 600 52V122A52 52 0 0 1 548 174H526L497 203L468 174H446A52 52 0 0 1 394 122V52A52 52 0 0 1 446 0Z"
        fill="currentColor"
      />
      {[
        [441, 64],
        [474, 104],
        [507, 76],
        [540, 44],
      ].map(([x, h]) => (
        <rect
          key={x}
          x={x}
          y={87 - h! / 2}
          width="18"
          height={h}
          rx="9"
          fill={RIBBON_COLORS.lime.base}
        />
      ))}

      {wordmark ? (
        <g
          fill="currentColor"
          style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}
        >
          <text
            x="672"
            y="298"
            fontSize="372"
            fontWeight="800"
            textLength="1122"
            lengthAdjust="spacingAndGlyphs"
          >
            NUBO
          </text>
          <text x="676" y="522" fontSize="226" fontWeight="600" letterSpacing="36">
            IA
          </text>
        </g>
      ) : null}
    </svg>
  );
}
