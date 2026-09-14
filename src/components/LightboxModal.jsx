import React, { useEffect, useRef } from 'react';
import { X, Send, Phone, Sparkles } from 'lucide-react';
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
        className="relative max-w-3xl w-full bg-[#0D2F28] border border-serk-gold/40 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[92vh]"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-black/70 border border-white/20 text-white hover:text-serk-gold hover:border-serk-gold flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-serk-gold"
          aria-label="Close image viewer"
        >
          <X size={20} />
        </button>

        {/* Image Half */}
        <div className="md:w-3/5 bg-black/60 flex items-center justify-center relative min-h-[300px] sm:min-h-[420px]">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full max-h-[70vh] md:max-h-[85vh] object-contain p-2"
          />
          {item.badge && (
            <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#08221D]/90 backdrop-blur-md border border-serk-gold/40 text-[10px] font-bold text-serk-gold uppercase tracking-wider">
              {item.badge}
            </div>
          )}
        </div>

        {/* Info & Action Half */}
        <div className="md:w-2/5 p-6 flex flex-col justify-between space-y-6 bg-[#0D2F28] border-t md:border-t-0 md:border-l border-serk-border overflow-y-auto">
          
          <div className="space-y-4">
            <div>
              <span className="text-[10px] font-mono text-serk-gold uppercase tracking-wider block">
                {item.category || "Serk Design"}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#FDF3E5] mt-1 leading-snug">
                {item.title}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-[#FDF3E5]/80 font-light leading-relaxed">
              {item.subtitle}
            </p>

            <div className="p-3.5 rounded-xl bg-[#08221D] border border-serk-border text-xs text-[#FDF3E5]/75 space-y-1.5">
              <div className="flex items-center gap-2 text-serk-gold font-semibold">
                <Sparkles size={14} />
                <span>{lang === 'am' ? 'የጥበብ ዝርዝር' : 'Artisanal Note'}</span>
              </div>
              <p className="font-light leading-relaxed">
                {lang === 'am'
                  ? 'በሰርክ ዲዛይን በሜሮን በእጅ የተሸመነና የተጠለፈ እውነተኛ የኢትዮጵያ ባህላዊ ልብስ።'
                  : 'Authentic Ethiopian handcrafted attire with bespoke embroidery by Serk Design.'}
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-serk-border space-y-2.5">
            <a
              href={verifiedSocials.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-serk-gold text-[#08221D] text-xs font-bold uppercase tracking-wider shadow-lg shadow-serk-gold/20 hover:brightness-110 active:scale-95 transition-all"
            >
              <Send size={15} />
              <span>{lang === 'am' ? 'በቴሌግራም ይጠይቁ' : 'Inquire on Telegram'}</span>
            </a>

            <a
              href={`tel:${verifiedSocials.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#08221D] border border-serk-border text-serk-gold text-xs font-mono font-medium hover:border-serk-gold transition-colors"
            >
              <Phone size={14} />
              <span>{verifiedSocials.phone}</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
