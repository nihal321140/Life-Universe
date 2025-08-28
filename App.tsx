import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import FeaturesSection from './components/FeaturesSection';
import ImpactSection from './components/ImpactSection';
import TestimonialSection from './components/TestimonialSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-black text-white font-sans overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-b from-space-blue to-black -z-10"></div>
      
      {/* Abstract Glowing Shapes */}
      <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-accent-orange/10 rounded-full filter blur-3xl animate-float -z-10"></div>
      <div className="absolute top-[50%] right-[5%] w-96 h-96 bg-accent-green/10 rounded-full filter blur-3xl animate-float -z-10" style={{ animationDelay: '3s' }}></div>
      <div className="absolute bottom-[5%] left-[15%] w-60 h-60 bg-white/5 rounded-full filter blur-3xl animate-float -z-10" style={{ animationDelay: '6s' }}></div>

      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <ImpactSection />
        <TestimonialSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;