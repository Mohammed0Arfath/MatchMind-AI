import React from 'react';
import './Input.css';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', label, error, helperText, fullWidth = true, id, ...props }, ref) => {
    const inputId = id || React.useId();
    const helperId = `${inputId}-helper`;
    const errorId = `${inputId}-error`;

    const wrapperClasses = [
      'input-wrapper',
      fullWidth ? 'input-wrapper--full' : '',
      error ? 'input-wrapper--error' : '',
      className
    ].filter(Boolean).join(' ');

    return (
      <div className={wrapperClasses}>
        {label && (
          <label htmlFor={inputId} className="input-label">
            {label}
          </label>
        )}
        <div className="input-container">
          <input
            id={inputId}
            ref={ref}
            className="input-element"
            aria-invalid={!!error}
            aria-describedby={[
              error ? errorId : undefined,
              helperText ? helperId : undefined
            ].filter(Boolean).join(' ') || undefined}
            {...props}
          />
        </div>
        {error && <span id={errorId} className="input-error-text" role="alert">{error}</span>}
        {helperText && !error && <span id={helperId} className="input-helper-text">{helperText}</span>}
      </div>
    );
  }
);

Input.displayName = 'Input';
