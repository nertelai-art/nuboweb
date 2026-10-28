import { agent, caller } from '../turns';

/**
 * Textos en castellà. És el diccionari de referència: el tipus `Dictionary`
 * surt d'aquí i els altres idiomes l'han de complir sencer.
 */
export const es = {
  meta: {
    title: 'Nubo IA · Agentes de voz y WhatsApp con IA para tu empresa',
    description:
      'Un agente de inteligencia artificial que contesta las llamadas y los WhatsApp de tu empresa 24/7: da citas, toma reservas, resuelve dudas y te pasa lo importante. De Nubo Telecom.',
    ogTitle: 'Nubo IA · Tu empresa contesta siempre',
    ogDescription:
      'Contesta llamadas y WhatsApp con IA, 24/7, en tu número de siempre. Escucha una llamada de ejemplo.',
  },

  nav: {
    how: 'Cómo funciona',
    demo: 'Pruébalo',
    benefits: 'Ventajas',
    sectors: 'Sectores',
    group: 'Grupo Nubo',
    faq: 'Preguntas',
    cta: 'Quiero mi agente',
    menuOpen: 'Abrir menú',
    menuClose: 'Cerrar menú',
    skip: 'Saltar al contenido',
    home: 'Nubo IA, inicio',
    main: 'Principal',
    language: 'Idioma',
    themeToLight: 'Cambiar a modo claro',
    themeToDark: 'Cambiar a modo oscuro',
  },

  hero: {
    eyebrow: 'Nubo IA · Recepcionista con inteligencia artificial',
    titleStart: 'Tu empresa contesta',
    titleHighlight: 'todas las llamadas',
    titleEnd: 'y WhatsApp. Las 24 horas.',
    subtitle:
      'Un agente de IA atiende a tus clientes por teléfono y por WhatsApp como lo haría tu mejor recepcionista: da citas, toma reservas, resuelve dudas y te avisa de lo importante. En tu número de siempre.',
    ctaPrimary: 'Escucha una llamada de ejemplo',
    ctaSecondary: 'Hablar con un asesor',
    capabilities: [
      'Contesta llamadas',
      'Responde WhatsApp',
      'Agenda citas y reservas',
      'Te pasa lo importante',
    ],
    live: {
      label: 'Así funciona, en directo',
      steps: ['Llama un cliente', 'La IA contesta', 'Reserva la cita', 'Lo confirma por WhatsApp'],
      incoming: 'Llamada entrante',
      afterHours: 'Fuera de horario · 21:47',
      answered: 'Atendida por Nubo IA',
      callerLine: 'Hola, ¿tenéis hora para mañana?',
      agentLine: 'Sí: mañana a las 10:30. ¿Te la reservo?',
      bookedTitle: 'Cita reservada',
      bookedDetail: 'Mañana · 10:30 · Limpieza dental',
      whatsappFrom: 'Clínica Dental Sonríe',
      whatsappText: '✅ Cita confirmada: mañana a las 10:30. ¡Hasta pronto!',
      ownerNote: 'Resumen enviado a tu equipo',
    },
  },

  how: {
    eyebrow: 'Cómo funciona',
    title: 'Así trabaja',
    titleHighlight: 'tu agente',
    steps: [
      {
        title: 'Un agente con tu marca',
        text: 'Lo preparamos con la voz, el tono y la información de tu negocio. Responde como si fuera de la casa.',
      },
      {
        title: 'Entran llamadas y WhatsApp',
        text: 'Atiende en tu número de siempre y en tu WhatsApp Business. Todas a la vez, a cualquier hora.',
      },
      {
        title: 'Entiende y decide',
        text: 'Consulta tus horarios, servicios, precios y agenda, y pregunta lo que falta para resolver.',
      },
      {
        title: 'Hace el trabajo y te avisa',
        text: 'Da la cita, crea la ficha, envía la confirmación y, si hace falta, pasa la llamada a tu equipo.',
      },
    ],
    agentLabel: 'Tu agente Nubo IA',
    inputs: [
      { title: 'Llamada entrante', detail: '+34 6•• ••• 218' },
      { title: 'WhatsApp nuevo', detail: '«¿Abrís el sábado?»' },
      { title: 'Llamada fuera de horario', detail: 'Domingo · 22:10' },
    ],
    knowledge: ['Horarios', 'Servicios', 'Precios', 'Agenda', 'Tus normas'],
    outputs: [
      { title: 'Cita en tu agenda', detail: 'Viernes · 17:00' },
      { title: 'Ficha en el CRM', detail: 'Cliente nuevo · interés alto' },
      { title: 'Confirmación por WhatsApp', detail: 'Enviada al cliente' },
      { title: 'Pasa a tu equipo', detail: 'Con el caso explicado' },
    ],
    srDescription:
      'Las tres cintas del logotipo de Nubo forman la N del agente. A la izquierda llegan llamadas y WhatsApp; alrededor del agente aparece lo que sabe de tu negocio; a la derecha salen las tareas hechas: cita, ficha, confirmación y aviso a tu equipo.',
  },

  demo: {
    eyebrow: 'Pruébalo',
    title: 'Llama a un negocio de ejemplo',
    titleHighlight: 'y escucha quién contesta',
    subtitle: 'Tres pasos y lo oyes. Sin registrarte y sin dar tu teléfono.',
    step1: 'Elige un negocio',
    step2: 'Elige el canal',
    step3: 'Pulsa y escucha',
    channelCall: 'Llamada de voz',
    channelWhatsapp: 'WhatsApp',
    sound: 'Con sonido',
    soundHint: 'Sube el volumen de tu dispositivo.',
    noVoice: 'Tu navegador no tiene voz en este idioma: verás la conversación escrita.',
    startCall: 'Llamar ahora',
    startChat: 'Empezar conversación',
    hangUp: 'Colgar',
    again: 'Repetir',
    statusIdle: 'Listo para llamar',
    statusRinging: 'Llamando…',
    statusLive: 'En llamada con el agente de IA',
    statusDone: 'Llamada terminada',
    statusChatIdle: 'Listo para escribir',
    statusChatLive: 'Conversación en curso',
    statusChatDone: 'Conversación resuelta',
    pressToCall: 'Pulsa «Llamar ahora»',
    attending: 'Atiende el agente de IA',
    transcriptLabel: 'Transcripción de la llamada',
    chatLabel: 'Conversación de WhatsApp',
    agent: 'Agente IA',
    speaking: 'hablando',
    online: 'en línea',
    typing: 'escribiendo…',
    today: 'Ejemplo · Hoy',
    message: 'Mensaje',
    didTitle: 'Lo que ha hecho el agente',
    pendingHint: 'Llama y mira cómo se completa mientras habla.',
    chatPendingHint: 'Empieza y mira cómo lo resuelve.',
    pipBack: 'Volver a la demo',
    pipClose: 'Cerrar',
    note: 'Conversación de ejemplo con un negocio inventado. Tu agente habla de tu empresa, con tus horarios, tus servicios y tu agenda.',
  },

  benefits: {
    eyebrow: 'Ventajas',
    title: 'Lo que hace por ti',
    titleHighlight: 'mientras atiendes lo tuyo',
    calls: {
      title: 'Ninguna llamada perdida',
      text: 'Contesta todas a la vez: en hora punta, en vacaciones y a las tres de la madrugada.',
      log: [
        '09:12 · Atendida',
        '13:58 · Atendida',
        '14:03 · Atendida',
        '21:47 · Atendida',
        '03:20 · Atendida',
      ],
      ring: '24 h',
    },
    bookings: {
      title: 'Citas y reservas, solas',
      text: 'Mira tu agenda, ofrece huecos, confirma y manda el recordatorio.',
      days: ['L', 'M', 'X', 'J', 'V'],
    },
    leads: {
      title: 'Clientes, no curiosos',
      text: 'Pregunta lo que necesitas saber y te deja la ficha hecha.',
      fields: [
        { label: 'Nombre', value: 'Laura Martí' },
        { label: 'Busca', value: 'Piso 3 hab.' },
        { label: 'Financiación', value: 'Preaprobada' },
      ],
      badge: 'Interés alto',
    },
    handoff: {
      title: 'Pasa a una persona cuando toca',
      text: 'Transfiere a tu equipo con el caso ya explicado.',
      transferring: 'Transfiriendo a recepción',
      summary: 'Resumen: urgencia, dolor de muelas desde ayer.',
    },
    languages: {
      title: 'En el idioma de quien llama',
      text: 'Con tu tono y tus normas, en castellano, catalán, inglés, francés y más.',
      greetings: [
        'Hola, ¿en qué te ayudo?',
        'Bon dia, com et puc ajudar?',
        'Hello, how can I help?',
        'Bonjour, je vous écoute.',
      ],
    },
    records: {
      title: 'Todo queda apuntado',
      text: 'Cada conversación con resumen, motivo y transcripción en un panel.',
      week: 'Esta semana',
      calls: 'Llamadas',
      booked: 'Citas',
    },
  },

  compare: {
    eyebrow: 'El día a día',
    title: 'El mismo día,',
    titleHighlight: 'con y sin agente',
    colSituation: 'Situación',
    colToday: 'Hoy',
    colWith: 'Con Nubo IA',
    rows: [
      [
        'Una llamada a la hora de comer',
        'Salta el contestador y el cliente llama a otro',
        'Le atienden y sale con cita',
      ],
      ['Tres llamadas a la vez', 'Dos esperan; una cuelga', 'Las tres atendidas al momento'],
      [
        'Un WhatsApp a las 23:00',
        'Se contesta mañana, si alguien se acuerda',
        'Respondido en segundos',
      ],
      [
        'Una urgencia de verdad',
        'Se pierde entre el resto',
        'Pasa directa a quien está de guardia',
      ],
      ['Final del día', 'Notas en papel y llamadas por devolver', 'Un resumen de todo en el panel'],
    ],
  },

  sectors: {
    eyebrow: 'Sectores',
    title: 'Hecho para negocios que',
    titleHighlight: 'viven del teléfono',
    intro:
      'Cada agente se prepara para un negocio concreto. Estos son los más habituales; si el tuyo no está, también.',
    listen: 'Escuchar ejemplo',
    seeAll: 'Ver todos los sectores',
    pageTitle: 'Sectores · Nubo IA, agentes de voz y WhatsApp con IA',
    pageDescription:
      'Clínicas, restaurantes, inmobiliarias, talleres, asesorías, hoteles y más: qué hace un agente de IA de Nubo en cada sector.',
    back: 'Volver al inicio',
    items: {
      salud: {
        name: 'Clínicas y salud',
        pitch: 'La recepción deja de ser un cuello de botella.',
        useCases: [
          'Pide, cambia y anula citas',
          'Recordatorios y confirmaciones',
          'Urgencias a la persona de guardia',
        ],
      },
      restauracion: {
        name: 'Restauración',
        pitch: 'Reservas en pleno servicio, sin dejar la sala.',
        useCases: [
          'Reservas y cambios de mesa',
          'Alergias y peticiones especiales',
          'Pedidos para llevar',
        ],
      },
      inmobiliaria: {
        name: 'Inmobiliarias',
        pitch: 'Cada llamada de un anuncio acaba en visita, no en buzón.',
        useCases: [
          'Responde sobre cada inmueble',
          'Filtra y cualifica compradores',
          'Agenda visitas con el comercial',
        ],
      },
      automocion: {
        name: 'Talleres y automoción',
        pitch: 'Los mecánicos trabajan; el teléfono se atiende solo.',
        useCases: [
          'Cita para revisión e ITV',
          'Estado de la reparación',
          'Presupuestos y recogida',
        ],
      },
      asesorias: {
        name: 'Asesorías y despachos',
        pitch: 'Cada cliente llega al profesional que toca, con el caso explicado.',
        useCases: ['Primera consulta y triaje', 'Recoge documentación', 'Recuerda plazos y pagos'],
      },
      hoteles: {
        name: 'Hoteles y turismo',
        pitch: 'Reservas directas a cualquier hora y en el idioma del huésped.',
        useCases: [
          'Disponibilidad y reservas directas',
          'Check-in, horarios y servicios',
          'En varios idiomas',
        ],
      },
      comercio: {
        name: 'Comercio y e-commerce',
        pitch: '«¿Dónde está mi pedido?», sin colas ni esperas.',
        useCases: ['Estado de pedidos', 'Cambios y devoluciones', 'Stock y recomendaciones'],
      },
      servicios: {
        name: 'Servicios técnicos',
        pitch: 'Las averías entran ordenadas y con prioridad.',
        useCases: [
          'Recoge la avería y la urgencia',
          'Asigna técnico y franja',
          'Avisa cuando llega',
        ],
      },
      logistica: {
        name: 'Logística y transporte',
        pitch: 'Seguimiento y cambios de entrega sin oficina.',
        useCases: ['¿Dónde está mi envío?', 'Cambiar dirección o día', 'Incidencias de entrega'],
      },
      atencion: {
        name: 'Atención al cliente',
        pitch: 'Absorbe los picos y deja al equipo lo que necesita a una persona.',
        useCases: [
          'Preguntas frecuentes al momento',
          'Desborde en horas punta',
          'Pasa a un agente con contexto',
        ],
      },
    },
  },

  demos: {
    salud: {
      business: 'Clínica Dental Sonríe',
      caller: 'Marta',
      call: [
        agent('Clínica Dental Sonríe, buenas tardes. ¿En qué puedo ayudarte?'),
        caller('Hola, quería pedir hora para una limpieza.'),
        agent(
          'Claro. Tengo el jueves a las diez y media o el viernes a las cinco. ¿Cuál te va mejor?',
        ),
        caller('El viernes a las cinco, perfecto.'),
        agent(
          'Hecho: viernes a las cinco con la doctora Puig. Te mando la confirmación por WhatsApp. ¿Algo más?',
        ),
        caller('No, nada más. ¡Gracias!'),
      ],
      callResult: {
        title: 'Cita creada',
        rows: [
          { label: 'Motivo', value: 'Limpieza dental' },
          { label: 'Cuándo', value: 'Viernes · 17:00' },
          { label: 'Con', value: 'Dra. Puig' },
        ],
        actions: [
          'Cita guardada en la agenda',
          'Confirmación enviada por WhatsApp',
          'Recordatorio programado 24 h antes',
        ],
      },
      whatsapp: [
        caller('Hola! Tengo hora mañana a las 10 y no podré ir 😕'),
        agent(
          'Sin problema, Marta. ¿Te la cambio? Tengo el lunes a las 9:30 o el martes a las 12:00.',
        ),
        caller('El martes a las 12 mejor'),
        agent('Listo, cambiada. Te lo dejo resumido:'),
      ],
      whatsappSummary: [
        { emoji: '❌', label: 'Anulada', value: 'Mañana · 10:00' },
        { emoji: '✅', label: 'Nueva', value: 'Martes · 12:00' },
        { emoji: '📍', label: 'Dónde', value: 'Clínica Dental Sonríe' },
      ],
    },
    restauracion: {
      business: 'Restaurante La Brasa',
      caller: 'Jordi',
      call: [
        agent('Restaurante La Brasa, ¿dígame?'),
        caller('Buenas, ¿tenéis mesa para cuatro el sábado por la noche?'),
        agent('Sí. Puedo ofreceros a las nueve o a las nueve y media. ¿Terraza o interior?'),
        caller('A las nueve, en terraza. Mi pareja es celíaca.'),
        agent(
          'Anotado: sábado a las nueve, cuatro personas, terraza y una persona celíaca. ¿A nombre de quién?',
        ),
        caller('De Jordi. Gracias.'),
      ],
      callResult: {
        title: 'Reserva confirmada',
        rows: [
          { label: 'Personas', value: '4 · terraza' },
          { label: 'Cuándo', value: 'Sábado · 21:00' },
          { label: 'Aviso', value: 'Una persona celíaca' },
        ],
        actions: [
          'Reserva en el libro de reservas',
          'Aviso de alergia a cocina',
          'Confirmación por WhatsApp',
        ],
      },
      whatsapp: [
        caller('¿Hacéis comida para llevar hoy?'),
        agent('Sí, de 13:00 a 15:30. ¿Qué te apetece? Te paso la carta si quieres 📋'),
        caller('Dos pollos a la brasa con patatas, para las 14:00'),
        agent('Perfecto, pedido hecho:'),
      ],
      whatsappSummary: [
        { emoji: '🍗', label: 'Pedido', value: '2 pollos con patatas' },
        { emoji: '🕑', label: 'Recogida', value: 'Hoy · 14:00' },
        { emoji: '💶', label: 'Pago', value: 'Al recoger' },
      ],
    },
    inmobiliaria: {
      business: 'Inmobiliaria Costa Norte',
      caller: 'Laura',
      call: [
        agent('Inmobiliaria Costa Norte, buenos días.'),
        caller('Llamo por el piso de tres habitaciones del centro. ¿Sigue disponible?'),
        agent(
          'Sí, sigue disponible. ¿Lo buscas para vivir o como inversión? ¿Y tienes la financiación encaminada?',
        ),
        caller('Para vivir, y el banco ya me lo ha preaprobado.'),
        agent('Genial. Te puedo agendar una visita con Àlex el miércoles a las seis. ¿Te va bien?'),
        caller('Sí, perfecto.'),
      ],
      callResult: {
        title: 'Visita agendada',
        rows: [
          { label: 'Inmueble', value: 'Piso 3 hab. · centro' },
          { label: 'Interés', value: 'Alto · hipoteca preaprobada' },
          { label: 'Visita', value: 'Miércoles · 18:00 con Àlex' },
        ],
        actions: [
          'Cliente creado en el CRM',
          'Visita en la agenda de Àlex',
          'Ficha del piso enviada por WhatsApp',
        ],
      },
      whatsapp: [
        caller('Hola, ¿el ático de la playa admite mascotas?'),
        agent('¡Hola Laura! Sí, el propietario acepta mascotas pequeñas 🐶 ¿Quieres verlo?'),
        caller('Sí, ¿el viernes por la tarde?'),
        agent('Te lo reservo:'),
      ],
      whatsappSummary: [
        { emoji: '🏖️', label: 'Inmueble', value: 'Ático en la playa' },
        { emoji: '📅', label: 'Visita', value: 'Viernes · 17:30' },
        { emoji: '👤', label: 'Te atiende', value: 'Àlex' },
      ],
    },
    automocion: {
      business: 'Talleres Montseny',
      caller: 'Pere',
      call: [
        agent('Talleres Montseny, ¿en qué te ayudo?'),
        caller('Hola, ¿mi coche ya está? Es el Golf gris.'),
        agent(
          'Un momento… Sí, Pere: el Golf está listo. Cambio de pastillas y revisión hechos. Puedes pasar hasta las siete.',
        ),
        caller('¡Genial! ¿Me podéis dar ya cita para la ITV?'),
        agent(
          'Te la pido para el lunes a primera hora y la llevamos nosotros. Te aviso por WhatsApp.',
        ),
        caller('Perfecto, gracias.'),
      ],
      callResult: {
        title: 'Cliente informado',
        rows: [
          { label: 'Vehículo', value: 'Golf gris · listo' },
          { label: 'Trabajo', value: 'Pastillas y revisión' },
          { label: 'ITV', value: 'Lunes · 8:00' },
        ],
        actions: [
          'Estado consultado en el sistema',
          'Cita de ITV creada',
          'Factura enviada por WhatsApp',
        ],
      },
      whatsapp: [
        caller('Me ha salido una luz naranja en el salpicadero 😬'),
        agent(
          'Vamos a mirarlo. ¿Me mandas una foto? Si es el motor, mejor no hacer viajes largos.',
        ),
        caller('📷 Foto enviada'),
        agent('Es el aviso de motor. Te he hecho hueco:'),
      ],
      whatsappSummary: [
        { emoji: '⚠️', label: 'Aviso', value: 'Testigo de motor' },
        { emoji: '📅', label: 'Diagnosis', value: 'Mañana · 9:00' },
        { emoji: '🚗', label: 'Coche', value: 'Golf gris' },
      ],
    },
    asesorias: {
      business: 'Assessoria Ter',
      caller: 'Núria',
      call: [
        agent('Assessoria Ter, buenos días.'),
        caller('Hola, soy autónoma y me ha llegado una carta de Hacienda que no entiendo.'),
        agent(
          'Tranquila, lo vemos. ¿Es un requerimiento o una notificación de pago? Si lo tienes a mano, dime el plazo.',
        ),
        caller('Pone requerimiento, y hay diez días.'),
        agent(
          'Te paso con Carles, que lleva fiscalidad de autónomos. Mientras, mándanos la carta por WhatsApp y la tendrá delante.',
        ),
        caller('Vale, ahora mismo.'),
      ],
      callResult: {
        title: 'Caso derivado',
        rows: [
          { label: 'Tema', value: 'Requerimiento de Hacienda' },
          { label: 'Plazo', value: '10 días · prioridad alta' },
          { label: 'Para', value: 'Carles · fiscal' },
        ],
        actions: [
          'Llamada transferida a Carles',
          'Ficha con el resumen del caso',
          'Enlace para subir la carta',
        ],
      },
      whatsapp: [
        caller('¿Qué necesito para la renta de este año?'),
        agent('Te lo preparo en una lista. ¿Has tenido cambios: piso, hijos, alquiler…?'),
        caller('He comprado un piso'),
        agent('Entonces necesitaremos esto:'),
      ],
      whatsappSummary: [
        { emoji: '🪪', label: 'DNI', value: 'De todos los titulares' },
        { emoji: '🏠', label: 'Piso', value: 'Escritura y recibos de hipoteca' },
        { emoji: '📅', label: 'Cita', value: 'Martes · 11:00 con Carles' },
      ],
    },
    hoteles: {
      business: 'Hotel Mas de la Riera',
      caller: 'Sophie',
      call: [
        agent('Hotel Mas de la Riera, buenas noches.'),
        caller('Hola, ¿tenéis habitación doble para el puente de diciembre?'),
        agent(
          'Sí, me queda una doble con vistas al jardín, del seis al ocho, con desayuno incluido.',
        ),
        caller('¿Se puede llegar tarde? Llegaremos sobre las once.'),
        agent(
          'Sin problema: dejo nota en recepción para la llegada tardía. Te mando el enlace para confirmar la reserva.',
        ),
        caller('Genial, muchas gracias.'),
      ],
      callResult: {
        title: 'Reserva directa',
        rows: [
          { label: 'Habitación', value: 'Doble · vistas al jardín' },
          { label: 'Fechas', value: '6 al 8 de diciembre' },
          { label: 'Nota', value: 'Llegada 23:00' },
        ],
        actions: [
          'Prerreserva en el sistema del hotel',
          'Enlace de pago enviado',
          'Aviso a recepción de noche',
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
        { emoji: '🌐', label: 'Idioma', value: 'Atendida en inglés' },
      ],
    },
  },

  ecosystem: {
    eyebrow: 'Integrado con Nubo',
    title: 'Tu operador, tu centralita',
    titleHighlight: 'y tu agente',
    points: [
      {
        title: 'Un solo proveedor',
        text: 'Línea, centralita y agente con el mismo operador. Una factura y un teléfono de soporte.',
      },
      {
        title: 'Sin cambiar de número',
        text: 'El agente atiende en el número que tus clientes ya conocen. Tú decides cuándo: siempre, fuera de horario o cuando comunica.',
      },
      {
        title: 'Soporte de personas',
        text: 'El equipo de Nubo lo prepara contigo, lo pone en marcha y lo ajusta cuando cambia tu negocio.',
      },
    ],
    nodes: {
      centralita: { label: 'Centralita Virtual', note: 'Transfiere a tus extensiones' },
      fijo: { label: 'Nubo Fijo', note: 'Tu número de siempre' },
      movil: { label: 'Nubo Móvil', note: 'Desvío desde el móvil' },
      whatsapp: { label: 'WhatsApp Business', note: 'El mismo agente, por escrito' },
      crm: { label: 'Agenda y CRM', note: 'Citas y fichas al momento' },
    },
  },

  onboarding: {
    eyebrow: 'Cómo empezamos',
    title: 'De la primera charla',
    titleHighlight: 'a tu agente atendiendo',
    steps: [
      {
        title: 'Nos cuentas tu negocio',
        text: 'Qué llamadas recibes, qué preguntan, qué puede resolver el agente y qué debe pasar a tu equipo.',
      },
      {
        title: 'Lo escuchas antes que nadie',
        text: 'Preparamos tu agente con tu información y tu tono. Lo pruebas llamando tú, y lo ajustamos.',
      },
      {
        title: 'Lo activamos en tu línea',
        text: 'Empieza cuando tú digas: fuera de horario, cuando comunica o siempre. Y lo vamos afinando.',
      },
    ],
    guarantees: [
      {
        title: 'Tus datos, protegidos',
        text: 'Pensado para cumplir el RGPD. Tú decides qué se guarda y durante cuánto tiempo.',
      },
      {
        title: 'Tú pones las reglas',
        text: 'Qué responde, qué no, cuándo transfiere y a quién. Se cambia sin tocar nada técnico.',
      },
      {
        title: 'Personas detrás',
        text: 'El soporte de Nubo Telecom, el de siempre, también para tu agente.',
      },
    ],
  },

  group: {
    eyebrow: 'Grupo Nubo',
    title: 'Detrás de tu agente,',
    titleHighlight: 'un grupo que ya te conecta',
    intro:
      'Nubo IA es parte del Grupo Nubo: un operador de datos y voz con soluciones flexibles y 100 % digitales para empresas y hogares, que también cuida de tu energía y tu seguridad.',
    telecom: {
      name: 'Nubo Telecom',
      text: 'Internet, móvil, fijo y centralita virtual. La red sobre la que funciona tu agente.',
      services: ['Nubo Internet', 'Nubo Móvil', 'Nubo Voz Fijo', 'Centralita Virtual'],
    },
    energy: {
      name: 'Nubo Energy',
      text: 'Energía para tu empresa y tu hogar, con el mismo trato cercano.',
    },
    security: {
      name: 'Nubo Security',
      text: 'Seguridad para proteger lo que mantiene tu empresa en marcha.',
    },
    visit: 'Visitar',
    cta: 'Conoce Nubo Telecom',
    newTab: '(se abre en una pestaña nueva)',
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Lo que nos',
    titleHighlight: 'preguntan siempre',
    intro: '¿Te queda alguna duda? Llámanos y te la resuelve una persona.',
    items: [
      {
        q: '¿Se nota que es una inteligencia artificial?',
        a: 'Habla con naturalidad, entiende frases a medias y no obliga a pulsar teclas. Aun así, si alguien pregunta, el agente dice que es un asistente virtual: la transparencia también da confianza.',
      },
      {
        q: '¿Qué pasa si no sabe responder?',
        a: 'Lo dice, toma nota y te pasa el caso; o transfiere la llamada a la persona que tú elijas, con el resumen ya hecho. Tú decides qué resuelve solo y qué no.',
      },
      {
        q: '¿Tengo que cambiar de número?',
        a: 'No. El agente atiende en tu número de siempre. Puedes activarlo para todas las llamadas, solo fuera de horario o solo cuando la línea comunica.',
      },
      {
        q: '¿Funciona con mi centralita y mi agenda?',
        a: 'Con la Centralita Virtual de Nubo se integra de forma directa. Con agendas, CRM y programas de gestión lo vemos caso a caso en la primera reunión.',
      },
      {
        q: '¿Atiende también por WhatsApp?',
        a: 'Sí. El mismo agente puede contestar tu WhatsApp Business con la misma información y las mismas reglas que por teléfono.',
      },
      {
        q: '¿En qué idiomas habla?',
        a: 'En castellano, catalán, inglés, francés y muchos más. Contesta en el idioma de quien llama.',
      },
      {
        q: '¿Cuánto cuesta?',
        a: 'Depende de cuántas llamadas y conversaciones atiende y de qué tiene que hacer. Te preparamos una propuesta cerrada después de conocer tu negocio, sin compromiso.',
      },
      {
        q: '¿Y mis datos?',
        a: 'Se tratan según el RGPD. Decides qué se graba y durante cuánto tiempo, y las conversaciones solo las ve tu equipo.',
      },
    ],
  },

  contact: {
    eyebrow: 'Empecemos',
    title: 'Escucha a tu propio agente',
    titleHighlight: 'antes de decidir',
    text: 'Cuéntanos cómo trabajas y te preparamos una demo con el nombre de tu empresa. Sin compromiso.',
    call: 'Llamar al',
    write: 'Escribir a',
    free: 'Llamada gratuita.',
    mailSubject: 'Quiero un agente de IA para mi empresa',
    partnerTitle: '¿Eres distribuidor de Nubo?',
    partnerText:
      'Añade agentes de IA a lo que ya ofreces a tus clientes, con el respaldo técnico de Nubo.',
    partnerCta: 'Programa de distribuidores',
  },

  footer: {
    tagline:
      'Agentes de voz y WhatsApp con inteligencia artificial, de tu operador de datos y voz.',
    thisPage: 'Nubo IA',
    group: 'Grupo Nubo',
    contact: 'Contacto',
    legalNote: 'Las conversaciones de esta página son ejemplos con negocios inventados.',
  },

  notFound: {
    title: 'Esta página no contesta',
    text: 'Pero nuestro agente sí. Vuelve al inicio y pruébalo.',
    back: 'Volver al inicio',
  },
};

export type Dictionary = typeof es;
