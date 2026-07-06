import { useState, useEffect } from 'react';
import { stadiumService } from '../services/stadiumService';
import type { Stadium } from '../types';

export function useStadium() {
  const [stadium, setStadium] = useState<Stadium | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let mounted = true;
    stadiumService.getDefaultStadium()
      .then(data => {
        if (mounted) {
          setStadium(data);
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
  }, []);

  return { stadium, loading, error };
}
