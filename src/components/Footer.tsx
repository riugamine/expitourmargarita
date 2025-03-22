import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-expitour-dark dark:bg-expitour-blue/90 text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center justify-center text-center">
          <Link href="/" className="flex flex-col items-center uppercase mb-6">
            <span className="text-expitour-amber text-3xl font-bold tracking-wider">EXPITOUR</span>
            <span className="text-expitour-teal text-sm tracking-widest -mt-1">margarita</span>
          </Link>
          
          <p className="font-lora text-gray-300 mb-6 max-w-2xl text-center">
            Tu agencia de viajes y experiencias en la Isla de Margarita. Ofrecemos servicios personalizados para que disfrutes al máximo tu estadía.
          </p>
          
          <div className="flex items-center justify-center space-x-6 mb-8">
            <a href="https://www.facebook.com/expitourmargarita" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110 duration-300">
              <span className="sr-only">Facebook</span>
              <FontAwesomeIcon icon={faFacebookF} className="h-8 w-8 text-expitour-blue hover:text-expitour-amber" />
            </a>
            <a href="https://www.instagram.com/expitourmargarita" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110 duration-300">
              <span className="sr-only">Instagram</span>
              <FontAwesomeIcon icon={faInstagram} className="h-8 w-8 text-expitour-teal hover:text-expitour-amber" />
            </a>
            <a href="https://www.tiktok.com/@expitourmargarita" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110 duration-300">
              <span className="sr-only">TikTok</span>
              <FontAwesomeIcon icon={faTiktok} className="h-8 w-8 text-expitour-amber hover:text-expitour-teal" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-4 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Expitour Margarita. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}