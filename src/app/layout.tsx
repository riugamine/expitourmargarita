import './globals.css';
import { Poppins, Lora } from 'next/font/google';
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
  title: 'Expitour Margarita - Agencia de Viajes y Experiencias',
  description: 'Descubre la Isla de Margarita con Expitour. Ofrecemos boletería, alojamiento, experiencias únicas y traslados.',
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
      </body>
    </html>
  );
}
