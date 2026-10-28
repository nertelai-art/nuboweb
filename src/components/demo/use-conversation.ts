'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import type { Speaker, Turn } from '@/i18n/turns';
import { pickVoices, speechAvailable, turnDuration, type VoiceKind } from './speech';

export type Status = 'idle' | 'ringing' | 'live' | 'done';

interface Options {
  mode: 'call' | 'chat';
  /** Si la trucada sona (síntesi de veu del navegador). */
  sound: boolean;
  /** Veu de qui truca, quan hi ha so. */
  callerVoice?: VoiceKind;
  /** Idioma de la veu (BCP 47). */
  speechLang: string;
  reducedMotion: boolean;
}

const wait = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

/**
 * Reprodueix un guió torn a torn. Cada `start` obre una «tirada» nova; la
 * d'abans s'atura sola perquè el seu identificador ja no és el vigent.
 * Qui vulgui un altre guió remunta el component (`key`), així no cal
 * reiniciar l'estat des d'un efecte.
 */
export function useConversation(
  turns: Turn[],
  { mode, sound, callerVoice = 'female', speechLang, reducedMotion }: Options,
) {
  const [status, setStatus] = useState<Status>('idle');
  const [shown, setShown] = useState(0);
  const [words, setWords] = useState(0);
  const [active, setActive] = useState<Speaker | null>(null);
  const run = useRef(0);

  const halt = useCallback(() => {
    run.current += 1;
    if (speechAvailable()) window.speechSynthesis.cancel();
  }, []);

  useEffect(() => halt, [halt]);

  const start = useCallback(async () => {
    halt();
    const id = run.current;
    const alive = () => run.current === id;
    setShown(0);
    setWords(0);
    setActive(null);

    if (reducedMotion) {
      setShown(turns.length);
      setStatus('done');
      return;
    }

    if (mode === 'call') {
      setStatus('ringing');
      await wait(2000);
      if (!alive()) return;
    }
    setStatus('live');

    const voices = sound && mode === 'call' ? pickVoices(speechLang, callerVoice) : null;

    for (let i = 0; i < turns.length; i++) {
      const turn = turns[i]!;

      if (mode === 'chat') {
        // Abans de cada resposta de l'agent, «escribiendo…»: és el que fa que
        // sembli un xat i no una llista.
        setActive(turn.from);
        await wait(turn.from === 'agent' ? 1300 : 900);
        if (!alive()) return;
        setActive(null);
        setShown(i + 1);
        await wait(450);
        continue;
      }

      setActive(turn.from);
      setWords(0);
      await speakTurn(turn, voices, alive, setWords);
      if (!alive()) return;
      setShown(i + 1);
      setWords(0);
      setActive(null);
      await wait(320);
    }
    if (!alive()) return;
    setStatus('done');
  }, [callerVoice, halt, mode, reducedMotion, sound, speechLang, turns]);

  const reset = useCallback(() => {
    halt();
    setStatus('idle');
    setShown(0);
    setWords(0);
    setActive(null);
  }, [halt]);

  return { status, shown, words, active, start, reset };
}

/**
 * Un torn. Amb so, les paraules apareixen quan la veu les diu (`onboundary`);
 * si el sistema no avisa de les paraules, o no arrenca a parlar, al ritme
 * estimat. S'acaba quan acaben text i veu, o quan salta la xarxa de
 * seguretat, perquè `onend` no sempre arriba.
 */
function speakTurn(
  turn: Turn,
  voices: ReturnType<typeof pickVoices>,
  alive: () => boolean,
  onWords: (count: number) => void,
) {
  const total = turn.text.split(/\s+/).length;
  const duration = turnDuration(turn.text);

  return new Promise<void>((resolve) => {
    let revealed = 0;
    let spoken = !voices;
    let finished = false;
    let timer: ReturnType<typeof setInterval> | undefined;
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    const finish = () => {
      if (finished) return;
      finished = true;
      clearInterval(timer);
      timeouts.forEach(clearTimeout);
      onWords(total);
      resolve();
    };
    const maybeFinish = () => {
      if (revealed >= total && spoken) timeouts.push(setTimeout(finish, 220));
    };
    const reveal = (count: number) => {
      revealed = Math.max(revealed, Math.min(total, count));
      onWords(revealed);
      if (revealed >= total) maybeFinish();
    };
    // El rellotge de reserva: una paraula cada tant, fins al final.
    const runClock = () => {
      if (timer) return;
      timer = setInterval(() => {
        if (!alive()) return finish();
        reveal(revealed + 1);
        if (revealed >= total) clearInterval(timer);
      }, duration / total);
    };

    if (!voices) {
      runClock();
      timeouts.push(setTimeout(finish, duration * 1.8 + 1500));
      return;
    }

    let boundaries = false;
    const utterance = new SpeechSynthesisUtterance(turn.text);
    const voice = turn.from === 'agent' ? voices.agent : voices.caller;
    utterance.lang = voice.lang;
    utterance.voice = voice;
    utterance.rate = 1.08;
    utterance.pitch = turn.from === 'agent' ? 1.05 : voices.callerPitch;
    utterance.onstart = () => {
      timeouts.push(
        setTimeout(() => {
          if (!boundaries) runClock();
        }, 700),
      );
    };
    utterance.onboundary = (event) => {
      if (event.name !== 'word' || !alive()) return;
      boundaries = true;
      const upTo = turn.text.slice(0, event.charIndex + Math.max(1, event.charLength ?? 1));
      reveal(upTo.trim().split(/\s+/).length);
    };
    utterance.onend = utterance.onerror = () => {
      spoken = true;
      reveal(total);
    };
    window.speechSynthesis.speak(utterance);

    // Si la veu no arrenca (sense sortida d'àudio, pestanya en segon pla), seguim sense.
    timeouts.push(
      setTimeout(() => {
        if (window.speechSynthesis.speaking) return;
        spoken = true;
        runClock();
      }, 1500),
    );
    timeouts.push(setTimeout(finish, duration * 3 + 3000));
  });
}
