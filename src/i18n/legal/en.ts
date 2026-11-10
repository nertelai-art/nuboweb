import { BROWSER_HELP, H, SITE_DOMAIN, STORAGE } from './shared';
import type { LegalDictionary } from './types';

/** Textos legals en anglès. Traducció dels castellans (`es.ts`), que en són la font. */
export const en: LegalDictionary = {
  nav: {
    label: 'Legal information',
    legal: 'Legal notice',
    privacy: 'Privacy',
    cookies: 'Cookies',
  },
  updated: 'Last updated: 10 November 2026',
  holderLabels: {
    name: 'Owner',
    nif: 'Tax ID (NIF)',
    address: 'Address',
    phone: 'Phone',
    email: 'Email',
    registry: 'Registration',
  },
  registry: (r) =>
    `Registered in the Mercantile Registry of ${r.city}, section ${r.section}, sheet ${r.sheet}, folio ${r.folio}, volume ${r.volume}`,
  docs: {
    legal: {
      title: 'Legal notice',
      description: `Owner, terms of use and intellectual property of ${SITE_DOMAIN}.`,
      sections: [
        { blocks: [`This website, ${SITE_DOMAIN}, is owned by:`, { holder: true }] },
        {
          heading: 'Terms of use',
          blocks: [
            'Using this website means fully accepting the terms and conditions of this legal notice. Every user of the website, regardless of the territorial jurisdiction from which they access it, agrees to comply with and respect these clauses.',
          ],
        },
        {
          heading: 'Intellectual and industrial property',
          blocks: [
            `All content on this website, including texts, images, sounds, trademarks, logos and other elements, as well as its structure, design, colour combinations and presentation, is protected by intellectual and industrial property rights that users must respect. Transforming, altering, publicly communicating or otherwise exploiting it by any means without the express permission of ${H.name} is not permitted.`,
          ],
        },
        {
          heading: 'Responsibility for content',
          blocks: [
            `Although ${H.name} acts with the utmost diligence, some data or information may not be fully up to date when a user consults it. The information on this website is therefore for guidance only and is not binding on ${H.name}.`,
            'The conversations in the simulator on this website are examples with made-up businesses. They show how the product works and do not belong to real customers.',
            `${H.name} is not responsible for information obtained through links included on its website.`,
            `${H.name} reserves the right to modify or update the information and any element of the design and configuration of the website at any time and without notice.`,
          ],
        },
        {
          heading: 'Governing law and jurisdiction',
          blocks: [
            'Any disputes relating to this website shall be governed exclusively by Spanish law, and the Spanish courts and tribunals shall have jurisdiction. By accepting these terms, users expressly waive any other jurisdiction that may correspond to them under the Spanish Civil Procedure Act.',
          ],
        },
      ],
    },

    privacy: {
      title: 'Privacy policy',
      description: `How ${H.name} handles personal data related to ${SITE_DOMAIN} and Nubo IA.`,
      sections: [
        {
          blocks: [
            `${H.name} is committed to protecting the privacy of people who visit this website and use any of its services. This policy does not apply to third-party websites or social networks reached through links; ${H.name} does not control their content or privacy policies.`,
            'In accordance with Regulation (EU) 2016/679 (GDPR) and Spanish Organic Law 3/2018 on the protection of personal data and the guarantee of digital rights (LOPDGDD), we provide the following information about how your personal data is processed.',
          ],
        },
        { heading: 'Who is the data controller?', blocks: [{ holder: true }] },
        {
          heading: 'What data does this website collect?',
          blocks: [
            'This website has no forms and no user registration: browsing it does not ask you for any personal data.',
            'The call and WhatsApp simulator runs inside your browser. It does not use your microphone and does not send what happens in it to any server.',
            'Like any website, the server that hosts it records technical data about visits, such as the IP address or browser, so that it works and to protect it against abuse.',
          ],
        },
        {
          heading: 'Why do we process your data?',
          blocks: [
            {
              list: [
                'To answer the enquiries you send us by phone, email or WhatsApp.',
                'To manage the contracting and provision of our services, including AI voice and WhatsApp agents.',
                'If you consent, to send you information about our activities, products or services.',
                'To keep the website secure and running.',
              ],
            },
          ],
        },
        {
          heading: 'How long do we keep your data?',
          blocks: [
            'Personal data is kept while you use our services or wish to receive information, and afterwards for the periods required to meet our legal obligations: 6 years for accounting records for commercial purposes (art. 30 of the Spanish Commercial Code) and 4 years for tax purposes (arts. 66 to 70 of the Spanish General Tax Act).',
          ],
        },
        {
          heading: 'What is the legal basis for processing?',
          blocks: [
            'Performance of the services contract, the consent you give us and, for technical data about visits, our legitimate interest in keeping the website secure and running.',
            'If the person providing data is under 16, the consent of their parent, guardian or legal representative is required. If this is not the case, the legal representative will inform us as soon as they become aware of it.',
          ],
        },
        {
          heading: 'Who will your data be shared with?',
          blocks: [
            'Data will not be shared with third parties unless required by law or necessary for the purpose of the processing.',
            'To host the website and provide the service we use technology providers that act as data processors, with the safeguards required by the GDPR.',
          ],
        },
        {
          heading: 'What are your rights?',
          blocks: [
            {
              list: [
                'To obtain confirmation of whether we are processing your personal data.',
                'To access your data, request the correction of inaccurate data or ask for its erasure when, among other reasons, it is no longer needed for the purposes for which it was collected.',
                'To request, in certain circumstances, the restriction of processing. In that case we will only keep the data for the exercise or defence of claims.',
                'To object to processing on grounds relating to your particular situation. We will stop processing the data, except for compelling legitimate grounds or for the exercise or defence of possible claims.',
                'To data portability.',
                'Not to be subject to decisions based solely on automated processing, including profiling, which produce legal effects concerning you or similarly significantly affect you.',
                'To lodge a complaint with the supervisory authority; in Spain, the Spanish Data Protection Agency (aepd.es).',
              ],
            },
          ],
        },
        {
          heading: 'How can you exercise them?',
          blocks: [
            `By sending a written request, with a copy of an identity document, to ${H.email} or to ${H.address}.`,
          ],
        },
        {
          heading: 'Where does your data come from and what data do we process?',
          blocks: [
            'The data we process comes from the data subject, who guarantees that it is accurate and undertakes to tell us of any changes. It is identification and contact data (postal or email addresses and phone number), limited to what is needed to provide our services and run our business.',
          ],
        },
        {
          heading: 'Do we use cookies?',
          blocks: [
            'Only one technical cookie, to remember the language you have chosen. We do not use analytics or advertising cookies. You will find the details in the cookie policy.',
          ],
        },
        {
          heading: 'What security measures do we apply?',
          blocks: [
            'We apply the measures in Article 32 of the GDPR to ensure a level of security appropriate to the risk, with mechanisms that ensure the confidentiality, integrity, availability and resilience of our systems. These include:',
            {
              list: [
                'Informing staff of data processing policies.',
                'Regular backups.',
                'Access control to data.',
                'Regular testing, assessment and evaluation processes.',
              ],
            },
          ],
        },
        {
          heading: 'How do we process data on behalf of our customers?',
          blocks: [
            "When we provide our services, for example when a Nubo IA agent answers a customer company's calls and WhatsApp messages, we process data for which that company is the controller. We do so as data processors under Article 28 of the GDPR. Therefore:",
            {
              list: [
                'We will process the data only on documented instructions from the controller, including with regard to transfers to third countries or international organisations, unless required to do so by Union or Member State law. In that case, we will inform the controller before processing, unless that law prohibits it on important grounds of public interest.',
                'We ensure that persons authorised to process the data have committed themselves to confidentiality.',
                'We apply the security measures in Article 32 of the GDPR: confidentiality, integrity, availability and resilience of systems; prompt restoration of access to data after an incident; regular testing of the effectiveness of the measures; and pseudonymisation and encryption where appropriate.',
                'We will respect the conditions in paragraphs 2 and 4 of Article 28 of the GDPR for engaging another processor.',
                'We will assist the controller in responding to requests to exercise the rights in Chapter III of the GDPR and in meeting the security obligations in Articles 32 to 36.',
                'At the choice of the controller, we will delete or return all data at the end of the service and delete existing copies, unless the law requires us to keep it.',
                'We will make available to the controller all information needed to demonstrate compliance with Article 28 of the GDPR and allow for audits and inspections by the controller or an authorised auditor.',
              ],
            },
          ],
        },
      ],
    },

    cookies: {
      title: 'Cookie policy',
      description: `What ${SITE_DOMAIN} stores in your browser and how to delete it.`,
      sections: [
        {
          heading: 'What is a cookie?',
          blocks: [
            'A cookie is a small piece of text that a website sends to your browser and that is stored on your computer or phone. When you visit the website again, the browser sends it back, so the website can remember things such as your preferences.',
          ],
        },
        {
          heading: 'Which cookies does this website use?',
          blocks: [
            'Just one, first-party and technical:',
            {
              table: {
                head: ['Name', 'Type', 'Purpose', 'Duration'],
                rows: [
                  [
                    STORAGE.localeCookie,
                    'First-party, technical',
                    'Remember the language you chose',
                    '1 year',
                  ],
                ],
              },
            },
            `In addition, if you choose the light or dark theme, the website saves it in your browser's storage (${STORAGE.themeKey}). It is not a cookie and never leaves your device.`,
            'We do not use analytics, advertising or third-party cookies.',
          ],
        },
        {
          heading: 'Consent',
          blocks: [
            'These cookies only provide the service you ask for, such as seeing the website in your language, so they are exempt from the consent requirement (Article 22.2 of Spanish Law 34/2002, LSSI). That is why this website does not show a cookie banner.',
            'If we ever add other cookies, we will update this policy and, where necessary, ask for your consent before using them.',
          ],
        },
        {
          heading: 'How can you delete or block them?',
          blocks: [
            "You can delete or block cookies from any website in your browser's settings. If you delete this one, the website will choose the language based on your browser again.",
            { links: BROWSER_HELP },
          ],
        },
      ],
    },
  },
};
