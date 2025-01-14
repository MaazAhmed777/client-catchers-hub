import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const handleGetStarted = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sage-50 to-sage-100 opacity-50" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block mb-4 px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium fade-in">
          Level Up Your Marketing Game
        </span>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 slide-up">
          Drive Growth Through
          <span className="block text-primary">Data-Driven Marketing</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto fade-in">
          We help ambitious brands achieve extraordinary growth through performance marketing strategies that deliver measurable results.
        </p>
        
        <Button onClick={handleGetStarted} className="hover-lift group">
          Get Started
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  );
};

export default Hero;