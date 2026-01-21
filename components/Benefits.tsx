import React from 'react';
import { Reveal } from './ui/Reveal';
import { Clock, TrendingUp, Users, Zap, CheckCircle2 } from 'lucide-react';

export const Benefits: React.FC = () => {
  // Shared hover class for consistency across cards
  const cardHover = "hover:bg-white/15 hover:border-white/40 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:-translate-y-2";

  return (
    <section id="benefits" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal width="100%">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              From chaos to clarity
            </h2>
            <p className="text-blue-100 text-xl max-w-2xl mx-auto">
                See the tangible impact of an AI-renovated operating system.
            </p>
          </div>
        </Reveal>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
          
          {/* Large Card - Time Saved */}
          <div className={`md:col-span-2 md:row-span-2 glass-card rounded-3xl p-8 md:p-12 flex flex-col justify-between ${cardHover}`}>
            <div>
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-blue-500/20 rounded-full border border-blue-400/20">
                        <Clock className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-blue-100 font-medium text-lg">Average Time Saved</span>
                </div>
                <div className="text-6xl md:text-8xl font-bold text-white mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">15+ hrs</div>
                <div className="text-2xl text-blue-200">per week, per team member</div>
            </div>
            
            {/* Abstract visual bar chart at bottom */}
            <div className="flex items-end gap-2 h-24 mt-8 opacity-50 group-hover:opacity-80 transition-opacity">
                <div className="w-1/6 bg-white/20 h-[30%] rounded-t-lg"></div>
                <div className="w-1/6 bg-white/30 h-[50%] rounded-t-lg"></div>
                <div className="w-1/6 bg-white/40 h-[40%] rounded-t-lg"></div>
                <div className="w-1/6 bg-white/50 h-[70%] rounded-t-lg"></div>
                <div className="w-1/6 bg-white/60 h-[60%] rounded-t-lg"></div>
                <div className="w-1/6 bg-white/80 h-[90%] rounded-t-lg"></div>
            </div>
          </div>

          {/* Medium Card - Hiring */}
          <div className={`glass-card rounded-3xl p-8 flex flex-col justify-center bg-blue-600/30 ${cardHover}`}>
            <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-white" />
                <span className="text-blue-100 font-medium">New Hires Needed</span>
            </div>
            <div className="text-6xl font-bold text-white mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">0</div>
            <div className="text-blue-200 text-sm">Scale without adding headcount</div>
          </div>

          {/* Medium Card - Onboarding */}
          <div className={`glass-card rounded-3xl p-8 flex flex-col justify-center bg-indigo-600/30 ${cardHover}`}>
             <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-white" />
                <span className="text-blue-100 font-medium">Fast Onboarding</span>
            </div>
            <div className="text-6xl font-bold text-white mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">48h</div>
            <div className="text-blue-200 text-sm">From setup to live operation</div>
          </div>

          {/* Wide Card - ROI */}
          <div className={`md:col-span-2 glass-card rounded-3xl p-8 flex flex-col md:flex-row md:items-center justify-between ${cardHover}`}>
            <div>
                <div className="flex items-center gap-3 mb-2">
                    <TrendingUp className="w-6 h-6 text-white" />
                    <span className="text-blue-100 font-medium">ROI Timeline</span>
                </div>
                <div className="text-5xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">14 Days</div>
                <div className="text-blue-200 text-sm mt-1">To see measurable results</div>
            </div>
            <div className="mt-6 md:mt-0 flex gap-2">
                {[1,2,3,4,5].map(i => (
                    <div key={i} className={`w-3 h-3 rounded-full transition-all duration-300 ${i <= 4 ? 'bg-white shadow-[0_0_8px_rgba(255,255,255,0.5)]' : 'bg-white/30'}`}></div>
                ))}
            </div>
          </div>

          {/* Small Card - Satisfaction */}
          <div className={`glass-card rounded-3xl p-8 flex flex-col justify-center ${cardHover}`}>
            <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
                <span className="text-blue-100 font-medium">Satisfaction</span>
            </div>
            <div className="text-5xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">100%</div>
          </div>

        </div>
      </div>
    </section>
  );
};