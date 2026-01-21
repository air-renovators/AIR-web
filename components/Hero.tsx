import React from 'react';
import { Reveal } from './ui/Reveal';
import { Button } from './ui/Button';
import { ArrowRight, Bot, Cpu } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-10 pb-20">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-400/20 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-500/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        <Reveal width="100%" direction="down">
            {/* Logo Mark Representation */}
            <div className="mb-8 flex justify-center">
                <div className="relative group">
                    {/* Glow effect behind the logo */}
                    <div className="absolute inset-0 bg-white/20 blur-3xl rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-700" />
                    
                    {/* Image Container with cropping to hide bottom text */}
                    <div className="relative w-48 h-32 md:w-72 md:h-48 overflow-hidden">
                        <img 
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7D0A2fJ3wKk5zL1n8X4c9vB.png" 
                            alt="AIR Logo" 
                            className="w-full h-full object-contain object-top drop-shadow-[0_0_25px_rgba(255,255,255,0.2)] scale-[1.3] origin-top translate-y-2" 
                        />
                    </div>
                </div>
            </div>
        </Reveal>

        <Reveal width="100%">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tight mb-8">
            <span className="metallic-text drop-shadow-xl">AI RENOVATORS</span>
          </h1>
        </Reveal>

        <Reveal width="100%" delay={0.2}>
          <p className="mt-4 max-w-2xl mx-auto text-xl md:text-3xl text-blue-50 leading-relaxed font-medium">
            Automate your operations. Reclaim your time. <br className="hidden md:block"/>
            Grow without hiring.
          </p>
        </Reveal>

        <Reveal width="100%" delay={0.4}>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-blue-100/80">
            We eliminate operational bottlenecks for South African businesses by designing integrated AI systems that scale.
          </p>
        </Reveal>

        <Reveal width="100%" delay={0.6}>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
                onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-blue-600 hover:bg-blue-50 border-none shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Book a Demo <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </Reveal>
        
        {/* Floating Icons for Decoration */}
        <div className="absolute top-1/4 left-10 md:left-20 animate-float opacity-30 pointer-events-none hidden lg:block">
            <Bot size={64} className="text-white" />
        </div>
        <div className="absolute bottom-1/3 right-10 md:right-20 animate-float opacity-30 pointer-events-none hidden lg:block" style={{ animationDelay: '1.5s' }}>
            <Cpu size={64} className="text-white" />
        </div>

      </div>
    </section>
  );
};