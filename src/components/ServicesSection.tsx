import ServiceCard from './ServiceCard';
import { faPlaneArrival, faHotel, faUmbrellaBeach, faCarSide } from '@fortawesome/free-solid-svg-icons';

export default function ServicesSection() {
  const services = [
    {
      title: 'Boletos Aéreos',
      icon: faPlaneArrival,
      link: '/services/boleteria',
      hasDetailPage: false,
      color: 'from-blue-500/40 to-blue-600/40'
    },
    {
      title: 'Hospedaje',
      icon: faHotel,
      link: '/services/alojamiento',
      hasDetailPage: false,
      color: 'from-[#3E9986]/40 to-[#3E9986]/50'
    },
    {
      title: 'Experiencias',
      icon: faUmbrellaBeach,
      link: '/services/experiencias',
      hasDetailPage: true,
      color: 'from-[#EDA518]/40 to-[#EDA518]/50'
    },
    {
      title: 'Traslados',
      icon: faCarSide,
      link: '/services/traslado',
      hasDetailPage: false,
      color: 'from-green-500/40 to-green-600/40'
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