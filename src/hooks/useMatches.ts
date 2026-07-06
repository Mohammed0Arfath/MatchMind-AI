import { useState, useEffect } from 'react';
import { matchService } from '../services/matchService';
import type { Match } from '../types';

export function useMatches(type: 'live' | 'upcoming' = 'live') {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);

    const fetcher = type === 'live' 
      ? matchService.getLiveMatches() 
      : matchService.getUpcomingMatches();

    fetcher
      .then(data => {
        if (mounted) {
          setMatches(data);
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
  }, [type]);

  return { matches, loading, error };
}
