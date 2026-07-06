import type { Stadium } from '../types';

export const stadiums: Stadium[] = [
  {
    id: 'metlife',
    name: 'MetLife Stadium',
    city: 'East Rutherford',
    state: 'New Jersey',
    country: 'USA',
    capacity: 82500,
    coordinates: { lat: 40.8128, lng: -74.0742 },
    gates: [
      { id: 'gate-a', name: 'Gate A', type: 'general', position: { x: 50, y: 5 }, direction: 'North', congestionLevel: 'moderate', currentThroughput: 42, maxThroughput: 80, queueLength: 320, estimatedWaitMinutes: 8, isOpen: true, isAccessible: true },
      { id: 'gate-b', name: 'Gate B', type: 'general', position: { x: 95, y: 35 }, direction: 'East', congestionLevel: 'high', currentThroughput: 65, maxThroughput: 80, queueLength: 580, estimatedWaitMinutes: 14, isOpen: true, isAccessible: false },
      { id: 'gate-c', name: 'Gate C', type: 'general', position: { x: 50, y: 95 }, direction: 'South', congestionLevel: 'low', currentThroughput: 28, maxThroughput: 80, queueLength: 120, estimatedWaitMinutes: 3, isOpen: true, isAccessible: true },
      { id: 'gate-d', name: 'Gate D', type: 'general', position: { x: 5, y: 35 }, direction: 'West', congestionLevel: 'low', currentThroughput: 35, maxThroughput: 80, queueLength: 85, estimatedWaitMinutes: 2, isOpen: true, isAccessible: false },
      { id: 'gate-vip', name: 'VIP Entrance', type: 'vip', position: { x: 5, y: 65 }, direction: 'West', congestionLevel: 'low', currentThroughput: 12, maxThroughput: 30, queueLength: 15, estimatedWaitMinutes: 1, isOpen: true, isAccessible: true },
      { id: 'gate-accessible', name: 'Accessible Entry', type: 'accessible', position: { x: 95, y: 65 }, direction: 'East', congestionLevel: 'low', currentThroughput: 8, maxThroughput: 20, queueLength: 10, estimatedWaitMinutes: 1, isOpen: true, isAccessible: true },
      { id: 'gate-staff', name: 'Staff Entrance', type: 'staff', position: { x: 30, y: 95 }, direction: 'South', congestionLevel: 'low', currentThroughput: 5, maxThroughput: 15, queueLength: 0, estimatedWaitMinutes: 0, isOpen: true, isAccessible: true },
      { id: 'gate-emergency-n', name: 'Emergency Exit N', type: 'emergency', position: { x: 70, y: 5 }, direction: 'North', congestionLevel: 'low', currentThroughput: 0, maxThroughput: 120, queueLength: 0, estimatedWaitMinutes: 0, isOpen: false, isAccessible: true },
    ],
    sections: [
      { id: 'sec-100', name: 'Section 100-110', level: 'lower', capacity: 4200, currentOccupancy: 3850, position: { x: 25, y: 30 }, gates: ['gate-a', 'gate-d'], isAccessible: true },
      { id: 'sec-111', name: 'Section 111-120', level: 'lower', capacity: 4200, currentOccupancy: 3600, position: { x: 75, y: 30 }, gates: ['gate-a', 'gate-b'], isAccessible: true },
      { id: 'sec-121', name: 'Section 121-130', level: 'lower', capacity: 4200, currentOccupancy: 4100, position: { x: 75, y: 70 }, gates: ['gate-b', 'gate-c'], isAccessible: true },
      { id: 'sec-131', name: 'Section 131-140', level: 'lower', capacity: 4200, currentOccupancy: 2800, position: { x: 25, y: 70 }, gates: ['gate-c', 'gate-d'], isAccessible: true },
      { id: 'sec-200', name: 'Section 200-220', level: 'middle', capacity: 8400, currentOccupancy: 7200, position: { x: 30, y: 35 }, gates: ['gate-a', 'gate-d'], isAccessible: false },
      { id: 'sec-221', name: 'Section 221-240', level: 'middle', capacity: 8400, currentOccupancy: 6500, position: { x: 70, y: 35 }, gates: ['gate-a', 'gate-b'], isAccessible: false },
      { id: 'sec-300', name: 'Section 300-320', level: 'upper', capacity: 12000, currentOccupancy: 9800, position: { x: 30, y: 65 }, gates: ['gate-c', 'gate-d'], isAccessible: false },
      { id: 'sec-321', name: 'Section 321-340', level: 'upper', capacity: 12000, currentOccupancy: 11200, position: { x: 70, y: 65 }, gates: ['gate-b', 'gate-c'], isAccessible: false },
      { id: 'sec-suites', name: 'Luxury Suites', level: 'suite', capacity: 2500, currentOccupancy: 1800, position: { x: 50, y: 50 }, gates: ['gate-vip'], isAccessible: true },
    ],
    facilities: [
      { id: 'food-1', name: "Jersey Eats", type: 'food_court', position: { x: 20, y: 20 }, level: 'Main', isAccessible: true, isOpen: true, waitTimeMinutes: 12, status: 'busy', nearestGate: 'gate-a' },
      { id: 'food-2', name: 'Stadium Grill', type: 'food_court', position: { x: 80, y: 20 }, level: 'Main', isAccessible: true, isOpen: true, waitTimeMinutes: 8, status: 'available', nearestGate: 'gate-b' },
      { id: 'food-3', name: 'Global Flavors', type: 'food_court', position: { x: 20, y: 80 }, level: 'Main', isAccessible: true, isOpen: true, waitTimeMinutes: 5, status: 'available', nearestGate: 'gate-c' },
      { id: 'food-4', name: 'Quick Bites', type: 'food_court', position: { x: 80, y: 80 }, level: 'Upper', isAccessible: false, isOpen: true, waitTimeMinutes: 18, status: 'busy', nearestGate: 'gate-c' },
      { id: 'rest-1', name: 'Restroom North A', type: 'restroom', position: { x: 35, y: 15 }, level: 'Main', isAccessible: true, isOpen: true, waitTimeMinutes: 4, status: 'busy', nearestGate: 'gate-a' },
      { id: 'rest-2', name: 'Restroom North B', type: 'restroom', position: { x: 65, y: 15 }, level: 'Main', isAccessible: true, isOpen: true, waitTimeMinutes: 2, status: 'available', nearestGate: 'gate-a' },
      { id: 'rest-3', name: 'Restroom East', type: 'restroom', position: { x: 88, y: 50 }, level: 'Main', isAccessible: true, isOpen: true, waitTimeMinutes: 6, status: 'busy', nearestGate: 'gate-b' },
      { id: 'rest-4', name: 'Restroom South', type: 'restroom', position: { x: 50, y: 85 }, level: 'Main', isAccessible: true, isOpen: true, waitTimeMinutes: 1, status: 'available', nearestGate: 'gate-c' },
      { id: 'rest-5', name: 'Restroom West', type: 'restroom', position: { x: 12, y: 50 }, level: 'Main', isAccessible: false, isOpen: false, waitTimeMinutes: 0, status: 'maintenance', nearestGate: 'gate-d' },
      { id: 'med-1', name: 'Medical Station Alpha', type: 'first_aid', position: { x: 15, y: 40 }, level: 'Main', isAccessible: true, isOpen: true, waitTimeMinutes: 0, status: 'available', nearestGate: 'gate-d' },
      { id: 'med-2', name: 'Medical Station Bravo', type: 'first_aid', position: { x: 85, y: 40 }, level: 'Main', isAccessible: true, isOpen: true, waitTimeMinutes: 3, status: 'busy', nearestGate: 'gate-b' },
      { id: 'info-1', name: 'Fan Information Center', type: 'information', position: { x: 50, y: 10 }, level: 'Main', isAccessible: true, isOpen: true, waitTimeMinutes: 2, status: 'available', nearestGate: 'gate-a' },
      { id: 'merch-1', name: 'FIFA Official Store', type: 'merchandise', position: { x: 40, y: 90 }, level: 'Main', isAccessible: true, isOpen: true, waitTimeMinutes: 15, status: 'busy', nearestGate: 'gate-c' },
      { id: 'atm-1', name: 'ATM Station', type: 'atm', position: { x: 60, y: 90 }, level: 'Main', isAccessible: true, isOpen: true, waitTimeMinutes: 3, status: 'available', nearestGate: 'gate-c' },
      { id: 'prayer-1', name: 'Multi-Faith Room', type: 'prayer_room', position: { x: 10, y: 70 }, level: 'Main', isAccessible: true, isOpen: true, waitTimeMinutes: 0, status: 'available', nearestGate: 'gate-d' },
      { id: 'family-1', name: 'Family Zone', type: 'family_zone', position: { x: 90, y: 70 }, level: 'Main', isAccessible: true, isOpen: true, waitTimeMinutes: 0, status: 'available', nearestGate: 'gate-accessible' },
      { id: 'water-1', name: 'Hydration Station North', type: 'water_station', position: { x: 50, y: 18 }, level: 'Main', isAccessible: true, isOpen: true, waitTimeMinutes: 1, status: 'available', nearestGate: 'gate-a' },
      { id: 'water-2', name: 'Hydration Station South', type: 'water_station', position: { x: 50, y: 82 }, level: 'Main', isAccessible: true, isOpen: true, waitTimeMinutes: 0, status: 'available', nearestGate: 'gate-c' },
    ],
    parkingLots: [
      { id: 'lot-a', name: 'Lot A (East)', capacity: 8000, occupied: 6200, type: 'general', distanceToGateMinutes: 8, nearestGate: 'gate-b', priceUSD: 60 },
      { id: 'lot-b', name: 'Lot B (West)', capacity: 6000, occupied: 5800, type: 'general', distanceToGateMinutes: 12, nearestGate: 'gate-d', priceUSD: 45 },
      { id: 'lot-c', name: 'Lot C (South)', capacity: 4000, occupied: 2100, type: 'general', distanceToGateMinutes: 15, nearestGate: 'gate-c', priceUSD: 35 },
      { id: 'lot-vip', name: 'VIP Parking', capacity: 500, occupied: 380, type: 'vip', distanceToGateMinutes: 3, nearestGate: 'gate-vip', priceUSD: 150 },
      { id: 'lot-ada', name: 'Accessible Parking', capacity: 400, occupied: 210, type: 'accessible', distanceToGateMinutes: 4, nearestGate: 'gate-accessible', priceUSD: 40 },
      { id: 'lot-staff', name: 'Staff Parking', capacity: 800, occupied: 640, type: 'staff', distanceToGateMinutes: 5, nearestGate: 'gate-staff', priceUSD: 0 },
    ],
  },
];

export function getStadiumById(id: string): Stadium | undefined {
  return stadiums.find((s) => s.id === id);
}

export const defaultStadium = stadiums[0]!;
