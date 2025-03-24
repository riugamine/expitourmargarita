'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUmbrellaBeach, faShip, faPersonSwimming, faWater, faHotel } from '@fortawesome/free-solid-svg-icons';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';

interface Experience {
  title: string;
  description: string;
  videoUrl?: string;
  imageUrl: string;
  icon: any;
  whatsappMessage: string;
  features: string[];
}

export default function ExperienciasPage() {
  const experiences: Experience[] = [
    {
      title: 'Isla de Cubagua',
      description: 'Descubra la primera ciudad europea de América del Sur, hogar de la legendaria Nueva Cádiz y sus ruinas históricas.',
      videoUrl: 'https://res.cloudinary.com/da95ksabl/video/upload/v1742438537/IMG_2947_w8lxai.mp4',
      imageUrl: 'https://res.cloudinary.com/da95ksabl/image/upload/v1742358580/coconut-drink-palm-tree-beach_vrnzcy.jpg',
      icon: faUmbrellaBeach,
      whatsappMessage: "¡Hola! Me interesa el tour a la Isla de Cubagua. ¿Podrían brindarme más información?",
      features: [
        'Tour guiado por las ruinas',
        'Snorkel en aguas cristalinas',
        'Almuerzo típico incluido',
        'Transporte marítimo'
      ]
    },
    {
      title: 'Kayak en La Restinga',
      description: 'Explore los místicos manglares del Parque Nacional La Restinga en una aventura en kayak.',
      videoUrl: 'https://res.cloudinary.com/da95ksabl/video/upload/v1742439205/este_1_xmmzpi.mp4',
      imageUrl: 'https://res.cloudinary.com/da95ksabl/image/upload/v1742357532/IMG_0507_b8o1j1.jpg',
      icon: faWater,
      whatsappMessage: "¡Hola! Me gustaría obtener información sobre la aventura en kayak en La Restinga.",
      features: [
        'Equipo completo incluido',
        'Guía especializado',
        'Observación de aves',
        'Duración: 3 horas'
      ]
    },
    {
      title: 'Paddle Board',
      description: 'Disfrute de una experiencia única practicando paddle board en las tranquilas aguas de Playa El Agua.',
      imageUrl: 'https://res.cloudinary.com/da95ksabl/image/upload/v1742357278/IMG_1809_jmiohw.jpg',
      icon: faPersonSwimming,
      whatsappMessage: "¡Hola! Me interesa la actividad de paddle board. ¿Podrían darme más detalles?",
      features: [
        'Clases para principiantes',
        'Equipo incluido',
        'Instructor certificado',
        'Sesiones de 1 hora'
      ]
    },
    {
      title: 'Tour en Catamarán',
      description: 'Navegue por las cristalinas aguas del Caribe en un lujoso catamarán visitando las mejores playas.',
      videoUrl: 'https://res.cloudinary.com/da95ksabl/video/upload/v1742438869/este_rsybl4.mp4',
      imageUrl: 'https://res.cloudinary.com/da95ksabl/image/upload/v1742357278/IMG_1809_jmiohw.jpg',
      icon: faShip,
      whatsappMessage: "¡Hola! Me gustaría información sobre el tour en catamarán.",
      features: [
        'Bar abierto',
        'Almuerzo incluido',
        'Snorkel en Coche',
        'Atardecer en el mar'
      ]
    },
    {
      title: 'Resort Day Pass',
      description: 'Disfrute de un día completo en los mejores resorts de la isla con acceso a todas las instalaciones.',
      imageUrl: 'https://res.cloudinary.com/da95ksabl/image/upload/v1742697634/pexels-siddanth-sawant-178759136-28464721_p2nru4.jpg',
      icon: faHotel,
      whatsappMessage: "¡Hola! Me interesa el day pass para resort. ¿Qué opciones tienen disponibles?",
      features: [
        'Piscinas infinitas',
        'Restaurantes y bares',
        'Actividades recreativas',
        'Acceso a la playa'
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-gray-900">
      <section className="pt-28 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <TypeAnimation
              sequence={[
                'Descubra Nuestras Experiencias Únicas',
                2000,
                'Viva la Magia de Margarita',
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
              Explore las mejores experiencias que la Isla de Margarita tiene para ofrecer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences.map((experience, index) => (
              <a
                key={index}
                href={`https://wa.me/584122586183?text=${encodeURIComponent(experience.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-xl aspect-[4/3] hover:scale-[1.02] transition-all duration-300"
              >
                <div className="absolute inset-0">
                  {experience.videoUrl ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src={experience.videoUrl} type="video/mp4" />
                    </video>
                  ) : (
                    <Image
                      src={experience.imageUrl}
                      alt={experience.title}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="inline-flex items-center bg-black/50 rounded-lg px-3 py-1">
                        <FontAwesomeIcon icon={experience.icon} className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-white text-sm font-medium bg-expitour-teal/80 px-3 py-1 rounded-lg">
                        Reservar
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">{experience.title}</h2>
                    <p className="text-gray-200 text-sm mb-4">{experience.description}</p>
                  </div>
                  
                  <ul className="space-y-2">
                    {experience.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="text-white/90 text-sm flex items-center">
                        <span className="w-1.5 h-1.5 bg-expitour-teal rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}