import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MountainMoversCaseStudy = () => {
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
          <h1 className="text-4xl font-bold mb-6">Mountain Movers Case Study</h1>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4">Quick Stats</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600">Monthly Spend</p>
                <p className="text-2xl font-bold text-primary">$8,500</p>
              </div>
              <div>
                <p className="text-gray-600">Cost Per Lead</p>
                <p className="text-2xl font-bold text-primary">$68</p>
              </div>
              <div>
                <p className="text-gray-600">Click-to-Conversion Rate</p>
                <p className="text-2xl font-bold text-primary">19.8%</p>
              </div>
              <div>
                <p className="text-gray-600">Lead to Job Conversion</p>
                <p className="text-2xl font-bold text-primary">39%</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
          <p>
            Mountain Movers needed to establish a strong presence in the competitive Austin, Texas market while maintaining efficient cost per lead and high conversion rates.
          </p>

          <h2 className="text-2xl font-semibold mb-4 mt-8">Our Approach</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Implemented targeted local campaigns focusing on high-value neighborhoods</li>
            <li>Optimized ad spend based on peak moving seasons and local market trends</li>
            <li>Developed custom landing pages for different service offerings</li>
            <li>Implemented comprehensive call and form tracking</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4 mt-8">The Results</h2>
          <p>
            Through our targeted approach, we achieved a significant 31% increase in Average Order Value while maintaining a healthy 19.8% click-to-conversion rate. The lead-to-job conversion rate of 39% demonstrated the high quality of leads generated through our campaigns.
          </p>

          <div className="bg-primary/5 p-6 rounded-lg mt-8">
            <h2 className="text-2xl font-semibold mb-4">Key Achievements</h2>
            <ul className="space-y-2">
              <li>• Maintained CPL at $68 in a competitive market</li>
              <li>• Achieved 31% increase in Average Order Value</li>
              <li>• Established strong brand presence in Austin</li>
              <li>• Implemented effective lead quality tracking system</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MountainMoversCaseStudy;