import React from 'react';
import { ChevronDown } from 'lucide-react';
import templeBg from '../assets/K0.jpg';

const Hero = () => {
  return (
    <div id="home" className="relative h-screen w-full overflow-hidden">
      
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 animate-slow-zoom"
        style={{
          backgroundImage: `url(${templeBg})`,
        }}
      >
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-black/60 via-transparent to-black/60"></div>
      </div>

      <div className="relative h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 pt-16">
        <h2 className="text-xl md:text-2xl text-temple-gold font-semibold tracking-widest uppercase mb-4 animate-fade-in-up">
          {/* Welcome to */}
        </h2>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-temple-gold mb-6 drop-shadow-lg animate-fade-in-up delay-100">
          श्री बड़े बाबा मंदिर
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-gray-200 mb-8 animate-fade-in-up delay-200">
          {/* A spiritual sanctuary of peace, devotion, and heritage. Experience the divine presence and find your inner calm. */}
          शांति, भक्ति और विरासत का एक आध्यात्मिक अभयारण्य। दिव्य उपस्थिति का अनुभव करें और आंतरिक शांति प्राप्त करें।
        </p>

        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
          <a
            href="#schemes"
            className="px-8 py-3 bg-temple-orange hover:bg-temple-red text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            {/* Explore Sevas */}
            सेवा

          </a>
          <a
            href="#about"
            className="px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 font-semibold rounded-full transition-all duration-300"
          >
            {/* Learn More */}
            अधिक जानें
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white opacity-80 hover:opacity-100">
          <ChevronDown className="h-10 w-10" />
        </a>
      </div>

    </div>
  );
};

export default Hero;
