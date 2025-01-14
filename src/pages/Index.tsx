import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, BarChart, Target, Zap } from "lucide-react";

const Index = () => {
  const services = [
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      title: "Targeted Campaigns",
      description: "Reach your ideal customers with precision-targeted marketing campaigns.",
    },
    {
      icon: <BarChart className="h-6 w-6 text-primary" />,
      title: "Data Analytics",
      description: "Make informed decisions with comprehensive performance analytics.",
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Rapid Growth",
      description: "Accelerate your business growth with proven marketing strategies.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive performance marketing solutions tailored to your business needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 glass-card hover-lift">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Button variant="link" className="group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;