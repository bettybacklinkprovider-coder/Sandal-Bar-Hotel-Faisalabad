import React, { useState, useEffect } from 'react';
import { X, Calendar, User, Phone, Mail, CheckCircle2, Bed, Sparkles, Send, ShieldCheck } from 'lucide-react';
import { ROOMS_DATA, HOTEL_INFO } from '../data/hotelData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedRoomId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, selectedRoomId }) => {
  const [roomId, setRoomId] = useState<string>(selectedRoomId || ROOMS_DATA[0].id);
  const [checkIn, setCheckIn] = useState<string>(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [checkOut, setCheckOut] = useState<string>(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 2);
    return tomorrow.toISOString().split('T')[0];
  });
  const [guests, setGuests] = useState<number>(2);
  const [guestName, setGuestName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [specialRequests, setSpecialRequests] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [bookingRef, setBookingRef] = useState<string>('');

  useEffect(() => {
    if (selectedRoomId) {
      setRoomId(selectedRoomId);
    }
  }, [selectedRoomId]);

  if (!isOpen) return null;

  const currentRoom = ROOMS_DATA.find((r) => r.id === roomId) || ROOMS_DATA[0];

  // Calculate nights
  const d1 = new Date(checkIn);
  const d2 = new Date(checkOut);
  const diffTime = Math.max(d2.getTime() - d1.getTime(), 86400000);
  const nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const estimatedTotal = currentRoom.pricePerNightPKR * nights;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const randomRef = 'SBH-' + Math.floor(100000 + Math.random() * 900000);
      setBookingRef(randomRef);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 900);
  };

  const handleWhatsAppSend = () => {
    const message = `*Room Reservation Request - Sandal Bar Hotel*%0A` +
      `*Ref Code:* ${bookingRef}%0A` +
      `*Guest Name:* ${guestName}%0A` +
      `*Room:* ${currentRoom.name}%0A` +
      `*Dates:* ${checkIn} to ${checkOut} (${nights} Night${nights > 1 ? 's' : ''})%0A` +
      `*Guests:* ${guests} Person(s)%0A` +
      `*Phone:* ${phone}%0A` +
      `*Est. Total:* PKR ${estimatedTotal.toLocaleString()}%0A` +
      `*Special Notes:* ${specialRequests || 'None'}`;

    window.open(`https://wa.me/923229666638?text=${message}`, '_blank');
  };

  const resetForm = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-amber-500/20 rounded-2xl shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="relative bg-gradient-to-r from-slate-900 via-amber-950/40 to-slate-900 px-6 py-5 border-b border-amber-500/20 flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 font-cinzel">Direct Booking Inquiry</span>
            <h3 className="text-xl font-bold text-slate-100 font-serif-luxury">Reserve Your Stay at Sandal Bar</h3>
          </div>
          <button
            onClick={resetForm}
            className="p-2 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-amber-500/20 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {isSuccess ? (
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 bg-amber-500/20 border border-amber-500/40 rounded-full flex items-center justify-center mx-auto text-amber-400">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-bold text-white font-serif-luxury">Reservation Request Sent!</h4>
                <p className="text-slate-300 max-w-md mx-auto text-sm">
                  Thank you, <span className="text-amber-400 font-semibold">{guestName}</span>. Your reservation reference code is:
                </p>
                <div className="inline-block bg-slate-950 border border-amber-500/30 px-5 py-2.5 rounded-xl text-amber-300 font-mono text-xl tracking-widest font-bold">
                  {bookingRef}
                </div>
              </div>

              <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 text-left text-sm text-slate-300 space-y-2 max-w-md mx-auto">
                <div className="flex justify-between border-b border-slate-800 pb-1.5">
                  <span className="text-slate-400">Room:</span>
                  <span className="font-semibold text-white">{currentRoom.name}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-1.5">
                  <span className="text-slate-400">Dates:</span>
                  <span className="text-white">{checkIn} to {checkOut} ({nights} Night{nights > 1 ? 's' : ''})</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-1.5">
                  <span className="text-slate-400">Guests:</span>
                  <span className="text-white">{guests} Guest(s)</span>
                </div>
                <div className="flex justify-between pt-1 font-semibold text-amber-400 text-base">
                  <span>Estimated Total:</span>
                  <span>PKR {estimatedTotal.toLocaleString()}</span>
                </div>
              </div>

              <p className="text-xs text-slate-400 max-w-md mx-auto">
                Our reservation team at Saleemi Chowk will review your details and contact you at <strong className="text-slate-200">{phone}</strong>. You can also confirm instantly via WhatsApp or Call.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <button
                  type="button"
                  onClick={handleWhatsAppSend}
                  className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <Send className="w-4 h-4" /> Send Request on WhatsApp
                </button>
                <a
                  href={`tel:${HOTEL_INFO.phone}`}
                  className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <Phone className="w-4 h-4" /> Call Front Desk ({HOTEL_INFO.phoneDisplay})
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Select Room */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Bed className="w-4 h-4 text-amber-400" /> Select Accommodation
                </label>
                <select
                  value={roomId}
                  onChange={(e) => setRoomId(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 text-slate-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500"
                >
                  {ROOMS_DATA.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.name} — PKR {r.pricePerNightPKR.toLocaleString()} / night
                    </option>
                  ))}
                </select>
              </div>

              {/* Dates & Guests Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" /> Check-In
                  </label>
                  <input
                    type="date"
                    required
                    value={checkIn}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 text-slate-100 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" /> Check-Out
                  </label>
                  <input
                    type="date"
                    required
                    value={checkOut}
                    min={checkIn}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 text-slate-100 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-amber-400" /> Guests
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 text-slate-100 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none"
                  >
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <option key={num} value={num}>
                        {num} Guest{num > 1 ? 's' : ''}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Guest Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Muhammad Usman"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 text-slate-100 rounded-xl px-4 py-2.5 text-sm focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Phone / Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 0322 9666638"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 text-slate-100 rounded-xl px-4 py-2.5 text-sm focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  placeholder="e.g. name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 text-slate-100 rounded-xl px-4 py-2.5 text-sm focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Special Requests / Arrival Notes
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Airport pickup, extra bed, early check-in preference..."
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 text-slate-100 rounded-xl px-4 py-2.5 text-sm focus:outline-none resize-none"
                />
              </div>

              {/* Price Breakdown Banner */}
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-amber-300 font-medium">Estimated Booking Total</p>
                  <p className="text-xs text-slate-400">
                    {nights} Night{nights > 1 ? 's' : ''} x PKR {currentRoom.pricePerNightPKR.toLocaleString()} (Includes taxes)
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-amber-400 font-serif-luxury">
                    PKR {estimatedTotal.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>No advance payment required for inquiry. Free cancellation available up to 24h before stay.</span>
              </div>

              {/* Action buttons */}
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 text-sm font-medium text-slate-400 hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm rounded-xl shadow-lg transition-all flex items-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Processing Reservation...</span>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" /> Submit Booking Request
                    </>
                  )}
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
