import React from 'react';
import whatweoffer from '../assets/whatoffer.png'

const ServicesSection = () => {
  const visionStyle = {
    fontFamily: 'Neue Haas Grotesk Display Pro, sans-serif',
   
  };
  return (
    <div style={visionStyle} className="max-w-7xl mx-auto px-4 py-12">
     
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold mb-6">What We Offer</h2>
        <p className="text-gray-900 max-w-7xl mx-auto">
          SotBella360 offers comprehensive end-to-end solutions for high-end women's fashion brands. 
          From understanding your brand's vision to delivering your final product, we handle every 
          stage of the process with precision and care.
        </p>
      </div>

      
      <div className="flex justify-center gap-4 mb-12">
        <div className="px-6 py-2 text-lg font-bold border-2 border-gray-900 rounded-full cursor-pointer hover:bg-black hover:text-white transition-colors">
          Tech Packs
        </div>
        <div className="px-6 py-2 border-2 border-gray-300 rounded-full text-gray-600 cursor-pointer hover:border-gray-400 transition-colors">
          White Labelling
        </div>
        <div className="px-6 py-2 border-2 border-gray-300 rounded-full text-gray-600 cursor-pointer hover:border-gray-400 transition-colors">
          Custom Design
        </div>
      </div>

      
      <div className="bg-gradient-to-br from-zinc-900 to-zinc-500 rounded-3xl overflow-hidden shadow-xl">
        <div className="flex flex-col md:flex-row">
          
          <div className="md:w-1/2 p-7">
            <div className="rounded-1xl overflow-hidden h-full">
              <img
                src={whatweoffer}
                alt="Red thread spools in a manufacturing setting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <div className="text-white">
              <p className="text-lg mb-6">
                We start by working closely with your brand to understand your unique vision, 
                style, and goals. Our design team transforms these ideas into tangible concepts 
                and designs.
              </p>
              <div className="flex items-center">
                <a href="#" className="text-lg text-white hover:text-gray-200 font-medium group flex items-center">
                  Learn More
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">»</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

     
      <div className="text-center mt-12">
        <button className="bg-black text-white text-xl px-9 py-2 rounded-full hover:bg-white hover:text-black border border-transparent hover:border-black transition-all">
          Contact Sales
        </button>
      </div>
    </div>
  );
};

export default ServicesSection;