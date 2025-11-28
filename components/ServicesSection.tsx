import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const deliverables = [
  "Gestão Profissional de Meta Ads (Facebook & Instagram)",
  "Gestão de Google Ads (Rede de Pesquisa & Youtube)",
  "Criação de Criativos (Design e Edição de Vídeo)",
  "Copywriting Automotivo Persuasivo",
  "Páginas de Captura de Alta Conversão",
  "Consultoria de Processo Comercial (Script de Vendas)",
  "Relatórios de Performance Semanais",
  "Suporte Dedicado via WhatsApp"
];

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const ServicesSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-blue mb-4">
            O que o Método 2T entrega para você
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg font-light">
            Não entregamos apenas "anúncios". Entregamos uma estrutura completa de aquisição de clientes para sua loja de carros ou oficina.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {/* Column 1 & 2 - Highlights */}
            <div className="lg:col-span-2 bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-100">
                <div className="grid sm:grid-cols-2 gap-y-6 gap-x-8">
                    {deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 group">
                            <CheckCircle2 className="w-6 h-6 text-brand-orange flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                            <span className="text-brand-blue font-medium group-hover:text-slate-900 transition-colors">{item}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Column 3 - Highlight Card */}
            <div className="bg-brand-blue text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden flex flex-col justify-between group">
                {/* Decorative Background */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-brand-orange rounded-full blur-[80px] opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500 rounded-full blur-[60px] opacity-20"></div>
                
                <div className="relative z-10">
                    <h3 className="text-2xl font-heading font-bold mb-6">Por que escolher o Método 2T?</h3>
                    <ul className="space-y-5 text-slate-300">
                        <li className="flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-brand-orange">★</span>
                            <span className="font-medium">Especialistas no nicho</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-brand-orange">📊</span>
                            <span className="font-medium">Relatórios transparentes</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-brand-orange">💰</span>
                            <span className="font-medium">Foco total em ROI</span>
                        </li>
                    </ul>
                </div>
                
                <div className="mt-10 relative z-10">
                     <a href="https://wa.me/" className="flex items-center justify-between w-full text-center bg-brand-orange text-brand-blue font-bold py-4 px-6 rounded-xl hover:bg-white hover:text-brand-blue transition-all duration-300 shadow-lg group-hover:translate-y-[-2px]">
                        <div className="flex items-center gap-2">
                           <WhatsAppIcon className="w-5 h-5" />
                           <span>Pedir Proposta</span>
                        </div>
                        <ArrowRight size={20} />
                     </a>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;