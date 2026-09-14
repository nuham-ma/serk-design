import React, { useState, useEffect } from 'react';
import { Menu, X, Send, Phone, ChevronRight } from 'lucide-react';
import { verifiedSocials } from '../data/serkData';

export default function Navbar({ lang, setLang, t }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home, href: "#hero" },
    { label: t.nav.story, href: "#story" },
    { label: t.nav.pillars, href: "#collections" },
    { label: t.nav.rental, href: "#rental" },
    { label: t.nav.lookbook, href: "#lookbook" },
    { label: t.nav.visit, href: "#visit" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#061D19]/95 backdrop-blur-md border-b border-serk-gold/20 shadow-2xl py-2.5' 
        : 'bg-gradient-to-b from-[#061D19]/90 via-[#061D19]/50 to-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo with Actual Image */}
          <a href="#hero" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-serk-gold/50 rounded-lg p-1">
            <div className="relative w-11 h-11 rounded-xl overflow-hidden border border-serk-gold/50 shadow-md group-hover:border-serk-gold transition-colors bg-[#08221D] shrink-0">
              <img 
                src="/images/logo/serk_logo.jpg" 
                alt="Serk Design Logo" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-wider text-[#FDF3E5] group-hover:text-serk-gold transition-colors font-sans uppercase leading-tight">
                {lang === 'am' ? 'ሰርክ ዲዛይን' : 'SERK DESIGN'}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-[10px] tracking-[0.2em] text-serk-gold uppercase font-serif font-medium">
                  by Meron
                </span>
                <span className="text-[9px] px-1.5 py-0.2 rounded bg-serk-gold/15 text-serk-gold font-mono border border-serk-gold/30">
                  ESTD 2020
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#FDF3E5]/80 hover:text-serk-gold px-3 py-2 rounded-md transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-3 right-3 h-[1.5px] bg-serk-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200"></span>
              </a>
            ))}
          </nav>

          {/* Right Actions: Phone (+251) + Lang Switcher + Telegram */}
          <div className="hidden sm:flex items-center gap-3">
            
            {/* Direct Phone Link with +251 country code (Requirement 4) */}
            <a
              href={`tel:${verifiedSocials.phoneRaw}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0D2F28] border border-serk-border hover:border-serk-gold text-xs text-serk-gold font-mono font-medium transition-colors"
              title="Call Serk Design"
            >
              <Phone size={13} />
              <span>{verifiedSocials.phone}</span>
            </a>

            {/* Language Switcher */}
            <div className="flex items-center bg-[#0D2F28] border border-serk-border rounded-full p-1 text-xs">
              <button
                type="button"
                onClick={() => setLang('am')}
                className={`px-2.5 py-1 rounded-full font-medium transition-all ${
                  lang === 'am' 
                    ? 'bg-serk-gold text-[#08221D] font-bold shadow-md' 
                    : 'text-[#FDF3E5]/70 hover:text-[#FDF3E5]'
                }`}
                aria-label="Switch to Amharic"
              >
                አማ
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded-full font-medium transition-all ${
                  lang === 'en' 
                    ? 'bg-serk-gold text-[#08221D] font-bold shadow-md' 
                    : 'text-[#FDF3E5]/70 hover:text-[#FDF3E5]'
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
            </div>

            {/* Telegram CTA */}
            <a
              href={verifiedSocials.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-serk-gold to-serk-goldLight text-[#08221D] text-xs font-bold tracking-wide uppercase shadow-lg shadow-serk-gold/20 hover:brightness-110 active:scale-95 transition-all"
            >
              <Send size={13} />
              <span>{t.nav.consultBtn}</span>
            </a>
          </div>

          {/* Mobile Menu & Language Toggle button */}
          <div className="flex items-center gap-2 sm:hidden">
            {/* Quick Lang toggle on mobile */}
            <button
              type="button"
              onClick={() => setLang(lang === 'am' ? 'en' : 'am')}
              className="px-2.5 py-1 text-xs rounded-full border border-serk-gold/40 text-serk-gold font-bold bg-[#0D2F28]"
            >
              {lang === 'am' ? 'EN' : 'አማ'}
            </button>

            {/* Hamburger button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#FDF3E5] hover:text-serk-gold hover:bg-[#0D2F28] focus:outline-none focus:ring-2 focus:ring-serk-gold"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#08221D] border-b border-serk-gold/30 px-4 pt-3 pb-6 space-y-3 animate-modal-in shadow-2xl">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-base font-medium text-[#FDF3E5]/90 hover:text-serk-gold py-2.5 px-3 rounded-lg hover:bg-[#0D2F28] transition-colors"
              >
                <span>{link.label}</span>
                <ChevronRight size={16} className="text-serk-gold/50" />
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-serk-border flex flex-col gap-2.5">
            <a
              href={`tel:${verifiedSocials.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#0D2F28] border border-serk-gold/40 text-serk-gold text-sm font-mono font-bold"
            >
              <Phone size={15} />
              <span>{verifiedSocials.phone}</span>
            </a>

            <a
              href={verifiedSocials.telegram}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-serk-gold text-[#08221D] text-sm font-bold shadow-lg"
            >
              <Send size={16} />
              <span>{t.nav.consultBtn}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
