import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import PropertiesSection from '@/components/PropertiesSection';
import ServicesSection from '@/components/ServicesSection';
import NeighborhoodsSection from '@/components/NeighborhoodsSection';
import TeamSection from '@/components/TeamSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <AboutSection />
      <PropertiesSection />
      <ServicesSection />
      <NeighborhoodsSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  );
}