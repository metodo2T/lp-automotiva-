import React from 'react';
import { AlertTriangle, Clock, Users, Target } from 'lucide-react';

const painPoints = [
  {
    icon: <Clock className="w-8 h-8 text-brand-orange" />,
    title: "Estoque Parado",
    description: "Carros que ficam meses no pátio comendo seu capital de giro e desvalorizando a cada dia que passa."
  },
  {
    icon: <Users className="w-8 h-8 text-brand-orange" />,
    title: "Leads 'Frios'",
    description: "Sua equipe perde horas respondendo curiosos que perguntam 'preço' e nunca mais respondem."
  },
  {
    icon: <Target className="w-8 h-8 text-brand-orange" />,
    title: "Anúncios sem Estratégia",
    description: "Gastar dinheiro no 'Impulsionar' do Instagram sem segmentação correta para quem tem poder de compra."
  },
  {
    icon: <AlertTriangle className="w-8 h-8 text-brand-orange" />,
    title: "Baixo Fluxo na Loja",
    description: "Dias inteiros sem clientes novos pisando no showroom ou chamando no WhatsApp."
  }
];

const ProblemSection: React.FC = () => {
  return (
    <section className="py-24 bg-brand-grey text-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/20 rounded-full blur-[120px] -z-10"></div>
      
      <div className="container mx-auto px-4">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-brand-orange font-bold text-sm uppercase tracking-[0.2em] mb-4 block">O Cenário Atual</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 leading-tight">
            Você está cansado de ver a concorrência vendendo enquanto sua loja fica vazia?
          </h2>
          <p className="text-slate-400 text-lg font-light leading-relaxed">
            O mercado automotivo mudou. Quem depende apenas de passantes ou portais (WebMotors/OLX) está deixando dinheiro na mesa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {painPoints.map((pain, index) => (
            <div 
              key={index} 
              className="bg-white/[0.03] backdrop-blur-sm border border-white/5 p-8 rounded-2xl hover:bg-white/[0.06] hover:border-brand-orange/30 transition-all duration-300 hover:-translate-y-2 group shadow-lg"
            >
              <div className="mb-6 bg-[#0B1F33] p-4 rounded-xl inline-block border border-white/5 group-hover:border-brand-orange/50 transition-colors shadow-inner">
                {pain.icon}
              </div>
              <h3 className="text-xl font-bold font-heading mb-4 text-white group-hover:text-brand-orange transition-colors">
                {pain.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {pain.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProblemSection;