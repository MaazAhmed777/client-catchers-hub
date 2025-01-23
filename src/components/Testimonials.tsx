import { Card } from "@/components/ui/card";

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
            Client Success
          </span>
          <h2 className="text-3xl font-bold mb-4">
            Real Results for Real Businesses
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how we've helped our clients achieve remarkable growth through data-driven marketing strategies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="p-8 hover-lift">
            <div className="flex flex-col gap-8">
              <div>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2">Brooks Moving and Hauling</h3>
                  <p className="text-gray-500">Relocations & Moving Services</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-2xl font-bold text-primary">31.2%</p>
                    <p className="text-sm text-gray-600">Click-to-Conversion Rate</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">44%</p>
                    <p className="text-sm text-gray-600">Lead to Job Conversion</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">23%</p>
                    <p className="text-sm text-gray-600">Increase in AOV</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">$105</p>
                    <p className="text-sm text-gray-600">Cost Per Lead</p>
                  </div>
                </div>

                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Monthly Campaign Spend: $17,500</p>
                  <p>• Region: South Florida</p>
                  <p>• Conversion Tracking: Forms & Calls</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 hover-lift">
            <div className="flex flex-col gap-8">
              <div>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2">Mountain Movers</h3>
                  <p className="text-gray-500">Moving Services</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-2xl font-bold text-primary">19.8%</p>
                    <p className="text-sm text-gray-600">Click-to-Conversion Rate</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">39%</p>
                    <p className="text-sm text-gray-600">Lead to Job Conversion</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">31%</p>
                    <p className="text-sm text-gray-600">Increase in AOV</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">$68</p>
                    <p className="text-sm text-gray-600">Cost Per Lead</p>
                  </div>
                </div>

                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Monthly Campaign Spend: $8,500</p>
                  <p>• Region: Austin, Texas</p>
                  <p>• Conversion Tracking: Forms & Calls</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;