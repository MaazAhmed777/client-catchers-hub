import { Card } from './ui/card';

const metrics = [
  { value: "3.2x", label: "Average ROAS", sub: "across subscription clients" },
  { value: "47%", label: "Trial-to-Paid Lift", sub: "average improvement" },
  { value: "31%", label: "Churn Reduction", sub: "within first 90 days" },
  { value: "$2.4M+", label: "Ad Spend Managed", sub: "for subscription products" },
];

const Stats = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block mb-4 px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
            By The Numbers
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Results That Compound
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We don't optimize for vanity metrics. Every dollar is tied to LTV, trial conversion, and retained revenue.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric) => (
            <Card key={metric.label} className="p-8 text-center hover-lift border-0 shadow-md">
              <h3 className="text-4xl md:text-5xl font-bold gradient-text mb-2">{metric.value}</h3>
              <p className="text-lg font-semibold text-slate-800 mb-1">{metric.label}</p>
              <p className="text-sm text-gray-500">{metric.sub}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
