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
    <section id="social" className="py-22 bg-[#08221D] relative overflow-hidden border-t border-b border-serk-border">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2.5">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-serk-gold">
            <Sparkles size={14} />
            <span>{t.social.eyebrow}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#FDF3E5]">
            {t.social.title}
          </h2>
          <p className="text-sm sm:text-base text-[#FDF3E5]/80 font-light leading-relaxed">
            {t.social.subtitle}
          </p>
        </div>

        {/* 3 Social Cards with Increased Regular Supporting Text Sizes (Requirement 11) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {t.social.cards.map((card, idx) => {
            const Icon = socialIcons[card.platform] || ExternalLink;
            return (
              <a
                key={idx}
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-7 rounded-2xl bg-[#0D2F28] border border-serk-border hover:border-serk-gold transition-all duration-300 shadow-xl flex flex-col justify-between space-y-6 hover:-translate-y-1 block"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-serk-gold/15 text-serk-gold flex items-center justify-center group-hover:bg-serk-gold group-hover:text-[#08221D] transition-colors shadow-inner">
                      <Icon size={22} />
                    </div>
                    <ExternalLink size={17} className="text-[#FDF3E5]/40 group-hover:text-serk-gold transition-colors" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold font-serif text-[#FDF3E5] group-hover:text-serk-gold transition-colors">
                      {card.platform}
                    </h3>
                    <span className="text-sm font-mono text-serk-gold block mt-0.5 font-medium">
                      {card.handle}
                    </span>
                  </div>

                  {/* Supporting text increased for high readability */}
                  <p className="text-sm sm:text-base text-[#FDF3E5]/85 font-light leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-serk-border flex items-center justify-between text-sm font-bold text-serk-gold group-hover:underline">
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
