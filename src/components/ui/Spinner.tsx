import { Loader2 } from 'lucide-react';
import './Spinner.css';

interface SpinnerProps {
  size?: number;
  className?: string;
  label?: string;
}

export function Spinner({ size = 24, className = '', label = 'Loading...' }: SpinnerProps) {
  return (
    <div className={`spinner-container ${className}`}>
      <Loader2 size={size} className="spinner-icon" />
      {label && <span className="spinner-label">{label}</span>}
    </div>
  );
}
