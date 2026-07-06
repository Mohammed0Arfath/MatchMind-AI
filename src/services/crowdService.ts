import { mockFetch } from './api';
import { currentCrowdMetrics, crowdHistory, queueMetrics } from '../data/crowds';
import type { CrowdMetrics, CrowdHistoryPoint, QueueMetrics } from '../types';

export const crowdService = {
  getCurrentMetrics: (): Promise<CrowdMetrics> => {
    return mockFetch(currentCrowdMetrics);
  },
  getHistory: (): Promise<CrowdHistoryPoint[]> => {
    return mockFetch(crowdHistory);
  },
  getQueueMetrics: (): Promise<QueueMetrics[]> => {
    return mockFetch(queueMetrics);
  }
};
