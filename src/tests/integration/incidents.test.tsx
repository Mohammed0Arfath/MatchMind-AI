import { describe, it, expect } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import { render } from '../utils';
import { IncidentPanel } from '../../features/incidents/IncidentPanel';

describe('Incident Management Panel', () => {
  it('renders list of active incidents', () => {
    render(<IncidentPanel />);
    
    // Check main title
    expect(screen.getByText('Incident Management')).toBeInTheDocument();
    
    // There should be multiple incidents loaded from mock data
    const badges = screen.getAllByText(/PRIORITY/i);
    expect(badges.length).toBeGreaterThan(0);
  });

  it('can filter incidents by status', () => {
    render(<IncidentPanel />);
    
    // The filter buttons are Active, All, Resolved
    const resolvedBtn = screen.getByRole('button', { name: /Resolved/i });
    
    // Change filter to Resolved
    fireEvent.click(resolvedBtn);
    
    // Should now only show resolved incidents
    // Any remaining incident cards should NOT have the 'in progress' or 'reported' badge
    const inProgressBadges = screen.queryAllByText(/in progress/i);
    const reportedBadges = screen.queryAllByText(/reported/i);
    
    expect(inProgressBadges.length).toBe(0);
    expect(reportedBadges.length).toBe(0);
  });
});
