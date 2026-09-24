import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize, ZoomIn, ZoomOut, Phone, Calendar } from 'lucide-react';
import { GalleryItem } from '../types/hotel';

interface ImageLightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: GalleryItem[];
  initialIndex?: number;
  onOpenBooking?: () => void;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  isOpen,
  onClose,
  images,
  initialIndex = 0,
  onOpenBooking
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, images.length]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex] || images[0];

  const handlePrev = () => {
    setIsZoomed(false);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsZoomed(false);
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl animate-in fade-in duration-200">
      
      {/* Top Header Control Bar */}
      <div className="absolute top-0 left-0 right-0 p-4 sm:p-6 flex items-center justify-between z-10 bg-gradient-to-b from-black/80 to-transparent">
        
        {/* Title & Counter */}
        <div className="flex items-center gap-3">
          <span className="text-amber-400 text-xs sm:text-sm font-bold uppercase tracking-wider font-cinzel">
            Photo {currentIndex + 1} of {images.length}
          </span>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <span className="text-slate-300 text-xs sm:text-sm font-medium truncate max-w-xs sm:max-w-md hidden sm:inline">
            {currentImage.title}
          </span>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsZoomed(!isZoomed)}
            className="p-2.5 rounded-full bg-slate-900/80 border border-slate-700 text-slate-300 hover:text-amber-400 hover:border-amber-500/50 transition-colors"
            title={isZoomed ? "Zoom Out" : "Zoom In"}
          >
            {isZoomed ? <ZoomOut className="w-5 h-5" /> : <ZoomIn className="w-5 h-5" />}
          </button>

          {onOpenBooking && (
            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="px-4 py-2 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-lg transition-transform active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5" /> Book Stay
            </button>
          )}

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-slate-900/80 border border-slate-700 text-slate-300 hover:text-white hover:bg-red-500/20 transition-colors ml-2"
            title="Close Lightbox (Esc)"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

      </div>

      {/* Prev / Next Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-3 sm:left-6 z-10 p-3 sm:p-4 rounded-full bg-slate-900/80 border border-amber-500/30 text-amber-400 hover:bg-amber-500 hover:text-slate-950 transition-all shadow-2xl active:scale-90"
        title="Previous Photo (Left Arrow)"
      >
        <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-3 sm:right-6 z-10 p-3 sm:p-4 rounded-full bg-slate-900/80 border border-amber-500/30 text-amber-400 hover:bg-amber-500 hover:text-slate-950 transition-all shadow-2xl active:scale-90"
        title="Next Photo (Right Arrow)"
      >
        <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>

      {/* Main Image Viewport Area */}
      <div className="relative max-w-6xl max-h-[75vh] sm:max-h-[80vh] w-full px-4 flex flex-col items-center justify-center">
        <div className={`relative overflow-hidden rounded-2xl border border-amber-500/30 shadow-2xl transition-all duration-300 ${isZoomed ? 'scale-125 cursor-zoom-out' : 'cursor-zoom-in'}`}>
          <img
            src={currentImage.imageUrl}
            alt={currentImage.title}
            onClick={() => setIsZoomed(!isZoomed)}
            className="max-h-[65vh] sm:max-h-[72vh] w-auto max-w-full object-contain select-none mx-auto"
          />
        </div>

        {/* Caption Bar */}
        <div className="mt-4 text-center max-w-2xl px-4 py-3 bg-slate-950/80 backdrop-blur-md rounded-2xl border border-amber-500/20">
          <h4 className="text-white font-bold text-sm sm:text-base font-serif-luxury text-amber-300">
            {currentImage.title}
          </h4>
          {currentImage.caption && (
            <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
              {currentImage.caption}
            </p>
          )}
        </div>
      </div>

      {/* Bottom Thumbnails Ribbon Strip */}
      <div className="absolute bottom-3 left-0 right-0 p-2 z-10 flex items-center justify-center overflow-x-auto no-scrollbar gap-2 max-w-4xl mx-auto px-4 bg-gradient-to-t from-black/90 to-transparent">
        {images.map((img, idx) => {
          const isActive = idx === currentIndex;
          return (
            <button
              key={img.id || idx}
              onClick={() => {
                setIsZoomed(false);
                setCurrentIndex(idx);
              }}
              className={`relative rounded-lg overflow-hidden shrink-0 border transition-all duration-200 ${
                isActive
                  ? 'border-amber-400 scale-110 shadow-lg ring-2 ring-amber-500/50'
                  : 'border-slate-800 opacity-50 hover:opacity-100 hover:border-slate-600'
              }`}
            >
              <img
                src={img.imageUrl}
                alt={img.title}
                className="w-14 h-10 sm:w-16 sm:h-12 object-cover"
              />
            </button>
          );
        })}
      </div>

    </div>
  );
};
