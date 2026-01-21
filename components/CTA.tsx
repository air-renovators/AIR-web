import React from 'react';
import { Reveal } from './ui/Reveal';
import { InlineWidget } from "react-calendly";

export const CTA: React.FC = () => {
  return (
    <section id="cta" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <Reveal width="100%">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Schedule your discovery call now
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Stop working <i>in</i> your business. Start working <i>on</i> it.
          </p>
          
          <div className="w-full max-w-4xl mx-auto glass-card rounded-3xl overflow-hidden p-4 md:p-8 bg-white/5">
             <div className="h-[700px] w-full">
                <InlineWidget 
                    url="https://calendly.com/air-renovators/30min" 
                    styles={{
                        height: '100%',
                        width: '100%'
                    }}
                    pageSettings={{
                        backgroundColor: '0055ff',
                        hideEventTypeDetails: false,
                        hideLandingPageDetails: false,
                        primaryColor: 'ffffff',
                        textColor: 'ffffff'
                    }}
                />
             </div>
          </div>
          
          <p className="mt-8 text-sm text-blue-200/60">
            Clear next steps within the session. No obligation.
          </p>
        </Reveal>
      </div>
    </section>
  );
};