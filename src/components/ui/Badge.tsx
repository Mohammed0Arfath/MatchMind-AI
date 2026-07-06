import React from 'react';
import './Badge.css';

interface BadgeProps {
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info' | 'accent';
  size?: 'sm' | 'md';
  dot?: boolean;
  pulseDot?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Badge = React.memo(function Badge({
  variant = 'default',
  size = 'sm',
  dot = false,
  pulseDot = false,
  children,
  className = '',
}: BadgeProps) {
  return (
    <span className={`badge badge--${variant} badge--${size} ${className}`}>
      {dot && <span className={`badge__dot ${pulseDot ? 'badge__dot--pulse' : ''}`} aria-hidden="true" />}
      {children}
    </span>
  );
});
