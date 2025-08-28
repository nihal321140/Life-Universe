
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const testimonials = [
  {
    quote: "Life Universe didn't just teach my daughter code; it taught her how to think. It's the most valuable investment we've ever made in her future.",
    name: "Sarah L.",
    role: "Parent"
  },
  {
    quote: "I went from zero experience to building my own AI application in six months. The AI mentorship is like having a senior engineer guiding you 24/7.",
    name: "David C.",
    role: "Student, Age 19"
  },
  {
    quote: "The focus on real projects is a game-changer. I landed my dream internship because I had a portfolio, not just a transcript.",
    name: "Maria P.",
    role: "Student, Age 22"
  }
];

const TestimonialCard: React.FC<{ quote: string; name: string; role: string; index: number }> = ({ quote, name, role, index }) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`p-8 border border-white/10 rounded-2xl bg-space-blue/30 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <p className="text-lg text-white/90">"{quote}"</p>
      <div className="mt-6">
        <p className="font-bold font-display text-xl">{name}</p>
        <p className="text-white/60">{role}</p>
      </div>
    </div>
  );
};

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-24 bg-black/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold">Trusted by the Next Generation</h2>
          <p className="mt-4 text-lg text-white/70">
            Hear from the students and parents who are building the future with us.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} {...testimonial} index={index}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
