'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import Wave from 'react-wavify';
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
    <section className="relative min-h-[calc(100vh-0px)] flex items-center overflow-hidden bg-gradient-to-b from-white to-gray-100 pt-16 md:pt-0">
      {/* Background with interactive wave effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-100/50"></div>
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden">
          <svg width="0" height="0">
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#063D58" />
                <stop offset="50%" stopColor="#3E9986" />
                <stop offset="100%" stopColor="#063D58" />
              </linearGradient>
            </defs>
          </svg>
          <Wave 
            fill="url(#waveGradient)"
            paused={false}
            options={{
              height: 30,
              amplitude: 40,
              speed: 0.15,
              points: 5
            }}
            style={{ 
              position: 'relative',
              marginBottom: '-10px'
            }}
            className="opacity-60"
          />
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-20">
        {/* Resto del contenido permanece igual */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
            <h1 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-expitour-dark mb-6 leading-normal md:leading-relaxed">
              {/* Texto animado con librería optimizada en loop */}
              <TypeAnimation
                sequence={[
                  'Tu próxima aventura en Margarita comienza aquí.',
                  2000, // Pausa de 2 segundos
                  '', // Borra el texto
                  500, // Pequeña pausa antes de volver a escribir
                  'Tu próxima aventura en Margarita comienza aquí.',
                ]}
                wrapper="span"
                speed={50} // Velocidad de escritura (ms por carácter)
                cursor={true}
                repeat={Infinity} // Repetir infinitamente
                className="inline-block"
                style={{ 
                  display: 'inline-block',
                  background: 'linear-gradient(90deg, #3E9986 0%, #EDA518 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              />
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
              <div className="relative w-full h-[400px] md:h-[500px]">
                <video
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="https://res.cloudinary.com/da95ksabl/image/upload/v1742439221/anna-sullivan-KLYsx0-Atk4-unsplash_aypvvh.jpg"
                  preload="auto"
                >
                  <source src="https://res.cloudinary.com/da95ksabl/video/upload/v1742438537/IMG_2947_w8lxai.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}