import { agent, caller } from '../turns';
import type { Dictionary } from './es';

export const fr: Dictionary = {
  meta: {
    title: 'Nubo IA · Agents vocaux et WhatsApp avec IA pour votre entreprise',
    description:
      'Un agent d’intelligence artificielle qui répond aux appels et aux WhatsApp de votre entreprise 24 h/24, 7 j/7 : il prend les rendez-vous, enregistre les réservations, répond aux questions et vous transmet l’essentiel. Par Nubo Telecom.',
    ogTitle: 'Nubo IA · Votre entreprise répond toujours',
    ogDescription:
      'Répond aux appels et aux WhatsApp grâce à l’IA, 24 h/24, sur votre numéro habituel. Écoutez un appel d’exemple.',
  },

  nav: {
    how: 'Comment ça marche',
    demo: 'Essayez',
    benefits: 'Avantages',
    sectors: 'Secteurs',
    group: 'Groupe Nubo',
    faq: 'Questions',
    cta: 'Je veux mon agent',
    menuOpen: 'Ouvrir le menu',
    menuClose: 'Fermer le menu',
    skip: 'Aller au contenu',
    home: 'Nubo IA, accueil',
    main: 'Principal',
    language: 'Langue',
    themeToLight: 'Passer en mode clair',
    themeToDark: 'Passer en mode sombre',
  },

  hero: {
    eyebrow: 'Nubo IA · Réceptionniste dotée d’intelligence artificielle',
    titleStart: 'Votre entreprise répond à',
    titleHighlight: 'tous les appels',
    titleEnd: 'et WhatsApp. 24 h/24.',
    subtitle:
      'Un agent IA accueille vos clients par téléphone et sur WhatsApp comme le ferait votre meilleure réceptionniste : il prend les rendez-vous, enregistre les réservations, répond aux questions et vous prévient de ce qui compte. Sur votre numéro habituel.',
    ctaPrimary: 'Écouter un appel d’exemple',
    ctaSecondary: 'Parler à un conseiller',
    capabilities: [
      'Répond aux appels',
      'Répond sur WhatsApp',
      'Prend rendez-vous et réservations',
      'Vous transmet l’essentiel',
    ],
    live: {
      label: 'Voici comment ça marche, en direct',
      steps: [
        'Un client appelle',
        'L’IA décroche',
        'Elle réserve le rendez-vous',
        'Confirmation par WhatsApp',
      ],
      incoming: 'Appel entrant',
      afterHours: 'Hors horaires · 21:47',
      answered: 'Pris en charge par Nubo IA',
      callerLine: 'Bonjour, avez-vous un créneau demain ?',
      agentLine: 'Oui : demain à 10:30. Je vous le réserve ?',
      bookedTitle: 'Rendez-vous réservé',
      bookedDetail: 'Demain · 10:30 · Détartrage',
      whatsappFrom: 'Clínica Dental Sonríe',
      whatsappText: '✅ Rendez-vous confirmé : demain à 10:30. À très bientôt !',
      ownerNote: 'Résumé envoyé à votre équipe',
    },
  },

  how: {
    eyebrow: 'Comment ça marche',
    title: 'Voici comment travaille',
    titleHighlight: 'votre agent',
    steps: [
      {
        title: 'Un agent à votre image',
        text: 'Nous le préparons avec la voix, le ton et les informations de votre entreprise. Il répond comme s’il faisait partie de la maison.',
      },
      {
        title: 'Les appels et les WhatsApp arrivent',
        text: 'Il répond sur votre numéro habituel et sur votre WhatsApp Business. Tous en même temps, à toute heure.',
      },
      {
        title: 'Il comprend et décide',
        text: 'Il consulte vos horaires, vos services, vos tarifs et votre agenda, et pose les questions qui manquent pour régler la demande.',
      },
      {
        title: 'Il fait le travail et vous prévient',
        text: 'Il fixe le rendez-vous, crée la fiche, envoie la confirmation et, si besoin, transfère l’appel à votre équipe.',
      },
    ],
    agentLabel: 'Votre agent Nubo IA',
    inputs: [
      { title: 'Appel entrant', detail: '+34 6•• ••• 218' },
      { title: 'Nouveau WhatsApp', detail: '« Vous ouvrez le samedi ? »' },
      { title: 'Appel hors horaires', detail: 'Dimanche · 22:10' },
    ],
    knowledge: ['Horaires', 'Services', 'Tarifs', 'Agenda', 'Vos règles'],
    outputs: [
      { title: 'Rendez-vous dans votre agenda', detail: 'Vendredi · 17:00' },
      { title: 'Fiche dans le CRM', detail: 'Nouveau client · intérêt élevé' },
      { title: 'Confirmation par WhatsApp', detail: 'Envoyée au client' },
      { title: 'Transfert à votre équipe', detail: 'Dossier déjà expliqué' },
    ],
    srDescription:
      'Les trois rubans du logo Nubo forment le N de l’agent. À gauche arrivent les appels et les WhatsApp ; autour de l’agent apparaît ce qu’il sait de votre entreprise ; à droite sortent les tâches accomplies : rendez-vous, fiche, confirmation et alerte à votre équipe.',
  },

  demo: {
    eyebrow: 'Essayez',
    title: 'Appelez une entreprise d’exemple',
    titleHighlight: 'et écoutez qui répond',
    subtitle: 'Trois étapes et vous l’entendez. Sans inscription et sans donner votre numéro.',
    step1: 'Choisissez une entreprise',
    step2: 'Choisissez le canal',
    step3: 'Appuyez et écoutez',
    channelCall: 'Appel vocal',
    channelWhatsapp: 'WhatsApp',
    sound: 'Avec le son',
    soundHint: 'Montez le volume de votre appareil.',
    noVoice:
      'Votre navigateur n’a pas de voix dans cette langue : vous verrez la conversation écrite.',
    startCall: 'Appeler maintenant',
    startChat: 'Démarrer la conversation',
    hangUp: 'Raccrocher',
    again: 'Rejouer',
    statusIdle: 'Prêt à appeler',
    statusRinging: 'Ça sonne…',
    statusLive: 'En ligne avec l’agent IA',
    statusDone: 'Appel terminé',
    statusChatIdle: 'Prêt à écrire',
    statusChatLive: 'Conversation en cours',
    statusChatDone: 'Conversation réglée',
    pressToCall: 'Appuyez sur « Appeler maintenant »',
    attending: 'L’agent IA répond',
    transcriptLabel: 'Transcription de l’appel',
    chatLabel: 'Conversation WhatsApp',
    agent: 'Agent IA',
    speaking: 'parle',
    online: 'en ligne',
    typing: 'écrit…',
    today: 'Exemple · Aujourd’hui',
    message: 'Message',
    didTitle: 'Ce que l’agent a fait',
    pendingHint: 'Appelez et regardez-le se remplir pendant qu’il parle.',
    chatPendingHint: 'Lancez-vous et regardez comment il règle ça.',
    pipBack: 'Revenir à la démo',
    pipClose: 'Fermer',
    note: 'Conversation d’exemple avec une entreprise imaginaire. Votre agent parle de votre entreprise, avec vos horaires, vos services et votre agenda.',
  },

  benefits: {
    eyebrow: 'Avantages',
    title: 'Ce qu’il fait pour vous',
    titleHighlight: 'pendant que vous vous occupez du reste',
    calls: {
      title: 'Aucun appel manqué',
      text: 'Il répond à tous en même temps : aux heures de pointe, pendant les vacances et à trois heures du matin.',
      log: [
        '09:12 · Répondu',
        '13:58 · Répondu',
        '14:03 · Répondu',
        '21:47 · Répondu',
        '03:20 · Répondu',
      ],
      ring: '24 h',
    },
    bookings: {
      title: 'Rendez-vous et réservations, en autonomie',
      text: 'Il consulte votre agenda, propose des créneaux, confirme et envoie le rappel.',
      days: ['L', 'M', 'M', 'J', 'V'],
    },
    leads: {
      title: 'Des clients, pas des curieux',
      text: 'Il pose les questions utiles et vous laisse la fiche toute prête.',
      fields: [
        { label: 'Nom', value: 'Laura Martí' },
        { label: 'Recherche', value: 'Appart. 3 ch.' },
        { label: 'Financement', value: 'Pré-approuvé' },
      ],
      badge: 'Intérêt élevé',
    },
    handoff: {
      title: 'Il passe la main à une personne quand il le faut',
      text: 'Il transfère à votre équipe avec le dossier déjà expliqué.',
      transferring: 'Transfert vers l’accueil',
      summary: 'Résumé : urgence, mal de dents depuis hier.',
    },
    languages: {
      title: 'Dans la langue de l’appelant',
      text: 'Avec votre ton et vos règles, en espagnol, catalan, anglais, français et bien d’autres.',
      greetings: [
        'Hola, ¿en qué te ayudo?',
        'Bon dia, com et puc ajudar?',
        'Hello, how can I help?',
        'Bonjour, je vous écoute.',
      ],
    },
    records: {
      title: 'Tout est consigné',
      text: 'Chaque conversation avec son résumé, son motif et sa transcription dans un tableau de bord.',
      week: 'Cette semaine',
      calls: 'Appels',
      booked: 'Rendez-vous',
    },
  },

  compare: {
    eyebrow: 'Au quotidien',
    title: 'La même journée,',
    titleHighlight: 'avec et sans agent',
    colSituation: 'Situation',
    colToday: 'Aujourd’hui',
    colWith: 'Avec Nubo IA',
    rows: [
      [
        'Un appel à l’heure du déjeuner',
        'Le répondeur se déclenche et le client appelle ailleurs',
        'Il est pris en charge et repart avec un rendez-vous',
      ],
      [
        'Trois appels en même temps',
        'Deux attendent ; un raccroche',
        'Les trois sont pris en charge aussitôt',
      ],
      [
        'Un WhatsApp à 23:00',
        'On répond demain, si quelqu’un y pense',
        'Réponse en quelques secondes',
      ],
      [
        'Une vraie urgence',
        'Elle se perd parmi le reste',
        'Elle passe directement à la personne d’astreinte',
      ],
      [
        'Fin de journée',
        'Des notes sur papier et des rappels à faire',
        'Un résumé de tout dans le tableau de bord',
      ],
    ],
  },

  sectors: {
    eyebrow: 'Secteurs',
    title: 'Conçu pour les entreprises qui',
    titleHighlight: 'vivent au téléphone',
    intro:
      'Chaque agent est préparé pour une entreprise précise. Voici les plus courantes ; si la vôtre n’y figure pas, c’est possible aussi.',
    listen: 'Écouter l’exemple',
    seeAll: 'Voir tous les secteurs',
    pageTitle: 'Secteurs · Nubo IA, agents vocaux et WhatsApp avec IA',
    pageDescription:
      'Cliniques, restaurants, agences immobilières, garages, cabinets, hôtels et plus : ce que fait un agent IA de Nubo dans chaque secteur.',
    back: 'Retour à l’accueil',
    items: {
      salud: {
        name: 'Cliniques et santé',
        pitch: 'L’accueil cesse d’être un goulot d’étranglement.',
        useCases: [
          'Prend, modifie et annule les rendez-vous',
          'Rappels et confirmations',
          'Urgences transmises à la personne d’astreinte',
        ],
      },
      restauracion: {
        name: 'Restauration',
        pitch: 'Des réservations en plein service, sans quitter la salle.',
        useCases: [
          'Réservations et changements de table',
          'Allergies et demandes spéciales',
          'Commandes à emporter',
        ],
      },
      inmobiliaria: {
        name: 'Agences immobilières',
        pitch: 'Chaque appel venu d’une annonce débouche sur une visite, pas sur une messagerie.',
        useCases: [
          'Répond pour chaque bien',
          'Filtre et qualifie les acheteurs',
          'Planifie les visites avec le commercial',
        ],
      },
      automocion: {
        name: 'Garages et automobile',
        pitch: 'Les mécaniciens travaillent ; le téléphone se gère tout seul.',
        useCases: [
          'Rendez-vous pour révision et contrôle technique (ITV)',
          'État d’avancement de la réparation',
          'Devis et prise en charge du véhicule',
        ],
      },
      asesorias: {
        name: 'Cabinets de conseil et de gestion',
        pitch: 'Chaque client arrive chez le bon professionnel, dossier déjà expliqué.',
        useCases: [
          'Première consultation et tri',
          'Recueille les documents',
          'Rappelle les échéances et les paiements',
        ],
      },
      hoteles: {
        name: 'Hôtels et tourisme',
        pitch: 'Des réservations directes à toute heure et dans la langue du client.',
        useCases: [
          'Disponibilités et réservations directes',
          'Check-in, horaires et services',
          'En plusieurs langues',
        ],
      },
      comercio: {
        name: 'Commerce et e-commerce',
        pitch: '« Où est ma commande ? », sans file ni attente.',
        useCases: ['État des commandes', 'Échanges et retours', 'Stock et recommandations'],
      },
      servicios: {
        name: 'Services techniques',
        pitch: 'Les pannes arrivent classées et par ordre de priorité.',
        useCases: [
          'Note la panne et son degré d’urgence',
          'Affecte un technicien et un créneau',
          'Prévient le client à l’arrivée du technicien',
        ],
      },
      logistica: {
        name: 'Logistique et transport',
        pitch: 'Suivi et changements de livraison, sans bureau.',
        useCases: ['Où est mon colis ?', 'Changer d’adresse ou de jour', 'Incidents de livraison'],
      },
      atencion: {
        name: 'Service client',
        pitch: 'Il absorbe les pics et laisse à l’équipe ce qui demande une vraie personne.',
        useCases: [
          'Réponses immédiates aux questions fréquentes',
          'Débordement aux heures de pointe',
          'Passe la main à un conseiller avec le contexte',
        ],
      },
    },
  },

  demos: {
    salud: {
      business: 'Clínica Dental Sonríe',
      caller: 'Marta',
      call: [
        agent('Clínica Dental Sonríe, bonjour. Que puis-je faire pour vous ?'),
        caller('Bonjour, je voudrais prendre rendez-vous pour un détartrage.'),
        agent(
          'Bien sûr. J’ai jeudi à dix heures trente, ou vendredi à dix-sept heures. Lequel vous arrange le mieux ?',
        ),
        caller('Vendredi à dix-sept heures, parfait.'),
        agent(
          'C’est noté : vendredi à dix-sept heures avec la docteure Puig. Je vous envoie la confirmation par WhatsApp. Autre chose ?',
        ),
        caller('Non, ce sera tout. Merci !'),
      ],
      callResult: {
        title: 'Rendez-vous créé',
        rows: [
          { label: 'Motif', value: 'Détartrage' },
          { label: 'Quand', value: 'Vendredi · 17:00' },
          { label: 'Avec', value: 'Dre Puig' },
        ],
        actions: [
          'Rendez-vous enregistré dans l’agenda',
          'Confirmation envoyée par WhatsApp',
          'Rappel programmé 24 h avant',
        ],
      },
      whatsapp: [
        caller('Bonjour ! J’ai rendez-vous demain à 10 h et je ne pourrai pas venir 😕'),
        agent('Pas de souci, Marta. Je vous le déplace ? J’ai lundi à 9:30 ou mardi à 12:00.'),
        caller('Mardi à 12 h plutôt'),
        agent('C’est fait, c’est déplacé. Voici le récapitulatif :'),
      ],
      whatsappSummary: [
        { emoji: '❌', label: 'Annulé', value: 'Demain · 10:00' },
        { emoji: '✅', label: 'Nouveau', value: 'Mardi · 12:00' },
        { emoji: '📍', label: 'Lieu', value: 'Clínica Dental Sonríe' },
      ],
    },
    restauracion: {
      business: 'Restaurante La Brasa',
      caller: 'Jordi',
      call: [
        agent('Restaurante La Brasa, bonjour, je vous écoute.'),
        caller('Bonjour, vous auriez une table pour quatre samedi soir ?'),
        agent(
          'Oui. Je peux vous proposer vingt et une heures ou vingt et une heures trente. En terrasse ou à l’intérieur ?',
        ),
        caller('À vingt et une heures, en terrasse. Ma compagne est cœliaque.'),
        agent(
          'C’est noté : samedi à vingt et une heures, quatre personnes, en terrasse, dont une personne cœliaque. À quel nom ?',
        ),
        caller('Au nom de Jordi. Merci.'),
      ],
      callResult: {
        title: 'Réservation confirmée',
        rows: [
          { label: 'Personnes', value: '4 · terrasse' },
          { label: 'Quand', value: 'Samedi · 21:00' },
          { label: 'Alerte', value: 'Une personne cœliaque' },
        ],
        actions: [
          'Réservation inscrite dans le livre de réservations',
          'Alerte allergène transmise à la cuisine',
          'Confirmation par WhatsApp',
        ],
      },
      whatsapp: [
        caller('Vous faites des plats à emporter aujourd’hui ?'),
        agent(
          'Oui, de 13:00 à 15:30. Qu’est-ce qui vous ferait envie ? Je vous envoie la carte si vous voulez 📋',
        ),
        caller('Deux poulets à la braise avec des frites, pour 14:00'),
        agent('Parfait, commande enregistrée :'),
      ],
      whatsappSummary: [
        { emoji: '🍗', label: 'Commande', value: '2 poulets avec frites' },
        { emoji: '🕑', label: 'Retrait', value: 'Aujourd’hui · 14:00' },
        { emoji: '💶', label: 'Paiement', value: 'Au retrait' },
      ],
    },
    inmobiliaria: {
      business: 'Inmobiliaria Costa Norte',
      caller: 'Laura',
      call: [
        agent('Inmobiliaria Costa Norte, bonjour.'),
        caller(
          'Je vous appelle au sujet de l’appartement de trois chambres du centre-ville. Est-il toujours disponible ?',
        ),
        agent(
          'Oui, il est toujours disponible. Vous le cherchez pour y habiter ou pour investir ? Et votre financement, il est en bonne voie ?',
        ),
        caller('Pour y habiter, et ma banque m’a déjà donné son accord de principe.'),
        agent(
          'Très bien. Je peux vous proposer une visite avec Àlex mercredi à dix-huit heures. Cela vous convient ?',
        ),
        caller('Oui, parfait.'),
      ],
      callResult: {
        title: 'Visite programmée',
        rows: [
          { label: 'Bien', value: 'Appart. 3 ch. · centre' },
          { label: 'Intérêt', value: 'Élevé · prêt pré-approuvé' },
          { label: 'Visite', value: 'Mercredi · 18:00 avec Àlex' },
        ],
        actions: [
          'Client créé dans le CRM',
          'Visite dans l’agenda d’Àlex',
          'Fiche du bien envoyée par WhatsApp',
        ],
      },
      whatsapp: [
        caller('Bonjour, l’attique près de la plage accepte les animaux ?'),
        agent(
          'Bonjour Laura ! Oui, le propriétaire accepte les petits animaux 🐶 Vous voulez le visiter ?',
        ),
        caller('Oui, vendredi après-midi ?'),
        agent('Je vous le réserve :'),
      ],
      whatsappSummary: [
        { emoji: '🏖️', label: 'Bien', value: 'Attique près de la plage' },
        { emoji: '📅', label: 'Visite', value: 'Vendredi · 17:30' },
        { emoji: '👤', label: 'Votre contact', value: 'Àlex' },
      ],
    },
    automocion: {
      business: 'Talleres Montseny',
      caller: 'Pere',
      call: [
        agent('Talleres Montseny, que puis-je faire pour vous ?'),
        caller('Bonjour, ma voiture est prête ? C’est la Golf grise.'),
        agent(
          'Un instant… Oui, Pere : la Golf est prête. Changement des plaquettes et révision effectués. Vous pouvez passer jusqu’à dix-neuf heures.',
        ),
        caller('Super ! Vous pouvez déjà me prendre rendez-vous pour le contrôle technique ?'),
        agent(
          'Je vous le demande pour lundi à la première heure, et nous nous chargeons d’emmener la voiture. Je vous préviens par WhatsApp.',
        ),
        caller('Parfait, merci.'),
      ],
      callResult: {
        title: 'Client informé',
        rows: [
          { label: 'Véhicule', value: 'Golf grise · prête' },
          { label: 'Travaux', value: 'Plaquettes et révision' },
          { label: 'Contrôle technique', value: 'Lundi · 8:00' },
        ],
        actions: [
          'État consulté dans le système',
          'Rendez-vous de contrôle technique créé',
          'Facture envoyée par WhatsApp',
        ],
      },
      whatsapp: [
        caller('Un voyant orange s’est allumé sur mon tableau de bord 😬'),
        agent(
          'Voyons ça. Vous pouvez m’envoyer une photo ? Si c’est le moteur, mieux vaut éviter les longs trajets.',
        ),
        caller('📷 Photo envoyée'),
        agent('C’est le voyant moteur. Je vous ai trouvé un créneau :'),
      ],
      whatsappSummary: [
        { emoji: '⚠️', label: 'Alerte', value: 'Voyant moteur' },
        { emoji: '📅', label: 'Diagnostic', value: 'Demain · 9:00' },
        { emoji: '🚗', label: 'Voiture', value: 'Golf grise' },
      ],
    },
    asesorias: {
      business: 'Assessoria Ter',
      caller: 'Núria',
      call: [
        agent('Assessoria Ter, bonjour.'),
        caller(
          'Bonjour, je suis indépendante et j’ai reçu un courrier de l’administration fiscale que je ne comprends pas.',
        ),
        agent(
          'Pas d’inquiétude, on regarde ça. C’est une demande de justificatifs ou un avis de paiement ? Si vous l’avez sous la main, dites-moi le délai.',
        ),
        caller('C’est une demande de justificatifs, et j’ai dix jours.'),
        agent(
          'Je vous passe Carles, qui s’occupe de la fiscalité des indépendants. En attendant, envoyez-nous le courrier par WhatsApp, il l’aura sous les yeux.',
        ),
        caller('D’accord, tout de suite.'),
      ],
      callResult: {
        title: 'Dossier transmis',
        rows: [
          { label: 'Sujet', value: 'Demande de l’administration fiscale' },
          { label: 'Délai', value: '10 jours · priorité haute' },
          { label: 'Pour', value: 'Carles · fiscalité' },
        ],
        actions: [
          'Appel transféré à Carles',
          'Fiche avec le résumé du dossier',
          'Lien pour envoyer le courrier',
        ],
      },
      whatsapp: [
        caller('De quoi ai-je besoin pour la déclaration de revenus de cette année ?'),
        agent(
          'Je vous prépare une liste. Y a-t-il eu des changements : logement, enfants, loyer… ?',
        ),
        caller('J’ai acheté un appartement'),
        agent('Alors il nous faudra ceci :'),
      ],
      whatsappSummary: [
        { emoji: '🪪', label: 'Pièce d’identité', value: 'De tous les titulaires' },
        { emoji: '🏠', label: 'Logement', value: 'Acte de vente et reçus du prêt immobilier' },
        { emoji: '📅', label: 'Rendez-vous', value: 'Mardi · 11:00 avec Carles' },
      ],
    },
    hoteles: {
      business: 'Hotel Mas de la Riera',
      caller: 'Sophie',
      call: [
        agent('Hotel Mas de la Riera, bonsoir.'),
        caller('Bonjour, avez-vous une chambre double pour le pont de décembre ?'),
        agent(
          'Oui, il me reste une double avec vue sur le jardin, du six au huit, petit-déjeuner inclus.',
        ),
        caller('Est-il possible d’arriver tard ? Nous arriverons vers vingt-trois heures.'),
        agent(
          'Aucun problème : je laisse une note à la réception pour votre arrivée tardive. Je vous envoie le lien pour confirmer la réservation.',
        ),
        caller('Parfait, merci beaucoup.'),
      ],
      callResult: {
        title: 'Réservation directe',
        rows: [
          { label: 'Chambre', value: 'Double · vue sur le jardin' },
          { label: 'Dates', value: 'Du 6 au 8 décembre' },
          { label: 'Note', value: 'Arrivée 23:00' },
        ],
        actions: [
          'Préréservation dans le système de l’hôtel',
          'Lien de paiement envoyé',
          'Réception de nuit prévenue',
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
        { emoji: '🌐', label: 'Langue', value: 'Traité en anglais' },
      ],
    },
  },

  ecosystem: {
    eyebrow: 'Intégré à Nubo',
    title: 'Votre opérateur, votre standard',
    titleHighlight: 'et votre agent',
    points: [
      {
        title: 'Un seul fournisseur',
        text: 'Ligne, standard et agent chez le même opérateur. Une seule facture et un seul numéro de support.',
      },
      {
        title: 'Sans changer de numéro',
        text: 'L’agent répond sur le numéro que vos clients connaissent déjà. Vous décidez quand : toujours, hors horaires ou quand la ligne est occupée.',
      },
      {
        title: 'Un support humain',
        text: 'L’équipe de Nubo le prépare avec vous, le met en route et l’ajuste quand votre activité évolue.',
      },
    ],
    nodes: {
      centralita: { label: 'Centralita Virtual', note: 'Transfère vers vos postes' },
      fijo: { label: 'Nubo Fijo', note: 'Votre numéro habituel' },
      movil: { label: 'Nubo Móvil', note: 'Renvoi depuis le mobile' },
      whatsapp: { label: 'WhatsApp Business', note: 'Le même agent, par écrit' },
      crm: { label: 'Agenda et CRM', note: 'Rendez-vous et fiches en temps réel' },
    },
  },

  onboarding: {
    eyebrow: 'Pour démarrer',
    title: 'De la première discussion',
    titleHighlight: 'à votre agent en service',
    steps: [
      {
        title: 'Vous nous présentez votre activité',
        text: 'Quels appels vous recevez, ce qu’on vous demande, ce que l’agent peut régler et ce qu’il doit transmettre à votre équipe.',
      },
      {
        title: 'Vous l’écoutez avant tout le monde',
        text: 'Nous préparons votre agent avec vos informations et votre ton. Vous le testez en l’appelant vous-même, et nous ajustons.',
      },
      {
        title: 'Nous l’activons sur votre ligne',
        text: 'Il démarre quand vous le décidez : hors horaires, quand la ligne est occupée ou tout le temps. Et nous l’affinons au fil du temps.',
      },
    ],
    guarantees: [
      {
        title: 'Vos données, protégées',
        text: 'Conçu pour respecter le RGPD. Vous décidez de ce qui est conservé et pendant combien de temps.',
      },
      {
        title: 'Vous fixez les règles',
        text: 'Ce qu’il répond, ce qu’il ne répond pas, quand il transfère et à qui. Cela se modifie sans rien toucher de technique.',
      },
      {
        title: 'Des personnes derrière',
        text: 'Le support de Nubo Telecom, celui que vous connaissez, aussi pour votre agent.',
      },
    ],
  },

  group: {
    eyebrow: 'Groupe Nubo',
    title: 'Derrière votre agent,',
    titleHighlight: 'un groupe qui vous connecte déjà',
    intro:
      'Nubo IA fait partie du Groupe Nubo : un opérateur de données et de voix proposant des solutions flexibles et 100 % numériques pour les entreprises et les foyers, qui s’occupe aussi de votre énergie et de votre sécurité.',
    telecom: {
      name: 'Nubo Telecom',
      text: 'Internet, mobile, fixe et standard virtuel. Le réseau sur lequel fonctionne votre agent.',
      services: ['Nubo Internet', 'Nubo Móvil', 'Nubo Voz Fijo', 'Centralita Virtual'],
    },
    energy: {
      name: 'Nubo Energy',
      text: 'De l’énergie pour votre entreprise et votre foyer, avec la même proximité.',
    },
    security: {
      name: 'Nubo Security',
      text: 'De la sécurité pour protéger ce qui fait tourner votre entreprise.',
    },
    visit: 'Visiter',
    cta: 'Découvrir Nubo Telecom',
    newTab: '(s’ouvre dans un nouvel onglet)',
  },

  faq: {
    eyebrow: 'Questions fréquentes',
    title: 'Ce qu’on nous',
    titleHighlight: 'demande toujours',
    intro: 'Il vous reste un doute ? Appelez-nous, une vraie personne vous répond.',
    items: [
      {
        q: 'Est-ce que ça s’entend que c’est une intelligence artificielle ?',
        a: 'Il parle naturellement, comprend les phrases à moitié dites et n’oblige pas à appuyer sur des touches. Cela dit, si quelqu’un pose la question, l’agent répond qu’il est un assistant virtuel : la transparence inspire aussi confiance.',
      },
      {
        q: 'Que se passe-t-il s’il ne sait pas répondre ?',
        a: 'Il le dit, prend note et vous transmet le dossier ; ou il transfère l’appel à la personne de votre choix, résumé déjà fait. C’est vous qui décidez ce qu’il règle seul et ce qu’il ne règle pas.',
      },
      {
        q: 'Dois-je changer de numéro ?',
        a: 'Non. L’agent répond sur votre numéro habituel. Vous pouvez l’activer pour tous les appels, seulement hors horaires ou seulement quand la ligne est occupée.',
      },
      {
        q: 'Est-ce compatible avec mon standard et mon agenda ?',
        a: 'Avec la Centralita Virtual de Nubo, l’intégration est directe. Pour les agendas, les CRM et les logiciels de gestion, nous voyons cela au cas par cas lors du premier rendez-vous.',
      },
      {
        q: 'Répond-il aussi sur WhatsApp ?',
        a: 'Oui. Le même agent peut répondre sur votre WhatsApp Business avec les mêmes informations et les mêmes règles qu’au téléphone.',
      },
      {
        q: 'Dans quelles langues parle-t-il ?',
        a: 'En espagnol, catalan, anglais, français et bien d’autres. Il répond dans la langue de l’appelant.',
      },
      {
        q: 'Combien ça coûte ?',
        a: 'Cela dépend du nombre d’appels et de conversations traités, et de ce qu’il doit faire. Nous vous préparons une proposition ferme après avoir découvert votre activité, sans engagement.',
      },
      {
        q: 'Et mes données ?',
        a: 'Elles sont traitées conformément au RGPD. Vous décidez de ce qui est enregistré et pendant combien de temps, et seule votre équipe voit les conversations.',
      },
    ],
  },

  contact: {
    eyebrow: 'Lançons-nous',
    title: 'Écoutez votre propre agent',
    titleHighlight: 'avant de vous décider',
    text: 'Dites-nous comment vous travaillez et nous vous préparons une démo au nom de votre entreprise. Sans engagement.',
    call: 'Appeler le',
    write: 'Écrire à',
    free: 'Appel gratuit.',
    mailSubject: 'Je veux un agent IA pour mon entreprise',
    partnerTitle: 'Vous êtes distributeur Nubo ?',
    partnerText:
      'Ajoutez des agents IA à ce que vous proposez déjà à vos clients, avec le soutien technique de Nubo.',
    partnerCta: 'Programme distributeurs',
  },

  footer: {
    tagline:
      'Agents vocaux et WhatsApp dotés d’intelligence artificielle, de votre opérateur de données et de voix.',
    thisPage: 'Nubo IA',
    group: 'Groupe Nubo',
    contact: 'Contact',
    legalNote:
      'Les conversations de cette page sont des exemples avec des entreprises imaginaires.',
  },

  notFound: {
    title: 'Cette page ne répond pas',
    text: 'Mais notre agent, si. Retournez à l’accueil et essayez-le.',
    back: 'Retour à l’accueil',
  },
};
