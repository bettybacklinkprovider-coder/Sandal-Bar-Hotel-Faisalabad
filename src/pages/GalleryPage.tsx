import React, { useState } from 'react';
import { Eye, Sparkles, Image as ImageIcon } from 'lucide-react';
import { GALLERY_DATA } from '../data/hotelData';
import { GalleryItem } from '../types/hotel';

interface GalleryPageProps {
  onOpenLightbox: (items: GalleryItem[], index: number) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onOpenLightbox }) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'exterior', label: 'Hotel Exterior' },
    { id: 'rooms', label: 'Guest Rooms' },
    { id: 'lobby', label: 'Lobby & Reception' },
    { id: 'dining', label: 'Dining & Restaurant' },
    { id: 'facilities', label: 'Facilities' },
  ];

  const filteredItems = activeTab === 'all'
    ? GALLERY_DATA
    : GALLERY_DATA.filter((item) => item.category === activeTab);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-8">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center space-y-6 pb-12 border-b border-slate-800">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest font-cinzel">
          <Sparkles className="w-3.5 h-3.5" /> High-Resolution Showcase
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold font-serif-luxury text-white">
          Sandal Bar Hotel Gallery
        </h1>

        <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Take a tour through our elegant guest suites, warm welcome lobby, fine dining areas, and prime hotel grounds at Saleemi Chowk, Faisalabad.
        </p>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider transition-all ${
                activeTab === cat.id
                  ? 'bg-amber-500 text-slate-950 shadow-lg scale-105'
                  : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Display */}
      <div className="max-w-7xl mx-auto py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(filteredItems, index)}
              className="group relative bg-slate-900 border border-slate-800 hover:border-amber-500/40 rounded-2xl overflow-hidden cursor-pointer shadow-xl transition-all duration-300 hover:-translate-y-1.5"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

                <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-amber-400 font-cinzel uppercase border border-amber-500/20">
                  {item.category}
                </div>

                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <h3 className="text-xl font-bold font-serif-luxury group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 line-clamp-1 italic">
                    {item.caption}
                  </p>

                  <div className="pt-3 flex items-center gap-2 text-xs text-amber-400 font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-4 h-4" />
                    <span>Click to view full screen</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
