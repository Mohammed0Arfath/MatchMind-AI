import React, { useState, useEffect } from 'react';
import { Card, CardHeader } from '../../components/ui/Card';
import { MetricCard } from '../dashboard/components/MetricCard';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { currentCrowdMetrics, crowdHistory } from '../../data/crowds';
import { formatNumber, formatTime } from '../../utils/format';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer,
  BarChart, Bar, Legend
} from 'recharts';
import { Users, Activity, TrendingUp, DoorOpen, Clock, AlertTriangle } from 'lucide-react';
import './CrowdDashboard.css';

export function CrowdDashboard() {
  const [data, setData] = useState(crowdHistory);
  const current = currentCrowdMetrics;

  // Real-time simulation (purely visual for the demo)
  useEffect(() => {
    const timer = setInterval(() => {
      setData(prev => {
        const last = prev[prev.length - 1];
        const newEntry = {
          ...last,
          timestamp: last.timestamp + 5 * 60000,
          occupancy: Math.min(82500, last.occupancy + Math.floor(Math.random() * 200 - 50)),
          entryRate: Math.max(0, last.entryRate + Math.floor(Math.random() * 10 - 5)),
          exitRate: Math.max(0, last.exitRate + Math.floor(Math.random() * 5 - 2)),
        };
        return [...prev.slice(1), newEntry];
      });
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const chartData = data.map(d => ({
    time: formatTime(d.timestamp),
    occupancy: d.occupancy,
    entry: d.entryRate,
  }));

  return (
    <div className="crowd-dashboard">
      <div className="crowd-dashboard__header">
        <div>
          <h2 className="crowd-dashboard__title">Crowd Intelligence</h2>
          <p className="crowd-dashboard__subtitle">Real-time density, flow, and predictive analytics</p>
        </div>
        <div className="crowd-dashboard__actions">
          <Button variant="secondary" size="sm">Export Report</Button>
          <Button variant="primary" size="sm">Adjust Capacity Limits</Button>
        </div>
      </div>

      <div className="crowd-dashboard__metrics">
        <MetricCard
          label="Current Occupancy"
          value={formatNumber(current.totalOccupancy)}
          change={1.2}
          icon={<Users size={15} />}
          variant="default"
        />
        <MetricCard
          label="Fill Rate"
          value={`${current.entryRate} / min`}
          change={-5.4}
          icon={<TrendingUp size={15} />}
          variant="warning"
        />
        <MetricCard
          label="Avg Queue Time"
          value={`${current.avgQueueMinutes.toFixed(1)} min`}
          change={8.3}
          icon={<Clock size={15} />}
          variant="danger"
        />
        <MetricCard
          label="Predicted Peak"
          value="78,400"
          changeLabel="at 19:45"
          icon={<Activity size={15} />}
          variant="accent"
        />
      </div>

      <div className="crowd-dashboard__grid">
        <Card padding="md" className="crowd-dashboard__span-2">
          <CardHeader title="Occupancy Trend & Prediction" subtitle="Live tracking vs predictive model" icon={<Activity size={16} />} />
          <div className="crowd-dashboard__chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorOccupancy" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-accent)" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="var(--color-accent)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-border-secondary)" />
                <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'var(--color-text-tertiary)' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'var(--color-text-tertiary)' }} />
                <RechartsTooltip 
                  contentStyle={{ background: 'var(--color-bg-secondary)', border: '1px solid var(--color-border-primary)', borderRadius: 'var(--radius-md)' }}
                  itemStyle={{ color: 'var(--color-text-primary)', fontSize: '14px', fontWeight: 600 }}
                  labelStyle={{ color: 'var(--color-text-tertiary)', fontSize: '12px', marginBottom: '4px' }}
                />
                <Area type="monotone" dataKey="occupancy" name="Occupancy" stroke="var(--color-accent)" strokeWidth={3} fillOpacity={1} fill="url(#colorOccupancy)" isAnimationActive={false} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card padding="md">
          <CardHeader title="Entry Flow Rate" subtitle="Throughput across all gates" icon={<DoorOpen size={16} />} />
          <div className="crowd-dashboard__chart-container">
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={chartData.slice(-12)} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-border-secondary)" />
                <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: 'var(--color-text-tertiary)' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: 'var(--color-text-tertiary)' }} />
                <RechartsTooltip cursor={{ fill: 'var(--color-bg-tertiary)' }} contentStyle={{ background: 'var(--color-bg-secondary)', border: '1px solid var(--color-border-primary)', borderRadius: 'var(--radius-md)' }} />
                <Bar dataKey="entry" name="Entry Rate (per min)" fill="var(--color-success)" radius={[4, 4, 0, 0]} isAnimationActive={false} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card padding="md">
          <CardHeader title="Zone Density Alerts" subtitle="Areas approaching critical capacity" icon={<AlertTriangle size={16} />} />
          <div className="crowd-dashboard__alerts">
            {current.densityByZone
              .filter(z => z.density > 0.7)
              .sort((a, b) => b.density - a.density)
              .map(zone => (
                <div key={zone.zoneId} className="crowd-dashboard__alert">
                  <div className="crowd-dashboard__alert-info">
                    <span className="crowd-dashboard__alert-zone">{zone.zoneName}</span>
                    <span className="crowd-dashboard__alert-trend">Trend: {zone.trend.toUpperCase()}</span>
                  </div>
                  <div className="crowd-dashboard__alert-status">
                    <Badge variant={zone.density > 0.85 ? 'danger' : 'warning'} size="sm">
                      {Math.round(zone.density * 100)}% DENSITY
                    </Badge>
                  </div>
                </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
