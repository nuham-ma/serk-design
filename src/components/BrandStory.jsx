import React from 'react';
import { Scissors, Sparkles, ShoppingBag } from 'lucide-react';

export default function BrandStory({ t, lang, onOpenModal }) {
  const icons = [Scissors, ShoppingBag, Sparkles];

  return (
    <section id="story" className="py-24 bg-[#051815] relative overflow-hidden border-t border-b border-serk-border">
      
      {/* Background Subtle Accent Glows */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-serk-gold/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#0D2F28]/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8 sm:space-y-10">
        
        {/* FIRST ROW: LEFT SIDE TEXT + RIGHT SIDE PHOTO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* LEFT SIDE — Text (7 cols desktop) */}
          <div className="lg:col-span-7 space-y-5 text-left">
            {/* Eyebrow */}
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-serk-gold block">
              {t.brandStory.eyebrow}
            </span>

            {/* Main Section Title */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#FDF3E5] leading-[1.2]">
              {t.brandStory.title}
            </h2>

            {/* First Paragraph: "ሰርክ ዲዛይን በሜሮን (Serk Design by Meron) ከ2014 ጀምሮ..." */}
            <p className="text-[#FDF3E5]/90 text-base sm:text-lg leading-relaxed font-light">
              {t.brandStory.p1}
            </p>
          </div>

          {/* RIGHT SIDE — Well-Presented Existing Photo (5 cols desktop) */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-sm sm:max-w-md lg:max-w-none relative rounded-2xl overflow-hidden border border-serk-gold/35 shadow-2xl bg-[#0D2F28] aspect-[3/3.8] sm:aspect-[3/3.6] lg:aspect-[3/3.5]">
              <img
                src="/images/fashion/hero_portrait_highres.jpg"
                alt="Serk Design Haute Couture"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
          </div>

        </div>

        {/* BELOW THE FIRST ROW: SECOND PARAGRAPH SPANNING THE SECTION WIDTH */}
        <div className="w-full text-left pt-1">
          <p className="text-[#FDF3E5]/85 text-base sm:text-lg leading-relaxed font-light">
            {t.brandStory.p2}
          </p>
        </div>

        {/* 3 Core Value Pillars (Clean, balanced 3-column row spanning section width) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 pt-2">
          {t.brandStory.pillars.map((pillar, idx) => {
            const Icon = icons[idx] || Sparkles;
            return (
              <div 
                key={idx} 
                className="p-5 rounded-2xl bg-[#0D2F28] border border-serk-border hover:border-serk-gold/50 transition-all flex items-start gap-4 shadow-md"
              >
                <div className="w-10 h-10 rounded-xl bg-serk-gold/15 flex items-center justify-center text-serk-gold border border-serk-gold/30 shrink-0 mt-0.5">
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

    </section>
  );
}
