import React from 'react';
import { Image, StyleSheet } from 'react-native';
import type { AvatarProps } from '../types';
import { Text } from './Text';
import { View } from './View';

/**
 * Avatar component with image or fallback initials
 */
export const Avatar: React.FC<AvatarProps> = ({
  size = 'md',
  source,
  fallback,
  alt,
  shape = 'circle',
}) => {
  const containerSize = sizeValues[size];
  const fontSize = fontSizeValues[size];

  return (
    <View
      style={[
        styles.base,
        { width: containerSize, height: containerSize },
        shape === 'circle' ? styles.circle : styles.square,
      ]}
      radius={shape === 'square' ? 'md' : 'full'}
    >
      {source ? (
        <Image
          source={source}
          style={[
            styles.image,
            { width: containerSize, height: containerSize },
            shape === 'circle' && styles.circle,
          ]}
          accessibilityLabel={alt}
        />
      ) : (
        <View style={styles.fallback}>
          <Text
            variant="body"
            weight="semibold"
            style={[styles.fallbackText, { fontSize }]}
          >
            {fallback || '?'}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    overflow: 'hidden',
    backgroundColor: '#E5E7EB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    borderRadius: 9999,
  },
  square: {
    borderRadius: 8,
  },
  image: {
    resizeMode: 'cover',
  },
  fallback: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  fallbackText: {
    color: '#6B7280',
  },
});

const sizeValues: Record<string, number> = {
  sm: 32,
  md: 40,
  lg: 48,
  xl: 64,
};

const fontSizeValues: Record<string, number> = {
  sm: 14,
  md: 16,
  lg: 20,
  xl: 24,
};
