import React from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';
import { verifiedSocials } from '../data/serkData';
import { TelegramIcon, InstagramIcon, TikTokIcon } from './BrandIcons';

export default function Footer({ t, lang }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B0C0E] border-t border-gold/20 pt-16 pb-12 text-[#FAF8F5]/80 relative overflow-hidden">
      
      {/* Stitch accent bar on top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Identity & Summary (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center text-gold font-serif font-bold text-lg">
                ሰ
              </div>
              <div>
                <span className="text-lg font-bold tracking-wider text-[#FAF8F5] block uppercase font-sans">
                  {lang === 'am' ? 'ሰርክ ዲዛይን በሜሮን' : 'SERK DESIGN BY MERON'}
                </span>
                <span className="text-[11px] tracking-[0.2em] text-gold uppercase font-serif font-medium">
                  Haute Couture & Rental
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#FAF8F5]/70 max-w-sm font-light leading-relaxed">
              {t.footer.brandDesc}
            </p>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-gold">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero" className="hover:text-gold transition-colors">{t.nav.home}</a>
              </li>
              <li>
                <a href="#story" className="hover:text-gold transition-colors">{t.nav.story}</a>
              </li>
              <li>
                <a href="#collections" className="hover:text-gold transition-colors">{t.nav.pillars}</a>
              </li>
              <li>
                <a href="#rental" className="hover:text-gold transition-colors">{t.nav.rental}</a>
              </li>
              <li>
                <a href="#lookbook" className="hover:text-gold transition-colors">{t.nav.lookbook}</a>
              </li>
              <li>
                <a href="#visit" className="hover:text-gold transition-colors">{t.nav.visit}</a>
              </li>
            </ul>
          </div>

          {/* Social Channels (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-gold">
              {t.footer.socialTitle}
            </h4>
            
            <div className="flex items-center gap-3">
              <a
                href={verifiedSocials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#1A1C22] border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-[#121214] transition-all shadow"
                aria-label="Telegram"
              >
                <TelegramIcon size={18} />
              </a>

              <a
                href={verifiedSocials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#1A1C22] border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-[#121214] transition-all shadow"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>

              <a
                href={verifiedSocials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#1A1C22] border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-[#121214] transition-all shadow"
                aria-label="TikTok"
              >
                <TikTokIcon size={18} />
              </a>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs text-gold/80 hover:text-gold transition-colors"
              >
                <ArrowUp size={14} />
                <span>{lang === 'am' ? 'ወደ ላይ ተመለስ' : 'Back to top'}</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Attributions & Speculative Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#FAF8F5]/50">
          <div>
            <span>{t.footer.copyright}</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-right">
            <span className="text-gold/80 font-medium">
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
