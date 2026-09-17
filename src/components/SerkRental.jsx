import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Check, Send, ShoppingBag, ChevronLeft, ChevronRight, Phone } from 'lucide-react';
import { verifiedSocials } from '../data/serkData';

export default function SerkRental({ t, lang, onOpenModal }) {
  const rentalImages = [
    {
      id: "serk_rental_navy_velvet_kaftan",
      src: "/images/fashion/serk_rental_navy_velvet_kaftan.jpg",
      title: lang === 'am' ? "ሮያል ኔቪ ቬልቬት የኪራይ ቀሚስ" : "Royal Navy Velvet Evening Gown",
      subtitle: lang === 'am' ? "በወርቅ ጥልፍ የተሸለመ የቬልቬት ካፍታን" : "Royal velvet gown with ornate gold embroidery",
      tag: "Navy Velvet"
    },
    {
      id: "serk_rental_ivory_offshoulder",
      src: "/images/fashion/serk_rental_ivory_offshoulder.jpg",
      title: lang === 'am' ? "የትከሻ ክፍት የሰርክ ኪራይ ቀሚስ" : "Off-Shoulder Serk Rental Kemis",
      subtitle: lang === 'am' ? "ለቀረጻና ለክብረ በዓል የሚከራይ የጥበብ ቀሚስ" : "Available in boutique rental for photo sessions & events",
      tag: "Off-Shoulder"
    },
    {
      id: "serk_rental_yellow_tilet_dress",
      src: "/images/fashion/serk_rental_yellow_tilet_dress.jpg",
      title: lang === 'am' ? "ወርቃማ ጥበብ የሰርክ ኪራይ ቀሚስ" : "Golden Tilet Serk Rental Gown",
      subtitle: lang === 'am' ? "በደረትና በመሃል የወረደ ወርቃማ ጥበብ ያለው" : "Radiant golden vertical embroidery gown",
      tag: "Golden Tilet"
    },
    {
      id: "serk_showroom_rose_gold_kemis",
      src: "/images/fashion/serk_showroom_rose_gold_kemis.jpg",
      title: lang === 'am' ? "ሮዝ-ጎልድ ዳርቻ የሰርክ ኪራይ ቀሚስ" : "Rose-Gold Border Serk Kemis",
      subtitle: lang === 'am' ? "ለሙሽሮችና ለሚዜዎች የተዘጋጀ የኪራይ ቀሚስ" : "Showroom bridal rental kemis with rose-gold border",
      tag: "Rose Gold"
    },
    {
      id: "serk_rental_strapless_entrance",
      src: "/images/fashion/serk_rental_strapless_entrance.jpg",
      title: lang === 'am' ? "የሰርክ ኪራይ ማሳያ ደጃፍ" : "Serk Rental Boutique Showcase",
      subtitle: lang === 'am' ? "በሰርክ ኪራይ ማሳያ ክፍል መግቢያ ላይ" : "Showcase dress at the Serk Rental entrance",
      tag: "Boutique Showcase"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scrolling carousel timer (every 3.5 seconds)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rentalImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [isPaused, rentalImages.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + rentalImages.length) % rentalImages.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % rentalImages.length);
  };

  return (
    <section 
      id="rental" 
      className="py-20 sm:py-24 bg-gradient-to-b from-[#051815] via-[#0A2E28] to-[#051815] relative overflow-hidden border-t border-b border-serk-border"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Decorative Rings */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-serk-gold/10 pointer-events-none"></div>
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-serk-gold/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Balanced Grid: 7 cols text, 5 cols compact carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Text & Features (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-serk-gold/15 border border-serk-gold/40 text-serk-gold text-xs font-bold uppercase tracking-wider">
              <ShoppingBag size={14} />
              <span>{t.rentalSection.badge}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#FDF3E5] leading-snug">
              {t.rentalSection.title}
            </h2>

            <p className="text-sm sm:text-base text-[#FDF3E5]/85 font-light leading-relaxed">
              {t.rentalSection.desc}
            </p>

            {/* Checklist of Rental Features with readable font size */}
            <div className="space-y-3 pt-1">
              {t.rentalSection.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-serk-gold/20 text-serk-gold flex items-center justify-center shrink-0 mt-0.5 border border-serk-gold/40">
                    <Check size={13} strokeWidth={3} />
                  </div>
                  <span className="text-sm sm:text-base text-[#FDF3E5]/90 font-medium">
                    {feat}
                  </span>
                </div>
              ))}
            </div>

            {/* Inquire & Call CTA Buttons with +251 phone number */}
            <div className="pt-3 flex flex-wrap items-center gap-3.5">
              <a
                href={verifiedSocials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-serk-gold text-[#08221D] font-bold text-sm tracking-wide shadow-xl shadow-serk-gold/20 hover:brightness-110 active:scale-95 transition-all"
              >
                <Send size={16} />
                <span>{t.rentalSection.ctaText}</span>
              </a>

              <a
                href={`tel:${verifiedSocials.phoneRaw}`}
                dir="ltr"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-[#0D2F28] border border-serk-border text-serk-gold text-sm font-mono font-bold hover:border-serk-gold transition-colors whitespace-nowrap tabular-nums"
                title="Call hotline"
              >
                <Phone size={15} />
                <span dir="ltr">{verifiedSocials.phone}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Compact, Non-Cropped Auto-Scrolling Carousel (5 cols) */}
          <div className="lg:col-span-5 relative w-full">
            
            {/* Wider Carousel Frame - Extends wider from left to right while keeping same height */}
            <div className="relative w-full max-w-[360px] sm:max-w-[400px] lg:max-w-[440px] mx-auto rounded-2xl overflow-hidden border border-serk-gold/40 shadow-xl bg-[#051815] h-[380px] sm:h-[420px] max-h-[420px] flex items-center justify-center">
              
              {rentalImages.map((img, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <div
                    key={img.id}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out cursor-pointer group flex items-center justify-center ${
                      isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                    }`}
                    onClick={() => onOpenModal({
                      id: img.id,
                      image: img.src,
                      title: img.title,
                      subtitle: img.subtitle,
                      badge: img.tag,
                      category: 'rental'
                    })}
                  >
                    {/* Full Photo reaches left and right edges horizontally - wider side-to-side */}
                    <img
                      src={img.src}
                      alt={img.title}
                      className="w-full h-full object-cover object-center scale-[1.04] transition-transform duration-500 group-hover:scale-108"
                    />

                    {/* Subtle Top Badge */}
                    <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-[#08221D]/90 backdrop-blur-md border border-serk-gold/40 text-[10px] uppercase font-bold text-serk-gold tracking-wider shadow">
                      {img.tag}
                    </div>
                  </div>
                );
              })}

              {/* Navigation Arrows */}
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-[#08221D]/85 border border-serk-gold/40 text-serk-gold flex items-center justify-center hover:bg-serk-gold hover:text-[#08221D] transition-all shadow-md active:scale-95"
                aria-label="Previous rental image"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-[#08221D]/85 border border-serk-gold/40 text-serk-gold flex items-center justify-center hover:bg-serk-gold hover:text-[#08221D] transition-all shadow-md active:scale-95"
                aria-label="Next rental image"
              >
                <ChevronRight size={18} />
              </button>

            </div>

            {/* Compact Caption Bar & Dots Below Carousel */}
            <div className="mt-3 max-w-[360px] sm:max-w-[400px] lg:max-w-[440px] mx-auto px-1 flex items-center justify-between">
              <div className="min-w-0 pr-2">
                <span className="text-[10px] font-mono text-serk-gold uppercase tracking-wider font-bold block truncate">
                  SERK RENTAL • {rentalImages[currentIndex].tag}
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-[#FDF3E5] font-serif truncate">
                  {rentalImages[currentIndex].title}
                </h4>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                {rentalImages.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1.5 rounded-full transition-all ${
                      idx === currentIndex 
                        ? 'w-5 bg-serk-gold shadow-sm' 
                        : 'w-1.5 bg-serk-border hover:bg-serk-gold/50'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
