import React from 'react';
import { Card, CardHeader } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { UserCheck, Clock, MapPin, CheckSquare, MessageSquare, Briefcase } from 'lucide-react';
import './StaffDashboard.css';

export function StaffDashboard() {
  const staffMember = {
    name: "Alex Johnson",
    role: "Steward",
    zone: "East Stand - Section 114",
    shiftStart: "16:00",
    shiftEnd: "23:00",
  };

  return (
    <div className="staff-dashboard">
      {/* Header Profile */}
      <div className="staff-dashboard__profile">
        <div className="staff-dashboard__profile-info">
          <div className="staff-dashboard__avatar">
            {staffMember.name.charAt(0)}
          </div>
          <div>
            <h2 className="staff-dashboard__name">{staffMember.name}</h2>
            <p className="staff-dashboard__role">{staffMember.role}</p>
          </div>
        </div>
        <div className="staff-dashboard__status">
          <Badge variant="success" dot pulseDot>ON SHIFT</Badge>
          <span className="staff-dashboard__time">{staffMember.shiftStart} - {staffMember.shiftEnd}</span>
        </div>
      </div>

      <div className="staff-dashboard__grid">
        {/* Main Column */}
        <div className="staff-dashboard__col staff-dashboard__col--main">
          {/* Active Assignment */}
          <Card padding="md">
            <CardHeader title="Current Assignment" icon={<MapPin size={16} />} />
            <div className="staff-dashboard__assignment">
              <div className="staff-dashboard__assignment-zone">
                <h3>{staffMember.zone}</h3>
                <Badge variant="warning" size="sm">High Traffic Expected</Badge>
              </div>
              <p className="staff-dashboard__assignment-desc">
                Monitor aisles for clear passage. Direct spectators to Gate C for fastest exit. Be prepared to assist with wheelchair access at row 34.
              </p>
              <div className="staff-dashboard__assignment-actions">
                <Button variant="primary">Report Issue</Button>
                <Button variant="secondary">Request Break</Button>
              </div>
            </div>
          </Card>

          {/* Task List */}
          <Card padding="md">
            <CardHeader title="Shift Tasks" icon={<CheckSquare size={16} />} />
            <div className="staff-dashboard__tasks">
              <label className="staff-dashboard__task">
                <input type="checkbox" defaultChecked className="staff-dashboard__task-check" />
                <span className="staff-dashboard__task-text">Attend pre-match briefing (16:15)</span>
              </label>
              <label className="staff-dashboard__task">
                <input type="checkbox" defaultChecked className="staff-dashboard__task-check" />
                <span className="staff-dashboard__task-text">Collect radio and high-vis vest</span>
              </label>
              <label className="staff-dashboard__task">
                <input type="checkbox" defaultChecked className="staff-dashboard__task-check" />
                <span className="staff-dashboard__task-text">Inspect section 114 for debris/hazards</span>
              </label>
              <label className="staff-dashboard__task">
                <input type="checkbox" className="staff-dashboard__task-check" />
                <span className="staff-dashboard__task-text">Conduct post-match sweep</span>
              </label>
              <label className="staff-dashboard__task">
                <input type="checkbox" className="staff-dashboard__task-check" />
                <span className="staff-dashboard__task-text">Return equipment to logistics</span>
              </label>
            </div>
          </Card>
        </div>

        {/* Side Column */}
        <div className="staff-dashboard__col staff-dashboard__col--side">
          {/* Team Comms */}
          <Card padding="md">
            <CardHeader title="Team Messages" icon={<MessageSquare size={16} />} />
            <div className="staff-dashboard__messages">
              <div className="staff-dashboard__message">
                <span className="staff-dashboard__message-sender">Supervisor Ops</span>
                <p className="staff-dashboard__message-text">All East Stand stewards, please ensure vomitories remain clear during halftime.</p>
                <span className="staff-dashboard__message-time">10 mins ago</span>
              </div>
              <div className="staff-dashboard__message">
                <span className="staff-dashboard__message-sender">Central Control</span>
                <p className="staff-dashboard__message-text">Gate B screening is delayed. Direct overflows to Gate C.</p>
                <span className="staff-dashboard__message-time">25 mins ago</span>
              </div>
            </div>
          </Card>

          {/* Quick Contacts */}
          <Card padding="md">
            <CardHeader title="Support Contacts" icon={<UserCheck size={16} />} />
            <div className="staff-dashboard__contacts">
              <div className="staff-dashboard__contact">
                <span>Supervisor (East)</span>
                <span>Ch. 2</span>
              </div>
              <div className="staff-dashboard__contact">
                <span>Medical Team Alpha</span>
                <span>Ch. 4</span>
              </div>
              <div className="staff-dashboard__contact">
                <span>Security Control</span>
                <span>Ch. 1</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
