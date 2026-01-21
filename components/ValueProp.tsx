import React from 'react';
import { Reveal } from './ui/Reveal';
import { TrendingDown, Users, Puzzle } from 'lucide-react';

export const ValueProp: React.FC = () => {
  const points = [
    {
      icon: <TrendingDown className="h-8 w-8 text-white" />,
      title: "Growth Stalls",
      desc: "Manual work kills momentum. When your team is drowning in admin, they can't focus on closing deals."
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: "Hiring Complexity",
      desc: "Scaling by adding headcount is expensive and slow. Training takes months; AI is ready instantly."
    },
    {
      icon: <Puzzle className="h-8 w-8 text-white" />,
      title: "Tool Chaos",
      desc: "Spreadsheets, WhatsApps, and disconnected SaaS tools create operational blind spots and errors."
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Built for businesses that have <br/>
                    <span className="text-blue-200">outgrown manual operations</span>
                </h2>
                <p className="text-blue-100 max-w-2xl mx-auto text-lg">
                    If you're generating R1.5m+ but still running on spreadsheets and memory, you're hitting the "admin ceiling".
                </p>
            </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <Reveal key={index} delay={index * 0.2}>
              <div className="glass-card p-8 rounded-3xl h-full hover:bg-white/10 hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:-translate-y-1 transition-all duration-500 group">
                <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/30 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-500 backdrop-blur-sm">
                  {point.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-50 transition-colors">{point.title}</h3>
                <p className="text-blue-100 leading-relaxed">{point.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};