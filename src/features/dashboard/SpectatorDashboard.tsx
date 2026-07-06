import React from 'react';
import { Card, CardHeader } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { defaultStadium } from '../../data/stadiums';
import { getUpcomingMatches } from '../../data/matches';
import { formatCountdown, formatTime } from '../../utils/format';
import { MapPin, Utensils, Coffee, Droplets, Navigation, Ticket, Calendar, Info } from 'lucide-react';
import './SpectatorDashboard.css';

export function SpectatorDashboard() {
  const nextMatch = getUpcomingMatches()[0];
  const userSection = "Section 114"; // Mock user location
  const userGate = "Gate B";

  const nearbyFacilities = defaultStadium.facilities
    .filter(f => f.nearestGate.toLowerCase().includes(userGate.toLowerCase().split(' ')[1]) || f.nearestGate === 'gate-b')
    .slice(0, 4);

  return (
    <div className="spectator-dashboard">
      {/* Welcome & Next Match Banner */}
      <div className="spectator-dashboard__hero">
        <div className="spectator-dashboard__hero-content">
          <Badge variant="accent" size="sm">Your Next Match</Badge>
          <h2 className="spectator-dashboard__hero-match">
            {nextMatch.homeTeam.name} vs {nextMatch.awayTeam.name}
          </h2>
          <div className="spectator-dashboard__hero-meta">
            <span className="spectator-dashboard__hero-countdown">{formatCountdown(nextMatch.datetime)}</span>
            <span className="spectator-dashboard__hero-time">Kickoff at {formatTime(nextMatch.datetime)}</span>
          </div>
          <div className="spectator-dashboard__hero-ticket">
            <Ticket size={16} />
            <span>{userGate} · {userSection} · Row 12 · Seat 4</span>
          </div>
        </div>
      </div>

      <div className="spectator-dashboard__grid">
        {/* Main Column */}
        <div className="spectator-dashboard__col spectator-dashboard__col--main">
          {/* Quick Navigation */}
          <Card padding="md">
            <CardHeader title="Quick Navigation" subtitle={`From your seat in ${userSection}`} icon={<Navigation size={16} />} />
            <div className="spectator-dashboard__nav-grid">
              <button className="spectator-dashboard__nav-btn">
                <Utensils size={24} className="spectator-dashboard__nav-icon" />
                <span>Food & Drink</span>
                <span className="spectator-dashboard__nav-wait">3 min wait</span>
              </button>
              <button className="spectator-dashboard__nav-btn">
                <Droplets size={24} className="spectator-dashboard__nav-icon" />
                <span>Restrooms</span>
                <span className="spectator-dashboard__nav-wait">1 min wait</span>
              </button>
              <button className="spectator-dashboard__nav-btn">
                <Coffee size={24} className="spectator-dashboard__nav-icon" />
                <span>Merchandise</span>
                <span className="spectator-dashboard__nav-wait">12 min wait</span>
              </button>
              <button className="spectator-dashboard__nav-btn">
                <MapPin size={24} className="spectator-dashboard__nav-icon" />
                <span>My Exit Route</span>
                <span className="spectator-dashboard__nav-wait spectator-dashboard__nav-wait--good">Optimal</span>
              </button>
            </div>
          </Card>

          {/* Recommended Facilities */}
          <Card padding="md">
            <CardHeader title="Nearby Facilities" subtitle={`Closest to ${userGate}`} />
            <div className="spectator-dashboard__facilities">
              {nearbyFacilities.map((facility, idx) => (
                <div key={facility.id || idx} className="spectator-dashboard__facility">
                  <div className="spectator-dashboard__facility-icon">
                    {facility.type === 'food_court' ? <Utensils size={18} /> : 
                     facility.type === 'restroom' ? <Droplets size={18} /> : <Info size={18} />}
                  </div>
                  <div className="spectator-dashboard__facility-info">
                    <span className="spectator-dashboard__facility-name">{facility.name}</span>
                    <span className="spectator-dashboard__facility-meta">{facility.level}</span>
                  </div>
                  <div className="spectator-dashboard__facility-status">
                    <Badge variant={facility.waitTimeMinutes > 10 ? 'warning' : 'success'} size="sm">
                      {facility.waitTimeMinutes} min wait
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Side Column */}
        <div className="spectator-dashboard__col spectator-dashboard__col--side">
          {/* Transport Info */}
          <Card padding="md">
            <CardHeader title="Getting Home" icon={<MapPin size={16} />} />
            <div className="spectator-dashboard__transport">
              <div className="spectator-dashboard__transport-item">
                <span className="spectator-dashboard__transport-mode">🚆 Metro / Train</span>
                <span className="spectator-dashboard__transport-status">Normal service · Every 10m</span>
              </div>
              <div className="spectator-dashboard__transport-item">
                <span className="spectator-dashboard__transport-mode">🚌 Shuttle Bus</span>
                <span className="spectator-dashboard__transport-status">Delays expected post-match</span>
              </div>
              <div className="spectator-dashboard__transport-item">
                <span className="spectator-dashboard__transport-mode">🚗 Rideshare (Lot D)</span>
                <span className="spectator-dashboard__transport-status">Surge pricing active</span>
              </div>
            </div>
            <Button variant="secondary" size="sm" style={{ marginTop: 'var(--space-4)', width: '100%' }}>
              Plan Exit Route
            </Button>
          </Card>

          {/* Event Schedule */}
          <Card padding="md">
            <CardHeader title="Event Schedule" icon={<Calendar size={16} />} />
            <div className="spectator-dashboard__schedule">
              <div className="spectator-dashboard__schedule-item">
                <span className="spectator-dashboard__schedule-time">18:00</span>
                <span className="spectator-dashboard__schedule-desc">Gates Open</span>
              </div>
              <div className="spectator-dashboard__schedule-item">
                <span className="spectator-dashboard__schedule-time">19:15</span>
                <span className="spectator-dashboard__schedule-desc">Pre-match Show</span>
              </div>
              <div className="spectator-dashboard__schedule-item spectator-dashboard__schedule-item--active">
                <span className="spectator-dashboard__schedule-time">20:00</span>
                <span className="spectator-dashboard__schedule-desc">Kickoff</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
