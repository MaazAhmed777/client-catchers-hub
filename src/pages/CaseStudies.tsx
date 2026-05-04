import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    client: "FitTrack Pro",
    industry: "Fitness Subscription App",
    platform: "iOS & Android",
    headline: "2K to 18K subscribers in 6 months",
    description: "Scaled a fitness subscription app through systematic paywall testing, Meta and TikTok acquisition campaigns, and retention-focused lifecycle marketing.",
    metrics: [
      "62% trial-to-paid conversion rate",
      "3.8x blended ROAS",
      "38% churn reduction in first 90 days",
      "$11.40 cost per trial start",
    ],
    channels: "Meta, TikTok, Apple Search Ads",
    spend: "$45,000/month",
  },
  {
    client: "CloudDesk",
    industry: "B2B SaaS Platform",
    platform: "Web App",
    headline: "40% CAC reduction while tripling pipeline",
    description: "Built a full-funnel acquisition engine for a project management SaaS, combining Google Search, LinkedIn, and onboarding optimization.",
    metrics: [
      "4.2x ROAS on paid channels",
      "41% lift in free-to-paid conversion",
      "$34 cost per qualified trial",
      "27% increase in customer LTV",
    ],
    channels: "Google Ads, LinkedIn Ads",
    spend: "$28,000/month",
  },
  {
    client: "MindSpace AI",
    industry: "AI Productivity Tool",
    platform: "Web + Mobile",
    headline: "0 to 180K MAU with strong subscription conversion",
    description: "Launched paid acquisition from scratch for an AI writing assistant, optimizing the entire journey from ad click through onboarding to subscription.",
    metrics: [
      "52% trial-to-paid conversion rate",
      "2.9x ROAS across all channels",
      "180K+ monthly active users",
      "44% reduction in 60-day churn",
    ],
    channels: "Meta, Google, TikTok, Reddit",
    spend: "$62,000/month",
  },
  {
    client: "LearnLoop",
    industry: "EdTech Subscription",
    platform: "iOS & Web",
    headline: "Reduced CAC by 55% while doubling subscriber count",
    description: "Restructured an education app's paid acquisition strategy around LTV-optimized bidding and paywall experimentation, more than doubling subscriber growth.",
    metrics: [
      "55% reduction in cost per subscriber",
      "48% trial-to-paid conversion",
      "2x subscriber growth in 4 months",
      "22% improvement in 6-month retention",
    ],
    channels: "Meta, Apple Search Ads, Google UAC",
    spend: "$35,000/month",
  },
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <span className="inline-block mb-4 px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Case Studies
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Subscription Growth,
              <span className="gradient-text"> Proven</span>
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              How we've helped subscription products scale acquisition and retain revenue.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {caseStudies.map((study) => (
              <Card key={study.client} className="p-8 hover-lift border-0 shadow-md">
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-primary font-medium">{study.industry}</span>
                    <span className="text-gray-300">|</span>
                    <span className="text-sm text-gray-500">{study.platform}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{study.client}</h3>
                  <p className="text-lg font-semibold gradient-text">{study.headline}</p>
                </div>

                <p className="text-gray-600 mb-6">{study.description}</p>

                <div className="space-y-2 mb-6">
                  {study.metrics.map((metric) => (
                    <div key={metric} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {metric}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-gray-500 pt-4 border-t border-gray-100">
                  <span>Channels: {study.channels}</span>
                  <span>Spend: {study.spend}</span>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/free-audit">
              <Button size="lg" className="text-lg px-8 py-6 group">
                Get Results Like These
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
