import React, { useState } from 'react';
import { Card, CardHeader } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Select } from '../../components/ui/Select';
import { defaultStadium } from '../../data/stadiums';
import { Map, Navigation, MapPin, Accessibility, ArrowRight, Zap, Target } from 'lucide-react';
import './NavigationView.css';

export function NavigationView() {
  const [start, setStart] = useState('Gate A');
  const [end, setEnd] = useState('Section 114');
  const [routingPref, setRoutingPref] = useState('fastest');

  // Mock route steps
  const steps = [
    { instruction: 'Enter through Gate A security checkpoint', distance: '50m', time: '2m' },
    { instruction: 'Turn right towards the East Concourse', distance: '120m', time: '1.5m' },
    { instruction: 'Proceed straight past Food Court B', distance: '80m', time: '1m', congestion: 'high' },
    { instruction: 'Take Escalator 2 up to Level 1', distance: '20m', time: '0.5m' },
    { instruction: 'Section 114 entrance is on your left', distance: '10m', time: '0.2m' }
  ];

  return (
    <div className="navigation-view">
      <div className="navigation-view__header">
        <div>
          <h2 className="navigation-view__title">Smart Navigation</h2>
          <p className="navigation-view__subtitle">Dynamic pathfinding avoiding real-time congestion</p>
        </div>
      </div>

      <div className="navigation-view__grid">
        <div className="navigation-view__sidebar">
          <Card padding="md">
            <CardHeader title="Plan Route" icon={<Navigation size={16} />} />
            
            <div className="navigation-view__form">
              <div className="navigation-view__field">
                <label>Starting Point</label>
                <div className="navigation-view__input-group">
                  <MapPin size={16} className="navigation-view__input-icon" />
                  <Input 
                    value={start} 
                    onChange={e => setStart(e.target.value)}
                    placeholder="E.g., Gate A, Section 114"
                  />
                </div>
              </div>

              <div className="navigation-view__field">
                <label>Destination</label>
                <div className="navigation-view__input-group">
                  <Target size={16} className="navigation-view__input-icon" />
                  <Input 
                    value={end} 
                    onChange={e => setEnd(e.target.value)}
                    placeholder="E.g., Restroom, Concession"
                  />
                </div>
              </div>

              <div className="navigation-view__field">
                <label>Routing Preference</label>
                <Select 
                  value={routingPref} 
                  onChange={e => setRoutingPref(e.target.value)}
                  options={[
                    { value: 'fastest', label: 'Fastest (Default)' },
                    { value: 'avoid_crowds', label: 'Avoid Crowds' },
                    { value: 'accessible', label: 'Wheelchair Accessible' },
                    { value: 'covered', label: 'Covered / Indoors' }
                  ]}
                />
              </div>

              <Button variant="primary" style={{ width: '100%', marginTop: 'var(--space-2)' }}>
                Calculate Route
              </Button>
            </div>
          </Card>

          <Card padding="md" className="navigation-view__summary">
            <div className="navigation-view__summary-stats">
              <div className="navigation-view__stat">
                <span className="navigation-view__stat-val">5.2 min</span>
                <span className="navigation-view__stat-label">Est. Time</span>
              </div>
              <div className="navigation-view__stat">
                <span className="navigation-view__stat-val">280m</span>
                <span className="navigation-view__stat-label">Distance</span>
              </div>
            </div>
            
            {routingPref === 'avoid_crowds' && (
              <div className="navigation-view__alert">
                <Zap size={14} /> Re-routed to avoid Level 1 Concourse congestion (+1.5m)
              </div>
            )}
            {routingPref === 'accessible' && (
              <div className="navigation-view__alert navigation-view__alert--info">
                <Accessibility size={14} /> Route uses elevators only. Step-free guaranteed.
              </div>
            )}
          </Card>
        </div>

        <div className="navigation-view__main">
          <Card padding="md" className="navigation-view__steps-card">
            <CardHeader title="Turn-by-turn Directions" icon={<Map size={16} />} />
            
            <div className="navigation-view__steps">
              {steps.map((step, idx) => (
                <div key={idx} className="navigation-view__step">
                  <div className="navigation-view__step-number">{idx + 1}</div>
                  <div className="navigation-view__step-content">
                    <p className="navigation-view__step-instruction">{step.instruction}</p>
                    <div className="navigation-view__step-meta">
                      <span>{step.distance}</span>
                      <span>·</span>
                      <span>{step.time}</span>
                      {step.congestion === 'high' && (
                        <>
                          <span>·</span>
                          <span className="navigation-view__step-warning">High Traffic Area</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="navigation-view__step navigation-view__step--final">
                <div className="navigation-view__step-number"><MapPin size={12} /></div>
                <div className="navigation-view__step-content">
                  <p className="navigation-view__step-instruction">Arrive at {end}</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
