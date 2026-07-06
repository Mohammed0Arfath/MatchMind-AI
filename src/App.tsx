import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './app/providers/AuthProvider';
import { ProtectedRoute } from './app/providers/ProtectedRoute';

import { MainLayout } from './components/layout/MainLayout';
import { Login } from './features/auth/Login';
import { OperationsDashboard } from './features/dashboard/OperationsDashboard';
import { SecurityDashboard } from './features/dashboard/SecurityDashboard';
import { SpectatorDashboard } from './features/dashboard/SpectatorDashboard';
import { StaffDashboard } from './features/dashboard/StaffDashboard';
import { StadiumMap } from './features/stadium/StadiumMap';
import { IncidentPanel } from './features/incidents/IncidentPanel';
import { MatchCompanion } from './features/match/MatchCompanion';
import { AssistantPanel } from './features/assistant/AssistantPanel';
import { CrowdDashboard } from './features/crowd/CrowdDashboard';
import { PredictionsDashboard } from './features/predictions/PredictionsDashboard';
import { NavigationView } from './features/navigation/NavigationView';

// Dashboard router component that renders the correct dashboard based on role
function RoleDashboardRouter() {
  const { user } = useAuth();
  
  if (!user) return <Navigate to="/" replace />;
  
  switch (user.role) {
    case 'operations':
      return <OperationsDashboard />;
    case 'security':
      return <SecurityDashboard />;
    case 'spectator':
      return <SpectatorDashboard />;
    case 'staff':
      return <StaffDashboard />;
    default:
      return <OperationsDashboard />;
  }
}

export default function App() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-bg-primary)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', color: 'var(--color-text-secondary)' }}>
          <div className="spinner-loader" style={{ width: 32, height: 32, border: '3px solid rgba(99,102,241,0.2)', borderTopColor: 'var(--color-accent)', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
          <div>Initializing MatchMind Secure Session...</div>
        </div>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  // If no user/role selected, force them to the login gateway
  if (!user) {
    return <Login />;
  }

  // The MainLayout contains the Sidebar, TopBar, and an <Outlet /> for nested routes
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* Default route when logged in is the dashboard */}
        <Route index element={<Navigate to="/dashboard" replace />} />
        
        {/* Feature routes */}
        <Route path="dashboard" element={<RoleDashboardRouter />} />
        <Route path="stadium" element={<StadiumMap />} />
        
        <Route path="crowd" element={
          <ProtectedRoute allowedRoles={['operations', 'security']}>
            <CrowdDashboard />
          </ProtectedRoute>
        } />
        
        <Route path="predictions" element={
          <ProtectedRoute allowedRoles={['operations']}>
            <PredictionsDashboard />
          </ProtectedRoute>
        } />
        
        <Route path="incidents" element={
          <ProtectedRoute allowedRoles={['operations', 'security', 'staff']}>
            <IncidentPanel />
          </ProtectedRoute>
        } />
        
        <Route path="navigation" element={<NavigationView />} />
        <Route path="match" element={<MatchCompanion />} />
        <Route path="assistant" element={<AssistantPanel />} />
        
        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Route>
    </Routes>
  );
}
