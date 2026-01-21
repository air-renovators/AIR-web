import React from 'react';
import { Reveal } from './ui/Reveal';
import { Workflow, BarChart3, Settings2, ShieldCheck } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      icon: <Workflow className="h-10 w-10 text-white" />,
      title: "AI Workflow Automation",
      description: "Automate repetitive admin, reporting, scheduling, and client follow-ups. Let machines handle the busy work."
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-white" />,
      title: "Sales & Ops Systems",
      description: "Intelligent CRM automation, lead scoring, and pipeline management. Never lose a lead to 'I forgot' again."
    },
    {
      icon: <Settings2 className="h-10 w-10 text-white" />,
      title: "Custom AI Solutions",
      description: "Bespoke AI agents tailored to your specific business logic. From inventory prediction to customer service bots."
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-white" />,
      title: "Systems Audits",
      description: "Operational renovation. We diagnose your current bottlenecks and architect a lean, automated future state."
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-blue-200 font-semibold tracking-wider text-sm uppercase bg-white/10 px-4 py-1 rounded-full border border-white/10 hover:bg-white/20 transition-colors cursor-default">What We Do</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-6 mb-6">AI Automation & <br/> Integrated Systems</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="group relative p-8 glass-card rounded-3xl hover:bg-white/10 hover:border-white/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)]">
                
                <div className="mb-6 inline-block p-4 rounded-2xl bg-white/20 group-hover:bg-white/30 transition-colors duration-500 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-50 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-blue-100 text-lg group-hover:text-white transition-colors">
                  {service.description}
                </p>

                {/* Subtle sheen overlay on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};