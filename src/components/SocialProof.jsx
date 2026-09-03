import React from 'react';
import { Sparkles, ExternalLink } from 'lucide-react';
import { TelegramIcon, InstagramIcon, TikTokIcon } from './BrandIcons';

export default function SocialProof({ t }) {
  const socialIcons = {
    Telegram: TelegramIcon,
    Instagram: InstagramIcon,
    TikTok: TikTokIcon,
  };

  return (
    <section id="social" className="py-20 bg-[#0E0F12] relative overflow-hidden border-t border-b border-gold/15">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-gold">
            <Sparkles size={14} />
            <span>{t.social.eyebrow}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#FAF8F5]">
            {t.social.title}
          </h2>
          <p className="text-sm sm:text-base text-[#FAF8F5]/70 font-light">
            {t.social.subtitle}
          </p>
        </div>

        {/* 3 Social Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.social.cards.map((card, idx) => {
            const Icon = socialIcons[card.platform] || ExternalLink;
            return (
              <a
                key={idx}
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-7 rounded-2xl bg-[#16181E] border border-gold/25 hover:border-gold transition-all duration-300 shadow-xl flex flex-col justify-between space-y-6 hover:-translate-y-1 block"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-gold/15 text-gold flex items-center justify-center group-hover:bg-gold group-hover:text-[#121214] transition-colors shadow-inner">
                      <Icon size={22} />
                    </div>
                    <ExternalLink size={16} className="text-[#FAF8F5]/40 group-hover:text-gold transition-colors" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold font-serif text-[#FAF8F5] group-hover:text-gold transition-colors">
                      {card.platform}
                    </h3>
                    <span className="text-xs font-mono text-gold/80 block mt-0.5">
                      {card.handle}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#FAF8F5]/70 font-light leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-gold group-hover:underline">
                  <span>{card.action}</span>
                  <span>&rarr;</span>
                </div>
              </a>
            );
          })}
        </div>

      </div>

    </section>
  );
}
