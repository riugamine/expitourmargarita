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
  faChevronRight,
  faCamera,
  faUmbrellaBeach,
  faWater,
  faMountain,
  faCar,
  faPlane,
  faShip,
  faSwimmingPool,
  faSun,
  faLeaf,
  faFish,
  faBinoculars,
  faHiking,
  faSuitcase,
  faLightbulb
} from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TiltedCard from '@/components/ui/TiltedCard';
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

  /**
   * Obtiene el icono apropiado para cada categoría de servicio
   */
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'acuatico':
        return faWater;
      case 'aventura':
        return faMountain;
      case 'relajacion':
        return faUmbrellaBeach;
      case 'panoramico':
        return faBinoculars;
      case 'senderismo':
        return faHiking;
      case 'cultural':
        return faSuitcase;
      default:
        return faLightbulb;
    }
  };

  /**
   * Obtiene el icono específico para cada servicio basado en su título
   */
  const getServiceIcon = (title: string) => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes('cuatrimoto')) return faCar;
    if (lowerTitle.includes('parapente')) return faPlane;
    if (lowerTitle.includes('delfin')) return faFish;
    if (lowerTitle.includes('submarinismo') || lowerTitle.includes('snorkel')) return faWater;
    if (lowerTitle.includes('jeep')) return faCar;
    if (lowerTitle.includes('pool') || lowerTitle.includes('day pass')) return faSwimmingPool;
    if (lowerTitle.includes('cubagua') || lowerTitle.includes('coche')) return faShip;
    if (lowerTitle.includes('atardecer')) return faSun;
    if (lowerTitle.includes('aventura')) return faHiking;
    if (lowerTitle.includes('salina')) return faLeaf;
    return getCategoryIcon('panoramico');
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section con perfil del anfitrión */}
      <section className="pt-36 pb-24 bg-expitour-blue">
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
            {tourServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }} // Reducido de 50 a 20
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.4, // Reducido de 0.6
                  delay: index * 0.05, // Reducido de 0.1 a 0.05
                  ease: "easeOut"
                }}
              >
                <TiltedCard
                  onClick={() => handleServiceClick(service)}
                  className="h-full"
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group h-full flex flex-col">
                    {/* Imagen del servicio */}
                    <div className="relative h-64 overflow-hidden flex-shrink-0">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <span className="bg-expitour-teal px-2 py-1 rounded text-xs font-medium capitalize flex items-center gap-1">
                          <FontAwesomeIcon icon={getServiceIcon(service.title)} className="h-3 w-3" />
                          {service.category}
                        </span>
                      </div>
                    </div>

                    {/* Contenido del servicio */}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-expitour-dark mb-3 group-hover:text-expitour-teal transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {service.description}
                        </p>

                        {/* Información rápida */}
                        <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
                          <div className="flex items-center gap-1">
                            <FontAwesomeIcon icon={faClock} className="h-4 w-4 text-expitour-teal" />
                            {service.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <FontAwesomeIcon icon={faUsers} className="h-4 w-4 text-expitour-teal" />
                            {service.groupSize}
                          </div>
                        </div>
                      </div>

                      {/* Botón de ver más - siempre al final */}
                      <div className="mt-auto pt-4 border-t border-gray-100">
                        <button className="w-full bg-expitour-blue text-white px-4 py-3 rounded-lg font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group-hover:bg-expitour-teal">
                          Ver detalles
                          <FontAwesomeIcon icon={faChevronRight} className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                      </div>
                    </div>
                  </div>
                </TiltedCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal de detalles del servicio con AnimatePresence */}
      <AnimatePresence>
        {selectedService && (
          <motion.div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={handleOverlayClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }} // Reducido de 0.3
          >
            <motion.div 
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              initial={{ 
                opacity: 0, 
                scale: 0.95, // Cambiado de 0.8 a 0.95
                y: 20 // Reducido de 50 a 20
              }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                y: 0 
              }}
              exit={{ 
                opacity: 0, 
                scale: 0.95, // Cambiado de 0.8 a 0.95
                y: 20 // Reducido de 50 a 20
              }}
              transition={{ 
                type: "spring",
                stiffness: 200, // Reducido de 300
                damping: 25, // Aumentado de 30
                duration: 0.3 // Reducido de 0.4
              }}
            >
              {/* Header del modal */}
              <div className="relative h-64 md:h-80">
                <Image
                  src={selectedService.image}
                  alt={selectedService.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                <motion.button
                  onClick={closeServiceModal}
                  className="absolute top-4 right-4 bg-black/30 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/50 transition-all duration-300 border border-white/20"
                  whileHover={{ scale: 1.05 }} // Reducido de 1.1
                  whileTap={{ scale: 0.95 }} // Reducido de 0.9
                >
                  <FontAwesomeIcon icon={faTimes} className="h-5 w-5" />
                </motion.button>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h2 className="text-2xl md:text-3xl font-bold mb-3 drop-shadow-lg text-shadow-lg">
                    {selectedService.title}
                  </h2>
                  <div className="flex flex-wrap items-center gap-3 text-sm">
                    <span className="bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/30 font-medium flex items-center gap-1">
                      <FontAwesomeIcon icon={faClock} className="h-4 w-4" />
                      {selectedService.duration}
                    </span>
                    <span className="bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/30 font-medium flex items-center gap-1">
                      <FontAwesomeIcon icon={faUsers} className="h-4 w-4" />
                      {selectedService.groupSize}
                    </span>
                    <span className="bg-expitour-teal px-3 py-1.5 rounded-full font-bold text-white shadow-lg flex items-center gap-1">
                      <FontAwesomeIcon icon={getServiceIcon(selectedService.title)} className="h-4 w-4" />
                      {selectedService.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Contenido del modal */}
              <div className="p-6 md:p-8">
                {/* Descripción completa */}
                <motion.div 
                  className="mb-8"
                  initial={{ opacity: 0, y: 10 }} // Reducido de 20 a 10
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }} // Reducido de 0.2
                >
                  <h3 className="text-xl font-bold text-expitour-dark mb-4">Descripción</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedService.fullDescription}
                  </p>
                </motion.div>

                {/* Incluye y No incluye */}
                <motion.div 
                  className="grid md:grid-cols-2 gap-8 mb-8"
                  initial={{ opacity: 0, y: 10 }} // Reducido de 20 a 10
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }} // Reducido de 0.3
                >
                  <div>
                    <h3 className="text-lg font-bold text-expitour-dark mb-4 flex items-center gap-2">
                      <FontAwesomeIcon icon={faCheck} className="h-5 w-5 text-green-500" />
                      Incluye
                    </h3>
                    <ul className="space-y-2">
                      {selectedService.includes.map((item, index) => (
                        <motion.li 
                          key={index} 
                          className="flex items-start gap-2 text-gray-600"
                          initial={{ opacity: 0, x: -10 }} // Reducido de -20 a -10
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + index * 0.03 }} // Reducido delay y intervalo
                        >
                          <FontAwesomeIcon icon={faCheck} className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          {item}
                        </motion.li>
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
                        <motion.li 
                          key={index} 
                          className="flex items-start gap-2 text-gray-600"
                          initial={{ opacity: 0, x: -10 }} // Reducido de -20 a -10
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + index * 0.03 }} // Reducido delay y intervalo
                        >
                          <FontAwesomeIcon icon={faTimes} className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                {/* Recomendaciones */}
                {selectedService.recommendations && selectedService.recommendations.length > 0 && (
                  <motion.div 
                    className="mb-8"
                    initial={{ opacity: 0, y: 10 }} // Reducido de 20 a 10
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }} // Reducido de 0.5
                  >
                    <h3 className="text-lg font-bold text-expitour-dark mb-4 flex items-center gap-2">
                      <FontAwesomeIcon icon={faLightbulb} className="h-5 w-5 text-yellow-500" />
                      Recomendaciones
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {selectedService.recommendations.map((item, index) => (
                        <motion.div 
                          key={index} 
                          className="flex items-center gap-2 text-gray-600 bg-gray-50 px-3 py-2 rounded-lg"
                          initial={{ opacity: 0, scale: 0.95 }} // Cambiado de 0.9 a 0.95
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + index * 0.03 }} // Reducido delay y intervalo
                        >
                          <FontAwesomeIcon icon={faCheck} className="h-3 w-3 text-expitour-teal flex-shrink-0" />
                          {item}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Itinerario */}
                <motion.div 
                  className="mb-8"
                  initial={{ opacity: 0, y: 10 }} // Reducido de 20 a 10
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }} // Reducido de 0.6
                >
                  <h3 className="text-lg font-bold text-expitour-dark mb-4">Itinerario</h3>
                  <div className="space-y-4">
                    {selectedService.itinerary.map((item, index) => (
                      <motion.div 
                        key={index} 
                        className="flex gap-4 p-4 bg-gray-50 rounded-lg"
                        initial={{ opacity: 0, x: -10 }} // Reducido de -20 a -10
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.35 + index * 0.05 }} // Reducido delay y intervalo
                      >
                        <div className="bg-expitour-teal text-white px-3 py-1 rounded-full text-sm font-bold flex-shrink-0 flex items-center justify-center min-w-[80px]">
                          {item.time}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-expitour-dark">{item.activity}</p>
                          {item.location && (
                            <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                              <FontAwesomeIcon icon={faMapMarkerAlt} className="h-3 w-3" />
                              {item.location}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Botón de reserva */}
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 10 }} // Reducido de 20 a 10
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }} // Reducido de 0.8
                >
                  <motion.a
                    href={getWhatsAppLink(selectedService.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-expitour-teal hover:bg-expitour-blue text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3 shadow-lg"
                    whileHover={{ scale: 1.02 }} // Reducido de 1.05
                    whileTap={{ scale: 0.98 }} // Reducido de 0.95
                  >
                    <FontAwesomeIcon icon={faWhatsapp} className="h-6 w-6" />
                    Reservar por WhatsApp
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}

