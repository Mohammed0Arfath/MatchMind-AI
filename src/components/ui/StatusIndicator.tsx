import React from 'react';
import './StatusIndicator.css';

interface StatusIndicatorProps {
  status: 'online' | 'warning' | 'critical' | 'offline' | 'idle';
  label?: string;
  size?: 'sm' | 'md';
  pulse?: boolean;
}

export const StatusIndicator = React.memo(function StatusIndicator({
  status,
  label,
  size = 'sm',
  pulse = false,
}: StatusIndicatorProps) {
  return (
    <span className={`status-indicator status-indicator--${status} status-indicator--${size}`} role="status" aria-label={label ?? status}>
      <span className={`status-indicator__dot ${pulse ? 'status-indicator__dot--pulse' : ''}`} aria-hidden="true" />
      {label && <span className="status-indicator__label">{label}</span>}
    </span>
  );
});
