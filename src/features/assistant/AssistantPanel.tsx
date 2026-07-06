import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useAuth } from '../../app/providers/AuthProvider';
import { generateResponse, type AssistantMessage } from './engine/aiEngine';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { sanitizeInput } from '../../utils/security';
import { formatTime } from '../../utils/format';
import { Send, Bot, User, Sparkles, ArrowRight } from 'lucide-react';
import './AssistantPanel.css';

const SUGGESTION_PROMPTS: Record<string, string[]> = {
  operations: [
    "What's the current crowd status?",
    "Where should I deploy staff?",
    "Show me gate congestion",
    "Any active incidents?",
    "Evacuation protocols",
  ],
  security: [
    "Show active incidents",
    "Crowd density alerts",
    "Suspicious activity reports",
    "Emergency evacuation plan",
    "Gate congestion status",
  ],
  spectator: [
    "What's the fastest entrance?",
    "Best food near me?",
    "Where's the nearest restroom?",
    "Accessible routes available?",
    "When's the next match?",
  ],
  staff: [
    "Today's match schedule",
    "Crowd status update",
    "Report an incident",
    "Parking availability",
    "Weather conditions",
  ],
};

export function AssistantPanel() {
  const { role } = useAuth();
  const [messages, setMessages] = useState<AssistantMessage[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const sendMessage = useCallback(
    (text: string) => {
      const activeRole = role ?? 'operations';
      if (!text.trim()) return;

      const sanitized = sanitizeInput(text, 1000);
      if (!sanitized) return;

      const userMsg: AssistantMessage = {
        id: `user-${Date.now()}`,
        role: 'user',
        content: sanitized,
        timestamp: Date.now(),
      };

      setMessages((prev) => [...prev, userMsg]);
      setInput('');
      setIsTyping(true);

      // Simulate AI processing delay
      setTimeout(() => {
        const response = generateResponse(sanitized, activeRole);
        setMessages((prev) => [...prev, response]);
        setIsTyping(false);
      }, 600 + Math.random() * 400);
    },
    [role]
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      sendMessage(input);
    },
    [input, sendMessage]
  );

  const suggestions = role ? (SUGGESTION_PROMPTS[role] ?? []) : [];

  return (
    <div className="assistant">
      <div className="assistant__header">
        <div className="assistant__header-left">
          <div className="assistant__avatar">
            <Sparkles size={18} />
          </div>
          <div>
            <h2 className="assistant__title">AI Operations Assistant</h2>
            <p className="assistant__subtitle">Context-aware intelligence for FIFA World Cup 2026</p>
          </div>
        </div>
        <Badge variant="success" size="sm" dot pulseDot>Online</Badge>
      </div>

      <div className="assistant__messages" role="log" aria-label="Conversation" aria-live="polite">
        {messages.length === 0 && (
          <div className="assistant__empty">
            <div className="assistant__empty-icon"><Bot size={32} /></div>
            <h3 className="assistant__empty-title">Hello! I'm your MatchMind AI assistant.</h3>
            <p className="assistant__empty-desc">
              Ask me about crowd conditions, gate congestion, food options, navigation, incidents, or anything else about today's operations at MetLife Stadium.
            </p>
            <div className="assistant__suggestions">
              {suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  className="assistant__suggestion"
                  onClick={() => sendMessage(suggestion)}
                >
                  {suggestion}
                  <ArrowRight size={12} />
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`assistant__msg assistant__msg--${msg.role}`}
            role="article"
            aria-label={`${msg.role === 'user' ? 'You' : 'AI Assistant'} at ${formatTime(msg.timestamp)}`}
          >
            <div className="assistant__msg-avatar">
              {msg.role === 'user' ? <User size={14} /> : <Sparkles size={14} />}
            </div>
            <div className="assistant__msg-body">
              <div className="assistant__msg-header">
                <span className="assistant__msg-author">{msg.role === 'user' ? 'You' : 'MatchMind AI'}</span>
                <span className="assistant__msg-time">{formatTime(msg.timestamp)}</span>
              </div>

              {msg.role === 'user' && (
                <p className="assistant__msg-text">{msg.content}</p>
              )}

              {msg.role === 'assistant' && msg.structuredData && (
                <div className="assistant__structured">
                  <h4 className="assistant__structured-title">{msg.structuredData.title}</h4>
                  <p className="assistant__structured-reasoning">{msg.structuredData.reasoning}</p>

                  {msg.structuredData.data && msg.structuredData.data.length > 0 && (
                    <div className="assistant__data-grid">
                      {msg.structuredData.data.map((item, i) => (
                        <div key={i} className={`assistant__data-item assistant__data-item--${item.variant ?? 'default'}`}>
                          <span className="assistant__data-label">{item.label}</span>
                          <span className="assistant__data-value">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {msg.structuredData.actions && msg.structuredData.actions.length > 0 && (
                    <div className="assistant__actions">
                      {msg.structuredData.actions.map((action, i) => (
                        <Button
                          key={i}
                          variant={action.type === 'primary' ? 'primary' : 'secondary'}
                          size="sm"
                        >
                          {action.label}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="assistant__msg assistant__msg--assistant" aria-label="AI is typing">
            <div className="assistant__msg-avatar"><Sparkles size={14} /></div>
            <div className="assistant__msg-body">
              <div className="assistant__typing">
                <span /><span /><span />
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <form className="assistant__input-area" onSubmit={handleSubmit}>
        <div className="assistant__input-wrapper">
          <input
            ref={inputRef}
            type="text"
            className="assistant__input"
            placeholder="Ask about operations, navigation, crowd data..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            aria-label="Type your message"
            maxLength={1000}
          />
          <Button
            type="submit"
            variant="primary"
            size="sm"
            disabled={!input.trim() || isTyping}
            icon={<Send size={14} />}
            aria-label="Send message"
          />
        </div>
        <p className="assistant__input-hint">
          AI responses are generated from real-time stadium data. Context: MetLife Stadium, {role ?? 'guest'} view.
        </p>
      </form>
    </div>
  );
}
