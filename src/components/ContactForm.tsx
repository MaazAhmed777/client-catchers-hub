import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ContactForm = () => {
  return (
    <section className="py-20 bg-slate-900 text-white" id="contact">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Scale Your Subscription Revenue?
        </h2>
        <p className="text-blue-200/70 text-lg mb-8 max-w-2xl mx-auto">
          Get a free 30-minute subscription funnel teardown — no commitment, no sales pitch. Just 3-5 actionable recommendations you can use this week.
        </p>
        <Link to="/free-audit">
          <Button size="lg" className="text-lg px-8 py-6 bg-white text-slate-900 hover:bg-blue-50 group">
            Get Your Free Funnel Teardown
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default ContactForm;
