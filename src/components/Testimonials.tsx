'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      content: "La experiencia en familia con Expitour en Margarita ha sido satisfactoria, la atención de Paul y sus colaboradores en cada traslado nos permitió enamorarnos de cada rincón que conocimos, excelente y comodo servicio. Pronto volveremos seguros de contar con ustedes!",
      author: "Marcel González",
      location: "Venezuela, Caracas",
      avatar: "https://res.cloudinary.com/da95ksabl/image/upload/v1742573990/Marcel_gjvaxz.jpg",
      rating: 4.5,
    },
    {
      id: 2,
      content: "Estamos muy agradecidos con los servicios y atención directa, personalizada e inmediata  prestada por Expitour... Los apartamentos vacacionales son excelentes, cómodos y acogedores. La ubicación frente al mar nos permitió disfrutar de caminatas inigualables,  para ver el amanecer hermosisimo de la isla de Margarita, así como también poder caminar hacia los mejores centros comerciales a realizar las compras necesarias. Gracias 🫂",
      author: "Marian",
      location: "Venezuela, Valencia",
      avatar: "https://res.cloudinary.com/da95ksabl/image/upload/v1742573991/Marian_k9pyif.jpg",
      rating: 4.8,
    },
    {
      id: 3,
      content: "Gracias a expitour nuestros viaje a la isla de margarita fue único , ya que conocimos cada rincón de ella , el carisma de su gente y esos paisajes que quedarán grabados en nuestra memoria. Sin pasar por alto su excelente servicio y su mejor disposición. 100% recomendado",
      author: "Ysbheli",
      location: "Venezuela, Caracas",
      avatar: "https://res.cloudinary.com/da95ksabl/image/upload/v1742573991/Ysbheli_bsdpbl.jpg",
      rating: 4.7,
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-expitour-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="font-lora text-lg text-gray-300 max-w-3xl mx-auto">
            Experiencias reales de viajeros que han disfrutado de nuestros servicios en la Isla de Margarita.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              <div className="flex">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-expitour-dark/50 p-8 rounded-lg border border-gray-700">
                      <div className="flex items-center mb-6">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.author}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-poppins text-lg font-semibold">{testimonial.author}</h4>
                          <p className="font-lora text-sm text-gray-400">{testimonial.location}</p>
                        </div>
                      </div>
                      <p className="font-lora text-lg italic mb-4">"{testimonial.content}"</p>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <div key={star} className="relative">
                            {/* Estrella completa */}
                            <svg 
                              className={`h-5 w-5 ${star <= testimonial.rating ? 'text-expitour-yellow' : 'text-gray-400'}`} 
                              fill="currentColor" 
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            {/* Media estrella */}
                            {star === Math.ceil(testimonial.rating) && testimonial.rating % 1 !== 0 && (
                              <div className="absolute inset-0 overflow-hidden" style={{ width: `${(testimonial.rating % 1) * 100}%` }}>
                                <svg 
                                  className="h-5 w-5 text-expitour-yellow" 
                                  fill="currentColor" 
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              </div>
                            )}
                          </div>
                        ))}
                        <span className="ml-2 text-sm text-gray-400">
                          ({testimonial.rating})
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <button 
            onClick={prevTestimonial}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 bg-expitour-yellow text-expitour-dark rounded-full p-2 shadow-lg hover:bg-expitour-turquoise transition-colors duration-300"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 bg-expitour-yellow text-expitour-dark rounded-full p-2 shadow-lg hover:bg-expitour-turquoise transition-colors duration-300"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-3 w-3 rounded-full transition-colors duration-300 ${
                  index === activeIndex ? 'bg-expitour-yellow' : 'bg-gray-600 hover:bg-gray-500'
                }`}
              >
                <span className="sr-only">Testimonio {index + 1}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}