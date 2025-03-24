import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import FeaturedDestinations from '@/components/FeaturedDestinations';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <CallToAction />
      <ServicesSection />
      <FeaturedDestinations />
      <Testimonials />
      <Hero />
      <Footer />
    </main>
  );
}
