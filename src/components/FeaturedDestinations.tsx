import Image from 'next/image';
import Link from 'next/link';

export default function FeaturedDestinations() {
  const destinations = [
    {
      name: 'Playa El Agua',
      image: '/images/destinations/playa-el-agua.jpg',
      description: 'Una de las playas más populares de la isla, con aguas cristalinas y arena dorada.',
      link: '/destinations/playa-el-agua'
    },
    {
      name: 'Isla de Coche',
      image: '/images/destinations/isla-de-coche.jpg',
      description: 'Paraíso para los amantes del kitesurf y windsurf, con playas vírgenes y tranquilas.',
      link: '/destinations/isla-de-coche'
    },
    {
      name: 'Castillo San Carlos de Borromeo',
      image: '/images/destinations/castillo-san-carlos.jpg',
      description: 'Fortaleza histórica con vistas panorámicas de Pampatar y el mar Caribe.',
      link: '/destinations/castillo-san-carlos'
    },
    {
      name: 'Parque Nacional Laguna de La Restinga',
      image: '/images/destinations/la-restinga.jpg',
      description: 'Reserva natural con manglares, ideal para paseos en bote y observación de aves.',
      link: '/destinations/la-restinga'
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-expitour-dark mb-4">
            Destinos Destacados
          </h2>
          <p className="font-lora text-lg text-gray-600 max-w-3xl mx-auto">
            Descubre los lugares más emblemáticos y hermosos de la Isla de Margarita que no puedes dejar de visitar.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-md">
              <div className="aspect-w-3 aspect-h-4 w-full">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="font-poppins text-xl font-semibold mb-1">{destination.name}</h3>
                <p className="font-lora text-sm text-gray-200 mb-3 line-clamp-2">{destination.description}</p>
                <Link href={destination.link} className="inline-flex items-center font-poppins text-expitour-yellow hover:text-expitour-turquoise text-sm">
                  Explorar
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
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