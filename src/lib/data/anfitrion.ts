import { TourService, HostProfile } from '@/types';

/**
 * Perfil del anfitrión/guía turístico
 */
export const hostProfile: HostProfile = {
  name: "Paul Cortesía",
  title: "Guía Turístico Certificado",
  description: "Con más de 7 años de experiencia en turismo en la Isla de Margarita, me especializo en crear experiencias únicas e inolvidables. Conozco cada rincón de nuestra hermosa isla y me apasiona compartir su belleza natural, historia y cultura con visitantes de todo el mundo.",
  image: "/images/paul.jpg",
  experience: "7+ años",
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
    id: "tour-salina-pampatar-cuatrimoto",
    title: "Tour Salina de Pampatar Cuatrimoto",
    description: "Aventura emocionante en cuatrimoto explorando las históricas Salinas de Pampatar y sus alrededores.",
    fullDescription: "Vive una experiencia llena de adrenalina explorando las famosas Salinas de Pampatar en cuatrimoto. Este tour de aventura te llevará por paisajes únicos, formaciones salinas naturales y terrenos diversos mientras aprendes sobre la historia y importancia de la producción de sal en la región.",
    image: "https://res.cloudinary.com/dhzl31kb8/image/upload/v1743265216/IMG_0303_daewt4_d1xkdz.jpg",
    gallery: [
      "https://res.cloudinary.com/dhzl31kb8/image/upload/v1743265216/IMG_0303_daewt4_d1xkdz.jpg"
    ],
    price: "80 USD",
    duration: "Variable",
    groupSize: "Min: 1 personas - Max: 20",
    includes: [
      "Guía",
      "Hidratación",
      "1 botellita de agua en el recorrido",
      "degustación de Sal y otros productos en Stand de @SalMampatare"
    ],
    excludes: [
      "Snacks",
      "Almuerzo",
      "Servicios adicionales",
      "Desayuno",
      "Cena",
      "Bebida no alcoholica",
      "Bebidas alcoholicas",
      "REFRIGERIO"
    ],
    recommendations: [
      "Cámara fotográfica",
      "Zapatos deportivos o botas",
      "Documento de identidad",
      "Lentes de sol",
      "Buen humor",
      "Protector Solar"
    ],
    itinerary: [
      {
        time: "9:30 am",
        activity: "Primera salida",
        location: "Bodegón Escamas ubicado al final del Casco Histórico de Pampatar"
      },
      {
        time: "1:30 am",
        activity: "Segunda salida",
        location: "Bodegón Escamas ubicado al final del Casco Histórico de Pampatar"
      },
      {
        time: "4:30 pm",
        activity: "Tercera salida",
        location: "Bodegón Escamas ubicado al final del Casco Histórico de Pampatar"
      }
    ],
    whatsappMessage: "¡Hola! Me interesa el Tour Salina de Pampatar en Cuatrimoto. ¿Podrías darme más información?",
    category: "aventura"
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
    price: "80 USD",
    duration: "Salida: 1:00 / 1:30 pm aproximadamente. Llegada: 7:00 pm aproximadamente",
    groupSize: "Min: 1 personas - Max: 20",
    includes: [
      "Guía especializado",
      "City Tour",
      "Cava con hielo",
      "Hidratacion",
      "hidratación a bordo a base de agua",
      "hielo para las bebidas personales",
      "4 ticket de consumo válido x 1 polar (maltín, light, plisen, solera light) para cada una de las 3 paradas"
    ],
    excludes: [
      "Almuerzo",
      "Servicio de toalla",
      "Desayuno",
      "Cena"
    ],
    recommendations: [
      "Cámara fotográfica",
      "Gorra",
      "Zapatos deportivos o botas",
      "Documento de identidad",
      "Lentes de sol",
      "Buen humor",
      "Bermudas",
      "Protector Solar",
      "Snack",
      "Bebida de su Preferencia"
    ],
    itinerary: [
      {
        time: "1:00 PM",
        activity: "Salida del tour",
        location: "Punto de encuentro"
      },
      {
        time: "7:00 PM",
        activity: "Llegada y finalización",
        location: "Punto de encuentro"
      }
    ],
    whatsappMessage: "¡Hola! El tour del atardecer margariteño me parece perfecto. ¿A qué hora salen?",
    category: "panoramico"
  },
  {
    id: "vuelo-parapente-margarita",
    title: "Vuelo en Parapente Margarita",
    description: "Experiencia única e inolvidable volando en parapente sobre la hermosa Isla de Margarita.",
    fullDescription: "Vive la experiencia más emocionante de tu vida volando en parapente sobre los paisajes más hermosos de Margarita. Disfruta de vistas panorámicas únicas mientras te deslizas suavemente por el cielo caribeño, sintiendo la libertad y la adrenalina en una actividad segura y profesional.",
    image: "https://res.cloudinary.com/dhzl31kb8/image/upload/v1743265216/IMG_0303_daewt4_d1xkdz.jpg",
    gallery: [
      "https://res.cloudinary.com/dhzl31kb8/image/upload/v1743265216/IMG_0303_daewt4_d1xkdz.jpg"
    ],
    price: "140 USD",
    duration: "30 minutos aproximadamente (15 minutos de vuelo)",
    groupSize: "Min: 1 personas - Max: 20",
    includes: [
      "Parapente"
    ],
    excludes: [
      "Servicios adicionales",
      "Traslados"
    ],
    recommendations: [
      "Zapatos deportivos o botas",
      "Protector Solar"
    ],
    itinerary: [
      {
        time: "Variable",
        activity: "Vuelo en parapente",
        location: "Zona de vuelo autorizada"
      }
    ],
    whatsappMessage: "¡Hola! El vuelo en parapente me emociona mucho. ¿Qué experiencia se necesita?",
    category: "aventura"
  },
  {
    id: "day-pass-agua-dorada",
    title: "Day Pass Agua Dorada",
    description: "Disfruta de un día completo en las instalaciones del exclusivo hotel Agua Dorada.",
    fullDescription: "Relájate y disfruta de un día perfecto en las instalaciones del exclusivo hotel Agua Dorada. Incluye acceso a piscinas, áreas de descanso, servicios de playa y la comodidad de instalaciones de primera clase con bebidas alcohólicas nacionales incluidas.",
    image: "https://res.cloudinary.com/dhzl31kb8/image/upload/v1743265216/IMG_0303_daewt4_d1xkdz.jpg",
    gallery: [
      "https://res.cloudinary.com/dhzl31kb8/image/upload/v1743265216/IMG_0303_daewt4_d1xkdz.jpg"
    ],
    price: "80 USD",
    duration: "Full day",
    groupSize: "Min: 1 personas - Max: 20",
    includes: [
      "Sebidas alcohólicas nacionales",
      "Snacks",
      "Almuerzo",
      "Cóctel de bienvenida",
      "Club de playa"
    ],
    excludes: [
      "Servicio de toalla",
      "Traslados",
      "Habitación",
      "Desayuno"
    ],
    recommendations: [
      "Protector solar",
      "Cámara fotográfica",
      "Shorts",
      "Documento de identidad",
      "Lentes de sol",
      "Buen humor",
      "Traje de Baño",
      "Toallas",
      "Protector contra agua para celulares",
      "Ropa de secado rápido"
    ],
    itinerary: [
      {
        time: "10:00 AM",
        activity: "Check-in y bienvenida",
        location: "Hotel Agua Dorada"
      },
      {
        time: "6:00 PM",
        activity: "Check-out",
        location: "Hotel Agua Dorada"
      }
    ],
    whatsappMessage: "¡Hola! Me interesa el Day Pass en Agua Dorada. ¿Qué incluye exactamente?",
    category: "relajacion"
  },
  {
    id: "full-day-coche-infinito",
    title: "Full day Coche - Infinito",
    description: "Experiencia completa en la Isla de Coche con todas las comodidades incluidas para un día perfecto.",
    fullDescription: "Disfruta de un día completo en la hermosa Isla de Coche, conocida por sus playas de arena blanca y aguas cristalinas. Este tour todo incluido te ofrece transporte marítimo, almuerzo buffet, bebidas, actividades acuáticas y tiempo libre en playas paradisíacas.",
    image: "https://res.cloudinary.com/dhzl31kb8/image/upload/v1743265216/IMG_0303_daewt4_d1xkdz.jpg",
    gallery: [
      "https://res.cloudinary.com/dhzl31kb8/image/upload/v1743265216/IMG_0303_daewt4_d1xkdz.jpg"
    ],
    price: "123.75 USD",
    duration: "9:00 a. m. - 4:00 p. m",
    groupSize: "Min: 01 personas - Max: 20",
    includes: [
      "Almuerzo tipo buffet",
      "Snacks",
      "Animación",
      "Servicios terrestres",
      "Club de playa",
      "Snacks media tarde",
      "Bebidas nacionales alcohólicas y no alcohólicas",
      "1 Excursión",
      "TRASPORTE MARÍTIMO"
    ],
    excludes: [
      "Impuestos",
      "Impuesto de entrada al Parque"
    ],
    recommendations: [
      "Toallas",
      "Gorra",
      "Sandalias",
      "Documento de identidad",
      "Lentes de sol",
      "Protector Solar",
      "Traje de Baño",
      "Ropa de secado rapido"
    ],
    itinerary: [
      {
        time: "9:00 AM",
        activity: "Salida desde Punta de Piedras",
        location: "Punta de Piedras"
      },
      {
        time: "4:00 PM",
        activity: "Regreso a Punta de Piedras",
        location: "Punta de Piedras"
      }
    ],
    whatsappMessage: "¡Hola! Me interesa el Full Day a Coche. ¿Qué incluye exactamente?",
    category: "acuatico"
  },
  {
    id: "aventura-pampatar",
    title: "Aventura en Pampatar",
    description: "Exploración emocionante de los alrededores de Pampatar con actividades de ecoturismo.",
    fullDescription: "Vive una aventura emocionante explorando los alrededores de Pampatar. Este tour de ecoturismo te llevará por senderos naturales, miradores panorámicos y áreas de observación de flora y fauna silvestre, perfecto para conectar con la naturaleza de Margarita.",
    image: "https://res.cloudinary.com/dhzl31kb8/image/upload/v1743265216/IMG_0303_daewt4_d1xkdz.jpg",
    gallery: [
      "https://res.cloudinary.com/dhzl31kb8/image/upload/v1743265216/IMG_0303_daewt4_d1xkdz.jpg"
    ],
    price: "50 USD",
    duration: "3 horas",
    groupSize: "Min: 01 personas - Max: 20",
    includes: [
      "Equipo de seguridad",
      "Hidratación"
    ],
    excludes: [
      "Refrigerio"
    ],
    recommendations: [],
    itinerary: [
      {
        time: "9:30 AM",
        activity: "Punto de encuentro en hotel Venetur",
        location: "hotel Venetur"
      },
      {
        time: "2:30 PM",
        activity: "Finalización del tour",
        location: "hotel Venetur"
      }
    ],
    whatsappMessage: "¡Hola! Me interesa la Aventura en Pampatar. ¿Qué incluye el tour?",
    category: "aventura"
  },
  {
    id: "costa-caribe-pool-day",
    title: "Costa Caribe Pool Day",
    description: "Disfruta de un día completo en las instalaciones del hotel Costa Caribe con la piscina más grande de Margarita.",
    fullDescription: "Relájate y disfruta de un día perfecto en las instalaciones del hotel Costa Caribe, que cuenta con la piscina más grande de la isla de Margarita con Jacuzzi de agua salada. Incluye actividades de entretenimiento, kids club y música en vivo.",
    image: "https://res.cloudinary.com/dhzl31kb8/image/upload/v1743265216/IMG_0303_daewt4_d1xkdz.jpg",
    gallery: [
      "https://res.cloudinary.com/dhzl31kb8/image/upload/v1743265216/IMG_0303_daewt4_d1xkdz.jpg"
    ],
    price: "70 USD",
    duration: "Check-in: 10:00 a. m. Check-out: 06:00 p. m",
    groupSize: "Min: 1 personas - Max: 50",
    includes: [
      "Toldos y sillas en la playa",
      "Sala de juegos",
      "Snacks media tarde",
      "Piscina",
      "Almuerzos",
      "snack a media tarde",
      "bebidas alcohólicas y no alcohólicas nacionales",
      "actividades de entretenimiento diurno",
      "club de playa",
      "piscina más GRANDE de la isla de Margarita con Jacuzzi (agua salada)",
      "wifi en las áreas comunes",
      "kids club",
      "sala de juegos",
      "música"
    ],
    excludes: [
      "Cena",
      "Música en vivo"
    ],
    recommendations: [
      "Gorra",
      "Bolsa plástica",
      "Binoculares",
      "Traje de Baño"
    ],
    itinerary: [
      {
        time: "10:00 AM",
        activity: "Check-in",
        location: "Hotel Costa Caribe"
      },
      {
        time: "6:00 PM",
        activity: "Check-out",
        location: "Hotel Costa Caribe"
      }
    ],
    whatsappMessage: "¡Hola! Me interesa el Pool Day en Costa Caribe. ¿Qué incluye exactamente?",
    category: "relajacion"
  },
  {
    id: "day-pass-sunsol-unik",
    title: "Day Pass Sunsol Unik",
    description: "Disfruta de un día completo en las instalaciones del exclusivo hotel Sunsol Unik.",
    fullDescription: "Relájate y disfruta de un día perfecto en las instalaciones del exclusivo hotel Sunsol Unik. Incluye acceso a piscinas, áreas de descanso, sala de juegos con mesas de ping-pong, pool, futbolito y billar, parque infantil y animación.",
    image: "https://res.cloudinary.com/dhzl31kb8/image/upload/v1743265216/IMG_0303_daewt4_d1xkdz.jpg",
    gallery: [
      "https://res.cloudinary.com/dhzl31kb8/image/upload/v1743265216/IMG_0303_daewt4_d1xkdz.jpg"
    ],
    price: "136 USD",
    duration: "Entrada: 10:30 am. Salida: 5:30 pm",
    groupSize: "Min: 1 personas - Max: 100",
    includes: [
      "Snacks",
      "Bar",
      "Acceso a nuestra majestuosa piscina",
      "Sala de juegos: Mesas de ping-pong, mesas de pool, futbolito y billar",
      "Parque infantil",
      "Animación",
      "recreación"
    ],
    excludes: [
      "Servicio de toalla",
      "Masajes"
    ],
    recommendations: [
      "Protector solar",
      "Sandalias",
      "Medicamentos de uso personal"
    ],
    itinerary: [
      {
        time: "10:30 AM",
        activity: "Entrada",
        location: "Hotel Sunsol Unik"
      },
      {
        time: "5:30 PM",
        activity: "Salida",
        location: "Hotel Sunsol Unik"
      }
    ],
    whatsappMessage: "¡Hola! Me interesa el Day Pass en Sunsol Unik. ¿Qué incluye exactamente?",
    category: "relajacion"
  },
  {
    id: "full-day-cubagua-lodge",
    title: "Full Day Cubagua Lodge",
    description: "Experiencia completa en la histórica Isla de Cubagua con todas las comodidades incluidas para un día perfecto.",
    fullDescription: "Disfruta de un día completo en la hermosa Isla de Cubagua, conocida por su rica historia perlífera y aguas cristalinas. Este tour todo incluido te ofrece transporte marítimo, almuerzo, bebidas, actividades acuáticas y tiempo libre en playas paradisíacas.",
    image: "https://res.cloudinary.com/dhzl31kb8/image/upload/v1743265216/IMG_0303_daewt4_d1xkdz.jpg",
    gallery: [
      "https://res.cloudinary.com/dhzl31kb8/image/upload/v1743265216/IMG_0303_daewt4_d1xkdz.jpg"
    ],
    price: "186.25 USD",
    duration: "Recogida: 7:30 am. Zarpe salida: 9:00 hrs. Zarpe retorno: 15:00 hrs",
    groupSize: "Min: 1 personas - Max: 30",
    includes: [
      "Snacks",
      "Almuerzo",
      "Paseo en catamarán",
      "Uso de Kayac",
      "Impuestos",
      "Traslados",
      "Bar de Playa",
      "Bebida no alcoholica",
      "Bebidas alcoholicas",
      "TOLDO SILLA Y MESA",
      "Atención personalizada"
    ],
    excludes: [
      "Impuestos",
      "Servicio de toalla",
      "Desayuno"
    ],
    recommendations: [
      "Protector solar",
      "Medicamentos de uso personal",
      "Toallas"
    ],
    itinerary: [
      {
        time: "7:30 AM",
        activity: "Recogida",
        location: "Muelle de Punta de Piedras"
      },
      {
        time: "9:00 AM",
        activity: "Zarpe salida",
        location: "Muelle de Punta de Piedras"
      },
      {
        time: "3:00 PM",
        activity: "Zarpe retorno",
        location: "Isla de Cubagua"
      }
    ],
    whatsappMessage: "¡Hola! Me interesa el Full Day a Cubagua Lodge. ¿Qué incluye exactamente?",
    category: "acuatico"
  },
  {
    id: "day-pass-sunsol-ecoland",
    title: "Day Pass Sunsol Ecoland",
    description: "Disfruta de un día completo en las instalaciones del exclusivo hotel Sunsol Ecoland.",
    fullDescription: "Relájate y disfruta de un día perfecto en las instalaciones del exclusivo hotel Sunsol Ecoland. Incluye acceso a piscinas, áreas de descanso, uso de kayac, paseo en pedal boat, paseo en bicicleta, mini golfito, parque infantil y animación.",
    image: "https://res.cloudinary.com/dhzl31kb8/image/upload/v1743265216/IMG_0303_daewt4_d1xkdz.jpg",
    gallery: [
      "https://res.cloudinary.com/dhzl31kb8/image/upload/v1743265216/IMG_0303_daewt4_d1xkdz.jpg"
    ],
    price: "144.00 USD",
    duration: "Entrada: 10:30 am. Salida: 5:30 pm",
    groupSize: "Min: 1 personas - Max: 100",
    includes: [
      "Bebidas No Alcohólicas Nacionales",
      "Bebidas Alcohólicas Nacionales",
      "Almuerzo Tipo Buffet",
      "Snacks",
      "Uso De Kayac",
      "Disfrute De Las Instalaciones",
      "Paseo En Pedal Boat",
      "Paseo En Bicicleta",
      "Mini Golfito",
      "Parque Infantil",
      "Animación"
    ],
    excludes: [
      "Servicio De Toalla",
      "Masajes"
    ],
    recommendations: [
      "Traje De Baño",
      "Protector Solar",
      "Toallas",
      "Cámara Fotográfica",
      "Gorra",
      "Sandalias",
      "Lentes De Sol"
    ],
    itinerary: [
      {
        time: "10:30 AM",
        activity: "Entrada",
        location: "Hotel Sunsol Ecoland"
      },
      {
        time: "5:30 PM",
        activity: "Salida",
        location: "Hotel Sunsol Ecoland"
      }
    ],
    whatsappMessage: "¡Hola! Me interesa el Day Pass en Sunsol Ecoland. ¿Qué incluye exactamente?",
    category: "relajacion"
  },
  {
    id: "submarinismo-los-frailes",
    title: "Submarinismo Los Frailes",
    description: "Aventura submarina en uno de los mejores spots de buceo de Venezuela, el Parque Nacional Los Frailes.",
    fullDescription: "Explora las aguas cristalinas del Parque Nacional Los Frailes, considerado uno de los mejores destinos de buceo en Venezuela. Descubre la rica vida marina, corales coloridos y peces tropicales en este santuario natural protegido. Una experiencia perfecta para amantes del mundo submarino.",
    image: "https://res.cloudinary.com/dhzl31kb8/image/upload/v1743265216/IMG_0303_daewt4_d1xkdz.jpg",
    gallery: [
      "https://res.cloudinary.com/dhzl31kb8/image/upload/v1743265216/IMG_0303_daewt4_d1xkdz.jpg"
    ],
    price: "240 USD",
    duration: "Retorno: 3:30 pm aproximadamente",
    groupSize: "Min: 1 personas - Max: 12",
    includes: [
      "Bebidas no alcohólicas nacionales",
      "Equipo de snorkel",
      "clase instructiva de subamarinismo",
      "comunicación bajo el agua",
      "equipo completo de buceo",
      "dos inmersiones de 40 min aproximadamente en dos lugares diferentes",
      "rico almuerzo ( pescado frito, arroz, ensalada coleslaw )"
    ],
    excludes: [
      "Snacks"
    ],
    recommendations: [
      "Protector solar",
      "Toallas"
    ],
    itinerary: [
      {
        time: "8:00 AM",
        activity: "Salida desde Playa El Tirano",
        location: "Playa El Tirano"
      },
      {
        time: "3:30 PM",
        activity: "Retorno a Playa El Tirano",
        location: "Playa El Tirano"
      }
    ],
    whatsappMessage: "¡Hola! Me fascina el submarinismo. ¿Los Frailes es bueno para principiantes?",
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
    price: "120 USD",
    duration: "Salida: 8:30 / 9:00 am aproximadamente. Llegada: 7:00 pm aproximadamente",
    groupSize: "Min: 01 personas - Max: 20",
    includes: [
      "Almuerzo",
      "City Tour",
      "empanadas",
      "ostras",
      "hidratación a base de Agua",
      "refresco",
      "Las Cervezas"
    ],
    excludes: [
      "Cena"
    ],
    recommendations: [
      "Protector solar",
      "Bolsa plástica",
      "Botella plástica para el agua"
    ],
    itinerary: [
      {
        time: "8:30 AM",
        activity: "Salida del tour",
        location: "Punto de encuentro"
      },
      {
        time: "7:00 PM",
        activity: "Llegada y finalización",
        location: "Punto de encuentro"
      }
    ],
    whatsappMessage: "¡Hola! Quiero hacer el Full Day por toda Margarita. ¿Qué incluye exactamente?",
    category: "panoramico"
  },
  {
    id: "full-day-hotel-margarita-village",
    title: "Full Day Hotel Margarita Village",
    description: "Disfruta de un día completo en las instalaciones del exclusivo hotel Margarita Village.",
    fullDescription: "Relájate y disfruta de un día perfecto en las instalaciones del exclusivo hotel Margarita Village. Incluye acceso a piscinas con tobogán, áreas de descanso, sala de juegos, parque infantil con cama elástica e inflables, y actividades recreativas para adultos y niños.",
    image: "https://res.cloudinary.com/dhzl31kb8/image/upload/v1743265216/IMG_0303_daewt4_d1xkdz.jpg",
    gallery: [
      "https://res.cloudinary.com/dhzl31kb8/image/upload/v1743265216/IMG_0303_daewt4_d1xkdz.jpg"
    ],
    price: "90 USD",
    duration: "Check in: 10:00 AM. Check out: 5:00 PM",
    groupSize: "Min: 1 personas - Max: 100",
    includes: [
      "Bebidas no alcohólicas nacionales",
      "Toldos y sillas en la piscina",
      "Almuerzo",
      "Selección de bebidas alcohólicas y no alcohólicas",
      "Piscina con tobogán",
      "Sala de juegos",
      "Parque infantil, cama elástica e inflables",
      "Actividades recreativas para adultos y niños"
    ],
    excludes: [
      "Snacks",
      "Toalla de playa y piscina"
    ],
    recommendations: [
      "Traje de baño",
      "Cámara fotográfica"
    ],
    itinerary: [
      {
        time: "10:00 AM",
        activity: "Check-in",
        location: "Hotel Margarita Village"
      },
      {
        time: "5:00 PM",
        activity: "Check-out",
        location: "Hotel Margarita Village"
      }
    ],
    whatsappMessage: "¡Hola! Me interesa el Full Day en Margarita Village. ¿Qué incluye exactamente?",
    category: "relajacion"
  },
  {
    id: "jeep-safari-sin-restringa",
    title: "Jeep Safari Sin Restinga Naturaleza 4x4",
    description: "Aventura en jeep explorando la naturaleza de Margarita sin visitar La Restinga.",
    fullDescription: "Vive una aventura completa en jeep 4x4 que te llevará por los senderos naturales de Margarita, miradores panorámicos y áreas de observación de flora y fauna silvestre. Un tour perfecto que combina adrenalina, naturaleza y diversión en un vehículo todo terreno.",
    image: "https://res.cloudinary.com/dhzl31kb8/image/upload/v1743265216/IMG_0303_daewt4_d1xkdz.jpg",
    gallery: [
      "https://res.cloudinary.com/dhzl31kb8/image/upload/v1743265216/IMG_0303_daewt4_d1xkdz.jpg"
    ],
    price: "118 USD",
    duration: "Salida: 9:00 am. Regreso: 5:00 pm aproximadamente",
    groupSize: "Min: 1 personas - Max: 20",
    includes: [
      "Snacks media tarde",
      "Almuerzo en la playa",
      "Bebidas nacionales alcohólicas y no alcohólicas",
      "Vista a la montaña",
      "Atención personalizada",
      "Medidas de bioseguridad",
      "Un conductor y un guía bilingüe por unidad",
      "Snack de bienvenida",
      "Entrada a Sabores de Altura",
      "Degustación de frutas de estación"
    ],
    excludes: [
      "Alojamiento",
      "Cena",
      "Boletos"
    ],
    recommendations: [
      "Traje de baño",
      "Cámara fotográfica",
      "Lentes de sol",
      "Protector solar",
      "Shorts",
      "Bermudas",
      "Toallas",
      "Documento de identidad",
      "Repelente para mosquitos"
    ],
    itinerary: [
      {
        time: "9:00 AM",
        activity: "Salida desde hotel del cliente",
        location: "Hotel del cliente"
      },
      {
        time: "5:00 PM",
        activity: "Regreso al hotel del cliente",
        location: "Hotel del cliente"
      }
    ],
    whatsappMessage: "¡Hola! El Jeep Safari me parece increíble. ¿Incluye todas las actividades mencionadas?",
    category: "aventura"
  },
  {
    id: "nado-con-delfines-observador",
    title: "Nado con Delfines observador",
    description: "Experiencia única observando y aprendiendo sobre delfines en su hábitat natural.",
    fullDescription: "Vive una experiencia educativa y emocionante observando delfines en su hábitat natural. Esta actividad te permitirá aprender sobre el comportamiento de estos magníficos mamíferos marinos mientras disfrutas de una experiencia única y respetuosa con la naturaleza.",
    image: "https://res.cloudinary.com/dhzl31kb8/image/upload/v1743265216/IMG_0303_daewt4_d1xkdz.jpg",
    gallery: [
      "https://res.cloudinary.com/dhzl31kb8/image/upload/v1743265216/IMG_0303_daewt4_d1xkdz.jpg"
    ],
    price: "25 USD",
    duration: "Variable",
    groupSize: "Min: 1 personas - Max: 10",
    includes: [
      "Actividades recreativas"
    ],
    excludes: [
      "Desayuno",
      "TRASMPORTE IDA Y VUELTA",
      "Hidratacion"
    ],
    recommendations: [
      "Cámara fotográfica",
      "Shorts",
      "Lentes de sol",
      "Bermudas",
      "Hidratacion",
      "Protector Solar",
      "Toallas"
    ],
    itinerary: [
      {
        time: "Variable",
        activity: "Observación de delfines",
        location: "Centro de delfines"
      }
    ],
    whatsappMessage: "¡Hola! Me interesa observar delfines. ¿Podrías contarme todos los detalles?",
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
    price: "150 USD",
    duration: "Salida: 9:00 am. Regreso: 5:00 pm aproximadamente",
    groupSize: "Min: 1 personas - Max: 10",
    includes: [
      "Bebidas no alcohólicas nacionales",
      "Bebidas alcohólicas nacionales",
      "Almuerzo",
      "Transfer",
      "Entrada al parque nacional",
      "Guía",
      "Inducción"
    ],
    excludes: [
      "Desayuno",
      "Cena",
      "Alojamiento"
    ],
    recommendations: [
      "Traje de baño",
      "Protector solar",
      "Toallas",
      "Cámara fotográfica",
      "Gorra",
      "Franclas",
      "Shorts",
      "Sandalias",
      "Película fotográfica",
      "Documento de identidad"
    ],
    itinerary: [
      {
        time: "9:00 AM",
        activity: "Salida desde hotel o sitio de hospedaje",
        location: "Hotel o sitio de hospedaje"
      },
      {
        time: "5:00 PM",
        activity: "Regreso al hotel o sitio de hospedaje",
        location: "Hotel o sitio de hospedaje"
      }
    ],
    whatsappMessage: "¡Hola! El Jeep Safari Colonial me parece increíble. ¿Incluye todas las actividades mencionadas?",
    category: "aventura"
  },
  {
    id: "day-pass-sunsol-isla-caribe",
    title: "Day Pass Sunsol Isla Caribe",
    description: "Disfruta de un día completo en las instalaciones del exclusivo hotel Sunsol Isla Caribe.",
    fullDescription: "Relájate y disfruta de un día perfecto en las instalaciones del exclusivo hotel Sunsol Isla Caribe. Incluye acceso a piscinas, áreas de descanso, bebidas alcohólicas y no alcohólicas nacionales, almuerzo tipo buffet y disfrute completo de las instalaciones.",
    image: "https://res.cloudinary.com/dhzl31kb8/image/upload/v1743265216/IMG_0303_daewt4_d1xkdz.jpg",
    gallery: [
      "https://res.cloudinary.com/dhzl31kb8/image/upload/v1743265216/IMG_0303_daewt4_d1xkdz.jpg"
    ],
    price: "124 USD",
    duration: "Entrada: 10:30 AM. Salida: 5:30 PM",
    groupSize: "Min: 1 personas - Max: 100",
    includes: [
      "Bebidas no alcohólicas nacionales",
      "Snacks",
      "Bebidas alcohólicas nacionales",
      "Disfrute de las instalaciones",
      "Almuerzo tipo buffet"
    ],
    excludes: [
      "Desayuno",
      "Toalla de playa y piscina",
      "Cena",
      "Masajes",
      "Alojamiento"
    ],
    recommendations: [
      "Traje de baño",
      "Cámara fotográfica",
      "Lentes de sol",
      "Protector solar",
      "Gorra",
      "Toallas",
      "Sandalias"
    ],
    itinerary: [
      {
        time: "10:30 AM",
        activity: "Entrada",
        location: "Hotel Sunsol Isla Caribe"
      },
      {
        time: "5:30 PM",
        activity: "Salida",
        location: "Hotel Sunsol Isla Caribe"
      }
    ],
    whatsappMessage: "¡Hola! Me interesa el Day Pass en Sunsol Isla Caribe. ¿Qué incluye exactamente?",
    category: "relajacion"
  },
  {
    id: "encuentro-con-los-delfines",
    title: "Encuentro con Los Delfines",
    description: "Experiencia única e inolvidable interactuando con delfines en un ambiente controlado y seguro.",
    fullDescription: "Vive una de las experiencias más emocionantes y memorables de tu vida interactuando con delfines en un ambiente controlado y seguro. Esta actividad única te permitirá conocer de cerca a estos magníficos mamíferos marinos mientras aprendes sobre su comportamiento y conservación.",
    image: "https://res.cloudinary.com/dhzl31kb8/image/upload/v1743265216/IMG_0303_daewt4_d1xkdz.jpg",
    gallery: [
      "https://res.cloudinary.com/dhzl31kb8/image/upload/v1743265216/IMG_0303_daewt4_d1xkdz.jpg"
    ],
    price: "136 USD",
    duration: "12 minutos por grupo",
    groupSize: "Min: 1 personas - Max: 12",
    includes: [
      "Inducción",
      "Animación"
    ],
    excludes: [
      "Comidas",
      "Hidratación"
    ],
    recommendations: [
      "Protector solar",
      "Cámara fotográfica",
      "Zapatos deportivos o botas"
    ],
    itinerary: [
      {
        time: "Variable",
        activity: "Encuentro con delfines",
        location: "Centro de delfines"
      }
    ],
    whatsappMessage: "¡Hola! El encuentro con delfines es mi sueño. ¿Podrías contarme todos los detalles?",
    category: "acuatico"
  },
  {
    id: "full-day-isla-cubagua-ilc",
    title: "Full day Isla de Cubagua ILC",
    description: "Experiencia completa en la histórica Isla de Cubagua con todas las comodidades incluidas para un día perfecto.",
    fullDescription: "Disfruta de un día completo en la hermosa Isla de Cubagua, conocida por su rica historia perlífera y aguas cristalinas. Este tour todo incluido te ofrece transporte marítimo, snacks, bebidas, actividades acuáticas como snorkel y tiempo libre en playas paradisíacas.",
    image: "https://res.cloudinary.com/dhzl31kb8/image/upload/v1743265216/IMG_0303_daewt4_d1xkdz.jpg",
    gallery: [
      "https://res.cloudinary.com/dhzl31kb8/image/upload/v1743265216/IMG_0303_daewt4_d1xkdz.jpg"
    ],
    price: "126.25 USD",
    duration: "Recogida: 7:30 am aproximadamente. Retorno: 3:00 p.m",
    groupSize: "Min: 1 personas - Max: 120",
    includes: [
      "Bebidas no alcohólicas nacionales",
      "Snacks",
      "Barroterapia",
      "Chalecos salvavidas",
      "SNACK DE FRUTAS"
    ],
    excludes: [
      "Cena"
    ],
    recommendations: [
      "Traje de baño",
      "Cámara fotográfica",
      "Shorts",
      "Película fotográfica",
      "Buen humor"
    ],
    itinerary: [
      {
        time: "7:30 AM",
        activity: "Recogida",
        location: "Muelle de Punta de Piedras"
      },
      {
        time: "3:00 PM",
        activity: "Retorno",
        location: "Muelle de Punta de Piedras"
      }
    ],
    whatsappMessage: "¡Hola! Me interesa el Full Day a Cubagua ILC. ¿Qué incluye exactamente?",
    category: "acuatico"
  }
];

