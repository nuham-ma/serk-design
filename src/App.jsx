import React, { useState, useEffect } from 'react';
import { content } from './data/serkData';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandStory from './components/BrandStory';
import Collections from './components/Collections';
import SerkRental from './components/SerkRental';
import LookbookGallery from './components/LookbookGallery';
import SocialProof from './components/SocialProof';
import BoutiqueVisit from './components/BoutiqueVisit';
import Footer from './components/Footer';
import LightboxModal from './components/LightboxModal';

export default function App() {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('serk_lang') || 'am';
  });

  const [modalItem, setModalItem] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    localStorage.setItem('serk_lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const t = content[lang];

  const handleSelectCategory = (cat) => {
    setActiveCategory(cat);
    const el = document.getElementById('lookbook');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#08221D] text-[#FDF3E5] overflow-x-hidden flex flex-col font-sans selection:bg-serk-gold/30 selection:text-white">
      <Navbar lang={lang} setLang={setLang} t={t} />
      
      <main className="flex-grow">
        <Hero t={t} lang={lang} onOpenModal={setModalItem} />
        <BrandStory t={t} lang={lang} onOpenModal={setModalItem} />
        <Collections t={t} lang={lang} onSelectCategory={handleSelectCategory} />
        <SerkRental t={t} lang={lang} onOpenModal={setModalItem} />
        <LookbookGallery 
          t={t} 
          lang={lang} 
          onOpenModal={setModalItem}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <SocialProof t={t} />
        <BoutiqueVisit t={t} lang={lang} />
      </main>

      <Footer t={t} lang={lang} />

      {/* Lightbox Modal */}
      <LightboxModal 
        item={modalItem} 
        onClose={() => setModalItem(null)} 
        lang={lang} 
      />
    </div>
  );
}
