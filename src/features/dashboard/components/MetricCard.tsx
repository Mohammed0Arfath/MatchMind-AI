import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import './MetricCard.css';

interface MetricCardProps {
  label: string;
  value: string | number;
  change?: number; // percentage
  changeLabel?: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'accent';
  size?: 'sm' | 'md';
}

export const MetricCard = React.memo(function MetricCard({
  label,
  value,
  change,
  changeLabel,
  icon,
  variant = 'default',
  size = 'md',
}: MetricCardProps) {
  const getTrend = () => {
    if (change === undefined || change === 0) return 'neutral';
    return change > 0 ? 'up' : 'down';
  };

  const trend = getTrend();

  return (
    <div className={`metric-card metric-card--${variant} metric-card--${size}`}>
      <div className="metric-card__header">
        <span className="metric-card__label">{label}</span>
        {icon && <span className="metric-card__icon" aria-hidden="true">{icon}</span>}
      </div>
      <div className="metric-card__value" aria-label={`${label}: ${value}`}>{value}</div>
      {change !== undefined && (
        <div className={`metric-card__change metric-card__change--${trend}`}>
          {trend === 'up' && <TrendingUp size={12} />}
          {trend === 'down' && <TrendingDown size={12} />}
          {trend === 'neutral' && <Minus size={12} />}
          <span>{change > 0 ? '+' : ''}{change.toFixed(1)}%</span>
          {changeLabel && <span className="metric-card__change-label">{changeLabel}</span>}
        </div>
      )}
    </div>
  );
});
