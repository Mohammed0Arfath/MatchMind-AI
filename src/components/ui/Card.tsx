import React from 'react';
import './Card.css';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outlined' | 'flush';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  interactive?: boolean;
  selected?: boolean;
  children: React.ReactNode;
}

export const Card = React.memo(function Card({
  variant = 'default',
  padding = 'md',
  interactive = false,
  selected = false,
  children,
  className = '',
  ...props
}: CardProps) {
  return (
    <div
      className={`card card--${variant} card--pad-${padding} ${interactive ? 'card--interactive' : ''} ${selected ? 'card--selected' : ''} ${className}`}
      role={interactive ? 'button' : undefined}
      tabIndex={interactive ? 0 : undefined}
      {...props}
    >
      {children}
    </div>
  );
});

interface CardHeaderProps {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
  icon?: React.ReactNode;
}

export function CardHeader({ title, subtitle, action, icon }: CardHeaderProps) {
  return (
    <div className="card__header">
      <div className="card__header-left">
        {icon && <span className="card__header-icon">{icon}</span>}
        <div>
          <h3 className="card__title">{title}</h3>
          {subtitle && <p className="card__subtitle">{subtitle}</p>}
        </div>
      </div>
      {action && <div className="card__header-action">{action}</div>}
    </div>
  );
}
