import React from 'react';
import { Phone } from 'lucide-react';
import { verifiedSocials } from '../data/serkData';
import { TelegramIcon, InstagramIcon, TikTokIcon } from './BrandIcons';
import { getLocalizedYear } from '../utils/dateHelper';

export default function Footer({ t, lang }) {
  return (
    <footer className="bg-[#051815] border-t border-serk-border py-8 text-[#FDF3E5]/70 relative overflow-hidden">
      
      {/* Top golden accent line */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-serk-gold/40 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-serk-border">
          
          {/* Logo & Brand Identity */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-serk-gold/40 shadow-sm shrink-0 bg-[#08221D]">
              <img 
                src="/images/logo/serk_logo.jpg" 
                alt="Serk Design" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-left">
              <span className="text-sm font-bold tracking-wider text-[#FDF3E5] block uppercase font-sans">
                {lang === 'am' ? 'ሰርክ ዲዛይን በሜሮን' : 'SERK DESIGN BY MERON'}
              </span>
              <span className="text-[10px] text-serk-gold uppercase font-mono tracking-wider">
                {lang === 'am' ? 'ESTD 2014 • አዲስ አበባ' : 'ESTD 2020 • Addis Ababa'}
              </span>
            </div>
          </div>

          {/* Contact Details & Social Links with +251 (Requirement 4) */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            {/* Phone with +251 */}
            <a
              href={`tel:${verifiedSocials.phoneRaw}`}
              className="inline-flex items-center gap-1.5 text-serk-gold hover:text-serk-goldLight font-mono font-medium text-sm"
              title="Call Serk Design"
            >
              <Phone size={14} />
              <span>{verifiedSocials.phone}</span>
            </a>

            <span className="text-serk-border hidden sm:inline">|</span>

            {/* Social Icons */}
            <div className="flex items-center gap-2">
              <a
                href={verifiedSocials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#0D2F28] border border-serk-border flex items-center justify-center text-serk-gold hover:border-serk-gold transition-colors"
                aria-label="Telegram"
              >
                <TelegramIcon size={14} />
              </a>

              <a
                href={verifiedSocials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#0D2F28] border border-serk-border flex items-center justify-center text-serk-gold hover:border-serk-gold transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon size={14} />
              </a>

              <a
                href={verifiedSocials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#0D2F28] border border-serk-border flex items-center justify-center text-serk-gold hover:border-serk-gold transition-colors"
                aria-label="TikTok"
              >
                <TikTokIcon size={14} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Compact Copyright & Speculative Attribution */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs text-[#FDF3E5]/60 text-center sm:text-left">
          <div>
            <span>&copy; {getLocalizedYear(lang)} {lang === 'am' ? 'ሰርክ ዲዛይን በሜሮን። ' : 'Serk Design by Meron. '}{t.footer.copyright}</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 text-center sm:text-right">
            <span className="text-serk-gold/75 font-medium">
              {t.footer.speculativeNotice}
            </span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="text-white/60 font-mono">
              {t.footer.attribution}
            </span>
          </div>
        </div>

      </div>

    </footer>
  );
}
