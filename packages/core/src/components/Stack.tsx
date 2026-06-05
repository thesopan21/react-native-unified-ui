import React from 'react';
import { View, StyleSheet } from 'react-native';
import type { StackProps } from '../types';

/**
 * Flexbox-based layout component
 */
export const Stack: React.FC<StackProps> = ({
  direction = 'column',
  spacing = 'md',
  align = 'stretch',
  justify = 'start',
  wrap = false,
  children,
  ...props
}) => {
  const styles = StyleSheet.flatten([
    stackStyles.base,
    { flexDirection: direction },
    alignItems[align],
    justifyContent[justify],
    ...(wrap ? [{ flexWrap: 'wrap' as const }] : []),
  ]);

  const childrenArray = React.Children.toArray(children);
  const spacingValue = spacingValues[spacing];

  return (
    <View style={styles} {...props}>
      {childrenArray.map((child, index) => (
        <View
          key={index}
          style={
            index < childrenArray.length - 1
              ? direction === 'row'
                ? { marginRight: spacingValue }
                : { marginBottom: spacingValue }
              : undefined
          }
        >
          {child}
        </View>
      ))}
    </View>
  );
};

const stackStyles = StyleSheet.create({
  base: {
    display: 'flex',
  },
});

const alignItems = StyleSheet.create({
  start: { alignItems: 'flex-start' },
  center: { alignItems: 'center' },
  end: { alignItems: 'flex-end' },
  stretch: { alignItems: 'stretch' },
});

const justifyContent = StyleSheet.create({
  start: { justifyContent: 'flex-start' },
  center: { justifyContent: 'center' },
  end: { justifyContent: 'flex-end' },
  between: { justifyContent: 'space-between' },
  around: { justifyContent: 'space-around' },
  evenly: { justifyContent: 'space-evenly' },
});

const spacingValues = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};
