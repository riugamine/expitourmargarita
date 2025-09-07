import { servicesMetadata } from '../metadata';
import { Metadata } from 'next';

export const metadata: Metadata = servicesMetadata;

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
