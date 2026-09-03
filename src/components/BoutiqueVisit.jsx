import React from 'react';
import { MapPin, Send, Calendar, Clock, Sparkles } from 'lucide-react';
import { verifiedSocials } from '../data/serkData';
import { InstagramIcon } from './BrandIcons';

export default function BoutiqueVisit({ t, lang }) {
  return (
    <section id="visit" className="py-24 bg-[#121214] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-gold">
            <MapPin size={14} />
            <span>{t.visit.eyebrow}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#FAF8F5]">
            {t.visit.title}
          </h2>
          <p className="text-sm sm:text-base text-[#FAF8F5]/70 font-light">
            {t.visit.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Consultation Booking & Social Actions (7 cols) */}
          <div className="lg:col-span-7 bg-[#1A1C22] border border-gold/30 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-8 shadow-2xl">
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 text-gold text-xs font-bold uppercase tracking-wider">
                <Sparkles size={12} />
                <span>{lang === 'am' ? 'የቀጥታ ትዕዛዝ' : 'Direct Booking'}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#FAF8F5]">
                {t.visit.telegramBoxTitle}
              </h3>
              <p className="text-sm text-[#FAF8F5]/80 font-light leading-relaxed">
                {t.visit.telegramBoxDesc}
              </p>

              <div className="p-4 rounded-xl bg-[#121214] border border-white/10 space-y-2 text-xs text-[#FAF8F5]/75">
                <div className="flex items-center gap-2 text-gold font-medium">
                  <Calendar size={14} />
                  <span>{lang === 'am' ? 'የቀጠሮና የትዕዛዝ መመሪያ' : 'Consultation Guidance'}</span>
                </div>
                <p className="font-light leading-relaxed">
                  {t.visit.consultationHoursNotice}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
              <a
                href={verifiedSocials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-xl bg-gold text-[#121214] font-bold text-xs uppercase tracking-wider shadow-lg shadow-gold/20 hover:brightness-110 active:scale-95 transition-all text-center"
              >
                <Send size={16} />
                <span>{t.visit.telegramBtn}</span>
              </a>

              <a
                href={verifiedSocials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-xl bg-[#22252E] border border-gold/40 text-[#FAF8F5] font-medium text-xs hover:border-gold hover:bg-[#2A2E3A] active:scale-95 transition-all text-center"
              >
                <InstagramIcon size={16} className="text-gold" />
                <span>{t.visit.instaBtn}</span>
              </a>
            </div>

          </div>

          {/* Right: Boutique Location Showcase & Map Embed Area (5 cols) */}
          <div className="lg:col-span-5 bg-[#16181E] border border-gold/30 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xl relative overflow-hidden">
            
            {/* Background Aesthetic */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gold/5 rounded-full blur-2xl pointer-events-none"></div>

            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-gold">
                  {lang === 'am' ? 'የሰርክ ቡቲክ ማሳያ' : 'Serk Boutique Showroom'}
                </span>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></div>
              </div>

              <h4 className="text-lg font-bold font-serif text-[#FAF8F5]">
                {lang === 'am' ? 'የቡቲክ ጉብኝትና ቀጠሮ' : 'Boutique Visit & Fittings'}
              </h4>

              <p className="text-xs text-[#FAF8F5]/70 leading-relaxed font-light">
                {lang === 'am'
                  ? 'የሰርክ ዲዛይን ቡቲክን በአካል ጎብኝተው የልብስ ዲዛይኖችን ለመሞከር፣ በቴሌግራም ወይም በኢንስታግራም መልዕክት በመላክ የቀጠሮ መረጃ ያግኙ።'
                  : 'To visit the Serk Design showroom and try on curated collections in person, message us on Telegram or Instagram for direct boutique consultation.'}
              </p>

              {/* Ready-to-Plug Map Visualizer Card */}
              <div className="relative aspect-video sm:aspect-[4/3] rounded-xl overflow-hidden border border-gold/30 bg-[#101216] flex flex-col items-center justify-center p-6 text-center group">
                <div className="absolute inset-0 bg-[radial-gradient(#C5A05915_1px,transparent_1px)] bg-[size:16px_16px]"></div>
                
                <div className="relative z-10 space-y-2 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center text-gold shadow-lg group-hover:scale-110 transition-transform">
                    <MapPin size={24} />
                  </div>
                  <span className="text-xs font-bold text-[#FAF8F5] block font-serif">
                    {lang === 'am' ? 'ሰርክ ዲዛይን በሜሮን' : 'Serk Design by Meron'}
                  </span>
                  <span className="text-[11px] text-[#FAF8F5]/60 block font-light max-w-xs">
                    {lang === 'am' 
                      ? 'አዲስ አበባ፣ ኢትዮጵያ • ለትክክለኛ አካባቢና ቀጠሮ በቴሌግራም ያግኙን' 
                      : 'Addis Ababa, Ethiopia • Contact via Telegram for exact boutique fitting location'}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 text-center">
              <span className="text-[11px] text-[#FAF8F5]/50 font-light">
                {lang === 'am' 
                  ? '✓ የተረጋገጡ ማህበራዊ የመገናኛ አውታሮች' 
                  : '✓ Verified Official Touchpoints'}
              </span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
