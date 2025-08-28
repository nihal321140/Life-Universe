
import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-space-blue/80 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-4">
            <Logo />
            <span className="font-display text-2xl font-bold">Life Universe</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#solutions" className="text-white/80 hover:text-white transition-colors duration-300">Solutions</a>
            <a href="#features" className="text-white/80 hover:text-white transition-colors duration-300">Features</a>
            <a href="#impact" className="text-white/80 hover:text-white transition-colors duration-300">Impact</a>
          </nav>
          <a href="#" className="hidden md:inline-block bg-white/10 text-white px-6 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
            Sign In
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
