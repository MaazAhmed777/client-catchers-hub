import { Button } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const RVForAmericaCaseStudy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Button
          variant="ghost"
          className="mb-8 group"
          onClick={() => navigate("/case-studies")}
        >
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Case Studies
        </Button>

        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-6">RV for America Case Study</h1>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4">Quick Stats</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600">Monthly Spend</p>
                <p className="text-2xl font-bold text-primary">$4,000</p>
              </div>
              <div>
                <p className="text-gray-600">Cost Per Lead</p>
                <p className="text-2xl font-bold text-primary">$87</p>
              </div>
              <div>
                <p className="text-gray-600">Click-to-Conversion Rate</p>
                <p className="text-2xl font-bold text-primary">23%</p>
              </div>
              <div>
                <p className="text-gray-600">Lead to Booking Conversion</p>
                <p className="text-2xl font-bold text-primary">54%</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
          <p>
            RV for America needed to increase their booking rates in the Jupiter, Florida area while maintaining a profitable cost per acquisition in a seasonal market.
          </p>

          <h2 className="text-2xl font-semibold mb-4 mt-8">Our Approach</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Developed seasonal campaign strategies to maximize peak periods</li>
            <li>Created targeted ads for different RV categories and rental durations</li>
            <li>Implemented advanced conversion tracking for both leads and bookings</li>
            <li>Optimized campaigns based on booking conversion data</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4 mt-8">The Results</h2>
          <p>
            Our targeted approach led to an impressive 23% click-to-conversion rate and a remarkable 54% lead-to-booking conversion rate. The average order value increased by 17% through strategic targeting in high-performing regions.
          </p>

          <div className="bg-primary/5 p-6 rounded-lg mt-8">
            <h2 className="text-2xl font-semibold mb-4">Key Achievements</h2>
            <ul className="space-y-2">
              <li>• Achieved 54% lead-to-booking conversion rate</li>
              <li>• Increased Average Order Value by 17%</li>
              <li>• Maintained consistent lead flow during off-peak seasons</li>
              <li>• Established strong presence in Jupiter, Florida market</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RVForAmericaCaseStudy;