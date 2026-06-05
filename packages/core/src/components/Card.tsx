import React from 'react';
import { StyleSheet } from 'react-native';
import type { CardProps } from '../types';
import { Pressable } from './Pressable';
import { View } from './View';

/**
 * Card component with elevation and outline variants
 */
export const Card: React.FC<CardProps> = ({
  variant = 'elevated',
  padding = 'md',
  onPress,
  children,
}) => {
  const cardContent = (
    <View
      elevation={variant === 'elevated' ? 'md' : 'none'}
      radius="lg"
      padding={padding}
      style={[styles.base, variantStyles[variant]]}
    >
      {children}
    </View>
  );

  if (onPress) {
    return (
      <Pressable onPress={onPress} feedback="opacity">
        {cardContent}
      </Pressable>
    );
  }

  return cardContent;
};

const styles = StyleSheet.create({
  base: {
    overflow: 'hidden',
  },
});

const variantStyles = StyleSheet.create({
  elevated: {
    backgroundColor: '#FFFFFF',
  },
  outlined: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  filled: {
    backgroundColor: '#F9FAFB',
  },
});
