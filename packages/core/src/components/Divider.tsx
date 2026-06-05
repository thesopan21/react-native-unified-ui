import React from 'react';
import { StyleSheet } from 'react-native';
import type { DividerProps } from '../types';
import { View } from './View';

/**
 * Divider component for separating content
 */
export const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  thickness = 1,
  spacing = 'none',
  color = '#E5E7EB',
}) => {
  const spacingValue = spacingValues[spacing];

  return (
    <View
      style={[
        orientation === 'horizontal' ? styles.horizontal : styles.vertical,
        orientation === 'horizontal'
          ? {
            height: thickness,
            marginVertical: spacingValue,
            backgroundColor: color,
          }
          : {
            width: thickness,
            marginHorizontal: spacingValue,
            backgroundColor: color,
          },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  horizontal: {
    width: '100%',
  },
  vertical: {
    height: '100%',
  },
});

const spacingValues = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};
