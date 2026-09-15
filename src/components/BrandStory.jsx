import React from 'react';
import { Scissors, Sparkles, ShoppingBag } from 'lucide-react';

export default function BrandStory({ t, lang, onOpenModal }) {
  const icons = [Scissors, ShoppingBag, Sparkles];

  return (
    <section id="story" className="py-24 bg-[#051815] relative overflow-hidden border-t border-b border-serk-border">
      
      {/* Background Subtle Accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-serk-gold/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Larger, Distinct, High-Quality Imagery (6 cols) */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              
              {/* Image 1: High-Res Studio Portrait (Olive Corset Habesha Gown - Different from Hero) */}
              <div 
                className="relative rounded-2xl overflow-hidden aspect-[3/4.6] border-2 border-serk-gold/35 group cursor-pointer shadow-2xl bg-[#0D2F28]"
                onClick={() => onOpenModal({
                  id: "hero_portrait_highres",
                  image: "/images/fashion/hero_portrait_highres.jpg",
                  title: lang === 'am' ? "ኦሊቭ ኮርሴት ዘመናዊ የሀበሻ ቀሚስ" : "Olive Corset Modern Silhouette",
                  subtitle: lang === 'am' ? "ዘመናዊ አቆራረጥ ከጥንታዊ የኢትዮጵያ ጥበብ ጋር" : "Contemporary cut harmonized with Ethiopian weaving heritage",
                })}
              >
                <img
                  src="/images/fashion/hero_portrait_highres.jpg"
                  alt="Serk Design Couture Model"
                  className="w-full h-full object-cover object-top group-hover:scale-106 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#051815]/90 via-[#051815]/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] font-mono text-serk-gold uppercase tracking-widest block font-bold">
                    Couture Studio
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-white">
                    {lang === 'am' ? 'የሰርክ ልዩ ዲዛይን' : 'Signature Silhouette'}
                  </span>
                </div>
              </div>

              {/* Image 2: Boutique Showroom & Reception with Official Logo Wall */}
              <div 
                className="relative rounded-2xl overflow-hidden aspect-[3/4.6] border-2 border-serk-gold/35 group cursor-pointer shadow-2xl bg-[#0D2F28]"
                onClick={() => onOpenModal({
                  id: "serk_reception_gold_logo_wall",
                  image: "/images/fashion/serk_reception_gold_logo_wall.jpg",
                  title: lang === 'am' ? "የሰርክ ቡቲክ ማሳያ አዳራሽ" : "Serk Showroom & Reception",
                  subtitle: lang === 'am' ? "የወርቅ ማዕረግ ሎጎ በሰርክ ማሳያ አዳራሽ" : "Official Serk showroom reception in Addis Ababa",
                })}
              >
                <img
                  src="/images/fashion/serk_reception_gold_logo_wall.jpg"
                  alt="Serk Design Showroom Reception"
                  className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#051815]/90 via-[#051815]/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs font-mono text-serk-gold uppercase tracking-widest block font-bold">
                    Showroom
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-white">
                    {lang === 'am' ? 'የሰርክ ማሳያ አዳራሽ' : 'Boutique Showroom'}
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Editorial Text & Prominent Pillars (6 cols) */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6 text-left">
            
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-serk-gold block">
                {t.brandStory.eyebrow}
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#FDF3E5] leading-tight">
                {t.brandStory.title}
              </h2>
            </div>

            <p className="text-[#FDF3E5]/90 text-base sm:text-lg leading-relaxed font-light">
              {t.brandStory.p1}
            </p>

            <p className="text-[#FDF3E5]/85 text-base sm:text-lg leading-relaxed font-light">
              {t.brandStory.p2}
            </p>

            {/* 3 Core Value Pillars (Enlarged per uploaded reference) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3">
              {t.brandStory.pillars.map((pillar, idx) => {
                const Icon = icons[idx] || Sparkles;
                return (
                  <div 
                    key={idx} 
                    className="p-5 rounded-xl bg-[#0D2F28] border border-serk-border hover:border-serk-gold/60 transition-all flex flex-col space-y-2.5 shadow-lg"
                  >
                    <div className="w-9 h-9 rounded-lg bg-serk-gold/15 flex items-center justify-center text-serk-gold">
                      <Icon size={18} />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#FDF3E5] font-serif leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#FDF3E5]/85 leading-relaxed font-light">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
