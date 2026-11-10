/**
 * Forma dels textos legals. A diferència del diccionari general, aquí el tipus
 * s'escriu a mà: són documents (seccions de paràgrafs, llistes i taules) i no
 * una llista de claus, així que el castellà no en pot ser la font.
 */
export type LegalBlock =
  | string
  | { list: string[] }
  | { holder: true }
  | { table: { head: string[]; rows: string[][] } }
  | { links: { label: string; href: string }[] };

export type LegalSection = { heading?: string; blocks: LegalBlock[] };

export type LegalDoc = {
  /** Títol de la pàgina i de la pestanya. */
  title: string;
  description: string;
  sections: LegalSection[];
};

export type LegalDocId = 'legal' | 'privacy' | 'cookies';

export type LegalDictionary = {
  /** Noms curts per als enllaços del peu. */
  nav: Record<LegalDocId, string> & { label: string };
  updated: string;
  holderLabels: {
    name: string;
    nif: string;
    address: string;
    phone: string;
    email: string;
    registry: string;
  };
  /** «Registre Mercantil de Girona, secció 8a…», en cada idioma. */
  registry: (r: {
    city: string;
    section: string;
    sheet: string;
    folio: string;
    volume: string;
  }) => string;
  docs: Record<LegalDocId, LegalDoc>;
};
