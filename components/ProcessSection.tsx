import React from 'react';
import { Search, Rocket, BarChart2 } from 'lucide-react';

const steps = [
  {
    icon: <Search className="w-6 h-6" />,
    title: "1. Diagnóstico",
    desc: "Analisamos seu estoque, seu público-alvo e seus concorrentes para traçar a melhor rota."
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "2. Lançamento",
    desc: "Produzimos os criativos, configuramos o rastreamento e colocamos suas campanhas no ar."
  },
  {
    icon: <BarChart2 className="w-6 h-6" />,
    title: "3. Escala & Otimização",
    desc: "Acompanhamento diário para baixar o custo do lead e aumentar o volume de vendas."
  }
];

const ProcessSection: React.FC = () => {
  return (
    <section className="py-24 bg-brand-grey text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16">
          Como Funciona na Prática
        </h2>

        <div className="relative max-w-5xl mx-auto">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-white/10 z-0"></div>

          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full bg-brand-blue border-2 border-brand-orange flex items-center justify-center text-brand-orange mb-6 shadow-[0_0_20px_rgba(255,177,0,0.2)] group-hover:scale-110 transition-transform duration-300 bg-brand-grey">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold font-heading mb-3">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-xs">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;