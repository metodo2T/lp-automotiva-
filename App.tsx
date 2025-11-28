import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import ServicesSection from './components/ServicesSection';
import ResultsSection from './components/ResultsSection';
import TestimonialsSection from './components/TestimonialsSection';
import ProcessSection from './components/ProcessSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-brand-blue font-sans selection:bg-brand-orange selection:text-brand-blue overflow-x-hidden">
      <Header />
      <Hero />
      <div id="problemas">
        <ProblemSection />
      </div>
      <div id="solucao">
        <SolutionSection />
      </div>
      <ServicesSection />
      <div id="resultados">
        <ResultsSection />
      </div>
      <div id="depoimentos">
        <TestimonialsSection />
      </div>
      <ProcessSection />
      <AboutSection />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default App;