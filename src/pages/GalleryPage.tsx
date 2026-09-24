import React, { useState } from 'react';
import { Sparkles, Maximize2, Phone, Calendar, Image as ImageIcon } from 'lucide-react';
import { GALLERY_ITEMS, HOTEL_INFO } from '../data/hotelData';
import { GalleryItem } from '../types/hotel';
import { ImageLightboxModal } from '../components/ImageLightboxModal';

interface GalleryPageProps {
  onOpenBooking: () => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number>(0);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'exterior', label: 'Building & Exterior' },
    { id: 'rooms', label: 'Rooms & Executive Suites' },
    { id: 'bathrooms', label: 'Bathrooms & Amenities' },
    { id: 'dining', label: 'In-House Dining' },
    { id: 'lobby', label: 'Lobby & Reception' },
    { id: 'facilities', label: 'Facilities & Events' },
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const handleOpenPhoto = (index: number) => {
    setSelectedPhotoIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-8">
      
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto text-center space-y-6 pb-12 border-b border-slate-800">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest font-cinzel">
          <Sparkles className="w-3.5 h-3.5" /> High-Resolution Photo Gallery
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold font-serif-luxury text-white">
          Sandal Bar Hotel Photo Gallery
        </h1>

        <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Explore real building photographs, luxury guest room interiors, marble bathrooms, dining spaces, reception lobby, and facilities at Saleemi Chowk, Faisalabad.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4 max-w-5xl mx-auto">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            const count = cat.id === 'all'
              ? GALLERY_ITEMS.length
              : GALLERY_ITEMS.filter((i) => i.category === cat.id).length;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 rounded-2xl text-xs font-bold tracking-wider transition-all flex items-center gap-2 ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 shadow-xl font-extrabold scale-105 ring-2 ring-amber-400/50'
                    : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`px-2 py-0.5 rounded-full text-[10px] ${
                  isActive ? 'bg-slate-950 text-amber-400' : 'bg-slate-800 text-slate-400'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

      </div>

      {/* Main Grid Section */}
      <div className="max-w-7xl mx-auto py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => {
            return (
              <div
                key={item.id}
                onClick={() => handleOpenPhoto(idx)}
                className="group relative bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 hover:border-amber-500/40 shadow-xl cursor-pointer transition-all duration-300 hover:-translate-y-1 h-72 flex flex-col justify-end"
              >
                {/* Background Image */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Top Badge Category */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-amber-400 border border-amber-500/30 uppercase tracking-widest font-cinzel">
                    {item.category}
                  </span>
                </div>

                {/* Center Hover Zoom Icon */}
                <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition-transform">
                    <Maximize2 className="w-6 h-6" />
                  </div>
                </div>

                {/* Bottom Title & Caption Card */}
                <div className="relative z-10 p-4 bg-slate-950/90 backdrop-blur-md border-t border-amber-500/20 m-3 rounded-2xl">
                  <h3 className="text-sm font-bold text-white font-serif-luxury text-amber-300 truncate">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-slate-300 line-clamp-1 mt-0.5">
                    {item.caption}
                  </p>
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* Call To Action Banner */}
      <div className="max-w-7xl mx-auto bg-gradient-to-r from-slate-900 via-amber-950/40 to-slate-900 border border-amber-500/30 rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-2xl">
        <div className="w-12 h-12 bg-amber-500/20 text-amber-400 rounded-2xl flex items-center justify-center mx-auto">
          <ImageIcon className="w-6 h-6" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-white">Experience Sandal Bar Hotel in Person</h3>
        <p className="text-slate-300 text-sm max-w-xl mx-auto">
          Visit us at Saleemi Chowk, Satiana Road, Faisalabad or book your room directly online for guaranteed luxury and 24/7 service.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs uppercase tracking-wider shadow-xl transition-transform active:scale-95 flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4" /> Book Your Stay Now
          </button>
          <a
            href={`tel:${HOTEL_INFO.phone}`}
            className="w-full sm:w-auto px-8 py-4 bg-slate-950 hover:bg-slate-800 border border-amber-500/30 text-amber-400 font-bold rounded-xl text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4" /> Call Front Desk ({HOTEL_INFO.phoneDisplay})
          </a>
        </div>
      </div>

      {/* Full Screen Lightbox Modal */}
      <ImageLightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={filteredItems}
        initialIndex={selectedPhotoIndex}
        onOpenBooking={onOpenBooking}
      />

    </div>
  );
};
