import React, { useState } from 'react';
import { Calendar, Phone, BedDouble, Users, Images, Maximize2 } from 'lucide-react';
import { Room, GalleryItem } from '../types/hotel';
import { HOTEL_INFO } from '../data/hotelData';
import { ImageLightboxModal } from './ImageLightboxModal';

interface RoomCardProps {
  room: Room;
  onOpenBooking: (roomId?: string) => void;
}

export const RoomCard: React.FC<RoomCardProps> = ({ room, onOpenBooking }) => {
  const [activeImage, setActiveImage] = useState<string>(room.image);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  const galleryList: GalleryItem[] = (room.galleryImages || [room.image]).map((img, idx) => ({
    id: `${room.id}-${idx}`,
    title: `${room.name} - Photo ${idx + 1}`,
    category: 'rooms',
    imageUrl: img,
    caption: `${room.name} at Sandal Bar Hotel Faisalabad. ${room.tagline}`
  }));

  const handleOpenPhoto = (idx: number) => {
    setSelectedPhotoIndex(idx);
    setLightboxOpen(true);
  };

  return (
    <div className="group bg-[#080e1e] border border-slate-800/80 hover:border-amber-500/40 rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
      
      {/* Top Image Container */}
      <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-950 cursor-pointer" onClick={() => handleOpenPhoto(0)}>
        <img
          src={activeImage}
          alt={room.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        
        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080e1e] via-transparent to-black/20" />

        {/* Category Pill Badge (Top Left) */}
        {room.category && (
          <div className="absolute top-3.5 left-3.5 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-amber-400 border border-amber-500/30 uppercase tracking-wider font-cinzel shadow-lg">
            {room.category}
          </div>
        )}

        {/* Expand Gallery Icon Badge (Top Right) */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleOpenPhoto(0);
          }}
          className="absolute top-3.5 right-3.5 bg-slate-950/80 hover:bg-amber-500 hover:text-slate-950 backdrop-blur-md p-2 rounded-full text-amber-400 border border-amber-500/30 shadow-lg transition-colors"
          title="Click to view full screen photos"
        >
          <Maximize2 className="w-4 h-4" />
        </button>

        {/* Floating Price Badge (Bottom Right - Exactly like image 2) */}
        <div className="absolute bottom-3.5 right-3.5 bg-[#0a1128]/95 backdrop-blur-md px-4 py-2 rounded-2xl border border-amber-500/30 shadow-2xl text-center">
          <span className="text-[10px] text-slate-300 font-medium block uppercase tracking-wider">Per Night</span>
          <span className="text-sm sm:text-base font-extrabold text-[#f59e0b] font-cinzel tracking-tight block">
            PKR {room.pricePerNightPKR.toLocaleString()}
          </span>
        </div>
      </div>

      {/* Room Photo Thumbnails Bar */}
      {room.galleryImages && room.galleryImages.length > 1 && (
        <div className="px-4 pt-3 flex items-center gap-2 overflow-x-auto no-scrollbar bg-slate-950/60 border-b border-slate-800/80 pb-2">
          {room.galleryImages.map((img, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveImage(img);
              }}
              onDoubleClick={() => handleOpenPhoto(idx)}
              className={`relative rounded-lg overflow-hidden shrink-0 border transition-all ${
                activeImage === img
                  ? 'border-amber-400 ring-2 ring-amber-500/50 scale-105'
                  : 'border-slate-800 opacity-60 hover:opacity-100'
              }`}
            >
              <img src={img} alt={`${room.name} thumb ${idx}`} className="w-12 h-9 object-cover" />
            </button>
          ))}
          <button
            onClick={() => handleOpenPhoto(0)}
            className="text-[10px] text-amber-400 font-bold uppercase tracking-wider flex items-center gap-1 shrink-0 px-2 py-1 bg-slate-900 rounded-lg border border-slate-800 hover:border-amber-500/30"
          >
            <Images className="w-3 h-3" />
            <span>+{room.galleryImages.length}</span>
          </button>
        </div>
      )}

      {/* Card Content Area */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        
        {/* Title & Description */}
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-white font-serif-luxury tracking-tight group-hover:text-amber-400 transition-colors">
            {room.name}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed font-sans line-clamp-2">
            {room.description}
          </p>
        </div>

        {/* Divider & Key Features Row (Bed & Guests) */}
        <div className="space-y-3 pt-2">
          <div className="w-full border-t border-slate-800/80" />
          
          <div className="flex items-center justify-between text-xs font-medium text-slate-200 gap-3">
            <div className="flex items-center gap-2 truncate">
              <BedDouble className="w-4 h-4 text-[#f59e0b] shrink-0" />
              <span className="truncate">{room.bedType}</span>
            </div>
            
            <div className="flex items-center gap-2 shrink-0">
              <Users className="w-4 h-4 text-[#f59e0b] shrink-0" />
              <span>Up to {room.maxGuests} Guests</span>
            </div>
          </div>
        </div>

        {/* Action Buttons Row */}
        <div className="pt-2 flex items-center gap-3">
          <button
            onClick={() => onOpenBooking(room.id)}
            className="flex-1 py-3.5 px-4 bg-[#f59e0b] hover:bg-amber-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95"
          >
            <Calendar className="w-4 h-4" />
            <span>BOOK NOW</span>
          </button>

          <a
            href={`tel:${HOTEL_INFO.phone}`}
            className="p-3.5 bg-[#141f38] hover:bg-[#1e2e52] text-amber-400 border border-slate-700/60 rounded-2xl transition-colors flex items-center justify-center shrink-0"
            title="Call Hotel to Reserve"
          >
            <Phone className="w-4 h-4" />
          </a>
        </div>

      </div>

      {/* Lightbox Modal for Room Photos */}
      <ImageLightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={galleryList}
        initialIndex={selectedPhotoIndex}
        onOpenBooking={() => onOpenBooking(room.id)}
      />

    </div>
  );
};
