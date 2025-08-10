import { anfitrionMetadata } from '../metadata';
import { Metadata } from 'next';

export const metadata: Metadata = anfitrionMetadata;

export default function AnfitrionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
