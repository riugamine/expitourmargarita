'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneArrival, faHotel, faUmbrellaBeach, faCarSide } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

// Primero definimos las interfaces
interface Service {
  title: string;
  description: string;
  longDescription: string;
  icon: IconDefinition;
  link: string;
  image: string;
  features: string[];
}

interface CardContentProps {
  service: Service;
}

export default function ServicesPage() {
  
  // Actualizamos la definición del array services
  const services: Service[] = [
    {
      title: 'Boletería',
      description: 'Reserva tus boletos aéreos nacionales e internacionales con las mejores tarifas del mercado.',
      longDescription: 'Ofrecemos un servicio completo de reserva de boletos aéreos, con las mejores tarifas y rutas disponibles. Trabajamos con las principales aerolíneas para asegurar tu viaje perfecto.',
      icon: faPlaneArrival,
      link: '/services/boleteria',
      image: 'https://res.cloudinary.com/dhzl31kb8/image/upload/v1743265214/pexels-wanderer-731217_yujkkg_oyhhee.jpg',
      features: [
        'Vuelos nacionales e internacionales',
        'Mejores tarifas garantizadas',
        'Asesoría personalizada',
        'Gestión de cambios y cancelaciones'
      ]
    },
    {
      title: 'Alojamiento',
      description: 'Encuentra el hospedaje perfecto para tu estadía en la Isla de Margarita.',
      longDescription: 'Desde hoteles de lujo hasta posadas acogedoras, te ayudamos a encontrar el alojamiento perfecto que se ajuste a tus necesidades y presupuesto en la Isla de Margarita.',
      icon: faHotel,
      link: '/services/alojamiento',
      image: 'https://res.cloudinary.com/dhzl31kb8/image/upload/v1743265215/pexels-siddanth-sawant-178759136-28464721_p2nru4_mrna7u.jpg',
      features: [
        'Hoteles de lujo',
        'Posadas familiares',
        'Apartamentos vacacionales',
        'Ubicaciones privilegiadas'
      ]
    },
    {
      title: 'Experiencias',
      description: 'Vive aventuras inolvidables con nuestros tours y actividades exclusivas.',
      longDescription: 'Descubre la magia de Margarita con nuestras experiencias únicas. Desde tours históricos hasta aventuras acuáticas, tenemos la actividad perfecta para cada viajero.',
      icon: faUmbrellaBeach,
      link: '/services/experiencias',
      image: 'https://res.cloudinary.com/dhzl31kb8/image/upload/v1743265217/IMG_1809_jmiohw_z0nlcm.jpg',
      features: [
        'Tours guiados',
        'Actividades acuáticas',
        'Excursiones históricas',
        'Aventuras en la naturaleza'
      ]
    },
    {
      title: 'Traslado',
      description: 'Servicio de transporte seguro y confiable en toda la isla.',
      longDescription: 'Nuestro servicio de traslado te garantiza un viaje cómodo y seguro desde el aeropuerto hasta tu alojamiento o cualquier punto de la isla, con conductores profesionales y vehículos modernos.',
      icon: faCarSide,
      link: '/services/traslado',
      image: 'https://res.cloudinary.com/dhzl31kb8/image/upload/v1743265215/IMG_0279_ryqe9p_b7ygun.jpg',
      features: [
        'Traslados aeropuerto-hotel',
        'Transporte privado',
        'Conductores profesionales',
        'Vehículos modernos y seguros'
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-gray-900">
      {/* Services Grid - Ahora es lo primero que se ve */}
      <section className="pt-12 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Título animado */}
          <div className="text-center mb-8">
            <TypeAnimation
              sequence={[
                'Descubre Nuestros Servicios Premium',
                2000,
                'Explora Todo lo que Tenemos para Ti',
                2000,
              ]}
              wrapper="h1"
              speed={50}
              cursor={true}
              repeat={Infinity}
              className="text-3xl md:text-4xl font-bold font-poppins mb-4 inline-block"
              style={{ 
                background: 'linear-gradient(90deg, #3E9986 0%, #EDA518 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            />
            <p className="text-lg font-lora text-gray-300 max-w-2xl mx-auto">
              En Expitour Margarita nos especializamos en hacer realidad tus sueños de viaje
            </p>
          </div>

          {/* Services Grid */}
          <section className="pt-16 pb-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Grid de servicios */}
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-3 md:gap-8">
                {services.map((service, index) => (
                  <div key={index} className="group relative overflow-hidden rounded-xl md:rounded-3xl aspect-[3/4] md:aspect-[4/3] hover:scale-[1.02] transition-all duration-300">
                    {service.title === 'Experiencias' ? (
                      <Link href={service.link} className="block h-full">
                        <CardContent service={service} />
                      </Link>
                    ) : (
                      <a 
                        href="https://wa.me/584122586183"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block h-full"
                      >
                        <CardContent service={service} />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

// Actualizamos el componente CardContent
const CardContent: React.FC<CardContentProps> = ({ service }) => (
  <>
    <div className="absolute inset-0">
      <Image
        src={service.image}
        alt={service.title}
        fill
        priority
        className="object-cover brightness-[0.6] group-hover:scale-105 transition-transform duration-500"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
    
    <div className="relative h-full p-4 md:p-10 flex flex-col justify-between bg-gradient-to-t from-black/90 via-black/50 to-transparent">
      <div>
        <div className="flex items-center justify-between mb-2 md:mb-4">
          <div className="inline-flex items-center bg-black/50 rounded-lg md:rounded-xl px-2 py-1 md:px-4 md:py-2">
            <FontAwesomeIcon icon={service.icon} className="h-4 w-4 md:h-5 md:w-5 text-white" />
          </div>
          <span className="text-white text-xs md:text-base font-medium bg-black/50 px-2 py-1 md:px-4 md:py-2 rounded-lg md:rounded-xl">
            Reservar
          </span>
        </div>
        <h2 className="text-xl md:text-4xl font-bold text-white mb-2 md:mb-4">{service.title}</h2>
      </div>

      <div>
        <ul className="mb-0 md:mb-6 space-y-1 md:space-y-3">
          {service.features.slice(0, 3).map((feature, idx) => (
            <li key={idx} className="text-white/95 text-xs md:text-lg flex items-center">
              <span className="w-1 h-1 md:w-2 md:h-2 bg-expitour-teal rounded-full mr-2 md:mr-3"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </>
)