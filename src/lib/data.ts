export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  image: string;
  images?: string[];
  featured?: boolean;
  tags?: string[];
  description?: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Neighborhood {
  name: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export const properties: Property[] = [
  {
    id: '1',
    title: 'Boulevard Point',
    location: 'Downtown Dubai',
    price: 'AED 95,000/yr',
    bedrooms: 2,
    bathrooms: 2,
    area: '1,450 sq.ft',
    image: '/images/boulevard_1.jpg',
    images: [
      '/images/boulevard_1.jpg',
      '/images/boulevard_2.jpg',
      '/images/boulevard_3.jpg',
      '/images/4855c0_542c99544299499fbf31f9d2b7a80623~mv2.jpg',
      '/images/4855c0_f1edb2a4054947a6a05fb35f1ad7989b~mv2.jpg',
      '/images/4855c0_520a8fcc1e324ff18e762d3dbd002aa8~mv2.jpg',
    ],
    featured: true,
    tags: ['Converted', 'Fully Furnished', 'High Floor'],
    description: 'Converted 2 Bedrooms, 2 Bathrooms, Fully furnished, High floor, 100 percent Vastu compliant, Burj Khalifa and city views'
  },
  {
    id: '2',
    title: 'Sky Gardens',
    location: 'DIFC, Dubai',
    price: 'AED 135,000/yr',
    bedrooms: 2,
    bathrooms: 2,
    area: '1,277 sq.ft',
    image: '/images/skygardens_1.jpg',
    images: [
      '/images/skygardens_1.jpg',
      '/images/skygardens_2.jpg',
      '/images/skygardens_3.jpg',
      '/images/4855c0_256e36c807834360ae7081f328fee602~mv2.jpg',
      '/images/4855c0_788cdb6b6a884383a69eddf8970490fe~mv2.jpg',
      '/images/4855c0_91c483ade7c3413b87e2f7ec5e484c09~mv2.jpg',
    ],
    featured: true,
    tags: ['Built-up', 'Fully Furnished', 'Strong ROI'],
    description: '2 Bedrooms, Built up area approximately 1,277 sqft, Fully Furnished, Zabeel Palace view, Strong rental ROI, Upgraded'
  },
  {
    id: '3',
    title: 'Arabian Ranches 3 (June)',
    location: 'Arabian Ranches 3',
    price: 'AED 175,000/yr',
    bedrooms: 4,
    bathrooms: 4,
    area: '3,229 sq.ft',
    image: '/images/arabianranches_1.jpg',
    images: [
      '/images/arabianranches_1.jpg',
      '/images/arabianranches_2.jpg',
      '/images/arabianranches_3.jpg',
      '/images/4855c0_9ff3805417e2487692481e3f7ec7049f~mv2.jpg',
      '/images/4855c0_27e0581ac02e433880c2476036950a4c~mv2.jpg',
      '/images/4855c0_7280302f902e4907b045d8643ee1e3f3~mv2.jpg',
    ],
    featured: true,
    tags: ['Built-up', 'Rented', 'Community View'],
    description: '4 Bedrooms + Extra Living Room + Maid\'s Room, Built-up Area: 3,229.17 sq. ft., Modern layout with high-end finishes, Separate wet & dry kitchens, Private garden, Community view'
  },
  {
    id: '4',
    title: 'Luxury Apartment in Downtown',
    location: 'Downtown Dubai',
    price: 'AED 1,850,000',
    bedrooms: 2,
    bathrooms: 2,
    area: '1,450 sq.ft',
    image: '/images/4855c0_3fb92699af984bf884b3b0493502e3b1~mv2.jpg',
    tags: ['Burj Khalifa View', 'Premium Location'],
    description: 'Direct Burj Khalifa view drives premium rental rates. Prime Downtown Dubai address with unmatched visibility and lifestyle appeal.'
  },
  {
    id: '5',
    title: 'Modern Villa in Arabian Ranches',
    location: 'Arabian Ranches 3',
    price: 'AED 2,950,000',
    bedrooms: 4,
    bathrooms: 5,
    area: '3,200 sq.ft',
    image: '/images/4855c0_245ad2c843aa451090018abf734de94b~mv2.jpg',
    tags: ['Family Friendly', 'Community'],
    description: 'Arabian Ranches 3 June - Cosmopolitan Environment with modern infrastructure and safety features.'
  },
  {
    id: '6',
    title: 'Marina Heights Penthouse',
    location: 'Dubai Marina',
    price: 'AED 4,500,000',
    bedrooms: 4,
    bathrooms: 4,
    area: '3,800 sq.ft',
    image: '/images/4855c0_5d6dc90625104b2bb980d3436e54aa7b~mv2.jpg',
    tags: ['Marina View', 'Luxury'],
  },
  {
    id: '7',
    title: 'Dubai Hills Mansion',
    location: 'Dubai Hills Estate',
    price: 'AED 8,900,000',
    bedrooms: 6,
    bathrooms: 7,
    area: '8,500 sq.ft',
    image: '/images/4855c0_5155c360079a46dfb6e06fcf314d5742~mv2.jpg',
    tags: ['Dubai Hills', 'Exclusive'],
  },
  {
    id: '8',
    title: 'Palm Jumeirah Beach Villa',
    location: 'Palm Jumeirah',
    price: 'AED 12,500,000',
    bedrooms: 5,
    bathrooms: 6,
    area: '6,000 sq.ft',
    image: '/images/4855c0_164ece41c7c5437193ad0bce817ab9a0~mv2.jpg',
    tags: ['Beachfront', 'Private Beach'],
  },
  {
    id: '9',
    title: 'Business Bay Commercial',
    location: 'Business Bay',
    price: 'AED 1,200,000',
    bedrooms: 1,
    bathrooms: 1,
    area: '950 sq.ft',
    image: '/images/4855c0_410465e66f5e47539bf049f48d7e067a~mv2.jpg',
    tags: ['Commercial', 'Office Space'],
  },
  {
    id: '10',
    title: 'Dubai South Investment Villa',
    location: 'Dubai South',
    price: 'AED 1,950,000',
    bedrooms: 3,
    bathrooms: 3,
    area: '2,400 sq.ft',
    image: '/images/4855c0_520a8fcc1e324ff18e762d3dbd002aa8~mv2.jpg',
    tags: ['Off Plan', 'High Capital Gain'],
  },
];

export const services: Service[] = [
  {
    title: 'Buying & Selling',
    description: 'Expert guidance through every step of buying or selling your dream property in Dubai.',
    icon: 'Home',
  },
  {
    title: 'Leasing & Renting',
    description: 'Find the perfect tenant or discover your ideal rental property with our comprehensive leasing services.',
    icon: 'Key',
  },
  {
    title: 'Investment Advisory',
    description: 'Strategic insights and market analysis to maximize your real estate investment returns.',
    icon: 'TrendingUp',
  },
  {
    title: 'Property Management',
    description: 'Full-service property management including maintenance, tenant relations, and financial reporting.',
    icon: 'Building',
  },
];

export const neighborhoods: Neighborhood[] = [
  { name: 'Downtown Dubai', description: 'The heart of Dubai with Burj Khalifa and Dubai Mall' },
  { name: 'Dubai Marina', description: 'Waterfront living with stunning views and vibrant nightlife' },
  { name: 'Palm Jumeirah', description: 'Iconic island living with exclusive beachfront properties' },
  { name: 'Dubai Hills Estate', description: 'Family-friendly community with golf course and parks' },
  { name: 'Business Bay', description: 'Prime commercial hub with excellent connectivity' },
  { name: 'DIFC', description: 'Financial district with premium residential options' },
];

export const teamMembers: TeamMember[] = [
  // Owners - Top Row
  { name: 'Aresha Arif', role: 'Partner & Downtown Specialist', image: '/images/aresha_arif_owner.jpg' },
  { name: 'Arif Ahmed', role: 'Co-founder & Creek Harbour Specialist', image: '/images/arif_ahmed_owner.jpg' },
  // Property Consultants - Bottom Row
  { name: 'Jacob Martis', role: 'Property Consultant', image: '/images/openart-image_vH9RjfW8_1722901157516_raw.jpg' },
  { name: 'Fay Guzman', role: 'Property Consultant', image: '/images/openart-image_LLHTl9Ha_1722900761544_raw.jpg' },
  { name: 'Raheel Surti', role: 'Property Consultant', image: '/images/openart-image_pOlOF7Nh_1722900839764_raw.jpg' },
  { name: 'Maria Santos', role: 'Property Consultant', image: '/images/openart-image_O2wpQ37F_1722901211707_raw.jpg' },
  { name: 'Rehan Shah', role: 'Property Consultant', image: '/images/openart-image_GkYBn8F6_1722901147044_raw.jpg' },
  { name: 'Hannah Martinez', role: 'Property Consultant', image: '/images/openart-image_McdgQayN_1722901087050_raw.jpg' },
  { name: 'Tara Singh', role: 'Property Consultant', image: '/images/openart-image_RqbadDZc_1722900972864_raw.jpg' },
];

export const investmentBenefits = [
  { title: '10 Years Golden Visa', icon: 'Award' },
  { title: '100% Vastu Compliant', icon: 'CheckCircle' },
  { title: 'No Income Tax', icon: 'DollarSign' },
  { title: 'No Property Tax', icon: 'Percent' },
  { title: 'High Capital Gain', icon: 'TrendingUp' },
  { title: '24/7 Security & CCTV', icon: 'Shield' },
];