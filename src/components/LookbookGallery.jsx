import React, { useState, useMemo, useRef } from 'react';
import { lookbookItems } from '../data/serkData';
import { Eye, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

export default function LookbookGallery({ t, lang, onOpenModal, activeCategory, setActiveCategory }) {
  const [filter, setFilter] = useState(activeCategory || 'all');
  const scrollContainerRef = useRef(null);

  // Keep internal filter synced if parent passes activeCategory
  React.useEffect(() => {
    if (activeCategory) {
      setFilter(activeCategory);
    }
  }, [activeCategory]);

  const filterTabs = [
    { key: 'all', label: t.lookbook.filterAll },
    { key: 'bridal', label: t.lookbook.filterBridal },
    { key: 'fusion', label: t.lookbook.filterFusion },
    { key: 'rental', label: t.lookbook.filterRental },
    { key: 'men', label: t.lookbook.filterMen },
  ];

  const filteredItems = useMemo(() => {
    if (filter === 'all') return lookbookItems;
    return lookbookItems.filter(item => item.category === filter);
  }, [filter]);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -360 : 360;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="lookbook" className="py-22 bg-[#08221D] relative overflow-hidden border-t border-serk-border">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with Carousel Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div className="space-y-2 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-serk-gold">
              <Sparkles size={14} />
              <span>{t.lookbook.eyebrow}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#FDF3E5]">
              {t.lookbook.title}
            </h2>
            <p className="text-sm sm:text-base text-[#FDF3E5]/75 font-light max-w-xl">
              {t.lookbook.subtitle}
            </p>
          </div>

          {/* Left / Right Scroll Buttons */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              type="button"
              onClick={() => scroll('left')}
              className="w-11 h-11 rounded-full bg-[#0D2F28] border border-serk-border hover:border-serk-gold text-serk-gold flex items-center justify-center transition-all active:scale-95 shadow-md focus:outline-none focus:ring-2 focus:ring-serk-gold"
              aria-label="Scroll left"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              className="w-11 h-11 rounded-full bg-[#0D2F28] border border-serk-border hover:border-serk-gold text-serk-gold flex items-center justify-center transition-all active:scale-95 shadow-md focus:outline-none focus:ring-2 focus:ring-serk-gold"
              aria-label="Scroll right"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar gap-2 mb-8 pb-1">
          {filterTabs.map(tab => (
            <button
              key={tab.key}
              type="button"
              onClick={() => {
                setFilter(tab.key);
                if (setActiveCategory) setActiveCategory(tab.key);
              }}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium shrink-0 transition-all ${
                filter === tab.key
                  ? 'bg-serk-gold text-[#08221D] font-bold shadow-md'
                  : 'bg-[#0D2F28] text-[#FDF3E5]/75 hover:text-[#FDF3E5] border border-serk-border hover:border-serk-gold/40'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Single Horizontal Row Carousel */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar py-2 px-1"
        >
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="w-[280px] sm:w-[320px] shrink-0 snap-start group relative bg-[#0D2F28] rounded-2xl overflow-hidden border border-serk-border hover:border-serk-gold transition-all duration-300 shadow-xl cursor-pointer flex flex-col"
              onClick={() => onOpenModal({
                id: item.id,
                image: item.image,
                title: item.title[lang],
                subtitle: item.subtitle[lang],
                badge: item.badge[lang],
                category: item.category,
              })}
            >
              {/* Image Container with clean presentation and subtle bottom gradient (Requirement 9) */}
              <div className="relative aspect-[3/4] overflow-hidden bg-black/40">
                <img
                  src={item.image}
                  alt={item.title[lang]}
                  className="w-full h-full object-cover object-top group-hover:scale-106 transition-transform duration-700 ease-out"
                  loading={index < 4 ? "eager" : "lazy"}
                />

                {/* Minimal subtle gradient limited to the bottom 10% */}
                <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#0D2F28]/60 to-transparent"></div>

                {/* Floating Badge */}
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#08221D]/90 backdrop-blur-md border border-serk-gold/40 text-[11px] uppercase font-bold text-serk-gold tracking-wider shadow">
                  {item.badge[lang]}
                </div>

                {/* Hover Eye Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/25 backdrop-blur-[1px]">
                  <div className="w-12 h-12 rounded-full bg-serk-gold text-[#08221D] flex items-center justify-center shadow-xl transform scale-75 group-hover:scale-100 transition-transform">
                    <Eye size={22} />
                  </div>
                </div>
              </div>

              {/* Text Information Box matching Services typography (Requirement 10) */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-2.5 bg-[#0D2F28]">
                <div className="space-y-1.5">
                  <h3 className="text-lg sm:text-xl font-bold text-[#FDF3E5] group-hover:text-serk-gold transition-colors font-serif truncate">
                    {item.title[lang]}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#FDF3E5]/80 font-light line-clamp-2 leading-relaxed">
                    {item.subtitle[lang]}
                  </p>
                </div>

                <div className="pt-2.5 flex items-center justify-between text-xs font-mono text-serk-gold/80 border-t border-serk-border">
                  <span className="uppercase">{item.category}</span>
                  <span className="group-hover:text-serk-gold transition-colors flex items-center gap-1 font-sans font-medium text-xs sm:text-sm">
                    {t.lookbook.viewDetails} &rarr;
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Swipe / Scroll Hint */}
        <div className="mt-5 flex items-center justify-center text-xs text-serk-gold/70 font-mono tracking-wider uppercase">
          <span>&larr; {lang === 'am' ? 'በአግድም ያሸብልሉ' : 'Scroll horizontally to view more'} &rarr;</span>
        </div>

      </div>

    </section>
  );
}
