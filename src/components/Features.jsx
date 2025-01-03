import React from 'react';
import custombrand from '../assets/custombrand.png';
import endend from '../assets/endend.png';
import scalablesol from '../assets/scalablesol.png';
import whitelabel from '../assets/whitelabel.png';

function Features() {
  const visionStyle = {
    fontFamily: 'Neue Haas Grotesk Display Pro, sans-serif',
   
  };
  
  return (
    <>
    <div style={visionStyle} className="max-w-[1400px] mx-auto px-6 py-12">
      <div className="flex flex-wrap justify-center items-center gap-8 text-center md:text-left md:justify-between">
        <div className="flex flex-col items-center md:flex-row space-x-0 md:space-x-4 w-full md:w-auto">
          <div className="w-12 h-12">
            <img src={custombrand} alt="Custom Branding" className="w-full h-full" />
          </div>
          <div>
            <h3 className="font-medium">Custom</h3>
            <p className="font-medium">Branding</p>
          </div>
        </div>

        <div className="flex flex-col items-center md:flex-row space-x-0 md:space-x-4 w-full md:w-auto">
          <div className="w-12 h-12">
            <img src={whitelabel} alt="White-Label" className="w-full h-full" />
          </div>
          <div>
            <h3 className="font-medium">White-Label</h3>
            <p className="font-medium">Options</p>
          </div>
        </div>

        <div className="flex flex-col items-center md:flex-row space-x-0 md:space-x-4 w-full md:w-auto">
          <div className="w-12 h-12">
            <img src={endend} alt="End-To-End Support" className="w-full h-full" />
          </div>
          <div>
            <h3 className="font-medium">End-To-End</h3>
            <p className="font-medium">Support</p>
          </div>
        </div>

        <div className="flex flex-col items-center md:flex-row space-x-0 md:space-x-4 w-full md:w-auto">
          <div className="w-12 h-12">
            <img src={scalablesol} alt="Scalable Solutions" className="w-full h-full" />
          </div>
          <div>
            <h3 className="font-medium">Scalable</h3>
            <p className="font-medium">Solutions</p>
          </div>
        </div>
      </div>
    
    </div>
    <hr className='mx-auto max-w-[1500px] overflow-hidden border-gray-300'/>
    </>
  );
}

export default Features;
