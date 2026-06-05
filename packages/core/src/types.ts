import type { ViewProps as RNViewProps } from 'react-native';

export interface ViewProps extends RNViewProps {
  /**
   * Apply elevation/shadow tokens
   */
  elevation?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  
  /**
   * Border radius tokens
   */
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  
  /**
   * Padding tokens
   */
  padding?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export interface TextProps {
  /**
   * Typography variant
   */
  variant?: 'display' | 'heading' | 'title' | 'body' | 'caption' | 'label';
  
  /**
   * Text weight
   */
  weight?: 'regular' | 'medium' | 'semibold' | 'bold';
  
  /**
   * Text color token
   */
  color?: string;
  
  /**
   * Text alignment
   */
  align?: 'left' | 'center' | 'right' | 'justify';
  
  children?: React.ReactNode;
}

export interface PressableProps {
  /**
   * Press handler
   */
  onPress?: () => void;
  
  /**
   * Disabled state
   */
  disabled?: boolean;
  
  /**
   * Press feedback style
   */
  feedback?: 'opacity' | 'highlight' | 'scale';
  
  children?: React.ReactNode;
}

export interface ContainerProps {
  /**
   * Maximum width constraint
   */
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  
  /**
   * Center content horizontally
   */
  center?: boolean;
  
  /**
   * Padding
   */
  padding?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  
  children?: React.ReactNode;
}

export interface StackProps {
  /**
   * Direction of stack
   */
  direction?: 'row' | 'column';
  
  /**
   * Spacing between items
   */
  spacing?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  
  /**
   * Alignment of items
   */
  align?: 'start' | 'center' | 'end' | 'stretch';
  
  /**
   * Justify content
   */
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  
  /**
   * Wrap items
   */
  wrap?: boolean;
  
  children?: React.ReactNode;
}
