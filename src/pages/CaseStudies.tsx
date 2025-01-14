import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      client: "TechStart Solutions",
      industry: "SaaS",
      result: "250% increase in qualified leads",
      description: "Implemented a comprehensive digital marketing strategy that transformed their lead generation process.",
      metrics: ["3x ROI", "150% traffic increase", "45% lower CPA"],
    },
    {
      client: "GrowthMax Retail",
      industry: "E-commerce",
      result: "400% revenue growth",
      description: "Optimized their e-commerce funnel and scaled their paid advertising campaigns effectively.",
      metrics: ["4x revenue", "200% ROAS", "65% repeat customers"],
    },
    {
      client: "FinServe Pro",
      industry: "Financial Services",
      result: "180% conversion rate improvement",
      description: "Developed a targeted content strategy that significantly improved their conversion rates.",
      metrics: ["2x conversions", "40% lower CAC", "90% client satisfaction"],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <span className="inline-block mb-4 px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Case Studies
            </span>
            <h1 className="text-4xl font-bold mb-4">
              Our Success Stories
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover how we've helped businesses achieve extraordinary results through data-driven performance marketing.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="p-8 glass-card hover-lift">
                <div className="mb-6">
                  <span className="text-sm text-gray-500">{study.industry}</span>
                  <h3 className="text-xl font-semibold mb-2">{study.client}</h3>
                  <p className="text-primary font-medium">{study.result}</p>
                </div>
                
                <p className="text-gray-600 mb-6">{study.description}</p>
                
                <div className="space-y-2 mb-6">
                  {study.metrics.map((metric, idx) => (
                    <div key={idx} className="text-sm text-gray-600">
                      • {metric}
                    </div>
                  ))}
                </div>
                
                <Button variant="link" className="group">
                  View Case Study
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

export default CaseStudies;