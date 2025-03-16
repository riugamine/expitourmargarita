'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      content: "Nuestra experiencia con Expitour fue increíble. Organizaron todo nuestro viaje a la perfección, desde el alojamiento hasta las excursiones. ¡Volveremos a contar con ellos sin duda!",
      author: "María Rodríguez",
      location: "Caracas, Venezuela",
      avatar: "/images/testimonials/avatar-1.jpg"
    },
    {
      id: 2,
      content: "Gracias a Expitour pudimos conocer rincones de Margarita que no aparecen en las guías turísticas. Su atención personalizada y conocimiento local hicieron que nuestras vacaciones fueran inolvidables.",
      author: "Juan Pérez",
      location: "Bogotá, Colombia",
      avatar: "/images/testimonials/avatar-2.jpg"
    },
    {
      id: 3,
      content: "El servicio de traslado fue puntual y el conductor muy amable. Los tours que reservamos estaban muy bien organizados y los guías eran conocedores y apasionados por la isla.",
      author: "Ana García",
      location: "Madrid, España",
      avatar: "/images/testimonials/avatar-3.jpg"
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
                          <svg key={star} className="h-5 w-5 text-expitour-yellow" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
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