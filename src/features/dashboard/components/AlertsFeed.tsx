import React from 'react';
import { Badge } from '../../../components/ui/Badge';
import { getActiveIncidents } from '../../../data/incidents';
import { INCIDENT_TYPE_LABELS } from '../../../types';
import { formatRelativeTime } from '../../../utils/format';
import { AlertTriangle, Clock, MapPin } from 'lucide-react';
import './AlertsFeed.css';

const PRIORITY_BADGE: Record<string, 'danger' | 'warning' | 'info' | 'default'> = {
  critical: 'danger',
  high: 'danger',
  medium: 'warning',
  low: 'info',
};

export const AlertsFeed = React.memo(function AlertsFeed() {
  const activeIncidents = getActiveIncidents();

  return (
    <div className="alerts-feed">
      <div className="alerts-feed__header">
        <div className="alerts-feed__title-row">
          <AlertTriangle size={16} />
          <h3 className="alerts-feed__title">Active Alerts</h3>
          <Badge variant="danger" size="sm" dot pulseDot>{activeIncidents.length}</Badge>
        </div>
      </div>

      <ul className="alerts-feed__list" role="list" aria-label="Active incidents">
        {activeIncidents.map((incident) => (
          <li key={incident.id} className="alerts-feed__item" role="listitem">
            <div className="alerts-feed__item-header">
              <Badge variant={PRIORITY_BADGE[incident.priority] ?? 'default'} size="sm">
                {incident.priority.toUpperCase()}
              </Badge>
              <Badge variant="default" size="sm">
                {INCIDENT_TYPE_LABELS[incident.type]}
              </Badge>
            </div>
            <p className="alerts-feed__item-title">{incident.title}</p>
            <div className="alerts-feed__item-meta">
              <span className="alerts-feed__item-meta-item">
                <MapPin size={11} />
                {incident.location}
              </span>
              <span className="alerts-feed__item-meta-item">
                <Clock size={11} />
                {formatRelativeTime(incident.reportedAt)}
              </span>
            </div>
            {incident.assignedTo && (
              <p className="alerts-feed__item-assigned">
                Assigned to: {incident.assignedTo}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
});
