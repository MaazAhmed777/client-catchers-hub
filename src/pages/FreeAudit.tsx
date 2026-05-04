import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2, Clock, BarChart3, CreditCard, RefreshCw, ArrowRight } from "lucide-react";

const agenda = [
  { icon: <BarChart3 className="h-5 w-5 text-primary" />, title: "Growth Stage Assessment", description: "Where you are today — MRR, subscriber count, channel mix, and current blockers." },
  { icon: <CreditCard className="h-5 w-5 text-primary" />, title: "Paywall & Conversion Review", description: "Your trial-to-paid flow, pricing structure, and onboarding friction points." },
  { icon: <RefreshCw className="h-5 w-5 text-primary" />, title: "Acquisition & Retention Audit", description: "Channel performance, CAC vs. LTV economics, and churn patterns." },
  { icon: <CheckCircle2 className="h-5 w-5 text-primary" />, title: "3-5 Actionable Recommendations", description: "Specific, prioritized moves you can implement immediately." },
  { icon: <ArrowRight className="h-5 w-5 text-primary" />, title: "Next Steps", description: "Whether we're the right fit to help, and what a partnership could look like." },
];

const whoThisIsFor = [
  "Subscription apps with 1K+ active subscribers looking to scale",
  "SaaS products spending $5K+/month on paid acquisition",
  "AI or mobile products with product-market fit but struggling to optimize unit economics",
  "Founders or growth leads who want a senior-level second opinion on their funnel",
];

const proofPoints = [
  { value: "47%", label: "avg. trial-to-paid lift" },
  { value: "3.2x", label: "avg. ROAS for clients" },
  { value: "31%", label: "avg. churn reduction" },
];

const FreeAudit = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    companyUrl: "",
    platform: "",
    monthlySpend: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfhZ2NX6NyIX60KcUUL1j-l1zxO226F_5yPAMCJaU4LOqip-Q/formResponse";

    const formDataObj = new FormData();
    formDataObj.append("entry.1234567890", formData.name);
    formDataObj.append("entry.1234567891", formData.email);
    formDataObj.append("entry.1234567892", formData.company);
    formDataObj.append("entry.1234567893", formData.companyUrl);
    formDataObj.append("entry.1234567894", `Platform: ${formData.platform}, Monthly Spend: ${formData.monthlySpend}`);

    try {
      await fetch(googleFormUrl, {
        method: "POST",
        mode: "no-cors",
        body: formDataObj,
      });

      setSubmitted(true);
      toast({
        title: "Request received!",
        description: "We'll be in touch within 24 hours to schedule your audit.",
      });
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <span className="inline-block mb-4 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            Free — No Strings Attached
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Get a Free Subscription
            <span className="gradient-text"> Funnel Teardown</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            A 30-minute deep dive into your subscription product's growth funnel — with 3-5 actionable recommendations you can implement this week.
          </p>
          <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
            <Clock className="h-4 w-4" />
            We typically respond within 24 hours
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left Column — Info */}
          <div className="lg:col-span-3 space-y-12">
            {/* Agenda */}
            <div>
              <h2 className="text-2xl font-bold mb-6">What We'll Cover</h2>
              <div className="space-y-4">
                {agenda.map((item) => (
                  <div key={item.title} className="flex gap-4 p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
                    <div className="mt-1 shrink-0">{item.icon}</div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Who This Is For */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Who This Is For</h2>
              <div className="space-y-3">
                {whoThisIsFor.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Proof */}
            <div className="bg-slate-900 rounded-2xl p-8 text-white">
              <h3 className="text-lg font-semibold mb-6 text-blue-200">Average client results</h3>
              <div className="grid grid-cols-3 gap-6">
                {proofPoints.map((point) => (
                  <div key={point.label} className="text-center">
                    <p className="text-3xl font-bold mb-1">{point.value}</p>
                    <p className="text-sm text-blue-200/70">{point.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column — Form */}
          <div className="lg:col-span-2">
            <div className="sticky top-28">
              {submitted ? (
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 text-center">
                  <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">You're In!</h3>
                  <p className="text-gray-600">
                    We'll reach out within 24 hours to schedule your free funnel teardown. Keep an eye on your inbox.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 space-y-5">
                  <div>
                    <h3 className="text-xl font-bold mb-1">Request Your Free Audit</h3>
                    <p className="text-sm text-gray-500">Takes 30 seconds. No commitment.</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1.5">Full Name</label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Smith"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1.5">Work Email</label>
                    <Input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1.5">Company</label>
                    <Input
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1.5">Website / App Store URL</label>
                    <Input
                      value={formData.companyUrl}
                      onChange={(e) => setFormData({ ...formData, companyUrl: e.target.value })}
                      placeholder="https://yourapp.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1.5">Product Type</label>
                    <Select onValueChange={(value) => setFormData({ ...formData, platform: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your product type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mobile-app">Mobile App (iOS/Android)</SelectItem>
                        <SelectItem value="saas">SaaS / Web App</SelectItem>
                        <SelectItem value="both">Mobile + Web</SelectItem>
                        <SelectItem value="ai-product">AI Product</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1.5">Monthly Ad Spend</label>
                    <Select onValueChange={(value) => setFormData({ ...formData, monthlySpend: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-5k">Under $5K</SelectItem>
                        <SelectItem value="5k-15k">$5K – $15K</SelectItem>
                        <SelectItem value="15k-50k">$15K – $50K</SelectItem>
                        <SelectItem value="50k-plus">$50K+</SelectItem>
                        <SelectItem value="not-yet">Not spending yet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button type="submit" size="lg" className="w-full text-lg py-6">
                    Get My Free Audit
                  </Button>

                  <p className="text-xs text-gray-400 text-center">
                    No sales pitch. Just actionable insights.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeAudit;
