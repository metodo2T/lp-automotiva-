import React from 'react';
import { ArrowRight } from 'lucide-react';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-grey text-white py-20 border-t border-white/5">
      <div className="container mx-auto px-4 text-center">
        
        <div className="max-w-4xl mx-auto mb-20 animate-on-scroll">
            <h2 className="text-3xl md:text-5xl font-heading font-black mb-8 leading-tight">
                Quer encher o WhatsApp de pessoas <br/>
                <span className="text-brand-orange">interessadas em comprar seus carros?</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto font-light">
                As vagas para nossa consultoria gratuita de análise de estoque são limitadas. Garanta a sua agora e pare de perder dinheiro.
            </p>
            <a 
                href="https://wa.me/"
                className="inline-flex items-center gap-4 bg-brand-orange hover:bg-amber-500 text-brand-blue px-10 py-5 rounded-lg text-xl font-bold transition-all transform hover:scale-105 shadow-[0_0_40px_rgba(255,177,0,0.3)] group"
            >
                <WhatsAppIcon className="w-8 h-8" />
                Quero falar com um especialista
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="mt-6 text-sm text-slate-500 flex items-center justify-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                Resposta em poucos minutos (Horário Comercial)
            </p>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8">
              <span className="font-heading font-bold text-white tracking-wider">MÉTODO 2T</span>
              <span>© {new Date().getFullYear()} Todos os direitos reservados.</span>
          </div>
          <div className="flex gap-8">
             <a href="#" className="hover:text-brand-orange transition-colors">Termos de Uso</a>
             <a href="#" className="hover:text-brand-orange transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;