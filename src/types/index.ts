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