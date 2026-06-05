export interface ColorTokens {
  primary: string;
  primaryHover: string;
  primaryActive: string;
  secondary: string;
  secondaryHover: string;
  secondaryActive: string;
  success: string;
  successHover: string;
  successActive: string;
  warning: string;
  warningHover: string;
  warningActive: string;
  error: string;
  errorHover: string;
  errorActive: string;
  background: string;
  backgroundSecondary: string;
  surface: string;
  surfaceHover: string;
  border: string;
  borderHover: string;
  text: {
    primary: string;
    secondary: string;
    tertiary: string;
    disabled: string;
    inverse: string;
  };
}

export interface SpacingTokens {
  none: number;
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  '2xl': number;
  '3xl': number;
  '4xl': number;
  '5xl': number;
  '6xl': number;
}

export interface TypographyToken {
  fontSize: number;
  lineHeight: number;
  fontWeight: string;
  letterSpacing: number;
}

export interface TypographyTokens {
  display: TypographyToken;
  heading: TypographyToken;
  title: TypographyToken;
  body: TypographyToken;
  caption: TypographyToken;
  label: TypographyToken;
}

export interface RadiusTokens {
  none: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  full: number;
}

export interface ShadowToken {
  shadowColor: string;
  shadowOffset: { width: number; height: number };
  shadowOpacity: number;
  shadowRadius: number;
  elevation: number;
}

export interface ShadowTokens {
  none: ShadowToken;
  sm: ShadowToken;
  md: ShadowToken;
  lg: ShadowToken;
  xl: ShadowToken;
}

export interface MotionTokens {
  duration: {
    fast: number;
    normal: number;
    slow: number;
  };
  easing: {
    linear: number[];
    ease: number[];
    easeIn: number[];
    easeOut: number[];
    easeInOut: number[];
  };
}

export interface OpacityTokens {
  disabled: number;
  hover: number;
  active: number;
}

export interface ZIndexTokens {
  base: number;
  dropdown: number;
  sticky: number;
  fixed: number;
  modal: number;
  popover: number;
  tooltip: number;
}

export interface Theme {
  colors: ColorTokens;
  spacing: SpacingTokens;
  typography: TypographyTokens;
  radius: RadiusTokens;
  shadows: ShadowTokens;
  motion: MotionTokens;
  opacity: OpacityTokens;
  zIndex: ZIndexTokens;
}

export type ThemeMode = 'light' | 'dark';

export interface ThemeContextValue {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  tokens: Theme;
}
