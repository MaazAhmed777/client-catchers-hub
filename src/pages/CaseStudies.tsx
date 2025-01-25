import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const CaseStudies = () => {
  const navigate = useNavigate();
  
  const caseStudies = [
    {
      client: "Brooks Moving and Hauling",
      industry: "Relocations & Moving",
      result: "31.2% Click-to-Conversion Rate",
      description: "Implemented targeted campaigns in South Florida that resulted in significant improvements in lead quality and average order value.",
      metrics: [
        "44% Lead to Job conversion",
        "23% increase in AOV",
        "$105 CPL",
        "Form & Call tracking"
      ],
      website: "https://brooksmovingandhauling.com/",
      spend: "$17,500 monthly",
      region: "South Florida",
      path: "/case-studies/brooks-moving"
    },
    {
      client: "Mountain Movers",
      industry: "Moving Services",
      result: "19.8% Click-to-Conversion Rate",
      description: "Targeted campaigns in high-performing regions of Austin, Texas, leading to significant improvements in conversion rates and order value.",
      metrics: [
        "39% Lead to Job conversion",
        "31% increase in AOV",
        "$68 CPL",
        "Form & Call tracking"
      ],
      spend: "$8,500 monthly",
      region: "Austin, Texas",
      path: "/case-studies/mountain-movers"
    },
    {
      client: "RV for America",
      industry: "RV Rentals",
      result: "23% Click-to-Conversion Rate",
      description: "Implemented targeted campaigns in Jupiter, Florida, resulting in significant improvements in booking rates and average order value.",
      metrics: [
        "54% Lead to Booking conversion",
        "17% increase in AOV",
        "$87 CPL",
        "Form & Call tracking"
      ],
      website: "https://rvforamerica.com/",
      spend: "$4,000 monthly",
      region: "Jupiter, Florida",
      path: "/case-studies/rv-for-america"
    }
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
          
          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-3xl mx-auto">
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

                {study.website && (
                  <div className="text-sm text-gray-600 mb-4">
                    <a href={study.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      Visit Website
                    </a>
                  </div>
                )}
                
                {study.spend && (
                  <div className="text-sm text-gray-600 mb-2">
                    Monthly Campaign Spend: {study.spend}
                  </div>
                )}
                
                {study.region && (
                  <div className="text-sm text-gray-600 mb-4">
                    Region: {study.region}
                  </div>
                )}
                
                <Button 
                  variant="link" 
                  className="group"
                  onClick={() => study.path && navigate(study.path)}
                >
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