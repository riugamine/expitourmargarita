import { Metadata } from 'next'

export const defaultMetadata: Metadata = {
  title: {
    default: 'Expitour Margarita - Tu Agencia de Viajes en la Isla de Margarita',
    template: '%s | Expitour Margarita'
  },
  description: 'Descubre la Isla de Margarita con Expitour. Ofrecemos servicios de alojamiento, boletos aéreos, experiencias únicas y traslados. Tu agencia de confianza en la Perla del Caribe.',
  keywords: [
    'Margarita',
    'Isla de Margarita',
    'turismo Venezuela',
    'viajes Margarita',
    'hoteles Margarita',
    'boletos aéreos',
    'experiencias turísticas',
    'traslados Margarita',
    'alojamiento Margarita',
    'turismo caribe',
    'playas Venezuela',
    'vacaciones Margarita',
    'tours Margarita',
    'guía turístico',
    'agencia de viajes'
  ],
  authors: [{ name: 'Expitour Margarita' }],
  creator: 'Expitour Margarita',
  publisher: 'Expitour Margarita',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://expitourmargarita.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_VE',
    url: 'https://expitourmargarita.com',
    title: 'Expitour Margarita - Tu Agencia de Viajes en la Isla de Margarita',
    description: 'Descubre la Isla de Margarita con Expitour. Ofrecemos servicios de alojamiento, boletos aéreos, experiencias únicas y traslados.',
    siteName: 'Expitour Margarita',
    images: [
      {
        url: 'https://res.cloudinary.com/da95ksabl/image/upload/v1742790203/logo_light_noname_r0p8dq.png',
        width: 1200,
        height: 630,
        alt: 'Expitour Margarita - Agencia de Viajes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expitour Margarita - Tu Agencia de Viajes en la Isla de Margarita',
    description: 'Descubre la Isla de Margarita con Expitour. Servicios de alojamiento, boletos aéreos, experiencias únicas y traslados.',
    images: ['https://res.cloudinary.com/da95ksabl/image/upload/v1742790203/logo_light_noname_r0p8dq.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
}

export const servicesMetadata: Metadata = {
  title: 'Servicios - Expitour Margarita',
  description: 'Descubre todos nuestros servicios turísticos en Margarita: alojamiento, boletos aéreos, experiencias únicas y traslados. Planifica tu viaje perfecto.',
  keywords: [
    'servicios turísticos Margarita',
    'alojamiento Margarita',
    'boletos aéreos Venezuela',
    'experiencias Margarita',
    'traslados Margarita',
    'paquetes turísticos',
    'reservas hoteles',
    'tours guiados'
  ],
  openGraph: {
    title: 'Servicios - Expitour Margarita',
    description: 'Descubre todos nuestros servicios turísticos en Margarita: alojamiento, boletos aéreos, experiencias únicas y traslados.',
  },
}

export const experienciasMetadata: Metadata = {
  title: 'Experiencias Únicas - Expitour Margarita',
  description: 'Vive experiencias inolvidables en Margarita: tours a Cubagua, kayak en La Restinga, parapente, day passes en resorts y mucho más.',
  keywords: [
    'experiencias Margarita',
    'tours Cubagua',
    'kayak La Restinga',
    'parapente Margarita',
    'day pass resorts',
    'actividades acuáticas',
    'aventuras Margarita',
    'tours guiados'
  ],
  openGraph: {
    title: 'Experiencias Únicas - Expitour Margarita',
    description: 'Vive experiencias inolvidables en Margarita: tours a Cubagua, kayak en La Restinga, parapente, day passes en resorts y mucho más.',
  },
}

export const anfitrionMetadata: Metadata = {
  title: 'Nuestro Anfitrión - Paul Cortesía - Expitour Margarita',
  description: 'Conoce a Paul Cortesía, tu guía turístico certificado en Margarita. Más de 7 años de experiencia creando experiencias únicas e inolvidables.',
  keywords: [
    'guía turístico Margarita',
    'Paul Cortesía',
    'tours personalizados',
    'experiencias únicas',
    'guía certificado',
    'turismo Margarita',
    'anfitrión local'
  ],
  openGraph: {
    title: 'Nuestro Anfitrión - Paul Cortesía - Expitour Margarita',
    description: 'Conoce a Paul Cortesía, tu guía turístico certificado en Margarita. Más de 7 años de experiencia creando experiencias únicas e inolvidables.',
  },
}
