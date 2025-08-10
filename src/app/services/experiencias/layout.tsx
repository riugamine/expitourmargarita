import { experienciasMetadata } from '../../metadata';
import { Metadata } from 'next';

export const metadata: Metadata = experienciasMetadata;

export default function ExperienciasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
