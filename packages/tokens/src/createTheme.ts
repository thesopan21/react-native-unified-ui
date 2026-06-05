import type { Theme } from './types';
import baseTokens from '../tokens/base.json';

/**
 * Create a custom theme by merging with base tokens
 */
export const createTheme = (customTokens: Partial<Theme>): Theme => {
  return {
    colors: {
      ...baseTokens.colors.light,
      ...customTokens.colors,
    },
    spacing: {
      ...baseTokens.spacing,
      ...customTokens.spacing,
    },
    typography: {
      ...baseTokens.typography,
      ...customTokens.typography,
    },
    radius: {
      ...baseTokens.radius,
      ...customTokens.radius,
    },
    shadows: {
      ...baseTokens.shadows,
      ...customTokens.shadows,
    },
    motion: {
      ...baseTokens.motion,
      ...customTokens.motion,
    },
    opacity: {
      ...baseTokens.opacity,
      ...customTokens.opacity,
    },
    zIndex: {
      ...baseTokens.zIndex,
      ...customTokens.zIndex,
    },
  } as Theme;
};
