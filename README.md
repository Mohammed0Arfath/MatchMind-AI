# MatchMind AI

> GenAI-powered Smart Stadium & Tournament Operations Platform for FIFA World Cup 2026.

MatchMind AI is a context-aware operations control system designed to manage large-scale events. It features role-specific dashboards, an interactive stadium digital twin, predictive crowd analytics, and an integrated AI assistant that provides deterministic, rule-based responses based on real-time data.

## Features

- **Role-Based Workspaces**: Tailored dashboards for Operations, Security, Spectators, and Staff.
- **Smart Digital Twin**: SVG-based stadium map with live congestion overlays and facility statuses.
- **AI Decision Engine**: Deterministic operations assistant that parses natural language and provides contextual actions without relying on an external LLM API.
- **Predictive Analytics**: Data-driven forecasts for crowd bottlenecks, logistics shortages, and security risks.
- **Real-Time Dashboards**: Live monitoring of gate throughput, zone density, active incidents, and match schedules.
- **Smart Navigation**: Dynamic pathfinding to avoid crowded areas and ensure accessible routing.

## Technology Stack

- **Framework**: React 18 + TypeScript (strict mode)
- **Build Tool**: Vite 5
- **Styling**: Vanilla CSS Modules with robust CSS Custom Properties (Theme/Tokens)
- **Routing**: React Router v6
- **State Management**: React Context API
- **Data Visualization**: Recharts
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/matchmind-ai.git
   ```

2. Install dependencies:
   ```bash
   cd matchmind-ai
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the local URL provided by Vite (usually `http://localhost:5173`).

## Project Structure

```
src/
├── app/          # App shell, routing, providers (Auth, Theme)
├── components/   # Reusable UI primitives (Button, Card, Badge)
├── data/         # Mock data models (Stadiums, Matches, Incidents)
├── features/     # Feature-based domain modules
│   ├── assistant/    # AI operations assistant
│   ├── crowd/        # Crowd intelligence charts
│   ├── dashboard/    # Role-specific dashboard layouts
│   ├── incidents/    # Incident tracking panel
│   ├── match/        # Match schedule and details
│   ├── navigation/   # Smart pathfinding
│   ├── predictions/  # Predictive analytics engine
│   └── stadium/      # SVG stadium digital twin
├── hooks/        # Shared React hooks
├── styles/       # Global CSS tokens and themes
├── types/        # TypeScript interfaces and models
└── utils/        # Pure formatting and security utilities
```

## Security & Accessibility

This platform was built following strict enterprise standards:
- **WCAG 2.2 AA Compliant**: WAI-ARIA roles, high contrast support, full keyboard navigability.
- **Security-First**: Input sanitization via `dompurify` (mocked), no `eval()`, no `dangerouslySetInnerHTML`.

## Testing Suite

The project includes a robust Vitest + React Testing Library suite located in `src/tests/`. It covers:
- **Component Validation**: Ensuring critical UI renders.
- **Integration Tests**: Verifying complex dashboards and AI engine interactions.
- **Accessibility Tests**: Automated `axe-core` scans ensuring zero a11y violations on major views.

To run the tests:
```bash
npm install -D jest-axe @types/jest-axe
npm run test
```

## License

This project is intended as a demonstration of a highly polished, dashboard-driven web application.
