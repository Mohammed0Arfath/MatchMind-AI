import '@testing-library/jest-dom';
import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

// Automatically cleanup after each test
afterEach(() => {
  cleanup();
});

// Mock matchMedia for tests
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
});

// Mock ResizeObserver for Recharts
class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
window.ResizeObserver = ResizeObserver;

// Mock scrollIntoView
window.HTMLElement.prototype.scrollIntoView = function() {};

// Mock custom hooks for synchronous testing
import { vi } from 'vitest';
import { defaultStadium } from '../data/stadiums';
import { getLiveMatches, getUpcomingMatches } from '../data/matches';
import { currentCrowdMetrics, crowdHistory } from '../data/crowds';
import { incidents, getActiveIncidents } from '../data/incidents';

vi.mock('../hooks/useStadium', () => ({
  useStadium: () => ({ stadium: defaultStadium, loading: false, error: null, refresh: vi.fn() })
}));

vi.mock('../hooks/useMatches', () => ({
  useMatches: (type: 'all' | 'live' | 'upcoming' | 'completed' = 'all') => {
    let matches = [];
    if (type === 'live') matches = getLiveMatches();
    else if (type === 'upcoming') matches = getUpcomingMatches();
    else matches = [...getLiveMatches(), ...getUpcomingMatches()];
    return { matches, loading: false, error: null, refresh: vi.fn() };
  }
}));

vi.mock('../hooks/useCrowdMetrics', () => ({
  useCrowdMetrics: () => ({ metrics: currentCrowdMetrics, history: crowdHistory, loading: false, error: null, refresh: vi.fn() })
}));

vi.mock('../hooks/useIncidents', () => ({
  useIncidents: (activeOnly = false) => ({ incidents: activeOnly ? getActiveIncidents() : incidents, loading: false, error: null, refresh: vi.fn() })
}));

// Mock Firebase and AuthProvider
vi.mock('firebase/app', () => ({
  initializeApp: vi.fn(),
}));

vi.mock('firebase/auth', () => ({
  getAuth: vi.fn(),
  onAuthStateChanged: vi.fn(),
  signInWithEmailAndPassword: vi.fn(),
  signOut: vi.fn(),
}));

vi.mock('firebase/firestore', () => ({
  getFirestore: vi.fn(),
  doc: vi.fn(),
  getDoc: vi.fn(),
}));

// Provide a mock useAuth so tests using it don't break
vi.mock('../app/providers/AuthProvider', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual as any,
    useAuth: () => ({
      user: {
        id: 'test-user',
        name: 'Test User',
        role: 'operations',
        preferences: { theme: 'dark', reducedMotion: false, highContrast: false, fontSize: 'normal', accessibilityNeeds: ['none'] }
      },
      role: 'operations',
      isAuthenticated: true,
      isLoading: false,
      logout: vi.fn(),
      roleConfig: { label: 'Operations', color: '#6366f1' }
    }),
  };
});
