import React from 'react';
import { Scissors, Sparkles, ShoppingBag, MapPin } from 'lucide-react';

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

        {/* Structured 3x3 Editorial Grid (Balanced, Intentional & Premium) */}
        <div className="max-w-4xl sm:max-w-5xl mx-auto">
          <div className="grid grid-cols-3 gap-2.5 sm:gap-4 md:gap-5">
            
            {/* Cell [1, 1] — Photo 1: Haute Couture Silhouette */}
            <div
              className="group relative rounded-xl sm:rounded-2xl overflow-hidden aspect-square border border-serk-gold/35 hover:border-serk-gold cursor-pointer shadow-xl bg-[#0D2F28] transition-all duration-300 hover:-translate-y-0.5"
              onClick={() => onOpenModal({
                id: "hero_portrait_highres",
                image: "/images/fashion/hero_portrait_highres.jpg",
                title: lang === 'am' ? "ኦሊቭ ኮርሴት ዘመናዊ የሀበሻ ቀሚስ" : "Olive Corset Modern Silhouette",
                subtitle: lang === 'am' ? "ዘመናዊ አቆራረጥ ከጥንታዊ የኢትዮጵያ ጥበብ ጋር" : "Contemporary cut harmonized with Ethiopian weaving heritage",
              })}
            >
              <img
                src="/images/fashion/hero_portrait_highres.jpg"
                alt="Serk Design Couture Silhouette"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 h-16 sm:h-20 bg-gradient-to-t from-[#051815]/90 via-[#051815]/40 to-transparent"></div>
              <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3 flex items-end justify-between">
                <span className="text-[9px] sm:text-xs font-serif font-semibold text-white truncate drop-shadow">
                  {lang === 'am' ? 'የሰርክ ኮውቸር' : 'Couture Studio'}
                </span>
                <span className="text-[7px] sm:text-[9px] font-mono text-serk-gold border border-serk-gold/40 px-1.5 py-0.5 rounded-full bg-[#08221D]/80">
                  01
                </span>
              </div>
            </div>

            {/* Cell [1, 2] — Clean Negative Space with Minimalist Hairline Frame */}
            <div className="relative rounded-xl sm:rounded-2xl aspect-square border border-serk-gold/15 bg-[#08221D]/40 p-2.5 sm:p-5 flex flex-col justify-between overflow-hidden">
              <div className="flex justify-between items-start text-serk-gold/30 font-mono text-[9px] sm:text-xs">
                <span>+</span>
                <span className="tracking-widest uppercase text-[7px] sm:text-[9px]">SERK</span>
              </div>
              <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent via-serk-gold/25 to-transparent mx-auto"></div>
              <div className="flex justify-between items-end text-serk-gold/30 font-mono text-[9px] sm:text-xs">
                <span className="text-[7px] sm:text-[9px] tracking-wider uppercase text-serk-gold/40">SPACE</span>
                <span>+</span>
              </div>
            </div>

            {/* Cell [1, 3] — Subtle Design Element: Heritage & Tibeb */}
            <div className="relative rounded-xl sm:rounded-2xl aspect-square border border-serk-border hover:border-serk-gold/40 bg-[#0D2F28]/60 p-2.5 sm:p-5 flex flex-col justify-between shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between">
                <span className="text-[8px] sm:text-[10px] font-mono uppercase tracking-widest text-serk-gold font-semibold">
                  01 / TIBEB
                </span>
                <Sparkles size={14} className="sm:w-4 sm:h-4 text-serk-gold/70" />
              </div>
              <div className="space-y-0.5 sm:space-y-1 text-left">
                <h4 className="text-[10px] sm:text-sm md:text-base font-serif font-bold text-[#FDF3E5] leading-snug">
                  {lang === 'am' ? 'የእጅ ጥበብ ሽመና' : 'Handwoven Tibeb'}
                </h4>
                <p className="text-[8px] sm:text-xs text-[#FDF3E5]/70 font-light leading-relaxed line-clamp-2">
                  {lang === 'am' ? 'ንጹህ የሀገር ጥጥ እና ሐር' : '100% Pure Cotton'}
                </p>
              </div>
            </div>

            {/* Cell [2, 1] — Subtle Design Element: Bespoke Tailoring */}
            <div className="relative rounded-xl sm:rounded-2xl aspect-square border border-serk-border hover:border-serk-gold/40 bg-[#0D2F28]/60 p-2.5 sm:p-5 flex flex-col justify-between shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between">
                <span className="text-[8px] sm:text-[10px] font-mono uppercase tracking-widest text-serk-gold font-semibold">
                  02 / BESPOKE
                </span>
                <Scissors size={14} className="sm:w-4 sm:h-4 text-serk-gold/70" />
              </div>
              <div className="space-y-0.5 sm:space-y-1 text-left">
                <h4 className="text-[10px] sm:text-sm md:text-base font-serif font-bold text-[#FDF3E5] leading-snug">
                  {lang === 'am' ? 'የግል ልዩ ስፌት' : 'Custom Tailoring'}
                </h4>
                <p className="text-[8px] sm:text-xs text-[#FDF3E5]/70 font-light leading-relaxed line-clamp-2">
                  {lang === 'am' ? 'በትክክለኛ ልኬት የሚሰፋ' : 'Precision Made-to-Measure'}
                </p>
              </div>
            </div>

            {/* Cell [2, 2] — Central Monogram Emblem & Brand Seal */}
            <div className="relative rounded-xl sm:rounded-2xl aspect-square border border-serk-gold/30 bg-[#08221D] p-2 sm:p-4 flex flex-col items-center justify-center text-center shadow-xl overflow-hidden">
              <div className="w-8 h-8 sm:w-11 sm:h-11 md:w-13 md:h-13 rounded-full border border-serk-gold/50 flex items-center justify-center bg-serk-gold/10 shadow-inner mb-1 sm:mb-2">
                <span className="font-serif font-bold text-serk-gold text-xs sm:text-base md:text-lg">
                  ሰ
                </span>
              </div>
              <span className="text-[8px] sm:text-[10px] md:text-xs font-serif font-bold text-serk-gold uppercase tracking-[0.2em]">
                SERK DESIGN
              </span>
              <span className="text-[7px] sm:text-[9px] font-mono text-[#FDF3E5]/60 tracking-widest mt-0.5 uppercase">
                {lang === 'am' ? 'በሜሮን' : 'BY MERON'}
              </span>
            </div>

            {/* Cell [2, 3] — Clean Negative Space with Minimalist Geometry */}
            <div className="relative rounded-xl sm:rounded-2xl aspect-square border border-serk-gold/15 bg-[#08221D]/40 p-2.5 sm:p-5 flex flex-col justify-between overflow-hidden">
              <div className="flex justify-between items-start text-serk-gold/30 font-mono text-[9px] sm:text-xs">
                <span className="tracking-widest uppercase text-[7px] sm:text-[9px]">ATELIER</span>
                <span>+</span>
              </div>
              <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent via-serk-gold/25 to-transparent mx-auto"></div>
              <div className="flex justify-between items-end text-serk-gold/30 font-mono text-[9px] sm:text-xs">
                <span>+</span>
                <span className="text-[7px] sm:text-[9px] tracking-wider uppercase text-serk-gold/40">2020</span>
              </div>
            </div>

            {/* Cell [3, 1] — Clean Negative Space with Minimalist Geometry */}
            <div className="relative rounded-xl sm:rounded-2xl aspect-square border border-serk-gold/15 bg-[#08221D]/40 p-2.5 sm:p-5 flex flex-col justify-between overflow-hidden">
              <div className="flex justify-between items-start text-serk-gold/30 font-mono text-[9px] sm:text-xs">
                <span>+</span>
                <span className="text-[7px] sm:text-[9px] tracking-wider uppercase text-serk-gold/40">ADDIS</span>
              </div>
              <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent via-serk-gold/25 to-transparent mx-auto"></div>
              <div className="flex justify-between items-end text-serk-gold/30 font-mono text-[9px] sm:text-xs">
                <span className="tracking-widest uppercase text-[7px] sm:text-[9px]">ABABA</span>
                <span>+</span>
              </div>
            </div>

            {/* Cell [3, 2] — Subtle Design Element: Boutique & Atelier */}
            <div className="relative rounded-xl sm:rounded-2xl aspect-square border border-serk-border hover:border-serk-gold/40 bg-[#0D2F28]/60 p-2.5 sm:p-5 flex flex-col justify-between shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between">
                <span className="text-[8px] sm:text-[10px] font-mono uppercase tracking-widest text-serk-gold font-semibold">
                  03 / ATELIER
                </span>
                <MapPin size={14} className="sm:w-4 sm:h-4 text-serk-gold/70" />
              </div>
              <div className="space-y-0.5 sm:space-y-1 text-left">
                <h4 className="text-[10px] sm:text-sm md:text-base font-serif font-bold text-[#FDF3E5] leading-snug">
                  {lang === 'am' ? 'ባማ ሲቲ ሞል' : 'Bama City Mall'}
                </h4>
                <p className="text-[8px] sm:text-xs text-[#FDF3E5]/70 font-light leading-relaxed line-clamp-2">
                  {lang === 'am' ? '22 መንገድ · ሱቅ #209' : '22 Road · Suite #209'}
                </p>
              </div>
            </div>

            {/* Cell [3, 3] — Photo 2: Boutique Showroom & Reception */}
            <div
              className="group relative rounded-xl sm:rounded-2xl overflow-hidden aspect-square border border-serk-gold/35 hover:border-serk-gold cursor-pointer shadow-xl bg-[#0D2F28] transition-all duration-300 hover:-translate-y-0.5"
              onClick={() => onOpenModal({
                id: "serk_reception_gold_logo_wall",
                image: "/images/fashion/serk_reception_gold_logo_wall.jpg",
                title: lang === 'am' ? "የሰርክ ቡቲክ ማሳያ አዳራሽ" : "Serk Showroom & Reception",
                subtitle: lang === 'am' ? "የወርቅ ማዕረግ ሎጎ በሰርክ ማሳያ አዳራሽ" : "Official Serk showroom reception in Addis Ababa",
              })}
            >
              <img
                src="/images/fashion/serk_reception_gold_logo_wall.jpg"
                alt="Serk Showroom Reception"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 h-16 sm:h-20 bg-gradient-to-t from-[#051815]/90 via-[#051815]/40 to-transparent"></div>
              <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3 flex items-end justify-between">
                <span className="text-[9px] sm:text-xs font-serif font-semibold text-white truncate drop-shadow">
                  {lang === 'am' ? 'የሰርክ ማሳያ አዳራሽ' : 'Boutique Showroom'}
                </span>
                <span className="text-[7px] sm:text-[9px] font-mono text-serk-gold border border-serk-gold/40 px-1.5 py-0.5 rounded-full bg-[#08221D]/80">
                  02
                </span>
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
