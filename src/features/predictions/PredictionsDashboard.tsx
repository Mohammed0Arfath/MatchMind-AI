import React from 'react';
import { Card, CardHeader } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { defaultStadium } from '../../data/stadiums';
import { BrainCircuit, AlertTriangle, ArrowRight, Zap, Target, History } from 'lucide-react';
import './PredictionsDashboard.css';

interface Prediction {
  id: string;
  type: 'congestion' | 'security' | 'logistics';
  confidence: number;
  timeframe: string;
  description: string;
  reasoning: string[];
  recommendation: string;
  impactedZones: string[];
}

const mockPredictions: Prediction[] = [
  {
    id: 'p1',
    type: 'congestion',
    confidence: 88,
    timeframe: 'In 45 mins',
    description: 'Severe bottleneck expected at Gate C',
    reasoning: [
      'Current arrival rate at Gate C is 15% above model',
      'Train schedule shows 3 high-capacity arrivals in next 30 mins',
      'Historical data indicates 40% of late arrivals use Gate C'
    ],
    recommendation: 'Deploy 4 additional screening staff to Gate C and divert digital signage to Gate D.',
    impactedZones: ['Gate C Plaza', 'East Concourse']
  },
  {
    id: 'p2',
    type: 'logistics',
    confidence: 74,
    timeframe: 'At Halftime',
    description: 'Concession stand 114 to run low on bottled water',
    reasoning: [
      'Current temperature is 2°C higher than forecast',
      'Sales rate in Section 110-120 is 2.4x baseline',
      'Inventory sync shows only 3 pallets remaining in local storage'
    ],
    recommendation: 'Dispatch 2 pallets from central storage to Section 114 before 35th minute of match.',
    impactedZones: ['Concourse Level 1']
  },
  {
    id: 'p3',
    type: 'security',
    confidence: 62,
    timeframe: 'Post-match (22:15)',
    description: 'Potential crowd friction at VIP Exit North',
    reasoning: [
      'Away team supporters concentrated in North stands',
      'VIP exit overlaps with primary away egress route',
      'Match tension index currently rising (sentiment analysis)'
    ],
    recommendation: 'Pre-deploy barrier team to separate North egress flow. Activate staggered release protocol.',
    impactedZones: ['North Plaza', 'VIP Exit']
  }
];

export function PredictionsDashboard() {
  return (
    <div className="predictions-dashboard">
      <div className="predictions-dashboard__header">
        <div>
          <h2 className="predictions-dashboard__title">Predictive Engine</h2>
          <p className="predictions-dashboard__subtitle">AI-driven foresight and autonomous recommendations</p>
        </div>
        <Badge variant="accent" dot pulseDot>MODELS ACTIVE</Badge>
      </div>

      <div className="predictions-dashboard__summary">
        <Card padding="md" className="predictions-dashboard__summary-card">
          <BrainCircuit className="predictions-dashboard__summary-icon" />
          <div className="predictions-dashboard__summary-info">
            <span className="predictions-dashboard__summary-val">2.4M</span>
            <span className="predictions-dashboard__summary-label">Data points analyzed today</span>
          </div>
        </Card>
        <Card padding="md" className="predictions-dashboard__summary-card">
          <Target className="predictions-dashboard__summary-icon" />
          <div className="predictions-dashboard__summary-info">
            <span className="predictions-dashboard__summary-val">94.2%</span>
            <span className="predictions-dashboard__summary-label">Historical Accuracy</span>
          </div>
        </Card>
        <Card padding="md" className="predictions-dashboard__summary-card">
          <History className="predictions-dashboard__summary-icon" />
          <div className="predictions-dashboard__summary-info">
            <span className="predictions-dashboard__summary-val">12</span>
            <span className="predictions-dashboard__summary-label">Preventative Actions Taken</span>
          </div>
        </Card>
      </div>

      <div className="predictions-dashboard__grid">
        {mockPredictions.map(pred => (
          <Card key={pred.id} className="predictions-dashboard__prediction">
            <div className="predictions-dashboard__prediction-header">
              <div className="predictions-dashboard__prediction-type">
                {pred.type === 'congestion' && <AlertTriangle size={16} />}
                {pred.type === 'logistics' && <Zap size={16} />}
                {pred.type === 'security' && <Target size={16} />}
                <span className="capitalize">{pred.type} Risk</span>
              </div>
              <div className="predictions-dashboard__prediction-meta">
                <span className="predictions-dashboard__timeframe">{pred.timeframe}</span>
                <Badge variant={pred.confidence > 80 ? 'danger' : 'warning'} size="sm">
                  {pred.confidence}% Confidence
                </Badge>
              </div>
            </div>

            <div className="predictions-dashboard__prediction-body">
              <h3 className="predictions-dashboard__prediction-desc">{pred.description}</h3>
              
              <div className="predictions-dashboard__reasoning">
                <h4>AI Reasoning Chain:</h4>
                <ul>
                  {pred.reasoning.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>

              <div className="predictions-dashboard__impact">
                <h4>Impacted Zones:</h4>
                <div className="predictions-dashboard__impact-tags">
                  {pred.impactedZones.map((z, i) => (
                    <span key={i} className="predictions-dashboard__impact-tag">{z}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="predictions-dashboard__prediction-footer">
              <div className="predictions-dashboard__recommendation">
                <strong>Action:</strong> {pred.recommendation}
              </div>
              <Button variant="primary" size="sm">
                Execute Plan <ArrowRight size={14} />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
