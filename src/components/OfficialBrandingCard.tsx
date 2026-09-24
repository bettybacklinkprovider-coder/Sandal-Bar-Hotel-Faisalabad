import React from 'react';
import { HOTEL_INFO } from '../data/hotelData';

interface OfficialBrandingCardProps {
  imageSrc?: string;
  className?: string;
}

export const OfficialBrandingCard: React.FC<OfficialBrandingCardProps> = ({
  imageSrc = HOTEL_INFO.quinaryImage,
  className = ''
}) => {
  return (
    <div className={`bg-[#070d1e] border border-amber-500/30 hover:border-amber-500/60 rounded-[2.5rem] p-8 sm:p-12 shadow-2xl flex flex-col items-center justify-center text-center transition-all ${className}`}>
      
      {/* Center Image Container */}
      <div className="relative overflow-hidden rounded-2xl border border-slate-800 shadow-xl max-w-sm sm:max-w-md w-full my-4">
        <img
          src={imageSrc}
          alt="Sandal Bar Hotel Faisalabad Room View"
          className="w-full h-44 sm:h-52 object-cover object-center transform hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070d1e]/60 via-transparent to-transparent" />
      </div>

      {/* Official Branding Text */}
      <div className="mt-6 space-y-1.5 text-center">
        <h3 className="text-amber-400 font-bold text-lg sm:text-xl uppercase tracking-widest font-cinzel font-serif-luxury">
          OFFICIAL HOTEL BRANDING
        </h3>
        <p className="text-slate-200 font-semibold text-sm sm:text-base font-sans tracking-wide">
          Sandal Bar Hotel Faisalabad
        </p>
      </div>

    </div>
  );
};
