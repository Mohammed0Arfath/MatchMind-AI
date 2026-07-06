import React, { useState, useCallback } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';
import './MainLayout.css';

export function MainLayout() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = useCallback(() => {
    setSidebarCollapsed((prev) => !prev);
  }, []);

  return (
    <div className={`layout ${sidebarCollapsed ? 'layout--collapsed' : ''}`}>
      <a href="#main-content" className="skip-nav">
        Skip to main content
      </a>
      <Sidebar collapsed={sidebarCollapsed} onToggleCollapse={toggleSidebar} />
      <div className="layout__content">
        <TopBar onMenuClick={toggleSidebar} />
        <main id="main-content" className="layout__main" role="main">
          <React.Suspense fallback={<div className="layout__loading"><div className="layout__loading-spinner" /></div>}>
            <Outlet />
          </React.Suspense>
        </main>
      </div>
    </div>
  );
}
