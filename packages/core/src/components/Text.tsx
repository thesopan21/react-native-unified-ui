import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';
import type { TextProps } from '../types';

/**
 * Typography component with variant support
 */
export const Text: React.FC<TextProps> = ({
  variant = 'body',
  weight = 'regular',
  color,
  align = 'left',
  children,
  ...props
}) => {
  const styles = StyleSheet.flatten([
    variantStyles[variant],
    weightStyles[weight],
    { textAlign: align },
    color && { color },
  ]);

  return (
    <RNText style={styles} {...props}>
      {children}
    </RNText>
  );
};

// Temporary hardcoded styles - will be replaced with design tokens
const variantStyles = StyleSheet.create({
  display: {
    fontSize: 40,
    lineHeight: 48,
  },
  heading: {
    fontSize: 32,
    lineHeight: 40,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
  },
  caption: {
    fontSize: 14,
    lineHeight: 20,
  },
  label: {
    fontSize: 12,
    lineHeight: 16,
  },
});

const weightStyles = StyleSheet.create({
  regular: { fontWeight: '400' },
  medium: { fontWeight: '500' },
  semibold: { fontWeight: '600' },
  bold: { fontWeight: '700' },
});
