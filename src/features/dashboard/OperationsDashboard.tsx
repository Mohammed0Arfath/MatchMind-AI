import React, { useEffect, useState } from 'react';
import { useAuth } from '../../app/providers/AuthProvider';
import { MetricCard } from './components/MetricCard';
import { AlertsFeed } from './components/AlertsFeed';
import { Card, CardHeader } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { StatusIndicator } from '../../components/ui/StatusIndicator';
import { defaultStadium } from '../../data/stadiums';
import { currentCrowdMetrics, queueMetrics } from '../../data/crowds';
import { getLiveMatches, getUpcomingMatches } from '../../data/matches';
import { formatNumber, formatCountdown, formatTime, getCongestionColor } from '../../utils/format';
import { Users, DoorOpen, Clock, AlertTriangle, UserCheck, Activity, Thermometer, Wind } from 'lucide-react';
import './OperationsDashboard.css';

export function OperationsDashboard() {
  const { user } = useAuth();
  const [now, setNow] = useState(Date.now());
  const stadium = defaultStadium;
  const crowd = currentCrowdMetrics;
  const liveMatches = getLiveMatches();
  const upcomingMatches = getUpcomingMatches();

  // Update clock every second for countdown
  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="ops-dashboard">
      {/* Live match banner */}
      {liveMatches.length > 0 && (
        <div className="ops-dashboard__live-banner" role="region" aria-label="Live match">
          <StatusIndicator status="online" pulse />
          <span className="ops-dashboard__live-text">LIVE</span>
          {liveMatches.map((match) => (
            <span key={match.id} className="ops-dashboard__live-match">
              <span className="ops-dashboard__live-team">{match.homeTeam.flag} {match.homeTeam.code}</span>
              <span className="ops-dashboard__live-score">{match.homeScore} – {match.awayScore}</span>
              <span className="ops-dashboard__live-team">{match.awayTeam.code} {match.awayTeam.flag}</span>
              <Badge variant="accent" size="sm">{match.stage.replace('_', ' ').toUpperCase()}</Badge>
            </span>
          ))}
        </div>
      )}

      {/* Key Metrics Grid */}
      <section className="ops-dashboard__metrics stagger-children" aria-label="Key metrics">
        <MetricCard
          label="Total Occupancy"
          value={formatNumber(crowd.totalOccupancy)}
          change={5.2}
          changeLabel="vs 10m ago"
          icon={<Users size={15} />}
          variant={crowd.capacityPercentage > 0.9 ? 'danger' : crowd.capacityPercentage > 0.75 ? 'warning' : 'success'}
        />
        <MetricCard
          label="Capacity"
          value={`${Math.round(crowd.capacityPercentage * 100)}%`}
          change={3.1}
          changeLabel="vs 10m ago"
          icon={<Activity size={15} />}
          variant="accent"
        />
        <MetricCard
          label="Entry Rate"
          value={`${crowd.entryRate}/min`}
          change={-8.4}
          changeLabel="vs 10m ago"
          icon={<DoorOpen size={15} />}
        />
        <MetricCard
          label="Avg Queue"
          value={`${crowd.avgQueueMinutes.toFixed(0)} min`}
          change={12.5}
          changeLabel="vs 10m ago"
          icon={<Clock size={15} />}
          variant={crowd.avgQueueMinutes > 10 ? 'danger' : crowd.avgQueueMinutes > 5 ? 'warning' : 'success'}
        />
        <MetricCard
          label="Active Incidents"
          value="6"
          change={0}
          icon={<AlertTriangle size={15} />}
          variant="danger"
        />
        <MetricCard
          label="Staff On Duty"
          value="342"
          change={0}
          icon={<UserCheck size={15} />}
          variant="success"
        />
      </section>

      {/* Main content grid */}
      <div className="ops-dashboard__grid">
        {/* Left column — crowd overview + gates */}
        <div className="ops-dashboard__col ops-dashboard__col--main">
          {/* Gate Status */}
          <Card padding="md">
            <CardHeader title="Gate Status" subtitle="Real-time throughput and queue length" icon={<DoorOpen size={16} />} />
            <div className="ops-dashboard__gates" role="table" aria-label="Gate congestion status">
              <div className="ops-dashboard__gates-header" role="row">
                <span role="columnheader">Gate</span>
                <span role="columnheader">Queue</span>
                <span role="columnheader">Wait</span>
                <span role="columnheader">Rate</span>
                <span role="columnheader">Status</span>
              </div>
              {stadium.gates.filter(g => g.type !== 'emergency').map((gate) => (
                <div key={gate.id} className="ops-dashboard__gate-row" role="row">
                  <span className="ops-dashboard__gate-name" role="cell">
                    <span className="ops-dashboard__gate-dot" style={{ background: getCongestionColor(gate.congestionLevel) }} />
                    {gate.name}
                  </span>
                  <span className="ops-dashboard__gate-value" role="cell">{gate.queueLength}</span>
                  <span className="ops-dashboard__gate-value" role="cell">{gate.estimatedWaitMinutes} min</span>
                  <span className="ops-dashboard__gate-value" role="cell">
                    <span className="ops-dashboard__gate-bar-bg">
                      <span
                        className="ops-dashboard__gate-bar"
                        style={{
                          width: `${(gate.currentThroughput / gate.maxThroughput) * 100}%`,
                          background: getCongestionColor(gate.congestionLevel),
                        }}
                      />
                    </span>
                    {gate.currentThroughput}/{gate.maxThroughput}
                  </span>
                  <span role="cell">
                    <Badge variant={gate.isOpen ? 'success' : 'default'} size="sm">
                      {gate.isOpen ? 'Open' : 'Closed'}
                    </Badge>
                  </span>
                </div>
              ))}
            </div>
          </Card>

          {/* Zone Density */}
          <Card padding="md">
            <CardHeader title="Zone Density" subtitle="Real-time crowd distribution" icon={<Users size={16} />} />
            <div className="ops-dashboard__zones">
              {crowd.densityByZone.map((zone) => (
                <div key={zone.zoneId} className="ops-dashboard__zone">
                  <div className="ops-dashboard__zone-header">
                    <span className="ops-dashboard__zone-name">{zone.zoneName}</span>
                    <Badge
                      variant={zone.congestionLevel === 'high' ? 'danger' : zone.congestionLevel === 'moderate' ? 'warning' : 'success'}
                      size="sm"
                    >
                      {Math.round(zone.density * 100)}%
                    </Badge>
                  </div>
                  <div className="ops-dashboard__zone-bar-bg">
                    <div
                      className="ops-dashboard__zone-bar"
                      style={{
                        width: `${zone.density * 100}%`,
                        background: getCongestionColor(zone.congestionLevel),
                      }}
                      role="progressbar"
                      aria-valuenow={Math.round(zone.density * 100)}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`${zone.zoneName} density: ${Math.round(zone.density * 100)}%`}
                    />
                  </div>
                  <div className="ops-dashboard__zone-meta">
                    <span>{formatNumber(zone.personCount)} people</span>
                    <span className={`ops-dashboard__zone-trend ops-dashboard__zone-trend--${zone.trend}`}>
                      {zone.trend === 'increasing' ? '↑' : zone.trend === 'decreasing' ? '↓' : '→'} {zone.trend}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Right column — alerts + upcoming + weather */}
        <div className="ops-dashboard__col ops-dashboard__col--side">
          <Card padding="md">
            <AlertsFeed />
          </Card>

          {/* Upcoming matches */}
          <Card padding="md">
            <CardHeader title="Upcoming" subtitle="Next matches at this venue" />
            <div className="ops-dashboard__upcoming">
              {upcomingMatches.slice(0, 3).map((match) => (
                <div key={match.id} className="ops-dashboard__match">
                  <div className="ops-dashboard__match-teams">
                    <span>{match.homeTeam.flag} {match.homeTeam.code}</span>
                    <span className="ops-dashboard__match-vs">vs</span>
                    <span>{match.awayTeam.code} {match.awayTeam.flag}</span>
                  </div>
                  <div className="ops-dashboard__match-meta">
                    <span className="ops-dashboard__match-countdown">{formatCountdown(match.datetime)}</span>
                    <span className="ops-dashboard__match-time">{formatTime(match.datetime)}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Weather */}
          <Card padding="md">
            <CardHeader title="Conditions" subtitle="Current weather" icon={<Thermometer size={16} />} />
            <div className="ops-dashboard__weather">
              <div className="ops-dashboard__weather-main">
                <span className="ops-dashboard__weather-temp">29°C</span>
                <span className="ops-dashboard__weather-desc">Partly Cloudy</span>
              </div>
              <div className="ops-dashboard__weather-details">
                <span><Wind size={12} /> Wind: 12 km/h</span>
                <span>💧 Humidity: 62%</span>
                <span>☀ UV Index: 7 (High)</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
