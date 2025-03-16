'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  const planeRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const animatePlane = () => {
      const plane = planeRef.current;
      if (!plane) return;
      
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
    <div className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg-2.jpg"
          alt="Isla de Margarita"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-expitour-dark/50 to-transparent"></div>
      </div>
      
      {/* Animated Airplane */}
      <div 
        ref={planeRef} 
        className="absolute z-10 transition-transform duration-100 ease-linear"
        style={{ top: '30%', left: '40%' }}
      >
        <Image
          src="/images/airplane.png"
          alt="Airplane"
          width={80}
          height={80}
          className="w-20 h-20 md:w-24 md:h-24"
        />
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <div className="max-w-3xl">
          <h1 className="font-poppins text-4xl md:text-6xl font-bold text-white mb-4">
            Descubre la magia de <span className="text-expitour-yellow">Margarita</span>
          </h1>
          <p className="font-lora text-lg md:text-xl text-white mb-8">
            Experiencias únicas, playas paradisíacas y aventuras inolvidables te esperan en el Caribe venezolano.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/services/experiencias" className="inline-block bg-expitour-turquoise hover:bg-expitour-yellow text-expitour-dark font-poppins font-medium px-8 py-3 rounded-md transition-colors duration-300 text-center">
              Explorar Experiencias
            </Link>
            <Link href="/contacto" className="inline-block bg-expitour-orange hover:bg-white text-white hover:text-expitour-dark font-poppins font-medium px-8 py-3 rounded-md transition-colors duration-300 text-center">
              Contáctanos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}