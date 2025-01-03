import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import sliderimg1 from '../assets/sliderimg1.png'
import sliderimg2 from '../assets/sliderimg2.png'
import sliderimg3 from '../assets/sliderimg3.png'

const InsightsSlider = () => {
  const visionStyle = {
    fontFamily: 'Neue Haas Grotesk Display Pro, sans-serif',
   
  };
  const slides = [
    {
      image: sliderimg1,
      source: "VOGUE",
      title: "How to Launch Your First Collection",
      link: "#"
    },
    {
      image: sliderimg2,
      source: "VOGUE",
      title: "The Importance Of Tech Packs In Fashion Production",
      link: "#"
    },
    {
      image: sliderimg3,
      source: "VO23GUE",
      title: "Homegrown Luxe Brand Sotbella Shares How It's Latest",
      link: "#"
    },
    {
        image: sliderimg3,
        source: "VOGUdwdE",
        title: "How to Launch Your First Collection",
        link: "#"
      },
      {
        image: sliderimg3,
        source: "VOG343UE",
        title: "The Importance Of Tech Packs In Fashion Production",
        link: "#"
      },
      {
        image: sliderimg1,
        source: "VOGUE",
        title: "Homegrown Luxe Brand Sotbella Shares How It's Latest",
        link: "#"
      },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 3 >= slides.length ? 0 : prevIndex + 3
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 3 < 0 ? Math.max(0, slides.length - 3) : prevIndex - 3
    );
  };

  return (
    <div style={visionStyle} className="max-w-7xl mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-4xl font-bold mb-4">Insights For Aspiring Fashion Brands</h2>
          <p className="text-gray-900">
            SotBella360 offers comprehensive end-to-end solutions for high-end women's fashion brands.
          </p>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={handlePrev}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
            aria-label="Previous slides"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={handleNext}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
            aria-label="Next slides"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Slider Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {slides.slice(currentIndex, currentIndex + 3).map((slide, index) => (
          <div key={index} className="relative group overflow-hidden rounded-2xl">
            <div className="aspect-w-4 aspect-h-5 relative">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <span className="text-xs font-medium mb-2 block">
                  {slide.source}
                </span>
                <h3 className="text-sm font-medium mb-4 leading-tight">
                  {slide.title}
                </h3>
                <a 
                  href={slide.link} 
                  className="inline-block text-xs hover:underline"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsightsSlider;