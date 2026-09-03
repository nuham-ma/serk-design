import React, { useEffect, useRef } from 'react';
import { X, Send, Sparkles, ChevronRight, ChevronLeft } from 'lucide-react';
import { verifiedSocials } from '../data/serkData';

export default function LightboxModal({ item, onClose, lang }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent background scrolling while modal is active
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [item, onClose]);

  if (!item) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md transition-opacity animate-modal-in"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      <div 
        ref={dialogRef}
        className="relative max-w-3xl w-full bg-[#16181E] border border-gold/40 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[92vh]"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-black/70 border border-white/20 text-white hover:text-gold hover:border-gold flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
          aria-label="Close image viewer"
        >
          <X size={20} />
        </button>

        {/* Image Half */}
        <div className="md:w-3/5 bg-black flex items-center justify-center relative min-h-[300px] sm:min-h-[420px]">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full max-h-[70vh] md:max-h-[85vh] object-contain p-2"
          />
          {item.badge && (
            <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#121214]/90 backdrop-blur-md border border-gold/40 text-[11px] font-bold text-gold uppercase tracking-wider">
              {item.badge}
            </div>
          )}
        </div>

        {/* Info & Action Half */}
        <div className="md:w-2/5 p-6 flex flex-col justify-between space-y-6 bg-[#16181E] border-t md:border-t-0 md:border-l border-white/10 overflow-y-auto">
          
          <div className="space-y-4">
            <div>
              <span className="text-[11px] font-mono text-gold uppercase tracking-wider block">
                {item.category || "Serk Design"}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#FAF8F5] mt-1 leading-snug">
                {item.title}
              </h3>
            </div>

            <p className="text-sm text-[#FAF8F5]/80 font-light leading-relaxed">
              {item.subtitle}
            </p>

            <div className="p-3.5 rounded-xl bg-[#121214] border border-gold/20 text-xs text-[#FAF8F5]/70 space-y-1.5">
              <div className="flex items-center gap-2 text-gold font-semibold">
                <Sparkles size={14} />
                <span>{lang === 'am' ? 'የጥበብ ዝርዝር' : 'Artisanal Note'}</span>
              </div>
              <p className="font-light">
                {lang === 'am'
                  ? 'በሰርክ ዲዛይን በሜሮን በእጅ የተሸመነና የተጠለፈ እውነተኛ የኢትዮጵያ ባህላዊ ልብስ።'
                  : 'Authentic Ethiopian handcrafted attire with bespoke embroidery by Serk Design.'}
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-white/10 space-y-3">
            <a
              href={verifiedSocials.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gold text-[#121214] text-xs font-bold uppercase tracking-wider shadow-lg shadow-gold/20 hover:brightness-110 active:scale-95 transition-all"
            >
              <Send size={15} />
              <span>{lang === 'am' ? 'ይህን ዲዛይን በቴሌግራም ይጠይቁ' : 'Inquire on Telegram'}</span>
            </a>

            <a
              href={verifiedSocials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#1A1C22] border border-white/20 text-[#FAF8F5] text-xs font-medium hover:border-gold transition-colors"
            >
              <span>{lang === 'am' ? 'በኢንስታግራም ይመልከቱ' : 'View on Instagram'}</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
