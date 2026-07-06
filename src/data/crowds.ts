import type { CrowdHistoryPoint, CrowdMetrics, QueueMetrics, ZoneDensity } from '../types';

const now = Date.now();
const MIN = 60_000;

export const currentCrowdMetrics: CrowdMetrics = {
  timestamp: now,
  totalOccupancy: 68450,
  capacityPercentage: 0.83,
  entryRate: 142,
  exitRate: 28,
  avgQueueMinutes: 6.2,
  peakQueueMinutes: 14,
  densityByZone: [
    { zoneId: 'north', zoneName: 'North Stand', density: 0.78, congestionLevel: 'moderate', trend: 'increasing', personCount: 14200 },
    { zoneId: 'south', zoneName: 'South Stand', density: 0.62, congestionLevel: 'low', trend: 'stable', personCount: 11800 },
    { zoneId: 'east', zoneName: 'East Stand', density: 0.91, congestionLevel: 'high', trend: 'increasing', personCount: 18500 },
    { zoneId: 'west', zoneName: 'West Stand', density: 0.72, congestionLevel: 'moderate', trend: 'decreasing', personCount: 13200 },
    { zoneId: 'concourse-n', zoneName: 'North Concourse', density: 0.55, congestionLevel: 'low', trend: 'stable', personCount: 3400 },
    { zoneId: 'concourse-s', zoneName: 'South Concourse', density: 0.38, congestionLevel: 'low', trend: 'decreasing', personCount: 2100 },
    { zoneId: 'concourse-e', zoneName: 'East Concourse', density: 0.82, congestionLevel: 'high', trend: 'increasing', personCount: 4200 },
    { zoneId: 'concourse-w', zoneName: 'West Concourse', density: 0.45, congestionLevel: 'low', trend: 'stable', personCount: 2800 },
  ],
  predictions: [
    { timeOffset: 10, predictedOccupancy: 72100, predictedEntryRate: 160, predictedExitRate: 25, confidence: 0.92, reasoning: 'Match kickoff in 15 minutes. Historical data shows 18% entry surge in final 20 minutes before kickoff.' },
    { timeOffset: 20, predictedOccupancy: 78300, predictedEntryRate: 95, predictedExitRate: 12, confidence: 0.87, reasoning: 'Near-capacity as match starts. Entry rate normalizes post-kickoff. Minimal exits expected during first 15 minutes of play.' },
    { timeOffset: 60, predictedOccupancy: 79800, predictedEntryRate: 15, predictedExitRate: 8, confidence: 0.82, reasoning: 'Steady state during first half. Minor exits for concourse facilities. Late arrivals trickle in.' },
    { timeOffset: 75, predictedOccupancy: 74200, predictedEntryRate: 5, predictedExitRate: 85, confidence: 0.78, reasoning: 'Half-time break. Significant movement to concourse for food and restrooms. Expect 7-8% temporary density shift.' },
    { timeOffset: 120, predictedOccupancy: 62500, predictedEntryRate: 2, predictedExitRate: 280, confidence: 0.74, reasoning: 'Post-match exodus beginning. Peak exit rate expected 5-10 minutes after final whistle. Gate C and D will see highest volume.' },
  ],
};

// Historical data for charts — last 2 hours in 5-minute intervals
export const crowdHistory: CrowdHistoryPoint[] = Array.from({ length: 24 }, (_, i) => {
  const minutesAgo = (23 - i) * 5;
  const baseOccupancy = 25000 + (i * 1800) + Math.random() * 1200;
  const entryRate = Math.max(20, 180 - i * 3 + Math.random() * 30);
  const exitRate = Math.max(5, 10 + Math.random() * 15);

  return {
    timestamp: now - minutesAgo * MIN,
    occupancy: Math.round(Math.min(baseOccupancy, 82500)),
    entryRate: Math.round(entryRate),
    exitRate: Math.round(exitRate),
  };
});

export const queueMetrics: QueueMetrics[] = [
  { gateId: 'gate-a', gateName: 'Gate A', currentLength: 320, estimatedWaitMinutes: 8, throughputPerMinute: 42, trend: 'stable' },
  { gateId: 'gate-b', gateName: 'Gate B', currentLength: 580, estimatedWaitMinutes: 14, throughputPerMinute: 65, trend: 'increasing' },
  { gateId: 'gate-c', gateName: 'Gate C', currentLength: 120, estimatedWaitMinutes: 3, throughputPerMinute: 28, trend: 'decreasing' },
  { gateId: 'gate-d', gateName: 'Gate D', currentLength: 85, estimatedWaitMinutes: 2, throughputPerMinute: 35, trend: 'stable' },
  { gateId: 'gate-vip', gateName: 'VIP', currentLength: 15, estimatedWaitMinutes: 1, throughputPerMinute: 12, trend: 'stable' },
  { gateId: 'gate-accessible', gateName: 'Accessible', currentLength: 10, estimatedWaitMinutes: 1, throughputPerMinute: 8, trend: 'stable' },
];
