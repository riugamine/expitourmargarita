import Image from 'next/image';
import Link from 'next/link';

export default function FeaturedDestinations() {
  const destinations = [
    {
      name: 'Isla de Cubagua',
      video: 'https://res.cloudinary.com/da95ksabl/video/upload/v1742438537/IMG947_w8lxai.mp4',
      fallbackImage: 'https://res.cloudinary.com/da95ksabl/image/upload/v1742358580/coconut-drink-palm-tree-beach_vrnzcy.jpg',
      description: 'Primera ciudad europea de América del Sur, hogar de la legendaria Nueva Cádiz y sus ruinas históricas.',
      link: '/destinations/cubagua'
    },
    {
      name: 'Castillo Santa Rosa',
      video: 'https://res.cloudinary.com/da95ksabl/video/upload/v1742437774/IMG_5566_ns8air.mp4',
      fallbackImage: 'https://res.cloudinary.com/da95ksabl/image/upload/v1742358595/man-sitting-tropical-island_qqlhgm.jpg',
      description: 'Fortaleza colonial con impresionantes vistas de La Asunción, capital histórica de Nueva Esparta.',
      link: '/destinations/castillo-santa-rosa'
    },
    {
      name: 'Castillo San Carlos de Borromeo',
      video: 'https://res.cloudinary.com/da95ksabl/video/upload/v1742438869/este_rsybl4.mp4',
      fallbackImage: 'https://res.cloudinary.com/da95ksabl/image/upload/v1742357278/IMG_1809_jmiohw.jpg',
      description: 'Fortaleza histórica con vistas panorámicas de Pampatar y el mar Caribe.',
      link: '/destinations/castillo-san-carlos'
    },
    {
      name: 'Parque Nacional Laguna de La Restinga',
      video: 'https://res.cloudinary.com/da95ksabl/video/upload/v1742439205/este_1_xmmzpi.mp4',
      fallbackImage: 'https://res.cloudinary.com/da95ksabl/image/upload/v1742357532/IMG_0507_b8o1j1.jpg',
      description: 'Reserva natural con manglares, ideal para paseos en bote y observación de aves.',
      link: '/destinations/la-restinga'
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-expitour-teal font-medium text-base sm:text-lg mb-2">Explora Margarita</span>
          <h2 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-bold text-expitour-dark mb-4 sm:mb-6 leading-tight">
            Destinos <span className="text-expitour-teal">Destacados</span>
          </h2>
          <p className="font-lora text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Descubre los lugares más emblemáticos y hermosos de la Isla de Margarita que no puedes dejar de visitar.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {destinations.map((destination, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative w-full pt-[133%]">
                <video
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={destination.fallbackImage}
                  preload="auto"
                >
                  <source src={destination.video} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-75"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white transform transition-all duration-500 ease-out group-hover:translate-y-[-5px]">
                <h3 className="font-poppins text-xl sm:text-2xl font-bold mb-2 group-hover:text-expitour-yellow transition-colors duration-300">
                  {destination.name}
                </h3>
                <p className="font-lora text-sm sm:text-base mb-4 opacity-95 leading-relaxed line-clamp-2 sm:line-clamp-none">
                  {destination.description}
                </p>
                <Link 
                  href={destination.link} 
                  className="inline-flex items-center text-sm sm:text-base font-poppins text-expitour-yellow hover:text-expitour-amber transition-all duration-300 transform group-hover:translate-x-1 font-medium"
                >
                  Explorar
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}