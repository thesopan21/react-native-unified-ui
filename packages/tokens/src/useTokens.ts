import { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';
import type { Theme } from './types';

/**
 * Hook to access design tokens
 */
export const useTokens = (): Theme => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTokens must be used within a ThemeProvider');
  }

  return context.tokens;
};
