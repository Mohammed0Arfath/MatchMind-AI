import type { CongestionLevel, Timestamp } from './common';

export interface CrowdMetrics {
  timestamp: Timestamp;
  totalOccupancy: number;
  capacityPercentage: number;
  entryRate: number;
  exitRate: number;
  avgQueueMinutes: number;
  peakQueueMinutes: number;
  densityByZone: ZoneDensity[];
  predictions: CrowdPrediction[];
}

export interface ZoneDensity {
  zoneId: string;
  zoneName: string;
  density: number; // 0-1
  congestionLevel: CongestionLevel;
  trend: 'increasing' | 'stable' | 'decreasing';
  personCount: number;
}

export interface CrowdPrediction {
  timeOffset: number; // minutes from now
  predictedOccupancy: number;
  predictedEntryRate: number;
  predictedExitRate: number;
  confidence: number; // 0-1
  reasoning: string;
}

export interface CrowdHistoryPoint {
  timestamp: Timestamp;
  occupancy: number;
  entryRate: number;
  exitRate: number;
}

export interface QueueMetrics {
  gateId: string;
  gateName: string;
  currentLength: number;
  estimatedWaitMinutes: number;
  throughputPerMinute: number;
  trend: 'increasing' | 'stable' | 'decreasing';
}
