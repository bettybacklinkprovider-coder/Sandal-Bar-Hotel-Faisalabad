export interface Room {
  id: string;
  name: string;
  category: 'Standard' | 'Executive' | 'Deluxe Suite' | 'Family Suite' | 'Presidential';
  tagline: string;
  pricePerNightPKR: number;
  maxGuests: number;
  bedType: string;
  roomSizeSqFt: number;
  image: string;
  galleryImages: string[];
  description: string;
  amenities: string[];
  popular: boolean;
}

export interface Facility {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tag?: string;
  image?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'exterior' | 'rooms' | 'bathrooms' | 'lobby' | 'dining' | 'facilities';
  imageUrl: string;
  caption: string;
}

export interface BookingFormData {
  checkIn: string;
  checkOut: string;
  guests: number;
  roomId: string;
  guestName: string;
  phone: string;
  email: string;
  specialRequests?: string;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  roomType: string;
}

export type PageRoute = 'home' | 'rooms' | 'gallery' | 'contact';
