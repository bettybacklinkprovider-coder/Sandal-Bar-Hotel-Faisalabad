import React, { useState } from 'react';
import { Phone, MapPin, Clock, Menu, X, Calendar } from 'lucide-react';
import { PageRoute } from '../types/hotel';
import { HOTEL_INFO } from '../data/hotelData';

interface HeaderProps {
  activePage: PageRoute;
  onNavigate: (page: PageRoute) => void;
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activePage, onNavigate, onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageRoute; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'rooms', label: 'Rooms & Accommodation' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (page: PageRoute) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Top Utility Contact Bar */}
      <div className="bg-slate-950 border-b border-amber-500/10 text-xs text-slate-300 py-2 px-4 sm:px-8 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${HOTEL_INFO.phone}`}
              className="flex items-center gap-2 hover:text-amber-400 transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>{HOTEL_INFO.phoneDisplay}</span>
            </a>
            <span className="text-slate-700">|</span>
            <div className="flex items-center gap-2 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span className="truncate max-w-md">{HOTEL_INFO.shortAddress}</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-500" />
              <span>Reception: {HOTEL_INFO.frontDesk}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-slate-900/95 backdrop-blur-md border-b border-amber-500/15 py-3.5 px-4 sm:px-8 shadow-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Hotel Brand Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-bold font-cinzel text-xl shadow-lg group-hover:scale-105 transition-transform">
              S
            </div>
            <div>
              <div className="text-lg sm:text-xl font-bold font-cinzel tracking-wider text-slate-100 group-hover:text-amber-400 transition-colors">
                SANDAL BAR <span className="text-amber-400">HOTEL</span>
              </div>
              <div className="text-[10px] tracking-widest text-slate-400 uppercase font-sans">
                FAISALABAD • PAKISTAN
              </div>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-950/60 p-1.5 rounded-full border border-slate-800">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                    isActive
                      ? 'bg-amber-500 text-slate-950 shadow-md font-bold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action Call & Mobile Trigger */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold px-5 py-2.5 rounded-xl shadow-md text-xs tracking-wider uppercase transition-all hover:shadow-amber-500/20 active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Stay</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 bg-slate-800 text-slate-200 rounded-xl border border-slate-700 hover:text-amber-400 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-b border-amber-500/20 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="space-y-2">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-amber-500 text-slate-950 font-bold'
                      : 'text-slate-200 hover:bg-slate-900'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-slate-950" />}
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-800 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3 rounded-xl text-center text-sm uppercase tracking-wider shadow-lg flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" /> Book Your Stay
            </button>

            <a
              href={`tel:${HOTEL_INFO.phone}`}
              className="w-full bg-slate-900 hover:bg-slate-800 border border-amber-500/30 text-amber-400 font-semibold py-3 rounded-xl text-center text-sm flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" /> Call Front Desk ({HOTEL_INFO.phoneDisplay})
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
