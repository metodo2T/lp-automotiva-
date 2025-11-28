import React from 'react';

const stats = [
  { value: "+120%", label: "Leads Qualificados" },
  { value: "3x", label: "Mais Agendamentos" },
  { value: "-35%", label: "Custo por Lead" },
  { value: "Rápido", label: "Giro de Estoque" }
];

const ResultsSection: React.FC = () => {
  return (
    <section className="py-20 bg-brand-blue relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#FFFFFF 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            
            <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                    Resultados Reais de quem investe com inteligência
                </h2>
                <p className="text-slate-300 text-lg mb-8">
                    Não prometemos milagres. Prometemos um método validado que traz previsibilidade para o seu caixa. Veja o impacto médio nas lojas que atendemos.
                </p>
                <ul className="space-y-3 mb-8">
                    {["Entendimento claro do que vende mais", "Redução de custos com portais ineficientes", "Equipe de vendas sempre ocupada"].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-white font-medium">
                            <span className="w-6 h-px bg-brand-orange"></span>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="lg:w-1/2 grid grid-cols-2 gap-4 w-full">
                {stats.map((stat, idx) => (
                    <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-xl text-center transform hover:scale-105 transition-transform duration-300">
                        <span className="block text-4xl md:text-5xl font-bold text-brand-orange mb-2 font-heading">{stat.value}</span>
                        <span className="text-slate-300 text-sm uppercase tracking-wider font-semibold">{stat.label}</span>
                    </div>
                ))}
            </div>

        </div>
      </div>
    </section>
  );
};

export default ResultsSection;