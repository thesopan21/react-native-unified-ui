import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import type { InputProps } from '../types';
import { Stack } from './Stack';
import { Text } from './Text';
import { View } from './View';

/**
 * Text input component with validation support
 */
export const Input: React.FC<InputProps> = ({
  value,
  onChangeText,
  placeholder,
  size = 'md',
  error = false,
  errorMessage,
  disabled = false,
  label,
  helperText,
  leftElement,
  rightElement,
  secureTextEntry = false,
  keyboardType = 'default',
  autoCapitalize = 'sentences',
}) => {
  return (
    <View>
      {label && (
        <Text variant="label" weight="medium" style={styles.label}>
          {label}
        </Text>
      )}

      <View
        style={[
          styles.inputContainer,
          sizeStyles[size],
          error && styles.errorBorder,
          disabled && styles.disabled,
        ]}
        radius="md"
      >
        <Stack direction="row" spacing="sm" align="center">
          {leftElement && <View>{leftElement}</View>}

          <TextInput
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor="#9CA3AF"
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            autoCapitalize={autoCapitalize}
            editable={!disabled}
            style={[styles.input, textSizeStyles[size]]}
          />

          {rightElement && <View>{rightElement}</View>}
        </Stack>
      </View>

      {errorMessage && error && (
        <Text variant="caption" style={styles.errorText}>
          {errorMessage}
        </Text>
      )}

      {helperText && !error && (
        <Text variant="caption" style={styles.helperText}>
          {helperText}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    marginBottom: 8,
    color: '#374151',
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
  },
  input: {
    flex: 1,
    color: '#111827',
    padding: 0,
  },
  errorBorder: {
    borderColor: '#EF4444',
  },
  disabled: {
    backgroundColor: '#F3F4F6',
    opacity: 0.6,
  },
  errorText: {
    color: '#EF4444',
    marginTop: 4,
  },
  helperText: {
    color: '#6B7280',
    marginTop: 4,
  },
});

const sizeStyles = StyleSheet.create({
  sm: {
    minHeight: 32,
    paddingVertical: 6,
  },
  md: {
    minHeight: 40,
    paddingVertical: 10,
  },
  lg: {
    minHeight: 48,
    paddingVertical: 14,
  },
});

const textSizeStyles = StyleSheet.create({
  sm: {
    fontSize: 14,
    lineHeight: 20,
  },
  md: {
    fontSize: 16,
    lineHeight: 24,
  },
  lg: {
    fontSize: 18,
    lineHeight: 28,
  },
});
