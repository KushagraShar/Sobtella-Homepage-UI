import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/SobtellaLogo-removebg-preview.png'

const Navbar = () => {
  const visionStyle = {
    fontFamily: 'Neue Haas Grotesk Display Pro, sans-serif',
   
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav style={visionStyle} className="fixed top-0 left-0 right-0 bg-white z-50">
      <div className="flex items-center justify-between px-4 py-8 max-w-[1600px] mx-auto">
        <div className="flex items-center space-x-16">
          <img src={logo} alt="SÖTBELLA360" className="h-25" />
          
         
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-black hover:text-gray-600 transition-colors">Home</a>
            <a href="#" className="text-black hover:text-gray-600 transition-colors">About</a>
            <a href="#" className="text-black hover:text-gray-600 transition-colors">Services</a>
            <a href="#" className="text-black hover:text-gray-600 transition-colors">Portfolio</a>
            <a href="#" className="text-black hover:text-gray-600 transition-colors">Faqs</a>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-white hover:text-black border border-transparent hover:border-black transition-all">
            Contact Sales
          </button>
        </div>

       
        <button 
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

     
      <div 
        className={`absolute top-full left-0 right-0 bg-white md:hidden shadow-lg transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col space-y-4 px-8 py-6">
          <a href="#" className="text-black hover:text-gray-600 transition-colors">Home</a>
          <a href="#" className="text-black hover:text-gray-600 transition-colors">About</a>
          <a href="#" className="text-black hover:text-gray-600 transition-colors">Services</a>
          <a href="#" className="text-black hover:text-gray-600 transition-colors">Portfolio</a>
          <a href="#" className="text-black hover:text-gray-600 transition-colors">Faqs</a>
          <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-white hover:text-black border border-transparent hover:border-black transition-all w-full">
            Contact Sales
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;