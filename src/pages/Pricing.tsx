import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const packages = [
  {
    name: "Growth Launch",
    price: "2,500",
    description: "For subscription products ready to build their first paid acquisition engine",
    features: [
      "1 paid channel (Meta, Google, or TikTok)",
      "Paywall conversion audit",
      "Campaign setup & creative strategy",
      "Bi-weekly performance reports",
      "Slack-based support",
    ],
  },
  {
    name: "Scale",
    price: "5,000",
    description: "For products with traction that need to optimize unit economics and expand channels",
    features: [
      "2-3 paid channels",
      "Paywall & onboarding A/B testing",
      "ASO optimization (mobile)",
      "Lifecycle & retention campaigns",
      "Weekly strategy calls",
      "LTV & cohort dashboards",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For high-spend subscription products that need a full embedded growth team",
    features: [
      "All paid channels + programmatic",
      "Dedicated growth strategist",
      "Full creative production",
      "Advanced attribution & LTV modeling",
      "Churn prediction & prevention",
      "Daily Slack + weekly executive reports",
      "Custom analytics infrastructure",
    ],
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 fade-in">
          <span className="inline-block mb-4 px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
            Pricing
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Invest in
            <span className="gradient-text"> Retained Revenue</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transparent pricing tied to real growth outcomes. No long-term contracts — cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {packages.map((pkg) => (
            <Card
              key={pkg.name}
              className={`hover-lift relative border-0 shadow-md ${
                pkg.popular ? "ring-2 ring-primary shadow-lg scale-105 z-10" : ""
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                <CardDescription className="text-base">{pkg.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  {pkg.price === "Custom" ? (
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
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Link to="/free-audit" className="w-full">
                  <Button
                    className={`w-full group ${
                      pkg.popular ? "bg-primary hover:bg-primary/90" : ""
                    }`}
                    size="lg"
                  >
                    Start With a Free Audit
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          All plans exclude ad spend. Pricing is for management fees only.
        </p>
      </div>
    </div>
  );
};

export default Pricing;
