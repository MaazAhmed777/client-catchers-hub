import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const BrooksMovingCaseStudy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/case-studies')}
          className="mb-8 hover:bg-gray-100"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Case Studies
        </Button>

        <div className="space-y-12">
          {/* Header Section */}
          <div className="text-center fade-in">
            <h1 className="text-4xl font-bold mb-4">Brooks Moving and Hauling</h1>
            <p className="text-xl text-gray-600">Transforming Local Moving Services in South Florida</p>
          </div>

          {/* Overview Card */}
          <div className="glass-card rounded-lg p-8 slide-up">
            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Industry</h3>
                <p className="text-gray-600">Relocations & Moving Services</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Region</h3>
                <p className="text-gray-600">South Florida</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Website</h3>
                <a 
                  href="https://brooksmovingandhauling.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  brooksmovingandhauling.com
                </a>
              </div>
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Monthly Campaign Spend</h3>
                <p className="text-gray-600">$17,500</p>
              </div>
            </div>
          </div>

          {/* Key Results */}
          <div className="glass-card rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Key Performance Metrics</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <p className="text-sm text-gray-600 mb-1">Click-to-Conversion Rate</p>
                <p className="text-3xl font-bold text-primary">31.2%</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <p className="text-sm text-gray-600 mb-1">Lead-to-Gig Conversion</p>
                <p className="text-3xl font-bold text-primary">44%</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <p className="text-sm text-gray-600 mb-1">Increase in AOV</p>
                <p className="text-3xl font-bold text-primary">23%</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <p className="text-sm text-gray-600 mb-1">Cost Per Lead</p>
                <p className="text-3xl font-bold text-primary">$105</p>
              </div>
            </div>
          </div>

          {/* Detailed Breakdown */}
          <div className="space-y-8">
            <div className="glass-card rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-4">Challenge</h2>
              <p className="text-gray-600 leading-relaxed">
                Brooks Moving and Hauling needed to establish a stronger presence in the competitive South Florida moving market while maintaining profitable customer acquisition costs. The main challenges included:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600">
                <li>High competition in the South Florida moving market</li>
                <li>Need for qualified leads that convert into actual moving jobs</li>
                <li>Maintaining profitable customer acquisition costs</li>
                <li>Targeting high-value customers in specific regions</li>
              </ul>
            </div>

            <div className="glass-card rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-4">Solution</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We implemented a comprehensive digital marketing strategy focused on:
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Targeted Campaign Structure</h3>
                  <p className="text-gray-600">
                    Developed region-specific campaigns targeting high-value areas in South Florida, with customized messaging and bid strategies for each location.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Conversion Tracking</h3>
                  <p className="text-gray-600">
                    Implemented comprehensive tracking for both form submissions and phone calls, enabling better optimization of ad spend and targeting.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Quality Score Optimization</h3>
                  <p className="text-gray-600">
                    Focused on improving landing page experience and ad relevance to achieve better ad positions at lower costs.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-4">Results Breakdown</h2>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Metric</TableHead>
                    <TableHead>Result</TableHead>
                    <TableHead>Impact</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Click-to-Conversion Rate</TableCell>
                    <TableCell>31.2%</TableCell>
                    <TableCell>Significantly above industry average, indicating highly targeted traffic</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Lead-to-Job Conversion</TableCell>
                    <TableCell>44%</TableCell>
                    <TableCell>Strong indicator of lead quality and effective targeting</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Average Order Value</TableCell>
                    <TableCell>23% Increase</TableCell>
                    <TableCell>Achieved through targeting high-value service areas</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Cost Per Lead</TableCell>
                    <TableCell>$105</TableCell>
                    <TableCell>Maintained profitable CAC while scaling campaign</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>

          {/* Conclusion */}
          <div className="glass-card rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-4">Key Takeaways</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                The campaign demonstrated that with proper targeting and optimization, it's possible to:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Achieve high conversion rates in a competitive market</li>
                <li>Maintain profitable customer acquisition costs while scaling</li>
                <li>Successfully target and convert high-value customers</li>
                <li>Create a predictable lead generation system for service businesses</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrooksMovingCaseStudy;