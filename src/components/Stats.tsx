import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card } from './ui/card';

const data = [
  { month: 'Jan', roi: 320 },
  { month: 'Feb', roi: 350 },
  { month: 'Mar', roi: 420 },
  { month: 'Apr', roi: 460 },
  { month: 'May', roi: 520 },
  { month: 'Jun', roi: 580 },
];

const Stats = () => {
  return (
    <section className="py-20 bg-sage-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Performance Metrics</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="p-6 text-center glass-card">
            <h3 className="text-4xl font-bold text-primary mb-2">250%</h3>
            <p className="text-gray-600">Average ROI</p>
          </Card>
          <Card className="p-6 text-center glass-card">
            <h3 className="text-4xl font-bold text-primary mb-2">1.2M+</h3>
            <p className="text-gray-600">Ad Spend Managed</p>
          </Card>
          <Card className="p-6 text-center glass-card">
            <h3 className="text-4xl font-bold text-primary mb-2">98%</h3>
            <p className="text-gray-600">Client Retention</p>
          </Card>
        </div>
        
        <div className="h-[400px] glass-card p-6">
          <h3 className="text-xl font-semibold mb-6">Client ROI Growth</h3>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="roi" fill="#8a9a5b" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default Stats;