import React from 'react';
import { Reveal } from './ui/Reveal';
import { MapPin, Zap, Target, BrainCircuit } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: <BrainCircuit />,
      title: "Systems-First Thinking",
      desc: "We don't just throw tools at you. We re-engineer your workflow first, then automate it."
    },
    {
      icon: <Target />,
      title: "Built for Real Business",
      desc: "No experiments or research projects. We build practical systems that drive revenue."
    },
    {
      icon: <Zap />,
      title: "Weeks, Not Months",
      desc: "Agile deployment means you see ROI in your first billing cycle, not next year."
    },
    {
      icon: <MapPin />,
      title: "Local Understanding",
      desc: "We understand the unique challenges of South African business operations and connectivity."
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal width="100%">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Why Businesses Choose <br />AI Renovators</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <Reveal key={index} delay={index * 0.15}>
              <div className="flex flex-col items-center text-center p-6 rounded-3xl hover:bg-white/10 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] hover:-translate-y-1 transition-all duration-500 group">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6 shadow-lg border border-white/20 text-white backdrop-blur-md group-hover:scale-110 group-hover:bg-white/30 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-500">
                  {React.cloneElement(reason.icon as React.ReactElement, { size: 36 })}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
                <p className="text-blue-100 text-sm leading-relaxed">{reason.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};