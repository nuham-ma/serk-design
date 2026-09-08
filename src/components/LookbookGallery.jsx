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
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="lookbook" className="py-20 bg-[#08221D] relative overflow-hidden">
      
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
            <p className="text-xs sm:text-sm text-[#FDF3E5]/70 font-light max-w-xl">
              {t.lookbook.subtitle}
            </p>
          </div>

          {/* Left / Right Scroll Buttons */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              type="button"
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full bg-[#0D2F28] border border-serk-border hover:border-serk-gold text-serk-gold flex items-center justify-center transition-all active:scale-95 shadow-md focus:outline-none focus:ring-2 focus:ring-serk-gold"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full bg-[#0D2F28] border border-serk-border hover:border-serk-gold text-serk-gold flex items-center justify-center transition-all active:scale-95 shadow-md focus:outline-none focus:ring-2 focus:ring-serk-gold"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
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
              className={`px-4 py-1.5 rounded-full text-xs font-medium shrink-0 transition-all ${
                filter === tab.key
                  ? 'bg-serk-gold text-[#08221D] font-bold shadow-md'
                  : 'bg-[#0D2F28] text-[#FDF3E5]/70 hover:text-[#FDF3E5] border border-serk-border hover:border-serk-gold/40'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Single Horizontal Row Carousel */}
        <div
          ref={scrollContainerRef}
          className="flex gap-5 sm:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar py-2 px-1"
        >
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="w-[270px] sm:w-[300px] shrink-0 snap-start group relative bg-[#0D2F28] rounded-2xl overflow-hidden border border-serk-border hover:border-serk-gold transition-all duration-300 shadow-xl cursor-pointer flex flex-col"
              onClick={() => onOpenModal({
                id: item.id,
                image: item.image,
                title: item.title[lang],
                subtitle: item.subtitle[lang],
                badge: item.badge[lang],
                category: item.category,
              })}
            >
              {/* Image Container with Consistent Aspect Ratio */}
              <div className="relative aspect-[3/4] overflow-hidden bg-black/40">
                <img
                  src={item.image}
                  alt={item.title[lang]}
                  className="w-full h-full object-cover object-top group-hover:scale-106 transition-transform duration-700 ease-out"
                  loading={index < 4 ? "eager" : "lazy"}
                />

                {/* Subtle Gradient Shadow */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D2F28] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>

                {/* Floating Badge */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#08221D]/90 backdrop-blur-md border border-serk-gold/40 text-[10px] uppercase font-bold text-serk-gold tracking-wider shadow">
                  {item.badge[lang]}
                </div>

                {/* Hover Eye Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 backdrop-blur-[1px]">
                  <div className="w-11 h-11 rounded-full bg-serk-gold text-[#08221D] flex items-center justify-center shadow-xl transform scale-75 group-hover:scale-100 transition-transform">
                    <Eye size={20} />
                  </div>
                </div>
              </div>

              {/* Text Information Box */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-2 bg-[#0D2F28]">
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-[#FDF3E5] group-hover:text-serk-gold transition-colors font-serif truncate">
                    {item.title[lang]}
                  </h3>
                  <p className="text-[11px] text-[#FDF3E5]/70 mt-1 font-light line-clamp-2 leading-relaxed">
                    {item.subtitle[lang]}
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between text-[10px] font-mono text-serk-gold/80 border-t border-serk-border">
                  <span className="uppercase">{item.category}</span>
                  <span className="group-hover:text-serk-gold transition-colors flex items-center gap-1 font-sans font-medium">
                    {t.lookbook.viewDetails} &rarr;
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Swipe / Scroll Hint */}
        <div className="mt-4 flex items-center justify-center text-[11px] text-serk-gold/60 font-mono tracking-wider uppercase">
          <span>&larr; {lang === 'am' ? 'በአግድም ያሸብልሉ' : 'Scroll horizontally to view more'} &rarr;</span>
        </div>

      </div>

    </section>
  );
}
