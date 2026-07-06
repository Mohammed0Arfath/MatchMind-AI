import React from 'react';
import { Card, CardHeader } from '../../components/ui/Card';
import { MetricCard } from './components/MetricCard';
import { AlertsFeed } from './components/AlertsFeed';
import { Badge } from '../../components/ui/Badge';
import { getActiveIncidents } from '../../data/incidents';
import { defaultStadium } from '../../data/stadiums';
import { Shield, AlertTriangle, Eye, Video, Radio, Activity, Map } from 'lucide-react';
import './SecurityDashboard.css';

export function SecurityDashboard() {
  const activeIncidents = getActiveIncidents();
  const highPriority = activeIncidents.filter(i => i.priority === 'high' || i.priority === 'critical');
  
  return (
    <div className="security-dashboard">
      {/* Critical alerts banner */}
      {highPriority.length > 0 && (
        <div className="security-dashboard__alert-banner">
          <AlertTriangle size={18} />
          <span className="security-dashboard__alert-text">
            <strong>CRITICAL:</strong> {highPriority.length} high priority incidents require immediate attention.
          </span>
        </div>
      )}

      {/* Metrics Grid */}
      <section className="security-dashboard__metrics stagger-children">
        <MetricCard
          label="Active Incidents"
          value={activeIncidents.length}
          change={2}
          icon={<AlertTriangle size={15} />}
          variant={activeIncidents.length > 5 ? 'danger' : 'warning'}
        />
        <MetricCard
          label="Security Personnel"
          value="142"
          change={0}
          icon={<Shield size={15} />}
          variant="success"
        />
        <MetricCard
          label="Active Cameras"
          value="415 / 420"
          icon={<Video size={15} />}
          variant="warning"
        />
        <MetricCard
          label="Response Time"
          value="1.4 min"
          change={-0.2}
          changeLabel="vs 10m ago"
          icon={<Activity size={15} />}
          variant="success"
        />
      </section>

      <div className="security-dashboard__grid">
        {/* Main Column */}
        <div className="security-dashboard__col security-dashboard__col--main">
          {/* Restricted Zones Status */}
          <Card padding="md">
            <CardHeader title="Restricted Zones Monitoring" subtitle="Access control point status" icon={<Eye size={16} />} />
            <div className="security-dashboard__zones">
              <div className="security-dashboard__zone-row">
                <div className="security-dashboard__zone-info">
                  <Shield size={16} className="security-dashboard__zone-icon" />
                  <div>
                    <span className="security-dashboard__zone-name">Locker Rooms & Tunnel</span>
                    <span className="security-dashboard__zone-meta">Level 0 · Access Level: Red</span>
                  </div>
                </div>
                <Badge variant="success" size="sm">SECURE</Badge>
              </div>
              <div className="security-dashboard__zone-row">
                <div className="security-dashboard__zone-info">
                  <Shield size={16} className="security-dashboard__zone-icon" />
                  <div>
                    <span className="security-dashboard__zone-name">Media Center</span>
                    <span className="security-dashboard__zone-meta">Level 1 · Access Level: Yellow</span>
                  </div>
                </div>
                <Badge variant="success" size="sm">SECURE</Badge>
              </div>
              <div className="security-dashboard__zone-row">
                <div className="security-dashboard__zone-info">
                  <AlertTriangle size={16} className="security-dashboard__zone-icon security-dashboard__zone-icon--alert" />
                  <div>
                    <span className="security-dashboard__zone-name">VIP Hospitality Suites</span>
                    <span className="security-dashboard__zone-meta">Level 3 · Access Level: VIP</span>
                  </div>
                </div>
                <Badge variant="warning" size="sm">UNAUTHORIZED ACCESS ATTEMPT (2m ago)</Badge>
              </div>
              <div className="security-dashboard__zone-row">
                <div className="security-dashboard__zone-info">
                  <Shield size={16} className="security-dashboard__zone-icon" />
                  <div>
                    <span className="security-dashboard__zone-name">Broadcast Control Room</span>
                    <span className="security-dashboard__zone-meta">Level 4 · Access Level: Red</span>
                  </div>
                </div>
                <Badge variant="success" size="sm">SECURE</Badge>
              </div>
            </div>
          </Card>

          {/* Screening & Metal Detectors */}
          <Card padding="md">
            <CardHeader title="Screening Throughput" subtitle="Metal detector and bag check status" icon={<Map size={16} />} />
            <div className="security-dashboard__screening">
              {defaultStadium.gates.filter(g => g.type === 'main').map(gate => (
                <div key={gate.id} className="security-dashboard__screening-item">
                  <div className="security-dashboard__screening-header">
                    <span>{gate.name} Checkpoint</span>
                    <span className="security-dashboard__screening-rate">{Math.round(gate.currentThroughput * 0.9)}/min cleared</span>
                  </div>
                  <div className="security-dashboard__screening-bar-bg">
                    <div 
                      className="security-dashboard__screening-bar" 
                      style={{ 
                        width: `${(gate.currentThroughput / gate.maxThroughput) * 100}%`,
                        background: gate.congestionLevel === 'high' ? 'var(--color-warning)' : 'var(--color-success)'
                      }} 
                    />
                  </div>
                  <div className="security-dashboard__screening-meta">
                    <span>Scanner Status: All Operational</span>
                    {gate.congestionLevel === 'high' && <span className="security-dashboard__screening-alert">High load</span>}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Side Column */}
        <div className="security-dashboard__col security-dashboard__col--side">
          <Card padding="md">
            <AlertsFeed />
          </Card>
          
          <Card padding="md">
            <CardHeader title="Radio Channels" subtitle="Live comms status" icon={<Radio size={16} />} />
            <div className="security-dashboard__comms">
              <div className="security-dashboard__comm-channel">
                <span className="security-dashboard__comm-name">Channel 1 (Main Security)</span>
                <span className="security-dashboard__comm-status"><span className="status-dot status-dot--active"/> Active</span>
              </div>
              <div className="security-dashboard__comm-channel">
                <span className="security-dashboard__comm-name">Channel 2 (Medical)</span>
                <span className="security-dashboard__comm-status"><span className="status-dot status-dot--active"/> Active</span>
              </div>
              <div className="security-dashboard__comm-channel">
                <span className="security-dashboard__comm-name">Channel 3 (Crowd Control)</span>
                <span className="security-dashboard__comm-status"><span className="status-dot status-dot--idle"/> Idle</span>
              </div>
              <div className="security-dashboard__comm-channel">
                <span className="security-dashboard__comm-name">Channel 4 (Emergency)</span>
                <span className="security-dashboard__comm-status"><span className="status-dot status-dot--idle"/> Idle</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
