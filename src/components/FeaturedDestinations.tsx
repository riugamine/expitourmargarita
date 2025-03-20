import Image from 'next/image';
import Link from 'next/link';

export default function FeaturedDestinations() {
  const destinations = [
    {
      name: 'Playa El Agua',
      image: 'https://res.cloudinary.com/da95ksabl/image/upload/v1742358580/coconut-drink-palm-tree-beach_vrnzcy.jpg',
      description: 'Una de las playas más populares de la isla, con aguas cristalinas y arena dorada.',
      link: '/destinations/playa-el-agua'
    },
    {
      name: 'Isla de Coche',
      image: 'https://res.cloudinary.com/da95ksabl/image/upload/v1742358595/man-sitting-tropical-island_qqlhgm.jpg',
      description: 'Paraíso para los amantes del kitesurf y windsurf, con playas vírgenes y tranquilas.',
      link: '/destinations/isla-de-coche'
    },
    {
      name: 'Castillo San Carlos de Borromeo',
      image: 'https://res.cloudinary.com/da95ksabl/image/upload/v1742357278/IMG_1809_jmiohw.jpg',
      description: 'Fortaleza histórica con vistas panorámicas de Pampatar y el mar Caribe.',
      link: '/destinations/castillo-san-carlos'
    },
    {
      name: 'Parque Nacional Laguna de La Restinga',
      image: 'https://res.cloudinary.com/da95ksabl/image/upload/v1742357532/IMG_0507_b8o1j1.jpg',
      description: 'Reserva natural con manglares, ideal para paseos en bote y observación de aves.',
      link: '/destinations/la-restinga'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-expitour-teal font-medium text-lg mb-2 block">Explora Margarita</span>
          <h2 className="font-poppins text-4xl md:text-5xl font-bold text-expitour-dark mb-6 leading-tight">
            Destinos <span className="text-expitour-teal">Destacados</span>
          </h2>
          <p className="font-lora text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Descubre los lugares más emblemáticos y hermosos de la Isla de Margarita que no puedes dejar de visitar.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="aspect-w-3 aspect-h-4 w-full overflow-hidden">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  width={300}
                  height={400}
                  className="w-full h-full object-cover transition-all-smooth duration-1000 ease-out-smooth group-hover:scale-[1.03] group-hover:brightness-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-75"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-500 ease-out group-hover:translate-y-[-5px]">
                <h3 className="font-poppins text-2xl font-bold mb-2 group-hover:text-expitour-yellow transition-colors duration-300">
                  {destination.name}
                </h3>
                <p className="font-lora text-base mb-4 opacity-95 leading-relaxed">
                  {destination.description}
                </p>
                <Link 
                  href={destination.link} 
                  className="inline-flex items-center text-base font-poppins text-expitour-yellow hover:text-expitour-amber transition-all duration-300 transform group-hover:translate-x-1 font-medium"
                >
                  Explorar
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
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