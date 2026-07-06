import React from 'react';
import { useAuth } from '../../app/providers/AuthProvider';
import type { UserRole } from '../../types';
import { ROLE_CONFIGS } from '../../types';
import { Settings, Shield, User, Briefcase, ArrowRight } from 'lucide-react';
import './RoleSelection.css';

const ROLE_ICONS: Record<UserRole, React.ReactNode> = {
  operations: <Settings size={28} />,
  security: <Shield size={28} />,
  spectator: <User size={28} />,
  staff: <Briefcase size={28} />,
};

const ROLE_ORDER: UserRole[] = ['operations', 'security', 'staff', 'spectator'];

export function RoleSelection() {
  const { selectRole } = useAuth();

  return (
    <div className="role-selection">
      <div className="role-selection__content">
        <div className="role-selection__header">
          <div className="role-selection__logo">
            <svg width="40" height="40" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="8" fill="#6366f1" />
              <path d="M8 16L13 11L16 14L19 11L24 16L19 21L16 18L13 21L8 16Z" fill="white" opacity="0.9" />
              <circle cx="16" cy="16" r="2" fill="#6366f1" />
            </svg>
          </div>
          <h1 className="role-selection__title">MatchMind <span className="role-selection__ai">AI</span></h1>
          <p className="role-selection__subtitle">
            FIFA World Cup 2026 — Smart Stadium Operations Platform
          </p>
          <p className="role-selection__venue">
            MetLife Stadium, East Rutherford, NJ
          </p>
        </div>

        <ul className="role-selection__grid" aria-label="Select your role">
          {ROLE_ORDER.map((roleKey) => {
            const config = ROLE_CONFIGS[roleKey];
            return (
              <li key={roleKey}>
                <button
                  className="role-card"
                  onClick={() => selectRole(roleKey)}
                  aria-label={`Sign in as ${config.label}`}
                >
                  <div className="role-card__icon" style={{ color: config.color, background: `${config.color}15` }}>
                    {ROLE_ICONS[roleKey]}
                  </div>
                  <div className="role-card__info">
                    <h2 className="role-card__title">{config.label}</h2>
                    <p className="role-card__desc">{config.description}</p>
                  </div>
                  <div className="role-card__arrow">
                    <ArrowRight size={16} />
                  </div>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="role-selection__footer">
          <div className="role-selection__status">
            <span className="role-selection__status-dot" />
            System Operational — All services active
          </div>
          <p className="role-selection__meta">
            Round of 16 · Match Day 3 · {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
      </div>
    </div>
  );
}
