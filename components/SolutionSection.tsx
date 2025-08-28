
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const solutions = [
  {
    title: "Skill-Based Learning",
    description: "Master in-demand skills through a curriculum designed with industry experts.",
  },
  {
    title: "Real-World Projects",
    description: "Build a portfolio that showcases your talent by working on tangible projects.",
  },
  {
    title: "Futuristic Tech",
    description: "Engage with cutting-edge tools like AI, VR, and blockchain simulations.",
  },
  {
    title: "Freedom to Explore",
    description: "Follow your curiosity with personalized learning paths that adapt to you.",
  },
];

const SolutionCard: React.FC<{ title: string; description: string; index: number }> = ({ title, description, index }) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  return (
    <div 
      ref={ref} 
      className={`relative p-8 rounded-2xl overflow-hidden border border-white/10 bg-space-blue/50 transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent-green/10 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-accent-green/20 rounded-full filter blur-3xl"></div>
        <h3 className="font-display text-2xl font-bold relative z-10">{title}</h3>
        <p className="mt-4 text-white/80 relative z-10">{description}</p>
    </div>
  );
};

const SolutionSection: React.FC = () => {
  return (
    <section id="solutions" className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold">Welcome to the Future of Learning</h2>
          <p className="mt-4 text-lg text-white/70">
            Life Universe rebuilds education from the ground up, focusing on what truly matters for success in the new economy.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard key={solution.title} {...solution} index={index}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
