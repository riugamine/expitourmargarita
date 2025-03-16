import Link from 'next/link';
import Image from 'next/image';

export default function CallToAction() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cta-background.jpg"
          alt="Isla de Margarita"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-expitour-dark/70"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 md:p-12 shadow-xl border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-poppins text-3xl md:text-4xl font-bold text-white mb-4">
                ¿Listo para vivir la experiencia Margarita?
              </h2>
              <p className="font-lora text-lg text-gray-200 mb-6">
                Contacta con nuestro equipo de expertos y comienza a planificar tus próximas vacaciones en el paraíso caribeño.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contacto" className="inline-block bg-expitour-yellow hover:bg-expitour-turquoise text-expitour-dark font-poppins font-medium px-8 py-3 rounded-md transition-colors duration-300 text-center">
                  Contáctanos Ahora
                </Link>
                <Link href="/services" className="inline-block bg-transparent hover:bg-white/20 text-white border border-white font-poppins font-medium px-8 py-3 rounded-md transition-colors duration-300 text-center">
                  Ver Servicios
                </Link>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="relative h-64 w-full">
                <Image
                  src="/images/contact-illustration.svg"
                  alt="Contacto"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}