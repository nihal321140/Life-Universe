
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const features = [
  {
    title: "Instant Learning",
    description: "Access a universe of knowledge on-demand. Learn what you need, exactly when you need it, without the friction of traditional courses."
  },
  {
    title: "AI-Powered Mentorship",
    description: "Your personal AI mentor guides you, answers questions 24/7, and customizes your learning path for optimal growth."
  },
  {
    title: "Global Skill Platform",
    description: "Connect with peers, collaborate on projects, and benchmark your skills against a global community of future leaders and innovators."
  }
];

const FeatureCard: React.FC<{ title: string; description: string; index: number }> = ({ title, description, index }) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`p-10 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm transition-all duration-700 hover:border-white/30 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <h3 className="font-display text-3xl font-bold text-accent-orange">{title}</h3>
      <p className="mt-4 text-lg text-white/80">{description}</p>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-black/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold">An Ecosystem for Growth</h2>
          <p className="mt-4 text-lg text-white/70">
            Our platform is more than just courses. It's an integrated environment designed for deep, effective, and accelerated learning.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} {...feature} index={index}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
