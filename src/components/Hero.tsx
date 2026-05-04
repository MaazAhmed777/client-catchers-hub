import { ArrowRight, Smartphone, Globe, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <span className="inline-block mb-6 px-4 py-2 bg-white/10 text-blue-300 rounded-full text-sm font-medium border border-white/10 fade-in">
          Growth Marketing for Subscription Products
        </span>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white slide-up leading-tight">
          Struggling to Scale Your
          <span className="block gradient-text">Subscription App?</span>
        </h1>

        <p className="text-lg md:text-xl text-blue-100/80 mb-10 max-w-3xl mx-auto fade-in leading-relaxed">
          We help SaaS, mobile, and AI companies turn paid acquisition into predictable recurring revenue — optimizing every step from first click to long-term retention.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 fade-in">
          <Link to="/free-audit">
            <Button size="lg" className="text-lg px-8 py-6 group bg-white text-slate-900 hover:bg-blue-50">
              Get Your Free Funnel Teardown
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link to="/case-studies">
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white/20 text-white hover:bg-white/10">
              See Results
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto fade-in">
          <div className="flex items-center justify-center gap-3 text-blue-200/70">
            <Smartphone className="h-5 w-5" />
            <span className="text-sm">Mobile Apps</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-blue-200/70">
            <Globe className="h-5 w-5" />
            <span className="text-sm">SaaS & Web Apps</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-blue-200/70">
            <TrendingUp className="h-5 w-5" />
            <span className="text-sm">AI Products</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
