import React from 'react';
import { ArrowRight } from 'lucide-react';
import visionimage from '../assets/visionimage.jpg'

const Vision = () => {

  const visionStyle = {
    fontFamily: 'Neue Haas Grotesk Display Pro, sans-serif',
   
  };

  return (
    <section style={visionStyle} className="flex flex-col md:flex-row items-center gap-12 max-w-7xl mx-auto px-4 py-16">
      <div className="w-full md:w-1/2 overflow-hidden rounded-lg">
        <img
          src={visionimage}
          alt="Team meeting in modern office"
          className="w-full h-auto transition-transform duration-500 hover:scale-110"
        />
      </div>
      
      <div className="w-full md:w-1/2 space-y-6">
        <h2 className="text-4xl font-bold text-gray-900">
          Your Vision, Our Mission
        </h2>
        
        <p className="text-gray-600 text-base leading-relaxed">
          At SotBella360, we're more than just a service provider—we're your dedicated co-founder,
          working side by side to build, scale, and manage your fashion brand. Whether you're a
          startup testing your first idea, a scaling brand expanding collections, or an enterprise
          managing global operations, we bring expertise, creativity, and reliability to every step of
          the process.
        </p>
        
        <p className="text-gray-600 text-base font-medium">
          With SotBella360, your vision becomes reality.
        </p>
        
        <button className="inline-flex items-center space-x-2 bg-white text-gray-900 px-6 py-3 rounded-full border border-gray-900 hover:border-gray-300 transition-colors">
          <span className="text-lg font-bold">Learn More</span>
          {/* <ArrowRight className="w-5 h-5" /> */}
        </button>
      </div>
    </section>
  );
};

export default Vision;