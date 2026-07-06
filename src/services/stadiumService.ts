import { mockFetch } from './api';
import { defaultStadium } from '../data/stadiums';
import type { Stadium } from '../types';

export const stadiumService = {
  getDefaultStadium: (): Promise<Stadium> => {
    return mockFetch(defaultStadium);
  },
  getStadiumById: (id: string): Promise<Stadium> => {
    return mockFetch(defaultStadium); // Mock: always return default
  }
};
