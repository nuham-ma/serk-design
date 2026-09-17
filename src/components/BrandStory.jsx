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
        
        {/* 2-COLUMN BALANCED LAYOUT: ALL TEXT ON THE LEFT, PHOTO ON THE RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* LEFT SIDE — ALL TEXT: Eyebrow, Title, Paragraph 1, and Paragraph 2 */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Eyebrow */}
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-serk-gold block">
              {t.brandStory.eyebrow}
            </span>

            {/* Main Section Title */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#FDF3E5] leading-[1.2]">
              {t.brandStory.title}
            </h2>

            {/* Narrative Story Paragraphs (Both together on the left side) */}
            <div className="space-y-4 sm:space-y-5">
              {/* First Paragraph: "ሰርክ ዲዛይን በሜሮን (Serk Design by Meron) ከ2014 ጀምሮ..." */}
              <p className="text-[#FDF3E5]/90 text-base sm:text-lg leading-relaxed font-light">
                {t.brandStory.p1}
              </p>

              {/* Second Paragraph directly below the first: "ለሰርግ፣ ለደማቅ ክብረ በዓላት..." */}
              <p className="text-[#FDF3E5]/85 text-base sm:text-lg leading-relaxed font-light">
                {t.brandStory.p2}
              </p>
            </div>
          </div>

          {/* RIGHT SIDE — Well-Presented Existing Photo (Beside both paragraphs) */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
            <div className="relative group w-full max-w-[310px] sm:max-w-[340px] lg:max-w-[370px]">
              
              {/* Subtle ambient backlight glow behind frame */}
              <div className="absolute -inset-2.5 bg-gradient-to-tr from-serk-gold/20 via-serk-gold/5 to-transparent rounded-3xl blur-xl opacity-75 pointer-events-none -z-10"></div>

              {/* Gallery Matte Frame with Refined Double Border and Balanced Portrait Proportions */}
              <div className="relative p-2 sm:p-2.5 rounded-[22px] bg-gradient-to-b from-[#0F352E]/90 via-[#0B2A24]/90 to-[#081F1B]/95 border border-serk-gold/30 hover:border-serk-gold/50 shadow-[0_20px_45px_rgba(0,0,0,0.65),0_0_25px_rgba(200,169,126,0.08)] transition-all duration-500">
                
                {/* Inner Image Container matching natural portrait proportions so the full attire remains visible */}
                <div className="relative rounded-[16px] overflow-hidden bg-[#0A2621] aspect-[3/4.2] sm:aspect-[3/4.2]">
                  <img
                    src="/images/fashion/hero_portrait_highres.jpg"
                    alt="Serk Design Haute Couture"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    loading="lazy"
                  />

                  {/* Refined subtle inner rim highlight */}
                  <div className="absolute inset-0 rounded-[16px] ring-1 ring-inset ring-serk-gold/20 pointer-events-none"></div>
                </div>

              </div>
            </div>
          </div>

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
