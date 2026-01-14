import { Metadata } from 'next'

export const defaultMetadata: Metadata = {
  title: {
    default: 'Expitour Margarita - Venta de Servicios Turísticos en Venezuela Isla de Margarita',
    template: '%s | Expitour Margarita'
  },
  description: 'Venta de servicios turísticos en Venezuela Isla de Margarita. Especialistas en boletos aéreos, alojamiento y experiencias de tour. Ofrecemos reservas de vuelos, hoteles, tours guiados y traslados en la Perla del Caribe.',
  keywords: [
    'venta servicios turísticos Venezuela',
    'servicios turísticos Isla de Margarita',
    'venta servicios turísticos Margarita',
    'turismo Venezuela Isla de Margarita',
    'agencia turismo Margarita Venezuela',
    'servicios turísticos Venezuela',
    'tours Isla de Margarita',
    'alojamiento Margarita Venezuela',
    'boletos aéreos Venezuela',
    'experiencias turísticas Margarita',
    'traslados Isla de Margarita',
    'paquetes turísticos Venezuela',
    'reservas hoteles Margarita',
    'tours guiados Venezuela',
    'vacaciones Isla de Margarita',
    'turismo caribe Venezuela',
    'playas Margarita',
    'guía turístico Margarita',
    'agencia de viajes Venezuela'
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
    title: 'Expitour Margarita - Venta de Servicios Turísticos en Venezuela Isla de Margarita',
    description: 'Venta de servicios turísticos en Venezuela Isla de Margarita. Especialistas en boletos aéreos, alojamiento y experiencias de tour. Reservas de vuelos, hoteles, tours guiados y traslados en Margarita.',
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
    title: 'Expitour Margarita - Venta de Servicios Turísticos en Venezuela Isla de Margarita',
    description: 'Venta de servicios turísticos en Venezuela Isla de Margarita. Especialistas en boletos aéreos, alojamiento y experiencias de tour. Reservas de vuelos, hoteles, tours guiados y traslados en Margarita.',
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
  title: 'Servicios Turísticos - Venta de Servicios en Venezuela Isla de Margarita',
  description: 'Venta de servicios turísticos en Venezuela Isla de Margarita. Especialistas en boletos aéreos, alojamiento y experiencias de tour. Reserva vuelos nacionales e internacionales, hoteles, posadas, tours guiados y traslados. Planifica tu viaje perfecto en Margarita.',
  keywords: [
    'venta servicios turísticos Margarita',
    'servicios turísticos Isla de Margarita Venezuela',
    'venta servicios turísticos Venezuela',
    'alojamiento Margarita Venezuela',
    'boletos aéreos Venezuela',
    'experiencias turísticas Isla de Margarita',
    'traslados Margarita Venezuela',
    'paquetes turísticos Venezuela',
    'reservas hoteles Margarita',
    'tours guiados Isla de Margarita',
    'servicios turismo Venezuela',
    'agencia turismo Margarita'
  ],
  openGraph: {
    title: 'Servicios Turísticos - Venta de Servicios en Venezuela Isla de Margarita',
    description: 'Venta de servicios turísticos en Venezuela Isla de Margarita. Especialistas en boletos aéreos, alojamiento y experiencias de tour. Reserva vuelos, hoteles, tours guiados y traslados en Margarita.',
  },
}

export const experienciasMetadata: Metadata = {
  title: 'Experiencias Turísticas - Venta de Servicios en Venezuela Isla de Margarita',
  description: 'Venta de experiencias de tour en Venezuela Isla de Margarita. Tours guiados a Cubagua, kayak en La Restinga, parapente, day passes en resorts y más. Especialistas en experiencias de tour únicas e inolvidables en Margarita.',
  keywords: [
    'venta experiencias turísticas Margarita',
    'experiencias turísticas Isla de Margarita Venezuela',
    'tours Cubagua Venezuela',
    'kayak La Restinga Margarita',
    'parapente Isla de Margarita',
    'day pass resorts Venezuela',
    'actividades acuáticas Margarita',
    'aventuras Isla de Margarita',
    'tours guiados Venezuela',
    'servicios turísticos experiencias Margarita',
    'excursiones Margarita Venezuela'
  ],
  openGraph: {
    title: 'Experiencias Turísticas - Venta de Servicios en Venezuela Isla de Margarita',
    description: 'Venta de experiencias de tour en Venezuela Isla de Margarita. Tours guiados a Cubagua, kayak en La Restinga, parapente, day passes en resorts y más. Especialistas en experiencias de tour únicas.',
  },
}

export const anfitrionMetadata: Metadata = {
  title: 'Nuestro Anfitrión - Paul Cortesía - Servicios Turísticos Venezuela Isla de Margarita',
  description: 'Conoce a Paul Cortesía, tu guía turístico certificado especializado en venta de servicios turísticos en Venezuela Isla de Margarita. Especialista en boletos aéreos, alojamiento y experiencias de tour. Más de 7 años de experiencia creando experiencias únicas e inolvidables.',
  keywords: [
    'guía turístico Margarita Venezuela',
    'Paul Cortesía',
    'tours personalizados Isla de Margarita',
    'experiencias únicas Venezuela',
    'guía certificado Margarita',
    'turismo Isla de Margarita',
    'anfitrión local Venezuela',
    'servicios turísticos guía Margarita',
    'tours guiados Venezuela'
  ],
  openGraph: {
    title: 'Nuestro Anfitrión - Paul Cortesía - Servicios Turísticos Venezuela Isla de Margarita',
    description: 'Conoce a Paul Cortesía, tu guía turístico certificado especializado en venta de servicios turísticos en Venezuela Isla de Margarita. Especialista en boletos aéreos, alojamiento y experiencias de tour. Más de 7 años de experiencia.',
  },
}
