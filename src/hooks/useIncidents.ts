import { useState, useEffect } from 'react';
import { incidentService } from '../services/incidentService';
import type { Incident } from '../types';

export function useIncidents(activeOnly: boolean = false) {
  const [incidents, setIncidents] = useState<Incident[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);

    const fetcher = activeOnly 
      ? incidentService.getActiveIncidents() 
      : incidentService.getAllIncidents();

    fetcher
      .then(data => {
        if (mounted) {
          setIncidents(data);
          setLoading(false);
        }
      })
      .catch(err => {
        if (mounted) {
          setError(err);
          setLoading(false);
        }
      });
    
    return () => { mounted = false; };
  }, [activeOnly]);

  return { incidents, loading, error };
}
