import React from 'react';
import { Target, Zap, Filter, TrendingUp, BarChart3, MousePointer2 } from 'lucide-react';

const benefits = [
  {
    icon: <Target className="w-6 h-6 text-white" />,
    title: "Segmentação de Compradores",
    description: "Anunciamos apenas para quem pesquisou modelos específicos, tem interesse em troca ou perfil de crédito aprovado."
  },
  {
    icon: <Zap className="w-6 h-6 text-white" />,
    title: "Funil de Vendas Rápido",
    description: "Estratégia focada em levar o cliente do anúncio para o WhatsApp ou visita em poucos cliques."
  },
  {
    icon: <Filter className="w-6 h-6 text-white" />,
    title: "Criativos de Alta Conversão",
    description: "Fotos e vídeos que valorizam o veículo, geram desejo e usam gatilhos de escassez e oportunidade."
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-white" />,
    title: "Otimização de ROI",
    description: "Monitoramos suas campanhas diariamente para reduzir o custo por lead e aumentar o lucro por venda."
  }
];

const SolutionSection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
        {/* Subtle decorative background */}
        <div className="absolute top-20 left-0 w-64 h-64 bg-slate-100 rounded-full blur-3xl -z-10 opacity-60"></div>

      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Content Side */}
        <div className="lg:w-1/2">
          <span className="text-brand-blue font-bold text-xs uppercase tracking-[0.2em] mb-4 block bg-brand-blue/5 px-4 py-2 rounded-full w-fit border border-brand-blue/10">O Método 2T</span>
          <h2 className="text-4xl md:text-5xl font-heading font-black text-brand-blue mb-8 leading-tight">
            Nós Trazemos o Cliente. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-600">Você Fecha a Venda.</span>
          </h2>
          <p className="text-slate-600 text-lg mb-10 leading-relaxed font-light">
            O <strong className="text-brand-blue font-bold">Método 2T</strong> é validado em dezenas de lojas pelo Brasil. Não fazemos "postzinho", fazemos estratégias de performance de alta octanagem para vender carros.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card hover:shadow-xl transition-all duration-300 hover:border-brand-orange/20 group">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-blue to-slate-900 rounded-xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-brand-blue mb-3 font-heading">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Side */}
        <div className="lg:w-1/2 relative flex justify-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-b from-brand-blue/5 to-brand-orange/5 rounded-full blur-[80px] -z-10"></div>
          
          {/* Main Floating Card */}
          <div className="relative bg-[#0B1F33] text-white rounded-3xl p-8 shadow-2xl border border-white/10 w-full max-w-md rotate-3 hover:rotate-0 transition-all duration-500 ease-out z-10">
             
             {/* Header of Card */}
             <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-6">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <TrendingUp size={20} className="text-brand-orange" />
                   </div>
                   <div>
                        <p className="text-slate-400 text-[10px] uppercase tracking-wider">Campanha Ativa</p>
                        <p className="text-white font-bold text-lg">Queima de Estoque SUV</p>
                   </div>
                </div>
                <div className="bg-green-500/10 text-green-400 text-xs px-3 py-1.5 rounded-full font-bold uppercase border border-green-500/20 shadow-[0_0_10px_rgba(34,197,94,0.2)] animate-pulse">
                    ● Ativa
                </div>
             </div>
             
             {/* Stats Grid */}
             <div className="space-y-6">
                <div className="flex justify-between items-center group">
                   <div className="flex items-center gap-3">
                        <div className="p-2 rounded bg-white/5 group-hover:bg-brand-orange/20 transition-colors">
                            <BarChart3 size={16} className="text-slate-300 group-hover:text-brand-orange" />
                        </div>
                        <span className="text-slate-300 text-sm">Investimento</span>
                   </div>
                   <span className="text-white font-mono font-bold text-lg">R$ 2.500,00</span>
                </div>

                <div className="flex justify-between items-center group">
                   <div className="flex items-center gap-3">
                        <div className="p-2 rounded bg-white/5 group-hover:bg-brand-orange/20 transition-colors">
                            <MousePointer2 size={16} className="text-slate-300 group-hover:text-brand-orange" />
                        </div>
                        <span className="text-slate-300 text-sm">Cliques no Link</span>
                   </div>
                   <span className="text-brand-orange font-mono font-bold text-lg">1.240</span>
                </div>

                {/* Highlight Box */}
                <div className="bg-gradient-to-r from-white/5 to-white/[0.02] p-6 rounded-xl mt-6 border border-white/10 relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-20 h-20 bg-green-500/10 rounded-full blur-xl"></div>
                   <div className="flex justify-between items-end relative z-10">
                      <div>
                        <span className="text-slate-400 text-xs uppercase block mb-1">Custo por Lead</span>
                        <div className="flex items-baseline gap-2">
                             <span className="text-green-400 font-mono font-bold text-3xl">R$ 13,50</span>
                             <span className="text-xs text-green-500/80 font-bold">▼ -15%</span>
                        </div>
                      </div>
                      <div className="text-right">
                          <span className="text-slate-400 text-xs uppercase block mb-1">Conversas</span>
                          <span className="text-white font-bold text-2xl">185</span>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          {/* Floating Elements decoration */}
          <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 animate-bounce-slow hidden sm:block z-20">
             <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                     <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                 </div>
                 <div>
                     <p className="text-xs text-slate-500">Novo Lead</p>
                     <p className="text-brand-blue font-bold">Interesse em Civic 2021</p>
                 </div>
             </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SolutionSection;