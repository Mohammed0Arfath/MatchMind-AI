import React from 'react';
import './Select.css';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'options'> {
  label?: string;
  error?: string;
  helperText?: string;
  options: SelectOption[];
  fullWidth?: boolean;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className = '', label, error, helperText, options, fullWidth = true, id, ...props }, ref) => {
    const selectId = id || React.useId();
    const helperId = `${selectId}-helper`;
    const errorId = `${selectId}-error`;

    const wrapperClasses = [
      'select-wrapper',
      fullWidth ? 'select-wrapper--full' : '',
      error ? 'select-wrapper--error' : '',
      className
    ].filter(Boolean).join(' ');

    return (
      <div className={wrapperClasses}>
        {label && (
          <label htmlFor={selectId} className="select-label">
            {label}
          </label>
        )}
        <div className="select-container">
          <select
            id={selectId}
            ref={ref}
            className="select-element"
            aria-invalid={!!error}
            aria-describedby={[
              error ? errorId : undefined,
              helperText ? helperId : undefined
            ].filter(Boolean).join(' ') || undefined}
            {...props}
          >
            {options.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="select-chevron" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>
        {error && <span id={errorId} className="select-error-text" role="alert">{error}</span>}
        {helperText && !error && <span id={helperId} className="select-helper-text">{helperText}</span>}
      </div>
    );
  }
);

Select.displayName = 'Select';
