import ServiceCard from './ServiceCard';

export default function ServicesSection() {
  const services = [
    {
      title: 'Boletería',
      description: 'Reserva tus boletos aéreos nacionales e internacionales con las mejores tarifas del mercado.',
      icon: '/images/icons/ticket.svg',
      link: '/services/boleteria',
      hasDetailPage: false
    },
    {
      title: 'Alojamiento',
      description: 'Encuentra el hospedaje perfecto para tu estadía en la Isla de Margarita, desde hoteles de lujo hasta posadas acogedoras.',
      icon: '/images/icons/hotel.svg',
      link: '/services/alojamiento',
      hasDetailPage: true
    },
    {
      title: 'Experiencias',
      description: 'Vive aventuras inolvidables con nuestros tours y actividades exclusivas en los mejores lugares de la isla.',
      icon: '/images/icons/experience.svg',
      link: '/services/experiencias',
      hasDetailPage: true
    },
    {
      title: 'Traslado',
      description: 'Servicio de transporte seguro y confiable desde el aeropuerto hasta tu alojamiento o cualquier punto de la isla.',
      icon: '/images/icons/transfer.svg',
      link: '/services/traslado',
      hasDetailPage: false
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-expitour-dark mb-4">
            Nuestros Servicios
          </h2>
          <p className="font-lora text-lg text-gray-600 max-w-3xl mx-auto">
            En Expitour Margarita ofrecemos todo lo que necesitas para disfrutar de unas vacaciones perfectas en la Isla de Margarita.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link}
              hasDetailPage={service.hasDetailPage}
            />
          ))}
        </div>
      </div>
    </section>
  );
}