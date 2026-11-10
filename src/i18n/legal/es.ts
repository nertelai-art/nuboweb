import { BROWSER_HELP, H, SITE_DOMAIN, STORAGE } from './shared';
import type { LegalDictionary } from './types';

/**
 * Textos legals en castellà, adaptats dels de nubotelecom.com (avís legal,
 * privacitat i galetes, mirats el 10/11/2026) a aquesta web: sense formulari,
 * amb el servei d'agents i amb una sola galeta tècnica.
 */
export const es: LegalDictionary = {
  nav: {
    label: 'Información legal',
    legal: 'Aviso legal',
    privacy: 'Privacidad',
    cookies: 'Cookies',
  },
  updated: 'Última actualización: 10 de noviembre de 2026',
  holderLabels: {
    name: 'Titular',
    nif: 'NIF',
    address: 'Dirección',
    phone: 'Teléfono',
    email: 'Correo electrónico',
    registry: 'Registro',
  },
  registry: (r) =>
    `Inscrita en el Registro Mercantil de ${r.city}, sección ${r.section}.ª, hoja ${r.sheet}, folio ${r.folio}, tomo ${r.volume}`,
  docs: {
    legal: {
      title: 'Aviso legal',
      description: `Titular, condiciones de uso y propiedad intelectual de ${SITE_DOMAIN}.`,
      sections: [
        { blocks: [`La titular de este sitio web, ${SITE_DOMAIN}, es:`, { holder: true }] },
        {
          heading: 'Condiciones de uso',
          blocks: [
            'El uso de esta web implica la aceptación plena de los términos y condiciones del presente aviso legal. Toda persona usuaria de la web, independientemente de la jurisdicción territorial desde la que acceda, acepta el cumplimiento y respeto de estas cláusulas.',
          ],
        },
        {
          heading: 'Propiedad intelectual e industrial',
          blocks: [
            `La totalidad del contenido de este sitio web, ya sean textos, imágenes, sonidos, marcas, logotipos u otros elementos, así como su estructura, diseño, combinaciones de colores o forma de presentación, están protegidos por derechos de propiedad industrial e intelectual que el usuario debe respetar. No es lícita su transformación o alteración, comunicación pública o cualquier otra forma de explotación por cualquier procedimiento sin la autorización expresa de ${H.name}.`,
          ],
        },
        {
          heading: 'Responsabilidad sobre los contenidos',
          blocks: [
            `Aunque ${H.name} actúa con la máxima diligencia posible, puede darse el caso de que algún dato o información no esté del todo actualizado en el momento en que el usuario lo consulte. Por ello, las informaciones que se presentan en esta web tienen una función orientativa y no obligan a ${H.name}.`,
            'Las conversaciones del simulador de esta web son ejemplos con negocios inventados. Sirven para mostrar cómo funciona el producto y no corresponden a clientes reales.',
            `${H.name} no será responsable de la información que se pueda obtener a través de enlaces incluidos en su web.`,
            `${H.name} se reserva la facultad de realizar, en cualquier momento y sin necesidad de preaviso, modificaciones o actualizaciones de la información y de cualquiera de los elementos que integran el diseño y la configuración de la web.`,
          ],
        },
        {
          heading: 'Ley aplicable y jurisdicción',
          blocks: [
            'Los posibles conflictos relativos a esta web se regirán exclusivamente por la legislación española, siendo competentes los Juzgados y Tribunales españoles para conocer de cuantas cuestiones se susciten sobre ella. El usuario, por virtud de su aceptación, renuncia expresamente a cualquier fuero que por aplicación de la Ley de Enjuiciamiento Civil vigente pudiera corresponderle.',
          ],
        },
      ],
    },

    privacy: {
      title: 'Política de privacidad',
      description: `Cómo trata ${H.name} los datos personales relacionados con ${SITE_DOMAIN} y con Nubo IA.`,
      sections: [
        {
          blocks: [
            `${H.name} se compromete a proteger la privacidad de las personas que acceden a esta web y a cualquiera de sus servicios. Esta política no se aplica a las webs o redes sociales de terceros a las que se pueda llegar mediante enlaces; ${H.name} no controla su contenido ni sus políticas de privacidad.`,
            'En cumplimiento del Reglamento (UE) 2016/679 (RGPD) y de la Ley Orgánica 3/2018, de protección de datos personales y garantía de los derechos digitales (LOPDGDD), le ofrecemos la siguiente información sobre el tratamiento de sus datos personales.',
          ],
        },
        { heading: '¿Quién es el responsable del tratamiento?', blocks: [{ holder: true }] },
        {
          heading: '¿Qué datos recoge esta web?',
          blocks: [
            'Esta web no tiene formularios ni registro de usuarios: navegar por ella no le pide ningún dato personal.',
            'El simulador de llamadas y de WhatsApp funciona dentro de su navegador. No usa el micrófono y no envía a ningún servidor lo que ocurre en él.',
            'Como cualquier web, el servidor que la aloja registra datos técnicos de las visitas, como la dirección IP o el navegador, para que funcione y para protegerla frente a abusos.',
          ],
        },
        {
          heading: '¿Con qué finalidad tratamos sus datos?',
          blocks: [
            {
              list: [
                'Atender las consultas que nos haga por teléfono, correo electrónico o WhatsApp.',
                'Gestionar la contratación y la prestación de nuestros servicios, incluidos los agentes de voz y WhatsApp con inteligencia artificial.',
                'Si nos da su consentimiento, enviarle información sobre nuestras actividades, productos o servicios.',
                'Mantener la web segura y en funcionamiento.',
              ],
            },
          ],
        },
        {
          heading: '¿Cuánto tiempo conservaremos sus datos?',
          blocks: [
            'Los datos personales se conservarán mientras sea usuario de nuestros servicios o quiera recibir información y, después, durante los plazos establecidos para cumplir con nuestras obligaciones legales: 6 años para la documentación contable a efectos mercantiles (art. 30 del Código de Comercio) y 4 años a efectos fiscales (arts. 66 a 70 de la Ley General Tributaria).',
          ],
        },
        {
          heading: '¿Cuál es la legitimación para el tratamiento?',
          blocks: [
            'La ejecución del contrato de servicios, los consentimientos que nos da y, para los datos técnicos de las visitas, el interés legítimo en mantener la web segura y en funcionamiento.',
            'Si quien nos facilita datos es menor de 16 años, será imprescindible el consentimiento de su padre, madre, tutor o representante legal. Si no es así, el representante legal del menor nos lo comunicará en cuanto lo sepa.',
          ],
        },
        {
          heading: '¿A qué destinatarios se comunicarán sus datos?',
          blocks: [
            'Los datos no se comunicarán a terceros, salvo que lo exija una ley o sea necesario para cumplir con la finalidad del tratamiento.',
            'Para alojar la web y prestar el servicio utilizamos proveedores tecnológicos que actúan como encargados del tratamiento, con las garantías que exige el RGPD.',
          ],
        },
        {
          heading: '¿Cuáles son sus derechos?',
          blocks: [
            {
              list: [
                'Obtener confirmación sobre si estamos tratando sus datos personales.',
                'Acceder a sus datos, solicitar la rectificación de los inexactos o pedir su supresión cuando, entre otros motivos, ya no sean necesarios para los fines para los que se recogieron.',
                'Solicitar, en determinadas circunstancias, la limitación del tratamiento. En ese caso solo los conservaremos para el ejercicio o la defensa de reclamaciones.',
                'Oponerse al tratamiento por motivos relacionados con su situación particular. Dejaremos de tratar los datos, salvo por motivos legítimos imperiosos o para el ejercicio o la defensa de posibles reclamaciones.',
                'La portabilidad de sus datos.',
                'No ser objeto de decisiones basadas únicamente en el tratamiento automatizado, incluida la elaboración de perfiles, que produzcan efectos jurídicos sobre usted o le afecten significativamente de modo similar.',
                'Presentar una reclamación ante la autoridad de control; en España, la Agencia Española de Protección de Datos (aepd.es).',
              ],
            },
          ],
        },
        {
          heading: '¿Cómo puede ejercerlos?',
          blocks: [
            `Enviando un escrito, con una copia de un documento que le identifique, a ${H.email} o a ${H.address}.`,
          ],
        },
        {
          heading: '¿Cómo hemos obtenido sus datos y qué datos tratamos?',
          blocks: [
            'Los datos que tratamos proceden de la propia persona interesada, que garantiza que son ciertos y se compromete a comunicarnos cualquier cambio. Son datos identificativos y de contacto (direcciones postales o electrónicas y teléfono), limitados a lo necesario para prestar nuestros servicios y gestionar nuestra actividad.',
          ],
        },
        {
          heading: '¿Usamos cookies?',
          blocks: [
            `Solo una cookie técnica, para recordar el idioma que ha elegido. No usamos cookies de análisis ni de publicidad. Encontrará el detalle en la política de cookies.`,
          ],
        },
        {
          heading: '¿Qué medidas de seguridad aplicamos?',
          blocks: [
            'Aplicamos las medidas del artículo 32 del RGPD para garantizar un nivel de seguridad adecuado al riesgo, con mecanismos que aseguran la confidencialidad, integridad, disponibilidad y resiliencia de los sistemas. Entre otras:',
            {
              list: [
                'Información de las políticas de tratamiento de datos al personal.',
                'Copias de seguridad periódicas.',
                'Control de acceso a los datos.',
                'Procesos regulares de verificación, evaluación y valoración.',
              ],
            },
          ],
        },
        {
          heading: '¿Cómo tratamos los datos por cuenta de nuestros clientes?',
          blocks: [
            'Cuando prestamos nuestros servicios, por ejemplo cuando un agente de Nubo IA atiende las llamadas y los WhatsApp de una empresa cliente, tratamos datos de los que esa empresa es responsable. Lo hacemos como encargados del tratamiento, según el artículo 28 del RGPD. Por tanto:',
            {
              list: [
                'Trataremos los datos únicamente siguiendo instrucciones documentadas del responsable, también en relación con las transferencias a terceros países u organizaciones internacionales, salvo que una norma de la Unión o de los Estados miembros nos obligue. En ese caso, informaremos al responsable antes del tratamiento, salvo que esa norma lo prohíba por razones importantes de interés público.',
                'Garantizamos que las personas autorizadas para tratar los datos se han comprometido a respetar su confidencialidad.',
                'Aplicamos las medidas de seguridad del artículo 32 del RGPD: confidencialidad, integridad, disponibilidad y resiliencia de los sistemas; restauración rápida del acceso a los datos tras un incidente; verificación regular de la eficacia de las medidas, y seudonimización y cifrado cuando proceda.',
                'Respetaremos las condiciones de los apartados 2 y 4 del artículo 28 del RGPD para recurrir a otro encargado del tratamiento.',
                'Asistiremos al responsable para que pueda responder a las solicitudes de ejercicio de derechos del capítulo III del RGPD y cumplir las obligaciones de seguridad de los artículos 32 a 36.',
                'A elección del responsable, suprimiremos o devolveremos todos los datos al terminar el servicio y suprimiremos las copias, salvo que la ley obligue a conservarlos.',
                'Pondremos a disposición del responsable la información necesaria para demostrar el cumplimiento del artículo 28 del RGPD y permitiremos auditorías e inspecciones por su parte o por un auditor autorizado.',
              ],
            },
          ],
        },
      ],
    },

    cookies: {
      title: 'Política de cookies',
      description: `Qué guarda ${SITE_DOMAIN} en su navegador y cómo borrarlo.`,
      sections: [
        {
          heading: '¿Qué es una cookie?',
          blocks: [
            'Una cookie es un pequeño fragmento de texto que una web envía al navegador y que se guarda en su ordenador o móvil. Cuando vuelve a visitar la web, el navegador la devuelve, y así la web puede recordar, por ejemplo, sus preferencias.',
          ],
        },
        {
          heading: '¿Qué cookies usa esta web?',
          blocks: [
            'Una sola, propia y técnica:',
            {
              table: {
                head: ['Nombre', 'Tipo', 'Para qué sirve', 'Duración'],
                rows: [
                  [
                    STORAGE.localeCookie,
                    'Propia, técnica',
                    'Recordar el idioma que ha elegido',
                    '1 año',
                  ],
                ],
              },
            },
            `Además, si elige el tema claro u oscuro, la web lo guarda en el almacenamiento de su navegador (${STORAGE.themeKey}). No es una cookie y no sale nunca de su dispositivo.`,
            'No usamos cookies de análisis, de publicidad ni de terceros.',
          ],
        },
        {
          heading: 'Consentimiento',
          blocks: [
            'Estas cookies solo sirven para darle el servicio que pide, como ver la web en su idioma, por lo que están exentas del deber de consentimiento (artículo 22.2 de la Ley 34/2002, LSSI). Por eso esta web no muestra un aviso de cookies.',
            'Si un día añadimos otras cookies, actualizaremos esta política y, cuando haga falta, le pediremos su consentimiento antes de usarlas.',
          ],
        },
        {
          heading: '¿Cómo puede borrarlas o bloquearlas?',
          blocks: [
            'Puede borrar o bloquear las cookies de cualquier web desde la configuración de su navegador. Si borra esta, la web volverá a elegir el idioma según su navegador.',
            { links: BROWSER_HELP },
          ],
        },
      ],
    },
  },
};
