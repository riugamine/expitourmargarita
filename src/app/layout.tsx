import './globals.css';
import { Poppins, Lora } from 'next/font/google';
import '@/lib/fontawesome'; // Import FontAwesome configuration
import CookieConsent from '@/components/CookieConsent';
// Remove ThemeProvider import

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-lora',
  display: 'swap',
});

export const metadata = {
  title: 'Expitour Margarita - Agencia de Viajes y Experiencias en Isla Margarita',
  description: 'Tu agencia de viajes en Isla Margarita. Ofrecemos boletería, alojamiento, experiencias únicas, tours y traslados. Descubre el Caribe con nosotros.',
  keywords: 'Isla Margarita, turismo, viajes, tours, hotel, boletería, experiencias, Venezuela, Caribe, playas',
  openGraph: {
    title: 'Expitour Margarita - Agencia de Viajes y Experiencias',
    description: 'Descubre la Isla de Margarita con Expitour. Boletería, alojamiento, experiencias y traslados.',
    url: 'https://expitourmargarita.com',
    siteName: 'Expitour Margarita',
    images: [
      {
        url: 'https://res.cloudinary.com/da95ksabl/image/upload/v1742357278/IMG_1809_jmiohw.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'es_VE',
    type: 'website',
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${poppins.variable} ${lora.variable}`}>
      <body className="font-poppins">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
