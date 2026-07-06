import React, { useState, useEffect } from 'react';
import { Card, CardHeader } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { StatusIndicator } from '../../components/ui/StatusIndicator';
import { getLiveMatches } from '../../data/matches';
import { formatTime } from '../../utils/format';
import { Clock, Flag, Trophy, Shield, Activity, Calendar } from 'lucide-react';
import './MatchCompanion.css';

export function MatchCompanion() {
  const liveMatches = getLiveMatches();
  const match = liveMatches[0]; // Assume first live match for companion view
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (!match) {
    return (
      <div className="match-companion">
        <div className="match-companion__header">
          <h2 className="match-companion__title">Match Companion</h2>
          <p className="match-companion__subtitle">No live matches currently underway</p>
        </div>
        <Card padding="md">
          <div style={{ textAlign: 'center', padding: 'var(--space-10) 0', color: 'var(--color-text-tertiary)' }}>
            <Calendar size={32} style={{ margin: '0 auto var(--space-4)' }} />
            <p>Check the schedule for upcoming matches.</p>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="match-companion">
      <div className="match-companion__header">
        <div>
          <h2 className="match-companion__title">Match Companion</h2>
          <p className="match-companion__subtitle">Live statistics, events, and operational impact</p>
        </div>
      </div>

      <div className="match-companion__grid">
        {/* Live Scorecard */}
        <div className="match-companion__col match-companion__col--main">
          <Card padding="none" className="match-companion__scorecard">
            <div className="match-companion__scorecard-header">
              <Badge variant="accent" size="sm">{match.stage.replace('_', ' ').toUpperCase()}</Badge>
              <StatusIndicator status="online" pulse label={`LIVE — ${match.currentMinute}'`} />
              <Badge variant="default" size="sm">{match.venue}</Badge>
            </div>

            <div className="match-companion__teams">
              <div className="match-companion__team">
                <div className="match-companion__flag">{match.homeTeam.flag}</div>
                <h3 className="match-companion__team-name">{match.homeTeam.name}</h3>
                <span className="match-companion__team-code">{match.homeTeam.code}</span>
              </div>

              <div className="match-companion__score-box">
                <div className="match-companion__score">
                  <span>{match.homeScore}</span>
                  <span className="match-companion__score-divider">-</span>
                  <span>{match.awayScore}</span>
                </div>
              </div>

              <div className="match-companion__team">
                <div className="match-companion__flag">{match.awayTeam.flag}</div>
                <h3 className="match-companion__team-name">{match.awayTeam.name}</h3>
                <span className="match-companion__team-code">{match.awayTeam.code}</span>
              </div>
            </div>

            <div className="match-companion__events">
              {match.events?.map((event) => (
                <div key={event.id} className="match-companion__event">
                  <span className="match-companion__event-time">{event.minute}'</span>
                  <span className="match-companion__event-icon">
                    {event.type === 'goal' && '⚽'}
                    {event.type === 'yellow_card' && <div className="match-companion__card match-companion__card--yellow" />}
                    {event.type === 'red_card' && <div className="match-companion__card match-companion__card--red" />}
                    {event.type === 'substitution' && '🔄'}
                    {event.type === 'var_review' && '📺'}
                  </span>
                  <span className="match-companion__event-player">
                    {event.player}
                    {event.type === 'substitution' && event.assist && (
                      <span className="match-companion__event-sub"> for {event.assist}</span>
                    )}
                  </span>
                  <span className="match-companion__event-team">
                    {event.teamId === match.homeTeam.id ? match.homeTeam.code : match.awayTeam.code}
                  </span>
                </div>
              ))}
            </div>
          </Card>

          {/* Operational Impact */}
          <Card padding="md">
            <CardHeader title="Operational Impact Analysis" subtitle="Real-time predictive insights based on match events" icon={<Activity size={16} />} />
            <div className="match-companion__impacts">
              <div className="match-companion__impact">
                <div className="match-companion__impact-header">
                  <Badge variant="warning" size="sm">Concourse Surge Prediction</Badge>
                  <span className="match-companion__impact-time">Halftime approaching (in 5 mins)</span>
                </div>
                <p className="match-companion__impact-desc">
                  Expect a 300% increase in concourse density. Food courts and restrooms near Sections 115-125 will experience critical congestion.
                </p>
                <div className="match-companion__impact-actions">
                  <Button variant="primary" size="sm">Pre-deploy Staff to Concourses</Button>
                  <Button variant="secondary" size="sm">Update Digital Signage</Button>
                </div>
              </div>

              <div className="match-companion__impact">
                <div className="match-companion__impact-header">
                  <Badge variant="info" size="sm">Exit Strategy Modeling</Badge>
                  <span className="match-companion__impact-time">Match score: 1-0</span>
                </div>
                <p className="match-companion__impact-desc">
                  Close matches typically delay spectator exit by 10-15 minutes compared to blowouts. Peak exit surge is predicted at Final Whistle + 8 mins.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Side column */}
        <div className="match-companion__col match-companion__col--side">
          <Card padding="md">
            <CardHeader title="Match Timeline" />
            <div className="match-companion__timeline">
              <div className="match-companion__timeline-item match-companion__timeline-item--past">
                <span className="match-companion__timeline-time">18:00</span>
                <span className="match-companion__timeline-desc">Gates Open</span>
              </div>
              <div className="match-companion__timeline-item match-companion__timeline-item--past">
                <span className="match-companion__timeline-time">19:15</span>
                <span className="match-companion__timeline-desc">Teams Warmup</span>
              </div>
              <div className="match-companion__timeline-item match-companion__timeline-item--past">
                <span className="match-companion__timeline-time">20:00</span>
                <span className="match-companion__timeline-desc">Kickoff (1st Half)</span>
              </div>
              <div className="match-companion__timeline-item match-companion__timeline-item--active">
                <span className="match-companion__timeline-time">20:45</span>
                <span className="match-companion__timeline-desc">Halftime</span>
              </div>
              <div className="match-companion__timeline-item">
                <span className="match-companion__timeline-time">21:00</span>
                <span className="match-companion__timeline-desc">Kickoff (2nd Half)</span>
              </div>
              <div className="match-companion__timeline-item">
                <span className="match-companion__timeline-time">21:45</span>
                <span className="match-companion__timeline-desc">Full Time</span>
              </div>
            </div>
          </Card>

          <Card padding="md">
            <CardHeader title="Officials" icon={<Shield size={16} />} />
            <div className="match-companion__officials">
              <div className="match-companion__official">
                <span className="match-companion__official-role">Referee</span>
                <span className="match-companion__official-name">Pierluigi Collina</span>
              </div>
              <div className="match-companion__official">
                <span className="match-companion__official-role">Assistant 1</span>
                <span className="match-companion__official-name">Sian Massey-Ellis</span>
              </div>
              <div className="match-companion__official">
                <span className="match-companion__official-role">Assistant 2</span>
                <span className="match-companion__official-name">Clement Turpin</span>
              </div>
              <div className="match-companion__official">
                <span className="match-companion__official-role">Fourth Official</span>
                <span className="match-companion__official-name">Anthony Taylor</span>
              </div>
              <div className="match-companion__official">
                <span className="match-companion__official-role">VAR</span>
                <span className="match-companion__official-name">Massimiliano Irrati</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
