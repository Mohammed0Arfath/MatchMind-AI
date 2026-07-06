import { mockFetch } from './api';
import { getLiveMatches, getUpcomingMatches } from '../data/matches';
import type { Match } from '../types';

export const matchService = {
  getLiveMatches: (): Promise<Match[]> => {
    return mockFetch(getLiveMatches());
  },
  getUpcomingMatches: (): Promise<Match[]> => {
    return mockFetch(getUpcomingMatches());
  }
};
