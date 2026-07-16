// ============================================
// DATOS CENTRALES DE VORTIA
// Editá este archivo para actualizar contenido
// en toda la web de una sola vez.
// ============================================

export const BRAND = {
  name: 'Vortia',
  legalName: 'Vortia S.R.L.',
  tagline: 'El aliado tecnológico de tu empresa',
  description:
    'Desarrollamos software con propósito. Potenciamos a las personas de tu empresa con tecnología e inteligencia artificial.',
  url: 'https://www.vortia.com.ar',
  email: 'comercial@vortia.com.ar',
  phone: '+5493564640814',
  whatsapp: 'https://wa.me/5493564640814',
  address: '25 de Mayo 2391, San Francisco, Córdoba, Argentina',
  social: {
    instagram: 'https://www.instagram.com/vortiaargentina/',
    facebook: 'https://www.facebook.com/profile.php?id=61574632536701',
    linkedin: 'https://www.linkedin.com/company/vort-ia-srl/',
  },
}

export const PRODUCTS = [
  {
    id: 'inbox',
    name: 'Vortia Inbox',
    emoji: '💬',
    tagline: 'Tu empresa siempre disponible, en todos los canales.',
    description:
      'Vortia Inbox es el agente virtual que responde las consultas de tus clientes 24/7, en lenguaje natural y por todos los canales que usás. Se entrena con la información de tu empresa, detecta intenciones, clasifica conversaciones y acompaña al usuario de principio a fin.',
    shortDescription:
      'Asistente omnicanal con IA que responde consultas 24/7. WhatsApp, redes sociales y webchat unificados en un solo panel.',
    features: [
      'Respuestas 24/7 en lenguaje natural',
      'Multicanal: WhatsApp, Instagram y Webchat',
      'Detección de intenciones y clasificación de conversaciones',
      'Panel de monitoreo en tiempo real',
      'Dashboard con métricas e indicadores',
      'Intervención en vivo desde el panel',
      'Implementación en 4 semanas',
    ],
    cta: '¿Querés verlo en acción? Agendá tu demo gratis.',
    demoUrl: 'https://wa.me/+5493564224864?text=Hola%21%20Quiero%20saber%20sobre%20la%20inmobiliaria%20y%20sus%20servicios',
    color: '#B7F38A',
    anchor: '#inbox',
  },
  {
    id: 'sender',
    name: 'Vortia Sender',
    emoji: '📨',
    tagline: 'Enviá miles de mensajes. Automatizá el seguimiento.',
    description:
      'Vortia Sender automatiza el envío masivo de mensajes por WhatsApp. Creá plantillas, armá listas de destinatarios, programá envíos y seguí el ciclo de vida de cada mensaje: enviado, recibido, leído o con error.',
    shortDescription:
      'Plataforma de envío masivo por WhatsApp. Campañas, secuencias y comunicaciones que escalan sin perder el toque personal de tu marca.',
    features: [
      'Envío masivo por WhatsApp',
      'Plantillas de mensajes personalizables',
      'Listas y segmentación de destinatarios',
      'Envíos programados y automáticos',
      'Seguimiento de estado: enviado / recibido / leído / error',
      'Dashboard de métricas',
      'Integración con Vortia Inbox',
    ],
    cta: '¿Querés automatizar tus comunicaciones? Hablemos.',
    demoUrl: BRAND.whatsapp,
    color: '#5BA8D4',
    anchor: '#sender',
  },
  {
    id: 'boxium',
    name: 'Vortia Boxium',
    emoji: '🧩',
    tagline: 'CRM + Inbox: todo tu negocio en un solo lugar.',
    description:
      'Vortia Boxium integra el poder de Vortia Inbox con un CRM pensado para pymes y emprendimientos. Gestioná clientes, oportunidades y proyecciones — e interactuá con tu CRM de forma conversacional a través del asistente.',
    shortDescription:
      'CRM integrado con Vortia Inbox para pymes. Seguimiento de clientes, proyecciones y actividad diaria sin perder ningún objetivo de vista.',
    features: [
      'CRM para pymes y emprendimientos',
      'Gestión de clientes y oportunidades',
      'Seguimiento de proyecciones de venta',
      'Recordatorios y tareas automáticas',
      'Reportes de actividad diaria',
      'Integración total con Vortia Inbox',
      'Interacción conversacional con el CRM',
    ],
    cta: '¿Querés gestionar tu negocio de forma más inteligente? Agendá una demo.',
    demoUrl: BRAND.whatsapp,
    color: '#B7F38A',
    anchor: '#boxium',
  },
  {
    id: 'custom',
    name: 'Desarrollo a medida',
    emoji: '⚙️',
    tagline: 'Software que se adapta a tu empresa, no al revés.',
    description:
      'Nos sumergimos en tus procesos, conocemos a fondo tu negocio, identificamos actores y datos clave, y construimos software que resuelve problemas reales. Desde el análisis hasta el deploy, y con soporte continuo.',
    shortDescription:
      'Software personalizado para tu empresa. Relevamiento, desarrollo a medida, automatización y acompañamiento desde el día uno.',
    features: [
      'Relevamiento y análisis de procesos',
      'Propuesta de mejoras e informatización',
      'Desarrollo a medida y personalizado',
      'Automatización de procesos internos',
      'Integración con sistemas existentes',
      'Deploy y puesta en marcha',
      'Soporte y acompañamiento continuo',
    ],
    cta: '¿Tenés un problema que ninguna herramienta resuelve? Contanos.',
    demoUrl: BRAND.whatsapp,
    color: '#B7F38A',
    anchor: '#custom',
  },
]

export const TEAM = [
  {
    initials: 'RA',
    name: 'Román Arce Kessler',
    role: 'Co-Fundador · Desarrollo',
    linkedin: 'https://www.linkedin.com/in/roman-arce-kessler/',
  },
  {
    initials: 'GA',
    name: 'Gastón Arce Kessler',
    role: 'Co-Fundador · Estrategia comercial',
    linkedin: 'https://www.linkedin.com/in/gaston-arce-kessler-2020a3104/',
  },
  {
    initials: 'KA',
    name: 'Kevin Arce Kessler',
    role: 'Co-Fundador · Coordinación técnica',
    linkedin: 'https://www.linkedin.com/in/kevin-arce-kessler/',
  },
]

export const CLIENTS = [
  {
    id: 'scotta',
    name: 'Scotta y Asociados',
    industry: 'Productores de Seguros',
    logo: '/clientes/scotta.png',
    testimonial: '',
    caseStudy: null,
  },
  {
    id: 'fasta',
    name: 'FASTA',
    industry: 'Educación Superior',
    logo: '/clientes/fasta.png',
    testimonial: '',
    caseStudy: null,
  },
  {
    id: 'metodos',
    name: 'Métodos Disruptivos',
    industry: 'Recursos Humanos',
    logo: '/clientes/metodos.png',
    testimonial: '',
    caseStudy: null,
  },
  {
    id: 'giletta',
    name: 'Estudio Giletta y Asociados',
    industry: 'Inmobiliaria',
    logo: '/clientes/giletta.png',
    testimonial: '',
    caseStudy: null,
  },
  {
    id: 'jappert',
    name: 'Jappert Bienes Raíces',
    industry: 'Inmobiliaria',
    logo: '/clientes/jappert.png',
    testimonial: '',
    caseStudy: null,
  },
  {
    id: 'region',
    name: 'Región Centro',
    industry: 'Distribuidora de Alimentos y Bebidas',
    logo: '/clientes/region.png',
    testimonial: '',
    caseStudy: null,
  },
  {
    id: 'hipodromo-boero',
    name: 'Hipódromo Carlos Boero Romano',
    industry: 'Actividades deportivas',
    logo: '/clientes/hipodromo-boero.png',
    testimonial: '',
    caseStudy: null,
  },
  {
    id: 'hipodromo-flores',
    name: 'Hipódromo Las Flores',
    industry: 'Actividades deportivas',
    logo: '/clientes/hipodromo-flores.png',
    testimonial: '',
    caseStudy: null,
  },
]

export const TECHNOLOGIES = [
  { name: 'React', logo: '/tech/react.svg' },
  { name: 'Node.js', logo: '/tech/nodejs.svg' },
  { name: 'TypeScript', logo: '/tech/typescript.svg' },
  { name: 'OpenAI', logo: '/tech/openai.svg' },
  { name: 'WhatsApp API', logo: '/tech/whatsapp.svg' },
  { name: 'PostgreSQL', logo: '/tech/postgresql.svg' },
  { name: 'MongoDB', logo: '/tech/mongodb.svg' },
  { name: 'Docker', logo: '/tech/docker.svg' },
  { name: 'Vercel', logo: '/tech/vercel.svg' },
  { name: 'Nuxt.js', logo: '/tech/nuxt.svg' },
]

export const VALUES = [
  {
    title: 'Humanidad',
    description:
      'Entendemos la IA como una herramienta para potenciar a las personas, no para reemplazarlas. Cada desarrollo está diseñado para resolver desafíos reales con una visión ética y cercana.',
  },
  {
    title: 'Alianza real',
    description:
      'No somos proveedores. Nos metemos de lleno en tu negocio, entendemos tus procesos y construimos junto a vos — desde el primer día hasta después del deploy.',
  },
  {
    title: 'Control total',
    description:
      'Creemos en la tecnología de caja abierta. Tus datos y conversaciones son tuyas, siempre. Transparencia absoluta en cada etapa.',
  },
]
