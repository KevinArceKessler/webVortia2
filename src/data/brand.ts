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
    tagline: 'Tu empresa siempre disponible, sin perder el toque humano.',
    description:
      'Asistente omnicanal con inteligencia artificial que responde consultas de tus clientes en segundos, 24/7. WhatsApp, redes sociales y webchat unificados en un solo panel.',
    features: [
      'Respuestas instantáneas 24/7',
      'WhatsApp, Instagram y Webchat',
      'Panel de monitoreo en tiempo real',
      'Implementación en 4 semanas',
      'Dashboard con indicadores',
    ],
    demoUrl: 'https://wa.me/+5493564224864?text=Hola%21%20Quiero%20saber%20sobre%20la%20inmobiliaria%20y%20sus%20servicios',
    color: '#B7F38A',
    anchor: '#inbox',
  },
  {
    id: 'sender',
    name: 'Vortia Sender',
    emoji: '📨',
    tagline: 'Llegá a miles de clientes con un solo clic.',
    description:
      'Plataforma de envío y automatización masiva de mensajes por WhatsApp. Campañas, secuencias y comunicaciones que escalan sin perder el toque personal de tu marca.',
    features: [
      'Envío masivo por WhatsApp',
      'Automatización de secuencias',
      'Segmentación de audiencias',
      'Reportes de apertura y respuesta',
      'Integración con tus listas de contactos',
    ],
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
      'Integra Vortia Inbox con un CRM potente pensado para pymes y emprendimientos. Llevá el seguimiento de clientes, proyecciones y actividad diaria sin perder ningún objetivo de vista.',
    features: [
      'CRM integrado con Inbox',
      'Gestión de clientes y oportunidades',
      'Seguimiento de proyecciones',
      'Recordatorios y tareas automáticas',
      'Reportes de actividad diaria',
    ],
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
      'Nos sumergimos en tus procesos, conocemos a fondo tu negocio, identificamos actores y datos clave, y construimos software que resuelve problemas reales. Desde el análisis hasta el deploy.',
    features: [
      'Relevamiento y análisis de procesos',
      'Propuesta de mejoras e informatización',
      'Desarrollo a medida y personalizado',
      'Automatización de procesos internos',
      'Soporte y acompañamiento continuo',
    ],
    demoUrl: BRAND.whatsapp,
    color: '#B7F38A',
    anchor: '#custom',
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
    industry: 'Entretenimiento',
    logo: '/clientes/hipodromo-boero.png',
    testimonial: '',
    caseStudy: null,
  },
  {
    id: 'hipodromo-flores',
    name: 'Hipódromo Las Flores',
    industry: 'Entretenimiento',
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
    title: 'Precisión',
    description:
      'La velocidad sin exactitud es solo ruido. Nos enfocamos en la calidad de la respuesta y la optimización de procesos para garantizar resultados tangibles y un crecimiento estratégico.',
  },
  {
    title: 'Control',
    description:
      'Creemos en la tecnología de "caja abierta". Otorgamos al cliente soberanía total sobre sus datos y conversaciones mediante monitoreo en tiempo real y transparencia absoluta.',
  },
]