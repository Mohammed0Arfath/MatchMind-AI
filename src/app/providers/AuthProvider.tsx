import React, { createContext, useCallback, useContext, useState } from 'react';
import type { User, UserRole } from '../../types';
import { ROLE_CONFIGS } from '../../types';

interface AuthContextType {
  user: User | null;
  role: UserRole | null;
  isAuthenticated: boolean;
  selectRole: (role: UserRole) => void;
  logout: () => void;
  roleConfig: typeof ROLE_CONFIGS[UserRole] | null;
}

const AuthContext = createContext<AuthContextType | null>(null);

const DEFAULT_USERS: Record<UserRole, User> = {
  operations: {
    id: 'ops-001',
    name: 'Sarah Chen',
    role: 'operations',
    currentLocation: 'Control Room',
    currentStadiumId: 'metlife',
    preferences: {
      theme: 'dark',
      reducedMotion: false,
      highContrast: false,
      fontSize: 'normal',
      accessibilityNeeds: ['none'],
    },
    zone: 'All Zones',
    shift: '06:00 - 18:00',
  },
  security: {
    id: 'sec-001',
    name: 'James Rodriguez',
    role: 'security',
    currentLocation: 'Gate B',
    currentStadiumId: 'metlife',
    preferences: {
      theme: 'dark',
      reducedMotion: false,
      highContrast: false,
      fontSize: 'normal',
      accessibilityNeeds: ['none'],
    },
    zone: 'North Stand',
    shift: '14:00 - 22:00',
  },
  spectator: {
    id: 'spec-001',
    name: 'Alex Kim',
    role: 'spectator',
    currentLocation: 'Section 214',
    currentStadiumId: 'metlife',
    preferences: {
      theme: 'dark',
      reducedMotion: false,
      highContrast: false,
      fontSize: 'normal',
      accessibilityNeeds: ['none'],
    },
    zone: null,
    shift: null,
  },
  staff: {
    id: 'staff-001',
    name: 'Maria Lopez',
    role: 'staff',
    currentLocation: 'Operations Hub',
    currentStadiumId: 'metlife',
    preferences: {
      theme: 'dark',
      reducedMotion: false,
      highContrast: false,
      fontSize: 'normal',
      accessibilityNeeds: ['none'],
    },
    zone: 'East Wing',
    shift: '08:00 - 20:00',
  },
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const selectRole = useCallback((role: UserRole) => {
    setUser(DEFAULT_USERS[role]);
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  const role = user?.role ?? null;
  const roleConfig = role ? ROLE_CONFIGS[role] : null;

  return (
    <AuthContext.Provider
      value={{
        user,
        role,
        isAuthenticated: user !== null,
        selectRole,
        logout,
        roleConfig,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
