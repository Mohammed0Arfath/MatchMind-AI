import React, { createContext, useContext, useMemo } from 'react';
import { useTheme } from '../../hooks/useTheme';

interface ThemeContextType {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  setTheme: (t: 'dark' | 'light') => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const themeHook = useTheme();

  const value = useMemo(
    () => ({
      theme: themeHook.theme,
      toggleTheme: themeHook.toggleTheme,
      setTheme: themeHook.setTheme,
    }),
    [themeHook.theme, themeHook.toggleTheme, themeHook.setTheme]
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
}
