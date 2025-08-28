
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden pt-20">
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          Learn Life, Live Future
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          Life Universe is a new paradigm in education, designed to equip you with the skills for tomorrow's world, today.
        </p>
        <div className="mt-10 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <a href="#solutions" className="bg-accent-orange text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg shadow-accent-orange/30 hover:scale-105 transform transition-transform duration-300">
            Start Your Journey
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default HeroSection;
