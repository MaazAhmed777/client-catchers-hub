import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, CreditCard, Smartphone, RefreshCw, BarChart3, Megaphone } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <Target className="h-8 w-8" />,
    title: "Paid User Acquisition",
    description: "Full-funnel paid campaigns across Meta, Google, TikTok, Apple Search Ads, and programmatic — optimized for trial starts and subscription revenue, not just installs.",
    capabilities: ["Meta & Google Ads", "TikTok & Snap Ads", "Apple Search Ads", "Programmatic & DSPs"],
  },
  {
    icon: <CreditCard className="h-8 w-8" />,
    title: "Paywall & Conversion Optimization",
    description: "We test and optimize every step from landing page to paywall to payment — lifting trial-to-paid rates through systematic experimentation.",
    capabilities: ["Paywall A/B testing", "Pricing experiments", "Onboarding flow optimization", "Free-to-paid funnel design"],
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "ASO & App Store Growth",
    description: "Organic discovery strategy for iOS and Android — keyword optimization, creative testing, and review management to reduce blended CAC.",
    capabilities: ["Keyword optimization", "Screenshot & video testing", "Rating & review strategy", "Competitor monitoring"],
  },
  {
    icon: <RefreshCw className="h-8 w-8" />,
    title: "Lifecycle & Retention Marketing",
    description: "Push, email, and in-app campaigns that reduce churn, recover lapsed subscribers, and extend LTV beyond the first billing cycle.",
    capabilities: ["Churn prediction & prevention", "Win-back campaigns", "Engagement automation", "Cohort-based messaging"],
  },
  {
    icon: <BarChart3 className="h-8 w-8" />,
    title: "Funnel Analytics & Attribution",
    description: "End-to-end measurement from ad impression to subscription renewal — so you know exactly which channels and creatives drive retained revenue.",
    capabilities: ["MMP & attribution setup", "LTV modeling", "Cohort analysis", "Custom dashboards"],
  },
  {
    icon: <Megaphone className="h-8 w-8" />,
    title: "Creative Strategy & Production",
    description: "Performance creative built for subscription products — UGC, motion, and static ads tested against trial start and subscription metrics.",
    capabilities: ["UGC & creator partnerships", "Motion & static ads", "Creative testing frameworks", "Concept-to-launch in 5 days"],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <span className="inline-block mb-4 px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              What We Do
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Full-Stack Growth for
              <span className="gradient-text"> Subscription Products</span>
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Every service is built around one goal: turning acquisition spend into predictable, retained subscription revenue.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover-lift border-0 shadow-md group">
                <div className="mb-6 text-primary group-hover:text-secondary transition-colors">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.capabilities.map((cap) => (
                    <li key={cap} className="text-sm text-gray-500 flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary/60" />
                      {cap}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/free-audit">
              <Button size="lg" className="text-lg px-8 py-6 group">
                Get Your Free Funnel Teardown
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
