import React from 'react';
import { ArrowDownRight, Send, Sparkles, ChevronDown } from 'lucide-react';
import { verifiedSocials } from '../data/serkData';

export default function Hero({ t, lang, onOpenModal }) {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-radial-luxury">
      
      {/* Background Ambience & Grid Patterns */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 right-10 w-96 h-96 bg-crimson/10 rounded-full blur-2xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#C5A05908_1px,transparent_1px),linear-gradient(to_bottom,#C5A05908_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text & Editorial Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            {/* Tag / Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1C22] border border-gold/40 text-gold text-xs font-semibold tracking-wider uppercase shadow-inner">
              <Sparkles size={13} className="text-gold animate-spin" style={{ animationDuration: '8s' }} />
              <span>{t.hero.tag}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAF8F5] leading-[1.15]">
              <span>{t.hero.titleStart} </span>
              <span className="text-gold-gradient font-serif italic font-normal underline decoration-gold/30 decoration-wavy decoration-1 underline-offset-8">
                {t.hero.titleHighlight}
              </span>
              <br className="hidden sm:inline" />
              <span> {t.hero.titleEnd}</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#FAF8F5]/80 max-w-xl leading-relaxed font-light">
              {t.hero.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <a
                href="#lookbook"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gold text-[#121214] font-bold text-sm tracking-wide shadow-xl shadow-gold/25 hover:bg-gold-light hover:shadow-gold/40 active:scale-[0.98] transition-all"
              >
                <span>{t.hero.exploreBtn}</span>
                <ArrowDownRight size={18} />
              </a>

              <a
                href={verifiedSocials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#1A1C22] border border-gold/40 text-[#FAF8F5] font-medium text-sm hover:border-gold hover:bg-[#252833] active:scale-[0.98] transition-all"
              >
                <Send size={16} className="text-gold" />
                <span>{t.hero.telegramBtn}</span>
              </a>
            </div>

            {/* Quick Metrics / Trust Indicators */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 w-full border-t border-white/10 stitch-border-t">
              {t.hero.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-lg sm:text-2xl font-bold font-serif text-gold">
                    {stat.value}
                  </span>
                  <span className="text-xs text-[#FAF8F5]/70 font-light mt-0.5 leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Visual / High-Fashion Editorial Composition (5 cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Decorative Gold Seam Frame */}
            <div className="relative w-full max-w-md mx-auto aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-2 border-gold/30 p-2 bg-[#1A1C22]">
              
              <div 
                className="relative w-full h-full rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => onOpenModal({
                  id: "editorial_dramatic_habesha_wrap",
                  image: "/images/fashion/editorial_dramatic_habesha_wrap.jpg",
                  title: lang === 'am' ? "ልዩ የባህል ጥልፍ ድሪፕ" : "Dramatic Handwoven Habesha Wrap",
                  subtitle: lang === 'am' ? "በወርቃማና አረንጓዴ ጥበብ የተዋበ ማራኪ ንድፍ" : "Editorial drape adorned with gold and emerald tilet",
                })}
              >
                <img
                  src="/images/fashion/editorial_dramatic_habesha_wrap.jpg"
                  alt="Serk Design Haute Couture Kemis"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                />

                {/* Gradient Shadow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-black/20 opacity-70 group-hover:opacity-50 transition-opacity"></div>

                {/* Floating Fashion Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#121214]/85 backdrop-blur-md border border-gold/30 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-gold uppercase tracking-wider block">
                      {lang === 'am' ? 'የቅርብ ጊዜ ኮውቸር' : 'Couture Feature'}
                    </span>
                    <span className="text-xs text-[#FAF8F5]/90 font-medium">
                      {lang === 'am' ? 'የሀበሻ ቀሚስና የጥበብ ጥልፍ' : 'Handcrafted Ethiopian Tilet'}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold/50 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-[#121214] transition-colors">
                    <Sparkles size={14} />
                  </div>
                </div>
              </div>

              {/* Floating Accent Card (Bottom Left) */}
              <div className="absolute -bottom-4 -left-4 hidden sm:flex items-center gap-3 bg-[#1A1C22] border border-gold/40 rounded-xl p-3 shadow-xl backdrop-blur-sm">
                <div className="w-9 h-9 rounded-lg bg-gold/20 border border-gold/40 flex items-center justify-center text-gold font-serif font-bold text-base">
                  ሰ
                </div>
                <div className="text-left">
                  <div className="text-[11px] font-bold text-[#FAF8F5]">SERK DESIGN</div>
                  <div className="text-[10px] text-gold font-mono tracking-wider">ADDIS ABABA</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Scroll Down Hint */}
      <a 
        href="#story" 
        className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center text-gold/60 hover:text-gold transition-colors focus:outline-none"
        aria-label="Scroll down to story"
      >
        <span className="text-[11px] tracking-widest uppercase font-mono">
          {lang === 'am' ? 'ወደ ታች ይሸብልሉ' : 'SCROLL'}
        </span>
        <ChevronDown size={18} className="animate-bounce mt-1" />
      </a>

    </section>
  );
}
