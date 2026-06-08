export interface Festival {
  id: string;
  name: string;
  location: string;
  dates: string;
  imageUrl: string;
  status: 'Upcoming' | 'Active' | 'Ended';
  pricing: string;
  description: string;
  lineup: string[];
}

export interface POI {
  id: string;
  type: 'water' | 'medic' | 'food' | 'washroom' | 'chill' | 'meetup' | 'stage';
  name: string;
  distance: string; // Simulated distance
  coordinates: { x: number; y: number }; // Percentage 0-100 for tactical map positioning
}

export interface HeatmapData {
  x: number;
  y: number;
  intensity: 'high' | 'medium' | 'low';
}

export interface UserProfile {
  name: string;
  raveName: string;
  bio: string;
  connections: number;
  emergencyContactName: string;
  emergencyContactPhone: string;
  medicalInfo: string;
  bloodType: string;
  avatarUrl: string;
  auraColor: string;
}
