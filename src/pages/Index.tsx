
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Models from "@/components/Models";
import SaveTheDate from "@/components/SaveTheDate";
import AdditionalServices from "@/components/AdditionalServices";
import HowToOrder from "@/components/HowToOrder";
import HowGuestsReceive from "@/components/HowGuestsReceive";
import WhyChoose from "@/components/WhyChoose";
import PricingSection from "@/components/PricingSection";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      <Header />
      <Hero />
      <Services />
      <Models />
      <SaveTheDate />
      <AdditionalServices />
      <HowToOrder />
      <HowGuestsReceive />
      <WhyChoose />
      <PricingSection />
      <Testimonials />
      <ContactSection />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
