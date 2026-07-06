import React, { useState } from 'react';
import { useAuth } from '../../app/providers/AuthProvider';
import { useThemeContext } from '../../app/providers/ThemeProvider';
import { Sun, Moon, Bell, Search, Menu, Clock } from 'lucide-react';
import { StatusIndicator } from '../ui/StatusIndicator';
import './TopBar.css';

interface TopBarProps {
  onMenuClick: () => void;
  pageTitle?: string;
}

export function TopBar({ onMenuClick, pageTitle }: TopBarProps) {
  const { theme, toggleTheme } = useThemeContext();
  const { user, roleConfig } = useAuth();
  const [searchOpen, setSearchOpen] = useState(false);
  const now = new Date();

  return (
    <header className="topbar" role="banner">
      <div className="topbar__left">
        <button
          className="topbar__menu-btn"
          onClick={onMenuClick}
          aria-label="Toggle menu"
        >
          <Menu size={18} />
        </button>

        {pageTitle && <h1 className="topbar__title">{pageTitle}</h1>}
      </div>

      <div className="topbar__center">
        <div className={`topbar__search ${searchOpen ? 'topbar__search--open' : ''}`}>
          <Search size={15} className="topbar__search-icon" aria-hidden="true" />
          <input
            type="search"
            className="topbar__search-input"
            placeholder="Search or ask AI... (⌘K)"
            aria-label="Search operations"
            onFocus={() => setSearchOpen(true)}
            onBlur={() => setSearchOpen(false)}
          />
          <kbd className="topbar__search-kbd">⌘K</kbd>
        </div>
      </div>

      <div className="topbar__right">
        <div className="topbar__live-indicator">
          <StatusIndicator status="online" pulse label="LIVE" />
        </div>

        <span className="topbar__clock" aria-label={`Current time: ${now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}`}>
          <Clock size={14} />
          {now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
        </span>

        <button
          className="topbar__icon-btn"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
        </button>

        <button className="topbar__icon-btn topbar__icon-btn--notify" aria-label="Notifications (3 unread)">
          <Bell size={17} />
          <span className="topbar__notify-dot" aria-hidden="true" />
        </button>

        {user && (
          <div className="topbar__avatar" title={`${user.name} — ${roleConfig?.label}`}>
            <span className="topbar__avatar-letter" style={{ background: roleConfig?.color }}>
              {user.name.charAt(0)}
            </span>
          </div>
        )}
      </div>
    </header>
  );
}
