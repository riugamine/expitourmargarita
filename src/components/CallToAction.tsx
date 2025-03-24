import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function CallToAction() {
  return (
    <section className=" pt-28 py-12 md:pb-12 md:pt-28 relative overflow-hidden min-h-[600px] flex items-center">
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
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-expitour-yellow font-poppins text-lg md:text-xl mb-4 animate-pulse">
              ¡Tu próxima aventura te espera!
            </span>
            <h2 className="font-poppins text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              ¿listo para vivir la{' '}
              <span className="text-expitour-yellow">experiencia margarita</span>?
            </h2>
            <p className="font-lora text-xl md:text-2xl text-gray-100 mb-10 leading-relaxed">
              Contacta con nuestro equipo de expertos y comienza a planificar tus próximas vacaciones en el paraíso caribeño
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="https://wa.me/584122586183" 
                target="_blank"
                className="inline-block bg-expitour-blue hover:bg-expitour-teal text-expitour-white font-poppins font-semibold px-10 py-5 rounded-xl transition-all duration-300 text-center transform hover:scale-105 hover:shadow-lg text-xl"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
                contáctanos ahora
              </Link>
              <Link 
                href="/services" 
                className="inline-block bg-transparent hover:bg-white/20 text-white border-2 border-white font-poppins font-semibold px-10 py-5 rounded-xl transition-all duration-300 text-center hover:shadow-lg text-xl group"
              >
                <span className="group-hover:text-expitour-yellow transition-colors duration-300">
                  ver servicios
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}