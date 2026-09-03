import React, { useState, useEffect } from 'react';
import { Menu, X, Send, ChevronRight } from 'lucide-react';
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
        ? 'bg-[#121214]/90 backdrop-blur-md border-b border-[#C5A059]/20 shadow-2xl py-3' 
        : 'bg-gradient-to-b from-[#121214]/90 via-[#121214]/60 to-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-gold/50 rounded-lg p-1">
            <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-[#1C1E24] to-[#0E0F12] border border-gold/40 flex items-center justify-center shadow-lg group-hover:border-gold transition-colors">
              <span className="text-gold font-serif font-bold text-lg tracking-widest">ሰ</span>
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-gold animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-wider text-[#FAF8F5] group-hover:text-gold transition-colors font-sans uppercase">
                {lang === 'am' ? 'ሰርክ ዲዛይን' : 'SERK DESIGN'}
              </span>
              <span className="text-[10px] tracking-[0.25em] text-gold uppercase font-serif font-medium">
                by Meron
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#FAF8F5]/80 hover:text-gold px-3 py-2 rounded-md transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-3 right-3 h-[1.5px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200"></span>
              </a>
            ))}
          </nav>

          {/* Right Action & Language Switcher */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex items-center bg-[#1A1C22] border border-gold/30 rounded-full p-1 text-xs">
              <button
                type="button"
                onClick={() => setLang('am')}
                className={`px-2.5 py-1 rounded-full font-medium transition-all ${
                  lang === 'am' 
                    ? 'bg-gold text-[#121214] font-bold shadow-md' 
                    : 'text-[#FAF8F5]/70 hover:text-[#FAF8F5]'
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
                    ? 'bg-gold text-[#121214] font-bold shadow-md' 
                    : 'text-[#FAF8F5]/70 hover:text-[#FAF8F5]'
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#C5A059] to-[#DFBF7A] text-[#121214] text-xs font-bold tracking-wide uppercase shadow-lg shadow-gold/20 hover:brightness-110 active:scale-95 transition-all"
            >
              <Send size={14} className="text-[#121214]" />
              <span>{t.nav.consultBtn}</span>
            </a>
          </div>

          {/* Mobile Menu & Language Toggle button */}
          <div className="flex items-center gap-2 sm:hidden">
            {/* Quick Lang toggle on mobile */}
            <button
              type="button"
              onClick={() => setLang(lang === 'am' ? 'en' : 'am')}
              className="px-2.5 py-1 text-xs rounded-full border border-gold/40 text-gold font-bold bg-[#1A1C22]"
            >
              {lang === 'am' ? 'EN' : 'አማ'}
            </button>

            {/* Hamburger button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#FAF8F5] hover:text-gold hover:bg-[#1A1C22] focus:outline-none focus:ring-2 focus:ring-gold"
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
        <div className="sm:hidden bg-[#121214] border-b border-gold/30 px-4 pt-3 pb-6 space-y-3 animate-modal-in shadow-2xl">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-base font-medium text-[#FAF8F5]/90 hover:text-gold py-2.5 px-3 rounded-lg hover:bg-[#1A1C22] transition-colors"
              >
                <span>{link.label}</span>
                <ChevronRight size={16} className="text-gold/50" />
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
            <a
              href={verifiedSocials.telegram}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gold text-[#121214] text-sm font-bold shadow-lg"
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
