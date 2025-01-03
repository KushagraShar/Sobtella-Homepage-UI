import React, { useState } from 'react';
import portfolioimg from '../assets/portfolioimage.png'

const PortfolioSection = () => {
  const visionStyle = {
    fontFamily: 'Neue Haas Grotesk Display Pro, sans-serif',
   
  };
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Co-Ords', 'Dresses', 'Eth', 'Denims'];

  const portfolioItems = [
    {
      id: 1,
      image: portfolioimg,
      category: "Co-Ords"
    },
    // {
    //   id: 2,
    //   image: "/api/placeholder/600/800",
    //   category: "Dresses"
    // },
    // {
    //   id: 3,
    //   image: "/api/placeholder/600/800",
    //   category: "Co-Ords"
    // }
  ];

  return (
    <div style={visionStyle} className="max-w-7xl mx-auto px-4 py-16">
      
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Our Work Speaks For Itself</h2>
        <p className="text-gray-900 max-w-7xl mx-auto">
          Explore our portfolio of designs, products, and branding for startups, scaling brands, and enterprises.
        </p>
      </div>

      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-6 py-2 rounded-full border-2 transition-all duration-300 
              ${activeFilter === filter 
                ? 'border-black text-lg font-bold hover:bg-black hover:text-white' 
                : 'border-gray-300 text-gray-600 hover:border-gray-400'
              }`}
          >
            {filter}
          </button>
        ))}
      </div>

      
      <div className="w-full">
        {portfolioItems.map((item) => (
          <div 
            key={item.id} 
            className="rounded-2xl overflow-hidden group cursor-pointer"
          >
            <div className="relative overflow-hidden">
              <img
                src={item.image}
                alt="Portfolio item"
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioSection;