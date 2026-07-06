import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '../utils';
import { StadiumMap } from '../../features/stadium/StadiumMap';

describe('StadiumMap', () => {
  it('renders the stadium digital twin', () => {
    render(<StadiumMap />);
    expect(screen.getByText('Stadium Digital Twin')).toBeInTheDocument();
    
    // Check if gates render
    const allGatesBtn = screen.getByRole('button', { name: /All/i });
    expect(allGatesBtn).toBeInTheDocument();
    
    // Click a gate on the SVG to see detail panel
    const svgGates = screen.getAllByRole('button');
    // The first few might be filter buttons, so we target the SVG ones by aria-label
    const gateA = screen.getByLabelText(/Gate Gate A/i);
    fireEvent.click(gateA);
    
    // The detail panel should now show the gate name
    expect(screen.getAllByText('Gate A').length).toBeGreaterThan(0);
  });
});
