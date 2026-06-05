import React from 'react';
import { StyleSheet } from 'react-native';
import type { BadgeProps } from '../types';
import { Text } from './Text';
import { View } from './View';

/**
 * Badge component for status indicators
 */
export const Badge: React.FC<BadgeProps> = ({
  variant = 'primary',
  size = 'md',
  label,
  dot = false,
  children,
}) => {
  if (dot) {
    return (
      <View style={[styles.dot, dotSizeStyles[size], variantStyles[variant]]} radius="full" />
    );
  }

  const content = label || children;

  return (
    <View
      style={[styles.base, sizeStyles[size], variantStyles[variant]]}
      radius="full"
      padding="none"
    >
      {typeof content === 'string' ? (
        <Text
          variant={size === 'sm' ? 'label' : 'caption'}
          weight="medium"
          style={textColorStyles[variant]}
        >
          {content}
        </Text>
      ) : (
        content
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  dot: {
    alignSelf: 'flex-start',
  },
});

const sizeStyles = StyleSheet.create({
  sm: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    minHeight: 18,
  },
  md: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    minHeight: 22,
  },
  lg: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    minHeight: 28,
  },
});

const dotSizeStyles = StyleSheet.create({
  sm: {
    width: 6,
    height: 6,
  },
  md: {
    width: 8,
    height: 8,
  },
  lg: {
    width: 10,
    height: 10,
  },
});

const variantStyles = StyleSheet.create({
  primary: {
    backgroundColor: '#3B82F6',
  },
  secondary: {
    backgroundColor: '#8B5CF6',
  },
  success: {
    backgroundColor: '#10B981',
  },
  warning: {
    backgroundColor: '#F59E0B',
  },
  error: {
    backgroundColor: '#EF4444',
  },
  neutral: {
    backgroundColor: '#6B7280',
  },
});

const textColorStyles = StyleSheet.create({
  primary: {
    color: '#FFFFFF',
  },
  secondary: {
    color: '#FFFFFF',
  },
  success: {
    color: '#FFFFFF',
  },
  warning: {
    color: '#FFFFFF',
  },
  error: {
    color: '#FFFFFF',
  },
  neutral: {
    color: '#FFFFFF',
  },
});
