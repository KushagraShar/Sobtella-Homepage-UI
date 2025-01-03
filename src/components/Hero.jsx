import React, { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';
import HeroVideo from '../assets/HeroVideo.mp4';

function Hero() {
  const visionStyle = {
    fontFamily: 'Neue Haas Grotesk Display Pro, sans-serif',
   
  };
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div style={visionStyle} className="relative pt-32">
      <div className="relative w-full h-[600px] rounded-3xl mx-auto max-w-[1600px] overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            loop
            autoPlay
            muted
          >
            <source src={HeroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-8">
          <h1 className="text-[64px] font-bold leading-tight mb-6 text-black">
            From Vision to Reality<br />
            our Fashion Co-Founder.
          </h1>
          <p className="text-xl text-black max-w-2xl mb-8">
            End-to-end fashion solutions for startups, scaling brands, and<br />
            enterprises. From design to delivery, we co-create your success.
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-full text-lg font-medium hover:bg-black hover:text-white">
            Contact Sales
          </button>
        </div>

        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          className="absolute bottom-6 right-6 z-20 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors"
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          {isPlaying ? (
            <Pause className="w-6 h-6 text-white" />
          ) : (
            <Play className="w-6 h-6 text-white" />
          )}
        </button>
      </div>
    </div>
  );
}

export default Hero;