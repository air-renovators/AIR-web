import React from 'react';
import { Reveal } from './ui/Reveal';

export const Process: React.FC = () => {
  const steps = [
    { title: "Discovery", desc: "We audit your current manual processes and identify high-value automation targets." },
    { title: "System Design", desc: "We architect a custom solution using best-in-class AI models and integration tools." },
    { title: "Automation Build", desc: "Our engineers build the agents, connections, and workflows." },
    { title: "Deployment", desc: "We launch, test, and optimize. Your team gets trained, and the system goes live." }
  ];

  return (
    <section id="process" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 text-center">How It Works</h2>
        </Reveal>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[40px] left-0 w-full h-1 bg-white/20 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <Reveal key={index} delay={index * 0.2}>
                <div className="relative z-10 flex flex-col md:items-center md:text-center group">
                    {/* Number Circle */}
                  <div className="w-20 h-20 glass-card bg-blue-600/50 border border-white/40 text-white text-2xl font-bold rounded-full flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 group-hover:bg-blue-500 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all duration-300">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors">{step.title}</h3>
                  <p className="text-blue-100 text-sm">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};