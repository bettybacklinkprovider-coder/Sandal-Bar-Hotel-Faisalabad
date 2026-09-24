import React, { useState } from 'react';
import {
  Phone,
  MapPin,
  Clock,
  Navigation,
  Send,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  ShieldCheck,
  Mail,
  User,
  MessageSquare
} from 'lucide-react';
import { HOTEL_INFO, FAQS_DATA } from '../data/hotelData';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Room Reservation Inquiry',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-8">
      
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto text-center space-y-6 pb-12 border-b border-slate-800">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest font-cinzel">
          <Sparkles className="w-3.5 h-3.5" /> 24/7 Hospitality Support
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold font-serif-luxury text-white">
          Contact Sandal Bar Hotel
        </h1>

        <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          We are available 24/7 to answer your room reservation queries, event hall bookings, and transport arrangements in Faisalabad.
        </p>
      </div>

      <div className="max-w-7xl mx-auto py-12 space-y-16">
        
        {/* Contact Info Cards + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Business Info & Actions */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-slate-900/90 border border-amber-500/20 rounded-3xl p-8 space-y-6 shadow-2xl">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-amber-400 font-cinzel">
                  Direct Line
                </span>
                <h2 className="text-2xl font-bold font-serif-luxury text-white mt-1">
                  Sandal Bar Hotel
                </h2>
              </div>

              <div className="space-y-5 text-sm">
                
                {/* Phone Link */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-500/10 text-amber-400 rounded-2xl shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 uppercase font-semibold">Front Desk Phone</span>
                    <a
                      href={`tel:${HOTEL_INFO.phone}`}
                      className="block text-2xl font-bold text-amber-400 hover:underline font-mono mt-0.5"
                    >
                      {HOTEL_INFO.phoneDisplay}
                    </a>
                    <p className="text-xs text-slate-400 mt-0.5">Click to make a call directly</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-500/10 text-amber-400 rounded-2xl shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 uppercase font-semibold">Address</span>
                    <p className="text-slate-200 mt-1 leading-relaxed text-sm font-medium">
                      {HOTEL_INFO.address}
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-500/10 text-amber-400 rounded-2xl shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 uppercase font-semibold">Operating Hours</span>
                    <p className="text-white font-bold mt-1">
                      24 Hours / 7 Days a Week
                    </p>
                    <p className="text-xs text-slate-400">Check-In: 02:00 PM | Check-Out: 12:00 PM</p>
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-800 space-y-3">
                <a
                  href={`tel:${HOTEL_INFO.phone}`}
                  className="w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl text-center shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" /> Call Now ({HOTEL_INFO.phoneDisplay})
                </a>

                <a
                  href={HOTEL_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-slate-950 hover:bg-slate-800 border border-amber-500/30 text-amber-400 font-bold text-xs uppercase tracking-wider rounded-xl text-center transition-all flex items-center justify-center gap-2"
                >
                  <Navigation className="w-4 h-4" /> Get Directions
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-3xl p-8 shadow-2xl space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400 font-cinzel">
                Online Inquiry
              </span>
              <h2 className="text-2xl font-bold font-serif-luxury text-white mt-1">
                Send Us a Message
              </h2>
            </div>

            {isSubmitted ? (
              <div className="bg-slate-950 border border-amber-500/30 rounded-2xl p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-white font-serif-luxury">Message Delivered!</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Thank you <span className="text-amber-400 font-bold">{formData.name}</span>. Our desk team at Saleemi Chowk will review your note and respond at <strong className="text-white">{formData.phone}</strong>.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 bg-amber-500 text-slate-950 font-bold rounded-xl text-xs uppercase tracking-wider"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tariq Mehmood"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 text-slate-100 rounded-xl px-4 py-3 text-sm focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +92 300 1234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 text-slate-100 rounded-xl px-4 py-3 text-sm focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 text-slate-100 rounded-xl px-4 py-3 text-sm focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 text-slate-100 rounded-xl px-4 py-3 text-sm focus:outline-none"
                    >
                      <option value="Room Reservation Inquiry">Room Reservation Inquiry</option>
                      <option value="Wedding / Event Booking">Wedding / Event Booking</option>
                      <option value="Corporate Package">Corporate Package</option>
                      <option value="General Question">General Question</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                    Your Message / Special Requests *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your trip dates, number of guests, or special requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 text-slate-100 rounded-xl px-4 py-3 text-sm focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" /> Send Message
                </button>

              </form>
            )}

          </div>

        </div>

        {/* Embedded Google Maps Section */}
        <div className="space-y-6 pt-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 font-cinzel">
              Interactive Map
            </span>
            <h2 className="text-3xl font-bold font-serif-luxury text-white">Find Us on Google Maps</h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              Saleemi Chowk, 594B People's Colony, Satiana Road, Block B People's Colony No. 1, Faisalabad
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden min-h-[420px] relative shadow-2xl">
            <iframe
              title="Google Maps Sandal Bar Hotel Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.8018789319356!2d73.10261317537333!3d31.405822352820577!2m3!100!0!200!0!300!0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392268153c3e80f1%3A0xb35a396263592182!2sSatiana%20Rd%2C%20Peoples%20Colony%201%2C%20Faisalabad%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
              className="w-full h-full min-h-[420px] border-0 filter grayscale contrast-125 opacity-90 hover:grayscale-0 transition-all duration-500"
              loading="lazy"
            />
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-6 max-w-4xl mx-auto pt-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 font-cinzel">
              Guest FAQs
            </span>
            <h2 className="text-3xl font-bold font-serif-luxury text-white">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-3">
            {FAQS_DATA.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-bold text-white text-sm sm:text-base font-serif-luxury">
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-amber-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 border-t border-slate-800/80 pt-3 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>

    </div>
  );
};
