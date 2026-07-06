import { describe, it, expect } from 'vitest';
import { render } from '../utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import { OperationsDashboard } from '../../features/dashboard/OperationsDashboard';
import { RoleSelection } from '../../features/auth/RoleSelection';

// Extend vitest's expect method with jest-axe methods
expect.extend(toHaveNoViolations);

describe('Accessibility Standards (WCAG 2.2 AA)', () => {
  it('Role Selection gateway should have no accessibility violations', async () => {
    const { container } = render(<RoleSelection />);
    const results = await axe(container);
    
    expect(results).toHaveNoViolations();
  });

  it('Operations Dashboard should have no accessibility violations', async () => {
    const { container } = render(<OperationsDashboard />);
    const results = await axe(container);
    
    // We test that all ARIA tags, contrast ratios, and semantic HTML are valid
    expect(results).toHaveNoViolations();
  });
});
