'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationLinks = [
    { href: '/', text: 'Inicio' },
    { href: '/services', text: 'Servicios' },
    { href: '/anfitrion', text: 'Anfitrión' },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Mobile menu button remains the same */}
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
          
          {/* Logo section remains the same */}
          <div className="flex-1 flex items-center justify-center md:justify-start">
            <Link href="/" className="flex flex-col items-center">
              <Image 
                src="https://res.cloudinary.com/da95ksabl/image/upload/v1742790203/logo_light_noname_r0p8dq.png" 
                alt="Expitour Margarita Logo" 
                width={40}
                height={40}
                className="h-10 w-10"
                priority
                sizes="(max-width: 768px) 40px, 60px"
              />
              <span className="font-poppins text-black font-bold text-sm tracking-wider mt-1">EXPITOUR</span>
              <span className="font-poppins text-expitour-blue text-[8px] tracking-widest -mt-1">MARGARITA</span>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4 lg:space-x-6">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-poppins text-expitour-dark font-medium relative px-2 lg:px-3 py-2 text-sm transition-all duration-300 hover:text-expitour-teal"
              >
                {link.text}
              </Link>
            ))}
            
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
          
          {/* Mobile spacing remains the same */}
          <div className="flex items-center md:hidden w-10"></div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-b-lg">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block font-poppins text-expitour-dark hover:bg-expitour-teal/10 hover:text-expitour-teal px-3 py-2 text-base font-medium rounded-md transition-all duration-200"
            >
              {link.text}
            </Link>
          ))}
          
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