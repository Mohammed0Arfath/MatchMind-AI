/**
 * Security utilities — input sanitization and safe parsing.
 * No eval(), no Function(), no dangerouslySetInnerHTML.
 */

const HTML_ENTITIES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;',
  '/': '&#x2F;',
  '`': '&#96;',
};

const ENTITY_PATTERN = /[&<>"'/`]/g;

/** Escape HTML entities to prevent XSS in text output */
export function escapeHtml(str: string): string {
  return str.replace(ENTITY_PATTERN, (char) => HTML_ENTITIES[char] ?? char);
}

/** Strip all HTML tags from a string */
export function stripHtml(str: string): string {
  return str.replace(/<[^>]*>/g, '');
}

/** Sanitize user input: trim, strip HTML, limit length */
export function sanitizeInput(input: string, maxLength: number = 500): string {
  if (typeof input !== 'string') return '';
  return stripHtml(input).trim().substring(0, maxLength);
}

/** Safe JSON parse with fallback */
export function safeJsonParse<T>(json: string, fallback: T): T {
  try {
    return JSON.parse(json) as T;
  } catch {
    return fallback;
  }
}

/** Validate that a string is a safe, non-empty identifier */
export function isValidId(id: unknown): id is string {
  return typeof id === 'string' && /^[a-zA-Z0-9_-]+$/.test(id) && id.length > 0 && id.length <= 64;
}

/** Validate email format (basic) */
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}

/** Rate limiter for simulating request throttling */
export class RateLimiter {
  private timestamps: number[] = [];
  private readonly maxRequests: number;
  private readonly windowMs: number;

  constructor(maxRequests: number, windowMs: number) {
    this.maxRequests = maxRequests;
    this.windowMs = windowMs;
  }

  canProceed(): boolean {
    const now = Date.now();
    this.timestamps = this.timestamps.filter((t) => now - t < this.windowMs);
    if (this.timestamps.length >= this.maxRequests) return false;
    this.timestamps.push(now);
    return true;
  }

  reset(): void {
    this.timestamps = [];
  }
}
