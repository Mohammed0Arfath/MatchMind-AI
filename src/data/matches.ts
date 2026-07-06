import type { Match, Team, GroupLetter } from '../types';

const teams: Record<string, Team> = {
  USA: { code: 'USA', name: 'United States', flag: '🇺🇸', group: 'A' },
  MEX: { code: 'MEX', name: 'Mexico', flag: '🇲🇽', group: 'A' },
  CAN: { code: 'CAN', name: 'Canada', flag: '🇨🇦', group: 'A' },
  COL: { code: 'COL', name: 'Colombia', flag: '🇨🇴', group: 'A' },
  BRA: { code: 'BRA', name: 'Brazil', flag: '🇧🇷', group: 'B' },
  ARG: { code: 'ARG', name: 'Argentina', flag: '🇦🇷', group: 'B' },
  FRA: { code: 'FRA', name: 'France', flag: '🇫🇷', group: 'B' },
  JPN: { code: 'JPN', name: 'Japan', flag: '🇯🇵', group: 'B' },
  GER: { code: 'GER', name: 'Germany', flag: '🇩🇪', group: 'C' },
  ESP: { code: 'ESP', name: 'Spain', flag: '🇪🇸', group: 'C' },
  ENG: { code: 'ENG', name: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', group: 'C' },
  KOR: { code: 'KOR', name: 'South Korea', flag: '🇰🇷', group: 'C' },
  POR: { code: 'POR', name: 'Portugal', flag: '🇵🇹', group: 'D' },
  NED: { code: 'NED', name: 'Netherlands', flag: '🇳🇱', group: 'D' },
  URU: { code: 'URU', name: 'Uruguay', flag: '🇺🇾', group: 'D' },
  SEN: { code: 'SEN', name: 'Senegal', flag: '🇸🇳', group: 'D' },
  ITA: { code: 'ITA', name: 'Italy', flag: '🇮🇹', group: 'E' },
  CRO: { code: 'CRO', name: 'Croatia', flag: '🇭🇷', group: 'E' },
  NGA: { code: 'NGA', name: 'Nigeria', flag: '🇳🇬', group: 'E' },
  AUS: { code: 'AUS', name: 'Australia', flag: '🇦🇺', group: 'E' },
  MAR: { code: 'MAR', name: 'Morocco', flag: '🇲🇦', group: 'F' },
  BEL: { code: 'BEL', name: 'Belgium', flag: '🇧🇪', group: 'F' },
  CHI: { code: 'CHI', name: 'Chile', flag: '🇨🇱', group: 'F' },
  SUI: { code: 'SUI', name: 'Switzerland', flag: '🇨🇭', group: 'F' },
  DEN: { code: 'DEN', name: 'Denmark', flag: '🇩🇰', group: 'G' },
  WAL: { code: 'WAL', name: 'Wales', flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', group: 'G' },
  ECU: { code: 'ECU', name: 'Ecuador', flag: '🇪🇨', group: 'G' },
  TUN: { code: 'TUN', name: 'Tunisia', flag: '🇹🇳', group: 'G' },
  POL: { code: 'POL', name: 'Poland', flag: '🇵🇱', group: 'H' },
  GHA: { code: 'GHA', name: 'Ghana', flag: '🇬🇭', group: 'H' },
  IRN: { code: 'IRN', name: 'Iran', flag: '🇮🇷', group: 'H' },
  CRC: { code: 'CRC', name: 'Costa Rica', flag: '🇨🇷', group: 'H' },
};

function t(code: string): Team {
  return teams[code]!;
}

// Using dates relative to July 2026 for realism
const BASE = new Date('2026-06-11T00:00:00Z').getTime();
const DAY = 86_400_000;
const HOUR = 3_600_000;

export const matches: Match[] = [
  // === GROUP A ===
  { id: 'm01', matchNumber: 1, homeTeam: t('USA'), awayTeam: t('COL'), stadiumId: 'metlife', stadiumName: 'MetLife Stadium', city: 'East Rutherford', datetime: BASE + 16 * HOUR, status: 'completed', group: 'A', stage: 'group', homeScore: 2, awayScore: 1, attendance: 82102 },
  { id: 'm02', matchNumber: 2, homeTeam: t('MEX'), awayTeam: t('CAN'), stadiumId: 'metlife', stadiumName: 'MetLife Stadium', city: 'East Rutherford', datetime: BASE + DAY + 19 * HOUR, status: 'completed', group: 'A', stage: 'group', homeScore: 1, awayScore: 1, attendance: 78540 },
  { id: 'm09', matchNumber: 9, homeTeam: t('USA'), awayTeam: t('CAN'), stadiumId: 'metlife', stadiumName: 'MetLife Stadium', city: 'East Rutherford', datetime: BASE + 4 * DAY + 16 * HOUR, status: 'completed', group: 'A', stage: 'group', homeScore: 3, awayScore: 0, attendance: 82500 },
  { id: 'm10', matchNumber: 10, homeTeam: t('COL'), awayTeam: t('MEX'), stadiumId: 'metlife', stadiumName: 'MetLife Stadium', city: 'East Rutherford', datetime: BASE + 4 * DAY + 19 * HOUR, status: 'completed', group: 'A', stage: 'group', homeScore: 2, awayScore: 2, attendance: 79100 },
  { id: 'm17', matchNumber: 17, homeTeam: t('CAN'), awayTeam: t('COL'), stadiumId: 'metlife', stadiumName: 'MetLife Stadium', city: 'East Rutherford', datetime: BASE + 8 * DAY + 16 * HOUR, status: 'completed', group: 'A', stage: 'group', homeScore: 0, awayScore: 1, attendance: 71400 },
  { id: 'm18', matchNumber: 18, homeTeam: t('MEX'), awayTeam: t('USA'), stadiumId: 'metlife', stadiumName: 'MetLife Stadium', city: 'East Rutherford', datetime: BASE + 8 * DAY + 16 * HOUR, status: 'completed', group: 'A', stage: 'group', homeScore: 1, awayScore: 2, attendance: 82500 },

  // === GROUP B ===
  { id: 'm03', matchNumber: 3, homeTeam: t('BRA'), awayTeam: t('JPN'), stadiumId: 'metlife', stadiumName: 'MetLife Stadium', city: 'East Rutherford', datetime: BASE + DAY + 13 * HOUR, status: 'completed', group: 'B', stage: 'group', homeScore: 3, awayScore: 1, attendance: 82500 },
  { id: 'm04', matchNumber: 4, homeTeam: t('ARG'), awayTeam: t('FRA'), stadiumId: 'metlife', stadiumName: 'MetLife Stadium', city: 'East Rutherford', datetime: BASE + DAY + 16 * HOUR, status: 'completed', group: 'B', stage: 'group', homeScore: 2, awayScore: 2, attendance: 82500 },

  // === GROUP C ===
  { id: 'm05', matchNumber: 5, homeTeam: t('GER'), awayTeam: t('KOR'), stadiumId: 'metlife', stadiumName: 'MetLife Stadium', city: 'East Rutherford', datetime: BASE + 2 * DAY + 13 * HOUR, status: 'completed', group: 'C', stage: 'group', homeScore: 2, awayScore: 0, attendance: 76200 },
  { id: 'm06', matchNumber: 6, homeTeam: t('ESP'), awayTeam: t('ENG'), stadiumId: 'metlife', stadiumName: 'MetLife Stadium', city: 'East Rutherford', datetime: BASE + 2 * DAY + 19 * HOUR, status: 'completed', group: 'C', stage: 'group', homeScore: 1, awayScore: 1, attendance: 82500 },

  // === TODAY's matches (simulated as live/upcoming) ===
  { id: 'm25', matchNumber: 25, homeTeam: t('BRA'), awayTeam: t('GER'), stadiumId: 'metlife', stadiumName: 'MetLife Stadium', city: 'East Rutherford', datetime: Date.now() - 45 * 60 * 1000, status: 'live', group: 'R16', stage: 'round_of_16', homeScore: 1, awayScore: 0, attendance: null },
  { id: 'm26', matchNumber: 26, homeTeam: t('ARG'), awayTeam: t('NED'), stadiumId: 'metlife', stadiumName: 'MetLife Stadium', city: 'East Rutherford', datetime: Date.now() + 3 * HOUR, status: 'scheduled', group: 'R16', stage: 'round_of_16', homeScore: null, awayScore: null, attendance: null },
  { id: 'm27', matchNumber: 27, homeTeam: t('FRA'), awayTeam: t('POR'), stadiumId: 'metlife', stadiumName: 'MetLife Stadium', city: 'East Rutherford', datetime: Date.now() + DAY + 16 * HOUR, status: 'scheduled', group: 'R16', stage: 'round_of_16', homeScore: null, awayScore: null, attendance: null },
  { id: 'm28', matchNumber: 28, homeTeam: t('ESP'), awayTeam: t('USA'), stadiumId: 'metlife', stadiumName: 'MetLife Stadium', city: 'East Rutherford', datetime: Date.now() + DAY + 19 * HOUR, status: 'scheduled', group: 'R16', stage: 'round_of_16', homeScore: null, awayScore: null, attendance: null },
];

export function getMatchById(id: string): Match | undefined {
  return matches.find((m) => m.id === id);
}

export function getLiveMatches(): Match[] {
  return matches.filter((m) => m.status === 'live' || m.status === 'halftime');
}

export function getUpcomingMatches(): Match[] {
  return matches.filter((m) => m.status === 'scheduled').sort((a, b) => a.datetime - b.datetime);
}

export function getCompletedMatches(): Match[] {
  return matches.filter((m) => m.status === 'completed').sort((a, b) => b.datetime - a.datetime);
}

export function getTodaysMatches(): Match[] {
  const now = new Date();
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  const todayEnd = todayStart + DAY;
  return matches.filter((m) => m.datetime >= todayStart && m.datetime < todayEnd);
}
