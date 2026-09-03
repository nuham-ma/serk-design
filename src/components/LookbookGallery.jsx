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

  const filterTabs = [
    { key: 'all', label: t.lookbook.filterAll },
    { key: 'bridal', label: t.lookbook.filterBridal },
    { key: 'fusion', label: t.lookbook.filterFusion },
    { key: 'rental', label: t.lookbook.filterRental },
    { key: 'men', label: t.lookbook.filterMen },
  ];

  const filteredItems = useMemo(() => {
    if (filter === 'all') return lookbookItems;
    if (filter === 'men') {
      return lookbookItems.filter(item => item.category === 'men' || item.category === 'couples');
    }
    return lookbookItems.filter(item => item.category === filter);
  }, [filter]);

  return (
    <section id="lookbook" className="py-24 bg-[#121214] relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-gold">
            <Sparkles size={14} />
            <span>{t.lookbook.eyebrow}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#FAF8F5]">
            {t.lookbook.title}
          </h2>
          <p className="text-sm sm:text-base text-[#FAF8F5]/70 font-light">
            {t.lookbook.subtitle}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {filterTabs.map(tab => (
            <button
              key={tab.key}
              type="button"
              onClick={() => {
                setFilter(tab.key);
                if (setActiveCategory) setActiveCategory(tab.key);
              }}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                filter === tab.key
                  ? 'bg-gold text-[#121214] font-bold shadow-lg shadow-gold/20'
                  : 'bg-[#1A1C22] text-[#FAF8F5]/70 hover:text-[#FAF8F5] border border-white/10 hover:border-gold/30'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-[#1A1C22] rounded-2xl overflow-hidden border border-gold/20 hover:border-gold transition-all duration-300 shadow-xl cursor-pointer flex flex-col"
              onClick={() => onOpenModal({
                id: item.id,
                image: item.image,
                title: item.title[lang],
                subtitle: item.subtitle[lang],
                badge: item.badge[lang],
                category: item.category,
              })}
            >
              {/* Image Container with Aspect Ratio */}
              <div className="relative aspect-[3/4] overflow-hidden bg-black/40">
                <img
                  src={item.image}
                  alt={item.title[lang]}
                  className="w-full h-full object-cover object-top group-hover:scale-106 transition-transform duration-700 ease-out"
                  loading={index < 6 ? "eager" : "lazy"}
                />

                {/* Gradient Shadow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>

                {/* Floating Badge */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#121214]/85 backdrop-blur-md border border-gold/30 text-[10px] uppercase font-bold text-gold tracking-wider shadow">
                  {item.badge[lang]}
                </div>

                {/* Hover Eye Icon overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/25 backdrop-blur-[2px]">
                  <div className="w-12 h-12 rounded-full bg-gold/90 text-[#121214] flex items-center justify-center shadow-xl transform scale-75 group-hover:scale-100 transition-transform">
                    <Eye size={22} />
                  </div>
                </div>
              </div>

              {/* Text Information Box */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-2 bg-gradient-to-b from-[#1A1C22] to-[#14151A]">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#FAF8F5] group-hover:text-gold transition-colors font-serif">
                    {item.title[lang]}
                  </h3>
                  <p className="text-xs text-[#FAF8F5]/70 mt-1 font-light leading-relaxed">
                    {item.subtitle[lang]}
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-gold/80 border-t border-white/5">
                  <span className="uppercase">{item.category}</span>
                  <span className="group-hover:text-gold transition-colors flex items-center gap-1 font-sans font-medium">
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
