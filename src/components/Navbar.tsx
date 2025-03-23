'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Botón de menú móvil (izquierda) */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-expitour-dark hover:text-expitour-teal hover:bg-gray-50 focus:outline-none transition-colors duration-200"
            >
              <span className="sr-only">Abrir menú</span>
              <FontAwesomeIcon 
                icon={isMenuOpen ? faTimes : faBars} 
                className="h-6 w-6" 
              />
            </button>
          </div>
          
          {/* Logo - Centrado en móvil, a la izquierda en desktop */}
          <div className="flex-1 flex items-center justify-center md:justify-start">
            <Link href="/" className="flex flex-col items-center">
              <Image 
                src="/images/logo_light_noname.png" 
                alt="Expitour Margarita Logo" 
                width={40}  // Ajustado para que coincida con el tamaño real mostrado
                height={40} // Ajustado para mantener la proporción
                className="h-10 w-10" // Cambiado de w-auto a w-10 para un tamaño fijo
                priority
                sizes="(max-width: 768px) 40px, 60px"
              />
              <span className="font-poppins text-black font-bold text-sm tracking-wider mt-1">EXPITOUR</span>
              <span className="font-poppins text-expitour-blue text-[8px] tracking-widest -mt-1">MARGARITA</span>
            </Link>
          </div>
          
          {/* Navegación de escritorio */}
          <div className="hidden md:flex md:items-center md:space-x-4 lg:space-x-6">
            <Link href="/" className="font-poppins text-expitour-dark font-medium relative px-2 lg:px-3 py-2 text-sm transition-all duration-300 hover:text-expitour-teal">
              Inicio
            </Link>
            <Link href="/services/boleteria" className="font-poppins text-expitour-dark font-medium relative px-2 lg:px-3 py-2 text-sm transition-all duration-300 hover:text-expitour-teal">
              Boletería
            </Link>
            <Link href="/services/alojamiento" className="font-poppins text-expitour-dark font-medium relative px-2 lg:px-3 py-2 text-sm transition-all duration-300 hover:text-expitour-teal">
              Alojamiento
            </Link>
            <Link href="/services/experiencias" className="font-poppins text-expitour-dark font-medium relative px-2 lg:px-3 py-2 text-sm transition-all duration-300 hover:text-expitour-teal">
              Experiencias
            </Link>
            <Link href="/services/traslado" className="font-poppins text-expitour-dark font-medium relative px-2 lg:px-3 py-2 text-sm transition-all duration-300 hover:text-expitour-teal">
              Traslado
            </Link>
            
            <a 
              href="https://wa.me/584122586183" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-poppins bg-expitour-teal text-white hover:bg-expitour-amber hover:text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow ml-2 flex items-center"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="mr-2 h-4 w-4" />
              Contáctanos
            </a>
          </div>
          
          {/* Espacio vacío en móvil para mantener el logo centrado */}
          <div className="flex items-center md:hidden w-10"></div>
        </div>
      </div>

      {/* Menú móvil */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-b-lg">
          <Link href="/" className="block font-poppins text-expitour-dark hover:bg-expitour-teal/10 hover:text-expitour-teal px-3 py-2 text-base font-medium rounded-md transition-all duration-200">
            Inicio
          </Link>
          <Link href="/services/boleteria" className="block font-poppins text-expitour-dark hover:bg-expitour-teal/10 hover:text-expitour-teal px-3 py-2 text-base font-medium rounded-md transition-all duration-200">
            Boletería
          </Link>
          <Link href="/services/alojamiento" className="block font-poppins text-expitour-dark hover:bg-expitour-teal/10 hover:text-expitour-teal px-3 py-2 text-base font-medium rounded-md transition-all duration-200">
            Alojamiento
          </Link>
          <Link href="/services/experiencias" className="block font-poppins text-expitour-dark hover:bg-expitour-teal/10 hover:text-expitour-teal px-3 py-2 text-base font-medium rounded-md transition-all duration-200">
            Experiencias
          </Link>
          <Link href="/services/traslado" className="block font-poppins text-expitour-dark hover:bg-expitour-teal/10 hover:text-expitour-teal px-3 py-2 text-base font-medium rounded-md transition-all duration-200">
            Traslado
          </Link>
          
          <a 
            href="https://wa.me/584122586183" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block font-poppins bg-expitour-teal text-white hover:bg-expitour-amber hover:text-white px-3 py-2 rounded-md text-base font-medium transition-all duration-200 mt-2 flex items-center justify-center"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="mr-2 h-4 w-4" />
            Contáctanos
          </a>
        </div>
      </div>
    </nav>
  );
}