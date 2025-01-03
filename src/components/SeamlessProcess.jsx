import React from 'react';
import { FileText, Palette, Award, Truck } from 'lucide-react';
import Filetext from '../assets/Group.png'
import Techpack from '../assets/Vector.png'
import Shirt from '../assets/shirt.png'
import delivery from '../assets/delivery.png'
import flexibleprod from '../assets/flexibleprod.png'

const SeamlessProcess = () => {
  const visionStyle = {
    fontFamily: 'Neue Haas Grotesk Display Pro, sans-serif',
  };
  const processes = [
    {
      icon: Filetext,
      title: 'Consultation',
      description: 'We understand your vision, goals, and brand identity.'
    },
    {
      icon: Techpack,
      title: 'Design & Tech Packs',
      description: 'Our designers create production-ready designs and tech packs.'
    },
    {
      icon: Shirt,
      title: 'Sampling',
      description: 'Refine your products with precision-crafted prototypes.'
    },
    {
      icon: flexibleprod,
      title: 'Flexible Production',
      description: 'Choose low MOQ or scale to high-volume production.'
    },
    {
      icon: delivery,
      title: 'Branding & Delivery',
      description: 'Custom labels, packaging, and logistics handled seamlessly.'
    }
  ];

  return (
    <section style={visionStyle} className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-semibold text-center mb-16">
        Our Seamless Process
      </h2>

      <div className="relative mb-16">
        <div className="flex flex-wrap lg:flex-nowrap justify-between gap-8">
          {processes.map((process, index) => (
            <div key={index} className="flex flex-col items-center text-center w-full lg:w-48">
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-gradient-to-t from-black to-zinc-300  rounded-full flex items-center justify-center mb-4">
                  <img src={process.icon} className="w-10 h-10 text-white" />
                </div>
                {index < processes.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[100%] w-48 border border-dotted border-t-black" />
                )}
              </div>
              <h3 className="font-semibold mb-2">{process.title}</h3>
              <p className="text-sm text-gray-600 max-w-[200px]">
                {process.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <button className="bg-black text-white text-xl px-9 py-2 rounded-full hover:bg-white hover:text-black border border-transparent hover:border-black transition-all">
          Contact Sales
        </button>
      </div>
    </section>
  );
};

export default SeamlessProcess;