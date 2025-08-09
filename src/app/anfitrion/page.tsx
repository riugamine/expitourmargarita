'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faWhatsapp, 
} from '@fortawesome/free-brands-svg-icons';
import { 
  faPhone, 
  faMapMarkerAlt,
  faClock,
  faUsers,
  faCheck,
  faTimes,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { hostProfile, tourServices } from '@/lib/data/anfitrion';
import { TourService } from '@/types';

/**
 * Componente principal de la página del anfitrión
 */
export default function AnfitrionPage() {
  const [selectedService, setSelectedService] = useState<TourService | null>(null);

  /**
   * Maneja la selección de un servicio para mostrar detalles
   */
  const handleServiceClick = (service: TourService) => {
    setSelectedService(service);
  };

  /**
   * Cierra el modal de detalles del servicio
   */
  const closeServiceModal = () => {
    setSelectedService(null);
  };

  /**
   * Maneja el click en el overlay para cerrar el modal
   */
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeServiceModal();
    }
  };

  /**
   * Genera el enlace de WhatsApp con mensaje predefinido
   */
  const getWhatsAppLink = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${hostProfile.contact.whatsapp}?text=${encodedMessage}`;
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section con perfil del anfitrión */}
      <section className="pt-24 pb-16 bg-expitour-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Foto circular del anfitrión */}
            <div className="flex-shrink-0">
              <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                <Image
                  src={hostProfile.image}
                  alt={hostProfile.name}
                  fill
                  className="rounded-full object-cover border-8 border-white shadow-2xl"
                  priority
                />
                <div className="absolute -bottom-4 -right-4 bg-expitour-amber text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                  {hostProfile.experience}
                </div>
              </div>
            </div>

            {/* Información del anfitrión */}
            <div className="flex-1 text-white text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 font-lora">
                {hostProfile.name}
              </h1>
              <h2 className="text-xl lg:text-2xl mb-6 text-expitour-yellow font-medium">
                {hostProfile.title}
              </h2>
              <p className="text-lg lg:text-xl mb-8 leading-relaxed max-w-3xl">
                {hostProfile.description}
              </p>

              {/* Especialidades */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-expitour-yellow">
                  Especialidades:
                </h3>
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  {hostProfile.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium border border-white/30"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* Botones de contacto */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href={getWhatsAppLink('¡Hola! Me interesa conocer más sobre tus tours y servicios turísticos.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="h-5 w-5" />
                  Contactar por WhatsApp
                </a>
                <a
                  href={`tel:${hostProfile.contact.phone}`}
                  className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 border border-white/30 flex items-center justify-center gap-2"
                >
                  <FontAwesomeIcon icon={faPhone} className="h-5 w-5" />
                  {hostProfile.contact.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de servicios disponibles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-expitour-dark mb-4 font-lora">
              Servicios Disponibles
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Descubre experiencias únicas en la Isla de Margarita. Cada tour está diseñado 
              para brindarte momentos inolvidables y conectarte con la belleza natural y cultural de nuestro paraíso.
            </p>
          </div>

          {/* Grid de servicios */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {tourServices.map((service) => (
              <div
                key={service.id}
                onClick={() => handleServiceClick(service)}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden group"
              >
                {/* Imagen del servicio */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-expitour-amber text-white px-3 py-1 rounded-full text-sm font-bold">
                    {service.price}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="bg-expitour-teal px-2 py-1 rounded text-xs font-medium capitalize">
                      {service.category}
                    </span>
                  </div>
                </div>

                {/* Contenido del servicio */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-expitour-dark mb-3 group-hover:text-expitour-teal transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Información rápida */}
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <FontAwesomeIcon icon={faClock} className="h-4 w-4 text-expitour-teal" />
                      {service.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <FontAwesomeIcon icon={faUsers} className="h-4 w-4 text-expitour-teal" />
                      {service.groupSize}
                    </div>
                  </div>

                  {/* Botón de ver más */}
                  <div className="flex items-center justify-between">
                    <span className="text-expitour-teal font-semibold group-hover:underline flex items-center gap-2">
                      Ver detalles
                      <FontAwesomeIcon icon={faChevronRight} className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal de detalles del servicio */}
      {selectedService && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleOverlayClick}
        >
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
               onClick={(e) => e.stopPropagation()}>
            {/* Header del modal */}
            <div className="relative h-64 md:h-80">
              <Image
                src={selectedService.image}
                alt={selectedService.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
              <button
                onClick={closeServiceModal}
                className="absolute top-4 right-4 bg-black/30 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/50 transition-all duration-300 border border-white/20"
              >
                <FontAwesomeIcon icon={faTimes} className="h-5 w-5" />
              </button>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-3 drop-shadow-lg text-shadow-lg">
                  {selectedService.title}
                </h2>
                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <span className="bg-expitour-amber px-3 py-1.5 rounded-full font-bold text-white shadow-lg">
                    {selectedService.price}
                  </span>
                  <span className="bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/30 font-medium">
                    {selectedService.duration}
                  </span>
                  <span className="bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/30 font-medium">
                    {selectedService.groupSize}
                  </span>
                </div>
              </div>
            </div>

            {/* Contenido del modal */}
            <div className="p-6 md:p-8">
              {/* Descripción completa */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-expitour-dark mb-4">Descripción</h3>
                <p className="text-gray-600 leading-relaxed">
                  {selectedService.fullDescription}
                </p>
              </div>

              {/* Incluye y No incluye */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-lg font-bold text-expitour-dark mb-4 flex items-center gap-2">
                    <FontAwesomeIcon icon={faCheck} className="h-5 w-5 text-green-500" />
                    Incluye
                  </h3>
                  <ul className="space-y-2">
                    {selectedService.includes.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-600">
                        <FontAwesomeIcon icon={faCheck} className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-expitour-dark mb-4 flex items-center gap-2">
                    <FontAwesomeIcon icon={faTimes} className="h-5 w-5 text-red-500" />
                    No incluye
                  </h3>
                  <ul className="space-y-2">
                    {selectedService.excludes.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-600">
                        <FontAwesomeIcon icon={faTimes} className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Itinerario */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-expitour-dark mb-4">Itinerario</h3>
                <div className="space-y-4">
                  {selectedService.itinerary.map((item, index) => (
                    <div key={index} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                      <div className="bg-expitour-teal text-white px-3 py-1 rounded-full text-sm font-bold flex-shrink-0">
                        {item.time}
                      </div>
                      <div>
                        <p className="font-medium text-expitour-dark">{item.activity}</p>
                        {item.location && (
                          <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="h-3 w-3" />
                            {item.location}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Botón de reserva */}
              <div className="text-center">
                <a
                  href={getWhatsAppLink(selectedService.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-expitour-teal hover:bg-expitour-blue text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3 shadow-lg"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="h-6 w-6" />
                  Reservar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}

