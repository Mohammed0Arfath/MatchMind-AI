import React, { useState } from 'react';
import { Card, CardHeader } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { incidents, getActiveIncidents } from '../../data/incidents';
import { INCIDENT_TYPE_LABELS } from '../../types';
import { formatRelativeTime, formatDuration } from '../../utils/format';
import type { Incident, IncidentStatus } from '../../types';
import { AlertTriangle, Clock, MapPin, User, Bot, ChevronDown, ChevronUp, Plus, Filter } from 'lucide-react';
import './IncidentPanel.css';

const PRIORITY_VARIANT: Record<string, 'danger' | 'warning' | 'info' | 'default'> = {
  critical: 'danger',
  high: 'danger',
  medium: 'warning',
  low: 'info',
};

const STATUS_VARIANT: Record<IncidentStatus, 'danger' | 'warning' | 'info' | 'success' | 'default'> = {
  reported: 'danger',
  acknowledged: 'warning',
  in_progress: 'info',
  resolved: 'success',
  escalated: 'danger',
};

export function IncidentPanel() {
  const [filter, setFilter] = useState<'all' | 'active' | 'resolved'>('active');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = incidents.filter((inc) => {
    if (filter === 'active') return inc.status !== 'resolved';
    if (filter === 'resolved') return inc.status === 'resolved';
    return true;
  });

  const activeCount = getActiveIncidents().length;

  return (
    <div className="incidents-page">
      <div className="incidents-page__header">
        <div>
          <h2 className="incidents-page__title">Incident Management</h2>
          <p className="incidents-page__subtitle">Track, assign, and resolve stadium incidents in real-time</p>
        </div>
        <Button variant="primary" size="sm" icon={<Plus size={14} />}>Report Incident</Button>
      </div>

      {/* Summary */}
      <div className="incidents-page__summary">
        <div className="incidents-page__stat">
          <span className="incidents-page__stat-value incidents-page__stat-value--danger">{activeCount}</span>
          <span className="incidents-page__stat-label">Active</span>
        </div>
        <div className="incidents-page__stat">
          <span className="incidents-page__stat-value">{incidents.filter(i => i.priority === 'high' || i.priority === 'critical').length}</span>
          <span className="incidents-page__stat-label">High Priority</span>
        </div>
        <div className="incidents-page__stat">
          <span className="incidents-page__stat-value incidents-page__stat-value--success">{incidents.filter(i => i.status === 'resolved').length}</span>
          <span className="incidents-page__stat-label">Resolved</span>
        </div>
        <div className="incidents-page__stat">
          <span className="incidents-page__stat-value">1.2m</span>
          <span className="incidents-page__stat-label">Avg Response</span>
        </div>
      </div>

      {/* Filters */}
      <div className="incidents-page__filters">
        {(['active', 'all', 'resolved'] as const).map((f) => (
          <Button key={f} variant={filter === f ? 'primary' : 'ghost'} size="sm" onClick={() => setFilter(f)}>
            {f.charAt(0).toUpperCase() + f.slice(1)}
            {f === 'active' && <Badge variant="danger" size="sm">{activeCount}</Badge>}
          </Button>
        ))}
      </div>

      {/* Incident List */}
      <div className="incidents-page__list" role="list" aria-label="Incidents">
        {filtered.map((incident) => (
          <Card
            key={incident.id}
            padding="none"
            className={`incidents-page__card ${expandedId === incident.id ? 'incidents-page__card--expanded' : ''}`}
          >
            <button
              className="incidents-page__card-header"
              onClick={() => setExpandedId(expandedId === incident.id ? null : incident.id)}
              aria-expanded={expandedId === incident.id}
            >
              <div className="incidents-page__card-priority" style={{ background: incident.priority === 'high' || incident.priority === 'critical' ? 'var(--color-danger)' : incident.priority === 'medium' ? 'var(--color-warning)' : 'var(--color-info)' }} />
              <div className="incidents-page__card-main">
                <div className="incidents-page__card-top">
                  <Badge variant={PRIORITY_VARIANT[incident.priority] ?? 'default'} size="sm">{incident.priority.toUpperCase()}</Badge>
                  <Badge variant={STATUS_VARIANT[incident.status]} size="sm">{incident.status.replace('_', ' ')}</Badge>
                  <span className="incidents-page__card-type">{INCIDENT_TYPE_LABELS[incident.type]}</span>
                </div>
                <h3 className="incidents-page__card-title">{incident.title}</h3>
                <div className="incidents-page__card-meta">
                  <span><MapPin size={11} /> {incident.location}</span>
                  <span><Clock size={11} /> {formatRelativeTime(incident.reportedAt)}</span>
                  {incident.assignedTo && <span><User size={11} /> {incident.assignedTo}</span>}
                </div>
              </div>
              <span className="incidents-page__card-chevron">
                {expandedId === incident.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </span>
            </button>

            {expandedId === incident.id && (
              <div className="incidents-page__card-body">
                <div className="incidents-page__card-section">
                  <h4>Description</h4>
                  <p>{incident.description}</p>
                </div>

                <div className="incidents-page__card-section incidents-page__ai-section">
                  <h4><Bot size={14} /> AI Analysis & Recommendation</h4>
                  <p>{incident.aiSuggestion}</p>
                </div>

                {incident.notes.length > 0 && (
                  <div className="incidents-page__card-section">
                    <h4>Activity Log</h4>
                    <div className="incidents-page__notes">
                      {incident.notes.map((note) => (
                        <div key={note.id} className="incidents-page__note">
                          <span className="incidents-page__note-time">{formatRelativeTime(note.timestamp)}</span>
                          <span className="incidents-page__note-author">{note.author}</span>
                          <p className="incidents-page__note-content">{note.content}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="incidents-page__card-actions">
                  <Button variant="primary" size="sm">Update Status</Button>
                  <Button variant="secondary" size="sm">Assign Team</Button>
                  <Button variant="ghost" size="sm">View on Map</Button>
                </div>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
