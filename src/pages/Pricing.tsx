import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ContactForm from "@/components/ContactForm";

const packages = [
  {
    name: "Starter",
    price: "999",
    description: "Perfect for small businesses just getting started",
    features: [
      "Single Platform Marketing",
      "Social Media Management",
      "Monthly Performance Report",
      "Email Support",
      "Platform: Choose one from (Meta, Google Ads, or LinkedIn)"
    ]
  },
  {
    name: "Professional",
    price: "1,999",
    description: "Ideal for growing businesses seeking expansion",
    features: [
      "Dual Platform Marketing",
      "Advanced Marketing Strategies",
      "Content Marketing",
      "Weekly Performance Reports",
      "Priority Support",
      "Platforms: Choose two from (Meta, Google Ads, LinkedIn)"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Contact Sales",
    description: "Comprehensive solution for established businesses",
    features: [
      "Multi-Platform Marketing",
      "Custom Marketing Strategy",
      "Dedicated Account Manager",
      "Daily Performance Tracking",
      "24/7 Priority Support",
      "All Available Platforms (Meta, Google Ads, LinkedIn)",
      "Conversion Rate Optimization"
    ]
  }
];

const Pricing = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 fade-in">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan to accelerate your business growth. No hidden fees, cancel anytime.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {packages.map((pkg) => (
            <Card 
              key={pkg.name} 
              className={`hover-lift relative ${
                pkg.popular ? 'border-primary shadow-lg scale-105 z-10' : 'hover:border-gray-300'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                <CardDescription>{pkg.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  {pkg.price === "Contact Sales" ? (
                    <span className="text-4xl font-bold">{pkg.price}</span>
                  ) : (
                    <>
                      <span className="text-4xl font-bold">${pkg.price}</span>
                      <span className="text-gray-600">/month</span>
                    </>
                  )}
                </div>
                <ul className="space-y-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      className={`w-full ${
                        pkg.popular ? 'bg-primary hover:bg-primary/90' : ''
                      }`}
                    >
                      Get Started
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Get Started with {pkg.name} Plan</DialogTitle>
                      <DialogDescription>
                        Fill out the form below and we'll get back to you within 24 hours.
                      </DialogDescription>
                    </DialogHeader>
                    <ContactForm />
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;