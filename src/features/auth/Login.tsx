import React, { useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { Shield, ArrowRight, AlertCircle } from 'lucide-react';
import './Login.css';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // AuthProvider will handle the redirect via state change
    } catch (err: any) {
      console.error(err);
      // Display the actual Firebase error message for easier debugging
      setError(err.message || 'Authentication failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError('');
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Google authentication failed.');
    } finally {
      setLoading(false);
    }
  };

  const handleDemoLogin = async (demoEmail: string) => {
    setError('');
    setLoading(true);
    setEmail(demoEmail);
    setPassword('Password123!');
    try {
      await signInWithEmailAndPassword(auth, demoEmail, 'Password123!');
    } catch (err: any) {
      console.error(err);
      setError(`Demo login failed. Make sure you've created ${demoEmail} in Firebase Auth and added a Firestore document for them!`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-page__content">
        <div className="login-page__header">
          <div className="login-page__logo">
            <svg width="40" height="40" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="8" fill="#6366f1" />
              <path d="M8 16L13 11L16 14L19 11L24 16L19 21L16 18L13 21L8 16Z" fill="white" opacity="0.9" />
              <circle cx="16" cy="16" r="2" fill="#6366f1" />
            </svg>
          </div>
          <h1 className="login-page__title">MatchMind <span className="login-page__ai">AI</span></h1>
          <p className="login-page__subtitle">
            Secure Authentication Portal
          </p>
        </div>

        <form className="login-form" onSubmit={handleLogin}>
          {error && (
            <div className="login-form__error" role="alert">
              <AlertCircle size={16} />
              {error}
            </div>
          )}
          
          <div className="login-form__field">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="operator@matchmind.com"
              required
              disabled={loading}
              className="login-form__input"
            />
          </div>

          <div className="login-form__field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              disabled={loading}
              className="login-form__input"
            />
          </div>

          <button 
            type="submit" 
            className="login-form__submit"
            disabled={loading}
          >
            {loading ? 'Authenticating...' : (
              <>
                <Shield size={18} />
                Sign in with Email
                <ArrowRight size={18} />
              </>
            )}
          </button>
          
          <div style={{ textAlign: 'center', margin: '0.5rem 0', color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            OR
          </div>

          <button 
            type="button" 
            className="login-form__submit"
            style={{ background: 'white', color: '#333' }}
            disabled={loading}
            onClick={handleGoogleLogin}
          >
            {loading ? 'Authenticating...' : (
              <>
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  <path fill="none" d="M1 1h22v22H1z" />
                </svg>
                Sign in with Google
              </>
            )}
          </button>
        </form>

        <div className="login-page__footer">
          <div style={{ marginTop: '1rem', width: '100%' }}>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', marginBottom: '0.5rem', textAlign: 'center' }}>
              Quick Demo Logins
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
              <button 
                className="login-form__submit" 
                style={{ padding: '0.5rem', fontSize: '0.85rem', minHeight: '36px', background: 'rgba(99, 102, 241, 0.1)', color: '#818cf8', border: '1px solid rgba(99, 102, 241, 0.2)' }}
                onClick={() => handleDemoLogin('admin@matchmind.com')}
                disabled={loading}
              >
                Operations
              </button>
              <button 
                className="login-form__submit" 
                style={{ padding: '0.5rem', fontSize: '0.85rem', minHeight: '36px', background: 'rgba(239, 68, 68, 0.1)', color: '#f87171', border: '1px solid rgba(239, 68, 68, 0.2)' }}
                onClick={() => handleDemoLogin('security@matchmind.com')}
                disabled={loading}
              >
                Security
              </button>
              <button 
                className="login-form__submit" 
                style={{ padding: '0.5rem', fontSize: '0.85rem', minHeight: '36px', background: 'rgba(245, 158, 11, 0.1)', color: '#fbbf24', border: '1px solid rgba(245, 158, 11, 0.2)' }}
                onClick={() => handleDemoLogin('staff@matchmind.com')}
                disabled={loading}
              >
                Staff
              </button>
              <button 
                className="login-form__submit" 
                style={{ padding: '0.5rem', fontSize: '0.85rem', minHeight: '36px', background: 'rgba(34, 197, 94, 0.1)', color: '#4ade80', border: '1px solid rgba(34, 197, 94, 0.2)' }}
                onClick={() => handleDemoLogin('fan@matchmind.com')}
                disabled={loading}
              >
                Spectator
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
