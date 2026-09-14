import React from 'react';
import { ArrowDownRight, Send, Phone, Sparkles, ChevronDown } from 'lucide-react';
import { verifiedSocials } from '../data/serkData';

export default function Hero({ t, lang, onOpenModal }) {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-radial-serk">
      
      {/* Background Ambience & Grid Patterns */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-serk-gold/8 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 right-10 w-96 h-96 bg-serk-terracotta/15 rounded-full blur-2xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#E5B8760A_1px,transparent_1px),linear-gradient(to_bottom,#E5B8760A_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Editorial & Action Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            {/* Tag / Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D2F28] border border-serk-gold/40 text-serk-gold text-xs font-semibold tracking-wider uppercase shadow-inner">
              <Sparkles size={13} className="text-serk-gold" />
              <span>{t.hero.tag}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FDF3E5] leading-[1.15]">
              <span>{t.hero.titleStart} </span>
              <span className="text-serk-gold-gradient font-serif italic font-normal underline decoration-serk-gold/30 decoration-wavy decoration-1 underline-offset-8">
                {t.hero.titleHighlight}
              </span>
              <br className="hidden sm:inline" />
              <span> {t.hero.titleEnd}</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#FDF3E5]/85 max-w-xl leading-relaxed font-light">
              {t.hero.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto pt-2">
              <a
                href="#lookbook"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-serk-gold text-[#08221D] font-bold text-sm tracking-wide shadow-xl shadow-serk-gold/25 hover:bg-serk-goldLight hover:shadow-serk-gold/40 active:scale-[0.98] transition-all"
              >
                <span>{t.hero.exploreBtn}</span>
                <ArrowDownRight size={18} />
              </a>

              <a
                href={verifiedSocials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0D2F28] border border-serk-gold/40 text-[#FDF3E5] font-medium text-sm hover:border-serk-gold hover:bg-[#123D34] active:scale-[0.98] transition-all"
              >
                <Send size={16} className="text-serk-gold" />
                <span>{t.hero.telegramBtn}</span>
              </a>

              <a
                href={`tel:${verifiedSocials.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-[#08221D] border border-serk-border text-serk-gold text-sm font-mono font-bold hover:border-serk-gold transition-colors"
                title="Call hotline"
              >
                <Phone size={15} />
                <span>{verifiedSocials.phone}</span>
              </a>
            </div>

            {/* Metrics Bar */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 w-full border-t border-serk-border stitch-border-t">
              {t.hero.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-lg sm:text-2xl font-bold font-serif text-serk-gold">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm text-[#FDF3E5]/75 font-light mt-0.5 leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: High-Quality Professional Hero Photograph (5 cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Elegant Outer Frame */}
            <div className="relative w-full max-w-md mx-auto aspect-[3/4.4] rounded-2xl overflow-hidden shadow-2xl border-2 border-serk-gold/35 p-2 bg-[#0D2F28]">
              
              <div 
                className="relative w-full h-full rounded-xl overflow-hidden cursor-pointer group bg-black/40"
                onClick={() => onOpenModal({
                  id: "hero_emerald_gown",
                  image: "/images/fashion/hero_emerald_gown.jpg",
                  title: lang === 'am' ? "ኤመራልድ ግሪንና ወርቅ ፍሌር ቀሚስ" : "Emerald Green & Gold Bell Flare Kemis",
                  subtitle: lang === 'am' ? "በሰርክ ዲዛይን በሜሮን የተዘጋጀ ከፍተኛ ጥራት ያለው የባህል ዲዛይን" : "High-resolution signature design by Serk Design by Meron",
                })}
              >
                <img
                  src="/images/fashion/hero_emerald_gown.jpg"
                  alt="Serk Design Emerald Couture Kemis"
                  className="w-full h-full object-cover object-top group-hover:scale-104 transition-transform duration-700 ease-out"
                  loading="eager"
                />

                {/* Subtle, Minimal Gradient Shadow at the Very Bottom Only */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#08221D]/90 via-[#08221D]/40 to-transparent"></div>

                {/* Floating Bottom Card */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#08221D]/90 backdrop-blur-md border border-serk-gold/30 flex items-center justify-between shadow-xl">
                  <div>
                    <span className="text-[11px] font-bold text-serk-gold uppercase tracking-wider block">
                      {lang === 'am' ? 'የቅርብ ጊዜ ኮውቸር' : 'Couture Feature'}
                    </span>
                    <span className="text-xs sm:text-sm text-[#FDF3E5] font-medium">
                      {lang === 'am' ? 'ኤመራልድ ግሪንና ወርቅ ፍሌር ቀሚስ' : 'Emerald & Gold Bell Flare Gown'}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-serk-gold/20 border border-serk-gold/50 flex items-center justify-center text-serk-gold group-hover:bg-serk-gold group-hover:text-[#08221D] transition-colors shrink-0">
                    <Sparkles size={14} />
                  </div>
                </div>
              </div>

              {/* Floating Brand Badge (Bottom Left) */}
              <div className="absolute -bottom-3 -left-3 hidden sm:flex items-center gap-2.5 bg-[#0D2F28] border border-serk-gold/40 rounded-xl p-2.5 shadow-2xl backdrop-blur-md">
                <img
                  src="/images/logo/serk_logo.jpg"
                  alt="Logo emblem"
                  className="w-8 h-8 rounded-lg object-cover border border-serk-gold/30"
                />
                <div className="text-left pr-2">
                  <div className="text-[11px] font-bold text-[#FDF3E5]">SERK DESIGN</div>
                  <div className="text-[9px] text-serk-gold font-mono tracking-wider">ESTD 2020</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Scroll Down Hint */}
      <a 
        href="#story" 
        className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center text-serk-gold/60 hover:text-serk-gold transition-colors focus:outline-none"
        aria-label="Scroll down to story"
      >
        <span className="text-[10px] tracking-widest uppercase font-mono">
          {lang === 'am' ? 'ወደ ታች ይሸብልሉ' : 'SCROLL'}
        </span>
        <ChevronDown size={17} className="animate-bounce mt-0.5" />
      </a>

    </section>
  );
}
