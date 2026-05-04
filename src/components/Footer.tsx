import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Link to="/" className="text-2xl font-bold">
              Optireach
            </Link>
            <p className="text-slate-400 mt-4 max-w-md text-sm leading-relaxed">
              Growth marketing for subscription products. We help SaaS, mobile, and AI companies scale paid acquisition, optimize funnels, and retain subscribers.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-slate-400">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-slate-300 hover:text-white text-sm transition-colors">Services</Link></li>
              <li><Link to="/case-studies" className="text-slate-300 hover:text-white text-sm transition-colors">Case Studies</Link></li>
              <li><Link to="/pricing" className="text-slate-300 hover:text-white text-sm transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-slate-400">Get Started</h4>
            <ul className="space-y-3">
              <li><Link to="/free-audit" className="text-slate-300 hover:text-white text-sm transition-colors">Free Funnel Teardown</Link></li>
              <li><a href="mailto:hello@optireach.digital" className="text-slate-300 hover:text-white text-sm transition-colors">hello@optireach.digital</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-sm text-slate-500 text-center">
          &copy; {new Date().getFullYear()} Optireach. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
