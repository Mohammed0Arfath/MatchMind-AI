import type { UserRole } from '../../../types';
import { sanitizeInput } from '../../../utils/security';

export interface AssistantMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
  structuredData?: StructuredResponse;
}

export interface StructuredResponse {
  type: 'recommendation' | 'alert' | 'navigation' | 'info' | 'action';
  title: string;
  reasoning: string;
  data?: DataItem[];
  actions?: ActionItem[];
}

export interface DataItem {
  label: string;
  value: string;
  variant?: 'default' | 'success' | 'warning' | 'danger';
}

export interface ActionItem {
  label: string;
  type: 'primary' | 'secondary';
}

interface IntentMatch {
  intent: string;
  keywords: RegExp;
  roles?: UserRole[];
}

const INTENTS: IntentMatch[] = [
  { intent: 'gate_congestion', keywords: /gate|congestion|queue|wait|line|entrance|entry/i },
  { intent: 'staff_deploy', keywords: /deploy|staff|assign|allocate|personnel|team/i, roles: ['operations', 'security'] },
  { intent: 'crowd_status', keywords: /crowd|density|occupancy|capacity|full|packed|overcrowded/i },
  { intent: 'food_recommend', keywords: /food|eat|restaurant|stall|hungry|snack|drink|beverage/i },
  { intent: 'restroom', keywords: /restroom|toilet|bathroom|washroom/i },
  { intent: 'wheelchair', keywords: /wheelchair|accessible|disability|mobility|ada/i },
  { intent: 'exit_route', keywords: /exit|leave|fastest|quickest|route|way out|after.*match/i },
  { intent: 'parking', keywords: /parking|car|park|lot|drive/i },
  { intent: 'medical', keywords: /medical|emergency|first aid|hurt|injured|ambulance|health|doctor/i },
  { intent: 'incident', keywords: /incident|report|suspicious|danger|threat|alert|lost.*child|unattended/i, roles: ['operations', 'security'] },
  { intent: 'weather', keywords: /weather|rain|temperature|hot|cold|wind|sun/i },
  { intent: 'match_info', keywords: /match|game|score|team|playing|schedule|kick.*off|result/i },
  { intent: 'navigation', keywords: /where|find|locate|direction|how.*get|nearest|closest|navigate/i },
  { intent: 'greeting', keywords: /^(hi|hello|hey|good\s+(morning|afternoon|evening))[\s!?.]*$/i },
  { intent: 'evacuation', keywords: /evacuati|fire|bomb|emergency.*exit|emergency.*protocol/i, roles: ['operations', 'security'] },
  { intent: 'transport', keywords: /transport|bus|train|subway|metro|taxi|uber|shuttle|public/i },
];

function detectIntent(input: string): string {
  for (const { intent, keywords } of INTENTS) {
    if (keywords.test(input)) return intent;
  }
  return 'general';
}

const RESPONSES: Record<string, (role: UserRole) => StructuredResponse> = {
  gate_congestion: (role) => ({
    type: 'recommendation',
    title: role === 'spectator' ? 'Fastest Entry Route' : 'Gate Congestion Analysis',
    reasoning: role === 'spectator'
      ? 'Based on current queue lengths and your location, Gate C has the shortest wait time at just 3 minutes. Gate B is experiencing high congestion (14 min wait) due to increased security screening.'
      : 'Gate B is operating at 81% capacity with a 580-person queue (14 min wait). This is 65% above normal pre-match levels. Root cause: additional security screening activated 20 minutes ago. Gate C and D have significant spare capacity.',
    data: [
      { label: 'Gate A', value: '8 min wait · 320 in queue', variant: 'warning' },
      { label: 'Gate B', value: '14 min wait · 580 in queue', variant: 'danger' },
      { label: 'Gate C', value: '3 min wait · 120 in queue', variant: 'success' },
      { label: 'Gate D', value: '2 min wait · 85 in queue', variant: 'success' },
      { label: 'VIP', value: '1 min wait · 15 in queue', variant: 'success' },
    ],
    actions: role === 'spectator'
      ? [{ label: 'Navigate to Gate C', type: 'primary' }, { label: 'View Map', type: 'secondary' }]
      : [{ label: 'Deploy Staff to Gate B', type: 'primary' }, { label: 'Activate Digital Signage', type: 'secondary' }],
  }),

  staff_deploy: () => ({
    type: 'recommendation',
    title: 'Staff Deployment Recommendation',
    reasoning: 'Analysis of current crowd density, gate throughput, and incident reports suggests the following reallocation. East Stand is at 91% density with an increasing trend. 2 stewards from the underutilized South Concourse can be reassigned to East Stand aisles without impacting coverage.',
    data: [
      { label: 'East Stand', value: 'Needs +2 stewards (91% density, increasing)', variant: 'danger' },
      { label: 'Gate B', value: 'Needs +2 screening staff (14 min queue)', variant: 'danger' },
      { label: 'South Concourse', value: 'Can release 2 staff (38% density, stable)', variant: 'success' },
      { label: 'West Concourse', value: 'Can release 1 staff (45% density, stable)', variant: 'success' },
    ],
    actions: [
      { label: 'Approve Reallocation', type: 'primary' },
      { label: 'View Staff Map', type: 'secondary' },
    ],
  }),

  crowd_status: (role) => ({
    type: 'info',
    title: 'Current Crowd Status',
    reasoning: 'Stadium is at 83% capacity (68,450 of 82,500). Entry rate is 142/min with exit rate at 28/min. Peak occupancy expected in 20 minutes as match approaches kickoff. East Stand is the most congested zone at 91% density.',
    data: [
      { label: 'Total Occupancy', value: '68,450 (83%)', variant: 'warning' },
      { label: 'Entry Rate', value: '142 per minute', variant: 'default' },
      { label: 'Exit Rate', value: '28 per minute', variant: 'default' },
      { label: 'Peak Zone', value: 'East Stand (91%)', variant: 'danger' },
      { label: 'Quietest Zone', value: 'South Concourse (38%)', variant: 'success' },
      { label: 'Predicted Peak', value: '78,300 in 20 minutes', variant: 'warning' },
    ],
    actions: role === 'operations'
      ? [{ label: 'Open Crowd Dashboard', type: 'primary' }, { label: 'View Predictions', type: 'secondary' }]
      : [{ label: 'View Stadium Map', type: 'secondary' }],
  }),

  food_recommend: () => ({
    type: 'recommendation',
    title: 'Food Recommendations Near You',
    reasoning: 'Based on current wait times and your location near the East Stand. Global Flavors near Gate C has the shortest wait (5 min) and offers diverse cuisine. Stadium Grill near Gate B is also good (8 min wait) but the gate area is congested. Avoid Quick Bites in the upper deck (18 min wait).',
    data: [
      { label: 'Global Flavors (Gate C)', value: '5 min wait · International cuisine', variant: 'success' },
      { label: 'Stadium Grill (Gate B)', value: '8 min wait · American classics', variant: 'success' },
      { label: 'Jersey Eats (Gate A)', value: '12 min wait · Local favorites', variant: 'warning' },
      { label: 'Quick Bites (Upper)', value: '18 min wait · Fast food', variant: 'danger' },
    ],
    actions: [
      { label: 'Navigate to Global Flavors', type: 'primary' },
      { label: 'View All Options', type: 'secondary' },
    ],
  }),

  restroom: () => ({
    type: 'recommendation',
    title: 'Nearest Available Restrooms',
    reasoning: 'Restroom West is currently closed for maintenance (plumbing issue). Restroom South has the shortest wait at 1 minute and is fully accessible. Restroom North B is a good alternative at 2 minutes.',
    data: [
      { label: 'Restroom South', value: '1 min wait · Accessible ✓', variant: 'success' },
      { label: 'Restroom North B', value: '2 min wait · Accessible ✓', variant: 'success' },
      { label: 'Restroom North A', value: '4 min wait · Accessible ✓', variant: 'warning' },
      { label: 'Restroom East', value: '6 min wait · Accessible ✓', variant: 'warning' },
      { label: 'Restroom West', value: 'CLOSED — Maintenance', variant: 'danger' },
    ],
    actions: [
      { label: 'Navigate to Restroom South', type: 'primary' },
      { label: 'View on Map', type: 'secondary' },
    ],
  }),

  wheelchair: () => ({
    type: 'navigation',
    title: 'Accessible Routes & Entrances',
    reasoning: 'The nearest accessible entrance is the Accessible Entry on the East side (1 min wait). Gate A and Gate C also have accessible pathways. All elevators are operational. Accessible seating is available in Sections 100-110 (lower level) and Luxury Suites.',
    data: [
      { label: 'Accessible Entry (East)', value: '1 min wait · Ramp access', variant: 'success' },
      { label: 'Gate A (North)', value: '8 min wait · Elevator available', variant: 'warning' },
      { label: 'Gate C (South)', value: '3 min wait · Ramp access', variant: 'success' },
      { label: 'Accessible Parking', value: '210/400 occupied · 4 min to gate', variant: 'success' },
      { label: 'Elevators', value: 'All 6 operational', variant: 'success' },
    ],
    actions: [
      { label: 'Navigate Accessible Route', type: 'primary' },
      { label: 'Request Assistance', type: 'secondary' },
    ],
  }),

  exit_route: () => ({
    type: 'navigation',
    title: 'Post-Match Exit Strategy',
    reasoning: 'Based on predictive modeling, Gate C and Gate D will have the lowest congestion after the match. The peak exit surge occurs 5-10 minutes after the final whistle with ~280 exits/min. Waiting 15-20 minutes reduces exit time by 60%. South exits lead to Lot C parking (less congested) and public transport.',
    data: [
      { label: 'Gate C (South)', value: 'Best option · Near public transport', variant: 'success' },
      { label: 'Gate D (West)', value: 'Good option · Near Lot B parking', variant: 'success' },
      { label: 'Gate A (North)', value: 'Moderate congestion expected', variant: 'warning' },
      { label: 'Gate B (East)', value: 'Avoid · Highest post-match volume', variant: 'danger' },
      { label: 'Optimal Wait', value: 'Leave 15-20 min after whistle', variant: 'default' },
    ],
    actions: [
      { label: 'Set Exit Reminder', type: 'primary' },
      { label: 'View Exit Map', type: 'secondary' },
    ],
  }),

  parking: () => ({
    type: 'info',
    title: 'Parking Availability',
    reasoning: 'Lot A (East) is approaching capacity at 78%. Lot C (South) has the most availability with only 53% occupied. Accessible parking has ample space. Post-match, Lot C offers the fastest egress due to proximity to highway on-ramps.',
    data: [
      { label: 'Lot A (East)', value: '6,200/8,000 · 78% full · $60', variant: 'warning' },
      { label: 'Lot B (West)', value: '5,800/6,000 · 97% full · $45', variant: 'danger' },
      { label: 'Lot C (South)', value: '2,100/4,000 · 53% full · $35', variant: 'success' },
      { label: 'VIP Parking', value: '380/500 · 76% full · $150', variant: 'warning' },
      { label: 'Accessible', value: '210/400 · 53% full · $40', variant: 'success' },
    ],
    actions: [
      { label: 'Navigate to Lot C', type: 'primary' },
      { label: 'View Parking Map', type: 'secondary' },
    ],
  }),

  medical: (role) => ({
    type: 'alert',
    title: role === 'spectator' ? 'Nearest Medical Assistance' : 'Medical Resources Status',
    reasoning: role === 'spectator'
      ? 'Medical Station Alpha near Gate D is available with no wait. Medical Station Bravo near Gate B has a 3-minute wait due to an active case. For emergencies, call the stadium medical line or alert the nearest steward.'
      : 'Medical Station Alpha is staffed and available. Station Bravo is handling an active case (67-year-old male, collapsed near Section 214, stable condition). Two ambulances on standby at the service entrance. All AED locations verified operational.',
    data: [
      { label: 'Station Alpha (West)', value: 'Available · No wait', variant: 'success' },
      { label: 'Station Bravo (East)', value: role === 'spectator' ? '3 min wait' : 'Active case · 1 patient', variant: 'warning' },
      { label: 'Ambulances', value: '2 on standby', variant: 'success' },
      { label: 'AED Locations', value: '12 units · All operational', variant: 'success' },
    ],
    actions: role === 'spectator'
      ? [{ label: 'Navigate to Station Alpha', type: 'primary' }, { label: 'Call Medical Line', type: 'secondary' }]
      : [{ label: 'View Medical Dashboard', type: 'primary' }, { label: 'Dispatch Team', type: 'secondary' }],
  }),

  match_info: () => ({
    type: 'info',
    title: 'Match Information',
    reasoning: 'Brazil vs Germany is currently live in the Round of 16. The score is 1-0 to Brazil (goal at 23\'). Next match at this venue: Argentina vs Netherlands at ' + new Date(Date.now() + 3 * 3600000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) + ' today.',
    data: [
      { label: '🔴 LIVE', value: '🇧🇷 Brazil 1 – 0 Germany 🇩🇪', variant: 'default' },
      { label: 'Stage', value: 'Round of 16 · Match 25', variant: 'default' },
      { label: 'Next Match', value: '🇦🇷 Argentina vs Netherlands 🇳🇱', variant: 'default' },
      { label: 'Tomorrow', value: '🇫🇷 France vs Portugal 🇵🇹', variant: 'default' },
    ],
    actions: [
      { label: 'View Full Schedule', type: 'primary' },
      { label: 'Set Reminder', type: 'secondary' },
    ],
  }),

  weather: () => ({
    type: 'info',
    title: 'Weather Conditions',
    reasoning: 'Current conditions are warm and partly cloudy at 29°C. UV index is high (7) — sunscreen recommended for spectators in uncovered sections. No rain expected for the next 6 hours. Wind speed is manageable at 12 km/h.',
    data: [
      { label: 'Temperature', value: '29°C / 84°F · Partly Cloudy', variant: 'default' },
      { label: 'Wind', value: '12 km/h · NW direction', variant: 'default' },
      { label: 'Humidity', value: '62%', variant: 'default' },
      { label: 'UV Index', value: '7 (High) — Sunscreen recommended', variant: 'warning' },
      { label: 'Rain Forecast', value: 'No rain for next 6 hours', variant: 'success' },
    ],
    actions: [
      { label: 'View Forecast', type: 'secondary' },
    ],
  }),

  greeting: (role) => ({
    type: 'info',
    title: `Welcome to MatchMind AI`,
    reasoning: `Hello! I'm your intelligent operations assistant for today's matches at MetLife Stadium. I can help you with real-time crowd data, navigation, incident management, predictions, and more. What do you need help with?`,
    data: [
      { label: 'Current Match', value: '🇧🇷 Brazil 1–0 Germany 🇩🇪 (LIVE)', variant: 'default' },
      { label: 'Stadium', value: '83% capacity · 68,450 spectators', variant: 'warning' },
      { label: 'Your Role', value: role.charAt(0).toUpperCase() + role.slice(1), variant: 'default' },
      { label: 'Conditions', value: '29°C · Partly Cloudy', variant: 'default' },
    ],
    actions: [],
  }),

  evacuation: () => ({
    type: 'alert',
    title: 'Emergency Evacuation Protocols',
    reasoning: 'Evacuation Protocol EP-3 is available for activation. Current occupancy of 68,450 requires estimated 18-22 minutes for full evacuation using all 8 gates including emergency exits. All emergency exit routes have been verified clear as of 10 minutes ago.',
    data: [
      { label: 'Estimated Evacuation', value: '18-22 minutes (full stadium)', variant: 'danger' },
      { label: 'Emergency Exits', value: '8 available · All verified clear', variant: 'success' },
      { label: 'Assembly Points', value: '4 designated · All accessible', variant: 'success' },
      { label: 'Current Occupancy', value: '68,450 · 83% capacity', variant: 'warning' },
    ],
    actions: [
      { label: 'Activate EP-3 Protocol', type: 'primary' },
      { label: 'View Evacuation Map', type: 'secondary' },
    ],
  }),

  transport: () => ({
    type: 'recommendation',
    title: 'Transportation Options',
    reasoning: 'NJ Transit is running extended service tonight with trains every 10 minutes from MetLife Stadium station until 1:00 AM. Shuttle buses are running to Secaucus Junction. Rideshare pickup is designated at Lot D. Post-match, expect 30-45 minute delays for personal vehicles.',
    data: [
      { label: 'NJ Transit', value: 'Every 10 min · Extended to 1:00 AM', variant: 'success' },
      { label: 'Shuttle Bus', value: 'To Secaucus Junction · 15 min ride', variant: 'success' },
      { label: 'Rideshare', value: 'Pickup at Lot D · Est. 20 min wait post-match', variant: 'warning' },
      { label: 'Personal Vehicle', value: '30-45 min egress delay expected', variant: 'warning' },
    ],
    actions: [
      { label: 'Navigate to Train Station', type: 'primary' },
      { label: 'View Transport Map', type: 'secondary' },
    ],
  }),

  general: (role) => ({
    type: 'info',
    title: 'How Can I Help?',
    reasoning: `I can assist with many operational needs. Try asking about:\n\n• Gate congestion and fastest entry\n• Crowd density and predictions\n• Staff deployment recommendations\n• Food and restroom availability\n• Accessible routes and facilities\n• Match schedule and scores\n• Weather conditions\n• Parking and transportation\n• Incident reporting and management\n• Exit strategies after the match`,
    data: [],
    actions: [],
  }),

  navigation: () => ({
    type: 'navigation',
    title: 'Navigation Assistance',
    reasoning: 'I can help you find any facility in the stadium. Key locations: Fan Information Center is near Gate A (North), Medical stations are at West and East sides, the FIFA Official Store is near Gate C (South). All restrooms are marked on the stadium map.',
    data: [
      { label: 'Information Center', value: 'Near Gate A · 2 min wait', variant: 'success' },
      { label: 'FIFA Store', value: 'Near Gate C · 15 min wait', variant: 'warning' },
      { label: 'Family Zone', value: 'East side · Near Accessible Entry', variant: 'success' },
      { label: 'Multi-Faith Room', value: 'West side · Near Gate D', variant: 'success' },
      { label: 'ATM', value: 'Near Gate C · 3 min wait', variant: 'success' },
    ],
    actions: [
      { label: 'Open Stadium Map', type: 'primary' },
      { label: 'Get Directions', type: 'secondary' },
    ],
  }),

  incident: () => ({
    type: 'alert',
    title: 'Incident Management',
    reasoning: 'There are currently 6 active incidents. 2 are high priority (medical emergency in Section 214, unattended bag at Gate A). The crowd surge alert in Section 121-130 was just acknowledged. All incidents are being tracked with assigned response teams.',
    data: [
      { label: 'Medical — Section 214', value: 'HIGH · In Progress · Medical Team Alpha', variant: 'danger' },
      { label: 'Lost Child — Gate B', value: 'HIGH · In Progress · Security Bravo', variant: 'danger' },
      { label: 'Unattended Bag — Gate A', value: 'HIGH · In Progress · Security Alpha', variant: 'danger' },
      { label: 'Crowd Surge — Sec 121', value: 'HIGH · Acknowledged · Pending assignment', variant: 'warning' },
      { label: 'Queue — Gate B', value: 'MEDIUM · Acknowledged · Gate Operations', variant: 'warning' },
      { label: 'Plumbing — Restroom West', value: 'MEDIUM · In Progress · Maintenance', variant: 'warning' },
    ],
    actions: [
      { label: 'Report New Incident', type: 'primary' },
      { label: 'View Incident Map', type: 'secondary' },
    ],
  }),
};

export function generateResponse(input: string, role: UserRole): AssistantMessage {
  const sanitized = sanitizeInput(input, 1000);
  const intent = detectIntent(sanitized);
  const responseFn = RESPONSES[intent] ?? RESPONSES['general']!;
  const structured = responseFn(role);

  return {
    id: `msg-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    role: 'assistant',
    content: structured.reasoning,
    timestamp: Date.now(),
    structuredData: structured,
  };
}
