import React, { useState } from 'react';
import {
  BedDouble,
  Users,
  Calendar,
  Phone,
  Sparkles,
  Maximize2,
  LayoutGrid,
  List
} from 'lucide-react';
import { ROOMS_DATA, HOTEL_INFO } from '../data/hotelData';
import { RoomCard } from '../components/RoomCard';

interface RoomsPageProps {
  onOpenBooking: (roomId?: string) => void;
}

export const RoomsPage: React.FC<RoomsPageProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = ['All', 'Executive', 'Deluxe Suite', 'Family Suite', 'Presidential', 'Standard'];

  const filteredRooms = selectedCategory === 'All'
    ? ROOMS_DATA
    : ROOMS_DATA.filter((r) => r.category === selectedCategory);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-8">
      
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto space-y-6 text-center pb-12 border-b border-slate-800">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest font-cinzel">
          <Sparkles className="w-3.5 h-3.5" /> Luxury Accommodation
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold font-serif-luxury text-white">
          Rooms & Executive Suites
        </h1>

        <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Designed with classic warmth and equipped with contemporary conveniences. Every room at Sandal Bar Hotel includes high-speed Wi-Fi, climate control AC, daily housekeeping, and 24/7 room service.
        </p>

        {/* Filter & View Mode Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 max-w-5xl mx-auto">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider transition-all ${
                  selectedCategory === cat
                    ? 'bg-amber-500 text-slate-950 shadow-lg font-extrabold scale-105'
                    : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid / List Switcher */}
          <div className="flex items-center gap-1 bg-slate-900 p-1.5 rounded-xl border border-slate-800 shrink-0">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                viewMode === 'grid'
                  ? 'bg-amber-500 text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Grid View (Card Style)"
            >
              <LayoutGrid className="w-4 h-4" />
              <span className="hidden sm:inline">Grid</span>
            </button>

            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                viewMode === 'list'
                  ? 'bg-amber-500 text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Detailed Expanded View"
            >
              <List className="w-4 h-4" />
              <span className="hidden sm:inline">Detailed</span>
            </button>
          </div>
        </div>

      </div>

      {/* Main Rooms Showcase */}
      <div className="max-w-7xl mx-auto py-12">
        {viewMode === 'grid' ? (
          /* Grid View (Matching Image 2 Card Design) */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRooms.map((room) => (
              <RoomCard
                key={room.id}
                room={room}
                onOpenBooking={onOpenBooking}
              />
            ))}
          </div>
        ) : (
          /* List / Detailed View */
          <div className="space-y-12">
            {filteredRooms.map((room) => (
              <div
                key={room.id}
                className="bg-slate-900/90 border border-slate-800 hover:border-amber-500/30 rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-0"
              >
                {/* Image Column */}
                <div className="lg:col-span-6 relative group min-h-[320px]">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80 lg:opacity-40" />

                  {/* Tag Badges */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="bg-amber-500 text-slate-950 px-3.5 py-1 rounded-full text-xs font-bold font-cinzel uppercase shadow-lg">
                      {room.category}
                    </span>
                    {room.popular && (
                      <span className="bg-slate-950/80 backdrop-blur-md text-amber-300 border border-amber-500/30 px-3 py-1 rounded-full text-xs font-medium">
                        ★ Most Requested
                      </span>
                    )}
                  </div>
                </div>

                {/* Content Column */}
                <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-white">
                          {room.name}
                        </h2>
                        <p className="text-xs text-amber-400 font-medium mt-1">
                          {room.tagline}
                        </p>
                      </div>
                      <div className="text-right shrink-0 bg-slate-950 p-3 rounded-2xl border border-amber-500/20">
                        <span className="text-[10px] text-slate-400 block uppercase font-medium">Per Night</span>
                        <span className="text-xl sm:text-2xl font-bold text-amber-400 font-serif-luxury">
                          PKR {room.pricePerNightPKR.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed pt-2">
                      {room.description}
                    </p>

                    {/* Specs Row */}
                    <div className="grid grid-cols-3 gap-3 bg-slate-950 p-3.5 rounded-2xl border border-slate-800 text-xs text-slate-300 pt-3">
                      <div className="flex items-center gap-2">
                        <BedDouble className="w-4 h-4 text-amber-400 shrink-0" />
                        <span className="truncate">{room.bedType}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>Max {room.maxGuests} Guests</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Maximize2 className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>{room.roomSizeSqFt} sq ft</span>
                      </div>
                    </div>
                  </div>

                  {/* Amenities Grid */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Room Features & Inclusions
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
                      {room.amenities.map((amenity, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                          <span className="truncate">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      onClick={() => onOpenBooking(room.id)}
                      className="w-full sm:flex-1 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
                    >
                      <Calendar className="w-4 h-4" /> Book This Room Now
                    </button>

                    <a
                      href={`tel:${HOTEL_INFO.phone}`}
                      className="w-full sm:w-auto px-6 py-3.5 bg-slate-950 hover:bg-slate-800 border border-amber-500/30 text-amber-400 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2"
                    >
                      <Phone className="w-4 h-4" /> Call Hotel ({HOTEL_INFO.phoneDisplay})
                    </a>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Hospitality Guarantee Footer Banner */}
      <div className="max-w-7xl mx-auto bg-gradient-to-r from-slate-900 via-amber-950/30 to-slate-900 border border-amber-500/20 rounded-3xl p-8 text-center space-y-4">
        <h3 className="text-2xl font-bold font-serif-luxury text-white">Need Customized Family or Corporate Booking?</h3>
        <p className="text-slate-300 text-sm max-w-xl mx-auto">
          We offer discounted packages for long stays, wedding party accommodations, and corporate delegations in Faisalabad.
        </p>
        <div className="pt-2">
          <a
            href={`tel:${HOTEL_INFO.phone}`}
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-xl transition-all"
          >
            <Phone className="w-4 h-4" /> Talk with Front Desk Manager
          </a>
        </div>
      </div>

    </div>
  );
};
