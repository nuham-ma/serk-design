import React from 'react';
import { Scissors, Sparkles, ShoppingBag } from 'lucide-react';

export default function BrandStory({ t, lang, onOpenModal }) {
  const icons = [Scissors, ShoppingBag, Sparkles];

  return (
    <section id="story" className="py-24 bg-[#051815] relative overflow-hidden border-t border-b border-serk-border">
      
      {/* Background Subtle Accent Glows */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-serk-gold/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#0D2F28]/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16 sm:space-y-20">
        
        {/* Editorial Narrative Header: Title & Story Paragraphs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          <div className="lg:col-span-5 space-y-3 text-left">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-serk-gold block">
              {t.brandStory.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#FDF3E5] leading-[1.2]">
              {t.brandStory.title}
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-4 text-left">
            <p className="text-[#FDF3E5]/90 text-base sm:text-lg leading-relaxed font-light">
              {t.brandStory.p1}
            </p>
            <p className="text-[#FDF3E5]/85 text-base sm:text-lg leading-relaxed font-light">
              {t.brandStory.p2}
            </p>
          </div>

        </div>

        {/* Prominent, Equal-Sized Editorial Photographs (Enlarged & Balanced) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          
          {/* Photo 1: High-Res Studio Portrait */}
          <div 
            className="w-full relative rounded-2xl overflow-hidden aspect-[4/5] sm:aspect-[3/3.8] border-2 border-serk-gold/35 group cursor-pointer shadow-2xl bg-[#0D2F28] hover:border-serk-gold transition-all duration-300 hover:-translate-y-1"
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
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#051815]/95 via-[#051815]/50 to-transparent"></div>
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <div>
                <span className="text-xs font-mono text-serk-gold uppercase tracking-widest block font-bold">
                  Couture Studio
                </span>
                <span className="text-base sm:text-lg font-semibold text-white font-serif">
                  {lang === 'am' ? 'የሰርክ ልዩ ዲዛይን' : 'Signature Silhouette'}
                </span>
              </div>
              <div className="px-3 py-1 rounded-full bg-[#08221D]/90 border border-serk-gold/40 text-[11px] font-mono text-serk-gold">
                {lang === 'am' ? 'የቀሚስ ዲዛይን' : 'Bespoke Kemis'}
              </div>
            </div>
          </div>

          {/* Photo 2: Boutique Showroom & Reception with Official Logo Wall */}
          <div 
            className="w-full relative rounded-2xl overflow-hidden aspect-[4/5] sm:aspect-[3/3.8] border-2 border-serk-gold/35 group cursor-pointer shadow-2xl bg-[#0D2F28] hover:border-serk-gold transition-all duration-300 hover:-translate-y-1"
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
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#051815]/95 via-[#051815]/50 to-transparent"></div>
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <div>
                <span className="text-xs font-mono text-serk-gold uppercase tracking-widest block font-bold">
                  Boutique Showroom
                </span>
                <span className="text-base sm:text-lg font-semibold text-white font-serif">
                  {lang === 'am' ? 'የሰርክ ማሳያ አዳራሽ' : 'Boutique Showroom'}
                </span>
              </div>
              <div className="px-3 py-1 rounded-full bg-[#08221D]/90 border border-serk-gold/40 text-[11px] font-mono text-serk-gold">
                {lang === 'am' ? 'ባማ ሲቲ ሞል' : 'Bama City Mall'}
              </div>
            </div>
          </div>

        </div>

        {/* 3 Core Value Pillars (Clean, Balanced & Centered) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {t.brandStory.pillars.map((pillar, idx) => {
            const Icon = icons[idx] || Sparkles;
            return (
              <div 
                key={idx} 
                className="p-6 rounded-2xl bg-[#0D2F28] border border-serk-border hover:border-serk-gold/60 transition-all flex flex-col space-y-3 shadow-xl"
              >
                <div className="w-10 h-10 rounded-xl bg-serk-gold/15 flex items-center justify-center text-serk-gold border border-serk-gold/30">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#FDF3E5] font-serif leading-snug">
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

    </section>
  );
}
