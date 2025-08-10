import './globals.css';
import { Poppins, Lora } from 'next/font/google';
import '@/lib/fontawesome'; // Import FontAwesome configuration
import CookieConsent from '@/components/CookieConsent';
import { defaultMetadata } from './metadata';

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

export const metadata = defaultMetadata;

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
