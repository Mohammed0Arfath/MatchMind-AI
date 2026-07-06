import type { Timestamp } from './common';

export type MatchStatus = 'scheduled' | 'live' | 'halftime' | 'completed' | 'postponed';

export type GroupLetter = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';

export interface Team {
  code: string;
  name: string;
  flag: string; // emoji flag
  group: GroupLetter;
}

export interface Match {
  id: string;
  matchNumber: number;
  homeTeam: Team;
  awayTeam: Team;
  stadiumId: string;
  stadiumName: string;
  city: string;
  datetime: Timestamp;
  status: MatchStatus;
  group: GroupLetter | 'R16' | 'QF' | 'SF' | 'F';
  stage: 'group' | 'round_of_16' | 'quarter_final' | 'semi_final' | 'final';
  homeScore: number | null;
  awayScore: number | null;
  attendance: number | null;
}

export interface MatchDay {
  date: string; // ISO date
  matches: Match[];
}
