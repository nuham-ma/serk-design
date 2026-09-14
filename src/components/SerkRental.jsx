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
      className="py-28 sm:py-36 bg-gradient-to-b from-[#051815] via-[#0A2E28] to-[#051815] relative overflow-hidden border-t border-b border-serk-border"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Decorative Rings */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-serk-gold/10 pointer-events-none"></div>
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-serk-gold/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Generously Spaced Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text & Features (5 cols) */}
          <div className="lg:col-span-5 space-y-7 text-left">
            
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

            {/* Checklist of Rental Features with improved readable font size */}
            <div className="space-y-3.5 pt-2">
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
            <div className="pt-4 flex flex-wrap items-center gap-3.5">
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
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-[#0D2F28] border border-serk-border text-serk-gold text-sm font-mono font-bold hover:border-serk-gold transition-colors"
              >
                <Phone size={15} />
                <span>{verifiedSocials.phone}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Larger Visual Impact Auto-Scrolling Carousel (7 cols) */}
          <div className="lg:col-span-7 relative">
            
            {/* Main Featured Carousel Display with Large Impact */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-serk-gold/35 shadow-2xl bg-[#0D2F28] aspect-[3/3.8] sm:aspect-[4/4]">
              
              {rentalImages.map((img, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <div
                    key={img.id}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out cursor-pointer group ${
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
                    <img
                      src={img.src}
                      alt={img.title}
                      className="w-full h-full object-cover object-top group-hover:scale-104 transition-transform duration-700 ease-out"
                    />

                    {/* Very subtle bottom gradient for title clarity (Requirement 9) */}
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#08221D]/90 via-[#08221D]/40 to-transparent"></div>

                    {/* Floating Title Card */}
                    <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#08221D]/90 backdrop-blur-md border border-serk-gold/30 flex items-center justify-between shadow-xl">
                      <div>
                        <span className="text-[11px] font-mono text-serk-gold uppercase tracking-wider font-bold block">
                          SERK RENTAL • {img.tag}
                        </span>
                        <h4 className="text-sm sm:text-base font-bold text-[#FDF3E5] font-serif">
                          {img.title}
                        </h4>
                      </div>
                      <div className="px-3 py-1.5 rounded-full bg-serk-gold text-[#08221D] text-xs font-bold shrink-0">
                        {lang === 'am' ? 'ይመልከቱ' : 'Inspect'}
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Navigation Arrows */}
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#08221D]/80 border border-serk-gold/40 text-serk-gold flex items-center justify-center hover:bg-serk-gold hover:text-[#08221D] transition-all shadow-lg active:scale-95"
                aria-label="Previous rental image"
              >
                <ChevronLeft size={22} />
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#08221D]/80 border border-serk-gold/40 text-serk-gold flex items-center justify-center hover:bg-serk-gold hover:text-[#08221D] transition-all shadow-lg active:scale-95"
                aria-label="Next rental image"
              >
                <ChevronRight size={22} />
              </button>

            </div>

            {/* Pagination Thumbnails / Dots for Direct Selection */}
            <div className="flex items-center justify-center gap-2 mt-4">
              {rentalImages.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentIndex 
                      ? 'w-8 bg-serk-gold shadow-sm shadow-serk-gold/50' 
                      : 'w-2 bg-serk-border hover:bg-serk-gold/50'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
