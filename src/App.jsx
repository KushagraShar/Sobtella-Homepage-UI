import React from 'react';
import { ArrowRight, Package2, Timer, Headphones, BarChart3 } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Vision from './components/Vision';
import CoFounder from './components/CoFounder';
import VisionResults from './components/VisionResults';
import SeamlessProcess from './components/SeamlessProcess';
import ServicesSection from './components/ServicesSection';
import InsightsSlider from './components/InsightSlider';
import PortfolioSection from './components/PortfolioSection';
import FaqSection from './components/FaqSection';
import Footer from './components/footer';
import CreateInvoiceForm from './components/CreateInvoiceForm ';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Vision />
      <CoFounder />
      <VisionResults/>
      <SeamlessProcess/>
      <ServicesSection/>
      <InsightsSlider/>
      <PortfolioSection/>
      <FaqSection/>
      <Footer/>
      {/* <CreateInvoiceForm/> */}
    </div>
  );
}

export default App;