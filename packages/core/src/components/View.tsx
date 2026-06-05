import React from 'react';
import { View as RNView, StyleSheet } from 'react-native';
import type { ViewProps } from '../types';

/**
 * Enhanced View component with design token support
 */
export const View = React.forwardRef<RNView, ViewProps>(
  ({ elevation = 'none', radius = 'none', padding = 'none', style, ...props }, ref) => {
    const styles = StyleSheet.flatten([
      elevationStyles[elevation],
      radiusStyles[radius],
      paddingStyles[padding],
      style,
    ]);

    return <RNView ref={ref} style={styles} {...props} />;
  }
);

View.displayName = 'View';

// Temporary hardcoded styles - will be replaced with design tokens
const elevationStyles = StyleSheet.create({
  none: {},
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  xl: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 8,
  },
});

const radiusStyles = StyleSheet.create({
  none: { borderRadius: 0 },
  sm: { borderRadius: 4 },
  md: { borderRadius: 8 },
  lg: { borderRadius: 16 },
  full: { borderRadius: 9999 },
});

const paddingStyles = StyleSheet.create({
  none: { padding: 0 },
  xs: { padding: 4 },
  sm: { padding: 8 },
  md: { padding: 16 },
  lg: { padding: 24 },
  xl: { padding: 32 },
});
