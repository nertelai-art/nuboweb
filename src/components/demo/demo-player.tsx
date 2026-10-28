'use client';

import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from 'react';
import type { DemoSector } from '@/content/sectors';
import type { Dictionary } from '@/i18n/dictionaries';
import { agent, type Turn } from '@/i18n/turns';
import { Icon } from '@/components/ui/icon';
import { CallScreen, ChatScreen, PhoneFrame, SUMMARY } from './phone';
import { hasVoiceFor, subscribeVoices } from './speech';
import { useConversation } from './use-conversation';

export type Channel = 'call' | 'whatsapp';

/**
 * El pas 3 de la demo: el telèfon i, al costat, el botó gros, l'estat i el
 * que ha fet l'agent. Un sol component per als dos canals; qui canvia de
 * sector o de canal el remunta (`key`), així cada prova comença neta.
 *
 * Quan la conversa va i el telèfon surt de la pantalla, es queda petit a
 * baix a la dreta (`.phone-dock[data-floating]`): es pot continuar escoltant
 * mentre es mira la resta de la web.
 */
export function DemoPlayer({
  t,
  sector,
  demo,
  channel,
  speechLang,
  reducedMotion,
}: {
  t: Dictionary['demo'];
  sector: DemoSector;
  demo: Dictionary['demos'][keyof Dictionary['demos']];
  channel: Channel;
  speechLang: string;
  reducedMotion: boolean;
}) {
  const [sound, setSound] = useState(true);
  const hasVoice = useSyncExternalStore(
    subscribeVoices,
    () => hasVoiceFor(speechLang),
    () => true,
  );
  const turns = useMemo<Turn[]>(
    () => (channel === 'call' ? demo.call : [...demo.whatsapp, agent(SUMMARY)]),
    [channel, demo],
  );
  const { status, shown, words, active, start, reset } = useConversation(turns, {
    mode: channel === 'call' ? 'call' : 'chat',
    sound: sound && hasVoice,
    callerVoice: sector.callerVoice,
    speechLang,
    reducedMotion,
  });

  // El telèfon flota quan la conversa va i el seu lloc ja no es veu.
  const slot = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(true);
  useEffect(() => {
    const element = slot.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(Boolean(entry?.isIntersecting)),
      {
        threshold: 0.25,
      },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  const running = status === 'ringing' || status === 'live';
  const floating = running && !inView;

  const isCall = channel === 'call';
  const statusText = isCall
    ? { idle: t.statusIdle, ringing: t.statusRinging, live: t.statusLive, done: t.statusDone }[
        status
      ]
    : {
        idle: t.statusChatIdle,
        ringing: t.statusChatLive,
        live: t.statusChatLive,
        done: t.statusChatDone,
      }[status];
  const results = isCall
    ? { title: demo.callResult.title, rows: demo.callResult.rows, actions: demo.callResult.actions }
    : {
        title: t.statusChatDone,
        rows: demo.whatsappSummary.map(({ label, value }) => ({ label, value })),
        actions: [] as string[],
      };
  const done = status === 'done';

  return (
    <div className="flex flex-col items-center gap-6 md:flex-row md:items-start md:justify-center md:gap-8">
      <div ref={slot} className="relative h-[36rem] w-[18rem] shrink-0">
        <div className="phone-dock" data-floating={floating ? '' : undefined}>
          {floating ? (
            <div className="absolute -top-16 right-0 flex gap-2">
              <a
                href="#demo"
                className="btn btn-primary min-h-12 px-5 text-lg"
                aria-label={t.pipBack}
              >
                {t.pipBack}
              </a>
              <button
                type="button"
                onClick={reset}
                aria-label={t.pipClose}
                className="flex size-12 items-center justify-center rounded-full bg-[#ef4444] text-white"
              >
                <Icon name="close" className="size-6" />
              </button>
            </div>
          ) : null}
          <PhoneFrame>
            {isCall ? (
              <CallScreen
                t={t}
                demo={demo}
                status={status}
                shown={shown}
                words={words}
                active={active}
              />
            ) : (
              <ChatScreen
                t={t}
                demo={demo}
                turns={turns}
                status={status}
                shown={shown}
                active={active}
              />
            )}
          </PhoneFrame>
        </div>
      </div>

      {/* A mòbil, el botó va abans del telèfon i el resultat després. */}
      <div className="contents md:block md:w-[19rem]">
        <div className="order-first w-full max-w-sm md:order-none">
          <StepLabel number={3} label={t.step3} />

          <button
            type="button"
            onClick={() => (running ? reset() : void start())}
            className={`btn mt-3 min-h-14 w-full text-base ${
              running
                ? 'bg-[#ef4444] text-white hover:bg-[#f05a5a]'
                : isCall
                  ? 'btn-primary'
                  : 'bg-[#25d366] text-[#062a14] hover:bg-[#3ee07d]'
            }`}
          >
            <Icon name={running ? 'close' : isCall ? 'phone' : 'chat'} className="size-5" />
            {running
              ? isCall
                ? t.hangUp
                : t.pipClose
              : done
                ? t.again
                : isCall
                  ? t.startCall
                  : t.startChat}
          </button>

          <p className="mt-3 flex items-center gap-2 text-sm font-semibold" aria-live="polite">
            <span
              aria-hidden="true"
              className={`size-2 rounded-full ${
                running
                  ? 'animate-pulse bg-[var(--color-nubo-lime)]'
                  : done
                    ? 'bg-[var(--color-nubo-teal)]'
                    : 'bg-[var(--ink-faint)]'
              }`}
            />
            {statusText}
          </p>

          {isCall ? (
            <div className="mt-3">
              <label className="flex w-fit cursor-pointer items-center gap-3 text-sm text-[var(--ink-muted)]">
                <input
                  type="checkbox"
                  checked={sound && hasVoice}
                  disabled={!hasVoice}
                  onChange={(event) => setSound(event.target.checked)}
                  className="peer sr-only"
                />
                <span
                  aria-hidden="true"
                  className="relative h-6 w-11 rounded-full bg-[var(--line-strong)] transition peer-checked:bg-[var(--color-nubo-teal)] peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[var(--color-nubo-teal)] peer-disabled:opacity-50 after:absolute after:top-1 after:left-1 after:size-4 after:rounded-full after:bg-white after:transition peer-checked:after:translate-x-5"
                />
                <Icon name={sound && hasVoice ? 'sound' : 'mute'} className="size-4" />
                {t.sound}
              </label>
              <p className="mt-1.5 text-xs text-[var(--ink-faint)]">
                {hasVoice ? t.soundHint : t.noVoice}
              </p>
            </div>
          ) : null}
        </div>

        <div
          className="order-last w-full max-w-sm rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-4 md:order-none md:mt-6"
          aria-live="polite"
        >
          <p className="eyebrow">{t.didTitle}</p>
          {done ? (
            <div>
              <p className="pop font-display mt-3 text-lg font-extrabold text-[var(--accent-ink)]">
                {results.title}
              </p>
              <dl className="mt-3 grid gap-2">
                {results.rows.map((row, index) => (
                  <div
                    key={row.label}
                    className="pop flex items-baseline justify-between gap-3 border-b border-[var(--line)] pb-2 text-sm last:border-0"
                    style={{ animationDelay: `${120 + index * 110}ms` }}
                  >
                    <dt className="text-[var(--ink-faint)]">{row.label}</dt>
                    <dd className="text-right font-semibold">{row.value}</dd>
                  </div>
                ))}
              </dl>
              <ul className="mt-3 grid gap-1.5">
                {results.actions.map((action, index) => (
                  <li
                    key={action}
                    className="pop flex items-center gap-2 text-xs text-[var(--ink-muted)]"
                    style={{ animationDelay: `${450 + index * 140}ms` }}
                  >
                    <span className="flex size-4 items-center justify-center rounded-full bg-[var(--color-nubo-teal)] text-white">
                      <Icon name="check" className="size-2.5" />
                    </span>
                    {action}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <ul className="mt-3 grid gap-2.5">
              {(isCall ? demo.callResult.actions : results.rows.map((row) => row.label)).map(
                (item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-xs text-[var(--ink-faint)]"
                  >
                    <span
                      aria-hidden="true"
                      className="size-4 rounded-full border border-dashed border-[var(--line-strong)]"
                    />
                    {item}
                  </li>
                ),
              )}
              <li className="mt-1 text-xs text-[var(--ink-faint)]">
                {isCall ? t.pendingHint : t.chatPendingHint}
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export function StepLabel({ number, label }: { number: number; label: string }) {
  return (
    <p className="font-display flex items-center gap-2.5 text-base font-bold">
      <span className="flex size-7 items-center justify-center rounded-full bg-[image:var(--ribbon)] text-sm text-white">
        {number}
      </span>
      {label}
    </p>
  );
}
