'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faHotel, faUmbrellaBeach, faCar } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const features = [
    { icon: faPlane, text: 'Vuelos', delay: '100' },
    { icon: faHotel, text: 'Hoteles', delay: '200' },
    { icon: faUmbrellaBeach, text: 'Experiencias', delay: '300' },
    { icon: faCar, text: 'Traslados', delay: '400' }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-white to-gray-100">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/margarita-pattern.png')] opacity-5 bg-repeat"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
            <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-expitour-dark mb-6">
              Tu próxima aventura en <span className="text-expitour-amber">Margarita</span> comienza aquí
            </h1>
            <p className="font-lora text-lg text-gray-600 mb-8">
              Descubre el paraíso caribeño con nuestros paquetes personalizados y servicios exclusivos para hacer de tu viaje una experiencia inolvidable.
            </p>

            {/* Feature Icons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center p-4 bg-white rounded-lg shadow-md transform transition-all duration-500 hover:scale-105 hover:bg-expitour-teal/5 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${feature.delay}ms` }}
                >
                  <FontAwesomeIcon icon={feature.icon} className="h-8 w-8 text-expitour-teal mb-2" />
                  <span className="text-sm font-medium text-expitour-dark">{feature.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/services" 
                className="inline-block bg-expitour-teal hover:bg-expitour-teal/90 text-white font-poppins font-medium px-8 py-3 rounded-md transition-all duration-300 text-center transform hover:scale-105 hover:shadow-lg"
              >
                <FontAwesomeIcon icon={faPlane} className="mr-2" />
                Explorar Servicios
              </Link>
              <Link 
                href="https://wa.me/584122586183" 
                target="_blank"
                className="inline-block bg-white hover:bg-expitour-amber/10 text-expitour-dark border-2 border-expitour-teal font-poppins font-medium px-8 py-3 rounded-md transition-all duration-300 text-center transform hover:scale-105"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="mr-2 text-[#25D366]" />
                Contáctanos
              </Link>
            </div>
          </div>

          <div className={`relative transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
            <div className="absolute -inset-4 bg-expitour-teal/20 rounded-full blur-3xl"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.02] duration-500">
              <Image 
                src="/images/hero-bg-2.jpg" 
                alt="Isla de Margarita" 
                width={600} 
                height={400}
                className="w-full h-auto rounded-2xl"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    {/* Background with wave effect */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-100/50"></div>
            <div className="wave-container">
              <div className="wave wave1"></div>
              <div className="wave wave2"></div>
              <div className="wave wave3"></div>
            </div>
          </div>
    </section>
  );
}