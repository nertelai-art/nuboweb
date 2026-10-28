export type Speaker = 'caller' | 'agent';

export interface Turn {
  from: Speaker;
  text: string;
}

/** Torns de guió: `agent('…')` i `caller('…')` fan que el tipus sigui exacte. */
export const agent = (text: string): Turn => ({ from: 'agent', text });
export const caller = (text: string): Turn => ({ from: 'caller', text });
