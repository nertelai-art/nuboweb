'use client';

import { useEffect, useState } from 'react';
import { DEMO_SECTORS, type DemoId } from '@/content/sectors';
import type { Dictionary } from '@/i18n/dictionaries';
import { useReducedMotion } from '@/lib/scroll-scene';
import { SectorIcon } from '@/components/sections/sector-icon';
import { Icon } from '@/components/ui/icon';
import { DemoPlayer, StepLabel, type Channel } from './demo-player';

/**
 * «Pruébalo»: tres passos numerats, sempre a la vista. 1 tria el negoci,
 * 2 tria el canal, 3 prem el botó i escolta. Guions escrits, cap model ni
 * servidor.
 */
export function CallDemo({
  t,
  sectors,
  demos,
  speechLang,
}: {
  t: Dictionary['demo'];
  sectors: Dictionary['sectors']['items'];
  demos: Dictionary['demos'];
  speechLang: string;
}) {
  const [sectorId, setSectorId] = useState<DemoId>(DEMO_SECTORS[0]!.id);
  const [channel, setChannel] = useState<Channel>('call');
  const reducedMotion = useReducedMotion();
  const sector = DEMO_SECTORS.find((item) => item.id === sectorId) ?? DEMO_SECTORS[0]!;

  // «Escuchar ejemplo» des de la graella de sectors porta aquí amb el sector triat.
  useEffect(() => {
    const onHash = () => {
      const id = window.location.hash.replace(/^#demo-/, '');
      const match = DEMO_SECTORS.find((item) => item.id === id);
      if (!match || id === window.location.hash) return;
      setSectorId(match.id);
      setChannel('call');
      document.getElementById('demo')?.scrollIntoView();
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  return (
    <div className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_auto] xl:gap-12">
      <div className="card p-5 sm:p-7">
        <fieldset>
          <legend>
            <StepLabel number={1} label={t.step1} />
          </legend>
          <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-6 xl:grid-cols-3">
            {DEMO_SECTORS.map((item) => {
              const selected = item.id === sector.id;
              return (
                <label
                  key={item.id}
                  className={`relative flex cursor-pointer flex-col gap-2 rounded-2xl border p-3 transition has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-[var(--color-nubo-teal)] ${
                    selected
                      ? 'border-[var(--color-nubo-teal)] bg-[color-mix(in_oklab,var(--color-nubo-teal)_12%,var(--surface))]'
                      : 'border-[var(--line)] hover:border-[var(--line-strong)]'
                  }`}
                >
                  <input
                    type="radio"
                    name="demo-sector"
                    value={item.id}
                    checked={selected}
                    onChange={() => setSectorId(item.id)}
                    className="sr-only"
                  />
                  <span
                    className={`flex size-9 items-center justify-center rounded-xl transition ${
                      selected
                        ? 'bg-[var(--color-nubo-teal)] text-white'
                        : 'bg-[var(--surface-2)] text-[var(--teal-ink)]'
                    }`}
                  >
                    <SectorIcon name={item.icon} className="size-[1.1rem]" />
                  </span>
                  <span className="font-display text-sm leading-tight font-bold">
                    {sectors[item.id].name}
                  </span>
                  <span className="text-xs leading-tight text-[var(--ink-faint)]">
                    {demos[item.id].business}
                  </span>
                  {selected ? (
                    <span className="absolute top-2.5 right-2.5 flex size-5 items-center justify-center rounded-full bg-[var(--color-nubo-teal)] text-white">
                      <Icon name="check" className="size-3" />
                    </span>
                  ) : null}
                </label>
              );
            })}
          </div>
        </fieldset>

        <fieldset className="mt-8">
          <legend>
            <StepLabel number={2} label={t.step2} />
          </legend>
          <div className="mt-4 grid grid-cols-2 gap-2.5" role="radiogroup" aria-label={t.step2}>
            {(
              [
                ['call', t.channelCall, 'phone'],
                ['whatsapp', t.channelWhatsapp, 'chat'],
              ] as const
            ).map(([value, label, icon]) => {
              const selected = channel === value;
              return (
                <button
                  key={value}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  onClick={() => setChannel(value)}
                  className={`font-display flex min-h-14 items-center justify-center gap-2.5 rounded-2xl border text-sm font-bold transition ${
                    selected
                      ? value === 'whatsapp'
                        ? 'border-transparent bg-[#25d366] text-[#062a14]'
                        : 'border-transparent bg-[var(--color-nubo-lime)] text-[var(--color-night-950)]'
                      : 'border-[var(--line)] text-[var(--ink-muted)] hover:border-[var(--line-strong)] hover:text-[var(--ink)]'
                  }`}
                >
                  <Icon name={icon} className="size-5" />
                  {label}
                </button>
              );
            })}
          </div>
        </fieldset>

        <div className="mt-8 rounded-2xl bg-[var(--surface-2)] p-4 text-sm leading-relaxed">
          <p className="font-display font-bold">{sectors[sector.id].pitch}</p>
          <ul className="mt-2 grid gap-1 text-[var(--ink-muted)]">
            {sectors[sector.id].useCases.map((useCase) => (
              <li key={useCase} className="flex items-center gap-2">
                <Icon name="check" className="size-4 shrink-0 text-[var(--teal-ink)]" />
                {useCase}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-[var(--ink-faint)]">{t.note}</p>
        </div>
      </div>

      <DemoPlayer
        key={`${sector.id}-${channel}`}
        t={t}
        sector={sector}
        demo={demos[sector.id]}
        channel={channel}
        speechLang={speechLang}
        reducedMotion={reducedMotion}
      />
    </div>
  );
}
