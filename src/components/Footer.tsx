import React from 'react';
import { Phone, MapPin, Mail, Navigation, ShieldCheck, ArrowRight, Bed, Star } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';
import { PageRoute } from '../types/hotel';

interface FooterProps {
  onNavigate: (page: PageRoute) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-amber-500/20 pt-16 pb-12 relative overflow-hidden">
      
      {/* Background glow accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-amber-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-bold font-cinzel text-xl shadow-lg">
                S
              </div>
              <div>
                <div className="text-xl font-bold font-cinzel tracking-wider text-white">
                  SANDAL BAR <span className="text-amber-400">HOTEL</span>
                </div>
                <div className="text-[10px] tracking-widest text-slate-400 uppercase">
                  Faisalabad • Pakistan
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              Experience warmth, comfort, and premium hospitality at Sandal Bar Hotel. Conveniently situated at Saleemi Chowk on Satiana Road, offering refined executive rooms and 24/7 room service.
            </p>

            <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold pt-1">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <span className="text-slate-300">Top Rated Hotel in Satiana Road</span>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400 font-cinzel border-l-2 border-amber-500 pl-2.5">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-amber-400 transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-amber-500 group-hover:translate-x-1 transition-transform" />
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('rooms'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-amber-400 transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-amber-500 group-hover:translate-x-1 transition-transform" />
                  <span>Rooms & Accommodation</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('gallery'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-amber-400 transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-amber-500 group-hover:translate-x-1 transition-transform" />
                  <span>Photo Gallery</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-amber-400 transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-amber-500 group-hover:translate-x-1 transition-transform" />
                  <span>Contact & Location</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Featured Accommodations */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400 font-cinzel border-l-2 border-amber-500 pl-2.5">
              Accommodations
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <Bed className="w-3.5 h-3.5 text-amber-500" /> Executive Deluxe Room
              </li>
              <li className="flex items-center gap-2">
                <Bed className="w-3.5 h-3.5 text-amber-500" /> Royal Family Suite
              </li>
              <li className="flex items-center gap-2">
                <Bed className="w-3.5 h-3.5 text-amber-500" /> Presidential Luxury Suite
              </li>
              <li className="flex items-center gap-2">
                <Bed className="w-3.5 h-3.5 text-amber-500" /> Standard Business Room
              </li>
            </ul>

            <button
              onClick={onOpenBooking}
              className="mt-2 w-full py-2.5 bg-slate-900 hover:bg-amber-500/20 border border-amber-500/40 text-amber-300 font-bold rounded-xl text-xs uppercase tracking-wider transition-colors"
            >
              Check Availability Online
            </button>
          </div>

          {/* Column 4: Contact & Directions */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400 font-cinzel border-l-2 border-amber-500 pl-2.5">
              Direct Contact
            </h4>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                <div>
                  <div className="text-xs text-slate-400 uppercase">Front Desk / Bookings</div>
                  <a
                    href={`tel:${HOTEL_INFO.phone}`}
                    className="font-bold text-amber-400 hover:underline text-base"
                  >
                    {HOTEL_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                <div className="text-slate-300 text-xs leading-relaxed">
                  {HOTEL_INFO.address}
                </div>
              </div>

              <a
                href={HOTEL_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-amber-400 border border-amber-500/30 px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-md"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Google Maps Directions</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-300 gap-4">
          <p>© {new Date().getFullYear()} Sandal Bar Hotel, Faisalabad, Pakistan. All Rights Reserved.</p>
          <div className="flex items-center gap-4 text-slate-300">
            <span>Satiana Road</span>
            <span>•</span>
            <span>People's Colony No. 1</span>
            <span>•</span>
            <span>Faisalabad</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
