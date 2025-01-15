import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const packages = [
  {
    name: "Starter",
    price: "999",
    description: "Perfect for small businesses just getting started",
    features: [
      "Social Media Management",
      "Basic SEO Optimization",
      "Monthly Performance Report",
      "Email Support"
    ]
  },
  {
    name: "Professional",
    price: "1,999",
    description: "Ideal for growing businesses seeking expansion",
    features: [
      "Everything in Starter",
      "Advanced SEO Strategies",
      "Content Marketing",
      "Weekly Performance Reports",
      "Priority Support",
      "Google Ads Management"
    ]
  },
  {
    name: "Enterprise",
    price: "3,999",
    description: "Comprehensive solution for established businesses",
    features: [
      "Everything in Professional",
      "Custom Marketing Strategy",
      "Dedicated Account Manager",
      "Daily Performance Tracking",
      "24/7 Priority Support",
      "Social Media Ads Management",
      "Conversion Rate Optimization"
    ]
  }
];

const Packages = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Choose Your Growth Package</h1>
          <p className="text-lg text-gray-600">
            Select the perfect package to accelerate your business growth
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {packages.map((pkg) => (
            <Card key={pkg.name} className="hover-lift">
              <CardHeader>
                <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                <CardDescription>{pkg.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <span className="text-4xl font-bold">${pkg.price}</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Get Started</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;