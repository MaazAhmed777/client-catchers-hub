import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    client: "FitTrack Pro",
    industry: "Fitness Subscription App",
    metrics: [
      { value: "62%", label: "Trial-to-Paid Rate" },
      { value: "3.8x", label: "ROAS" },
      { value: "-38%", label: "Churn (90-day)" },
      { value: "$11.40", label: "CPA (Trial Start)" },
    ],
    description: "Scaled from 2K to 18K monthly subscribers in 6 months through paywall optimization and targeted Meta/TikTok acquisition.",
  },
  {
    client: "CloudDesk",
    industry: "B2B SaaS Platform",
    metrics: [
      { value: "4.2x", label: "ROAS" },
      { value: "41%", label: "Free-to-Paid Lift" },
      { value: "$34", label: "Cost Per Trial" },
      { value: "27%", label: "LTV Increase" },
    ],
    description: "Built a full-funnel acquisition engine across Google and LinkedIn that cut CAC by 40% while tripling qualified pipeline.",
  },
  {
    client: "MindSpace AI",
    industry: "AI Productivity Tool",
    metrics: [
      { value: "52%", label: "Trial-to-Paid Rate" },
      { value: "2.9x", label: "ROAS" },
      { value: "180K+", label: "Monthly Active Users" },
      { value: "-44%", label: "Churn (60-day)" },
    ],
    description: "Launched paid acquisition from zero and optimized onboarding to drive 180K MAU with strong subscription conversion.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
            Client Results
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Subscription Growth, Proven
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real results from subscription products we've scaled — measured in retained revenue, not vanity metrics.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {caseStudies.map((study) => (
            <Card key={study.client} className="p-8 hover-lift border-0 shadow-md">
              <div className="mb-6">
                <p className="text-sm text-primary font-medium mb-1">{study.industry}</p>
                <h3 className="text-xl font-bold text-slate-900">{study.client}</h3>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {study.metrics.map((metric) => (
                  <div key={metric.label}>
                    <p className="text-2xl font-bold gradient-text">{metric.value}</p>
                    <p className="text-xs text-gray-500">{metric.label}</p>
                  </div>
                ))}
              </div>

              <p className="text-sm text-gray-600 leading-relaxed">{study.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/case-studies">
            <Button variant="outline" size="lg" className="group">
              View All Case Studies
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
