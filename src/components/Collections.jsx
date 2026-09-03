import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Collections({ t, onSelectCategory }) {
  return (
    <section id="collections" className="py-24 bg-[#121214] relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-gold">
            <Sparkles size={14} />
            <span>{t.pillarsSection.eyebrow}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#FAF8F5]">
            {t.pillarsSection.title}
          </h2>
          <p className="text-sm sm:text-base text-[#FAF8F5]/70 font-light">
            {t.pillarsSection.subtitle}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.pillarsSection.cards.map((card, idx) => (
            <div
              key={idx}
              className="group relative bg-[#1A1C22] rounded-2xl overflow-hidden border border-gold/25 hover:border-gold transition-all duration-300 shadow-xl flex flex-col cursor-pointer"
              onClick={() => onSelectCategory(card.category)}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden bg-black/40">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover object-top group-hover:scale-108 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1C22] via-[#1A1C22]/20 to-transparent"></div>
                
                {/* Category Pill */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#121214]/80 backdrop-blur-md border border-gold/40 text-[10px] uppercase font-bold text-gold tracking-wider">
                  {card.category}
                </div>
              </div>

              {/* Text Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="text-lg font-bold text-[#FAF8F5] group-hover:text-gold transition-colors font-serif">
                    {card.title}
                  </h3>
                  <p className="text-xs text-[#FAF8F5]/70 mt-2 font-light line-clamp-2 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-gold group-hover:translate-x-1 transition-transform">
                  <span>Explore in Lookbook</span>
                  <ArrowRight size={14} />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
