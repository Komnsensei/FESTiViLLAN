import { Festival, POI, HeatmapData, UserProfile } from './types';

export const FESTIVALS: Festival[] = [
  {
    id: 'shambhala',
    name: 'Shambhala Music Festival',
    location: 'Salmo River Ranch, BC, Canada',
    dates: 'July 26 - 29, 2024',
    imageUrl: 'https://picsum.photos/800/400?random=1',
    status: 'Upcoming',
    pricing: 'Tier 3: $525 CAD',
    description: 'Canada\'s premiere electronic music festival. No corporate sponsorship, just pure vibes on the farm.',
    lineup: ['Excision', 'Zeds Dead', 'Subtronics', 'CloZee', 'LSDREAM', 'Tipper']
  },
  {
    id: 'burningman',
    name: 'Burning Man',
    location: 'Black Rock City, NV, USA',
    dates: 'Aug 25 - Sep 2, 2024',
    imageUrl: 'https://picsum.photos/800/400?random=2',
    status: 'Upcoming',
    pricing: 'Main Sale: $575 USD',
    description: 'A temporary metropolis dedicated to community, art, self-expression, and self-reliance.',
    lineup: ['Carl Cox', 'Diplo', 'Rufus Du Sol (DJ Set)', 'Tycho', 'Infected Mushroom']
  },
  {
    id: 'edc',
    name: 'EDC Las Vegas',
    location: 'Las Vegas Motor Speedway, NV',
    dates: 'May 17 - 19, 2024',
    imageUrl: 'https://picsum.photos/800/400?random=3',
    status: 'Active',
    pricing: 'GA: Sold Out | VIP: $999 USD',
    description: 'Under the Electric Sky. The largest electronic dance music festival in North America.',
    lineup: ['Martin Garrix', 'Illenium', 'John Summit', 'Dom Dolla', 'Alison Wonderland']
  },
  {
    id: 'tomorrowland',
    name: 'Tomorrowland',
    location: 'Boom, Belgium',
    dates: 'July 19 - 28, 2024',
    imageUrl: 'https://picsum.photos/800/400?random=4',
    status: 'Upcoming',
    pricing: 'Full Madness: €355',
    description: 'The world\'s largest and most notable electronic music festival.',
    lineup: ['David Guetta', 'Armin van Buuren', 'Amelie Lens', 'Charlotte de Witte', 'Tale Of Us']
  }
];

// Coordinates updated to match the new structured SVG map layout
export const MOCK_POIS: POI[] = [
  { id: '7', type: 'stage', name: 'Neon Circuit Stage', distance: '200m', coordinates: { x: 50, y: 15 } },
  { id: '8', type: 'stage', name: 'Bass Crater', distance: '450m', coordinates: { x: 85, y: 45 } },
  { id: '9', type: 'stage', name: 'Quantum Valley', distance: '320m', coordinates: { x: 15, y: 45 } },
  { id: '1', type: 'medic', name: 'Main Medical Tent', distance: '150m', coordinates: { x: 35, y: 30 } },
  { id: '2', type: 'water', name: 'Central Hydration', distance: '50m', coordinates: { x: 50, y: 50 } },
  { id: '5', type: 'food', name: 'Spicy Pie Pizza', distance: '120m', coordinates: { x: 65, y: 30 } },
  { id: '3', type: 'washroom', name: 'Porta-Potties East', distance: '80m', coordinates: { x: 70, y: 70 } },
  { id: '4', type: 'chill', name: 'Zen Garden Sanctuary', distance: '300m', coordinates: { x: 30, y: 70 } },
  { id: '6', type: 'meetup', name: 'The Giant Mushroom Art Car', distance: '400m', coordinates: { x: 50, y: 70 } },
];

export const MOCK_HEATMAP: HeatmapData[] = [
  { x: 50, y: 15, intensity: 'high' }, // Neon Circuit crowd
  { x: 85, y: 45, intensity: 'high' }, // Bass Crater crowd
  { x: 15, y: 45, intensity: 'medium' }, // Quantum Valley crowd
  { x: 50, y: 50, intensity: 'medium' }, // Central Hub
  { x: 65, y: 30, intensity: 'low' }, // Food area
];

export const MOCK_USER: UserProfile = {
  name: 'Alex Rave',
  raveName: 'Neon Nomad',
  bio: 'Chasing bass drops across the galaxy. PLUR protocol engaged. 🌌✨',
  connections: 42,
  emergencyContactName: 'Sarah Rave (Sister)',
  emergencyContactPhone: '+1 (555) 019-8372',
  medicalInfo: 'Allergic to Penicillin. Asthma (carries inhaler).',
  bloodType: 'O+',
  avatarUrl: 'https://picsum.photos/200/200?random=99',
  auraColor: '#00f0ff'
};
