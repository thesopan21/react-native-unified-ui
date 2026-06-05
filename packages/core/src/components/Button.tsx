import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import type { ButtonProps } from '../types';
import { Pressable } from './Pressable';
import { Stack } from './Stack';
import { Text } from './Text';
import { View } from './View';

/**
 * Button component with variants and loading states
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  disabled = false,
  onPress,
  leftIcon,
  rightIcon,
  children,
}) => {
  const isDisabled = disabled || loading;

  return (
    <Pressable onPress={onPress} disabled={isDisabled} feedback="scale">
      <View
        style={[
          styles.base,
          sizeStyles[size],
          variantStyles[variant],
          fullWidth && styles.fullWidth,
          isDisabled && styles.disabled,
        ]}
        radius="md"
      >
        <Stack direction="row" spacing="sm" align="center" justify="center">
          {loading ? (
            <ActivityIndicator
              size="small"
              color={variant === 'outline' || variant === 'ghost' ? '#3B82F6' : '#FFFFFF'}
            />
          ) : (
            <>
              {leftIcon && <View>{leftIcon}</View>}
              {typeof children === 'string' ? (
                <Text
                  variant={size === 'sm' ? 'caption' : size === 'lg' ? 'body' : 'body'}
                  weight="semibold"
                  style={textColorStyles[variant]}
                >
                  {children}
                </Text>
              ) : (
                children
              )}
              {rightIcon && <View>{rightIcon}</View>}
            </>
          )}
        </Stack>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullWidth: {
    width: '100%',
  },
  disabled: {
    opacity: 0.4,
  },
});

const sizeStyles = StyleSheet.create({
  sm: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    minHeight: 32,
  },
  md: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    minHeight: 40,
  },
  lg: {
    paddingHorizontal: 24,
    paddingVertical: 14,
    minHeight: 48,
  },
});

const variantStyles = StyleSheet.create({
  primary: {
    backgroundColor: '#3B82F6',
  },
  secondary: {
    backgroundColor: '#8B5CF6',
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#3B82F6',
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  danger: {
    backgroundColor: '#EF4444',
  },
});

const textColorStyles = StyleSheet.create({
  primary: {
    color: '#FFFFFF',
  },
  secondary: {
    color: '#FFFFFF',
  },
  outline: {
    color: '#3B82F6',
  },
  ghost: {
    color: '#3B82F6',
  },
  danger: {
    color: '#FFFFFF',
  },
});
