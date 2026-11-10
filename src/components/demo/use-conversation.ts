'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import type { DemoSector } from '@/content/sectors';
import type { Speaker, Turn } from '@/i18n/turns';
import { pickVoices, speechAvailable, turnDuration, type VoiceKind } from './speech';
import { voiceKey, type VoiceTrack, type VoiceTracks } from './voice-key';
import { voiceFor } from './voices';

export type Status = 'idle' | 'ringing' | 'live' | 'done';

interface Options {
  mode: 'call' | 'chat';
  /** Si la trucada sona (síntesi de veu del navegador). */
  sound: boolean;
  /** Veu de qui truca, quan hi ha so. */
  callerVoice?: VoiceKind;
  /** Idioma de la veu (BCP 47). */
  speechLang: string;
  /** Torns gravats d'aquest idioma i el sector, si n'hi ha: sonen en lloc del navegador. */
  recorded?: { tracks: VoiceTracks; sector: DemoSector };
  reducedMotion: boolean;
}

const wait = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

// Un WAV buit: fer-lo sonar dins del clic desbloqueja l'àudio a Safari d'iOS,
// i després el mateix reproductor pot sonar sense un altre gest.
const SILENCE =
  'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA=';

/** El torn gravat, si n'hi ha i encara correspon al text i a la veu d'ara. */
export function trackFor(
  turn: Turn,
  index: number,
  recorded: Options['recorded'],
): VoiceTrack | null {
  if (!recorded) return null;
  const track = recorded.tracks[`${recorded.sector.id}/${index}`];
  if (!track) return null;
  return track.key === voiceKey(turn.text, voiceFor(turn.from, recorded.sector)) ? track : null;
}

/**
 * Reprodueix un guió torn a torn. Cada `start` obre una «tirada» nova; la
 * d'abans s'atura sola perquè el seu identificador ja no és el vigent.
 * Qui vulgui un altre guió remunta el component (`key`), així no cal
 * reiniciar l'estat des d'un efecte.
 */
export function useConversation(
  turns: Turn[],
  { mode, sound, callerVoice = 'female', speechLang, recorded, reducedMotion }: Options,
) {
  const [status, setStatus] = useState<Status>('idle');
  const [shown, setShown] = useState(0);
  const [words, setWords] = useState(0);
  const [active, setActive] = useState<Speaker | null>(null);
  const run = useRef(0);
  const player = useRef<HTMLAudioElement | null>(null);

  const halt = useCallback(() => {
    run.current += 1;
    if (speechAvailable()) window.speechSynthesis.cancel();
    player.current?.pause();
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

    // Amb gravacions: el reproductor es desbloqueja ara, dins del clic, i
    // mentre sona el timbre es baixen els àudios d'aquesta conversa.
    const useRecorded = sound && mode === 'call' && Boolean(recorded);
    if (useRecorded) {
      player.current ??= new Audio();
      player.current.src = SILENCE;
      player.current.play().catch(() => {});
      for (const [i, turn] of turns.entries()) {
        const track = trackFor(turn, i, recorded);
        if (track) void fetch(track.file).catch(() => {});
      }
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
      const track = useRecorded ? trackFor(turn, i, recorded) : null;
      await (track && player.current
        ? playTrack(turn, track, player.current, alive, setWords)
        : speakTurn(turn, voices, alive, setWords));
      if (!alive()) return;
      setShown(i + 1);
      setWords(0);
      setActive(null);
      await wait(320);
    }
    if (!alive()) return;
    setStatus('done');
  }, [callerVoice, halt, mode, recorded, reducedMotion, sound, speechLang, turns]);

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
 * Un torn gravat. Les paraules apareixen quan l'àudio arriba al final de
 * cadascuna (`ends`, de l'alineació d'ElevenLabs). Si l'àudio no sona (sense
 * xarxa, bloquejat), el text surt igualment al ritme gravat.
 */
function playTrack(
  turn: Turn,
  track: VoiceTrack,
  audio: HTMLAudioElement,
  alive: () => boolean,
  onWords: (count: number) => void,
) {
  const total = turn.text.split(/\s+/).length;
  const length = track.ends.at(-1) ?? turnDuration(turn.text);

  return new Promise<void>((resolve) => {
    let finished = false;
    let frame = 0;
    let started = 0;
    let silent = false;
    const finish = () => {
      if (finished) return;
      finished = true;
      cancelAnimationFrame(frame);
      clearTimeout(safety);
      audio.onended = audio.onerror = null;
      onWords(total);
      setTimeout(resolve, 220);
    };
    // Temps de reproducció: el de l'àudio, o el rellotge si no sona.
    const now = () => (silent ? performance.now() - started : audio.currentTime * 1000);
    const tick = () => {
      if (!alive()) {
        audio.pause();
        return finish();
      }
      const t = now() + 60;
      const count = track.ends.findIndex((end) => end > t);
      onWords(count === -1 ? total : Math.min(total, count));
      if (silent && t >= length) return finish();
      frame = requestAnimationFrame(tick);
    };
    const fallBack = () => {
      if (silent || finished) return;
      silent = true;
      started = performance.now();
    };

    audio.onended = finish;
    audio.onerror = fallBack;
    audio.src = track.file;
    audio.play().catch(fallBack);
    frame = requestAnimationFrame(tick);
    const safety = setTimeout(finish, length + 4000);
  });
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
