import React from 'react';
import { View, StyleSheet } from 'react-native';
import type { ContainerProps } from '../types';

/**
 * Layout container with responsive utilities
 */
export const Container: React.FC<ContainerProps> = ({
  maxWidth = 'full',
  center = false,
  padding = 'md',
  children,
  ...props
}) => {
  const styles = StyleSheet.flatten([
    containerStyles.base,
    maxWidthStyles[maxWidth],
    center && containerStyles.center,
    paddingStyles[padding],
  ]);

  return (
    <View style={styles} {...props}>
      {children}
    </View>
  );
};

const containerStyles = StyleSheet.create({
  base: {
    width: '100%',
  },
  center: {
    alignSelf: 'center',
  },
});

const maxWidthStyles = StyleSheet.create({
  sm: { maxWidth: 640 },
  md: { maxWidth: 768 },
  lg: { maxWidth: 1024 },
  xl: { maxWidth: 1280 },
  full: { maxWidth: '100%' },
});

const paddingStyles = StyleSheet.create({
  none: { padding: 0 },
  xs: { padding: 4 },
  sm: { padding: 8 },
  md: { padding: 16 },
  lg: { padding: 24 },
  xl: { padding: 32 },
});
