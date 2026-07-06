import { useState, useEffect } from 'react';
import { crowdService } from '../services/crowdService';
import type { CrowdMetrics, CrowdHistoryPoint, QueueMetrics } from '../types';

export function useCrowdMetrics() {
  const [metrics, setMetrics] = useState<CrowdMetrics | null>(null);
  const [history, setHistory] = useState<CrowdHistoryPoint[]>([]);
  const [queue, setQueue] = useState<QueueMetrics[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let mounted = true;
    
    Promise.all([
      crowdService.getCurrentMetrics(),
      crowdService.getHistory(),
      crowdService.getQueueMetrics()
    ])
    .then(([metricsData, historyData, queueData]) => {
      if (mounted) {
        setMetrics(metricsData);
        setHistory(historyData);
        setQueue(queueData);
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

  return { metrics, history, queue, loading, error };
}
