import React from 'react';
import { MapPin, Phone, Send, ExternalLink } from 'lucide-react';
import { verifiedSocials } from '../data/serkData';

export default function BoutiqueVisit({ t, lang }) {
  return (
    <section id="visit" className="py-20 bg-[#051815] relative overflow-hidden border-t border-b border-serk-border">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Compact Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2.5">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-serk-gold">
            <MapPin size={15} className="text-serk-gold" />
            <span>{t.visit.eyebrow}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#FDF3E5]">
            {t.visit.title}
          </h2>
          <p className="text-sm sm:text-base text-[#FDF3E5]/80 font-light">
            {t.visit.desc}
          </p>
        </div>

        {/* 3-Column Unified Contact Cards with Consistent Typography (Requirements 3, 4, 5, 12) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Google Maps Showroom Pin with Verified Search Location */}
          <div className="bg-[#0D2F28] border border-serk-border hover:border-serk-gold/70 rounded-2xl p-6 flex flex-col justify-between space-y-5 shadow-xl transition-all hover:-translate-y-1">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-serk-gold/15 text-serk-gold flex items-center justify-center border border-serk-gold/30 shadow-inner">
                <MapPin size={22} className="animate-bounce" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-serif text-[#FDF3E5]">
                {t.visit.locationTitle}
              </h3>
              <p className="text-base sm:text-lg font-bold font-serif text-serk-gold leading-snug">
                {t.visit.locationText}
              </p>
              <p className="text-sm text-[#FDF3E5]/80 font-light leading-relaxed">
                {lang === 'am'
                  ? 'የሰርክ ዲዛይን ቡቲክን ትክክለኛ አድራሻ በGoogle Maps ይክፈቱ'
                  : 'Open the verified Serk Design Meron location in Google Maps'}
              </p>
            </div>
            
            <a
              href={verifiedSocials.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between text-sm font-bold text-serk-gold hover:underline pt-3 border-t border-serk-border"
            >
              <span>{t.visit.mapBtn}</span>
              <ExternalLink size={15} />
            </a>
          </div>

          {/* Card 2: Direct Phone Hotline starting with +251 (Reference Typography Style) */}
          <div className="bg-[#0D2F28] border border-serk-border hover:border-serk-gold/70 rounded-2xl p-6 flex flex-col justify-between space-y-5 shadow-xl transition-all hover:-translate-y-1">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-serk-gold/15 text-serk-gold flex items-center justify-center border border-serk-gold/30 shadow-inner">
                <Phone size={22} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-serif text-[#FDF3E5]">
                {t.visit.phoneTitle}
              </h3>
              <p className="text-base sm:text-lg font-mono font-bold text-serk-gold leading-snug">
                {verifiedSocials.phone}
              </p>
              <p className="text-sm text-[#FDF3E5]/80 font-light leading-relaxed">
                {t.visit.phoneDesc}
              </p>
            </div>

            <a
              href={`tel:${verifiedSocials.phoneRaw}`}
              className="inline-flex items-center justify-between text-sm font-bold text-serk-gold hover:underline pt-3 border-t border-serk-border"
            >
              <span>{lang === 'am' ? 'በቀጥታ ይደውሉ' : 'Call Now'}</span>
              <span>&rarr;</span>
            </a>
          </div>

          {/* Card 3: Telegram Consultation Channel */}
          <div className="bg-[#0D2F28] border border-serk-border hover:border-serk-gold/70 rounded-2xl p-6 flex flex-col justify-between space-y-5 shadow-xl transition-all hover:-translate-y-1">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-serk-gold/15 text-serk-gold flex items-center justify-center border border-serk-gold/30 shadow-inner">
                <Send size={22} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-serif text-[#FDF3E5]">
                Telegram
              </h3>
              <p className="text-base sm:text-lg font-mono font-bold text-serk-gold leading-snug">
                @serkdesign
              </p>
              <p className="text-sm text-[#FDF3E5]/80 font-light leading-relaxed">
                {t.visit.telegramDesc}
              </p>
            </div>

            <a
              href={verifiedSocials.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between text-sm font-bold text-serk-gold hover:underline pt-3 border-t border-serk-border"
            >
              <span>{t.visit.telegramBtn}</span>
              <ExternalLink size={15} />
            </a>
          </div>

        </div>

      </div>

    </section>
  );
}
