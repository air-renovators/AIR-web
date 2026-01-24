import React from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Hero } from './components/Hero';
import { ValueProp } from './components/ValueProp';
import { Services } from './components/Services';
import { CaseStudy } from './components/CaseStudy';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Benefits } from './components/Benefits';
import { Process } from './components/Process';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { AiConcierge } from './components/AiConcierge';

const App: React.FC = () => {
  return (
    <div className="font-sans selection:bg-white/30 selection:text-white overflow-x-hidden">
      {/* Navbar removed as requested for a clean one-page experience */}
      <main>
        <Hero />
        <ValueProp />
        <Benefits />
        <Services />
        <CaseStudy />
        <WhyChooseUs />
        <Process />
        <CTA />
      </main>
      <Footer />
      <AiConcierge />
      <SpeedInsights />
    </div>
  );
};

export default App;