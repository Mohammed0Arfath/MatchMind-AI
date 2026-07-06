import React, { useState } from 'react';
import { Card, CardHeader } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { useStadium } from '../../hooks/useStadium';
import { Spinner } from '../../components/ui/Spinner';
import { getCongestionColor, formatDuration } from '../../utils/format';
import type { Gate, Facility, FacilityType } from '../../types';
import { MapPin, DoorOpen, Coffee, Heart, Info, ShoppingBag, Droplets, Accessibility, Eye } from 'lucide-react';
import './StadiumMap.css';

const FACILITY_ICONS: Partial<Record<FacilityType, React.ReactNode>> = {
  food_court: <Coffee size={10} />,
  restroom: <Droplets size={10} />,
  first_aid: <Heart size={10} />,
  information: <Info size={10} />,
  merchandise: <ShoppingBag size={10} />,
};

type MapLayer = 'gates' | 'food' | 'restrooms' | 'medical' | 'all';

export function StadiumMap() {
  const { stadium, loading } = useStadium();
  const [activeLayer, setActiveLayer] = useState<MapLayer>('all');
  const [selectedItem, setSelectedItem] = useState<Gate | Facility | null>(null);

  const filteredFacilities = stadium?.facilities.filter((f) => {
    if (activeLayer === 'all') return true;
    if (activeLayer === 'food') return f.type === 'food_court';
    if (activeLayer === 'restrooms') return f.type === 'restroom';
    if (activeLayer === 'medical') return f.type === 'first_aid';
    return false;
  }) || [];

  if (loading || !stadium) {
    return <Spinner />;
  }

  return (
    <div className="stadium-map-page">
      <div className="stadium-map-page__header">
        <h2 className="stadium-map-page__title">Stadium Digital Twin</h2>
        <p className="stadium-map-page__subtitle">{stadium.name} — Live facility and congestion overlay</p>
      </div>

      <div className="stadium-map-page__controls">
        {(['all', 'gates', 'food', 'restrooms', 'medical'] as MapLayer[]).map((layer) => (
          <Button
            key={layer}
            variant={activeLayer === layer ? 'primary' : 'secondary'}
            size="sm"
            onClick={() => setActiveLayer(layer)}
          >
            {layer.charAt(0).toUpperCase() + layer.slice(1)}
          </Button>
        ))}
      </div>

      <div className="stadium-map-page__grid">
        <Card padding="none" className="stadium-map-page__map-card">
          <div className="stadium-svg-container" role="group" aria-label="Interactive stadium map showing gates, facilities, and congestion levels">
            <svg viewBox="0 0 100 100" className="stadium-svg">
              {/* Stadium outline */}
              <ellipse cx="50" cy="50" rx="44" ry="40" fill="var(--color-bg-tertiary)" stroke="var(--color-border-primary)" strokeWidth="0.5" />
              <ellipse cx="50" cy="50" rx="36" ry="32" fill="var(--color-bg-secondary)" stroke="var(--color-border-primary)" strokeWidth="0.3" />
              <ellipse cx="50" cy="50" rx="26" ry="22" fill="var(--color-bg-tertiary)" stroke="var(--color-border-primary)" strokeWidth="0.3" />

              {/* Field */}
              <rect x="30" y="34" width="40" height="32" rx="2" fill="var(--color-success-muted)" stroke="var(--color-success)" strokeWidth="0.3" opacity="0.4" />
              <line x1="50" y1="34" x2="50" y2="66" stroke="var(--color-success)" strokeWidth="0.2" opacity="0.4" />
              <circle cx="50" cy="50" r="5" fill="none" stroke="var(--color-success)" strokeWidth="0.2" opacity="0.4" />

              {/* Section labels */}
              <text x="25" y="32" className="stadium-svg__label">Lower North</text>
              <text x="68" y="32" className="stadium-svg__label">Lower East</text>
              <text x="25" y="74" className="stadium-svg__label">Lower South</text>
              <text x="68" y="74" className="stadium-svg__label">Upper East</text>

              {/* Gates */}
              {(activeLayer === 'all' || activeLayer === 'gates') && stadium.gates.map((gate) => (
                <g 
                  key={gate.id} 
                  className="stadium-svg__gate" 
                  onClick={() => setSelectedItem(gate)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedItem(gate);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label={`Gate ${gate.name}, ${gate.congestionLevel} congestion`}
                >
                  <circle
                    cx={gate.position.x}
                    cy={gate.position.y}
                    r="3"
                    fill={getCongestionColor(gate.congestionLevel)}
                    opacity="0.8"
                    className="stadium-svg__gate-circle"
                  />
                  {gate.congestionLevel === 'high' || gate.congestionLevel === 'critical' ? (
                    <circle
                      cx={gate.position.x}
                      cy={gate.position.y}
                      r="3"
                      fill="none"
                      stroke={getCongestionColor(gate.congestionLevel)}
                      strokeWidth="0.5"
                      className="stadium-svg__pulse-ring"
                    />
                  ) : null}
                  <text
                    x={gate.position.x}
                    y={gate.position.y - 4.5}
                    className="stadium-svg__gate-label"
                  >
                    {gate.name}
                  </text>
                </g>
              ))}

              {/* Facilities */}
              {filteredFacilities.map((facility) => (
                <g 
                  key={facility.id} 
                  className="stadium-svg__facility" 
                  onClick={() => setSelectedItem(facility)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedItem(facility);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label={`${facility.name} (${facility.type.replace('_', ' ')}), ${facility.status}`}
                >
                  <rect
                    x={facility.position.x - 1.5}
                    y={facility.position.y - 1.5}
                    width="3"
                    height="3"
                    rx="0.5"
                    fill={facility.status === 'closed' || facility.status === 'maintenance' ? 'var(--color-text-disabled)' : facility.waitTimeMinutes > 10 ? 'var(--color-warning)' : 'var(--color-accent)'}
                    opacity="0.8"
                    className="stadium-svg__facility-rect"
                  />
                </g>
              ))}
            </svg>
          </div>

          {/* Legend */}
          <div className="stadium-map-page__legend">
            <div className="stadium-map-page__legend-title">Congestion Level</div>
            <div className="stadium-map-page__legend-items">
              <span className="stadium-map-page__legend-item"><span className="stadium-map-page__legend-dot" style={{ background: 'var(--color-congestion-low)' }} /> Low</span>
              <span className="stadium-map-page__legend-item"><span className="stadium-map-page__legend-dot" style={{ background: 'var(--color-congestion-moderate)' }} /> Moderate</span>
              <span className="stadium-map-page__legend-item"><span className="stadium-map-page__legend-dot" style={{ background: 'var(--color-congestion-high)' }} /> High</span>
              <span className="stadium-map-page__legend-item"><span className="stadium-map-page__legend-dot" style={{ background: 'var(--color-congestion-critical)' }} /> Critical</span>
            </div>
          </div>
        </Card>

        {/* Detail Panel */}
        <div className="stadium-map-page__detail">
          {selectedItem && 'congestionLevel' in selectedItem && (
            <Card padding="md">
              <CardHeader
                title={(selectedItem as Gate).name}
                subtitle={`${(selectedItem as Gate).direction} · ${(selectedItem as Gate).type.toUpperCase()}`}
                icon={<DoorOpen size={16} />}
              />
              <div className="stadium-map-page__detail-grid">
                <div className="stadium-map-page__detail-row">
                  <span>Congestion</span>
                  <Badge variant={(selectedItem as Gate).congestionLevel === 'high' ? 'danger' : (selectedItem as Gate).congestionLevel === 'moderate' ? 'warning' : 'success'} size="sm">
                    {(selectedItem as Gate).congestionLevel}
                  </Badge>
                </div>
                <div className="stadium-map-page__detail-row">
                  <span>Queue Length</span>
                  <span>{(selectedItem as Gate).queueLength} people</span>
                </div>
                <div className="stadium-map-page__detail-row">
                  <span>Wait Time</span>
                  <span>{(selectedItem as Gate).estimatedWaitMinutes} min</span>
                </div>
                <div className="stadium-map-page__detail-row">
                  <span>Throughput</span>
                  <span>{(selectedItem as Gate).currentThroughput}/{(selectedItem as Gate).maxThroughput} per min</span>
                </div>
                <div className="stadium-map-page__detail-row">
                  <span>Accessible</span>
                  <span>{(selectedItem as Gate).isAccessible ? '✓ Yes' : '✗ No'}</span>
                </div>
                <div className="stadium-map-page__detail-row">
                  <span>Status</span>
                  <Badge variant={(selectedItem as Gate).isOpen ? 'success' : 'danger'} size="sm">
                    {(selectedItem as Gate).isOpen ? 'Open' : 'Closed'}
                  </Badge>
                </div>
              </div>
            </Card>
          )}

          {selectedItem && 'waitTimeMinutes' in selectedItem && !('congestionLevel' in selectedItem) && (
            <Card padding="md">
              <CardHeader
                title={(selectedItem as Facility).name}
                subtitle={(selectedItem as Facility).type.replace('_', ' ')}
                icon={FACILITY_ICONS[(selectedItem as Facility).type] ?? <MapPin size={16} />}
              />
              <div className="stadium-map-page__detail-grid">
                <div className="stadium-map-page__detail-row">
                  <span>Status</span>
                  <Badge variant={(selectedItem as Facility).status === 'available' ? 'success' : (selectedItem as Facility).status === 'busy' ? 'warning' : 'danger'} size="sm">
                    {(selectedItem as Facility).status}
                  </Badge>
                </div>
                <div className="stadium-map-page__detail-row">
                  <span>Wait Time</span>
                  <span>{(selectedItem as Facility).waitTimeMinutes} min</span>
                </div>
                <div className="stadium-map-page__detail-row">
                  <span>Level</span>
                  <span>{(selectedItem as Facility).level}</span>
                </div>
                <div className="stadium-map-page__detail-row">
                  <span>Accessible</span>
                  <span>{(selectedItem as Facility).isAccessible ? '✓ Yes' : '✗ No'}</span>
                </div>
                <div className="stadium-map-page__detail-row">
                  <span>Nearest Gate</span>
                  <span>{(selectedItem as Facility).nearestGate.replace('gate-', 'Gate ').toUpperCase()}</span>
                </div>
              </div>
            </Card>
          )}

          {!selectedItem && (
            <Card padding="md">
              <div className="stadium-map-page__empty-detail">
                <Eye size={24} />
                <p>Click on a gate or facility on the map to view details</p>
              </div>
            </Card>
          )}

          {/* Quick Stats */}
          <Card padding="md">
            <CardHeader title="Quick Stats" />
            <div className="stadium-map-page__detail-grid">
              <div className="stadium-map-page__detail-row">
                <span>Open Gates</span>
                <span>{stadium.gates.filter(g => g.isOpen).length}/{stadium.gates.length}</span>
              </div>
              <div className="stadium-map-page__detail-row">
                <span>Total in Queue</span>
                <span>{stadium.gates.reduce((sum, g) => sum + g.queueLength, 0).toLocaleString()}</span>
              </div>
              <div className="stadium-map-page__detail-row">
                <span>Food Courts Open</span>
                <span>{stadium.facilities.filter(f => f.type === 'food_court' && f.isOpen).length}</span>
              </div>
              <div className="stadium-map-page__detail-row">
                <span>Restrooms Available</span>
                <span>{stadium.facilities.filter(f => f.type === 'restroom' && f.isOpen).length}/{stadium.facilities.filter(f => f.type === 'restroom').length}</span>
              </div>
              <div className="stadium-map-page__detail-row">
                <span>Medical Stations</span>
                <span>{stadium.facilities.filter(f => f.type === 'first_aid' && f.isOpen).length} active</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
