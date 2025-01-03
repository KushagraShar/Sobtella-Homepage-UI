import React from 'react';
import visionresultimage from '../assets/vsionresult.png';
import com1logo from '../assets/ezili2.png'
import com2logo from '../assets/3333.png'
import com3logo from '../assets/olsksl.png'

const VisionResults = () => {
  const visionStyle = {
    fontFamily: 'Neue Haas Grotesk Display Pro, sans-serif',
   
  };
  const stats = [
    { number: '500+', label: 'Tech Packs Delivered' },
    { number: '20K+', label: 'Products Manufactured' },
    { number: '100+', label: 'Brands Launched' },
    { number: '100%', label: 'Satisfaction Rate' }
  ];

  return (
    <div style={visionStyle} className="bg-gradient-to-br from-zinc-900 to-zinc-500 rounded-3xl p-8 max-w-7xl max-h-full mx-auto">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/5">
          <img
            src={visionresultimage}
            alt="Manufacturing facility"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        
        <div className="md:w-1/2 space-y-10">
          <h2 className="text-4xl font-bold text-white">
            Where Your Vision Meets Results
          </h2>
          
          <div className="md:w-3/4 grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="p-4 rounded-xl border">
                <div className="text-center text-3xl font-medium text-white mb-2">{stat.number}</div>
                <div className="text-center text-white text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <div className="pt-5 px-1 border-t border-zinc-400">
            <div className="flex items-center justify-between gap-2">
              {[com1logo, com3logo, com3logo, com1logo, com3logo].map((logo) => (
                <div key={logo} className="h-10">
                  <div className="w-20 h-5" />
                  <img src={logo} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionResults;