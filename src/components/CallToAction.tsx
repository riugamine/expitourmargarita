import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="py-12 md:py-20 relative overflow-hidden min-h-[600px] flex items-center">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
        >
          <source src="https://res.cloudinary.com/da95ksabl/video/upload/v1742435099/854152-hd_1920_1080_24fps_lu6aea.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-expitour-blue/80 via-expitour-blue/70 to-expitour-dark/90"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-12 shadow-2xl border border-white/30 hover:border-white/40 transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <span className="inline-block text-expitour-yellow font-poppins text-lg md:text-xl mb-4 animate-pulse">
                ¡Tu próxima aventura te espera!
              </span>
              <h2 className="font-poppins text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                ¿Listo para vivir la{' '}
                <span className="text-expitour-yellow">experiencia Margarita</span>?
              </h2>
              <p className="font-lora text-lg md:text-xl text-gray-100 mb-8 leading-relaxed">
                Contacta con nuestro equipo de expertos y comienza a planificar tus próximas vacaciones en el paraíso caribeño.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link 
                  href="/contacto" 
                  className="inline-block bg-expitour-blue hover:bg-expitour-teal text-expitour-white font-poppins font-semibold px-8 py-4 rounded-xl transition-all duration-300 text-center transform hover:scale-105 hover:shadow-lg text-lg"
                >
                  Contáctanos Ahora
                </Link>
                <Link 
                  href="/services" 
                  className="inline-block bg-transparent hover:bg-white/20 text-white border-2 border-white font-poppins font-semibold px-8 py-4 rounded-xl transition-all duration-300 text-center hover:shadow-lg text-lg group"
                >
                  <span className="group-hover:text-expitour-yellow transition-colors duration-300">
                    Ver Servicios
                  </span>
                </Link>
              </div>
            </div>
            
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative w-full max-w-md aspect-square">
                <div className="absolute inset-0 bg-expitour-teal/20 rounded-full animate-pulse"></div>
                <div className="absolute inset-4 bg-expitour-amber/20 rounded-full animate-pulse animation-delay-500"></div>
                <div className="absolute inset-8 bg-expitour-yellow/20 rounded-full animate-pulse animation-delay-1000"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-7xl">🏖️</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}