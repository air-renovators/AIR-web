import React from 'react';
import { Reveal } from './ui/Reveal';
import { CheckCircle2, Clock, Video } from 'lucide-react';

export const CaseStudy: React.FC = () => {
  return (
    <section id="case-study" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <Reveal width="100%" direction="right">
            <div>
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-1 mb-6 hover:bg-white/30 transition-colors cursor-default">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
                </span>
                <span className="text-white text-sm font-semibold uppercase tracking-wide">Live Case Study</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Transforming <br/>
                <span className="text-blue-200">Mtunzini Country Club</span>
              </h2>
              
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                The Club was bogged down by manual admin for their "Weekly Specials" and lacked consistent marketing assets. We renovated their operations with a custom AI ecosystem.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-white mt-1 flex-shrink-0" />
                  <p className="ml-3 text-blue-100">Automated creation of weekly special menus.</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-white mt-1 flex-shrink-0" />
                  <p className="ml-3 text-blue-100">Generated cinematic video assets for social media.</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-white mt-1 flex-shrink-0" />
                  <p className="ml-3 text-blue-100">Seamless integration with scheduling tools.</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal width="100%" direction="left">
            <div className="relative">
              {/* Card Container */}
              <div className="glass-card rounded-3xl p-8 relative z-10 shadow-2xl hover:border-white/20 transition-colors duration-500">
                
                <h3 className="text-xl text-white font-semibold mb-6 border-b border-white/20 pb-4">Key Results</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Stat 1 */}
                  <div className="bg-white/10 p-6 rounded-2xl border border-white/20 hover:bg-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <Clock className="text-white" size={24} />
                      <span className="text-xs font-bold bg-white/20 text-white px-2 py-1 rounded">EFFICIENCY</span>
                    </div>
                    <div className="text-4xl font-bold text-white mb-1">15+</div>
                    <div className="text-sm text-blue-200">Admin Hours Saved / Wk</div>
                  </div>

                  {/* Stat 2 */}
                  <div className="bg-white/10 p-6 rounded-2xl border border-white/20 hover:bg-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <Video className="text-white" size={24} />
                      <span className="text-xs font-bold bg-white/20 text-white px-2 py-1 rounded">OUTPUT</span>
                    </div>
                    <div className="text-4xl font-bold text-white mb-1">24+</div>
                    <div className="text-sm text-blue-200">Video Assets / Mo</div>
                  </div>
                </div>

                <div className="mt-6 bg-emerald-500/20 border border-emerald-500/30 p-4 rounded-xl flex items-center justify-center hover:bg-emerald-500/30 transition-colors">
                   <div className="w-3 h-3 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
                   <span className="text-white font-semibold">System Status: Fully Operational</span>
                </div>
                
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};