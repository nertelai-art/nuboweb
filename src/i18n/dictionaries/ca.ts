import { agent, caller } from '../turns';
import type { Dictionary } from './es';

/** Textos en català. Compleixen sencer el tipus `Dictionary` del castellà. */
export const ca: Dictionary = {
  meta: {
    title: 'Nubo IA · Agents de veu i WhatsApp amb IA per a la teva empresa',
    description:
      "Un agent d'intel·ligència artificial que contesta les trucades i els WhatsApp de la teva empresa 24/7: dona cites, pren reserves, resol dubtes i et passa el que és important. De Nubo Telecom.",
    ogTitle: 'Nubo IA · La teva empresa contesta sempre',
    ogDescription:
      "Contesta trucades i WhatsApp amb IA, 24/7, al teu número de sempre. Escolta una trucada d'exemple.",
  },

  nav: {
    how: 'Com funciona',
    demo: 'Prova-ho',
    benefits: 'Avantatges',
    sectors: 'Sectors',
    group: 'Grup Nubo',
    faq: 'Preguntes',
    cta: 'Vull el meu agent',
    menuOpen: 'Obrir el menú',
    menuClose: 'Tancar el menú',
    skip: 'Saltar al contingut',
    home: 'Nubo IA, inici',
    main: 'Principal',
    language: 'Idioma',
    themeToLight: 'Canviar a mode clar',
    themeToDark: 'Canviar a mode fosc',
  },

  hero: {
    eyebrow: 'Nubo IA · Recepcionista amb intel·ligència artificial',
    titleStart: 'La teva empresa contesta',
    titleHighlight: 'totes les trucades',
    titleEnd: 'i WhatsApp. Les 24 hores.',
    subtitle:
      "Un agent d'IA atén els teus clients per telèfon i per WhatsApp com ho faria la teva millor recepcionista: dona cites, pren reserves, resol dubtes i t'avisa del que és important. Al teu número de sempre.",
    ctaPrimary: "Escolta una trucada d'exemple",
    ctaSecondary: 'Parlar amb un assessor',
    capabilities: [
      'Contesta trucades',
      'Respon WhatsApp',
      'Agenda cites i reserves',
      'Et passa el que és important',
    ],
    live: {
      label: 'Així funciona, en directe',
      steps: ['Truca un client', 'La IA contesta', 'Reserva la cita', 'Ho confirma per WhatsApp'],
      incoming: 'Trucada entrant',
      afterHours: "Fora d'horari · 21:47",
      answered: 'Atesa per Nubo IA',
      callerLine: 'Hola, teniu hora per demà?',
      agentLine: 'Sí: demà a les 10:30. Te la reservo?',
      bookedTitle: 'Cita reservada',
      bookedDetail: 'Demà · 10:30 · Neteja dental',
      whatsappFrom: 'Clínica Dental Sonríe',
      whatsappText: '✅ Cita confirmada: demà a les 10:30. Fins aviat!',
      ownerNote: 'Resum enviat al teu equip',
    },
  },

  how: {
    eyebrow: 'Com funciona',
    title: 'Així treballa',
    titleHighlight: 'el teu agent',
    steps: [
      {
        title: 'Un agent amb la teva marca',
        text: 'El preparem amb la veu, el to i la informació del teu negoci. Respon com si fos de la casa.',
      },
      {
        title: 'Entren trucades i WhatsApp',
        text: 'Atén al teu número de sempre i al teu WhatsApp Business. Totes alhora, a qualsevol hora.',
      },
      {
        title: 'Entén i decideix',
        text: 'Consulta els teus horaris, serveis, preus i agenda, i pregunta el que falta per resoldre.',
      },
      {
        title: "Fa la feina i t'avisa",
        text: 'Dona la cita, crea la fitxa, envia la confirmació i, si cal, passa la trucada al teu equip.',
      },
    ],
    agentLabel: 'El teu agent Nubo IA',
    inputs: [
      { title: 'Trucada entrant', detail: '+34 6•• ••• 218' },
      { title: 'WhatsApp nou', detail: '«Obriu dissabte?»' },
      { title: "Trucada fora d'horari", detail: 'Diumenge · 22:10' },
    ],
    knowledge: ['Horaris', 'Serveis', 'Preus', 'Agenda', 'Les teves normes'],
    outputs: [
      { title: 'Cita a la teva agenda', detail: 'Divendres · 17:00' },
      { title: 'Fitxa al CRM', detail: 'Client nou · interès alt' },
      { title: 'Confirmació per WhatsApp', detail: 'Enviada al client' },
      { title: 'Passa al teu equip', detail: 'Amb el cas explicat' },
    ],
    srDescription:
      "Les tres cintes del logotip de Nubo formen la N de l'agent. A l'esquerra arriben trucades i WhatsApp; al voltant de l'agent apareix el que sap del teu negoci; a la dreta surten les tasques fetes: cita, fitxa, confirmació i avís al teu equip.",
  },

  demo: {
    eyebrow: 'Prova-ho',
    title: "Truca a un negoci d'exemple",
    titleHighlight: 'i escolta qui contesta',
    subtitle: 'Tres passos i ho sents. Sense registrar-te i sense donar el teu telèfon.',
    step1: 'Tria un negoci',
    step2: 'Tria el canal',
    step3: 'Prem i escolta',
    channelCall: 'Trucada de veu',
    channelWhatsapp: 'WhatsApp',
    sound: 'Amb so',
    soundHint: 'Puja el volum del teu dispositiu.',
    noVoice: 'El teu navegador no té veu en aquest idioma: veuràs la conversa escrita.',
    startCall: 'Trucar ara',
    startChat: 'Començar la conversa',
    hangUp: 'Penjar',
    again: 'Repetir',
    statusIdle: 'A punt per trucar',
    statusRinging: 'Trucant…',
    statusLive: "En trucada amb l'agent d'IA",
    statusDone: 'Trucada acabada',
    statusChatIdle: 'A punt per escriure',
    statusChatLive: 'Conversa en curs',
    statusChatDone: 'Conversa resolta',
    pressToCall: 'Prem «Trucar ara»',
    attending: "Atén l'agent d'IA",
    transcriptLabel: 'Transcripció de la trucada',
    chatLabel: 'Conversa de WhatsApp',
    agent: 'Agent IA',
    speaking: 'parlant',
    online: 'en línia',
    typing: 'escrivint…',
    today: 'Exemple · Avui',
    message: 'Missatge',
    didTitle: "El que ha fet l'agent",
    pendingHint: 'Truca i mira com es completa mentre parla.',
    chatPendingHint: 'Comença i mira com ho resol.',
    pipBack: 'Tornar a la demo',
    pipClose: 'Tancar',
    note: "Conversa d'exemple amb un negoci inventat. El teu agent parla de la teva empresa, amb els teus horaris, els teus serveis i la teva agenda.",
  },

  benefits: {
    eyebrow: 'Avantatges',
    title: 'El que fa per tu',
    titleHighlight: 'mentre atens el teu',
    calls: {
      title: 'Cap trucada perduda',
      text: 'Les contesta totes alhora: en hora punta, de vacances i a les tres de la matinada.',
      log: ['09:12 · Atesa', '13:58 · Atesa', '14:03 · Atesa', '21:47 · Atesa', '03:20 · Atesa'],
      ring: '24 h',
    },
    bookings: {
      title: 'Cites i reserves, soles',
      text: 'Mira la teva agenda, ofereix forats, confirma i envia el recordatori.',
      days: ['Dl', 'Dt', 'Dc', 'Dj', 'Dv'],
    },
    leads: {
      title: 'Clients, no curiosos',
      text: 'Pregunta el que has de saber i et deixa la fitxa feta.',
      fields: [
        { label: 'Nom', value: 'Laura Martí' },
        { label: 'Busca', value: 'Pis 3 hab.' },
        { label: 'Finançament', value: 'Preaprovat' },
      ],
      badge: 'Interès alt',
    },
    handoff: {
      title: 'Passa a una persona quan toca',
      text: 'Transfereix al teu equip amb el cas ja explicat.',
      transferring: 'Transferint a recepció',
      summary: "Resum: urgència, mal de queixal des d'ahir.",
    },
    languages: {
      title: "En l'idioma de qui truca",
      text: 'Amb el teu to i les teves normes, en castellà, català, anglès, francès i més.',
      greetings: [
        'Hola, ¿en qué te ayudo?',
        'Bon dia, com et puc ajudar?',
        'Hello, how can I help?',
        'Bonjour, je vous écoute.',
      ],
    },
    records: {
      title: 'Tot queda apuntat',
      text: 'Cada conversa amb resum, motiu i transcripció en un tauler.',
      week: 'Aquesta setmana',
      calls: 'Trucades',
      booked: 'Cites',
    },
  },

  compare: {
    eyebrow: 'El dia a dia',
    title: 'El mateix dia,',
    titleHighlight: 'amb i sense agent',
    colSituation: 'Situació',
    colToday: 'Avui',
    colWith: 'Amb Nubo IA',
    rows: [
      [
        "Una trucada a l'hora de dinar",
        'Salta el contestador i el client truca a un altre',
        "L'atenen i surt amb cita",
      ],
      ['Tres trucades alhora', 'Dues esperen; una penja', "Les tres ateses a l'instant"],
      ['Un WhatsApp a les 23:00', "Es contesta demà, si algú se'n recorda", 'Respost en segons'],
      ['Una urgència de veritat', 'Es perd entre la resta', 'Passa directa a qui està de guàrdia'],
      ['Final del dia', 'Notes en paper i trucades per tornar', 'Un resum de tot al tauler'],
    ],
  },

  sectors: {
    eyebrow: 'Sectors',
    title: 'Fet per a negocis que',
    titleHighlight: 'viuen del telèfon',
    intro:
      'Cada agent es prepara per a un negoci concret. Aquests són els més habituals; si el teu no hi és, també.',
    listen: 'Escoltar exemple',
    items: {
      salud: {
        name: 'Clíniques i salut',
        pitch: "La recepció deixa de ser un coll d'ampolla.",
        useCases: [
          'Demana, canvia i anul·la cites',
          'Recordatoris i confirmacions',
          'Urgències a la persona de guàrdia',
        ],
      },
      restauracion: {
        name: 'Restauració',
        pitch: 'Reserves en ple servei, sense deixar la sala.',
        useCases: [
          'Reserves i canvis de taula',
          'Al·lèrgies i peticions especials',
          'Comandes per emportar',
        ],
      },
      inmobiliaria: {
        name: 'Immobiliàries',
        pitch: "Cada trucada d'un anunci acaba en visita, no en bústia.",
        useCases: [
          'Respon sobre cada immoble',
          'Filtra i qualifica compradors',
          'Agenda visites amb el comercial',
        ],
      },
      automocion: {
        name: 'Tallers i automoció',
        pitch: "Els mecànics treballen; el telèfon s'atén sol.",
        useCases: ['Cita per a revisió i ITV', 'Estat de la reparació', 'Pressupostos i recollida'],
      },
      asesorias: {
        name: 'Assessories i despatxos',
        pitch: 'Cada client arriba al professional que toca, amb el cas explicat.',
        useCases: [
          'Primera consulta i triatge',
          'Recull documentació',
          'Recorda terminis i pagaments',
        ],
      },
      hoteles: {
        name: 'Hotels i turisme',
        pitch: "Reserves directes a qualsevol hora i en l'idioma de l'hoste.",
        useCases: [
          'Disponibilitat i reserves directes',
          'Check-in, horaris i serveis',
          'En diversos idiomes',
        ],
      },
      comercio: {
        name: 'Comerç i e-commerce',
        pitch: '«On és la meva comanda?», sense cues ni esperes.',
        useCases: ['Estat de comandes', 'Canvis i devolucions', 'Estoc i recomanacions'],
      },
      servicios: {
        name: 'Serveis tècnics',
        pitch: 'Les avaries entren ordenades i amb prioritat.',
        useCases: ["Recull l'avaria i la urgència", 'Assigna tècnic i franja', 'Avisa quan arriba'],
      },
      logistica: {
        name: 'Logística i transport',
        pitch: 'Seguiment i canvis de lliurament sense oficina.',
        useCases: ['On és el meu enviament?', 'Canviar adreça o dia', 'Incidències de lliurament'],
      },
      atencion: {
        name: 'Atenció al client',
        pitch: "Absorbeix els pics i deixa a l'equip el que necessita una persona.",
        useCases: [
          "Preguntes freqüents a l'instant",
          'Desbordament en hores punta',
          'Passa a un agent amb context',
        ],
      },
    },
  },

  demos: {
    salud: {
      business: 'Clínica Dental Sonríe',
      caller: 'Marta',
      call: [
        agent('Clínica Dental Sonríe, bona tarda. En què et puc ajudar?'),
        caller('Hola, voldria demanar hora per a una neteja.'),
        agent(
          "És clar. Tinc dijous a dos quarts d'onze o divendres a les cinc. Quin et va millor?",
        ),
        caller('Divendres a les cinc, perfecte.'),
        agent(
          "Fet: divendres a les cinc amb la doctora Puig. T'envio la confirmació per WhatsApp. Alguna cosa més?",
        ),
        caller('No, res més. Gràcies!'),
      ],
      callResult: {
        title: 'Cita creada',
        rows: [
          { label: 'Motiu', value: 'Neteja dental' },
          { label: 'Quan', value: 'Divendres · 17:00' },
          { label: 'Amb', value: 'Dra. Puig' },
        ],
        actions: [
          "Cita desada a l'agenda",
          'Confirmació enviada per WhatsApp',
          'Recordatori programat 24 h abans',
        ],
      },
      whatsapp: [
        caller('Hola! Tinc hora demà a les 10 i no podré venir 😕'),
        agent('Cap problema, Marta. Te la canvio? Tinc dilluns a les 9:30 o dimarts a les 12:00.'),
        caller('Dimarts a les 12 millor'),
        agent('Fet, canviada. Te ho deixo resumit:'),
      ],
      whatsappSummary: [
        { emoji: '❌', label: 'Anul·lada', value: 'Demà · 10:00' },
        { emoji: '✅', label: 'Nova', value: 'Dimarts · 12:00' },
        { emoji: '📍', label: 'On', value: 'Clínica Dental Sonríe' },
      ],
    },
    restauracion: {
      business: 'Restaurante La Brasa',
      caller: 'Jordi',
      call: [
        agent('Restaurante La Brasa, digui?'),
        caller('Bones, teniu taula per a quatre dissabte a la nit?'),
        agent('Sí. Us puc oferir a les nou o a dos quarts de deu. Terrassa o interior?'),
        caller('A les nou, a la terrassa. La meva parella és celíaca.'),
        agent(
          'Anotat: dissabte a les nou, quatre persones, terrassa i una persona celíaca. A nom de qui?',
        ),
        caller('De Jordi. Gràcies.'),
      ],
      callResult: {
        title: 'Reserva confirmada',
        rows: [
          { label: 'Persones', value: '4 · terrassa' },
          { label: 'Quan', value: 'Dissabte · 21:00' },
          { label: 'Avís', value: 'Una persona celíaca' },
        ],
        actions: [
          'Reserva al llibre de reserves',
          "Avís d'al·lèrgia a cuina",
          'Confirmació per WhatsApp',
        ],
      },
      whatsapp: [
        caller('Feu menjar per emportar avui?'),
        agent('Sí, de 13:00 a 15:30. Què et ve de gust? Et passo la carta si vols 📋'),
        caller('Dos pollastres a la brasa amb patates, per a les 14:00'),
        agent('Perfecte, comanda feta:'),
      ],
      whatsappSummary: [
        { emoji: '🍗', label: 'Comanda', value: '2 pollastres amb patates' },
        { emoji: '🕑', label: 'Recollida', value: 'Avui · 14:00' },
        { emoji: '💶', label: 'Pagament', value: 'En recollir' },
      ],
    },
    inmobiliaria: {
      business: 'Inmobiliaria Costa Norte',
      caller: 'Laura',
      call: [
        agent('Inmobiliaria Costa Norte, bon dia.'),
        caller('Truco pel pis de tres habitacions del centre. Encara està disponible?'),
        agent(
          'Sí, encara està disponible. El busques per viure-hi o com a inversió? I tens el finançament encarrilat?',
        ),
        caller("Per viure-hi, i el banc ja me l'ha preaprovat."),
        agent("Genial. Et puc agendar una visita amb l'Àlex dimecres a les sis. Et va bé?"),
        caller('Sí, perfecte.'),
      ],
      callResult: {
        title: 'Visita agendada',
        rows: [
          { label: 'Immoble', value: 'Pis 3 hab. · centre' },
          { label: 'Interès', value: 'Alt · hipoteca preaprovada' },
          { label: 'Visita', value: 'Dimecres · 18:00 amb Àlex' },
        ],
        actions: [
          'Client creat al CRM',
          "Visita a l'agenda d'Àlex",
          'Fitxa del pis enviada per WhatsApp',
        ],
      },
      whatsapp: [
        caller("Hola, l'àtic de la platja admet mascotes?"),
        agent('Hola, Laura! Sí, el propietari accepta mascotes petites 🐶 El vols veure?'),
        caller('Sí, divendres a la tarda?'),
        agent("Te'l reservo:"),
      ],
      whatsappSummary: [
        { emoji: '🏖️', label: 'Immoble', value: 'Àtic a la platja' },
        { emoji: '📅', label: 'Visita', value: 'Divendres · 17:30' },
        { emoji: '👤', label: "T'atén", value: 'Àlex' },
      ],
    },
    automocion: {
      business: 'Talleres Montseny',
      caller: 'Pere',
      call: [
        agent('Talleres Montseny, en què et puc ajudar?'),
        caller('Hola, el meu cotxe ja està? És el Golf gris.'),
        agent(
          'Un moment… Sí, Pere: el Golf està a punt. Canvi de pastilles i revisió fets. Pots passar fins a les set.',
        ),
        caller('Genial! Em podeu donar ja cita per a la ITV?'),
        agent(
          "Te la demano per a dilluns a primera hora i el portem nosaltres. T'aviso per WhatsApp.",
        ),
        caller('Perfecte, gràcies.'),
      ],
      callResult: {
        title: 'Client informat',
        rows: [
          { label: 'Vehicle', value: 'Golf gris · a punt' },
          { label: 'Feina', value: 'Pastilles i revisió' },
          { label: 'ITV', value: 'Dilluns · 8:00' },
        ],
        actions: [
          'Estat consultat al sistema',
          "Cita d'ITV creada",
          'Factura enviada per WhatsApp',
        ],
      },
      whatsapp: [
        caller("M'ha sortit un llum taronja al tauler 😬"),
        agent("Ho mirem. Me n'envies una foto? Si és el motor, millor no fer viatges llargs."),
        caller('📷 Foto enviada'),
        agent("És l'avís de motor. T'he fet un forat:"),
      ],
      whatsappSummary: [
        { emoji: '⚠️', label: 'Avís', value: 'Llum de motor' },
        { emoji: '📅', label: 'Diagnosi', value: 'Demà · 9:00' },
        { emoji: '🚗', label: 'Cotxe', value: 'Golf gris' },
      ],
    },
    asesorias: {
      business: 'Assessoria Ter',
      caller: 'Núria',
      call: [
        agent('Assessoria Ter, bon dia.'),
        caller("Hola, sóc autònoma i m'ha arribat una carta d'Hisenda que no entenc."),
        agent(
          'Tranquil·la, ho mirem. És un requeriment o una notificació de pagament? Si el tens a mà, digues-me el termini.',
        ),
        caller('Diu requeriment, i hi ha deu dies.'),
        agent(
          "Et passo amb en Carles, que porta la fiscalitat d'autònoms. Mentrestant, envia'ns la carta per WhatsApp i la tindrà al davant.",
        ),
        caller("D'acord, ara mateix."),
      ],
      callResult: {
        title: 'Cas derivat',
        rows: [
          { label: 'Tema', value: "Requeriment d'Hisenda" },
          { label: 'Termini', value: '10 dies · prioritat alta' },
          { label: 'Per a', value: 'Carles · fiscal' },
        ],
        actions: [
          'Trucada transferida a Carles',
          'Fitxa amb el resum del cas',
          'Enllaç per pujar la carta',
        ],
      },
      whatsapp: [
        caller("Què necessito per a la renda d'enguany?"),
        agent("T'ho preparo en una llista. Has tingut canvis: pis, fills, lloguer…?"),
        caller('He comprat un pis'),
        agent('Doncs necessitarem això:'),
      ],
      whatsappSummary: [
        { emoji: '🪪', label: 'DNI', value: 'De tots els titulars' },
        { emoji: '🏠', label: 'Pis', value: 'Escriptura i rebuts de la hipoteca' },
        { emoji: '📅', label: 'Cita', value: 'Dimarts · 11:00 amb Carles' },
      ],
    },
    hoteles: {
      business: 'Hotel Mas de la Riera',
      caller: 'Sophie',
      call: [
        agent('Hotel Mas de la Riera, bona nit.'),
        caller('Hola, teniu habitació doble per al pont de desembre?'),
        agent('Sí, em queda una doble amb vistes al jardí, del sis al vuit, amb esmorzar inclòs.'),
        caller('Es pot arribar tard? Arribarem cap a les onze.'),
        agent(
          "Cap problema: deixo nota a recepció per a l'arribada tardana. T'envio l'enllaç per confirmar la reserva.",
        ),
        caller('Genial, moltes gràcies.'),
      ],
      callResult: {
        title: 'Reserva directa',
        rows: [
          { label: 'Habitació', value: 'Doble · vistes al jardí' },
          { label: 'Dates', value: '6 al 8 de desembre' },
          { label: 'Nota', value: 'Arribada 23:00' },
        ],
        actions: [
          "Prereserva al sistema de l'hotel",
          'Enllaç de pagament enviat',
          'Avís a recepció de nit',
        ],
      },
      whatsapp: [
        caller('Hi! Is breakfast included?'),
        agent('Hi Sophie! Yes, breakfast is included, from 8 to 10:30 ☕'),
        caller('Great. Can we book dinner for Saturday?'),
        agent('Done! Here are the details:'),
      ],
      whatsappSummary: [
        { emoji: '🍽️', label: 'Dinner', value: 'Saturday · 20:30' },
        { emoji: '👥', label: 'Guests', value: '2' },
        { emoji: '🌐', label: 'Idioma', value: 'Atesa en anglès' },
      ],
    },
  },

  ecosystem: {
    eyebrow: 'Integrat amb Nubo',
    title: 'El teu operador, la teva centraleta',
    titleHighlight: 'i el teu agent',
    points: [
      {
        title: 'Un sol proveïdor',
        text: 'Línia, centraleta i agent amb el mateix operador. Una factura i un telèfon de suport.',
      },
      {
        title: 'Sense canviar de número',
        text: "L'agent atén al número que els teus clients ja coneixen. Tu decideixes quan: sempre, fora d'horari o quan dona ocupat.",
      },
      {
        title: 'Suport de persones',
        text: "L'equip de Nubo ho prepara amb tu, ho posa en marxa i ho ajusta quan canvia el teu negoci.",
      },
    ],
    nodes: {
      centralita: { label: 'Centralita Virtual', note: 'Transfereix a les teves extensions' },
      fijo: { label: 'Nubo Fijo', note: 'El teu número de sempre' },
      movil: { label: 'Nubo Móvil', note: 'Desviament des del mòbil' },
      whatsapp: { label: 'WhatsApp Business', note: 'El mateix agent, per escrit' },
      crm: { label: 'Agenda i CRM', note: "Cites i fitxes a l'instant" },
    },
  },

  onboarding: {
    eyebrow: 'Com comencem',
    title: 'De la primera xerrada',
    titleHighlight: 'al teu agent en marxa',
    steps: [
      {
        title: 'Ens expliques el teu negoci',
        text: "Quines trucades reps, què pregunten, què pot resoldre l'agent i què ha de passar al teu equip.",
      },
      {
        title: "L'escoltes abans que ningú",
        text: "Preparem el teu agent amb la teva informació i el teu to. El proves trucant tu, i l'ajustem.",
      },
      {
        title: "L'activem a la teva línia",
        text: "Comença quan tu diguis: fora d'horari, quan dona ocupat o sempre. I l'anem afinant.",
      },
    ],
    guarantees: [
      {
        title: 'Les teves dades, protegides',
        text: 'Pensat per complir el RGPD. Tu decideixes què es guarda i durant quant de temps.',
      },
      {
        title: 'Tu poses les regles',
        text: 'Què respon, què no, quan transfereix i a qui. Es canvia sense tocar res tècnic.',
      },
      {
        title: 'Persones al darrere',
        text: 'El suport de Nubo Telecom, el de sempre, també per al teu agent.',
      },
    ],
  },

  group: {
    eyebrow: 'Grup Nubo',
    title: 'Darrere del teu agent,',
    titleHighlight: 'un grup que ja et connecta',
    intro:
      'Nubo IA forma part del Grup Nubo: un operador de dades i veu amb solucions flexibles i 100 % digitals per a empreses i llars, que també té cura de la teva energia i la teva seguretat.',
    telecom: {
      name: 'Nubo Telecom',
      text: 'Internet, mòbil, fix i centraleta virtual. La xarxa sobre la qual funciona el teu agent.',
      services: ['Nubo Internet', 'Nubo Móvil', 'Nubo Voz Fijo', 'Centralita Virtual'],
    },
    energy: {
      name: 'Nubo Energy',
      text: 'Energia per a la teva empresa i la teva llar, amb el mateix tracte proper.',
    },
    security: {
      name: 'Nubo Security',
      text: 'Seguretat per protegir el que manté la teva empresa en marxa.',
    },
    visit: 'Visitar',
    cta: 'Coneix Nubo Telecom',
    newTab: "(s'obre en una pestanya nova)",
  },

  faq: {
    eyebrow: 'Preguntes freqüents',
    title: 'El que ens',
    titleHighlight: 'pregunten sempre',
    intro: "Et queda algun dubte? Truca'ns i te'l resol una persona.",
    items: [
      {
        q: 'Es nota que és una intel·ligència artificial?',
        a: "Parla amb naturalitat, entén frases a mitges i no obliga a prémer tecles. Tot i això, si algú ho pregunta, l'agent diu que és un assistent virtual: la transparència també dona confiança.",
      },
      {
        q: 'Què passa si no sap respondre?',
        a: 'Ho diu, pren nota i et passa el cas; o transfereix la trucada a la persona que tu triïs, amb el resum ja fet. Tu decideixes què resol sol i què no.',
      },
      {
        q: 'Haig de canviar de número?',
        a: "No. L'agent atén al teu número de sempre. Pots activar-lo per a totes les trucades, només fora d'horari o només quan la línia dona ocupat.",
      },
      {
        q: 'Funciona amb la meva centraleta i la meva agenda?',
        a: "Amb la Centralita Virtual de Nubo s'integra de manera directa. Amb agendes, CRM i programes de gestió ho veiem cas per cas a la primera reunió.",
      },
      {
        q: 'Atén també per WhatsApp?',
        a: 'Sí. El mateix agent pot contestar el teu WhatsApp Business amb la mateixa informació i les mateixes regles que per telèfon.',
      },
      {
        q: 'En quins idiomes parla?',
        a: "En castellà, català, anglès, francès i molts més. Contesta en l'idioma de qui truca.",
      },
      {
        q: 'Quant costa?',
        a: 'Depèn de quantes trucades i converses atén i de què ha de fer. Et preparem una proposta tancada després de conèixer el teu negoci, sense compromís.',
      },
      {
        q: 'I les meves dades?',
        a: 'Es tracten segons el RGPD. Tu decideixes què es grava i durant quant de temps, i les converses només les veu el teu equip.',
      },
    ],
  },

  contact: {
    eyebrow: 'Comencem',
    title: 'Escolta el teu propi agent',
    titleHighlight: 'abans de decidir',
    text: "Explica'ns com treballes i et preparem una demo amb el nom de la teva empresa. Sense compromís.",
    call: 'Trucar al',
    write: 'Escriure a',
    free: 'Trucada gratuïta.',
    mailSubject: "Vull un agent d'IA per a la meva empresa",
    partnerTitle: 'Ets distribuïdor de Nubo?',
    partnerText:
      "Afegeix agents d'IA al que ja ofereixes als teus clients, amb el suport tècnic de Nubo.",
    partnerCta: 'Programa de distribuïdors',
  },

  footer: {
    tagline:
      'Agents de veu i WhatsApp amb intel·ligència artificial, del teu operador de dades i veu.',
    thisPage: 'Nubo IA',
    group: 'Grup Nubo',
    contact: 'Contacte',
    legalNote: "Les converses d'aquesta pàgina són exemples amb negocis inventats.",
  },

  notFound: {
    title: 'Aquesta pàgina no contesta',
    text: "Però el nostre agent sí. Torna a l'inici i prova-ho.",
    back: "Tornar a l'inici",
  },
};
