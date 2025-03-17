import Link from 'next/link';
import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  link: string;
  hasDetailPage: boolean;
}

export default function ServiceCard({ title, description, icon, link, hasDetailPage }: ServiceCardProps) {
  return (
    <div className="bg-white dark:bg-expitour-blue/80 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2">
      <div className="p-6">
        <div className="w-16 h-16 mb-4 bg-expitour-teal rounded-full flex items-center justify-center">
          <Image
            src={icon}
            alt={title}
            width={32}
            height={32}
            className="w-8 h-8"
          />
        </div>
        <h3 className="font-poppins text-xl font-semibold text-expitour-dark dark:text-white mb-2">{title}</h3>
        <p className="font-lora text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        {hasDetailPage ? (
          <Link href={link} className="inline-flex items-center font-poppins text-expitour-amber hover:text-expitour-yellow">
            Ver más
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        ) : (
          <span className="inline-block font-poppins text-expitour-dark dark:text-expitour-teal">
            Disponible
          </span>
        )}
      </div>
    </div>
  );
}