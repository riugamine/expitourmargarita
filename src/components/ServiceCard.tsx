import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: IconDefinition;
  link: string;
  hasDetailPage: boolean;
  color: string;
}

export default function ServiceCard({ title, description, icon, link, hasDetailPage, color }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-[1.02] transform">
      <div className="p-8">
        <div className={`w-16 h-16 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <FontAwesomeIcon icon={icon} className="h-8 w-8 text-expitour-dark" />
        </div>
        <h3 className="font-poppins text-2xl font-bold text-expitour-dark mb-4 group-hover:text-expitour-teal transition-colors duration-300">
          {title}
        </h3>
        <p className="font-lora text-gray-600 mb-6 leading-relaxed">
          {description}
        </p>
        {hasDetailPage && (
          <Link 
            href={link}
            className="inline-flex items-center text-expitour-teal font-medium hover:text-expitour-amber transition-colors duration-300 group-hover:translate-x-2 transform transition-transform"
          >
            Descubrir más
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M5 7l5 5-5 5" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
}