import React from 'react';
import { Scissors, Sparkles, ShoppingBag } from 'lucide-react';

export default function BrandStory({ t, lang, onOpenModal }) {
  const icons = [Scissors, ShoppingBag, Sparkles];

  return (
    <section id="story" className="py-24 bg-[#051815] relative overflow-hidden border-t border-b border-serk-border">
      
      {/* Background Subtle Accent Glows */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-serk-gold/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#0D2F28]/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 2-Column Balanced Layout: All Explanation/Text on One Side, Both Photos Together on the Opposite Side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-end">
          
          {/* Column 1: All Explanation & Text Content (7 cols desktop, 1st on mobile) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Eyebrow */}
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-serk-gold block">
              {t.brandStory.eyebrow}
            </span>

            {/* Main Section Title */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#FDF3E5] leading-[1.2]">
              {t.brandStory.title}
            </h2>

            {/* Narrative Story Paragraphs */}
            <div className="space-y-4">
              <p className="text-[#FDF3E5]/90 text-base sm:text-lg leading-relaxed font-light">
                {t.brandStory.p1}
              </p>
              <p className="text-[#FDF3E5]/85 text-base sm:text-lg leading-relaxed font-light">
                {t.brandStory.p2}
              </p>
            </div>

            {/* 3 Core Value Pillars (Integrated within explanation column) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3.5 pt-2">
              {t.brandStory.pillars.map((pillar, idx) => {
                const Icon = icons[idx] || Sparkles;
                return (
                  <div 
                    key={idx} 
                    className="p-4 rounded-xl bg-[#0D2F28] border border-serk-border hover:border-serk-gold/50 transition-all flex items-start gap-3.5 shadow-md"
                  >
                    <div className="w-10 h-10 rounded-lg bg-serk-gold/15 flex items-center justify-center text-serk-gold border border-serk-gold/30 shrink-0 mt-0.5">
                      <Icon size={18} />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-base sm:text-lg font-bold text-[#FDF3E5] font-serif leading-snug">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#FDF3E5]/80 leading-relaxed font-light">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Column 2: Both About Section Photos Grouped Together (5 cols desktop, 2nd on mobile) */}
          <div className="lg:col-span-5 w-full lg:self-end">
            <div className="grid grid-cols-2 gap-3.5 sm:gap-5">
              
              {/* Photo 1: Haute Couture Silhouette (Static Image, No Captions/Lightbox) */}
              <div className="w-full relative bg-[#0D2F28] rounded-2xl overflow-hidden border border-serk-border hover:border-serk-gold/50 transition-all duration-300 shadow-xl aspect-[3/5] sm:aspect-[3/5.5] lg:aspect-[3/6.4]">
                <img
                  src="/images/fashion/hero_portrait_highres.jpg"
                  alt="Serk Design Couture Model"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>

              {/* Photo 2: Boutique Showroom & Reception (Static Image, No Captions/Lightbox) */}
              <div className="w-full relative bg-[#0D2F28] rounded-2xl overflow-hidden border border-serk-border hover:border-serk-gold/50 transition-all duration-300 shadow-xl aspect-[3/5] sm:aspect-[3/5.5] lg:aspect-[3/6.4]">
                <img
                  src="/images/fashion/serk_reception_gold_logo_wall.jpg"
                  alt="Serk Showroom Reception"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
