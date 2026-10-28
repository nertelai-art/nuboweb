import type { Dictionary } from '@/i18n/dictionaries';

/**
 * Sectors: l'estructura (ordre, icona, quins tenen demo i amb quina veu parla
 * qui truca). Els textos i els guions són als diccionaris, per idioma.
 * Les converses són guions escrits i revisats, no surten de cap model: així
 * la demo sona sempre igual de bé i no gasta res.
 */

export type IconName =
  'tooth' | 'fork' | 'house' | 'car' | 'briefcase' | 'bed' | 'bag' | 'wrench' | 'truck' | 'headset';

export type SectorId = keyof Dictionary['sectors']['items'];
export type DemoId = keyof Dictionary['demos'];
export type VoiceKind = 'female' | 'male';

export interface Sector {
  id: SectorId;
  icon: IconName;
  /** Amb quina veu parla qui truca a la demo amb so; sense, no hi ha demo. */
  callerVoice?: VoiceKind;
}

export const SECTORS: Sector[] = [
  { id: 'salud', icon: 'tooth', callerVoice: 'female' },
  { id: 'restauracion', icon: 'fork', callerVoice: 'male' },
  { id: 'inmobiliaria', icon: 'house', callerVoice: 'female' },
  { id: 'automocion', icon: 'car', callerVoice: 'male' },
  { id: 'asesorias', icon: 'briefcase', callerVoice: 'female' },
  { id: 'hoteles', icon: 'bed', callerVoice: 'female' },
  { id: 'comercio', icon: 'bag' },
  { id: 'servicios', icon: 'wrench' },
  { id: 'logistica', icon: 'truck' },
  { id: 'atencion', icon: 'headset' },
];

export type DemoSector = Sector & { id: DemoId; callerVoice: VoiceKind };

export const DEMO_SECTORS = SECTORS.filter(
  (sector): sector is DemoSector => sector.callerVoice !== undefined,
);
