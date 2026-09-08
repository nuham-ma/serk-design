import React from 'react';
import { Sparkles, Check, Send, ShoppingBag } from 'lucide-react';
import { verifiedSocials } from '../data/serkData';

export default function SerkRental({ t, lang, onOpenModal }) {
  return (
    <section id="rental" className="py-22 bg-gradient-to-b from-[#051815] via-[#0A2E28] to-[#051815] relative overflow-hidden border-t border-b border-serk-border">
      
      {/* Background Decorative Rings */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-serk-gold/10 pointer-events-none"></div>
      <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-serk-gold/5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text & Features (6 cols) */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-serk-gold/15 border border-serk-gold/40 text-serk-gold text-xs font-bold uppercase tracking-wider">
              <ShoppingBag size={13} />
              <span>{t.rentalSection.badge}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#FDF3E5] leading-snug">
              {t.rentalSection.title}
            </h2>

            <p className="text-sm sm:text-base text-[#FDF3E5]/80 font-light leading-relaxed">
              {t.rentalSection.desc}
            </p>

            {/* Checklist of Rental Features */}
            <div className="space-y-3 pt-2">
              {t.rentalSection.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-serk-gold/20 text-serk-gold flex items-center justify-center shrink-0 mt-0.5 border border-serk-gold/40">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span className="text-sm text-[#FDF3E5]/90 font-medium">
                    {feat}
                  </span>
                </div>
              ))}
            </div>

            {/* Inquire CTA Button */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href={verifiedSocials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-serk-gold text-[#08221D] font-bold text-sm tracking-wide shadow-xl shadow-serk-gold/20 hover:brightness-110 active:scale-95 transition-all"
              >
                <Send size={16} />
                <span>{t.rentalSection.ctaText}</span>
              </a>
            </div>

          </div>

          {/* Right Photographic Gallery Grid (6 cols) */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              
              {/* Navy Velvet Rental Gown */}
              <div 
                className="aspect-[3/4.8] rounded-xl overflow-hidden border border-serk-gold/30 shadow-lg cursor-pointer group relative bg-[#0D2F28]"
                onClick={() => onOpenModal({
                  id: "serk_rental_navy_velvet_kaftan",
                  image: "/images/fashion/serk_rental_navy_velvet_kaftan.jpg",
                  title: lang === 'am' ? "ሮያል ኔቪ ቬልቬት የኪራይ ቀሚስ" : "Royal Navy Velvet Evening Gown",
                  subtitle: lang === 'am' ? "በወርቅ ጥልፍ የተሸለመ የቬልቬት ካፍታን" : "Royal velvet gown with ornate gold embroidery",
                })}
              >
                <img
                  src="/images/fashion/serk_rental_navy_velvet_kaftan.jpg"
                  alt="Serk Rental Navy Velvet Gown"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-2.5 left-2 right-2 text-center">
                  <span className="text-[10px] text-serk-gold font-bold uppercase tracking-wider block">Rental</span>
                  <span className="text-xs text-white font-medium truncate block">Navy Velvet</span>
                </div>
              </div>

              {/* Ivory Off-Shoulder Kemis */}
              <div 
                className="aspect-[3/4.8] rounded-xl overflow-hidden border border-serk-gold/30 shadow-lg cursor-pointer group relative bg-[#0D2F28] translate-y-3"
                onClick={() => onOpenModal({
                  id: "serk_rental_ivory_offshoulder",
                  image: "/images/fashion/serk_rental_ivory_offshoulder.jpg",
                  title: lang === 'am' ? "የትከሻ ክፍት የሰርክ ኪራይ ቀሚስ" : "Off-Shoulder Serk Rental Kemis",
                  subtitle: lang === 'am' ? "ለቀረጻና ለክብረ በዓል የሚከራይ የጥበብ ቀሚስ" : "Available in boutique rental for photo sessions & events",
                })}
              >
                <img
                  src="/images/fashion/serk_rental_ivory_offshoulder.jpg"
                  alt="Serk Rental Ivory Kemis"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-2.5 left-2 right-2 text-center">
                  <span className="text-[10px] text-serk-gold font-bold uppercase tracking-wider block">Rental</span>
                  <span className="text-xs text-white font-medium truncate block">Off-Shoulder</span>
                </div>
              </div>

              {/* Strapless Boutique Entrance */}
              <div 
                className="aspect-[3/4.8] rounded-xl overflow-hidden border border-serk-gold/30 shadow-lg cursor-pointer group relative bg-[#0D2F28]"
                onClick={() => onOpenModal({
                  id: "serk_rental_strapless_entrance",
                  image: "/images/fashion/serk_rental_strapless_entrance.jpg",
                  title: lang === 'am' ? "የሰርክ ኪራይ ማሳያ ደጃፍ" : "Serk Rental Boutique Showcase",
                  subtitle: lang === 'am' ? "በሰርክ ኪራይ ማሳያ ክፍል መግቢያ ላይ" : "Showcase dress at the Serk Rental entrance",
                })}
              >
                <img
                  src="/images/fashion/serk_rental_strapless_entrance.jpg"
                  alt="Serk Rental Showroom"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-2.5 left-2 right-2 text-center">
                  <span className="text-[10px] text-serk-gold font-bold uppercase tracking-wider block">Showroom</span>
                  <span className="text-xs text-white font-medium truncate block">Serk Entrance</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
