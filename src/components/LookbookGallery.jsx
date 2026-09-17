import React, { useState, useMemo } from 'react';
import { lookbookItems } from '../data/serkData';
import { Eye, Sparkles } from 'lucide-react';

export default function LookbookGallery({ t, lang, onOpenModal, activeCategory, setActiveCategory }) {
  const [filter, setFilter] = useState(activeCategory || 'all');

  // Keep internal filter synced if parent passes activeCategory
  React.useEffect(() => {
    if (activeCategory) {
      setFilter(activeCategory);
    }
  }, [activeCategory]);

  // Serk Rental removed from Lookroom per requirement 9
  const filterTabs = [
    { key: 'all', label: t.lookbook.filterAll },
    { key: 'bridal', label: t.lookbook.filterBridal },
    { key: 'fusion', label: t.lookbook.filterFusion },
    { key: 'men', label: t.lookbook.filterMen },
  ];

  const filteredItems = useMemo(() => {
    if (filter === 'all') return lookbookItems;
    return lookbookItems.filter(item => item.category === filter);
  }, [filter]);

  return (
    <section id="lookbook" className="py-24 bg-[#08221D] relative overflow-hidden border-t border-serk-border">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-serk-gold">
            <Sparkles size={14} />
            <span>{t.lookbook.eyebrow}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#FDF3E5]">
            {t.lookbook.title}
          </h2>
          <p className="text-base sm:text-lg text-[#FDF3E5]/80 font-light">
            {t.lookbook.subtitle}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 px-2">
          {filterTabs.map(tab => (
            <button
              key={tab.key}
              type="button"
              onClick={() => {
                setFilter(tab.key);
                if (setActiveCategory) setActiveCategory(tab.key);
              }}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all text-center whitespace-normal ${
                filter === tab.key
                  ? 'bg-serk-gold text-[#08221D] font-bold shadow-md'
                  : 'bg-[#0D2F28] text-[#FDF3E5]/80 hover:text-[#FDF3E5] border border-serk-border hover:border-serk-gold/40'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Responsive Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="w-full flex flex-col group relative bg-[#0D2F28] rounded-2xl overflow-hidden border border-serk-border hover:border-serk-gold transition-all duration-300 shadow-xl cursor-pointer hover:-translate-y-1.5"
              onClick={() => onOpenModal({
                id: item.id,
                image: item.image,
                title: item.title[lang],
                subtitle: item.subtitle[lang],
                badge: item.badge[lang],
                category: item.category,
              })}
            >
              {/* Image Container with subtle minimal overlay at the very bottom only */}
              <div className="relative aspect-[3/4] overflow-hidden bg-black/40">
                <img
                  src={item.image}
                  alt={item.title[lang]}
                  className="w-full h-full object-cover object-top group-hover:scale-106 transition-transform duration-700 ease-out"
                  loading={index < 3 ? "eager" : "lazy"}
                />

                {/* Floating Badge */}
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#08221D]/90 backdrop-blur-md border border-serk-gold/40 text-xs uppercase font-bold text-serk-gold tracking-wider shadow">
                  {item.badge[lang]}
                </div>

                {/* Hover Eye Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/25 backdrop-blur-[1px]">
                  <div className="w-12 h-12 rounded-full bg-serk-gold text-[#08221D] flex items-center justify-center shadow-xl transform scale-75 group-hover:scale-100 transition-transform">
                    <Eye size={22} />
                  </div>
                </div>
              </div>

              {/* Text Information Box with Responsive Typography */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3 bg-[#0D2F28]">
                <div className="space-y-1.5 min-w-0">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#FDF3E5] group-hover:text-serk-gold transition-colors font-serif leading-snug break-words">
                    {item.title[lang]}
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base text-[#FDF3E5]/85 font-light leading-relaxed break-words">
                    {item.subtitle[lang]}
                  </p>
                </div>

                <div className="pt-3 flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm font-mono text-serk-gold/90 border-t border-serk-border">
                  <span className="uppercase font-semibold tracking-wider">{item.badge[lang]}</span>
                  <span className="group-hover:text-serk-gold transition-colors flex items-center gap-1 font-sans font-medium text-xs sm:text-sm shrink-0">
                    {t.lookbook.viewDetails} &rarr;
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
