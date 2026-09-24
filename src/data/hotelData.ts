import { Room, Facility, Review } from '../types/hotel';

export const HOTEL_INFO = {
  name: 'Sandal Bar Hotel',
  tagline: 'Premier Hospitality & Executive Comfort in Faisalabad',
  phone: '+923229666638',
  phoneDisplay: '+92 322 9666638',
  email: 'info@sandalbarhotel.com',
  address: "Saleemi Chowk, 594B People's Colony, Satiana Road, Block B People's Colony No. 1, Faisalabad, Pakistan",
  shortAddress: "Saleemi Chowk, Satiana Road, People's Colony No. 1, Faisalabad",
  city: 'Faisalabad',
  country: 'Pakistan',
  googleMapsUrl: 'https://maps.google.com/?q=Saleemi+Chowk+594B+People%27s+Colony+Satiana+Road+Faisalabad',
  checkInTime: '02:00 PM',
  checkOutTime: '12:00 PM',
  frontDesk: '24 Hours / 7 Days',
  heroImage: 'https://res.cloudinary.com/k7og2ybq/image/upload/v1790244859/unnamed_1.jpg',
  secondaryImage: 'https://res.cloudinary.com/k7og2ybq/image/upload/v1790244121/unnamed.jpg',
  tertiaryImage: 'https://res.cloudinary.com/k7og2ybq/image/upload/v1790245444/unnamed_2.jpg',
  gallery: [
    'https://res.cloudinary.com/k7og2ybq/image/upload/v1790244859/unnamed_1.jpg',
    'https://res.cloudinary.com/k7og2ybq/image/upload/v1790245444/unnamed_2.jpg',
    'https://res.cloudinary.com/k7og2ybq/image/upload/v1790244121/unnamed.jpg',
  ]
};

// High resolution hospitality photos
export const ROOMS_DATA: Room[] = [
  {
    id: 'executive-deluxe',
    name: 'Executive Deluxe Room',
    category: 'Executive',
    tagline: 'Ideal for business travelers and luxury seekers in Faisalabad',
    pricePerNightPKR: 12500,
    maxGuests: 2,
    bedType: '1 King Bed or 2 Twin Beds',
    roomSizeSqFt: 350,
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=1200',
    galleryImages: [
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200'
    ],
    description: 'Designed with warm wooden finishings and soothing ambient lighting, the Executive Deluxe Room offers a tranquility hub right off Satiana Road. Features high-speed Wi-Fi, dedicated work desk, premium mattress, and complimentary breakfast.',
    amenities: [
      'Complimentary High-Speed Wi-Fi',
      '43" Smart LED TV with Cable',
      'Individual Climate Control AC',
      '24/7 Hot Water & Rain Shower',
      'Executive Work Desk & Chair',
      'In-Room Tea & Coffee Maker',
      'Daily Housekeeping',
      'Complimentary Breakfast'
    ],
    popular: true,
  },
  {
    id: 'royal-family-suite',
    name: 'Royal Family Suite',
    category: 'Family Suite',
    tagline: 'Spacious accommodation with dedicated seating area for families',
    pricePerNightPKR: 18500,
    maxGuests: 4,
    bedType: '2 King Beds or 1 King + 2 Singles',
    roomSizeSqFt: 520,
    image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&q=80&w=1200',
    galleryImages: [
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=1200'
    ],
    description: 'Generously proportioned suite with separate sofa lounge zone. Perfectly tailored for families visiting Faisalabad for wedding events, vacation, or extended stay. Includes luxury toiletries and express room service.',
    amenities: [
      'Spacious Lounge & Sofa Seating',
      '2 Smart HD TVs',
      'Mini Refrigerator & Refreshment Bar',
      'Complimentary High-Speed Wi-Fi',
      'In-Suite Safe',
      '24/7 Room Service Access',
      'Complimentary Breakfast for 4',
      'Iron & Ironing Board'
    ],
    popular: true,
  },
  {
    id: 'presidential-suite',
    name: 'Presidential Luxury Suite',
    category: 'Presidential',
    tagline: 'Unmatched elegance, city view lounge, and VIP room service',
    pricePerNightPKR: 26000,
    maxGuests: 3,
    bedType: '1 Super King Bed + Sofa Bed',
    roomSizeSqFt: 680,
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=1200',
    galleryImages: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200'
    ],
    description: 'The pinnacle of luxury at Sandal Bar Hotel. Features custom plush upholstery, marble ensuite bathroom with deep soaking tub, panoramic view of People’s Colony, VIP greeting amenities, and priority dining reservations.',
    amenities: [
      'Marble Bathroom with Bath Tub',
      'Private Dining Dining Table',
      '55" Ultra HD Smart TV',
      'Free VIP Welcome Refreshments',
      '24-Hour Express Room Service',
      'Complimentary Laundry (2 pieces/day)',
      'Free Airport / Station Pick Transfer option'
    ],
    popular: false,
  },
  {
    id: 'standard-double',
    name: 'Standard Business Room',
    category: 'Standard',
    tagline: 'Comfortable & clean room at an affordable price point',
    pricePerNightPKR: 8500,
    maxGuests: 2,
    bedType: '1 Queen Bed',
    roomSizeSqFt: 280,
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1200',
    galleryImages: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=1200'
    ],
    description: 'Ideal for single travelers or couples seeking high hygiene, quiet sleep, and excellent central location near Saleemi Chowk. Equipped with all core modern amenities.',
    amenities: [
      'Queen Size Orthopedic Mattress',
      'High-Speed Wi-Fi Internet',
      '32" Flat Screen Cable TV',
      'Clean En-Suite Shower',
      'Power Backup Generator Support',
      'Daily Housekeeping'
    ],
    popular: false,
  }
];

export const FACILITIES_DATA: Facility[] = [
  {
    id: 'comfort-rooms',
    title: 'Comfortable Executive Rooms',
    description: 'Acoustically insulated, temperature controlled rooms with plush bedding, pristine linens, and high-speed Wi-Fi.',
    iconName: 'BedDouble',
    tag: 'Hospitality',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'restaurant-dining',
    title: 'In-House Dining & Restaurant',
    description: 'Savor authentic Pakistani cuisine, traditional BBQ, karahi, and fresh breakfast cooked by experienced chefs.',
    iconName: 'Utensils',
    tag: 'Culinary',
    image: 'https://i.pinimg.com/736x/10/51/b6/1051b6a145622940dd3a8847c9af66ca.jpg'
  },
  {
    id: 'wifi',
    title: 'High-Speed Fiber Wi-Fi',
    description: 'Seamless wireless broadband coverage across all guest rooms, lobby, and dining areas for work or leisure.',
    iconName: 'Wifi',
    tag: 'Technology',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'parking',
    title: 'Secure On-Site Parking',
    description: 'Spacious guarded parking space with 24/7 security surveillance for all guests staying or visiting the hotel.',
    iconName: 'Car',
    tag: 'Convenience',
    image: 'https://images.unsplash.com/photo-1506521782020-185d6581814b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'room-service',
    title: '24/7 Express Room Service',
    description: 'Prompt in-room dining, fresh tea, snacks, and housekeeping available anytime with a quick tap of your phone.',
    iconName: 'Clock',
    tag: 'Service',
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'reception',
    title: '24/7 Front Desk & Concierge',
    description: 'Our hospitable team at Saleemi Chowk is available around the clock to assist with check-ins, luggage, and taxi booking.',
    iconName: 'UserCheck',
    tag: 'Support',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'power-backup',
    title: 'Uninterrupted Power Generator',
    description: 'Automatic heavy-duty power generator backup ensures continuous AC, lighting, and elevator operations.',
    iconName: 'Zap',
    tag: 'Reliability',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'hall-events',
    title: 'Event & Conference Hosting',
    description: 'Well-appointed spaces for corporate meetings, intimate family gatherings, and executive dinners.',
    iconName: 'Users',
    tag: 'Events',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800'
  }
];


export const TESTIMONIALS_DATA: Review[] = [
  {
    id: 'r1',
    author: 'Tariq Mehmood',
    location: 'Lahore, Pakistan',
    rating: 5,
    date: 'August 2026',
    comment: 'Sandal Bar Hotel exceeded our expectations during our business trip to Faisalabad. Clean rooms, polite staff, and location at Saleemi Chowk is extremely convenient.',
    roomType: 'Executive Deluxe Room'
  },
  {
    id: 'r2',
    author: 'Dr. Ayesha Malik',
    location: 'Islamabad, Pakistan',
    rating: 5,
    date: 'July 2026',
    comment: 'Stayed with family for a wedding in People’s Colony. The Royal Family Suite was spacious and spotless. 24/7 room service and delicious food made our stay wonderful!',
    roomType: 'Royal Family Suite'
  },
  {
    id: 'r3',
    author: 'Muhammad Hamza',
    location: 'Karachi, Pakistan',
    rating: 5,
    date: 'September 2026',
    comment: 'Best hotel value in Faisalabad! Generator backup is 100% smooth, Wi-Fi speed was super fast, and phone contact support (+923229666638) responded instantly when we booked.',
    roomType: 'Standard Business Room'
  }
];

export const FAQS_DATA = [
  {
    q: 'Where is Sandal Bar Hotel located in Faisalabad?',
    a: "Sandal Bar Hotel is located at Saleemi Chowk, 594B People's Colony, Satiana Road, Block B People's Colony No. 1, Faisalabad, Pakistan. It is easily accessible from main city roads."
  },
  {
    q: 'How can I book a room at Sandal Bar Hotel?',
    a: 'You can book directly through our website booking form or call our front desk directly at +923229666638 for immediate room availability and group booking rates.'
  },
  {
    q: 'What are the check-in and check-out times?',
    a: 'Standard check-in time is 02:00 PM and check-out time is 12:00 PM (noon). Early check-in or late check-out can be requested depending on room availability.'
  },
  {
    q: 'Is parking available on-site?',
    a: 'Yes, we provide free secured guest parking monitored by 24/7 hotel security.'
  },
  {
    q: 'Does the hotel provide power backup during outages?',
    a: 'Yes! We operate heavy-duty automatic power backup generators ensuring uninterrupted air conditioning, lighting, and hot water at all times.'
  },
  {
    q: 'Is room service available 24/7?',
    a: 'Yes, our front desk and kitchen room service operates 24 hours a day, 7 days a week.'
  }
];
