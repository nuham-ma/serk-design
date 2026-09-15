import React from 'react';
import { Scissors, Sparkles, ShoppingBag, Eye } from 'lucide-react';

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

        {/* Refined Lookroom-Scale Editorial Photographs (Balanced, Spacious & Premium) */}
        <div className="max-w-3xl sm:max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Photo 1: Haute Couture Silhouette */}
            <div
              className="w-full flex flex-col group relative bg-[#0D2F28] rounded-2xl overflow-hidden border border-serk-border hover:border-serk-gold transition-all duration-300 shadow-xl cursor-pointer hover:-translate-y-1.5"
              onClick={() => onOpenModal({
                id: "hero_portrait_highres",
                image: "/images/fashion/hero_portrait_highres.jpg",
                title: lang === 'am' ? "ኦሊቭ ኮርሴት ዘመናዊ የሀበሻ ቀሚስ" : "Olive Corset Modern Silhouette",
                subtitle: lang === 'am' ? "ዘመናዊ አቆራረጥ ከጥንታዊ የኢትዮጵያ ጥበብ ጋር" : "Contemporary cut harmonized with Ethiopian weaving heritage",
                badge: lang === 'am' ? "ኮውቸር" : "Couture",
              })}
            >
              {/* Image Container with Lookroom 3:4 Proportions */}
              <div className="relative aspect-[3/4] overflow-hidden bg-black/40">
                <img
                  src="/images/fashion/hero_portrait_highres.jpg"
                  alt="Serk Design Couture Model"
                  className="w-full h-full object-cover object-top group-hover:scale-106 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Minimal subtle gradient limited to the bottom 10% */}
                <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#0D2F28]/60 to-transparent"></div>

                {/* Floating Badge */}
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#08221D]/90 backdrop-blur-md border border-serk-gold/40 text-xs uppercase font-bold text-serk-gold tracking-wider shadow">
                  {lang === 'am' ? 'ኮውቸር' : 'Couture'}
                </div>

                {/* Hover Eye Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/25 backdrop-blur-[1px]">
                  <div className="w-12 h-12 rounded-full bg-serk-gold text-[#08221D] flex items-center justify-center shadow-xl transform scale-75 group-hover:scale-100 transition-transform">
                    <Eye size={22} />
                  </div>
                </div>
              </div>

              {/* Text Information Box with Lookroom Styling */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3 bg-[#0D2F28]">
                <div className="space-y-1.5">
                  <h3 className="text-lg sm:text-xl font-bold text-[#FDF3E5] group-hover:text-serk-gold transition-colors font-serif leading-snug">
                    {lang === 'am' ? 'ኦሊቭ ኮርሴት ዘመናዊ የሀበሻ ቀሚስ' : 'Olive Corset Modern Silhouette'}
                  </h3>
                  <p className="text-sm sm:text-base text-[#FDF3E5]/85 font-light line-clamp-2 leading-relaxed">
                    {lang === 'am' ? 'ዘመናዊ አቆራረጥ ከጥንታዊ የኢትዮጵያ ጥበብ ጋር' : 'Contemporary cut harmonized with Ethiopian weaving heritage'}
                  </p>
                </div>

                <div className="pt-3 flex items-center justify-between text-xs sm:text-sm font-mono text-serk-gold/90 border-t border-serk-border">
                  <span className="uppercase font-semibold tracking-wider">
                    {lang === 'am' ? 'የቀሚስ ዲዛይን' : 'Bespoke Kemis'}
                  </span>
                  <span className="group-hover:text-serk-gold transition-colors flex items-center gap-1 font-sans font-medium text-xs sm:text-sm">
                    {lang === 'am' ? 'በሙሉ ስክሪን ይመልከቱ' : 'View Details'} &rarr;
                  </span>
                </div>
              </div>

            </div>

            {/* Photo 2: Boutique Showroom & Reception */}
            <div
              className="w-full flex flex-col group relative bg-[#0D2F28] rounded-2xl overflow-hidden border border-serk-border hover:border-serk-gold transition-all duration-300 shadow-xl cursor-pointer hover:-translate-y-1.5"
              onClick={() => onOpenModal({
                id: "serk_reception_gold_logo_wall",
                image: "/images/fashion/serk_reception_gold_logo_wall.jpg",
                title: lang === 'am' ? "የሰርክ ቡቲክ ማሳያ አዳራሽ" : "Serk Showroom & Reception",
                subtitle: lang === 'am' ? "የወርቅ ማዕረግ ሎጎ በሰርክ ማሳያ አዳራሽ" : "Official Serk showroom reception in Addis Ababa",
                badge: lang === 'am' ? "ማሳያ አዳራሽ" : "Showroom",
              })}
            >
              {/* Image Container with Lookroom 3:4 Proportions */}
              <div className="relative aspect-[3/4] overflow-hidden bg-black/40">
                <img
                  src="/images/fashion/serk_reception_gold_logo_wall.jpg"
                  alt="Serk Showroom Reception"
                  className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Minimal subtle gradient limited to the bottom 10% */}
                <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#0D2F28]/60 to-transparent"></div>

                {/* Floating Badge */}
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#08221D]/90 backdrop-blur-md border border-serk-gold/40 text-xs uppercase font-bold text-serk-gold tracking-wider shadow">
                  {lang === 'am' ? 'ማሳያ አዳራሽ' : 'Showroom'}
                </div>

                {/* Hover Eye Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/25 backdrop-blur-[1px]">
                  <div className="w-12 h-12 rounded-full bg-serk-gold text-[#08221D] flex items-center justify-center shadow-xl transform scale-75 group-hover:scale-100 transition-transform">
                    <Eye size={22} />
                  </div>
                </div>
              </div>

              {/* Text Information Box with Lookroom Styling */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3 bg-[#0D2F28]">
                <div className="space-y-1.5">
                  <h3 className="text-lg sm:text-xl font-bold text-[#FDF3E5] group-hover:text-serk-gold transition-colors font-serif leading-snug">
                    {lang === 'am' ? 'የሰርክ ቡቲክ ማሳያ አዳራሽ' : 'Serk Showroom & Reception'}
                  </h3>
                  <p className="text-sm sm:text-base text-[#FDF3E5]/85 font-light line-clamp-2 leading-relaxed">
                    {lang === 'am' ? 'የወርቅ ማዕረግ ሎጎ በሰርክ ማሳያ አዳራሽ' : 'Official Serk showroom reception in Addis Ababa'}
                  </p>
                </div>

                <div className="pt-3 flex items-center justify-between text-xs sm:text-sm font-mono text-serk-gold/90 border-t border-serk-border">
                  <span className="uppercase font-semibold tracking-wider">
                    {lang === 'am' ? 'ባማ ሲቲ ሞል' : 'Bama City Mall'}
                  </span>
                  <span className="group-hover:text-serk-gold transition-colors flex items-center gap-1 font-sans font-medium text-xs sm:text-sm">
                    {lang === 'am' ? 'በሙሉ ስክሪን ይመልከቱ' : 'View Details'} &rarr;
                  </span>
                </div>
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
