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

  /**
   * Additional styles
   */
  style?: any;

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

export interface ButtonProps {
  /**
   * Button variant
   */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';

  /**
   * Button size
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Full width button
   */
  fullWidth?: boolean;

  /**
   * Loading state
   */
  loading?: boolean;

  /**
   * Disabled state
   */
  disabled?: boolean;

  /**
   * Press handler
   */
  onPress?: () => void;

  /**
   * Icon on the left
   */
  leftIcon?: React.ReactNode;

  /**
   * Icon on the right
   */
  rightIcon?: React.ReactNode;

  children?: React.ReactNode;
}

export interface InputProps {
  /**
   * Input value
   */
  value?: string;

  /**
   * Change handler
   */
  onChangeText?: (text: string) => void;

  /**
   * Placeholder text
   */
  placeholder?: string;

  /**
   * Input size
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Error state
   */
  error?: boolean;

  /**
   * Error message
   */
  errorMessage?: string;

  /**
   * Disabled state
   */
  disabled?: boolean;

  /**
   * Input label
   */
  label?: string;

  /**
   * Helper text
   */
  helperText?: string;

  /**
   * Left icon/element
   */
  leftElement?: React.ReactNode;

  /**
   * Right icon/element
   */
  rightElement?: React.ReactNode;

  /**
   * Secure text entry (password)
   */
  secureTextEntry?: boolean;

  /**
   * Keyboard type
   */
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';

  /**
   * Autocapitalize
   */
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
}

export interface CardProps {
  /**
   * Card variant
   */
  variant?: 'elevated' | 'outlined' | 'filled';

  /**
   * Padding
   */
  padding?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

  /**
   * Pressable card
   */
  onPress?: () => void;

  children?: React.ReactNode;
}

export interface BadgeProps {
  /**
   * Badge variant
   */
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'neutral';

  /**
   * Badge size
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Badge text
   */
  label?: string;

  /**
   * Dot badge (no text)
   */
  dot?: boolean;

  children?: React.ReactNode;
}

export interface AvatarProps {
  /**
   * Avatar size
   */
  size?: 'sm' | 'md' | 'lg' | 'xl';

  /**
   * Image source
   */
  source?: { uri: string } | number;

  /**
   * Fallback text (initials)
   */
  fallback?: string;

  /**
   * Alt text
   */
  alt?: string;

  /**
   * Avatar shape
   */
  shape?: 'circle' | 'square';
}

export interface DividerProps {
  /**
   * Divider orientation
   */
  orientation?: 'horizontal' | 'vertical';

  /**
   * Divider thickness
   */
  thickness?: number;

  /**
   * Spacing around divider
   */
  spacing?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

  /**
   * Divider color
   */
  color?: string;
}
