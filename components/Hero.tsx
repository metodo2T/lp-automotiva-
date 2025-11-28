import React, { useState, useEffect } from 'react';
import { ChevronRight, TrendingUp } from 'lucide-react';

const carouselImages = [
  "https://i.postimg.cc/tTZYNvf2/bces4m4s69kk71w4er7do9ev0.jpg", // Showroom/Dealership feel
  "https://i.postimg.cc/8P8rtDTc/carros-divulgacao-Honda-800x533.jpg",
  "https://i.postimg.cc/X7cXLCHW/718581581953396.webp"
];

const AnimatedCounter = ({ end, suffix = "" }: { end: number, suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return <span>{count.toLocaleString()}{suffix}</span>;
};

// Simple WhatsApp SVG Component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[750px] flex items-center overflow-hidden">
      {/* Background with Deep Blue Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        {carouselImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={img}
              alt="Background"
              className={`w-full h-full object-cover transform transition-transform duration-[10000ms] ease-linear ${
                index === currentImageIndex ? 'scale-110' : 'scale-100'
              }`}
            />
          </div>
        ))}
        {/* Overlay: Deep Blue Gradient for Brand Identity - Enhanced for Premium Feel */}
        <div className="absolute inset-0 bg-brand-blue/90 bg-gradient-to-r from-[#05111d] via-[#0B1F33]/90 to-transparent mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05111d] via-transparent to-transparent opacity-90" />
        {/* Fine Mesh Pattern Overlay */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative flex flex-col md:flex-row items-center">
        
        <div className="w-full md:w-2/3 lg:w-1/2 pt-20">
            {/* Badge */}
            <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 hover:bg-white/10 transition-colors cursor-default">
                <TrendingUp className="w-4 h-4 text-brand-orange" />
                <span className="text-brand-orange text-xs md:text-sm font-bold tracking-widest uppercase">Conheça o Método 2T</span>
            </div>

            {/* Headlines */}
            <h1 className="animate-fade-in-up text-4xl md:text-6xl lg:text-7xl font-heading font-black text-white leading-[1.05] mb-6 drop-shadow-2xl tracking-tight">
              Venda Mais Carros <br />
              Com o <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-300">Método 2T</span>
            </h1>
            
            <p className="animate-fade-in-up delay-[200ms] text-lg text-slate-300 leading-relaxed mb-10 max-w-xl font-light border-l-4 border-brand-orange pl-6">
              Transformamos cliques em clientes qualificados na porta da sua loja. Pare de depender de indicações e tenha previsibilidade de vendas todos os dias.
            </p>

            {/* CTA Button */}
            <div className="animate-fade-in-up delay-[400ms] flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/"
                className="group relative flex items-center justify-center gap-3 bg-gradient-to-r from-brand-orange to-amber-600 hover:from-amber-400 hover:to-amber-500 text-brand-blue px-8 py-5 rounded-lg text-lg font-bold transition-all transform hover:scale-105 shadow-[0_0_40px_rgba(255,177,0,0.3)] border border-white/20"
              >
                <WhatsAppIcon className="w-6 h-6" />
                Quero Mais Clientes
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Stats / Counters */}
            <div className="animate-fade-in-up delay-[600ms] mt-16 grid grid-cols-3 gap-8 border-t border-white/10 pt-8 backdrop-blur-sm bg-white/5 rounded-xl px-6 pb-4">
                <div className="text-center md:text-left">
                    <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-1"><AnimatedCounter end={12000} suffix="+" /></h3>
                    <p className="text-[10px] md:text-xs text-brand-orange uppercase tracking-widest font-bold">Leads Gerados</p>
                </div>
                <div className="text-center md:text-left relative after:content-[''] after:absolute after:left-0 after:top-2 after:bottom-2 after:w-px after:bg-white/10 after:hidden md:after:block">
                    <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-1"><AnimatedCounter end={85} suffix="%" /></h3>
                    <p className="text-[10px] md:text-xs text-brand-orange uppercase tracking-widest font-bold">Mais Visitas</p>
                </div>
                <div className="text-center md:text-left relative after:content-[''] after:absolute after:left-0 after:top-2 after:bottom-2 after:w-px after:bg-white/10 after:hidden md:after:block">
                    <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-1"><AnimatedCounter end={15} suffix="M+" /></h3>
                    <p className="text-[10px] md:text-xs text-brand-orange uppercase tracking-widest font-bold">Vendas Geradas</p>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;