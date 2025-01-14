import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart, Globe, LineChart, Mail, Target, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "PPC Advertising",
      description: "Strategic paid advertising campaigns across multiple platforms to drive qualified traffic and conversions.",
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "SEO Optimization",
      description: "Comprehensive search engine optimization to improve organic visibility and rankings.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Social Media Marketing",
      description: "Engaging social media strategies to build brand awareness and community engagement.",
    },
    {
      icon: <Mail className="h-8 w-8 text-primary" />,
      title: "Email Marketing",
      description: "Targeted email campaigns that nurture leads and drive conversions.",
    },
    {
      icon: <LineChart className="h-8 w-8 text-primary" />,
      title: "Conversion Rate Optimization",
      description: "Data-driven optimization to improve website conversion rates and user experience.",
    },
    {
      icon: <BarChart className="h-8 w-8 text-primary" />,
      title: "Analytics & Reporting",
      description: "Comprehensive performance tracking and regular reporting on key metrics.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <span className="inline-block mb-4 px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Our Services
            </span>
            <h1 className="text-4xl font-bold mb-4">
              Comprehensive Performance Marketing Solutions
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a full suite of performance marketing services designed to drive growth and deliver measurable results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 glass-card hover-lift">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
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

export default Services;