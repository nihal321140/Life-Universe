
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const impactPoints = [
  { stage: 'Stage 01', title: 'Foundation', description: 'Build core knowledge with interactive modules.' },
  { stage: 'Stage 02', title: 'Application', description: 'Apply skills in real-world project simulations.' },
  { stage: 'Stage 03', title: 'Collaboration', description: 'Join global teams to solve complex challenges.' },
  { stage: 'Stage 04', title: 'Mastery', description: 'Achieve expert-level proficiency and earn credentials.' },
];

const ImpactNode: React.FC<{ stage: string; title: string; description: string; isVisible: boolean; index: number; }> = ({ stage, title, description, isVisible, index }) => {
    const isOdd = index % 2 !== 0;
    return (
        <div className="relative flex items-center justify-center w-full my-4">
            <div className={`relative w-1/2 p-6 rounded-lg ${isOdd ? 'text-left ml-auto' : 'text-right mr-auto'}`}>
                <div 
                    className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : (isOdd ? 'opacity-0 translate-x-10' : 'opacity-0 -translate-x-10')}`}
                    style={{transitionDelay: `${index * 200}ms`}}
                >
                    <p className="text-accent-green font-display">{stage}</p>
                    <h3 className="text-2xl font-bold font-display mt-1">{title}</h3>
                    <p className="text-white/70 mt-2">{description}</p>
                </div>
            </div>
            <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-accent-green shadow-lg shadow-accent-green/50 transition-transform duration-1000 ${isVisible ? 'scale-100' : 'scale-0'}`} style={{transitionDelay: `${index * 200 + 100}ms`}}></div>
        </div>
    );
};


const ImpactSection: React.FC = () => {
    const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="impact" className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold">Your Growth Trajectory</h2>
          <p className="mt-4 text-lg text-white/70">
            From novice to expert, Life Universe provides a clear, structured path to unlock your full potential.
          </p>
        </div>

        <div ref={ref} className="relative mt-20 max-w-2xl mx-auto">
          <div className={`absolute left-1/2 top-0 h-full w-0.5 bg-white/10 transition-transform duration-1000 origin-top ${isVisible ? 'scale-y-100' : 'scale-y-0'}`} style={{transitionDelay: '200ms'}}></div>
          {impactPoints.map((point, index) => (
            <ImpactNode key={point.title} {...point} isVisible={isVisible} index={index}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
