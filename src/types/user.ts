export type UserRole = 'operations' | 'security' | 'spectator' | 'staff';

export interface UserPreferences {
  theme: 'dark' | 'light' | 'system';
  reducedMotion: boolean;
  highContrast: boolean;
  fontSize: 'normal' | 'large' | 'xlarge';
  accessibilityNeeds: AccessibilityNeed[];
}

export type AccessibilityNeed =
  | 'wheelchair'
  | 'visual_impairment'
  | 'hearing_impairment'
  | 'mobility_limited'
  | 'elderly'
  | 'none';

export interface User {
  id: string;
  name: string;
  role: UserRole;
  currentLocation: string | null;
  currentStadiumId: string | null;
  preferences: UserPreferences;
  zone: string | null;
  shift: string | null;
}

export interface RoleConfig {
  role: UserRole;
  label: string;
  description: string;
  icon: string;
  color: string;
  defaultView: string;
  navItems: NavItem[];
}

export interface NavItem {
  id: string;
  label: string;
  path: string;
  icon: string;
  badge?: number | string;
}

export const ROLE_CONFIGS: Record<UserRole, RoleConfig> = {
  operations: {
    role: 'operations',
    label: 'Operations Manager',
    description: 'Stadium-wide monitoring, crowd management, and staff coordination',
    icon: 'Settings',
    color: '#6366f1',
    defaultView: '/dashboard',
    navItems: [
      { id: 'dashboard', label: 'Dashboard', path: '/dashboard', icon: 'LayoutDashboard' },
      { id: 'stadium', label: 'Stadium Twin', path: '/stadium', icon: 'Map' },
      { id: 'crowd', label: 'Crowd Intel', path: '/crowd', icon: 'Users' },
      { id: 'predictions', label: 'Predictions', path: '/predictions', icon: 'TrendingUp' },
      { id: 'incidents', label: 'Incidents', path: '/incidents', icon: 'AlertTriangle' },
      { id: 'assistant', label: 'AI Assistant', path: '/assistant', icon: 'Bot' },
      { id: 'match', label: 'Match Schedule', path: '/match', icon: 'Calendar' },
    ],
  },
  security: {
    role: 'security',
    label: 'Security Staff',
    description: 'Incident response, crowd density monitoring, and emergency coordination',
    icon: 'Shield',
    color: '#ef4444',
    defaultView: '/dashboard',
    navItems: [
      { id: 'dashboard', label: 'Dashboard', path: '/dashboard', icon: 'LayoutDashboard' },
      { id: 'incidents', label: 'Incidents', path: '/incidents', icon: 'AlertTriangle' },
      { id: 'stadium', label: 'Stadium Map', path: '/stadium', icon: 'Map' },
      { id: 'crowd', label: 'Crowd Monitor', path: '/crowd', icon: 'Users' },
      { id: 'assistant', label: 'AI Assistant', path: '/assistant', icon: 'Bot' },
    ],
  },
  spectator: {
    role: 'spectator',
    label: 'Spectator',
    description: 'Navigation, facilities, food, accessibility, and match information',
    icon: 'User',
    color: '#22c55e',
    defaultView: '/dashboard',
    navItems: [
      { id: 'dashboard', label: 'Home', path: '/dashboard', icon: 'Home' },
      { id: 'match', label: 'Matches', path: '/match', icon: 'Calendar' },
      { id: 'navigation', label: 'Navigate', path: '/navigation', icon: 'Navigation' },
      { id: 'stadium', label: 'Stadium Map', path: '/stadium', icon: 'Map' },
      { id: 'assistant', label: 'AI Assistant', path: '/assistant', icon: 'Bot' },
    ],
  },
  staff: {
    role: 'staff',
    label: 'Tournament Staff',
    description: 'Logistics, schedules, volunteer management, and equipment tracking',
    icon: 'Briefcase',
    color: '#f59e0b',
    defaultView: '/dashboard',
    navItems: [
      { id: 'dashboard', label: 'Dashboard', path: '/dashboard', icon: 'LayoutDashboard' },
      { id: 'match', label: 'Schedule', path: '/match', icon: 'Calendar' },
      { id: 'stadium', label: 'Stadium Map', path: '/stadium', icon: 'Map' },
      { id: 'incidents', label: 'Incidents', path: '/incidents', icon: 'AlertTriangle' },
      { id: 'assistant', label: 'AI Assistant', path: '/assistant', icon: 'Bot' },
    ],
  },
};
