import React from 'react';
import { Pressable as RNPressable, Animated } from 'react-native';
import type { PressableProps } from '../types';

/**
 * Touch-enabled component with consistent feedback
 */
export const Pressable: React.FC<PressableProps> = ({
  onPress,
  disabled = false,
  feedback = 'opacity',
  children,
  ...props
}) => {
  const animatedValue = React.useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    if (feedback === 'opacity' || feedback === 'scale') {
      Animated.spring(animatedValue, {
        toValue: feedback === 'opacity' ? 0.6 : 0.95,
        useNativeDriver: true,
      }).start();
    }
  };

  const handlePressOut = () => {
    if (feedback === 'opacity' || feedback === 'scale') {
      Animated.spring(animatedValue, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    }
  };

  const animatedStyle =
    feedback === 'opacity'
      ? { opacity: animatedValue }
      : feedback === 'scale'
      ? { transform: [{ scale: animatedValue }] }
      : {};

  return (
    <RNPressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      disabled={disabled}
      {...props}
    >
      <Animated.View style={animatedStyle}>{children}</Animated.View>
    </RNPressable>
  );
};
