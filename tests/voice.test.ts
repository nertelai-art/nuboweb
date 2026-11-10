import { describe, expect, it } from 'vitest';
import { DEMO_SECTORS } from '@/content/sectors';
import { trackFor } from '@/components/demo/use-conversation';
import { voiceKey } from '@/components/demo/voice-key';
import { AGENT_VOICE, voiceFor } from '@/components/demo/voices';
import { agent, caller } from '@/i18n/turns';

const sector = DEMO_SECTORS[0]!;

describe('voiceKey', () => {
  it('canvia si canvia el text o la veu', () => {
    const base = voiceKey('Hola, buenas tardes.', AGENT_VOICE);
    expect(voiceKey('Hola, buenas tardes.', AGENT_VOICE)).toBe(base);
    expect(voiceKey('Hola, buenos días.', AGENT_VOICE)).not.toBe(base);
    expect(voiceKey('Hola, buenas tardes.', 'una-altra-veu')).not.toBe(base);
  });
});

describe('trackFor', () => {
  const turn = agent('Clínica Dental Sonríe, buenas tardes.');
  const track = {
    file: '/audio/demo/es/salud-0.mp3',
    key: voiceKey(turn.text, voiceFor('agent', sector)),
    ends: [400, 900, 1300, 1900, 2400],
  };
  const recorded = { tracks: { [`${sector.id}/0`]: track }, sector };

  it("fa servir la gravació quan correspon al text d'ara", () => {
    expect(trackFor(turn, 0, recorded)).toBe(track);
  });

  it('torna a la veu del navegador si el guió ha canviat', () => {
    expect(trackFor(agent('Clínica Dental Sonríe, buenos días.'), 0, recorded)).toBeNull();
  });

  it('no barreja torns ni parlants', () => {
    expect(trackFor(turn, 1, recorded)).toBeNull();
    expect(trackFor(caller(turn.text), 0, recorded)).toBeNull();
  });

  it('sense gravacions, res', () => {
    expect(trackFor(turn, 0, undefined)).toBeNull();
  });
});
