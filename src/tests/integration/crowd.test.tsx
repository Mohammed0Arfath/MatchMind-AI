import { describe, it, expect } from 'vitest';
import { render, screen } from '../utils';
import { CrowdDashboard } from '../../features/crowd/CrowdDashboard';

describe('CrowdDashboard', () => {
  it('renders crowd metrics and charts', () => {
    render(<CrowdDashboard />);
    expect(screen.getByText('Crowd Intelligence')).toBeInTheDocument();
    expect(screen.getByText(/Real-time density, flow, and predictive analytics/i)).toBeInTheDocument();
    
    // Check that some metric cards rendered
    expect(screen.getByText('Current Occupancy')).toBeInTheDocument();
    expect(screen.getByText('Predicted Peak')).toBeInTheDocument();
  });
});
