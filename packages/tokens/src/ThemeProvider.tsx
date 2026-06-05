import React, { createContext, useState, useMemo } from 'react';
import type { ThemeMode, ThemeContextValue } from './types';
import baseTokens from '../tokens/base.json';

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
  theme?: ThemeMode;
  defaultTheme?: ThemeMode;
}

/**
 * Theme provider component
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  theme: controlledTheme,
  defaultTheme = 'light',
}) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(controlledTheme || defaultTheme);

  const currentTheme = controlledTheme || themeMode;

  const tokens = useMemo(() => {
    return {
      colors: baseTokens.colors[currentTheme],
      spacing: baseTokens.spacing,
      typography: baseTokens.typography,
      radius: baseTokens.radius,
      shadows: baseTokens.shadows,
      motion: baseTokens.motion,
      opacity: baseTokens.opacity,
      zIndex: baseTokens.zIndex,
    };
  }, [currentTheme]);

  const value: ThemeContextValue = {
    theme: currentTheme,
    setTheme: setThemeMode,
    tokens,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
