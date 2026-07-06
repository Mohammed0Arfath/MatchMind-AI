import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { render } from '../utils';
import { OperationsDashboard } from '../../features/dashboard/OperationsDashboard';

describe('OperationsDashboard', () => {
  it('renders critical KPI metrics', () => {
    render(<OperationsDashboard />);
    
    // Check that key metric cards are present
    expect(screen.getByText('Total Occupancy')).toBeInTheDocument();
    expect(screen.getByText('Entry Rate')).toBeInTheDocument();
    expect(screen.getByText('Active Incidents')).toBeInTheDocument();
  });

  it('renders the alerts feed', () => {
    render(<OperationsDashboard />);
    
    // Check for another known header from the alerts or side components
    expect(screen.getByText('Upcoming')).toBeInTheDocument();
    expect(screen.getByText('Conditions')).toBeInTheDocument();
    // Assuming mock data has at least one alert rendered
    expect(document.querySelector('.alerts-feed')).toBeInTheDocument();
  });
});
