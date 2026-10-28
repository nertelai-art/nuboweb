import { agent, caller } from '../turns';
import type { Dictionary } from './es';

/** Textos en anglès (ortografia britànica). Compleix el tipus `Dictionary` sencer. */
export const en: Dictionary = {
  meta: {
    title: 'Nubo IA · AI voice and WhatsApp agents for your business',
    description:
      'An artificial intelligence agent that answers your business’s calls and WhatsApp messages 24/7: it books appointments, takes reservations, answers questions and passes on what matters. From Nubo Telecom.',
    ogTitle: 'Nubo IA · Your business always answers',
    ogDescription:
      'Answer calls and WhatsApp with AI, 24/7, on your usual number. Listen to an example call.',
  },

  nav: {
    how: 'How it works',
    demo: 'Try it',
    benefits: 'Benefits',
    sectors: 'Sectors',
    group: 'Nubo Group',
    faq: 'FAQ',
    cta: 'Get my agent',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    skip: 'Skip to content',
    home: 'Nubo IA, home',
    main: 'Main',
    language: 'Language',
    themeToLight: 'Switch to light mode',
    themeToDark: 'Switch to dark mode',
  },

  hero: {
    eyebrow: 'Nubo IA · Receptionist powered by artificial intelligence',
    titleStart: 'Your business answers',
    titleHighlight: 'every call',
    titleEnd: 'and WhatsApp message. Around the clock.',
    subtitle:
      'An AI agent looks after your customers by phone and on WhatsApp the way your best receptionist would: it books appointments, takes reservations, answers questions and lets you know what matters. On your usual number.',
    ctaPrimary: 'Listen to an example call',
    ctaSecondary: 'Talk to an adviser',
    capabilities: [
      'Answers calls',
      'Replies on WhatsApp',
      'Books appointments and tables',
      'Passes on what matters',
    ],
    live: {
      label: 'How it works, live',
      steps: [
        'A customer calls',
        'The AI answers',
        'It books the appointment',
        'It confirms on WhatsApp',
      ],
      incoming: 'Incoming call',
      afterHours: 'Out of hours · 21:47',
      answered: 'Answered by Nubo IA',
      callerLine: 'Hi, have you got an appointment free tomorrow?',
      agentLine: 'Yes: tomorrow at 10:30. Shall I book it for you?',
      bookedTitle: 'Appointment booked',
      bookedDetail: 'Tomorrow · 10:30 · Dental clean',
      whatsappFrom: 'Clínica Dental Sonríe',
      whatsappText: '✅ Appointment confirmed: tomorrow at 10:30. See you soon!',
      ownerNote: 'Summary sent to your team',
    },
  },

  how: {
    eyebrow: 'How it works',
    title: 'This is how',
    titleHighlight: 'your agent works',
    steps: [
      {
        title: 'An agent with your brand',
        text: 'We set it up with your business’s voice, tone and information. It answers as if it were one of the team.',
      },
      {
        title: 'Calls and WhatsApp come in',
        text: 'It answers on your usual number and on your WhatsApp Business. All at once, at any hour.',
      },
      {
        title: 'It understands and decides',
        text: 'It checks your opening hours, services, prices and diary, and asks whatever is missing to get the job done.',
      },
      {
        title: 'It does the work and tells you',
        text: 'It books the appointment, creates the record, sends the confirmation and, if needed, puts the call through to your team.',
      },
    ],
    agentLabel: 'Your Nubo IA agent',
    inputs: [
      { title: 'Incoming call', detail: '+34 6•• ••• 218' },
      { title: 'New WhatsApp', detail: '“Are you open on Saturday?”' },
      { title: 'Out-of-hours call', detail: 'Sunday · 22:10' },
    ],
    knowledge: ['Opening hours', 'Services', 'Prices', 'Diary', 'Your rules'],
    outputs: [
      { title: 'Appointment in your diary', detail: 'Friday · 17:00' },
      { title: 'Record in the CRM', detail: 'New customer · high interest' },
      { title: 'Confirmation on WhatsApp', detail: 'Sent to the customer' },
      { title: 'Handed to your team', detail: 'With the case explained' },
    ],
    srDescription:
      'The three ribbons of the Nubo logo form the agent’s N. On the left, calls and WhatsApp messages arrive; around the agent appears what it knows about your business; on the right come the finished tasks: appointment, record, confirmation and an alert to your team.',
  },

  demo: {
    eyebrow: 'Try it',
    title: 'Call an example business',
    titleHighlight: 'and hear who answers',
    subtitle: 'Three steps and you can hear it. No sign-up, and no need to give your phone number.',
    step1: 'Pick a business',
    step2: 'Pick the channel',
    step3: 'Press and listen',
    channelCall: 'Voice call',
    channelWhatsapp: 'WhatsApp',
    sound: 'With sound',
    soundHint: 'Turn up the volume on your device.',
    noVoice: 'Your browser has no voice for this language: you’ll see the conversation as text.',
    startCall: 'Call now',
    startChat: 'Start conversation',
    hangUp: 'Hang up',
    again: 'Replay',
    statusIdle: 'Ready to call',
    statusRinging: 'Calling…',
    statusLive: 'On a call with the AI agent',
    statusDone: 'Call ended',
    statusChatIdle: 'Ready to type',
    statusChatLive: 'Conversation in progress',
    statusChatDone: 'Conversation resolved',
    pressToCall: 'Press “Call now”',
    attending: 'The AI agent is answering',
    transcriptLabel: 'Call transcript',
    chatLabel: 'WhatsApp conversation',
    agent: 'AI agent',
    speaking: 'speaking',
    online: 'online',
    typing: 'typing…',
    today: 'Example · Today',
    message: 'Message',
    didTitle: 'What the agent has done',
    pendingHint: 'Make the call and watch it fill in while the agent talks.',
    chatPendingHint: 'Start it and watch how it sorts things out.',
    pipBack: 'Back to the demo',
    pipClose: 'Close',
    note: 'An example conversation with a made-up business. Your agent talks about your company, with your opening hours, your services and your diary.',
  },

  benefits: {
    eyebrow: 'Benefits',
    title: 'What it does for you',
    titleHighlight: 'while you get on with your work',
    calls: {
      title: 'Not a single missed call',
      text: 'It answers them all at once: at the busiest time, on holiday and at three in the morning.',
      log: [
        '09:12 · Answered',
        '13:58 · Answered',
        '14:03 · Answered',
        '21:47 · Answered',
        '03:20 · Answered',
      ],
      ring: '24 h',
    },
    bookings: {
      title: 'Appointments and bookings, on autopilot',
      text: 'It checks your diary, offers slots, confirms and sends the reminder.',
      days: ['M', 'T', 'W', 'T', 'F'],
    },
    leads: {
      title: 'Customers, not time-wasters',
      text: 'It asks what you need to know and leaves you a finished record.',
      fields: [
        { label: 'Name', value: 'Laura Martí' },
        { label: 'Looking for', value: '3-bed flat' },
        { label: 'Finance', value: 'Pre-approved' },
      ],
      badge: 'High interest',
    },
    handoff: {
      title: 'Hands over to a person when it matters',
      text: 'It transfers to your team with the case already explained.',
      transferring: 'Transferring to reception',
      summary: 'Summary: urgent, toothache since yesterday.',
    },
    languages: {
      title: 'In the caller’s language',
      text: 'In your tone and by your rules, in Spanish, Catalan, English, French and more.',
      greetings: [
        'Hola, ¿en qué te ayudo?',
        'Bon dia, com et puc ajudar?',
        'Hello, how can I help?',
        'Bonjour, je vous écoute.',
      ],
    },
    records: {
      title: 'Everything is logged',
      text: 'Every conversation with a summary, the reason and a transcript, all in one dashboard.',
      week: 'This week',
      calls: 'Calls',
      booked: 'Bookings',
    },
  },

  compare: {
    eyebrow: 'Day to day',
    title: 'The same day,',
    titleHighlight: 'with and without an agent',
    colSituation: 'Situation',
    colToday: 'Today',
    colWith: 'With Nubo IA',
    rows: [
      [
        'A call at lunchtime',
        'It goes to voicemail and the customer rings someone else',
        'They’re answered and leave with an appointment',
      ],
      ['Three calls at once', 'Two wait; one hangs up', 'All three answered straight away'],
      ['A WhatsApp at 23:00', 'Answered tomorrow, if someone remembers', 'Answered in seconds'],
      ['A genuine emergency', 'Gets lost among the rest', 'Goes straight to whoever is on call'],
      [
        'End of the day',
        'Paper notes and calls to return',
        'A summary of everything on the dashboard',
      ],
    ],
  },

  sectors: {
    eyebrow: 'Sectors',
    title: 'Made for businesses that',
    titleHighlight: 'live by the phone',
    intro:
      'Each agent is set up for a specific business. These are the most common; if yours isn’t listed, we can do it too.',
    listen: 'Listen to an example',
    seeAll: 'See all sectors',
    pageTitle: 'Sectors · Nubo IA, AI voice and WhatsApp agents',
    pageDescription:
      'Clinics, restaurants, estate agents, garages, advisory firms, hotels and more: what a Nubo AI agent does in each sector.',
    back: 'Back to home',
    items: {
      salud: {
        name: 'Clinics and healthcare',
        pitch: 'Reception stops being a bottleneck.',
        useCases: [
          'Books, changes and cancels appointments',
          'Reminders and confirmations',
          'Emergencies to the person on call',
        ],
      },
      restauracion: {
        name: 'Restaurants and bars',
        pitch: 'Reservations in the middle of service, without leaving the floor.',
        useCases: [
          'Reservations and table changes',
          'Allergies and special requests',
          'Takeaway orders',
        ],
      },
      inmobiliaria: {
        name: 'Estate agents',
        pitch: 'Every call about a listing ends in a viewing, not on voicemail.',
        useCases: [
          'Answers questions on each property',
          'Screens and qualifies buyers',
          'Books viewings with the agent',
        ],
      },
      automocion: {
        name: 'Garages and motor trade',
        pitch: 'The mechanics work; the phone answers itself.',
        useCases: ['Service and MOT (ITV) bookings', 'Repair status', 'Quotes and collection'],
      },
      asesorias: {
        name: 'Accountants and advisers',
        pitch: 'Each client reaches the right professional, with the case explained.',
        useCases: [
          'First enquiry and triage',
          'Collects documents',
          'Reminds clients of deadlines and payments',
        ],
      },
      hoteles: {
        name: 'Hotels and tourism',
        pitch: 'Direct bookings at any hour and in the guest’s language.',
        useCases: [
          'Availability and direct bookings',
          'Check-in, times and services',
          'In several languages',
        ],
      },
      comercio: {
        name: 'Retail and e-commerce',
        pitch: '“Where’s my order?”, with no queues or waiting.',
        useCases: ['Order status', 'Exchanges and returns', 'Stock and recommendations'],
      },
      servicios: {
        name: 'Technical services',
        pitch: 'Faults come in organised and prioritised.',
        useCases: [
          'Takes the fault and how urgent it is',
          'Assigns a technician and a time slot',
          'Lets the customer know when they’re on the way',
        ],
      },
      logistica: {
        name: 'Logistics and transport',
        pitch: 'Tracking and delivery changes, no office needed.',
        useCases: ['Where’s my parcel?', 'Change the address or the day', 'Delivery problems'],
      },
      atencion: {
        name: 'Customer service',
        pitch: 'Soaks up the peaks and leaves your team the things that need a person.',
        useCases: [
          'Instant answers to common questions',
          'Overflow at peak times',
          'Hands over to an agent with context',
        ],
      },
    },
  },

  demos: {
    salud: {
      business: 'Clínica Dental Sonríe',
      caller: 'Marta',
      call: [
        agent('Clínica Dental Sonríe, good afternoon. How can I help?'),
        caller('Hi, I’d like to book a dental clean.'),
        agent(
          'Of course. I’ve got Thursday at half past ten, or Friday at five. Which suits you better?',
        ),
        caller('Friday at five, perfect.'),
        agent(
          'Done: Friday at five with Dr Puig. I’ll send you the confirmation on WhatsApp. Anything else?',
        ),
        caller('No, that’s all. Thanks!'),
      ],
      callResult: {
        title: 'Appointment booked',
        rows: [
          { label: 'Reason', value: 'Dental clean' },
          { label: 'When', value: 'Friday · 17:00' },
          { label: 'With', value: 'Dr Puig' },
        ],
        actions: [
          'Appointment saved in the diary',
          'Confirmation sent on WhatsApp',
          'Reminder set for 24 h before',
        ],
      },
      whatsapp: [
        caller('Hi! I’ve got an appointment tomorrow at 10 and I can’t make it 😕'),
        agent('No problem, Marta. Shall I move it? I’ve got Monday at 9:30 or Tuesday at 12:00.'),
        caller('Tuesday at 12 is better'),
        agent('Done, it’s changed. Here’s a quick summary:'),
      ],
      whatsappSummary: [
        { emoji: '❌', label: 'Cancelled', value: 'Tomorrow · 10:00' },
        { emoji: '✅', label: 'New', value: 'Tuesday · 12:00' },
        { emoji: '📍', label: 'Where', value: 'Clínica Dental Sonríe' },
      ],
    },
    restauracion: {
      business: 'Restaurante La Brasa',
      caller: 'Jordi',
      call: [
        agent('Restaurante La Brasa, how can I help?'),
        caller('Hello, have you got a table for four on Saturday night?'),
        agent('Yes. I can offer you nine o’clock or half past nine. Terrace or inside?'),
        caller('Nine o’clock, on the terrace. One of us is coeliac.'),
        agent(
          'Noted: Saturday at nine, four people, on the terrace, and one coeliac guest. What name is it under?',
        ),
        caller('Jordi. Thanks.'),
      ],
      callResult: {
        title: 'Reservation confirmed',
        rows: [
          { label: 'Guests', value: '4 · terrace' },
          { label: 'When', value: 'Saturday · 21:00' },
          { label: 'Alert', value: 'One coeliac guest' },
        ],
        actions: [
          'Reservation added to the book',
          'Allergy alert sent to the kitchen',
          'Confirmation on WhatsApp',
        ],
      },
      whatsapp: [
        caller('Do you do takeaway today?'),
        agent(
          'Yes, from 13:00 to 15:30. What do you fancy? I can send you the menu if you like 📋',
        ),
        caller('Two charcoal-grilled chickens with chips, for 14:00'),
        agent('Perfect, your order is in:'),
      ],
      whatsappSummary: [
        { emoji: '🍗', label: 'Order', value: '2 chickens with chips' },
        { emoji: '🕑', label: 'Collection', value: 'Today · 14:00' },
        { emoji: '💶', label: 'Payment', value: 'On collection' },
      ],
    },
    inmobiliaria: {
      business: 'Inmobiliaria Costa Norte',
      caller: 'Laura',
      call: [
        agent('Inmobiliaria Costa Norte, good morning.'),
        caller(
          'Hi, I’m calling about the three-bedroom flat in the centre. Is it still available?',
        ),
        agent(
          'Yes, it is. Are you looking to live in it, or is it an investment? And do you have your finance lined up?',
        ),
        caller('To live in, and the bank has already pre-approved my mortgage.'),
        agent('Great. I can book you a viewing with Àlex on Wednesday at six. Does that suit you?'),
        caller('Yes, perfect.'),
      ],
      callResult: {
        title: 'Viewing booked',
        rows: [
          { label: 'Property', value: '3-bed flat · centre' },
          { label: 'Interest', value: 'High · mortgage pre-approved' },
          { label: 'Viewing', value: 'Wednesday · 18:00 with Àlex' },
        ],
        actions: [
          'Customer created in the CRM',
          'Viewing in Àlex’s diary',
          'Property details sent on WhatsApp',
        ],
      },
      whatsapp: [
        caller('Hi, does the beach penthouse allow pets?'),
        agent('Hi Laura! Yes, the owner accepts small pets 🐶 Would you like to see it?'),
        caller('Yes, Friday afternoon?'),
        agent('I’ll book it for you:'),
      ],
      whatsappSummary: [
        { emoji: '🏖️', label: 'Property', value: 'Beach penthouse' },
        { emoji: '📅', label: 'Viewing', value: 'Friday · 17:30' },
        { emoji: '👤', label: 'Your contact', value: 'Àlex' },
      ],
    },
    automocion: {
      business: 'Talleres Montseny',
      caller: 'Pere',
      call: [
        agent('Talleres Montseny, how can I help?'),
        caller('Hi, is my car ready yet? It’s the grey Golf.'),
        agent(
          'One moment… Yes, Pere: the Golf is ready. The brake pads and the service are done. You can pop in until seven.',
        ),
        caller('Brilliant! Can you book me in for the MOT as well?'),
        agent(
          'I’ll request it for first thing on Monday, and we’ll take the car in ourselves. I’ll let you know on WhatsApp.',
        ),
        caller('Perfect, thanks.'),
      ],
      callResult: {
        title: 'Customer updated',
        rows: [
          { label: 'Vehicle', value: 'Grey Golf · ready' },
          { label: 'Work', value: 'Brake pads and service' },
          { label: 'MOT', value: 'Monday · 8:00' },
        ],
        actions: ['Status checked in the system', 'MOT booked', 'Invoice sent on WhatsApp'],
      },
      whatsapp: [
        caller('There’s an orange light on my dashboard 😬'),
        agent(
          'Let’s take a look. Could you send me a photo? If it’s the engine, it’s best not to do any long journeys.',
        ),
        caller('📷 Photo sent'),
        agent('It’s the engine warning light. I’ve made room for you:'),
      ],
      whatsappSummary: [
        { emoji: '⚠️', label: 'Warning', value: 'Engine warning light' },
        { emoji: '📅', label: 'Diagnostics', value: 'Tomorrow · 9:00' },
        { emoji: '🚗', label: 'Car', value: 'Grey Golf' },
      ],
    },
    asesorias: {
      business: 'Assessoria Ter',
      caller: 'Núria',
      call: [
        agent('Assessoria Ter, good morning.'),
        caller(
          'Hi, I’m self-employed and I’ve had a letter from the tax office that I don’t understand.',
        ),
        agent(
          'Don’t worry, we’ll sort it out. Is it a formal notice or a payment demand? If you have it to hand, tell me the deadline.',
        ),
        caller('It says formal notice, and I’ve got ten days.'),
        agent(
          'I’ll put you through to Carles, who handles tax for the self-employed. In the meantime, send us the letter on WhatsApp and he’ll have it in front of him.',
        ),
        caller('OK, I’ll do it right now.'),
      ],
      callResult: {
        title: 'Case passed on',
        rows: [
          { label: 'Subject', value: 'Formal notice from the tax office' },
          { label: 'Deadline', value: '10 days · high priority' },
          { label: 'For', value: 'Carles · tax' },
        ],
        actions: [
          'Call transferred to Carles',
          'Record with a summary of the case',
          'Link to upload the letter',
        ],
      },
      whatsapp: [
        caller('What do I need for this year’s tax return?'),
        agent(
          'I’ll put together a list for you. Have there been any changes: a flat, children, rent…?',
        ),
        caller('I’ve bought a flat'),
        agent('Then we’ll need this:'),
      ],
      whatsappSummary: [
        { emoji: '🪪', label: 'ID', value: 'For all owners' },
        { emoji: '🏠', label: 'Flat', value: 'Title deeds and mortgage statements' },
        { emoji: '📅', label: 'Appointment', value: 'Tuesday · 11:00 with Carles' },
      ],
    },
    hoteles: {
      business: 'Hotel Mas de la Riera',
      caller: 'Sophie',
      call: [
        agent('Hotel Mas de la Riera, good evening.'),
        caller('Hello, have you got a double room for the long weekend in December?'),
        agent(
          'Yes, I have one double left with a garden view, from the sixth to the eighth, breakfast included.',
        ),
        caller('Is it all right to arrive late? We’ll get there around eleven.'),
        agent(
          'No problem: I’ll leave a note at reception about the late arrival. I’ll send you the link to confirm the booking.',
        ),
        caller('Lovely, thank you very much.'),
      ],
      callResult: {
        title: 'Direct booking',
        rows: [
          { label: 'Room', value: 'Double · garden view' },
          { label: 'Dates', value: '6 to 8 December' },
          { label: 'Note', value: 'Arrival 23:00' },
        ],
        actions: [
          'Provisional booking in the hotel system',
          'Payment link sent',
          'Night reception alerted',
        ],
      },
      whatsapp: [
        caller('Bonjour ! Le petit-déjeuner est-il inclus ?'),
        agent('Bonjour Sophie ! Oui, le petit-déjeuner est inclus, de 8 h à 10 h 30 ☕'),
        caller('Parfait. Pouvons-nous réserver le dîner pour samedi ?'),
        agent('C’est fait ! Voici les détails :'),
      ],
      whatsappSummary: [
        { emoji: '🍽️', label: 'Dinner', value: 'Saturday · 20:30' },
        { emoji: '👥', label: 'Guests', value: '2' },
        { emoji: '🌐', label: 'Language', value: 'Handled in French' },
      ],
    },
  },

  ecosystem: {
    eyebrow: 'Integrated with Nubo',
    title: 'Your operator, your switchboard',
    titleHighlight: 'and your agent',
    points: [
      {
        title: 'One supplier',
        text: 'Line, switchboard and agent from the same operator. One bill and one support number.',
      },
      {
        title: 'No need to change number',
        text: 'The agent answers on the number your customers already know. You decide when: always, out of hours or when the line is busy.',
      },
      {
        title: 'Support from real people',
        text: 'The Nubo team sets it up with you, gets it running and adjusts it as your business changes.',
      },
    ],
    nodes: {
      centralita: { label: 'Centralita Virtual', note: 'Transfers to your extensions' },
      fijo: { label: 'Nubo Fijo', note: 'Your usual number' },
      movil: { label: 'Nubo Móvil', note: 'Diverted from your mobile' },
      whatsapp: { label: 'WhatsApp Business', note: 'The same agent, in writing' },
      crm: { label: 'Diary and CRM', note: 'Appointments and records, instantly' },
    },
  },

  onboarding: {
    eyebrow: 'How we get started',
    title: 'From the first chat',
    titleHighlight: 'to your agent at work',
    steps: [
      {
        title: 'You tell us about your business',
        text: 'What calls you get, what people ask, what the agent can sort out and what should go to your team.',
      },
      {
        title: 'You hear it before anyone else',
        text: 'We set up your agent with your information and your tone. You try it by calling it yourself, and we adjust it.',
      },
      {
        title: 'We switch it on for your line',
        text: 'It starts when you say: out of hours, when the line is busy or always. And we keep fine-tuning it.',
      },
    ],
    guarantees: [
      {
        title: 'Your data, protected',
        text: 'Designed to comply with GDPR. You decide what is stored and for how long.',
      },
      {
        title: 'You set the rules',
        text: 'What it answers, what it doesn’t, when it transfers and to whom. Changed without touching anything technical.',
      },
      { title: 'People behind it', text: 'Nubo Telecom’s usual support, now for your agent too.' },
    ],
  },

  group: {
    eyebrow: 'Nubo Group',
    title: 'Behind your agent,',
    titleHighlight: 'a group that already connects you',
    intro:
      'Nubo IA is part of Nubo Group: a data and voice operator with flexible, 100% digital solutions for businesses and homes, which also looks after your energy and your security.',
    telecom: {
      name: 'Nubo Telecom',
      text: 'Internet, mobile, landline and virtual switchboard. The network your agent runs on.',
      services: ['Nubo Internet', 'Nubo Móvil', 'Nubo Voz Fijo', 'Centralita Virtual'],
    },
    energy: {
      name: 'Nubo Energy',
      text: 'Energy for your business and your home, with the same personal service.',
    },
    security: {
      name: 'Nubo Security',
      text: 'Security to protect what keeps your business running.',
    },
    visit: 'Visit',
    cta: 'Discover Nubo Telecom',
    newTab: '(opens in a new tab)',
  },

  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'What people',
    titleHighlight: 'always ask us',
    intro: 'Still have a question? Give us a call and a real person will answer it.',
    items: [
      {
        q: 'Can you tell it’s artificial intelligence?',
        a: 'It talks naturally, understands half-finished sentences and never asks anyone to press keys. Even so, if someone asks, the agent says it is a virtual assistant: being open about it builds trust too.',
      },
      {
        q: 'What happens if it doesn’t know the answer?',
        a: 'It says so, takes a note and passes the case to you; or it transfers the call to the person you choose, with the summary already done. You decide what it handles on its own and what it doesn’t.',
      },
      {
        q: 'Do I have to change my number?',
        a: 'No. The agent answers on your usual number. You can switch it on for every call, only out of hours, or only when the line is busy.',
      },
      {
        q: 'Does it work with my switchboard and my diary?',
        a: 'With Nubo’s Centralita Virtual it integrates directly. With diaries, CRMs and management software, we look at each case in our first meeting.',
      },
      {
        q: 'Does it also answer on WhatsApp?',
        a: 'Yes. The same agent can reply on your WhatsApp Business with the same information and the same rules as on the phone.',
      },
      {
        q: 'Which languages does it speak?',
        a: 'Spanish, Catalan, English, French and many more. It replies in the caller’s language.',
      },
      {
        q: 'How much does it cost?',
        a: 'It depends on how many calls and conversations it handles and what it has to do. We prepare a fixed proposal once we know your business, with no obligation.',
      },
      {
        q: 'What about my data?',
        a: 'It is handled in line with GDPR. You decide what is recorded and for how long, and only your team can see the conversations.',
      },
    ],
  },

  contact: {
    eyebrow: 'Let’s get started',
    title: 'Hear your own agent',
    titleHighlight: 'before you decide',
    text: 'Tell us how you work and we’ll prepare a demo with your company’s name. No obligation.',
    call: 'Call',
    write: 'Email',
    free: 'Free call.',
    mailSubject: 'I’d like an AI agent for my business',
    partnerTitle: 'Are you a Nubo distributor?',
    partnerText:
      'Add AI agents to what you already offer your customers, with Nubo’s technical backing.',
    partnerCta: 'Distributor programme',
  },

  footer: {
    tagline: 'AI voice and WhatsApp agents, from your data and voice operator.',
    thisPage: 'Nubo IA',
    group: 'Nubo Group',
    contact: 'Contact',
    legalNote: 'The conversations on this page are examples with made-up businesses.',
  },

  notFound: {
    title: 'This page isn’t answering',
    text: 'But our agent is. Go back to the start and try it.',
    back: 'Back to the home page',
  },
};
