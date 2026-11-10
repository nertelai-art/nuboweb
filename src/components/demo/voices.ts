import type { DemoSector } from '@/content/sectors';
import type { Speaker } from '@/i18n/turns';

/**
 * Veus d'ElevenLabs de les demos. L'agent és la veu de l'agent «Nubo» de
 * producció (Sara Martin), perquè la web soni com el producte. Qui truca,
 * veus castellanes de l'espai de treball, d'home o de dona segons el
 * personatge, i alternades perquè no tots els clients sonin igual.
 * Amb eleven_v3 les mateixes veus parlen català, anglès i francès.
 */
export const MODEL = 'eleven_v3';

export const AGENT_VOICE = 'gD1IexrzCvsXPHUuT0s3'; // Sara Martin

const CALLERS = {
  female: ['kwNLkNjbQHMw9YUFZsHI', '1eHrpOW5l98cxiSRjbzJ'], // Alejandra, Raquel
  male: ['7ilYbYb99yBZGMUUKSaf', 'CdAqYBLnsNjmTqYgD5Ha'], // Alex, Dani
} as const;

const ORDER: Record<string, number> = {
  salud: 0,
  restauracion: 0,
  inmobiliaria: 1,
  automocion: 1,
  asesorias: 0,
  hoteles: 1,
};

export function voiceFor(from: Speaker, sector: DemoSector) {
  if (from === 'agent') return AGENT_VOICE;
  const pool = CALLERS[sector.callerVoice];
  return pool[(ORDER[sector.id] ?? 0) % pool.length]!;
}
