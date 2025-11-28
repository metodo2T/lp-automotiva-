import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Instagram } from 'lucide-react';

const socialProofImages = [
  "https://i.postimg.cc/PqQZ975H/feed1.jpg",
  "https://i.postimg.cc/wBgRXkc0/feed2.jpg",
  "https://i.postimg.cc/y8zDKTGr/feed3.jpg",
  "https://i.postimg.cc/SKgRWbxB/feed4.jpg"
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? socialProofImages.length - 1 : prev - 1));
  const nextSlide = () => setCurrentIndex((prev) => (prev === socialProofImages.length - 1 ? 0 : prev + 1));

  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-12">
           <span className="text-brand-blue font-bold text-xs uppercase tracking-[0.2em] mb-3 block bg-brand-blue/5 px-4 py-2 rounded-full w-fit mx-auto border border-brand-blue/10">Resultados Reais</span>
           <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-blue mb-4">
            O Método 2T na Prática
           </h2>
           <p className="text-slate-500 text-lg max-w-2xl mx-auto">
             Veja os bastidores e resultados que geramos para nossos parceiros automotivos.
           </p>
        </div>

        {/* Carousel Container - Removed Frame */}
        <div className="max-w-[320px] md:max-w-[360px] mx-auto relative group">
          
          {/* Image Wrapper - Just rounded corners and shadow, no border/frame */}
          <div className="relative rounded-2xl shadow-2xl overflow-hidden aspect-[9/16] flex items-center justify-center bg-black">
            
            {/* Current Image */}
            <div className="relative z-10 w-full h-full">
                <img 
                  src={socialProofImages[currentIndex]} 
                  alt={`Resultado Método 2T ${currentIndex + 1}`}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
            </div>

            {/* Navigation Buttons */}
            <button 
                onClick={prevSlide} 
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-brand-orange text-white hover:text-brand-blue p-2 rounded-full backdrop-blur-sm transition-all border border-white/10"
                aria-label="Anterior"
            >
                <ChevronLeft size={24} />
            </button>
            <button 
                onClick={nextSlide} 
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-brand-orange text-white hover:text-brand-blue p-2 rounded-full backdrop-blur-sm transition-all border border-white/10"
                aria-label="Próximo"
            >
                <ChevronRight size={24} />
            </button>
            
             {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {socialProofImages.map((_, idx) => (
                <button 
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${idx === currentIndex ? 'w-6 bg-brand-orange' : 'w-1.5 bg-white/50 hover:bg-white'}`}
                    aria-label={`Ir para imagem ${idx + 1}`}
                />
                ))}
            </div>

          </div>

          <div className="mt-8 text-center">
            <a 
                href="https://wa.me/"
                className="inline-flex items-center gap-2 text-brand-blue font-bold hover:text-brand-orange transition-colors border-b-2 border-brand-orange/20 hover:border-brand-orange pb-1"
            >
                <Instagram size={20} />
                Ver mais resultados no Instagram
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;