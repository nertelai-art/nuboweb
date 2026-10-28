'use client';

import { useEffect, useRef, useState } from 'react';
import type { Dictionary } from '@/i18n/dictionaries';
import { NuboMark } from '@/components/layout/nubo-mark';
import { Icon } from '@/components/ui/icon';
import { useReducedMotion } from '@/lib/scroll-scene';

const STAGE_MS = 2800;
const WAVE = Array.from({ length: 22 }, (_, i) =>
  Math.round(30 + 70 * Math.abs(Math.sin(i * 1.4))),
);

/**
 * L'hero en directe: quatre passos que es repeteixen sols, amb el pas actiu
 * marcat a sota perquè s'entengui què passa sense llegir res més. S'atura
 * quan no es veu; amb moviment reduït, es queda a l'últim pas, amb tot a la
 * vista.
 */
export function HeroLive({ t }: { t: Dictionary['hero']['live'] }) {
  const reducedMotion = useReducedMotion();
  const [stage, setStage] = useState(0);
  const [visible, setVisible] = useState(true);
  const root = useRef<HTMLDivElement>(null);
  const shown = reducedMotion ? 3 : stage;

  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) =>
      setVisible(Boolean(entry?.isIntersecting)),
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (reducedMotion || !visible) return;
    const timer = setInterval(() => setStage((value) => (value + 1) % 4), STAGE_MS);
    return () => clearInterval(timer);
  }, [reducedMotion, visible]);

  return (
    <div ref={root} className="relative mx-auto w-full max-w-[30rem]">
      <p className="sr-only">{t.steps.join(' → ')}</p>

      <div aria-hidden="true" className="relative mx-auto h-[27rem] w-full sm:h-[29rem]">
        {/* Telèfon */}
        <div className="absolute top-0 left-1/2 h-full w-[15.5rem] -translate-x-1/2 rounded-[2.6rem] border border-black/10 bg-[#05080d] p-2 shadow-[var(--shadow)] sm:w-[16.5rem] dark:border-white/15">
          <div className="relative h-full overflow-hidden rounded-[2.1rem] bg-[linear-gradient(180deg,#123056_0%,#07111f_70%)] text-white">
            <span className="absolute top-2 left-1/2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-black" />

            {/* Pas 1: truca un client */}
            <div
              className={`absolute inset-0 flex flex-col items-center pt-16 transition duration-500 ${
                shown === 0 ? 'opacity-100' : 'pointer-events-none opacity-0'
              }`}
            >
              <span className="ring-pulse flex size-20 items-center justify-center rounded-full bg-white/10">
                <Icon name="user" className="size-9 text-white/80" />
              </span>
              <p className="font-display mt-5 text-lg font-bold">+34 6•• ••• 218</p>
              <p className="mt-1 text-xs text-white/60">{t.afterHours}</p>
              <p className="mt-8 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">
                {t.incoming}
              </p>
              <span className="mt-auto mb-10 flex size-14 animate-bounce items-center justify-center rounded-full bg-[#22c55e]">
                <Icon name="phone" className="size-6" />
              </span>
            </div>

            {/* Passos 2–4: la IA contesta */}
            <div
              className={`absolute inset-0 flex flex-col px-4 pt-14 transition duration-500 ${
                shown >= 1 ? 'opacity-100' : 'pointer-events-none opacity-0'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <span className="flex size-10 items-center justify-center rounded-full bg-white">
                  <NuboMark className="h-5 w-auto" />
                </span>
                <div>
                  <p className="text-[0.7rem] text-white/60">{t.answered}</p>
                  <p className="font-display text-sm font-bold">{t.whatsappFrom}</p>
                </div>
              </div>
              <div
                className="mt-4 flex h-8 items-center justify-center gap-[3px]"
                data-speaking={shown === 1 ? '' : undefined}
              >
                {WAVE.map((height, i) => (
                  <span
                    key={i}
                    className="wave-bar w-[3px] rounded-full bg-[var(--color-nubo-lime)]"
                    style={{ height: `${height}%`, ['--i' as string]: String(i) }}
                  />
                ))}
              </div>
              <p className="mt-4 w-fit max-w-[85%] rounded-2xl rounded-bl-md bg-white/12 px-3 py-2 text-[0.8rem] leading-snug">
                {t.callerLine}
              </p>
              <p className="mt-2 ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-md bg-[color-mix(in_oklab,var(--color-nubo-lime)_28%,#0c1a2e)] px-3 py-2 text-[0.8rem] leading-snug ring-1 ring-[var(--color-nubo-lime)]/40">
                {t.agentLine}
              </p>
            </div>
          </div>
        </div>

        {/* Pas 3: la cita */}
        <div
          className={`absolute top-[18%] -right-1 w-[13.5rem] rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-3.5 text-[var(--ink)] shadow-[var(--shadow)] transition duration-500 sm:-right-6 ${
            shown >= 2 ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'
          }`}
        >
          <div className="flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-xl bg-[var(--color-nubo-teal)] text-white">
              <Icon name="calendar" className="size-[1.15rem]" />
            </span>
            <p className="font-display text-sm font-bold">{t.bookedTitle}</p>
          </div>
          <p className="mt-2 text-xs text-[var(--ink-muted)]">{t.bookedDetail}</p>
        </div>

        {/* Pas 4: confirmació per WhatsApp i avís a l'equip */}
        <div
          className={`absolute bottom-[14%] -left-1 w-[14.5rem] rounded-2xl bg-[#0b141a] p-3 text-[#e9edef] shadow-[var(--shadow)] ring-1 ring-white/10 transition duration-500 sm:-left-8 ${
            shown >= 3 ? 'translate-x-0 opacity-100' : '-translate-x-6 opacity-0'
          }`}
        >
          <p className="flex items-center gap-1.5 text-[0.7rem] font-semibold text-[#25d366]">
            <Icon name="chat" className="size-3.5" />
            WhatsApp · {t.whatsappFrom}
          </p>
          <p className="mt-1.5 rounded-lg rounded-tr-none bg-[#005c4b] px-2.5 py-1.5 text-[0.78rem] leading-snug">
            {t.whatsappText}
          </p>
        </div>
        <div
          className={`absolute right-2 bottom-0 flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-3 py-1.5 text-xs font-semibold text-[var(--ink)] shadow-[var(--shadow)] transition delay-300 duration-500 ${
            shown >= 3 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <span className="flex size-4 items-center justify-center rounded-full bg-[var(--color-nubo-lime)] text-[var(--color-night-950)]">
            <Icon name="check" className="size-3" />
          </span>
          {t.ownerNote}
        </div>
      </div>

      {/* Els quatre passos, amb el que és actiu marcat */}
      <ol className="mt-6 grid grid-cols-4 gap-2" aria-label={t.label}>
        {t.steps.map((step, index) => (
          <li key={step} className="text-center">
            <span className="block h-1 overflow-hidden rounded-full bg-[var(--line-strong)]">
              <span
                className="block h-full origin-left rounded-full bg-[image:var(--ribbon)]"
                style={{
                  transform: `scaleX(${index < shown ? 1 : index === shown ? 1 : 0})`,
                  transition:
                    index === shown && !reducedMotion ? `transform ${STAGE_MS}ms linear` : 'none',
                }}
              />
            </span>
            <span
              className={`mt-2 block text-[0.7rem] leading-tight font-semibold transition sm:text-xs ${
                index === shown ? 'text-[var(--ink)]' : 'text-[var(--ink-faint)]'
              }`}
            >
              <span className="font-display">{index + 1}.</span> {step}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
