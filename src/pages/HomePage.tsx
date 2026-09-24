import React from 'react';
import {
  Phone,
  MapPin,
  Calendar,
  Sparkles,
  BedDouble,
  Utensils,
  Wifi,
  Car,
  Clock,
  UserCheck,
  Zap,
  Navigation,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
} from 'lucide-react';
import { HOTEL_INFO, ROOMS_DATA, FACILITIES_DATA } from '../data/hotelData';
import { PageRoute } from '../types/hotel';

interface HomePageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenBooking: (roomId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenBooking,
}) => {

  return (
    <div className="min-h-screen text-slate-100 bg-slate-950">

      {/* =========================================================================
          SECTION 1: HERO SECTION
         ========================================================================= */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden border-b border-amber-500/20">
        
        {/* Background Image with Dark Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={HOTEL_INFO.heroImage}
            alt="Sandal Bar Hotel Building Exterior - Saleemi Chowk Faisalabad"
            className="w-full h-full object-cover object-center scale-105 transform transition-transform duration-10000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-950/50 to-slate-950" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 py-20 text-center space-y-8">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase font-cinzel shadow-xl backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Executive Comfort in Faisalabad</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-serif-luxury tracking-tight leading-tight text-white drop-shadow-md">
            Welcome to <br className="hidden sm:inline" />
            <span className="gold-gradient-text">Sandal Bar Hotel</span>
          </h1>

          {/* Subheading / Short professional introduction */}
          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-sans font-light">
            Located at Saleemi Chowk on Satiana Road, Sandal Bar Hotel offers refined accommodations, premier dining, and warm Pakistani hospitality for business executives, families, and travelers.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm tracking-wider uppercase rounded-xl shadow-2xl hover:shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" /> Book Your Stay
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-8 py-4 bg-slate-900/90 hover:bg-slate-800 text-slate-100 border border-amber-500/30 hover:border-amber-400 font-bold text-sm tracking-wider uppercase rounded-xl backdrop-blur-md transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-400" /> Contact Us
            </button>
          </div>

          {/* Key Feature Highlights Pill Strip */}
          <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto text-xs text-slate-300 font-medium">
            <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-xl p-3 flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Satiana Road Location</span>
            </div>
            <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-xl p-3 flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
              <span>24/7 Room Service</span>
            </div>
            <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-xl p-3 flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Free High Speed Wi-Fi</span>
            </div>
            <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-xl p-3 flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Full Power Generator</span>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 2: ABOUT SANDAL BAR HOTEL
         ========================================================================= */}
      <section className="py-20 px-4 sm:px-8 bg-slate-900/50 border-b border-slate-800 relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Column */}
            <div className="lg:col-span-6 relative space-y-4">
              
              {/* Featured Photos Grid - 3 Official Photos */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl group">
                  <img
                    src={HOTEL_INFO.heroImage}
                    alt="Sandal Bar Hotel Main Building Front View"
                    className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-2 left-2 right-2 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-amber-500/20 text-[11px] font-semibold text-amber-300 truncate">
                    Main Entrance
                  </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl group">
                  <img
                    src={HOTEL_INFO.tertiaryImage}
                    alt="Sandal Bar Hotel Exterior Architecture"
                    className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-2 left-2 right-2 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-amber-500/20 text-[11px] font-semibold text-amber-300 truncate">
                    Executive Front View
                  </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl group">
                  <img
                    src={HOTEL_INFO.secondaryImage}
                    alt="Sandal Bar Hotel Frontage"
                    className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-2 left-2 right-2 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-amber-500/20 text-[11px] font-semibold text-amber-300 truncate">
                    Satiana Road View
                  </div>
                </div>
              </div>

              {/* Decorative Accent Card */}
              <div className="flex bg-slate-950/90 backdrop-blur-md border border-amber-500/30 p-4 rounded-2xl shadow-2xl items-center gap-4">
                <div className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center text-amber-400 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-extrabold text-white font-serif-luxury">Official Sandal Bar Hotel</div>
                  <p className="text-xs text-slate-400 truncate">Satiana Road, People's Colony No. 1, Faisalabad</p>
                </div>
                <a
                  href={`tel:${HOTEL_INFO.phone}`}
                  className="p-2 bg-amber-500 text-slate-950 rounded-lg hover:bg-amber-400 font-bold text-xs flex items-center gap-1 shrink-0"
                >
                  <Phone className="w-3.5 h-3.5" /> Call
                </a>
              </div>

            </div>

            {/* Text Column */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400 font-cinzel">
                  About Sandal Bar Hotel
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold font-serif-luxury text-white">
                  A Beacon of Modern Comfort & Traditional Hospitality
                </h2>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Situated in the vibrant heart of Faisalabad at Saleemi Chowk, Satiana Road, <strong>Sandal Bar Hotel</strong> is meticulously crafted to cater to business executives, family vacations, and wedding visitors.
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Whether you are visiting Faisalabad for industrial meetings or family functions, our soundproofed, air-conditioned rooms, 24/7 front desk team, in-house restaurant, and secure parking ensure a seamless and relaxed stay.
              </p>

              {/* Feature Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
                  <div className="p-2 bg-amber-500/10 text-amber-400 rounded-lg shrink-0">
                    <BedDouble className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Comfortable Beds</h4>
                    <p className="text-xs text-slate-400">Orthopedic mattresses for restful sleep</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
                  <div className="p-2 bg-amber-500/10 text-amber-400 rounded-lg shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Prime Location</h4>
                    <p className="text-xs text-slate-400">Satiana Road, People's Colony No. 1</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('rooms')}
                  className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-bold text-sm uppercase tracking-wider group"
                >
                  <span>Explore Rooms & Suites</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: ROOMS & ACCOMMODATION SHOWCASE
         ========================================================================= */}
      <section className="py-20 px-4 sm:px-8 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400 font-cinzel">
                Accommodations
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif-luxury text-white">
                Featured Guest Rooms & Suites
              </h2>
              <p className="text-slate-400 text-sm max-w-xl">
                Choose from our well-appointed room categories designed for elegance, privacy, and maximum comfort.
              </p>
            </div>

            <button
              onClick={() => onNavigate('rooms')}
              className="px-6 py-3 bg-slate-900 hover:bg-slate-800 border border-amber-500/30 text-amber-400 font-bold text-xs uppercase tracking-wider rounded-xl transition-all self-start md:self-auto flex items-center gap-2"
            >
              <span>View All Rooms</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ROOMS_DATA.slice(0, 3).map((room) => (
              <div
                key={room.id}
                className="group bg-slate-900/80 border border-slate-800 hover:border-amber-500/40 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {/* Card Image */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-amber-400 border border-amber-500/20">
                    {room.category}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-slate-950/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-amber-500/30 text-right">
                    <span className="text-xs text-slate-400 block">Per Night</span>
                    <span className="text-sm font-bold text-amber-400 font-serif-luxury">PKR {room.pricePerNightPKR.toLocaleString()}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white font-serif-luxury group-hover:text-amber-400 transition-colors">
                      {room.name}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {room.description}
                    </p>
                  </div>

                  {/* Room specs */}
                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-300 pt-2 border-t border-slate-800/80">
                    <div className="flex items-center gap-1.5">
                      <BedDouble className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span className="truncate">{room.bedType}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <UserCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>Up to {room.maxGuests} Guests</span>
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="pt-2 flex items-center gap-2">
                    <button
                      onClick={() => onOpenBooking(room.id)}
                      className="flex-1 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all text-center flex items-center justify-center gap-1.5"
                    >
                      <Calendar className="w-3.5 h-3.5" /> Book Now
                    </button>
                    <a
                      href={`tel:${HOTEL_INFO.phone}`}
                      className="p-3 bg-slate-800 hover:bg-slate-700 text-amber-400 rounded-xl transition-colors shrink-0"
                      title="Call Hotel to Book"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: HOTEL FACILITIES & SERVICES
         ========================================================================= */}
      <section className="py-20 px-4 sm:px-8 bg-slate-900/40 border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 font-cinzel">
              Amenities & Convenience
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif-luxury text-white">
              Hotel Facilities & Services
            </h2>
            <p className="text-slate-400 text-sm">
              We ensure every aspect of your stay at Sandal Bar Hotel is effortless and comfortable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FACILITIES_DATA.map((fac) => (
              <div
                key={fac.id}
                className="bg-slate-900/90 border border-slate-800 hover:border-amber-500/30 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 group flex flex-col shadow-xl"
              >
                {/* Image Header */}
                {fac.image && (
                  <div className="relative h-44 overflow-hidden shrink-0">
                    <img
                      src={fac.image}
                      alt={fac.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                    
                    {/* Icon Badge */}
                    <div className="absolute bottom-3 left-4 w-10 h-10 rounded-xl bg-slate-950/90 border border-amber-500/30 text-amber-400 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors shadow-lg backdrop-blur-md">
                      {fac.iconName === 'BedDouble' && <BedDouble className="w-5 h-5" />}
                      {fac.iconName === 'Utensils' && <Utensils className="w-5 h-5" />}
                      {fac.iconName === 'Wifi' && <Wifi className="w-5 h-5" />}
                      {fac.iconName === 'Car' && <Car className="w-5 h-5" />}
                      {fac.iconName === 'Clock' && <Clock className="w-5 h-5" />}
                      {fac.iconName === 'UserCheck' && <UserCheck className="w-5 h-5" />}
                      {fac.iconName === 'Zap' && <Zap className="w-5 h-5" />}
                      {fac.iconName === 'Users' && <Sparkles className="w-5 h-5" />}
                    </div>
                  </div>
                )}

                {!fac.image && (
                  <div className="p-6 pb-0">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                      {fac.iconName === 'BedDouble' && <BedDouble className="w-6 h-6" />}
                      {fac.iconName === 'Utensils' && <Utensils className="w-6 h-6" />}
                      {fac.iconName === 'Wifi' && <Wifi className="w-6 h-6" />}
                      {fac.iconName === 'Car' && <Car className="w-6 h-6" />}
                      {fac.iconName === 'Clock' && <Clock className="w-6 h-6" />}
                      {fac.iconName === 'UserCheck' && <UserCheck className="w-6 h-6" />}
                      {fac.iconName === 'Zap' && <Zap className="w-6 h-6" />}
                      {fac.iconName === 'Users' && <Sparkles className="w-6 h-6" />}
                    </div>
                  </div>
                )}

                <div className="p-6 pt-4 flex-1 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 font-cinzel">
                    {fac.tag}
                  </span>
                  <h3 className="text-lg font-bold text-white font-serif-luxury group-hover:text-amber-400 transition-colors">
                    {fac.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {fac.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: HOTEL PHOTO GALLERY
         ========================================================================= */}
      <section className="py-20 px-4 sm:px-8 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 font-cinzel">
              Visual Experience
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif-luxury text-white">
              Sandal Bar Hotel Photo Gallery
            </h2>
            <p className="text-slate-400 text-sm">
              Explore our building facade, luxurious suite interiors, dining spaces, and executive guest facilities at Saleemi Chowk, Faisalabad.
            </p>
          </div>

          {/* Photo Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Gallery Item 1 - Main Exterior Photo */}
            <div className="group relative rounded-2xl overflow-hidden border border-amber-500/30 bg-slate-900 shadow-xl h-72">
              <img
                src={HOTEL_INFO.heroImage}
                alt="Sandal Bar Hotel Building Front Facade"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur-md p-3 rounded-xl border border-amber-500/20">
                <p className="text-xs font-bold text-amber-400 uppercase font-cinzel">Hotel Exterior & Facade</p>
                <p className="text-[11px] text-slate-200">Main Building View on Satiana Road</p>
              </div>
            </div>

            {/* Gallery Item 2 - Tertiary Building View */}
            <div className="group relative rounded-2xl overflow-hidden border border-amber-500/30 bg-slate-900 shadow-xl h-72">
              <img
                src={HOTEL_INFO.tertiaryImage}
                alt="Sandal Bar Hotel Building Front View"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur-md p-3 rounded-xl border border-amber-500/20">
                <p className="text-xs font-bold text-amber-400 uppercase font-cinzel">Executive Frontage</p>
                <p className="text-[11px] text-slate-200">Saleemi Chowk Front Elevation</p>
              </div>
            </div>

            {/* Gallery Item 3 - Secondary Exterior View */}
            <div className="group relative rounded-2xl overflow-hidden border border-slate-800 hover:border-amber-500/30 bg-slate-900 shadow-xl h-72">
              <img
                src={HOTEL_INFO.secondaryImage}
                alt="Sandal Bar Hotel Front View"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur-md p-3 rounded-xl border border-amber-500/20">
                <p className="text-xs font-bold text-amber-400 uppercase font-cinzel">Hotel Entrance & Street View</p>
                <p className="text-[11px] text-slate-200">People's Colony No. 1 View</p>
              </div>
            </div>

            {/* Gallery Item 3 - Executive Room */}
            <div className="group relative rounded-2xl overflow-hidden border border-slate-800 hover:border-amber-500/30 bg-slate-900 shadow-xl h-72">
              <img
                src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=1200"
                alt="Executive Deluxe Room Interior"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur-md p-3 rounded-xl border border-amber-500/20">
                <p className="text-xs font-bold text-amber-400 uppercase font-cinzel">Executive Deluxe Room</p>
                <p className="text-[11px] text-slate-200">Plush Comfort & Modern Lighting</p>
              </div>
            </div>

            {/* Gallery Item 4 - Family Suite */}
            <div className="group relative rounded-2xl overflow-hidden border border-slate-800 hover:border-amber-500/30 bg-slate-900 shadow-xl h-72">
              <img
                src="https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&q=80&w=1200"
                alt="Royal Family Suite Lounge"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur-md p-3 rounded-xl border border-amber-500/20">
                <p className="text-xs font-bold text-amber-400 uppercase font-cinzel">Royal Family Suite</p>
                <p className="text-[11px] text-slate-200">Spacious Family Seating Area</p>
              </div>
            </div>

            {/* Gallery Item 5 - Restaurant */}
            <div className="group relative rounded-2xl overflow-hidden border border-slate-800 hover:border-amber-500/30 bg-slate-900 shadow-xl h-72">
              <img
                src="https://i.pinimg.com/736x/10/51/b6/1051b6a145622940dd3a8847c9af66ca.jpg"
                alt="In-House Dining Area"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur-md p-3 rounded-xl border border-amber-500/20">
                <p className="text-xs font-bold text-amber-400 uppercase font-cinzel">In-House Dining</p>
                <p className="text-[11px] text-slate-200">Fresh Pakistani Cuisine & Breakfast</p>
              </div>
            </div>

            {/* Gallery Item 6 - Presidential Suite */}
            <div className="group relative rounded-2xl overflow-hidden border border-slate-800 hover:border-amber-500/30 bg-slate-900 shadow-xl h-72">
              <img
                src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=1200"
                alt="Presidential Suite Bedroom"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur-md p-3 rounded-xl border border-amber-500/20">
                <p className="text-xs font-bold text-amber-400 uppercase font-cinzel">Presidential Suite</p>
                <p className="text-[11px] text-slate-200">Luxury Interior & VIP Service</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: CONTACT & LOCATION
         ========================================================================= */}
      <section className="py-20 px-4 sm:px-8 bg-slate-900/60 relative">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 font-cinzel">
              Location & Contact
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif-luxury text-white">
              Reach Sandal Bar Hotel
            </h2>
            <p className="text-slate-400 text-sm">
              Situated right at Saleemi Chowk on Satiana Road, Faisalabad. We look forward to welcoming you!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Info Box */}
            <div className="lg:col-span-5 bg-slate-950 border border-amber-500/20 rounded-2xl p-8 space-y-8 flex flex-col justify-between shadow-xl">
              <div className="space-y-6">
                
                <div>
                  <h3 className="text-2xl font-bold font-serif-luxury text-white">Sandal Bar Hotel</h3>
                  <p className="text-xs text-amber-400 uppercase tracking-widest font-cinzel mt-1">
                    Faisalabad, Pakistan
                  </p>
                </div>

                <div className="space-y-5 text-sm">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-amber-500/10 text-amber-400 rounded-xl shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 uppercase font-semibold">Phone Contact</span>
                      <a
                        href={`tel:${HOTEL_INFO.phone}`}
                        className="block text-xl font-bold text-amber-400 hover:underline font-mono mt-0.5"
                      >
                        {HOTEL_INFO.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-amber-500/10 text-amber-400 rounded-xl shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 uppercase font-semibold">Full Address</span>
                      <p className="text-slate-200 mt-0.5 leading-relaxed">
                        {HOTEL_INFO.address}
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-amber-500/10 text-amber-400 rounded-xl shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 uppercase font-semibold">Reception / Front Desk</span>
                      <p className="text-slate-200 mt-0.5 font-semibold">
                        24 Hours Open / 7 Days a Week
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-800">
                <a
                  href={`tel:${HOTEL_INFO.phone}`}
                  className="flex-1 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl text-center shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" /> Call Now
                </a>

                <a
                  href={HOTEL_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 bg-slate-900 hover:bg-slate-800 border border-amber-500/30 text-amber-400 font-bold text-xs uppercase tracking-wider rounded-xl text-center transition-all flex items-center justify-center gap-2"
                >
                  <Navigation className="w-4 h-4" /> Get Directions
                </a>
              </div>

            </div>

            {/* Embedded Map Area */}
            <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden min-h-[380px] relative shadow-xl">
              <iframe
                title="Sandal Bar Hotel Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.8018789319356!2d73.10261317537333!3d31.405822352820577!2m3!100!0!200!0!300!0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392268153c3e80f1%3A0xb35a396263592182!2sSatiana%20Rd%2C%20Peoples%20Colony%201%2C%20Faisalabad%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                className="w-full h-full min-h-[380px] border-0 filter grayscale contrast-125 opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-slate-950/90 border border-amber-500/20 backdrop-blur-md px-4 py-2 rounded-xl text-xs text-amber-300 font-semibold shadow-lg">
                Saleemi Chowk, Satiana Road
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
