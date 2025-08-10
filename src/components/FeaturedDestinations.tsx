import Link from 'next/link';
import Image from 'next/image';

export default function FeaturedDestinations() {
  const destinations = [
    {
      name: 'Isla de Cubagua',
      image: 'https://res.cloudinary.com/dhzl31kb8/image/upload/v1743265216/IMG_0303_daewt4_d1xkdz.jpg',
      description: 'Primera ciudad europea de América del Sur, hogar de la legendaria Nueva Cádiz.',
      link: '/services/experiencias'
    },
    {
      name: 'Castillo Santa Rosa',
      image: 'https://res.cloudinary.com/dhzl31kb8/image/upload/v1743265225/IMG_5547_dmra69_wgcshh.jpg',
      description: 'Fortaleza colonial con impresionantes vistas de La Asunción.',
      link: '/services/experiencias'
    },
    {
      name: 'Castillo San Carlos de Borromeo',
      image: 'https://res.cloudinary.com/dhzl31kb8/image/upload/v1743265217/IMG_1809_jmiohw_z0nlcm.jpg',
      description: 'Fortaleza histórica con vistas panorámicas de Pampatar.',
      link: '/services/experiencias'
    },
    {
      name: 'Parque Nacional Laguna de La Restinga',
      image: 'https://res.cloudinary.com/dhzl31kb8/image/upload/v1743265228/IMG_0558_fuwfmb_q7zvap.jpg',
      description: 'Reserva natural con manglares, ideal para paseos en bote.',
      link: '/services/experiencias'
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-expitour-teal font-medium text-base sm:text-lg mb-2">Explora Margarita</span>
          <h2 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-bold text-expitour-dark mb-4 sm:mb-6 leading-tight">
            Destinos <span className="text-expitour-teal">destacados</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {destinations.map((destination, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative w-full pt-[133%]">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  priority={index < 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-75"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white transform transition-all duration-500 ease-out group-hover:translate-y-[-5px]">
                <h3 className="font-poppins text-xl sm:text-2xl font-bold mb-2 group-hover:text-expitour-yellow transition-colors duration-300">
                  {destination.name}
                </h3>

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
