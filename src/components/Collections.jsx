import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Collections({ t, onSelectCategory }) {
  return (
    <section id="collections" className="py-24 bg-[#08221D] relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-serk-gold">
            <Sparkles size={14} />
            <span>{t.pillarsSection.eyebrow}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#FDF3E5]">
            {t.pillarsSection.title}
          </h2>
          <p className="text-sm sm:text-base text-[#FDF3E5]/70 font-light">
            {t.pillarsSection.subtitle}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.pillarsSection.cards.map((card, idx) => (
            <div
              key={idx}
              className="group relative bg-[#0D2F28] rounded-2xl overflow-hidden border border-serk-border hover:border-serk-gold transition-all duration-300 shadow-xl flex flex-col cursor-pointer hover:-translate-y-1"
              onClick={() => onSelectCategory(card.category)}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden bg-black/40">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover object-top group-hover:scale-106 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D2F28] via-[#0D2F28]/30 to-transparent"></div>
                
                {/* Category Pill */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#08221D]/85 backdrop-blur-md border border-serk-gold/40 text-[10px] uppercase font-bold text-serk-gold tracking-wider">
                  {card.category}
                </div>
              </div>

              {/* Text Body with Complete, Articulate Descriptions */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-[#FDF3E5] group-hover:text-serk-gold transition-colors font-serif leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#FDF3E5]/75 font-light leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-serk-border flex items-center justify-between text-xs font-semibold text-serk-gold group-hover:underline">
                  <span>Explore in Lookroom</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
