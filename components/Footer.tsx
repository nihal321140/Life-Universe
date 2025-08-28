
import React from 'react';
import { Logo } from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="relative py-24 border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-space-blue/50 to-transparent -z-10"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="font-display text-4xl md:text-6xl font-bold max-w-4xl mx-auto">
          Be part of the future. <br/>Life Universe starts here.
        </h2>
        <div className="mt-10">
          <a href="#" className="bg-accent-orange text-white font-bold text-lg px-12 py-4 rounded-full shadow-lg shadow-accent-orange/30 hover:scale-105 transform transition-transform duration-300">
            Join Now
          </a>
        </div>
      </div>
      <div className="mt-24 pt-8 border-t border-white/10 text-center text-white/50">
        <div className="flex items-center justify-center space-x-2 mb-4">
            <Logo />
            <span className="font-display text-xl">Life Universe</span>
        </div>
        <p>&copy; {new Date().getFullYear()} Life Universe Inc. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
