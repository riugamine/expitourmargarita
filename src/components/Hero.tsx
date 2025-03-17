'use client';
import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  const planeRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const animatePlane = () => {
      const plane = planeRef.current;
      if (!plane) return;
      
      // Animación del avión
      let position = 0;
      let direction = 1;
      const speed = 0.5;
      const maxPosition = 100;
      
      const animate = () => {
        if (!plane) return;
        
        position += speed * direction;
        
        // Change direction when reaching edges
        if (position >= maxPosition) {
          direction = -1;
        } else if (position <= 0) {
          direction = 1;
        }
        
        // Apply slight up and down movement with a sine wave
        const verticalOffset = Math.sin(position * 0.05) * 10;
        
        plane.style.transform = `translateX(${position}px) translateY(${verticalOffset}px) rotate(${direction > 0 ? 0 : 180}deg)`;
        
        requestAnimationFrame(animate);
      };
      
      animate();
    };
    
    animatePlane();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-white to-gray-100 transition-colors duration-300">
      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
        
        {/* Nubes decorativas */}
        <div className="absolute top-1/4 left-10 opacity-20">
          <Image src="/images/cloud.svg" alt="Cloud" width={120} height={60} className="text-gray-200" />
        </div>
        <div className="absolute top-1/3 right-20 opacity-30">
          <Image src="/images/cloud.svg" alt="Cloud" width={180} height={90} className="text-gray-200" />
        </div>
        
        {/* Avión animado */}
        <div ref={planeRef} className="absolute top-1/4 left-0 transform -translate-x-full">
          <Image src="/images/plane.svg" alt="Plane" width={60} height={60} className="text-expitour-blue opacity-30" />
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-expitour-dark mb-6">
              Descubre la magia de <span className="text-expitour-amber">Margarita</span>
            </h1>
            <p className="font-lora text-lg text-gray-600 mb-8">
              Experimenta lo mejor de la Isla de Margarita con nuestros servicios personalizados de boletería, alojamiento, experiencias y traslados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services" className="inline-block bg-expitour-teal hover:bg-expitour-teal/80 text-white font-poppins font-medium px-8 py-3 rounded-md transition-colors duration-300 text-center">
                Nuestros Servicios
              </Link>
              <Link href="/contacto" className="inline-block bg-white hover:bg-expitour-amber/10 text-expitour-dark border border-expitour-teal font-poppins font-medium px-8 py-3 rounded-md transition-colors duration-300 text-center">
                Contáctanos
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-expitour-teal/20 rounded-full blur-3xl"></div>
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <Image 
                src="/images/hero-image.jpg" 
                alt="Isla de Margarita" 
                width={600} 
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}