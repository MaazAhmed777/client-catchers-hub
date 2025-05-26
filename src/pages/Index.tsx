import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import ContactForm from "@/components/ContactForm";
import Testimonials from "@/components/Testimonials";
import { useEffect } from "react";
import TagManager from "react-gtm-module";

const Index = () => {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-K7Q7BSLX' });
  }, []);

  return (
    <div className="min-h-screen">
      <Hero />
      <Stats />
      <Testimonials />
      <ContactForm />
    </div>
  );
};

export default Index;