import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import ContactForm from "@/components/ContactForm";
import { useEffect } from "react";
import TagManager from "react-gtm-module";

const Index = () => {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-XXXXXXX' }); // Replace with your GTM ID
  }, []);

  return (
    <div className="min-h-screen">
      <Hero />
      <Stats />
      <ContactForm />
    </div>
  );
};

export default Index;