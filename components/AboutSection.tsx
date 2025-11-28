import React from 'react';
import { ShieldCheck, Award } from 'lucide-react';

const founders = [
    {
        name: "Jean Marcelo",
        role: "Co-Founder & Estrategista",
        image: "https://i.postimg.cc/K8yC5KKs/e3ec11d6-8638-4720-bdae-241acddf8ad1.jpg",
        bio: "Especialista em tráfego pago focado em escala. Desenvolveu a estrutura de campanhas que já gerou milhões em vendas automotivas."
    },
    {
        name: "Bruno Cesar",
        role: "Co-Founder & Especialista Comercial",
        image: "https://i.postimg.cc/L5c321dT/5c3e06e2-d9c3-41c6-bb95-502d517e315d.jpg",
        bio: "Expert no mercado automotivo e processos de vendas. Mente por trás da validação das ofertas e do treinamento comercial."
    }
];

const AboutSection: React.FC = () => {
  return (
    <section className="py-24 bg-brand-blue text-white border-t border-white/5 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-[100px] -z-0 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Intro Text */}
        <div className="max-w-4xl mx-auto text-center mb-20">
           <div className="inline-flex items-center gap-2 text-brand-orange font-bold mb-6 bg-brand-orange/10 px-4 py-1.5 rounded-full text-xs uppercase tracking-widest border border-brand-orange/20">
             <ShieldCheck size={16} />
             Quem Faz Acontecer
           </div>
           <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8 leading-tight">
             Mentes por trás do <span className="text-brand-orange">Método 2T</span>
           </h2>
           <p className="text-slate-300 text-lg leading-relaxed font-light max-w-2xl mx-auto">
             Não somos apenas gestores de tráfego. Somos parceiros de negócio que entendem de margem, giro de estoque e qualificação de lead. Unimos a técnica dos anúncios com a vivência de chão de loja.
           </p>
        </div>

        {/* Founders Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {founders.map((founder, idx) => (
                <div key={idx} className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/20 to-transparent rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                    <div className="relative bg-[#0f243a] border border-white/10 rounded-3xl p-8 overflow-hidden hover:border-brand-orange/30 transition-colors duration-300 h-full flex flex-col items-center text-center">
                        
                        {/* Image Container */}
                        <div className="w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-brand-orange/20 p-1 mb-8 shadow-2xl relative">
                            <img 
                                src={founder.image} 
                                alt={founder.name} 
                                className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500"
                            />
                            <div className="absolute bottom-3 right-3 bg-brand-orange text-brand-blue p-2.5 rounded-full shadow-lg">
                                <Award size={24} />
                            </div>
                        </div>

                        {/* Text Content */}
                        <h3 className="text-2xl font-bold font-heading text-white mb-2">{founder.name}</h3>
                        <p className="text-brand-orange text-sm uppercase tracking-wider font-bold mb-4">{founder.role}</p>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-sm">{founder.bio}</p>

                    </div>
                </div>
            ))}
        </div>

        {/* Stats Strip */}
        <div className="mt-20 border-t border-white/5 pt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
                { label: "Milhões Gerados", val: "R$ 15M+" },
                { label: "Clientes Ativos", val: "40+" },
                { label: "Estados Atendidos", val: "12" },
                { label: "Satisfação", val: "98%" }
            ].map((stat, i) => (
                <div key={i}>
                    <p className="text-2xl md:text-3xl font-bold text-white font-mono mb-1">{stat.val}</p>
                    <p className="text-slate-500 text-xs uppercase tracking-widest">{stat.label}</p>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default AboutSection;