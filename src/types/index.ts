import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface Experience {
  title: string;
  description: string;
  videoUrl?: string;
  imageUrl: string;
  icon: IconDefinition;
  whatsappMessage: string;
  features: string[];
}

export interface Service {
  title: string;
  description: string;
  longDescription: string;
  icon: IconDefinition;
  link: string;
  image: string;
  features: string[];
}

export interface TourService {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  gallery: string[];
  price: string;
  duration: string;
  groupSize: string;
  includes: string[];
  excludes: string[];
  itinerary: ItineraryItem[];
  whatsappMessage: string;
  category: 'senderismo' | 'acuatico' | 'cultural' | 'aventura' | 'relajacion' | 'panoramico';
}

export interface ItineraryItem {
  time: string;
  activity: string;
  location?: string;
}

export interface HostProfile {
  name: string;
  title: string;
  description: string;
  image: string;
  experience: string;
  specialties: string[];
  contact: {
    phone: string;
    whatsapp: string;
    email?: string;
  };
}