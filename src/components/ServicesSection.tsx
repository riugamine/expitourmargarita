import ServiceCard from './ServiceCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneArrival, faHotel, faUmbrellaBeach, faCarSide } from '@fortawesome/free-solid-svg-icons';

export default function ServicesSection() {
  const services = [
    {
      title: 'Boletería',
      description: 'Reserva tus boletos aéreos nacionales e internacionales con las mejores tarifas del mercado.',
      icon: faPlaneArrival,
      link: '/services/boleteria',
      hasDetailPage: false,
      color: 'from-blue-500/20 to-blue-600/20'
    },
    {
      title: 'Alojamiento',
      description: 'Encuentra el hospedaje perfecto para tu estadía en la Isla de Margarita, desde hoteles de lujo hasta posadas acogedoras.',
      icon: faHotel,
      link: '/services/alojamiento',
      hasDetailPage: true,
      color: 'from-expitour-teal/20 to-expitour-teal/30'
    },
    {
      title: 'Experiencias',
      description: 'Vive aventuras inolvidables con nuestros tours y actividades exclusivas en los mejores lugares de la isla.',
      icon: faUmbrellaBeach,
      link: '/services/experiencias',
      hasDetailPage: true,
      color: 'from-expitour-amber/20 to-expitour-amber/30'
    },
    {
      title: 'Traslado',
      description: 'Servicio de transporte seguro y confiable desde el aeropuerto hasta tu alojamiento o cualquier punto de la isla.',
      icon: faCarSide,
      link: '/services/traslado',
      hasDetailPage: false,
      color: 'from-green-500/20 to-green-600/20'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-poppins text-4xl md:text-5xl font-bold text-expitour-dark mb-6">
            Descubre Nuestros <span className="text-expitour-teal">Servicios</span>
          </h2>
          <p className="font-lora text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            En Expitour Margarita transformamos tus vacaciones en experiencias inolvidables. 
            Desde la planificación hasta el último detalle, nos encargamos de todo.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
                hasDetailPage={service.hasDetailPage}
                color={service.color}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}