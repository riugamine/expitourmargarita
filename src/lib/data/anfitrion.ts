import { TourService, HostProfile } from '@/types';

/**
 * Perfil del anfitrión/guía turístico
 */
export const hostProfile: HostProfile = {
  name: "Carlos Expitour",
  title: "Guía Turístico Certificado",
  description: "Con más de 10 años de experiencia en turismo en la Isla de Margarita, me especializo en crear experiencias únicas e inolvidables. Conozco cada rincón de nuestra hermosa isla y me apasiona compartir su belleza natural, historia y cultura con visitantes de todo el mundo.",
  image: "https://res.cloudinary.com/da95ksabl/image/upload/v1742357278/IMG_1809_jmiohw.jpg",
  experience: "10+ años",
  specialties: [
    "Senderismo y ecoturismo",
    "Tours acuáticos y avistamiento de delfines",
    "Historia y cultura margariteña",
    "Fotografía de naturaleza",
    "Guía bilingüe (Español/Inglés)"
  ],
  contact: {
    phone: "+58 412 258-6183",
    whatsapp: "584122586183",
    email: "info@expitourmargarita.com"
  }
};

/**
 * Servicios turísticos disponibles
 */
export const tourServices: TourService[] = [
  {
    id: "full-day-cubagua",
    title: "Full Day Isla de Cubagua (Todo Incluido)",
    description: "Experiencia completa en la histórica Isla de Cubagua con todas las comodidades incluidas para un día perfecto.",
    fullDescription: "Disfruta de un día completo en la hermosa Isla de Cubagua, conocida por su rica historia perlífera y aguas cristalinas. Este tour todo incluido te ofrece transporte marítimo, almuerzo típico, bebidas, actividades acuáticas y tiempo libre en playas paradisíacas. Perfecto para relajarse y conectar con la naturaleza caribeña.",
    image: "https://res.cloudinary.com/dhzl31kb8/image/upload/v1743265216/IMG_0303_daewt4_d1xkdz.jpg",
    gallery: [
      "https://res.cloudinary.com/dhzl31kb8/image/upload/v1743265216/IMG_0303_daewt4_d1xkdz.jpg"
    ],
    price: "Desde $85 USD",
    duration: "8 horas",
    groupSize: "4-16 personas",
    includes: [
      "Transporte marítimo ida y vuelta",
      "Almuerzo típico completo",
      "Bebidas durante todo el día",
      "Equipo de snorkel",
      "Guía turístico certificado",
      "Seguro marítimo"
    ],
    excludes: [
      "Transporte terrestre al puerto",
      "Propinas",
      "Gastos personales",
      "Cámaras acuáticas"
    ],
    itinerary: [
      {
        time: "8:00 AM",
        activity: "Encuentro en el puerto",
        location: "Marina de Pampatar"
      },
      {
        time: "8:30 AM",
        activity: "Zarpe hacia Cubagua",
        location: "Aguas del Caribe"
      },
      {
        time: "10:00 AM",
        activity: "Llegada y actividades acuáticas",
        location: "Isla de Cubagua"
      },
      {
        time: "12:30 PM",
        activity: "Almuerzo en la playa",
        location: "Playa de Cubagua"
      },
      {
        time: "2:00 PM",
        activity: "Tiempo libre y relajación",
        location: "Playa de Cubagua"
      },
      {
        time: "4:00 PM",
        activity: "Regreso a Margarita",
        location: "Marina de Pampatar"
      }
    ],
    whatsappMessage: "¡Hola! Me interesa el Full Day a Cubagua todo incluido. ¿Podrías darme más información sobre disponibilidad?",
    category: "acuatico"
  },
  {
    id: "full-day-coche",
    title: "Full Day Isla de Coche (Todo Incluido)",
    description: "Aventura completa en la Isla de Coche, famosa por sus playas de arena blanca y deportes acuáticos.",
    fullDescription: "Explora la espectacular Isla de Coche, reconocida mundialmente por sus condiciones perfectas para deportes acuáticos y sus playas de arena blanca. Este tour completo incluye transporte, comidas, bebidas y actividades para vivir una experiencia inolvidable en uno de los destinos más hermosos del Caribe venezolano.",
    image: "https://res.cloudinary.com/dhzl31kb8/image/upload/v1743265216/IMG_0303_daewt4_d1xkdz.jpg",
    gallery: [
      "https://res.cloudinary.com/dhzl31kb8/image/upload/v1743265216/IMG_0303_daewt4_d1xkdz.jpg"
    ],
    price: "Desde $90 USD",
    duration: "8 horas",
    groupSize: "4-16 personas",
    includes: [
      "Transporte marítimo ida y vuelta",
      "Almuerzo típico en restaurante local",
      "Bebidas refrescantes",
      "Actividades de playa",
      "Guía turístico especializado",
      "Seguro de viaje"
    ],
    excludes: [
      "Transporte terrestre al puerto",
      "Actividades opcionales",
      "Propinas",
      "Compras personales"
    ],
    itinerary: [
      {
        time: "8:00 AM",
        activity: "Encuentro en el puerto",
        location: "Marina de Pampatar"
      },
      {
        time: "8:30 AM",
        activity: "Navegación hacia Coche",
        location: "Aguas del Caribe"
      },
      {
        time: "9:30 AM",
        activity: "Llegada y tour por la isla",
        location: "Isla de Coche"
      },
      {
        time: "12:00 PM",
        activity: "Almuerzo en restaurante local",
        location: "San Pedro de Coche"
      },
      {
        time: "2:00 PM",
        activity: "Tiempo libre en la playa",
        location: "Playa El Amor"
      },
      {
        time: "4:30 PM",
        activity: "Regreso a Margarita",
        location: "Marina de Pampatar"
      }
    ],
    whatsappMessage: "¡Hola! Quiero conocer más sobre el Full Day a la Isla de Coche. ¿Qué fechas tienen disponibles?",
    category: "acuatico"
  },
  {
    id: "pool-day-hoteles",
    title: "Pool Day en Hoteles Premium",
    description: "Disfruta de un día completo en las mejores piscinas y instalaciones de hoteles de lujo en Margarita.",
    fullDescription: "Relájate y disfruta de un día perfecto en las instalaciones de los mejores hoteles de Margarita: Margarita Village, Agua Dorada, Costa Caribe, Sunsol Ecoland, Sunsol Unik y Sunsol Isla Caribe. Incluye acceso a piscinas, áreas de descanso, servicios de playa y la comodidad de instalaciones de primera clase.",
    image: "https://res.cloudinary.com/dhzl31kb8/image/upload/v1743265216/IMG_0303_daewt4_d1xkdz.jpg",
    gallery: [
      "https://res.cloudinary.com/dhzl31kb8/image/upload/v1743265216/IMG_0303_daewt4_d1xkdz.jpg"
    ],
    price: "Desde $45 USD",
    duration: "6-8 horas",
    groupSize: "2-10 personas",
    includes: [
      "Acceso completo a instalaciones del hotel",
      "Uso de piscinas y áreas comunes",
      "Toallas de playa",
      "Coordinación y gestión de acceso",
      "Transporte desde zona hotelera"
    ],
    excludes: [
      "Comidas y bebidas",
      "Servicios de spa",
      "Actividades premium del hotel",
      "Propinas"
    ],
    itinerary: [
      {
        time: "10:00 AM",
        activity: "Recogida en hoteles",
        location: "Zona hotelera"
      },
      {
        time: "10:30 AM",
        activity: "Llegada al hotel seleccionado",
        location: "Hotel premium"
      },
      {
        time: "11:00 AM",
        activity: "Check-in y tour de instalaciones",
        location: "Recepción del hotel"
      },
      {
        time: "11:30 AM",
        activity: "Tiempo libre en piscinas",
        location: "Área de piscinas"
      },
      {
        time: "1:00 PM",
        activity: "Almuerzo (opcional)",
        location: "Restaurante del hotel"
      },
      {
        time: "5:00 PM",
        activity: "Regreso a hoteles",
        location: "Zona hotelera"
      }
    ],
    whatsappMessage: "¡Hola! Me interesa el Pool Day en hoteles premium. ¿Qué hoteles están disponibles?",
    category: "relajacion"
  },
  {
    id: "tour-margariteno-atardecer",
    title: "Tour Margariteño Atardecer",
    description: "Recorrido por los lugares más emblemáticos de Margarita durante las horas doradas del atardecer.",
    fullDescription: "Vive la magia de Margarita durante el atardecer con este tour especial que te llevará por los sitios más fotogénicos y románticos de la isla. Disfruta de vistas espectaculares, colores únicos del cielo caribeño y los mejores spots para capturar recuerdos inolvidables mientras el sol se pone en el horizonte.",
    image: "https://res.cloudinary.com/dhzl31kb8/image/upload/v1743265216/IMG_0303_daewt4_d1xkdz.jpg",
    gallery: [
      "https://res.cloudinary.com/dhzl31kb8/image/upload/v1743265216/IMG_0303_daewt4_d1xkdz.jpg"
    ],
    price: "Desde $35 USD",
    duration: "4 horas",
    groupSize: "2-12 personas",
    includes: [
      "Transporte en vehículo cómodo",
      "Guía turístico especializado",
      "Paradas en miradores panorámicos",
      "Tiempo para fotografías",
      "Bebidas refrescantes"
    ],
    excludes: [
      "Cena",
      "Entradas a sitios específicos",
      "Propinas",
      "Gastos personales"
    ],
    itinerary: [
      {
        time: "3:00 PM",
        activity: "Recogida en hoteles",
        location: "Zona hotelera"
      },
      {
        time: "3:30 PM",
        activity: "Primera parada panorámica",
        location: "Mirador El Yaque"
      },
      {
        time: "4:30 PM",
        activity: "Visita a pueblo típico",
        location: "La Asunción"
      },
      {
        time: "5:30 PM",
        activity: "Mirador del atardecer",
        location: "Punta Ballena"
      },
      {
        time: "6:30 PM",
        activity: "Atardecer en la playa",
        location: "Playa El Agua"
      },
      {
        time: "7:00 PM",
        activity: "Regreso a hoteles",
        location: "Zona hotelera"
      }
    ],
    whatsappMessage: "¡Hola! El tour del atardecer margariteño me parece perfecto. ¿A qué hora salen?",
    category: "panoramico"
  },
  {
    id: "salinas-pampatar-cuatrimoto",
    title: "Tour Salinas de Pampatar en Cuatrimoto",
    description: "Aventura emocionante en cuatrimoto explorando las históricas Salinas de Pampatar y sus alrededores.",
    fullDescription: "Vive una experiencia llena de adrenalina explorando las famosas Salinas de Pampatar en cuatrimoto. Este tour de aventura te llevará por paisajes únicos, formaciones salinas naturales y terrenos diversos mientras aprendes sobre la historia y importancia de la producción de sal en la región.",
    image: "https://res.cloudinary.com/dhzl31kb8/image/upload/v1743265216/IMG_0303_daewt4_d1xkdz.jpg",
    gallery: [
      "https://res.cloudinary.com/dhzl31kb8/image/upload/v1743265216/IMG_0303_daewt4_d1xkdz.jpg"
    ],
    price: "Desde $65 USD",
    duration: "3 horas",
    groupSize: "2-8 personas",
    includes: [
      "Cuatrimoto y combustible",
      "Equipo de seguridad completo",
      "Guía especializado en aventura",
      "Briefing de seguridad",
      "Seguro de actividad"
    ],
    excludes: [
      "Comidas",
      "Bebidas",
      "Ropa de repuesto",
      "Propinas"
    ],
    itinerary: [
      {
        time: "2:00 PM",
        activity: "Encuentro y briefing de seguridad",
        location: "Base de cuatrimotos"
      },
      {
        time: "2:30 PM",
        activity: "Inicio del recorrido",
        location: "Salinas de Pampatar"
      },
      {
        time: "3:30 PM",
        activity: "Parada en mirador",
        location: "Vista panorámica"
      },
      {
        time: "4:00 PM",
        activity: "Exploración de formaciones salinas",
        location: "Área de producción"
      },
      {
        time: "4:30 PM",
        activity: "Regreso a la base",
        location: "Base de cuatrimotos"
      },
      {
        time: "5:00 PM",
        activity: "Finalización del tour",
        location: "Base de cuatrimotos"
      }
    ],
    whatsappMessage: "¡Hola! Me emociona el tour en cuatrimoto por las Salinas. ¿Qué experiencia se necesita?",
    category: "aventura"
  },
  {
    id: "nado-con-delfines",
    title: "Nado con Delfines",
    description: "Experiencia única e inolvidable nadando y interactuando con delfines en su hábitat natural.",
    fullDescription: "Vive una de las experiencias más emocionantes y memorables de tu vida nadando junto a delfines en aguas cristalinas del Caribe. Esta actividad única te permitirá interactuar de manera respetuosa con estos magníficos mamíferos marinos mientras aprendes sobre su comportamiento y conservación.",
    image: "https://res.cloudinary.com/dhzl31kb8/image/upload/v1743265216/IMG_0303_daewt4_d1xkdz.jpg",
    gallery: [
      "https://res.cloudinary.com/dhzl31kb8/image/upload/v1743265216/IMG_0303_daewt4_d1xkdz.jpg"
    ],
    price: "Desde $120 USD",
    duration: "4 horas",
    groupSize: "2-6 personas",
    includes: [
      "Transporte marítimo especializado",
      "Guía biólogo marino",
      "Equipo de snorkel profesional",
      "Chaleco salvavidas",
      "Sesión fotográfica acuática",
      "Certificado de participación"
    ],
    excludes: [
      "Comidas",
      "Bebidas alcohólicas",
      "Propinas",
      "Fotos adicionales"
    ],
    itinerary: [
      {
        time: "8:00 AM",
        activity: "Encuentro y briefing educativo",
        location: "Centro de delfines"
      },
      {
        time: "8:30 AM",
        activity: "Preparación y equipamiento",
        location: "Área de preparación"
      },
      {
        time: "9:00 AM",
        activity: "Primer encuentro con delfines",
        location: "Laguna natural"
      },
      {
        time: "10:00 AM",
        activity: "Sesión de nado dirigido",
        location: "Área de interacción"
      },
      {
        time: "11:00 AM",
        activity: "Tiempo libre y fotografías",
        location: "Plataforma de observación"
      },
      {
        time: "12:00 PM",
        activity: "Finalización y entrega de certificados",
        location: "Centro de delfines"
      }
    ],
    whatsappMessage: "¡Hola! El nado con delfines es mi sueño. ¿Podrías contarme todos los detalles?",
    category: "acuatico"
  },
  {
    id: "full-day-tour-margariteno",
    title: "Full Day Tour Margariteño",
    description: "Tour completo por toda la Isla de Margarita visitando sus principales atractivos turísticos y culturales.",
    fullDescription: "Descubre todos los encantos de la Isla de Margarita en un día completo. Este tour integral te llevará por los sitios más emblemáticos, playas paradisíacas, centros históricos, mercados tradicionales y miradores panorámicos. Perfecto para conocer la esencia completa de la Perla del Caribe.",
    image: "https://res.cloudinary.com/dhzl31kb8/image/upload/v1743265216/IMG_0303_daewt4_d1xkdz.jpg",
    gallery: [
      "https://res.cloudinary.com/dhzl31kb8/image/upload/v1743265216/IMG_0303_daewt4_d1xkdz.jpg"
    ],
    price: "Desde $55 USD",
    duration: "8 horas",
    groupSize: "4-15 personas",
    includes: [
      "Transporte en vehículo climatizado",
      "Guía turístico certificado",
      "Entradas a sitios turísticos",
      "Almuerzo típico margariteño",
      "Paradas para compras"
    ],
    excludes: [
      "Bebidas alcohólicas",
      "Compras personales",
      "Actividades opcionales",
      "Propinas"
    ],
    itinerary: [
      {
        time: "8:00 AM",
        activity: "Recogida en hoteles",
        location: "Zona hotelera"
      },
      {
        time: "9:00 AM",
        activity: "Visita al Castillo San Carlos Borromeo",
        location: "Pampatar"
      },
      {
        time: "10:30 AM",
        activity: "Mercado de artesanías",
        location: "La Asunción"
      },
      {
        time: "12:00 PM",
        activity: "Almuerzo típico",
        location: "Restaurante local"
      },
      {
        time: "2:00 PM",
        activity: "Playa El Agua",
        location: "Costa norte"
      },
      {
        time: "3:30 PM",
        activity: "Mirador panorámico",
        location: "Cerro El Copey"
      },
      {
        time: "4:30 PM",
        activity: "Regreso a hoteles",
        location: "Zona hotelera"
      }
    ],
    whatsappMessage: "¡Hola! Quiero hacer el Full Day por toda Margarita. ¿Qué incluye exactamente?",
    category: "panoramico"
  },
  {
    id: "snorkel-los-frailes",
    title: "Snorkel Los Frailes",
    description: "Aventura submarina en uno de los mejores spots de snorkel de Venezuela, el Parque Nacional Los Frailes.",
    fullDescription: "Explora las aguas cristalinas del Parque Nacional Los Frailes, considerado uno de los mejores destinos de snorkel en Venezuela. Descubre la rica vida marina, corales coloridos y peces tropicales en este santuario natural protegido. Una experiencia perfecta para amantes del mundo submarino.",
    image: "https://res.cloudinary.com/dhzl31kb8/image/upload/v1743265216/IMG_0303_daewt4_d1xkdz.jpg",
    gallery: [
      "https://res.cloudinary.com/dhzl31kb8/image/upload/v1743265216/IMG_0303_daewt4_d1xkdz.jpg"
    ],
    price: "Desde $70 USD",
    duration: "6 horas",
    groupSize: "4-12 personas",
    includes: [
      "Transporte marítimo ida y vuelta",
      "Equipo de snorkel profesional",
      "Guía de vida marina",
      "Almuerzo ligero en la playa",
      "Bebidas refrescantes",
      "Seguro marítimo"
    ],
    excludes: [
      "Transporte terrestre",
      "Cámara submarina",
      "Propinas",
      "Gastos personales"
    ],
    itinerary: [
      {
        time: "8:00 AM",
        activity: "Encuentro en el puerto",
        location: "Marina Los Frailes"
      },
      {
        time: "8:30 AM",
        activity: "Navegación hacia el parque",
        location: "Aguas protegidas"
      },
      {
        time: "9:30 AM",
        activity: "Primera sesión de snorkel",
        location: "Arrecife principal"
      },
      {
        time: "11:00 AM",
        activity: "Segunda inmersión",
        location: "Zona de corales"
      },
      {
        time: "12:30 PM",
        activity: "Almuerzo en la playa",
        location: "Playa Los Frailes"
      },
      {
        time: "2:00 PM",
        activity: "Regreso a puerto",
        location: "Marina Los Frailes"
      }
    ],
    whatsappMessage: "¡Hola! Me fascina el snorkel. ¿Los Frailes es bueno para principiantes?",
    category: "acuatico"
  },
  {
    id: "jeep-safari-colonial-playero-restinga",
    title: "Jeep Safari Colonial Playero y Restinga",
    description: "Aventura en jeep combinando historia colonial, playas paradisíacas y la naturaleza de La Restinga.",
    fullDescription: "Vive una aventura completa en jeep 4x4 que combina lo mejor de Margarita: historia colonial en pueblos tradicionales, playas de ensueño y la biodiversidad única del Parque Nacional La Restinga. Un tour perfecto que mezcla cultura, naturaleza y diversión en un vehículo todo terreno.",
    image: "https://res.cloudinary.com/dhzl31kb8/image/upload/v1743265216/IMG_0303_daewt4_d1xkdz.jpg",
    gallery: [
      "https://res.cloudinary.com/dhzl31kb8/image/upload/v1743265216/IMG_0303_daewt4_d1xkdz.jpg"
    ],
    price: "Desde $75 USD",
    duration: "7 horas",
    groupSize: "4-8 personas",
    includes: [
      "Jeep 4x4 y conductor especializado",
      "Guía turístico bilingüe",
      "Entradas a sitios históricos",
      "Paseo en lancha por La Restinga",
      "Almuerzo típico",
      "Paradas en playas"
    ],
    excludes: [
      "Bebidas alcohólicas",
      "Actividades opcionales",
      "Propinas",
      "Compras personales"
    ],
    itinerary: [
      {
        time: "8:30 AM",
        activity: "Recogida en hoteles",
        location: "Zona hotelera"
      },
      {
        time: "9:30 AM",
        activity: "Tour colonial en La Asunción",
        location: "Centro histórico"
      },
      {
        time: "11:00 AM",
        activity: "Playa El Agua",
        location: "Costa norte"
      },
      {
        time: "12:30 PM",
        activity: "Almuerzo típico",
        location: "Restaurante local"
      },
      {
        time: "2:00 PM",
        activity: "Parque Nacional La Restinga",
        location: "Embarcadero"
      },
      {
        time: "3:30 PM",
        activity: "Playa La Restinga",
        location: "Costa sur"
      },
      {
        time: "4:30 PM",
        activity: "Regreso a hoteles",
        location: "Zona hotelera"
      }
    ],
    whatsappMessage: "¡Hola! El Jeep Safari me parece increíble. ¿Incluye todas las actividades mencionadas?",
    category: "aventura"
  }
];

