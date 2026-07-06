import { describe, it, expect } from 'vitest';
import { render, screen } from '../utils';
import { PredictionsDashboard } from '../../features/predictions/PredictionsDashboard';

describe('PredictionsDashboard', () => {
  it('renders predictive analytics', () => {
    render(<PredictionsDashboard />);
    expect(screen.getByText('Predictive Engine')).toBeInTheDocument();
    expect(screen.getByText(/AI-driven foresight/i)).toBeInTheDocument();
    
    // Check if anomaly cards render
    expect(screen.getByText(/congestion risk/i)).toBeInTheDocument();
  });
});
