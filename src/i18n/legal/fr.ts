import { BROWSER_HELP, H, SITE_DOMAIN, STORAGE } from './shared';
import type { LegalDictionary } from './types';

/** Textos legals en francès. Traducció dels castellans (`es.ts`), que en són la font. */
export const fr: LegalDictionary = {
  nav: {
    label: 'Informations légales',
    legal: 'Mentions légales',
    privacy: 'Confidentialité',
    cookies: 'Cookies',
  },
  updated: 'Dernière mise à jour : 10 novembre 2026',
  holderLabels: {
    name: 'Titulaire',
    nif: 'NIF',
    address: 'Adresse',
    phone: 'Téléphone',
    email: 'E-mail',
    registry: 'Immatriculation',
  },
  registry: (r) =>
    `Immatriculée au Registre du commerce de ${r.city}, section ${r.section}, feuille ${r.sheet}, folio ${r.folio}, tome ${r.volume}`,
  docs: {
    legal: {
      title: 'Mentions légales',
      description: `Titulaire, conditions d'utilisation et propriété intellectuelle de ${SITE_DOMAIN}.`,
      sections: [
        { blocks: [`Le titulaire de ce site web, ${SITE_DOMAIN}, est :`, { holder: true }] },
        {
          heading: "Conditions d'utilisation",
          blocks: [
            "L'utilisation de ce site implique l'acceptation pleine et entière des conditions des présentes mentions légales. Toute personne utilisatrice du site, quelle que soit la juridiction territoriale depuis laquelle elle y accède, s'engage à respecter ces clauses.",
          ],
        },
        {
          heading: 'Propriété intellectuelle et industrielle',
          blocks: [
            `L'ensemble du contenu de ce site, qu'il s'agisse de textes, d'images, de sons, de marques, de logos ou d'autres éléments, ainsi que sa structure, sa conception, ses combinaisons de couleurs et sa présentation, est protégé par des droits de propriété intellectuelle et industrielle que l'utilisateur doit respecter. Toute transformation, modification, communication publique ou autre forme d'exploitation, par quelque procédé que ce soit, est interdite sans l'autorisation expresse de ${H.name}.`,
          ],
        },
        {
          heading: 'Responsabilité quant aux contenus',
          blocks: [
            `Bien que ${H.name} agisse avec la plus grande diligence, il se peut qu'une donnée ou une information ne soit pas entièrement à jour au moment où l'utilisateur la consulte. Les informations présentées sur ce site ont donc une valeur indicative et n'engagent pas ${H.name}.`,
            'Les conversations du simulateur de ce site sont des exemples avec des entreprises fictives. Elles montrent le fonctionnement du produit et ne correspondent pas à de vrais clients.',
            `${H.name} n'est pas responsable des informations obtenues par le biais des liens présents sur son site.`,
            `${H.name} se réserve le droit de modifier ou de mettre à jour, à tout moment et sans préavis, les informations et tout élément de la conception et de la configuration du site.`,
          ],
        },
        {
          heading: 'Droit applicable et juridiction',
          blocks: [
            "Les éventuels litiges relatifs à ce site sont régis exclusivement par le droit espagnol, et les cours et tribunaux espagnols sont compétents pour en connaître. En acceptant ces conditions, l'utilisateur renonce expressément à toute autre juridiction qui pourrait lui revenir en application de la loi espagnole de procédure civile.",
          ],
        },
      ],
    },

    privacy: {
      title: 'Politique de confidentialité',
      description: `Comment ${H.name} traite les données personnelles liées à ${SITE_DOMAIN} et à Nubo IA.`,
      sections: [
        {
          blocks: [
            `${H.name} s'engage à protéger la vie privée des personnes qui consultent ce site et utilisent ses services. Cette politique ne s'applique pas aux sites web ou réseaux sociaux de tiers accessibles par des liens ; ${H.name} n'en contrôle ni le contenu ni les politiques de confidentialité.`,
            'Conformément au règlement (UE) 2016/679 (RGPD) et à la loi organique espagnole 3/2018 relative à la protection des données personnelles et à la garantie des droits numériques (LOPDGDD), nous vous informons de la manière dont vos données personnelles sont traitées.',
          ],
        },
        { heading: 'Qui est le responsable du traitement ?', blocks: [{ holder: true }] },
        {
          heading: 'Quelles données ce site collecte-t-il ?',
          blocks: [
            "Ce site n'a ni formulaire ni inscription : le parcourir ne vous demande aucune donnée personnelle.",
            "Le simulateur d'appels et de WhatsApp fonctionne dans votre navigateur. Il n'utilise pas votre micro et n'envoie à aucun serveur ce qui s'y passe.",
            "Comme tout site web, le serveur qui l'héberge enregistre des données techniques sur les visites, comme l'adresse IP ou le navigateur, pour qu'il fonctionne et pour le protéger contre les abus.",
          ],
        },
        {
          heading: 'Dans quel but traitons-nous vos données ?',
          blocks: [
            {
              list: [
                'Répondre aux demandes que vous nous adressez par téléphone, e-mail ou WhatsApp.',
                'Gérer la souscription et la fourniture de nos services, y compris les agents vocaux et WhatsApp à intelligence artificielle.',
                'Si vous y consentez, vous envoyer des informations sur nos activités, produits ou services.',
                'Assurer la sécurité et le bon fonctionnement du site.',
              ],
            },
          ],
        },
        {
          heading: 'Combien de temps conservons-nous vos données ?',
          blocks: [
            'Les données personnelles sont conservées tant que vous utilisez nos services ou souhaitez recevoir des informations, puis pendant les délais nécessaires pour respecter nos obligations légales : 6 ans pour les documents comptables à des fins commerciales (art. 30 du Code de commerce espagnol) et 4 ans à des fins fiscales (art. 66 à 70 de la loi générale fiscale espagnole).',
          ],
        },
        {
          heading: 'Quelle est la base juridique du traitement ?',
          blocks: [
            "L'exécution du contrat de services, les consentements que vous nous donnez et, pour les données techniques des visites, notre intérêt légitime à assurer la sécurité et le bon fonctionnement du site.",
            "Si la personne qui nous fournit des données a moins de 16 ans, le consentement de son père, de sa mère, de son tuteur ou de son représentant légal est indispensable. À défaut, le représentant légal du mineur nous en informera dès qu'il en aura connaissance.",
          ],
        },
        {
          heading: 'À qui vos données sont-elles communiquées ?',
          blocks: [
            'Les données ne sont pas communiquées à des tiers, sauf obligation légale ou si cela est nécessaire à la finalité du traitement.',
            'Pour héberger le site et fournir le service, nous faisons appel à des prestataires technologiques qui agissent en tant que sous-traitants, avec les garanties exigées par le RGPD.',
          ],
        },
        {
          heading: 'Quels sont vos droits ?',
          blocks: [
            {
              list: [
                'Obtenir la confirmation que nous traitons ou non vos données personnelles.',
                'Accéder à vos données, demander la rectification des données inexactes ou leur effacement lorsque, entre autres, elles ne sont plus nécessaires aux fins pour lesquelles elles ont été collectées.',
                "Demander, dans certaines circonstances, la limitation du traitement. Dans ce cas, nous ne les conserverons que pour l'exercice ou la défense de droits en justice.",
                "Vous opposer au traitement pour des raisons tenant à votre situation particulière. Nous cesserons de traiter les données, sauf motifs légitimes impérieux ou pour l'exercice ou la défense de droits en justice.",
                'La portabilité de vos données.',
                "Ne pas faire l'objet d'une décision fondée exclusivement sur un traitement automatisé, y compris le profilage, produisant des effets juridiques vous concernant ou vous affectant de manière significative de façon similaire.",
                "Introduire une réclamation auprès de l'autorité de contrôle ; en Espagne, l'Agence espagnole de protection des données (aepd.es).",
              ],
            },
          ],
        },
        {
          heading: 'Comment les exercer ?',
          blocks: [
            `En envoyant une demande écrite, accompagnée de la copie d'une pièce d'identité, à ${H.email} ou à ${H.address}.`,
          ],
        },
        {
          heading: "D'où proviennent vos données et lesquelles traitons-nous ?",
          blocks: [
            "Les données que nous traitons proviennent de la personne concernée, qui garantit leur exactitude et s'engage à nous communiquer toute modification. Il s'agit de données d'identification et de contact (adresses postales ou électroniques et téléphone), limitées à ce qui est nécessaire pour fournir nos services et gérer notre activité.",
          ],
        },
        {
          heading: 'Utilisons-nous des cookies ?',
          blocks: [
            "Un seul cookie technique, pour mémoriser la langue que vous avez choisie. Nous n'utilisons pas de cookies d'analyse ni de publicité. Vous trouverez le détail dans la politique de cookies.",
          ],
        },
        {
          heading: 'Quelles mesures de sécurité appliquons-nous ?',
          blocks: [
            "Nous appliquons les mesures de l'article 32 du RGPD afin de garantir un niveau de sécurité adapté au risque, avec des mécanismes qui assurent la confidentialité, l'intégrité, la disponibilité et la résilience des systèmes. Notamment :",
            {
              list: [
                'Information du personnel sur les politiques de traitement des données.',
                'Sauvegardes régulières.',
                "Contrôle de l'accès aux données.",
                "Procédures régulières de test, d'analyse et d'évaluation.",
              ],
            },
          ],
        },
        {
          heading: 'Comment traitons-nous les données pour le compte de nos clients ?',
          blocks: [
            "Lorsque nous fournissons nos services, par exemple lorsqu'un agent Nubo IA répond aux appels et aux WhatsApp d'une entreprise cliente, nous traitons des données dont cette entreprise est responsable. Nous le faisons en tant que sous-traitant, conformément à l'article 28 du RGPD. Par conséquent :",
            {
              list: [
                "Nous ne traiterons les données que sur instruction documentée du responsable, y compris en ce qui concerne les transferts vers un pays tiers ou une organisation internationale, sauf si le droit de l'Union ou d'un État membre nous y oblige. Dans ce cas, nous en informerons le responsable avant le traitement, sauf si ce droit l'interdit pour des motifs importants d'intérêt public.",
                'Nous veillons à ce que les personnes autorisées à traiter les données se soient engagées à en respecter la confidentialité.',
                "Nous appliquons les mesures de sécurité de l'article 32 du RGPD : confidentialité, intégrité, disponibilité et résilience des systèmes ; rétablissement rapide de l'accès aux données après un incident ; vérification régulière de l'efficacité des mesures ; pseudonymisation et chiffrement le cas échéant.",
                "Nous respecterons les conditions des paragraphes 2 et 4 de l'article 28 du RGPD pour recruter un autre sous-traitant.",
                "Nous aiderons le responsable à répondre aux demandes d'exercice des droits du chapitre III du RGPD et à respecter les obligations de sécurité des articles 32 à 36.",
                'Au choix du responsable, nous supprimerons ou lui renverrons toutes les données à la fin du service et détruirons les copies existantes, sauf obligation légale de conservation.',
                "Nous mettrons à la disposition du responsable toutes les informations nécessaires pour démontrer le respect de l'article 28 du RGPD et permettrons la réalisation d'audits et d'inspections par lui-même ou par un auditeur mandaté.",
              ],
            },
          ],
        },
      ],
    },

    cookies: {
      title: 'Politique de cookies',
      description: `Ce que ${SITE_DOMAIN} enregistre dans votre navigateur et comment le supprimer.`,
      sections: [
        {
          heading: "Qu'est-ce qu'un cookie ?",
          blocks: [
            "Un cookie est un petit fragment de texte qu'un site web envoie à votre navigateur et qui est enregistré sur votre ordinateur ou votre téléphone. Lorsque vous revenez sur le site, le navigateur le lui renvoie, ce qui permet au site de se souvenir, par exemple, de vos préférences.",
          ],
        },
        {
          heading: 'Quels cookies ce site utilise-t-il ?',
          blocks: [
            'Un seul, propre et technique :',
            {
              table: {
                head: ['Nom', 'Type', 'Finalité', 'Durée'],
                rows: [
                  [
                    STORAGE.localeCookie,
                    'Propre, technique',
                    'Mémoriser la langue que vous avez choisie',
                    '1 an',
                  ],
                ],
              },
            },
            `Par ailleurs, si vous choisissez le thème clair ou sombre, le site l'enregistre dans le stockage de votre navigateur (${STORAGE.themeKey}). Ce n'est pas un cookie et cela ne quitte jamais votre appareil.`,
            "Nous n'utilisons ni cookies d'analyse, ni cookies publicitaires, ni cookies tiers.",
          ],
        },
        {
          heading: 'Consentement',
          blocks: [
            "Ces cookies servent uniquement à vous fournir le service que vous demandez, comme afficher le site dans votre langue ; ils sont donc exemptés de l'obligation de consentement (article 22.2 de la loi espagnole 34/2002, LSSI). C'est pourquoi ce site n'affiche pas de bandeau de cookies.",
            "Si nous ajoutons un jour d'autres cookies, nous mettrons à jour cette politique et, si nécessaire, nous vous demanderons votre consentement avant de les utiliser.",
          ],
        },
        {
          heading: 'Comment les supprimer ou les bloquer ?',
          blocks: [
            "Vous pouvez supprimer ou bloquer les cookies de n'importe quel site depuis les paramètres de votre navigateur. Si vous supprimez celui-ci, le site choisira de nouveau la langue en fonction de votre navigateur.",
            { links: BROWSER_HELP },
          ],
        },
      ],
    },
  },
};
