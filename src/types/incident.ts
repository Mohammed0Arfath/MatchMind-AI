import type { Priority, Status, Timestamp, Coordinates } from './common';

export type IncidentType =
  | 'medical_emergency'
  | 'lost_child'
  | 'suspicious_activity'
  | 'facility_damage'
  | 'long_queue'
  | 'blocked_exit'
  | 'crowd_surge'
  | 'weather_alert'
  | 'fire_alarm'
  | 'power_outage'
  | 'unauthorized_access'
  | 'altercation';

export type IncidentStatus = 'reported' | 'acknowledged' | 'in_progress' | 'resolved' | 'escalated';

export interface Incident {
  id: string;
  type: IncidentType;
  title: string;
  description: string;
  priority: Priority;
  status: IncidentStatus;
  location: string;
  zone: string;
  position: Coordinates;
  reportedBy: string;
  reportedAt: Timestamp;
  acknowledgedAt: Timestamp | null;
  resolvedAt: Timestamp | null;
  assignedTo: string | null;
  assignedDepartment: string;
  responseTimeMinutes: number | null;
  estimatedResolutionMinutes: number | null;
  notes: IncidentNote[];
  aiSuggestion: string;
  aiPriority: Priority;
}

export interface IncidentNote {
  id: string;
  author: string;
  content: string;
  timestamp: Timestamp;
}

export const INCIDENT_TYPE_LABELS: Record<IncidentType, string> = {
  medical_emergency: 'Medical Emergency',
  lost_child: 'Lost Child',
  suspicious_activity: 'Suspicious Activity',
  facility_damage: 'Facility Damage',
  long_queue: 'Long Queue',
  blocked_exit: 'Blocked Exit',
  crowd_surge: 'Crowd Surge',
  weather_alert: 'Weather Alert',
  fire_alarm: 'Fire Alarm',
  power_outage: 'Power Outage',
  unauthorized_access: 'Unauthorized Access',
  altercation: 'Altercation',
};

export const INCIDENT_TYPE_ICONS: Record<IncidentType, string> = {
  medical_emergency: 'Heart',
  lost_child: 'Baby',
  suspicious_activity: 'Eye',
  facility_damage: 'Wrench',
  long_queue: 'Clock',
  blocked_exit: 'DoorClosed',
  crowd_surge: 'Users',
  weather_alert: 'CloudLightning',
  fire_alarm: 'Flame',
  power_outage: 'Zap',
  unauthorized_access: 'ShieldAlert',
  altercation: 'Swords',
};
