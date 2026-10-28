'use client';

// «Cómo funciona»: secció alta amb un escenari sticky. Al centre, la N en 3D
// (l'agent); a l'esquerra hi entren trucades i WhatsApp; al voltant, el que
// sap del negoci; a la dreta, la feina feta. Cada peça entra quan el scroll
// arriba al seu pas (atributs `data-s1`…`data-s3` a l'escenari, tocats al DOM).

import dynamic from 'next/dynamic';
import { useRef } from 'react';
import type { Dictionary } from '@/i18n/dictionaries';
import { NuboMark } from '@/components/layout/nubo-mark';
import { Icon, type IconName } from '@/components/ui/icon';
import { useMediaQuery } from '@/lib/use-media-query';
import {
  useNearViewport,
  useReducedMotion,
  useRenderMode,
  useScrollProgress,
} from '@/lib/scroll-scene';
import { STEP_COUNT, stepFor } from './n-phases';

const NScene = dynamic(() => import('./n-scene'), { ssr: false });

const INPUT_ICONS: IconName[] = ['phone', 'chat', 'clock'];
const OUTPUT_ICONS: IconName[] = ['calendar', 'database', 'chat', 'forward'];
// Posicions (en % de l'esquema) de les peces del voltant de la N.
const KNOW_POS = [
  [50, 9],
  [69, 30],
  [67, 84],
  [33, 84],
  [31, 30],
] as const;
const IN_Y = [24, 50, 76];
const OUT_Y = [16, 38.5, 61.5, 84];

export function NShowcase({ t }: { t: Dictionary['how'] }) {
  const section = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLDivElement>(null);
  const mode = useRenderMode();
  const reducedMotion = useReducedMotion();
  const near = useNearViewport(section);
  const compact = !useMediaQuery('(min-width: 1024px)');

  const progress = useScrollProgress(section, (value) => {
    const element = stage.current;
    if (!element) return;
    const step = reducedMotion ? STEP_COUNT - 1 : stepFor(value);
    if (element.dataset.step !== String(step)) {
      element.dataset.step = String(step);
      for (let s = 1; s < STEP_COUNT; s++) element.toggleAttribute(`data-s${s}`, step >= s);
      element.querySelectorAll('[data-step-list]').forEach((list) => {
        Array.from(list.children as HTMLCollectionOf<HTMLElement>).forEach((item, index) => {
          item.dataset.state = index < step ? 'done' : index === step ? 'active' : 'todo';
        });
      });
    }
    if (bar.current) bar.current.style.transform = `scaleX(${reducedMotion ? 1 : value})`;
  });

  const is3d = mode === '3d';

  return (
    <section
      id="como-funciona"
      ref={section}
      aria-labelledby="como-funciona-titulo"
      className={`relative bg-[var(--bg-deep)] ${is3d ? 'h-[420vh]' : ''}`}
    >
      <div
        ref={stage}
        data-step="0"
        className={`flow ${is3d ? 'sticky top-0 h-[100svh]' : 'py-24'} flex flex-col overflow-hidden pt-20`}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(45%_45%_at_50%_58%,var(--glow),transparent_70%)]"
        />

        {/* Capçalera: títol i els quatre passos */}
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-1 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow">{t.eyebrow}</p>
              <h2
                id="como-funciona-titulo"
                className="font-display mt-2 text-2xl leading-tight font-extrabold sm:text-4xl"
              >
                {t.title} <span className="text-ribbon">{t.titleHighlight}</span>
              </h2>
            </div>
          </div>
          {/* Mòbil i tauleta: un sol pas a la vista, sencer, amb la barra dels quatre. */}
          <div className="mt-3 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-3.5 shadow-[var(--shadow)] lg:hidden">
            <ol data-step-list aria-hidden="true" className="grid grid-cols-4 gap-1.5">
              {t.steps.map((step, index) => (
                <li
                  key={step.title}
                  data-state={index === 0 ? 'active' : 'todo'}
                  className="h-1 rounded-full bg-[var(--line-strong)] transition duration-500 data-[state=active]:bg-[var(--color-nubo-lime)] data-[state=done]:bg-[var(--color-nubo-teal)]"
                />
              ))}
            </ol>
            <ol data-step-list className="mt-3">
              {t.steps.map((step, index) => (
                <li
                  key={step.title}
                  data-state={index === 0 ? 'active' : 'todo'}
                  className="hidden gap-3 data-[state=active]:flex"
                >
                  <span className="font-display flex size-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-nubo-lime)] text-xs font-bold text-[var(--color-night-950)]">
                    {index + 1}
                  </span>
                  <span>
                    <strong className="font-display block leading-tight">{step.title}</strong>
                    <span className="mt-1 block text-sm leading-snug text-[var(--ink-muted)]">
                      {step.text}
                    </span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
          <ol data-step-list className="mt-4 hidden grid-cols-4 gap-2 sm:gap-3 lg:grid">
            {t.steps.map((step, index) => (
              <li
                key={step.title}

                data-state={index === 0 ? 'active' : 'todo'}
                className="group rounded-2xl border border-transparent p-2 transition duration-500 data-[state=active]:border-[var(--line)] data-[state=active]:bg-[var(--surface)] data-[state=active]:shadow-[var(--shadow)] sm:p-3"
              >
                <span className="flex items-center gap-2">
                  <span className="font-display flex size-6 shrink-0 items-center justify-center rounded-full border border-[var(--line-strong)] text-[0.7rem] font-bold transition group-data-[state=active]:border-transparent group-data-[state=active]:bg-[var(--color-nubo-lime)] group-data-[state=active]:text-[var(--color-night-950)] group-data-[state=done]:border-[var(--color-nubo-teal)] group-data-[state=done]:text-[var(--teal-ink)] sm:size-7 sm:text-xs">
                    {index + 1}
                  </span>
                  <strong className="font-display hidden text-sm leading-tight sm:block lg:text-base">
                    {step.title}
                  </strong>
                </span>
                {/* A mòbil, només el pas actiu es llegeix sencer. */}
                <span className="mt-1.5 hidden text-xs leading-snug text-[var(--ink-muted)] sm:group-data-[state=active]:block lg:text-sm">
                  {step.text}
                </span>
              </li>
            ))}
          </ol>
        </div>

        {/* L'esquema */}
        <div className="relative mx-auto mt-3 w-full max-w-7xl flex-1 px-4 pb-14 sm:px-6 lg:px-8 lg:pb-6">
          <div className="relative h-full min-h-[22rem]">
            {is3d && near ? (
              <div className="absolute inset-0">
                <NScene progress={progress} reducedMotion={reducedMotion} compact={compact} />
              </div>
            ) : null}
            {mode === 'static' ? (
              <NuboMark className="absolute top-1/2 left-1/2 h-36 w-auto -translate-x-1/2 -translate-y-1/2" />
            ) : null}

            {/* Connectors (escriptori) */}
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="pointer-events-none absolute inset-0 hidden size-full lg:block"
              aria-hidden="true"
            >
              {IN_Y.map((y, i) => (
                <path
                  key={`in-${y}`}
                  d={`M25 ${y} C33 ${y} 34 50 41 50`}
                  pathLength={1}
                  fill="none"
                  stroke="#2160af"
                  strokeWidth={0.35}
                  className="flow-line flow-line-in"
                  style={{ ['--i' as string]: String(i) }}
                />
              ))}
              {OUT_Y.map((y, i) => (
                <path
                  key={`out-${y}`}
                  d={`M59 50 C66 50 67 ${y} 75 ${y}`}
                  pathLength={1}
                  fill="none"
                  stroke="#88c023"
                  strokeWidth={0.35}
                  className="flow-line flow-line-out"
                  style={{ ['--i' as string]: String(i) }}
                />
              ))}
            </svg>

            {/* Entrades */}
            <ul className="absolute inset-x-0 top-0 flex justify-center gap-2 lg:inset-x-auto lg:top-0 lg:left-0 lg:block lg:h-full lg:w-[25%]">
              {t.inputs.map((input, i) => (
                <li
                  key={input.title}
                  className="flow-in lg:absolute lg:right-0 lg:left-0 lg:-translate-y-1/2"
                  style={{ ['--i' as string]: String(i), top: compact ? undefined : `${IN_Y[i]}%` }}
                >
                  <FlowCard
                    icon={INPUT_ICONS[i] ?? 'phone'}
                    color="#2160af"
                    title={input.title}
                    detail={input.detail}
                    compact={compact}
                  />
                </li>
              ))}
            </ul>

            {/* El que sap */}
            <ul aria-label={t.agentLabel}>
              {t.knowledge.map((item, i) => {
                const [x, y] = KNOW_POS[i] ?? [50, 50];
                // A mòbil, més a prop del centre perquè hi càpiguen.
                const left = compact ? 50 + (x - 50) * 1.7 : x;
                const top = compact ? 50 + (y - 50) * 0.62 : y;
                return (
                  <li
                    key={item}
                    className="flow-know font-display absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-[color-mix(in_oklab,var(--color-nubo-teal)_45%,transparent)] bg-[var(--surface)] px-3 py-1 text-xs font-bold text-[var(--teal-ink)] shadow-[var(--shadow)] sm:text-sm"
                    style={{ left: `${left}%`, top: `${top}%`, ['--i' as string]: String(i) }}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>

            {/* Salides */}
            <ul className="absolute inset-x-0 bottom-0 grid grid-cols-2 gap-2 lg:inset-x-auto lg:top-0 lg:right-0 lg:bottom-auto lg:block lg:h-full lg:w-[25%]">
              {t.outputs.map((output, i) => (
                <li
                  key={output.title}
                  className="flow-out lg:absolute lg:right-0 lg:left-0 lg:-translate-y-1/2"
                  style={{
                    ['--i' as string]: String(i),
                    top: compact ? undefined : `${OUT_Y[i]}%`,
                  }}
                >
                  <FlowCard
                    icon={OUTPUT_ICONS[i] ?? 'check'}
                    color="#88c023"
                    title={output.title}
                    detail={output.detail}
                    done
                    compact={compact}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {is3d ? (
          <div className="absolute inset-x-0 bottom-0 h-1 bg-[var(--line)]" aria-hidden="true">
            <div ref={bar} className="h-full origin-left scale-x-0 bg-[image:var(--ribbon)]" />
          </div>
        ) : null}

        <p className="sr-only">{t.srDescription}</p>
      </div>
    </section>
  );
}

function FlowCard({
  icon,
  color,
  title,
  detail,
  done,
  compact,
}: {
  icon: IconName;
  color: string;
  title: string;
  detail: string;
  done?: boolean;
  compact: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-2.5 rounded-2xl border border-[var(--line)] bg-[var(--surface)] shadow-[var(--shadow)] ${
        compact ? 'p-2' : 'p-3'
      }`}
    >
      <span
        className={`flex shrink-0 items-center justify-center rounded-xl text-white ${compact ? 'size-7' : 'size-10'}`}
        style={{ background: color }}
      >
        <Icon name={icon} className={compact ? 'size-3.5' : 'size-5'} />
      </span>
      <span className="min-w-0">
        <span
          className={`font-display block leading-tight font-bold ${compact ? 'text-[0.7rem]' : 'text-sm'}`}
        >
          {title}
        </span>
        <span
          className={`block truncate text-[var(--ink-faint)] ${compact ? 'hidden' : 'text-xs'}`}
        >
          {detail}
        </span>
      </span>
      {done && !compact ? (
        <span className="ml-auto flex size-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-nubo-lime)] text-[var(--color-night-950)]">
          <Icon name="check" className="size-3" />
        </span>
      ) : null}
    </div>
  );
}
