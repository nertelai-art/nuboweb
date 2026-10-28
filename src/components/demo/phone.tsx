'use client';

import { useEffect, useRef, useState } from 'react';
import type { Dictionary } from '@/i18n/dictionaries';
import type { Turn } from '@/i18n/turns';
import { NuboMark } from '@/components/layout/nubo-mark';
import { Icon } from '@/components/ui/icon';
import type { Status } from './use-conversation';

type DemoText = Dictionary['demo'];
type DemoScript = Dictionary['demos'][keyof Dictionary['demos']];

// Alçades arrodonides: el servidor i el navegador han d'escriure el mateix número.
const WAVE = Array.from({ length: 28 }, (_, i) =>
  Math.round(35 + 65 * Math.abs(Math.sin(i * 1.7))),
);

export function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-[36rem] w-[18rem] shrink-0 rounded-[2.8rem] border border-black/10 bg-[#05080d] p-2.5 shadow-[0_40px_100px_-30px_rgb(18_151_143/0.5)] dark:border-white/15">
      <div className="relative h-full overflow-hidden rounded-[2.2rem]">
        <span
          aria-hidden="true"
          className="absolute top-2.5 left-1/2 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-black"
        />
        {children}
      </div>
    </div>
  );
}

/** La trucada: capçalera amb l'ona de veu i la transcripció en directe. */
export function CallScreen({
  t,
  demo,
  status,
  shown,
  words,
  active,
}: {
  t: DemoText;
  demo: DemoScript;
  status: Status;
  shown: number;
  words: number;
  active: Turn['from'] | null;
}) {
  const transcript = useRef<HTMLOListElement>(null);
  useEffect(() => {
    transcript.current?.scrollTo({ top: transcript.current.scrollHeight, behavior: 'smooth' });
  }, [shown, words]);

  const live = status === 'live';
  const current = live && active ? demo.call[shown] : undefined;
  // Abans de despenjar, la capçalera gran; quan es parla, una franja estreta
  // perquè la transcripció tingui tot l'espai. L'alçada canvia amb transició.
  const compact = live || status === 'done';
  const statusLine = (
    <>
      {status === 'idle' && t.pressToCall}
      {status === 'ringing' && t.statusRinging}
      {live && (
        <>
          {t.attending} · <CallTimer />
        </>
      )}
      {status === 'done' && t.statusDone}
    </>
  );
  const wave = (bars: number[], className: string) => (
    <div className={className} data-speaking={live && active ? '' : undefined} aria-hidden="true">
      {bars.map((height, i) => (
        <span
          key={i}
          className={`wave-bar w-[3px] rounded-full transition-colors ${
            active === 'caller' ? 'bg-[#7fb0ef]' : 'bg-[var(--color-nubo-lime)]'
          }`}
          style={{ height: `${height}%`, ['--i' as string]: String(i) }}
        />
      ))}
    </div>
  );

  return (
    <div className="flex h-full flex-col bg-[linear-gradient(180deg,#123056_0%,#07111f_62%)] text-white">
      <div
        className={`relative shrink-0 overflow-hidden transition-[height] duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)] ${
          compact ? 'h-[5.25rem] border-b border-white/10' : 'h-[13.5rem]'
        }`}
      >
        {/* Gran: abans de la trucada */}
        <div
          className={`absolute inset-x-0 top-0 flex flex-col items-center px-5 pt-11 text-center transition duration-300 ${
            compact ? 'pointer-events-none -translate-y-6 scale-90 opacity-0' : 'opacity-100'
          }`}
        >
          <span
            className={`flex size-16 items-center justify-center rounded-full bg-white ${status === 'ringing' ? 'ring-pulse' : ''}`}
          >
            <NuboMark className="h-7 w-auto" />
          </span>
          <p className="font-display mt-3 text-base font-bold">{demo.business}</p>
          <p className="mt-0.5 text-xs text-white/65">{statusLine}</p>
          {wave(WAVE, 'mt-3 flex h-9 items-center gap-[3px]')}
        </div>

        {/* Estreta: durant la trucada */}
        <div
          className={`absolute inset-x-0 bottom-0 flex items-center gap-2.5 px-4 pb-3 transition delay-150 duration-400 ${
            compact ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
          }`}
        >
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white">
            <NuboMark className="h-4 w-auto" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="font-display block truncate text-[0.8125rem] font-bold">
              {demo.business}
            </span>
            <span className="block truncate text-[0.6875rem] text-white/60">{statusLine}</span>
          </span>
          {wave(WAVE.slice(0, 9), 'flex h-6 shrink-0 items-center gap-[2px]')}
        </div>
      </div>

      <ol
        ref={transcript}
        className="flex min-h-0 flex-1 [scrollbar-width:none] flex-col gap-2 overflow-y-auto px-4 pt-3 pb-4"
        aria-label={t.transcriptLabel}
        aria-live="polite"
      >
        {demo.call.slice(0, shown).map((turn, index) => (
          <Line key={index} from={turn.from} who={turn.from === 'agent' ? t.agent : demo.caller}>
            {turn.text}
          </Line>
        ))}
        {current ? (
          <Line
            from={current.from}
            who={`${current.from === 'agent' ? t.agent : demo.caller} · ${t.speaking}`}
          >
            {words > 0 ? current.text.split(/\s+/).slice(0, words).join(' ') : '…'}
          </Line>
        ) : null}
      </ol>
    </div>
  );
}

function Line({
  from,
  who,
  children,
}: {
  from: Turn['from'];
  who: string;
  children: React.ReactNode;
}) {
  const agent = from === 'agent';
  return (
    <li className={`pop flex ${agent ? 'justify-end' : 'justify-start'}`}>
      <p
        className={`max-w-[86%] rounded-2xl px-3 py-2 text-[0.8125rem] leading-snug ${
          agent
            ? 'rounded-br-md bg-[color-mix(in_oklab,var(--color-nubo-lime)_24%,#0c1a2e)] ring-1 ring-[var(--color-nubo-lime)]/40'
            : 'rounded-bl-md bg-white/12'
        }`}
      >
        <span className="font-display mb-0.5 block text-[0.625rem] font-bold tracking-wider uppercase opacity-60">
          {who}
        </span>
        {children}
      </p>
    </li>
  );
}

function CallTimer() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setSeconds((value) => value + 1), 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <span className="tabular-nums">
      {Math.floor(seconds / 60)}:{String(seconds % 60).padStart(2, '0')}
    </span>
  );
}

export const SUMMARY = '__summary__';

/** El xat: el client a l'esquerra, l'agent a la dreta i el resum al final. */
export function ChatScreen({
  t,
  demo,
  turns,
  status,
  shown,
  active,
}: {
  t: DemoText;
  demo: DemoScript;
  turns: Turn[];
  status: Status;
  shown: number;
  active: Turn['from'] | null;
}) {
  const paper = useRef<HTMLOListElement>(null);
  useEffect(() => {
    paper.current?.scrollTo({ top: paper.current.scrollHeight, behavior: 'smooth' });
  }, [shown, active]);
  const typing = status === 'live' && active === 'agent';

  return (
    <div className="flex h-full flex-col bg-[#0b141a] text-[#e9edef]">
      <header className="flex items-center gap-3 bg-[#1f2c34] px-4 pt-10 pb-3">
        <span
          aria-hidden="true"
          className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white"
        >
          <NuboMark className="h-4 w-auto" />
        </span>
        <span className="min-w-0">
          <span className="block truncate text-sm font-semibold">{demo.business}</span>
          <span className="block text-[0.6875rem] text-[#8696a0]">
            {typing ? t.typing : t.online}
          </span>
        </span>
      </header>

      <ol
        ref={paper}
        className="chat-paper flex min-h-0 flex-1 [scrollbar-width:none] flex-col gap-1.5 overflow-y-auto px-3 py-3"
        aria-label={t.chatLabel}
        aria-live="polite"
      >
        <li className="mx-auto mb-1 rounded-md bg-[#182229] px-2.5 py-1 text-[0.6875rem] text-[#8696a0]">
          {t.today}
        </li>
        {turns.slice(0, shown).map((turn, index) => {
          const agent = turn.from === 'agent';
          return (
            <li key={index} className={`pop flex ${agent ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-[82%] rounded-lg px-2.5 py-1.5 text-[0.8125rem] leading-snug shadow-sm ${
                  agent ? 'rounded-tr-none bg-[#005c4b]' : 'rounded-tl-none bg-[#1f2c34]'
                }`}
              >
                {turn.text === SUMMARY ? (
                  <dl className="grid gap-1 py-0.5">
                    {demo.whatsappSummary.map((row) => (
                      <div key={row.label} className="flex gap-1.5">
                        <dt className="shrink-0" aria-label={row.label}>
                          {row.emoji}
                        </dt>
                        <dd>
                          <span className="text-[#8fd9c9]">{row.label}:</span> {row.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                ) : (
                  <p>{turn.text}</p>
                )}
                <span className="mt-0.5 block text-right text-[0.625rem] text-[#8696a0]">
                  {`10:${String(12 + index).padStart(2, '0')}`}
                  {agent ? (
                    <span aria-hidden="true" className="ml-1 text-[#53bdeb]">
                      ✓✓
                    </span>
                  ) : null}
                </span>
              </div>
            </li>
          );
        })}
        {typing ? (
          <li className="pop flex justify-end" aria-hidden="true">
            <span className="rounded-lg rounded-tr-none bg-[#005c4b] px-3 py-2 text-sm tracking-[0.3em]">
              •••
            </span>
          </li>
        ) : null}
      </ol>

      <div className="flex items-center gap-2 px-3 pt-2 pb-6" aria-hidden="true">
        <span className="flex-1 rounded-full bg-[#1f2c34] px-4 py-2 text-xs text-[#8696a0]">
          {t.message}
        </span>
        <span className="flex size-9 items-center justify-center rounded-full bg-[#25d366] text-[#062a14]">
          <Icon name="arrow" className="size-4" />
        </span>
      </div>
    </div>
  );
}
