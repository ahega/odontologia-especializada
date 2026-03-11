import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import StatsBar from '@/components/StatsBar';
import SpecialistsSection from '@/components/SpecialistsSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import FooterSection from '@/components/FooterSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import CONFIG from '@/config';

const Index = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <HeroSection />
      <StatsBar />
      <SpecialistsSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <FooterSection />
      <WhatsAppButton />

      {/* JSON-LD Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Dentist",
        "name": CONFIG.nombreNegocio,
        "description": CONFIG.seo.descripcion,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": CONFIG.direccion,
          "addressLocality": CONFIG.ciudad,
          "addressCountry": CONFIG.pais,
        },
        "telephone": CONFIG.telefono,
        "url": CONFIG.seo.canonicalURL,
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5",
          "reviewCount": CONFIG.testimonios.length.toString(),
        },
      }) }} />
    </>
  );
};

export default Index;
