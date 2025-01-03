import React from 'react';
import logo from '../assets/SobtellaLogo-removebg-preview.png'


const Footer = () => {
  return (
    <footer className="bg-stone-100 py-16">
        <div className="max-w-7xl mx-auto px-4 py-7">
        <img src={logo} className='h-12'/>
        </div>
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Company Info */}
        <div className="space-y-6">
          {/* <h2 className="text-2xl font-bold">SÖTBELLA360</h2> */}
          
          <p className="text-gray-900 text-base">
            216, Sector 83 Block A Rd, B Block, A Block<br />
            Sector 83, Noida, Uttar Pradesh 201305
          </p>
          <div className="space-y-2">
            <p>
              <span className="font-semibold">Phone:</span>{' '}
              <a href="tel:0123456789" className="text-gray-600 text-base hover:text-gray-900">0123456789</a>
            </p>
            <p>
              <span className="font-semibold">Email:</span>{' '}
              <a href="mailto:contact@sotbella360.com" className="text-gray-600 hover:text-gray-900">contact@sotbella360.com</a>
            </p>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Useful Links</h3>
          <ul className="space-y-4">
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">About us</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Services</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Portfolio</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Faqs</a></li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Our Services</h3>
          <ul className="space-y-4">
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Tech Packs</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Custom Design</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">White Labelling</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;