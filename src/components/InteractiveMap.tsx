'use client';
import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';

// Define el tipo para los destinos
interface Destination {
  id: number;
  name: string;
  position: { lat: number; lng: number };
  description: string;
  imageUrl: string;
}

export default function InteractiveMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  
  // Destinos en Margarita y alrededores
  const destinations: Destination[] = [
    {
      id: 1,
      name: 'Playa El Agua',
      position: { lat: 11.1569, lng: -63.8614 },
      description: 'Una de las playas más populares de Margarita con arena dorada y aguas cristalinas.',
      imageUrl: 'https://res.cloudinary.com/da95ksabl/image/upload/v1742439221/anna-sullivan-KLYsx0-Atk4-unsplash_aypvvh.jpg'
    },
    {
      id: 2,
      name: 'Isla de Cubagua',
      position: { lat: 10.8333, lng: -64.1667 },
      description: 'Primera ciudad europea de América del Sur, hogar de la legendaria Nueva Cádiz.',
      imageUrl: 'https://res.cloudinary.com/da95ksabl/image/upload/v1742358580/coconut-drink-palm-tree-beach_vrnzcy.jpg'
    },
    {
      id: 3,
      name: 'Castillo San Carlos',
      position: { lat: 11.0167, lng: -63.8667 },
      description: 'Fortaleza histórica con vistas panorámicas de Pampatar y el mar Caribe.',
      imageUrl: 'https://res.cloudinary.com/da95ksabl/image/upload/v1742357278/IMG_1809_jmiohw.jpg'
    },
    {
      id: 4,
      name: 'Parque La Restinga',
      position: { lat: 10.9667, lng: -64.0167 },
      description: 'Reserva natural con manglares, ideal para paseos en bote y observación de aves.',
      imageUrl: 'https://res.cloudinary.com/da95ksabl/image/upload/v1742357532/IMG_0507_b8o1j1.jpg'
    }
  ];

  // Inicializar el mapa cuando el script se carga
  useEffect(() => {
    if (!mapLoaded || !mapRef.current) return;
    
    // Opciones del mapa
    const mapOptions = {
      center: { lat: 11.0, lng: -63.9 }, // Centrado en Margarita
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.TERRAIN,
      styles: [
        // Estilos personalizados para el mapa (opcional)
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{ color: '#3E9986' }, { lightness: 50 }]
        },
        {
          featureType: 'landscape',
          elementType: 'geometry',
          stylers: [{ color: '#f5f5f5' }]
        }
      ]
    };
    
    // Crear el mapa
    const map = new google.maps.Map(mapRef.current, mapOptions);
    
    // Crear marcadores para cada destino
    destinations.forEach(destination => {
      // Crear marcador personalizado
      const marker = new google.maps.Marker({
        position: destination.position,
        map: map,
        title: destination.name,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 10,
          fillColor: '#EDA518',
          fillOpacity: 0.8,
          strokeColor: '#FFDE59',
          strokeWeight: 2
        },
        animation: google.maps.Animation.DROP
      });
      
      // Crear ventana de información
      const infoWindow = new google.maps.InfoWindow({
        content: `
          <div class="p-2 max-w-xs">
            <h3 class="font-bold text-lg mb-1">${destination.name}</h3>
            <img src="${destination.imageUrl}" alt="${destination.name}" class="w-full h-32 object-cover rounded-md mb-2" />
            <p class="text-sm">${destination.description}</p>
          </div>
        `
      });
      
      // Mostrar infoWindow al pasar el cursor
      marker.addListener('mouseover', () => {
        infoWindow.open(map, marker);
      });
      
      // Cerrar al quitar el cursor
      marker.addListener('mouseout', () => {
        infoWindow.close();
      });
      
      // Abrir al hacer clic (opcional)
      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });
    });
  }, [mapLoaded]);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-poppins text-4xl font-bold text-expitour-dark mb-4">
            Explora <span className="text-expitour-teal">Nuestros Destinos</span>
          </h2>
          <p className="font-lora text-lg text-gray-600 max-w-3xl mx-auto">
            Descubre los lugares más emblemáticos de Margarita y sus alrededores. 
            Pasa el cursor sobre los puntos para obtener más información.
          </p>
        </div>
        
        {/* Cargar el script de Google Maps */}
        <Script
          src={`https://maps.googleapis.com/maps/api/js?key=TU_API_KEY&libraries=places`}
          onLoad={() => setMapLoaded(true)}
        />
        
        {/* Contenedor del mapa */}
        <div 
          ref={mapRef} 
          className="w-full h-[500px] rounded-xl shadow-lg overflow-hidden border border-gray-200"
        ></div>
      </div>
    </section>
  );
}