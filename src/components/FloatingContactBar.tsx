import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface FloatingContactBarProps {
  onOpenBooking: () => void;
}

export const FloatingContactBar: React.FC<FloatingContactBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      
      {/* Direct Call Button */}
      <a
        href={`tel:${HOTEL_INFO.phone}`}
        className="group flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold px-4 py-3 rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95"
        title="Call Hotel Directly"
      >
        <div className="w-8 h-8 rounded-full bg-slate-950/20 flex items-center justify-center">
          <Phone className="w-4 h-4 text-slate-950 animate-bounce" />
        </div>
        <span className="hidden sm:inline text-xs tracking-wider uppercase pr-1 font-sans font-bold">
          Call Now
        </span>
      </a>

      {/* WhatsApp Quick Chat */}
      <a
        href={`https://wa.me/923229666638?text=Hello%20Sandal%20Bar%20Hotel,%20I%20would%20like%20to%20inquire%20about%20room%20booking.`}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-4 py-3 rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95"
        title="Chat on WhatsApp"
      >
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
          <MessageCircle className="w-4 h-4 text-white" />
        </div>
        <span className="hidden sm:inline text-xs tracking-wider uppercase pr-1 font-sans font-bold">
          WhatsApp Us
        </span>
      </a>

    </div>
  );
};
