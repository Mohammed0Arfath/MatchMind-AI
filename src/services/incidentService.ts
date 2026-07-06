import { mockFetch } from './api';
import { incidents, getActiveIncidents } from '../data/incidents';
import type { Incident } from '../types';

export const incidentService = {
  getAllIncidents: (): Promise<Incident[]> => {
    return mockFetch(incidents);
  },
  getActiveIncidents: (): Promise<Incident[]> => {
    return mockFetch(getActiveIncidents());
  }
};
