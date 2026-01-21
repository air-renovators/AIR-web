import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900/40 border-t border-white/10 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-3 mb-4 md:mb-0">
             <div className="h-10 w-10 overflow-hidden relative">
                <img 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7D0A2fJ3wKk5zL1n8X4c9vB.png" 
                    alt="AIR Logo"
                    className="w-full h-full object-contain object-top scale-[1.5] origin-top translate-y-1"
                />
             </div>
             <span className="font-bold text-lg text-white tracking-wide">AI RENOVATORS</span>
        </div>
        <div className="text-blue-200 text-sm">
          &copy; {new Date().getFullYear()} AI Renovators. All rights reserved. South Africa.
        </div>
      </div>
    </footer>
  );
};