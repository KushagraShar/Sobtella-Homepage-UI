import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What services does SotBella360 offer?",
      answer: "SotBella360 provides comprehensive fashion services including design consultation, tech pack creation, pattern making, sample development, production management, and quality control. We also offer white labeling services and custom design solutions for fashion brands of all sizes."
    },
    {
      question: "How is SotBella360 different from other fashion service providers?",
      answer: "Our unique end-to-end approach combines traditional craftsmanship with modern technology. We offer personalized attention, flexible MOQ options, and integrated digital solutions that streamline the entire production process, setting us apart from conventional service providers."
    },
    {
      question: "What services does SotBella360 offer?",
      answer: "We offer a full suite of services including brand development, design consulting, technical design, sourcing, production management, and quality assurance. Our team specializes in helping brands launch and scale their collections efficiently."
    },
    {
      question: "How is SotBella360 different from other fashion service providers?",
      answer: "We pride ourselves on our innovative approach, combining industry expertise with cutting-edge technology. Our team provides personalized solutions, transparent communication, and exceptional quality control throughout the entire production process."
    },
    {
      question: "How is SotBella360 different from other fashion service providers?",
      answer: "Our commitment to sustainability, ethical production practices, and innovative design solutions sets us apart. We work closely with each client to understand their unique needs and provide tailored solutions that align with their brand vision and values."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">
        Frequently Bought Together
      </h2>

      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="border-b border-gray-200">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full py-6 flex justify-between items-center text-left hover:opacity-70 transition-opacity"
            >
              <span className="text-lg font-normal">{item.question}</span>
              <Plus
                className={`w-6 h-6 transition-transform duration-300 ${
                  openIndex === index ? 'rotate-45' : ''
                }`}
              />
            </button>
            <div
              className={`transition-all duration-300 overflow-hidden ${
                openIndex === index ? 'max-h-96 mb-6' : 'max-h-0'
              }`}
            >
              <p className="text-gray-900">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="px-8 text-lg font-bold py-3 border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors">
          View More
        </button>
      </div>
    </div>
  );
};

export default FaqSection;