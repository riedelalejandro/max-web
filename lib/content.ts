import { MapPin, BedDouble, Wind, MessageCircle, Wallet } from 'lucide-react'

export const siteConfig = {
  business: {
    name: 'Max',
    tagline: 'Tu base en el Chaltén, a un paso del Fitz Roy',
    description:
      'Hospedaje en el centro de El Chaltén, a pasos de los senderos al Fitz Roy y Cerro Torre, con todo lo que un trekker necesita.',
    address: 'Riquelme 142, Z9301 El Chaltén, Santa Cruz, Argentina',
    phone: '0221 318-3455',
    // TODO: email de contacto
    email: null,
    // TODO: Instagram
    instagram: null,
    // TODO: Facebook
    facebook: null,
    // TODO: WhatsApp en formato 549XXXXXXXXXX
    whatsapp: null,
  },

  hero: {
    headline: 'Tu base en el Chaltén, a un paso del Fitz Roy',
    subheadline:
      'Alojamiento simple y confiable en pleno centro de El Chaltén. Llegás, dejás el equipaje y salís a la montaña.',
    ctaPrimary: { label: 'Reservar ahora', href: '/contacto' },
    ctaSecondary: { label: 'Ver el alojamiento ↓', href: '#habitaciones' },
    socialProof: '57 huéspedes · 4.1★ en Google',
    heroImage: '/images/hero.jpg',
  },

  problem: {
    title: '¿Buscás alojamiento en El Chaltén y no sabés qué esperar?',
    pains: [
      {
        icon: 'Clock',
        text: 'Llegás después de horas de viaje y necesitás check-in fácil, sin trámites complicados',
      },
      {
        icon: 'DollarSign',
        text: 'No querés pagar precios de lodge de lujo cuando solo necesitás una cama limpia y descanso',
      },
      {
        icon: 'Calendar',
        text: 'En temporada alta (diciembre–marzo) la disponibilidad se agota y no sabés si vas a conseguir lugar',
      },
      {
        icon: 'MapPin',
        text: 'No sabés si el alojamiento queda cerca de los accesos a los senderos del Fitz Roy',
      },
      {
        icon: 'Info',
        text: 'No encontrás información clara de servicios — WiFi, desayuno, cocina — antes de reservar',
      },
    ],
  },

  solution: {
    title: 'Todo lo que un trekker necesita. Nada que sobre.',
    features: [
      {
        icon: MapPin,
        name: 'Ubicación central',
        benefit:
          'Salís caminando a los senderos; a minutos de restaurantes, almacenes y la terminal de buses',
      },
      {
        icon: BedDouble,
        name: 'Habitaciones limpias y confortables',
        benefit:
          'Descansás bien para enfrentar jornadas de trekking exigentes',
      },
      {
        icon: Wind,
        name: 'Ambiente tranquilo',
        benefit:
          'Te recuperás sin ruido después de días intensos en la montaña',
      },
      {
        icon: MessageCircle,
        name: 'Atención personalizada',
        benefit:
          'Conseguís recomendaciones reales sobre senderos, clima y equipamiento directamente de quienes conocen el lugar',
      },
      {
        icon: Wallet,
        name: 'Precio accesible para viajeros',
        benefit:
          'Podés quedarte más días y gastar tu presupuesto en la experiencia, no en el alojamiento',
      },
    ],
  },

  gallery: {
    title: 'El alojamiento',
    subtitle: 'Un lugar para volver después de la montaña',
    images: [
      {
        src: '/images/gallery/01.jpg',
        alt: 'Max alojamiento en El Chaltén, Patagonia',
        caption: 'Fachada del alojamiento en Riquelme 142',
      },
      {
        src: '/images/gallery/02.jpg',
        alt: 'Habitación interior del alojamiento Max El Chaltén',
        caption: 'Habitaciones limpias y equipadas para el trekker',
      },
      {
        src: '/images/gallery/03.jpg',
        alt: 'Áreas comunes alojamiento Max El Chaltén',
        caption: 'Espacios comunes para descansar y planificar la próxima excursión',
      },
      {
        src: '/images/gallery/04.jpg',
        alt: 'Vista del entorno patagónico desde El Chaltén',
        caption: 'El Chaltén: la capital argentina del trekking',
      },
    ],
  },

  socialProof: {
    metrics: [
      { value: '57', label: 'Reseñas en Google' },
      { value: '4.1★', label: 'Calificación Google' },
      // TODO: Años en operación / desde qué año funciona
    ],
    testimonials: [
      {
        name: null, // TODO: buscar reseñas reales en Google Maps
        role: 'Viajero/a',
        quote: null,
        photo: null,
      },
      {
        name: null,
        role: 'Viajero/a',
        quote: null,
        photo: null,
      },
      {
        name: null,
        role: 'Viajero/a',
        quote: null,
        photo: null,
      },
    ],
  },

  pricing: {
    currency: 'ARS / USD',
    billing: 'Por noche',
    guarantee: 'Confirmación inmediata. Cancelación flexible.',
    plans: [
      {
        name: 'Cama en habitación compartida',
        price: 'A consultar',
        featured: false,
        includes: [
          'Cama con ropa de cama',
          'Baño compartido',
          'Acceso a áreas comunes',
        ],
        cta: 'Consultar disponibilidad',
        ctaHref: '/contacto',
      },
      {
        name: 'Habitación privada',
        price: 'A consultar',
        featured: true,
        badge: 'Más solicitada',
        includes: [
          'Habitación de uso exclusivo',
          'Ropa de cama',
          // TODO: confirmar si el baño es privado o compartido
          'Baño (confirmar disponibilidad)',
          'Acceso a áreas comunes',
        ],
        cta: 'Reservar ahora',
        ctaHref: '/contacto',
      },
    ],
  },

  faq: [
    {
      q: '¿Cómo llego a El Chaltén?',
      a: 'El Chaltén está a 220 km de El Calafate. Se puede llegar en bus desde El Calafate (3 hs aprox) o en auto. El aeropuerto más cercano es el de El Calafate (Comandante Armando Tola).',
    },
    {
      q: '¿Hay que reservar con anticipación?',
      a: 'Sí, especialmente en temporada alta (diciembre a marzo). El Chaltén recibe una gran cantidad de visitantes y la disponibilidad se agota rápido. Recomendamos reservar con al menos 30 días de anticipación en verano.',
    },
    {
      q: '¿Qué está incluido en la estadía?',
      // TODO: confirmar si incluye desayuno, uso de cocina, WiFi, estacionamiento u otros servicios
      a: 'Consultanos directamente para conocer todos los servicios incluidos según el tipo de habitación que elijas.',
    },
    {
      q: '¿Cuáles son los senderos de trekking más cercanos?',
      a: 'El Chaltén tiene senderos gratuitos y señalizados dentro del Parque Nacional Los Glaciares. Los más populares son el sendero al Fitz Roy (Laguna de los Tres, ~20 km ida y vuelta) y el sendero al Cerro Torre (Laguna Torre, ~18 km ida y vuelta). Ambos son accesibles caminando desde el pueblo.',
    },
    {
      q: '¿Cuáles son los horarios de check-in y check-out?',
      // TODO: confirmar horarios con el alojamiento
      a: 'Contactanos para confirmar los horarios de check-in y check-out según tu fecha de llegada.',
    },
  ],

  faqCta: 'Reservar ahora',
  faqUrgency: 'Temporada alta: El Chaltén se llena rápido. Reservá con tiempo.',

  map: {
    address: 'Riquelme 142, Z9301 El Chaltén, Santa Cruz, Argentina',
    reference:
      'Sobre calle Riquelme, en el centro del pueblo, a pocas cuadras del acceso a los principales senderos del Parque Nacional Los Glaciares',
    // TODO: Check-in y Check-out horarios
    checkin: null,
    checkout: null,
    googleMapsUrl: 'https://maps.google.com/?q=Max+alojamiento+Riquelme+El+Chaltén',
    embedUrl:
      'https://maps.google.com/maps?q=Riquelme+142+El+Chalt%C3%A9n+Santa+Cruz+Argentina&output=embed',
    phone: '0221 318-3455',
  },

  footer: {
    nav: [
      { label: 'Inicio', href: '/' },
      { label: 'Habitaciones', href: '/#habitaciones' },
      { label: 'Galería', href: '/#galeria' },
      { label: 'Contacto', href: '/contacto' },
    ],
    legal: [{ label: 'Política de privacidad', href: '/privacidad' }],
    copyright: '© 2025 Max El Chaltén. Todos los derechos reservados.',
  },

  seo: {
    title: 'Max | Alojamiento en El Chaltén',
    description:
      'Alojamiento en El Chaltén con 57 reseñas en Google. En Riquelme 142. Tu base para el trekking al Fitz Roy y Cerro Torre.',
    ogImage: '/images/og-image.png',
  },

  theme: {
    primary: '#2D6A4F',
    secondary: '#1B2631',
    accent: '#F0A500',
    background: '#F8F6F2',
    surface: '#FFFFFF',
    text: '#1A1A1A',
    displayFont: 'Space Grotesk',
    bodyFont: 'Inter',
  },
}
