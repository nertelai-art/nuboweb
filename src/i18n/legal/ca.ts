import { BROWSER_HELP, H, SITE_DOMAIN, STORAGE } from './shared';
import type { LegalDictionary } from './types';

/** Textos legals en català. Traducció dels castellans (`es.ts`), que en són la font. */
export const ca: LegalDictionary = {
  nav: {
    label: 'Informació legal',
    legal: 'Avís legal',
    privacy: 'Privacitat',
    cookies: 'Galetes',
  },
  updated: 'Darrera actualització: 10 de novembre de 2026',
  holderLabels: {
    name: 'Titular',
    nif: 'NIF',
    address: 'Adreça',
    phone: 'Telèfon',
    email: 'Correu electrònic',
    registry: 'Registre',
  },
  registry: (r) =>
    `Inscrita al Registre Mercantil de ${r.city}, secció ${r.section}a, full ${r.sheet}, foli ${r.folio}, volum ${r.volume}`,
  docs: {
    legal: {
      title: 'Avís legal',
      description: `Titular, condicions d'ús i propietat intel·lectual de ${SITE_DOMAIN}.`,
      sections: [
        { blocks: [`La titular d'aquest lloc web, ${SITE_DOMAIN}, és:`, { holder: true }] },
        {
          heading: "Condicions d'ús",
          blocks: [
            "L'ús d'aquesta web implica l'acceptació plena dels termes i condicions d'aquest avís legal. Tota persona usuària de la web, independentment de la jurisdicció territorial des de la qual hi accedeixi, accepta el compliment i el respecte d'aquestes clàusules.",
          ],
        },
        {
          heading: 'Propietat intel·lectual i industrial',
          blocks: [
            `La totalitat del contingut d'aquest lloc web, ja siguin textos, imatges, sons, marques, logotips o altres elements, així com la seva estructura, disseny, combinacions de colors o forma de presentació, està protegida per drets de propietat industrial i intel·lectual que l'usuari ha de respectar. No és lícita la seva transformació o alteració, comunicació pública o qualsevol altra forma d'explotació per qualsevol procediment sense l'autorització expressa de ${H.name}.`,
          ],
        },
        {
          heading: 'Responsabilitat sobre els continguts',
          blocks: [
            `Tot i que ${H.name} actua amb la màxima diligència possible, pot passar que alguna dada o informació no estigui del tot actualitzada en el moment en què l'usuari la consulti. Per això, les informacions que es presenten en aquesta web tenen una funció orientativa i no obliguen ${H.name}.`,
            "Les converses del simulador d'aquesta web són exemples amb negocis inventats. Serveixen per mostrar com funciona el producte i no corresponen a clients reals.",
            `${H.name} no es fa responsable de la informació que es pugui obtenir a través d'enllaços inclosos a la seva web.`,
            `${H.name} es reserva la facultat de fer, en qualsevol moment i sense necessitat de preavís, modificacions o actualitzacions de la informació i de qualsevol dels elements que integren el disseny i la configuració de la web.`,
          ],
        },
        {
          heading: 'Llei aplicable i jurisdicció',
          blocks: [
            "Els possibles conflictes relatius a aquesta web es regiran exclusivament per la legislació espanyola, i en seran competents els jutjats i tribunals espanyols. L'usuari, en virtut de la seva acceptació, renuncia expressament a qualsevol fur que per aplicació de la Llei d'enjudiciament civil vigent li pogués correspondre.",
          ],
        },
      ],
    },

    privacy: {
      title: 'Política de privacitat',
      description: `Com tracta ${H.name} les dades personals relacionades amb ${SITE_DOMAIN} i amb Nubo IA.`,
      sections: [
        {
          blocks: [
            `${H.name} es compromet a protegir la privacitat de les persones que accedeixen a aquesta web i a qualsevol dels seus serveis. Aquesta política no s'aplica a les webs o xarxes socials de tercers a les quals es pugui arribar mitjançant enllaços; ${H.name} no en controla el contingut ni les polítiques de privacitat.`,
            'En compliment del Reglament (UE) 2016/679 (RGPD) i de la Llei orgànica 3/2018, de protecció de dades personals i garantia dels drets digitals (LOPDGDD), us oferim la informació següent sobre el tractament de les vostres dades personals.',
          ],
        },
        { heading: 'Qui és el responsable del tractament?', blocks: [{ holder: true }] },
        {
          heading: 'Quines dades recull aquesta web?',
          blocks: [
            "Aquesta web no té formularis ni registre d'usuaris: navegar-hi no us demana cap dada personal.",
            'El simulador de trucades i de WhatsApp funciona dins del vostre navegador. No fa servir el micròfon i no envia a cap servidor el que hi passa.',
            "Com qualsevol web, el servidor que l'allotja registra dades tècniques de les visites, com l'adreça IP o el navegador, perquè funcioni i per protegir-la d'abusos.",
          ],
        },
        {
          heading: 'Amb quina finalitat tractem les vostres dades?',
          blocks: [
            {
              list: [
                'Atendre les consultes que ens feu per telèfon, correu electrònic o WhatsApp.',
                'Gestionar la contractació i la prestació dels nostres serveis, inclosos els agents de veu i WhatsApp amb intel·ligència artificial.',
                'Si ens doneu el vostre consentiment, enviar-vos informació sobre les nostres activitats, productes o serveis.',
                'Mantenir la web segura i en funcionament.',
              ],
            },
          ],
        },
        {
          heading: 'Quant de temps conservarem les vostres dades?',
          blocks: [
            'Les dades personals es conservaran mentre sigueu usuaris dels nostres serveis o vulgueu rebre informació i, després, durant els terminis establerts per complir les nostres obligacions legals: 6 anys per a la documentació comptable a efectes mercantils (art. 30 del Codi de comerç) i 4 anys a efectes fiscals (arts. 66 a 70 de la Llei general tributària).',
          ],
        },
        {
          heading: 'Quina és la legitimació per al tractament?',
          blocks: [
            "L'execució del contracte de serveis, els consentiments que ens doneu i, per a les dades tècniques de les visites, l'interès legítim a mantenir la web segura i en funcionament.",
            'Si qui ens facilita dades és menor de 16 anys, caldrà el consentiment del pare, la mare, el tutor o el representant legal. Si no és així, el representant legal del menor ens ho comunicarà tan aviat com ho sàpiga.',
          ],
        },
        {
          heading: 'A quins destinataris es comunicaran les vostres dades?',
          blocks: [
            'Les dades no es comunicaran a tercers, llevat que ho exigeixi una llei o sigui necessari per complir la finalitat del tractament.',
            'Per allotjar la web i prestar el servei fem servir proveïdors tecnològics que actuen com a encarregats del tractament, amb les garanties que exigeix el RGPD.',
          ],
        },
        {
          heading: 'Quins són els vostres drets?',
          blocks: [
            {
              list: [
                'Obtenir confirmació sobre si estem tractant les vostres dades personals.',
                'Accedir a les vostres dades, sol·licitar la rectificació de les inexactes o demanar-ne la supressió quan, entre altres motius, ja no siguin necessàries per a les finalitats per a les quals es van recollir.',
                "Sol·licitar, en determinades circumstàncies, la limitació del tractament. En aquest cas només les conservarem per a l'exercici o la defensa de reclamacions.",
                "Oposar-vos al tractament per motius relacionats amb la vostra situació particular. Deixarem de tractar les dades, excepte per motius legítims imperiosos o per a l'exercici o la defensa de possibles reclamacions.",
                'La portabilitat de les vostres dades.',
                "No ser objecte de decisions basades únicament en el tractament automatitzat, inclosa l'elaboració de perfils, que produeixin efectes jurídics sobre vosaltres o us afectin significativament de manera similar.",
                "Presentar una reclamació davant l'autoritat de control; a Espanya, l'Agència Espanyola de Protecció de Dades (aepd.es).",
              ],
            },
          ],
        },
        {
          heading: 'Com els podeu exercir?',
          blocks: [
            `Enviant un escrit, amb una còpia d'un document que us identifiqui, a ${H.email} o a ${H.address}.`,
          ],
        },
        {
          heading: 'Com hem obtingut les vostres dades i quines dades tractem?',
          blocks: [
            'Les dades que tractem provenen de la mateixa persona interessada, que garanteix que són certes i es compromet a comunicar-nos qualsevol canvi. Són dades identificatives i de contacte (adreces postals o electròniques i telèfon), limitades al que és necessari per prestar els nostres serveis i gestionar la nostra activitat.',
          ],
        },
        {
          heading: 'Fem servir galetes?',
          blocks: [
            "Només una galeta tècnica, per recordar l'idioma que heu triat. No fem servir galetes d'anàlisi ni de publicitat. En trobareu el detall a la política de galetes.",
          ],
        },
        {
          heading: 'Quines mesures de seguretat apliquem?',
          blocks: [
            "Apliquem les mesures de l'article 32 del RGPD per garantir un nivell de seguretat adequat al risc, amb mecanismes que asseguren la confidencialitat, la integritat, la disponibilitat i la resiliència dels sistemes. Entre altres:",
            {
              list: [
                'Informació de les polítiques de tractament de dades al personal.',
                'Còpies de seguretat periòdiques.',
                "Control d'accés a les dades.",
                'Processos regulars de verificació, avaluació i valoració.',
              ],
            },
          ],
        },
        {
          heading: 'Com tractem les dades per compte dels nostres clients?',
          blocks: [
            "Quan prestem els nostres serveis, per exemple quan un agent de Nubo IA atén les trucades i els WhatsApp d'una empresa client, tractem dades de les quals aquesta empresa és responsable. Ho fem com a encarregats del tractament, segons l'article 28 del RGPD. Per tant:",
            {
              list: [
                "Tractarem les dades únicament seguint instruccions documentades del responsable, també pel que fa a les transferències a tercers països o organitzacions internacionals, llevat que una norma de la Unió o dels estats membres ens hi obligui. En aquest cas, n'informarem el responsable abans del tractament, llevat que aquesta norma ho prohibeixi per raons importants d'interès públic.",
                "Garantim que les persones autoritzades per tractar les dades s'han compromès a respectar-ne la confidencialitat.",
                "Apliquem les mesures de seguretat de l'article 32 del RGPD: confidencialitat, integritat, disponibilitat i resiliència dels sistemes; restauració ràpida de l'accés a les dades després d'un incident; verificació regular de l'eficàcia de les mesures, i seudonimització i xifratge quan escaigui.",
                "Respectarem les condicions dels apartats 2 i 4 de l'article 28 del RGPD per recórrer a un altre encarregat del tractament.",
                "Assistirem el responsable perquè pugui respondre les sol·licituds d'exercici de drets del capítol III del RGPD i complir les obligacions de seguretat dels articles 32 a 36.",
                'A elecció del responsable, suprimirem o retornarem totes les dades en acabar el servei i en suprimirem les còpies, llevat que la llei obligui a conservar-les.',
                "Posarem a disposició del responsable la informació necessària per demostrar el compliment de l'article 28 del RGPD i permetrem auditories i inspeccions per part seva o d'un auditor autoritzat.",
              ],
            },
          ],
        },
      ],
    },

    cookies: {
      title: 'Política de galetes',
      description: `Què guarda ${SITE_DOMAIN} al vostre navegador i com esborrar-ho.`,
      sections: [
        {
          heading: 'Què és una galeta?',
          blocks: [
            "Una galeta (cookie) és un petit fragment de text que una web envia al navegador i que es desa a l'ordinador o al mòbil. Quan torneu a visitar la web, el navegador la hi retorna, i així la web pot recordar, per exemple, les vostres preferències.",
          ],
        },
        {
          heading: 'Quines galetes fa servir aquesta web?',
          blocks: [
            'Una de sola, pròpia i tècnica:',
            {
              table: {
                head: ['Nom', 'Tipus', 'Per a què serveix', 'Durada'],
                rows: [
                  [
                    STORAGE.localeCookie,
                    'Pròpia, tècnica',
                    "Recordar l'idioma que heu triat",
                    '1 any',
                  ],
                ],
              },
            },
            `A més, si trieu el tema clar o fosc, la web ho desa a l'emmagatzematge del vostre navegador (${STORAGE.themeKey}). No és una galeta i no surt mai del vostre dispositiu.`,
            "No fem servir galetes d'anàlisi, de publicitat ni de tercers.",
          ],
        },
        {
          heading: 'Consentiment',
          blocks: [
            'Aquestes galetes només serveixen per donar-vos el servei que demaneu, com veure la web en el vostre idioma, i per això estan exemptes del deure de consentiment (article 22.2 de la Llei 34/2002, LSSI). Per aquest motiu aquesta web no mostra cap avís de galetes.',
            'Si algun dia afegim altres galetes, actualitzarem aquesta política i, quan calgui, us demanarem el consentiment abans de fer-les servir.',
          ],
        },
        {
          heading: 'Com les podeu esborrar o bloquejar?',
          blocks: [
            "Podeu esborrar o bloquejar les galetes de qualsevol web des de la configuració del navegador. Si esborreu aquesta, la web tornarà a triar l'idioma segons el vostre navegador.",
            { links: BROWSER_HELP },
          ],
        },
      ],
    },
  },
};
