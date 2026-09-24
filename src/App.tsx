import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { LightboxModal } from './components/LightboxModal';
import { FloatingContactBar } from './components/FloatingContactBar';
import { HomePage } from './pages/HomePage';
import { RoomsPage } from './pages/RoomsPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { PageRoute, GalleryItem } from './types/hotel';

export default function App() {
  const [activePage, setActivePage] = useState<PageRoute>(() => {
    const hash = window.location.hash.replace('#/', '').replace('#', '');
    if (['home', 'rooms', 'gallery', 'contact'].includes(hash)) {
      return hash as PageRoute;
    }
    return 'home';
  });

  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState<string | undefined>();

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxItems, setLightboxItems] = useState<GalleryItem[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      if (['home', 'rooms', 'gallery', 'contact'].includes(hash)) {
        setActivePage(hash as PageRoute);
      } else if (!hash) {
        setActivePage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageRoute) => {
    setActivePage(page);
    window.location.hash = page === 'home' ? '' : `#/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (roomId?: string) => {
    setSelectedRoomId(roomId);
    setBookingModalOpen(true);
  };

  const handleOpenLightbox = (items: GalleryItem[], index: number) => {
    setLightboxItems(items);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 font-sans text-slate-100 antialiased selection:bg-amber-500 selection:text-slate-950">
      
      {/* Sticky Top Header Navigation */}
      <Header
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Page Content Router */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
            onOpenGalleryLightbox={handleOpenLightbox}
          />
        )}

        {activePage === 'rooms' && (
          <RoomsPage
            onOpenBooking={handleOpenBooking}
          />
        )}

        {activePage === 'gallery' && (
          <GalleryPage
            onOpenLightbox={handleOpenLightbox}
          />
        )}

        {activePage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Footer on Every Page */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Floating Call & WhatsApp Action Bar */}
      <FloatingContactBar
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Direct Room Booking Inquiry Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        selectedRoomId={selectedRoomId}
      />

      {/* Fullscreen Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={lightboxItems}
        currentIndex={lightboxIndex}
        onSelectIndex={(idx) => setLightboxIndex(idx)}
      />

    </div>
  );
}
