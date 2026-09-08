import React from 'react';
import { MapPin, Phone, Send, ExternalLink } from 'lucide-react';
import { verifiedSocials } from '../data/serkData';

export default function BoutiqueVisit({ t, lang }) {
  return (
    <section id="visit" className="py-16 bg-[#051815] relative overflow-hidden border-t border-b border-serk-border">
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Compact Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.25em] text-serk-gold">
            <MapPin size={14} className="text-serk-gold" />
            <span>{t.visit.eyebrow}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#FDF3E5]">
            {t.visit.title}
          </h2>
          <p className="text-xs sm:text-sm text-[#FDF3E5]/70 font-light">
            {t.visit.desc}
          </p>
        </div>

        {/* Compact 3-Column Touchpoint Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* 1. Google Maps Location Pin Card */}
          <div className="bg-[#0D2F28] border border-serk-border hover:border-serk-gold/60 rounded-xl p-5 flex flex-col justify-between space-y-4 shadow-lg transition-colors">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-lg bg-serk-gold/15 text-serk-gold flex items-center justify-center border border-serk-gold/30">
                <MapPin size={20} className="animate-bounce" />
              </div>
              <h3 className="text-base font-bold font-serif text-[#FDF3E5]">
                {t.visit.locationTitle}
              </h3>
              <p className="text-xs text-[#FDF3E5]/70 font-light leading-relaxed">
                {t.visit.locationText}
              </p>
            </div>
            
            <a
              href={verifiedSocials.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between text-xs font-bold text-serk-gold hover:underline pt-2 border-t border-serk-border"
            >
              <span>{t.visit.mapBtn}</span>
              <ExternalLink size={13} />
            </a>
          </div>

          {/* 2. Direct Phone Hotline (from logo) */}
          <div className="bg-[#0D2F28] border border-serk-border hover:border-serk-gold/60 rounded-xl p-5 flex flex-col justify-between space-y-4 shadow-lg transition-colors">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-lg bg-serk-gold/15 text-serk-gold flex items-center justify-center border border-serk-gold/30">
                <Phone size={20} />
              </div>
              <h3 className="text-base font-bold font-serif text-[#FDF3E5]">
                {t.visit.phoneTitle}
              </h3>
              <p className="text-base font-mono font-bold text-serk-gold">
                {verifiedSocials.phone}
              </p>
            </div>

            <a
              href={`tel:${verifiedSocials.phone}`}
              className="inline-flex items-center justify-between text-xs font-bold text-serk-gold hover:underline pt-2 border-t border-serk-border"
            >
              <span>{lang === 'am' ? 'በቀጥታ ይደውሉ' : 'Call Now'}</span>
              <span>&rarr;</span>
            </a>
          </div>

          {/* 3. Telegram Consultation */}
          <div className="bg-[#0D2F28] border border-serk-border hover:border-serk-gold/60 rounded-xl p-5 flex flex-col justify-between space-y-4 shadow-lg transition-colors">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-lg bg-serk-gold/15 text-serk-gold flex items-center justify-center border border-serk-gold/30">
                <Send size={20} />
              </div>
              <h3 className="text-base font-bold font-serif text-[#FDF3E5]">
                Telegram
              </h3>
              <p className="text-xs text-[#FDF3E5]/70 font-light leading-relaxed">
                @serkdesign
              </p>
            </div>

            <a
              href={verifiedSocials.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between text-xs font-bold text-serk-gold hover:underline pt-2 border-t border-serk-border"
            >
              <span>{t.visit.telegramBtn}</span>
              <ExternalLink size={13} />
            </a>
          </div>

        </div>

      </div>

    </section>
  );
}
