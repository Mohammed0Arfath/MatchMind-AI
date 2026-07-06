export type Timestamp = number;

export type CongestionLevel = 'low' | 'moderate' | 'high' | 'critical';

export type Priority = 'low' | 'medium' | 'high' | 'critical';

export type Status = 'active' | 'inactive' | 'pending' | 'resolved' | 'closed';

export type Direction = 'north' | 'south' | 'east' | 'west' | 'ne' | 'nw' | 'se' | 'sw';

export interface Coordinates {
  x: number;
  y: number;
}

export interface TimeRange {
  start: Timestamp;
  end: Timestamp;
}

export interface PaginatedResult<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
}

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface Notification {
  id: string;
  type: 'info' | 'success' | 'warning' | 'danger';
  title: string;
  message: string;
  timestamp: Timestamp;
  read: boolean;
}
