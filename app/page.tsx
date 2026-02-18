import Navigation from './components/Navigation';
import Hero from './components/Hero';
import TrustBadges from './components/TrustBadges';
import EmergencyBanner from './components/EmergencyBanner';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import BeforeAfter from './components/BeforeAfter';
import Warranty from './components/Warranty';
import Reviews from './components/Reviews';
import Financing from './components/Financing';
import ServiceAreas from './components/ServiceAreas';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <TrustBadges />
        <EmergencyBanner />
        <Services />
        <WhyChooseUs />
        <BeforeAfter />
        <Warranty />
        <Reviews />
        <Financing />
        <ServiceAreas />
        <FAQ />
        <ContactForm />
        <Footer />
      </main>
    </>
  );
}
