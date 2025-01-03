import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import brandImage from '../assets/brandcallimage.jpg'

const CoFounder = () => {
  const visionStyle = {
    fontFamily: 'Neue Haas Grotesk Display Pro, sans-serif',
    // color: '#333',
    // lineHeight: '1.6',
    // textAlign: 'center',
    // padding: '20px',
  };
  return (
    <section style={visionStyle} className="flex flex-col md:flex-row-reverse items-center gap-12 max-w-7xl mx-auto px-4 py-16">
      <div className="w-full md:w-1/2 overflow-hidden rounded-lg">
        <img 
          src={brandImage}
          alt="Red thread spools in manufacturing"
          className="w-full h-auto transition-transform duration-500 hover:scale-110"
        />
      </div>
      
      <div className="w-full md:w-1/2 space-y-8">
        <h2 className="text-4xl font-bold text-gray-900 leading-tight">
          Why Hundreds Of Brands Call Us Their Co-Founder
        </h2>
        
        <div className="space-y-6">
          <div className="flex items-start gap-3">
            <Check className="w-6 h-6 mt-1 flex-shrink-0" />
            <div>
              <span className="font-semibold">Comprehensive Services:</span>
              <span className="text-gray-700 ml-1">From design to delivery, we manage everything.</span>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Check className="w-6 h-6 mt-1 flex-shrink-0" />
            <div>
              <span className="font-semibold">Flexible Production:</span>
              <span className="text-gray-700 ml-1">Start small or scale big—our solutions grow with you.</span>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Check className="w-6 h-6 mt-1 flex-shrink-0" />
            <div>
              <span className="font-semibold">Affordable Excellence:</span>
              <span className="text-gray-700 ml-1">Premium services at competitive prices.</span>
            </div>
          </div>
        </div>
        
        <button className="inline-flex items-center space-x-2 bg-white text-gray-900 px-6 py-3 rounded-full border border-gray-900 hover:border-gray-300 transition-colors">
          <span className="text-lg font-bold">Learn More</span>
          {/* <ArrowRight className="w-5 h-5" /> */}
        </button>
      </div>
    </section>
  );
};

export default CoFounder;