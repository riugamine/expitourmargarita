import { TourService, HostProfile } from '@/types';

/**
 * Perfil del anfitrión/guía turístico
 */
export const hostProfile: HostProfile = {
  name: "Paul Cortesía",
  title: "Asesor Turístico",
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
    fullDescription: "Vive una experiencia llena de adrenalina explorando las famosas Salinas de Pampatar en cuatrimoto. Este tour de aventura te llevará por paisajes únicos, formaciones salinas naturales y terrenos diversos mientras aprendes sobre la historia y la importancia de la producción de sal en la región.",
    image: "/aventuras/TOUR SALINAS DE PAMPATAR CUATRIMOTO/IMG_3085.webp",
    gallery: [
      "/aventuras/TOUR SALINAS DE PAMPATAR CUATRIMOTO/IMG_3085.webp",
      "/aventuras/TOUR SALINAS DE PAMPATAR CUATRIMOTO/IMG_3086.webp",
      "/aventuras/TOUR SALINAS DE PAMPATAR CUATRIMOTO/221659c8-0cf3-4a74-b711-a424423a1bea.webp",
      "/aventuras/TOUR SALINAS DE PAMPATAR CUATRIMOTO/67eb9523-498f-4829-b548-057679de003f.webp"
    ],
    price: "80 USD",
    duration: "Variable",
    groupSize: "Min: 1 personas - Max: 20",
    includes: [
      "Guía",
      "Hidratación",
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
    image: "/aventuras/TOUR-MARGARITENO-ATARDECER/IMG_2593 2.webp",
    gallery: [
      "/aventuras/TOUR-MARGARITENO-ATARDECER/IMG_2552.webp",
      "/aventuras/TOUR-MARGARITENO-ATARDECER/IMG_2574-2.webp",
      "/aventuras/TOUR-MARGARITENO-ATARDECER/IMG_2593-2.webp",
      "/aventuras/TOUR-MARGARITENO-ATARDECER/IMG_3639.webp"
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
    category: "panoramico",
    stops: [
      "Visitar la Virgen del Valle",
      "Parada de hidratación en Playa El Ángel",
      "Ser parte de la Historia en el Castillo San Carlos de Borromeo",
      "Disfrutar de una Polar bien fría en Brasas",
      "Subir al faro Punta Ballena",
      "Conocer la Salina de Pampatar",
      "Visitar un Bar clandestino (@casapampatar)"
    ]
  },
  {
    id: "vuelo-parapente-margarita",
    title: "Vuelo en Parapente Margarita",
    description: "Experiencia única e inolvidable volando en parapente sobre la hermosa Isla de Margarita.",
    fullDescription: "Vive la experiencia más emocionante de tu vida volando en parapente sobre los paisajes más hermosos de Margarita. Disfruta de vistas panorámicas únicas mientras te deslizas suavemente por el cielo caribeño, sintiendo la libertad y la adrenalina en una actividad segura y profesional.",
    image: "/aventuras/VUELO EN PARAPENTE EN MARGARITA/ParapenteMargarita.webp ",
    gallery: [
      "/aventuras/VUELO EN PARAPENTE EN MARGARITA/ParapenteMargarita.webp",
      "/aventuras/VUELO EN PARAPENTE EN MARGARITA/IMG_3061.webp",
      "/aventuras/VUELO EN PARAPENTE EN MARGARITA/IMG_3062.webp"
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
    image: "/aventuras/DAY PASS AGUA DORADA/IMG_3087.webp",
    gallery: [
      "/aventuras/DAY PASS AGUA DORADA/IMG_3087.webp",
      "/aventuras/DAY PASS AGUA DORADA/IMG_3088.webp",
      "/aventuras/DAY PASS AGUA DORADA/IMG_3089.webp",
      "/aventuras/DAY PASS AGUA DORADA/IMG_3090.webp",
      "/aventuras/DAY PASS AGUA DORADA/IMG_3091.webp",
      "/aventuras/DAY PASS AGUA DORADA/IMG_3092.webp"
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
    image: "/aventuras/FULL DAY COCHE INFINITO/coche.webp",
    gallery: [
      "/aventuras/FULL DAY COCHE INFINITO/coche.webp",
      "/aventuras/FULL DAY COCHE INFINITO/coche2.webp",
      "/aventuras/FULL DAY COCHE INFINITO/coche3.webp"
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
    image: "/aventuras/AVENTURA EN PAMPATAR/foto2-lista.webp",
    gallery: [
      "/aventuras/AVENTURA EN PAMPATAR/foto2-lista.webp",
      "/aventuras/AVENTURA EN PAMPATAR/483.webp",
      "/aventuras/AVENTURA EN PAMPATAR/58.webp",
      "/aventuras/AVENTURA EN PAMPATAR/87.webp"
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
    category: "aventura",
    stops: [
      "Aventura en bicicletas eléctricas por Pampatar",
      "Visitar el casco histórico",
      "Dirigirse a las salinas de Pampatar",
      "Finalizar en @salmapata"
    ]
  },
  {
    id: "costa-caribe-pool-day",
    title: "Costa Caribe Pool Day",
    description: "Disfruta de un día completo en las instalaciones del hotel Costa Caribe con la piscina más grande de Margarita.",
    fullDescription: "Relájate y disfruta de un día perfecto en las instalaciones del hotel Costa Caribe, que cuenta con la piscina más grande de la isla de Margarita con Jacuzzi de agua salada. Incluye actividades de entretenimiento, kids club y música en vivo.",
    image: "/aventuras/COSTA CARIBE POOL DAY/costa-caribe-beach-hotel.webp",
    gallery: [
      "/aventuras/COSTA CARIBE POOL DAY/costa-caribe-beach-hotel.webp",
      "/aventuras/COSTA CARIBE POOL DAY/IMG_4830.webp",
      "/aventuras/COSTA CARIBE POOL DAY/IMG_4836.webp",
      "/aventuras/COSTA CARIBE POOL DAY/IMG_4837.webp",
      "/aventuras/COSTA CARIBE POOL DAY/IMG_4877.webp",
      "/aventuras/COSTA CARIBE POOL DAY/IMG_4948.webp",
      "/aventuras/COSTA CARIBE POOL DAY/IMG_4982.webp",
      "/aventuras/COSTA CARIBE POOL DAY/IMG_4984.webp"
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
    image: "/aventuras/DAY PASS SUNSOL UNIK/IMG_3132.webp",
    gallery: [
      "/aventuras/DAY PASS SUNSOL UNIK/IMG_3132.webp",
      "/aventuras/DAY PASS SUNSOL UNIK/IMG_3133.webp",
      "/aventuras/DAY PASS SUNSOL UNIK/IMG_3134.webp",
      "/aventuras/DAY PASS SUNSOL UNIK/IMG_3135.webp",
      "/aventuras/DAY PASS SUNSOL UNIK/IMG_3136.webp",
      "/aventuras/DAY PASS SUNSOL UNIK/IMG_3137.webp",
      "/aventuras/DAY PASS SUNSOL UNIK/IMG_3138.webp",
      "/aventuras/DAY PASS SUNSOL UNIK/IMG_3139.webp",
      "/aventuras/DAY PASS SUNSOL UNIK/IMG_3140.webp"
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
    image: "/aventuras/FULL DAY CUBAGUA LODGE/1.webp",
    gallery: [
      "/aventuras/FULL DAY CUBAGUA LODGE/2.webp",
      "/aventuras/FULL DAY CUBAGUA LODGE/3.webp",
      "/aventuras/FULL DAY CUBAGUA LODGE/4.webp",
      "/aventuras/FULL DAY CUBAGUA LODGE/5.webp",
      "/aventuras/FULL DAY CUBAGUA LODGE/6.webp"
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
    image: "/aventuras/DAY PASS SUNSOL ECOLAND/IMG_6725.webp",
    gallery: [
      "/aventuras/DAY PASS SUNSOL ECOLAND/IMG_6725.webp",
      "/aventuras/DAY PASS SUNSOL ECOLAND/IMG_3161 2.webp",
      "/aventuras/DAY PASS SUNSOL ECOLAND/IMG_3162.webp",
      "/aventuras/DAY PASS SUNSOL ECOLAND/IMG_3163.webp",
      "/aventuras/DAY PASS SUNSOL ECOLAND/IMG_3164.webp",
      "/aventuras/DAY PASS SUNSOL ECOLAND/IMG_3165.webp",
      "/aventuras/DAY PASS SUNSOL ECOLAND/IMG_3166.webp",
      "/aventuras/DAY PASS SUNSOL ECOLAND/IMG_3168.webp",
      "/aventuras/DAY PASS SUNSOL ECOLAND/IMG_3169.webp",
      "/aventuras/DAY PASS SUNSOL ECOLAND/IMG_3170.webp"
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
    image: "/aventuras/SUBMARINISMO LOS FRAILES/Tour-Buceo-por-Los-Frailes-Excursiones-Isla-de-Margarita-1.webp",
    gallery: [
      "/aventuras/SUBMARINISMO LOS FRAILES/Tour-Buceo-por-Los-Frailes-Excursiones-Isla-de-Margarita-1.webp",
      "/aventuras/SUBMARINISMO LOS FRAILES/buceo_en_pareja.webp",
      "/aventuras/SUBMARINISMO LOS FRAILES/ficha_tour.webp",
      "/aventuras/SUBMARINISMO LOS FRAILES/images.webp",
      "/aventuras/SUBMARINISMO LOS FRAILES/PESCA-SKULL.webp"
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
    image: "/aventuras/FULL-DAY-TOUR-MARGARITEÑO/1.webp",
    gallery: [
      "/aventuras/FULL-DAY-TOUR-MARGARITEÑO/1.webp",
      "/aventuras/FULL-DAY-TOUR-MARGARITEÑO/2.webp",
      "/aventuras/FULL-DAY-TOUR-MARGARITEÑO/3.webp",
      "/aventuras/FULL-DAY-TOUR-MARGARITEÑO/4.webp",
      "/aventuras/FULL-DAY-TOUR-MARGARITEÑO/5.webp",
      "/aventuras/FULL-DAY-TOUR-MARGARITEÑO/6.webp"
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
    category: "panoramico",
    stops: [
      "Visitar la Virgen del Valle",
      "Comer Empanadas en el Mercado de Conejeros",
      "Ser parte de la Historia en el Castillo de PAMPATAR",
      "Subir al Faro Punta Ballenas",
      "Conocer la Salina de Pampatar",
      "Almorzar en la playa de la Bahía de Pampatar",
      "Tiempo de Playa",
      "Conocer La Tienda de Souvenirs de la Casa Pampatar y una sorpresa más!",
      "Ver la puesta del sol en Juan Griego y disfrutar de un compartir crepuscular!"
    ]
  },
  {
    id: "full-day-hotel-margarita-village",
    title: "Full Day Hotel Margarita Village",
    description: "Disfruta de un día completo en las instalaciones del exclusivo hotel Margarita Village.",
    fullDescription: "Relájate y disfruta de un día perfecto en las instalaciones del exclusivo hotel Margarita Village. Incluye acceso a piscinas con tobogán, áreas de descanso, sala de juegos, parque infantil con cama elástica e inflables, y actividades recreativas para adultos y niños.",
    image: "/aventuras/FULL DAY HOTEL MARGARITA VILLAGE/IMG_3117.jpg",
    gallery: [
      "/aventuras/FULL DAY HOTEL MARGARITA VILLAGE/IMG_3117.jpg",
      "/aventuras/FULL DAY HOTEL MARGARITA VILLAGE/IMG_3118.jpg",
      "/aventuras/FULL DAY HOTEL MARGARITA VILLAGE/IMG_3119.jpg",
      "/aventuras/FULL DAY HOTEL MARGARITA VILLAGE/IMG_3120.jpg",
      "/aventuras/FULL DAY HOTEL MARGARITA VILLAGE/IMG_3121.jpg",
      "/aventuras/FULL DAY HOTEL MARGARITA VILLAGE/IMG_3122.jpg",
      "/aventuras/FULL DAY HOTEL MARGARITA VILLAGE/IMG_3123.jpg",
      "/aventuras/FULL DAY HOTEL MARGARITA VILLAGE/IMG_4488.HEIC",
      "/aventuras/FULL DAY HOTEL MARGARITA VILLAGE/IMG_4498.HEIC",
      "/aventuras/FULL DAY HOTEL MARGARITA VILLAGE/IMG_4502.HEIC"
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
    image: "/aventuras/JEEP SAFARI SIN RESTINGA NATURALEZA 4X4/jeep.webp",
    gallery: [
      "/aventuras/JEEP SAFARI SIN RESTINGA NATURALEZA 4X4/jeep.webp",
      "/aventuras/JEEP SAFARI SIN RESTINGA NATURALEZA 4X4/life-s-reach-tours-jeep.webp",
      "/aventuras/JEEP SAFARI SIN RESTINGA NATURALEZA 4X4/descarga.webp",
      "/aventuras/JEEP SAFARI SIN RESTINGA NATURALEZA 4X4/descarga (1).webp"
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
    category: "aventura",
    stops: [
      "Parque Nacional Cerro Copey. La Sierra",
      "Sabores de Altura. Senderismo suave. Degustación de frutas de estación. Mirador",
      "Boca Chica. Laguna y acantilado. Zona xerófila. Off Road",
      "Off Road para alcanzar La Carmela playa virgen. Tiempo para caminar, bañarse y disfrutar de una playa virgen",
      "La Pared. Almuerzo y tiempo de playa con todos los servicios",
      "Parada técnica en tienda de conveniencia en La Restinga para uso de sanitarios y refrigerios"
    ]
  },
  {
    id: "nado-con-delfines-observador",
    title: "Nado con Delfines observador",
    description: "Experiencia única observando y aprendiendo sobre delfines en su hábitat natural.",
    fullDescription: "Vive una experiencia educativa y emocionante observando delfines en su hábitat natural. Esta actividad te permitirá aprender sobre el comportamiento de estos magníficos mamíferos marinos mientras disfrutas de una experiencia única y respetuosa con la naturaleza.",
    image: "/aventuras/NADO CON DELFINES OBSERVADOR/unnamed (7).webp",
    gallery: [
      "/aventuras/NADO CON DELFINES OBSERVADOR/unnamed (7).webp",
      "/aventuras/NADO CON DELFINES OBSERVADOR/unnamed (8).webp",
      "/aventuras/NADO CON DELFINES OBSERVADOR/unnamed (9).webp"
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
    image: "/aventuras/JEEP SAFARI COLONIAL Y RESTINGA/jeep-safari-tour-de-playas-isla-margarita-9-1.webp",
    gallery: [
      "/aventuras/JEEP SAFARI COLONIAL Y RESTINGA/jeep-safari-tour-de-playas-isla-margarita-9-1.webp",
      "/aventuras/JEEP SAFARI COLONIAL Y RESTINGA/14.webp",
      "/aventuras/JEEP SAFARI COLONIAL Y RESTINGA/20190728-095504.webp",
      "/aventuras/JEEP SAFARI COLONIAL Y RESTINGA/IMG_1874.webp",
      "/aventuras/JEEP SAFARI COLONIAL Y RESTINGA/IMG_1880.webp",
      "/aventuras/JEEP SAFARI COLONIAL Y RESTINGA/IMG_1881.webp",
      "/aventuras/JEEP SAFARI COLONIAL Y RESTINGA/IMG_1883.webp"
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
    category: "aventura",
    stops: [
      "La Asunción, capital del estado. Briefing de bienvenida",
      "Castillo Santa Rosa",
      "El Valle del Espíritu Santo. Visita a la Basílica y alrededores",
      "Laguna de la Restinga. Paseo en bote (30 MIN). Se incluye: Una empanada y jugo de papelón P/P",
      "La Pared. Almuerzo y tiempo de playa con todos los servicios",
      "Off Road para alcanzar La Carmela playa virgen",
      "Tiempo para caminar, bañarse y disfrutar de una playa virgen",
      "Parada técnica en tienda de conveniencia en La Restinga"
    ]
  },
  {
    id: "day-pass-sunsol-isla-caribe",
    title: "Day Pass Sunsol Isla Caribe",
    description: "Disfruta de un día completo en las instalaciones del exclusivo hotel Sunsol Isla Caribe.",
    fullDescription: "Relájate y disfruta de un día perfecto en las instalaciones del exclusivo hotel Sunsol Isla Caribe. Incluye acceso a piscinas, áreas de descanso, bebidas alcohólicas y no alcohólicas nacionales, almuerzo tipo buffet y disfrute completo de las instalaciones.",
    image: "/aventuras/DAY PASS SUN SOL ISLA CARIBE/IMG_3101.webp",
    gallery: [
      "/aventuras/DAY PASS SUN SOL ISLA CARIBE/IMG_3101.webp",
      "/aventuras/DAY PASS SUN SOL ISLA CARIBE/IMG_3102.webp",
      "/aventuras/DAY PASS SUN SOL ISLA CARIBE/IMG_3103.webp",
      "/aventuras/DAY PASS SUN SOL ISLA CARIBE/IMG_3104.webp",
      "/aventuras/DAY PASS SUN SOL ISLA CARIBE/IMG_3105.webp",
      "/aventuras/DAY PASS SUN SOL ISLA CARIBE/IMG_3106.webp",
      "/aventuras/DAY PASS SUN SOL ISLA CARIBE/IMG_3107.webp",
      "/aventuras/DAY PASS SUN SOL ISLA CARIBE/IMG_3108.webp",
      "/aventuras/DAY PASS SUN SOL ISLA CARIBE/IMG_3109.webp",
      "/aventuras/DAY PASS SUN SOL ISLA CARIBE/IMG_3110.webp"
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
    image: "/aventuras/ENCUENTRO CON DELFINES/unnamed (3).webp",
    gallery: [
      "/aventuras/ENCUENTRO CON DELFINES/unnamed (3).webp",
      "/aventuras/ENCUENTRO CON DELFINES/unnamed (5).webp",
      "/aventuras/ENCUENTRO CON DELFINES/unnamed (8).webp"
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
    image: "/aventuras/FULL DAY ISLA DE CUBAGUA ILC/1.webp",
    gallery: [
      "/aventuras/FULL DAY ISLA DE CUBAGUA ILC/1.webp",
      "/aventuras/FULL DAY ISLA DE CUBAGUA ILC/2.webp",
      "/aventuras/FULL DAY ISLA DE CUBAGUA ILC/3.webp",
      "/aventuras/FULL DAY ISLA DE CUBAGUA ILC/4.webp",
      "/aventuras/FULL DAY ISLA DE CUBAGUA ILC/5.webp",
      "/aventuras/FULL DAY ISLA DE CUBAGUA ILC/6.webp",
      "/aventuras/FULL DAY ISLA DE CUBAGUA ILC/7.webp",
      "/aventuras/FULL DAY ISLA DE CUBAGUA ILC/8.webp"
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

