import type { CongestionLevel, Coordinates } from './common';

export interface Stadium {
  id: string;
  name: string;
  city: string;
  state: string;
  country: string;
  capacity: number;
  gates: Gate[];
  sections: Section[];
  facilities: Facility[];
  parkingLots: ParkingLot[];
  coordinates: { lat: number; lng: number };
  imageUrl?: string;
}

export interface Gate {
  id: string;
  name: string;
  type: 'general' | 'vip' | 'accessible' | 'staff' | 'emergency';
  position: Coordinates;
  direction: string;
  congestionLevel: CongestionLevel;
  currentThroughput: number;
  maxThroughput: number;
  queueLength: number;
  estimatedWaitMinutes: number;
  isOpen: boolean;
  isAccessible: boolean;
}

export interface Section {
  id: string;
  name: string;
  level: 'lower' | 'middle' | 'upper' | 'suite';
  capacity: number;
  currentOccupancy: number;
  position: Coordinates;
  gates: string[];
  isAccessible: boolean;
}

export type FacilityType =
  | 'restroom'
  | 'food_court'
  | 'first_aid'
  | 'information'
  | 'merchandise'
  | 'atm'
  | 'prayer_room'
  | 'family_zone'
  | 'water_station';

export interface Facility {
  id: string;
  name: string;
  type: FacilityType;
  position: Coordinates;
  level: string;
  isAccessible: boolean;
  isOpen: boolean;
  waitTimeMinutes: number;
  status: 'available' | 'busy' | 'closed' | 'maintenance';
  nearestGate: string;
}

export interface ParkingLot {
  id: string;
  name: string;
  capacity: number;
  occupied: number;
  type: 'general' | 'vip' | 'accessible' | 'staff' | 'bus';
  distanceToGateMinutes: number;
  nearestGate: string;
  priceUSD: number;
}

export interface StadiumState {
  stadiumId: string;
  timestamp: number;
  totalOccupancy: number;
  entryRate: number; // per minute
  exitRate: number;
  avgQueueMinutes: number;
  activeIncidents: number;
  staffDeployed: number;
  temperature: number;
  weatherCondition: string;
  windSpeed: number;
  humidity: number;
}
