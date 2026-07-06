import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './app/providers/AuthProvider';

import { MainLayout } from './components/layout/MainLayout';
import { RoleSelection } from './features/auth/RoleSelection';
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
  const { user } = useAuth();

  // If no user/role selected, force them to the role selection gateway
  if (!user) {
    return <RoleSelection />;
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
        <Route path="crowd" element={<CrowdDashboard />} />
        <Route path="predictions" element={<PredictionsDashboard />} />
        <Route path="incidents" element={<IncidentPanel />} />
        <Route path="navigation" element={<NavigationView />} />
        <Route path="match" element={<MatchCompanion />} />
        <Route path="assistant" element={<AssistantPanel />} />
        
        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Route>
    </Routes>
  );
}
