import React from 'react';
import { Scissors, Sparkles, HeartHandshake, CheckCircle2 } from 'lucide-react';

export default function BrandStory({ t, lang, onOpenModal }) {
  const icons = [Scissors, Sparkles, HeartHandshake];

  return (
    <section id="story" className="py-20 bg-[#0E0F12] relative overflow-hidden border-t border-b border-gold/15">
      
      {/* Background Subtle Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Showcase (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              
              {/* Showroom Reception Wall with Gold Logo */}
              <div 
                className="relative rounded-2xl overflow-hidden aspect-[3/4] border border-gold/30 group cursor-pointer shadow-xl"
                onClick={() => onOpenModal({
                  id: "serk_reception_gold_logo_wall",
                  image: "/images/fashion/serk_reception_gold_logo_wall.jpg",
                  title: lang === 'am' ? "የሰርክ ቡቲክ አቀባበል" : "Serk Boutique Reception",
                  subtitle: lang === 'am' ? "የወርቅ ማዕረግ ሎጎ በሰርክ ማሳያ አዳራሽ" : "Gilded brand emblem in the Serk showroom",
                })}
              >
                <img
                  src="/images/fashion/serk_reception_gold_logo_wall.jpg"
                  alt="Serk Design Showroom Reception"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[11px] font-mono text-gold uppercase tracking-wider block">Boutique</span>
                  <span className="text-xs font-semibold text-white">
                    {lang === 'am' ? 'የሰርክ ማሳያ አዳራሽ' : 'Serk Showroom'}
                  </span>
                </div>
              </div>

              {/* Kemis with Mesob Art & Traditional Craftsmanship */}
              <div 
                className="relative rounded-2xl overflow-hidden aspect-[3/4] border border-gold/30 group cursor-pointer shadow-xl translate-y-6"
                onClick={() => onOpenModal({
                  id: "serk_boutique_bronze_hem_mesob",
                  image: "/images/fashion/serk_boutique_bronze_hem_mesob.jpg",
                  title: lang === 'am' ? "የባህል ልብስና መሶብ" : "Habesha Kemis & Mesob Setting",
                  subtitle: lang === 'am' ? "በባህላዊ ጌጣጌጥ የተዋበ የሀበሻ ቀሚስ" : "Handwoven Kemis in authentic Ethiopian cultural setting",
                })}
              >
                <img
                  src="/images/fashion/serk_boutique_bronze_hem_mesob.jpg"
                  alt="Serk Design Kemis with Mesob"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[11px] font-mono text-gold uppercase tracking-wider block">Heritage</span>
                  <span className="text-xs font-semibold text-white">
                    {lang === 'am' ? 'የሀበሻ ባህል ጥበብ' : 'Ethiopian Heritage'}
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Editorial Text & Pillars (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-left">
            
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold block">
                {t.brandStory.eyebrow}
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#FAF8F5] leading-tight">
                {t.brandStory.title}
              </h2>
            </div>

            <p className="text-[#FAF8F5]/80 text-base leading-relaxed font-light">
              {t.brandStory.p1}
            </p>

            <p className="text-[#FAF8F5]/80 text-base leading-relaxed font-light">
              {t.brandStory.p2}
            </p>

            {/* 3 Core Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {t.brandStory.pillars.map((pillar, idx) => {
                const Icon = icons[idx] || Sparkles;
                return (
                  <div 
                    key={idx} 
                    className="p-4 rounded-xl bg-[#16181E] border border-gold/20 hover:border-gold/50 transition-colors flex flex-col space-y-2"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gold/15 flex items-center justify-center text-gold">
                      <Icon size={16} />
                    </div>
                    <h3 className="text-sm font-bold text-[#FAF8F5]">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-[#FAF8F5]/70 leading-relaxed font-light">
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
