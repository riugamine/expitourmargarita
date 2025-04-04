import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  fill = false,
  sizes
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`
        duration-700 ease-in-out
        ${isLoading ? 'scale-105 blur-lg' : 'scale-100 blur-0'}
        ${className}
      `}
      onLoadingComplete={() => setIsLoading(false)}
      priority={priority}
      fill={fill}
      sizes={sizes}
      loading={priority ? 'eager' : 'lazy'}
    />
  );
}