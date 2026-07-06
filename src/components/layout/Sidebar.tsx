import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useAuth } from '../../app/providers/AuthProvider';
import {
  LayoutDashboard, Map, Users, TrendingUp, AlertTriangle,
  Bot, Calendar, Home, Navigation, Shield, Briefcase,
  Settings, ChevronLeft, ChevronRight, LogOut,
} from 'lucide-react';
import './Sidebar.css';

const ICON_MAP: Record<string, React.ReactNode> = {
  LayoutDashboard: <LayoutDashboard size={18} />,
  Map: <Map size={18} />,
  Users: <Users size={18} />,
  TrendingUp: <TrendingUp size={18} />,
  AlertTriangle: <AlertTriangle size={18} />,
  Bot: <Bot size={18} />,
  Calendar: <Calendar size={18} />,
  Home: <Home size={18} />,
  Navigation: <Navigation size={18} />,
  Shield: <Shield size={18} />,
  Briefcase: <Briefcase size={18} />,
  Settings: <Settings size={18} />,
};

interface SidebarProps {
  collapsed: boolean;
  onToggleCollapse: () => void;
}

export function Sidebar({ collapsed, onToggleCollapse }: SidebarProps) {
  const { roleConfig, user, logout } = useAuth();
  const location = useLocation();

  if (!roleConfig || !user) return null;

  return (
    <aside className={`sidebar ${collapsed ? 'sidebar--collapsed' : ''}`} aria-label="Main navigation">
      <div className="sidebar__header">
        <div className="sidebar__brand">
          <div className="sidebar__logo" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="8" fill="var(--color-accent)" />
              <path d="M8 16L13 11L16 14L19 11L24 16L19 21L16 18L13 21L8 16Z" fill="white" opacity="0.9" />
              <circle cx="16" cy="16" r="2" fill="var(--color-accent)" />
            </svg>
          </div>
          {!collapsed && (
            <div className="sidebar__brand-text">
              <span className="sidebar__brand-name">MatchMind</span>
              <span className="sidebar__brand-tag">AI</span>
            </div>
          )}
        </div>
        <button
          className="sidebar__toggle"
          onClick={onToggleCollapse}
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </div>

      {!collapsed && (
        <div className="sidebar__role">
          <div className="sidebar__role-dot" style={{ background: roleConfig.color }} />
          <div className="sidebar__role-info">
            <span className="sidebar__role-name">{user.name}</span>
            <span className="sidebar__role-label">{roleConfig.label}</span>
          </div>
        </div>
      )}

      <nav className="sidebar__nav">
        <ul className="sidebar__nav-list" role="list">
          {roleConfig.navItems.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `sidebar__nav-item ${isActive ? 'sidebar__nav-item--active' : ''}`
                }
                title={collapsed ? item.label : undefined}
                aria-current={location.pathname === item.path ? 'page' : undefined}
              >
                <span className="sidebar__nav-icon">{ICON_MAP[item.icon] ?? <LayoutDashboard size={18} />}</span>
                {!collapsed && <span className="sidebar__nav-label">{item.label}</span>}
                {!collapsed && item.badge != null && (
                  <span className="sidebar__nav-badge">{item.badge}</span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar__footer">
        <button className="sidebar__nav-item sidebar__footer-btn" onClick={logout} title="Switch Role">
          <span className="sidebar__nav-icon"><LogOut size={18} /></span>
          {!collapsed && <span className="sidebar__nav-label">Switch Role</span>}
        </button>
      </div>
    </aside>
  );
}
