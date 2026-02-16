import Navigation from './components/Navigation';
import Hero from './components/Hero';
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
import StickyCallButton from './components/StickyCallButton';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
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
      <StickyCallButton />
    </>
  );
}
