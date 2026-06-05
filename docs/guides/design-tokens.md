# Design Tokens Guide

Design tokens are the foundation of RN Unified UI's design system. They provide a centralized, semantic way to manage design values across your application.

## What are Design Tokens?

Design tokens are named entities that store visual design attributes. Instead of hardcoding values like colors, spacing, or typography throughout your app, you reference tokens that can be updated globally.

### Before (Hardcoded Values)
```tsx
<View style={{ padding: 16, backgroundColor: '#3B82F6', borderRadius: 8 }}>
  <Text style={{ fontSize: 16, color: '#FFFFFF' }}>Hello</Text>
</View>
```

### After (Design Tokens)
```tsx
const tokens = useTokens();

<View style={{ 
  padding: tokens.spacing.md, 
  backgroundColor: tokens.colors.primary,
  borderRadius: tokens.radius.md 
}}>
  <Text style={{ 
    fontSize: tokens.typography.body.fontSize,
    color: tokens.colors.text.inverse 
  }}>
    Hello
  </Text>
</View>
```

## Token Categories

### Colors

Semantic color system with light and dark theme support:

```tsx
const tokens = useTokens();

// Brand colors
tokens.colors.primary
tokens.colors.secondary

// Semantic colors
tokens.colors.success
tokens.colors.warning
tokens.colors.error

// Surface colors
tokens.colors.background
tokens.colors.surface
tokens.colors.border

// Text colors
tokens.colors.text.primary
tokens.colors.text.secondary
tokens.colors.text.disabled
tokens.colors.text.inverse
```

### Typography

Font sizes, weights, and line heights:

```tsx
const tokens = useTokens();

// Typography scales
tokens.typography.display    // 40px
tokens.typography.heading    // 32px
tokens.typography.title      // 24px
tokens.typography.body       // 16px
tokens.typography.caption    // 14px
tokens.typography.label      // 12px

// Each includes:
tokens.typography.body.fontSize
tokens.typography.body.lineHeight
tokens.typography.body.fontWeight
tokens.typography.body.letterSpacing
```

### Spacing

Consistent spacing scale:

```tsx
const tokens = useTokens();

tokens.spacing.none   // 0
tokens.spacing.xs     // 4
tokens.spacing.sm     // 8
tokens.spacing.md     // 16
tokens.spacing.lg     // 24
tokens.spacing.xl     // 32
tokens.spacing['2xl'] // 40
```

### Radius

Border radius values:

```tsx
const tokens = useTokens();

tokens.radius.none  // 0
tokens.radius.sm    // 4
tokens.radius.md    // 8
tokens.radius.lg    // 16
tokens.radius.xl    // 24
tokens.radius.full  // 9999
```

### Shadows

Cross-platform shadow definitions:

```tsx
const tokens = useTokens();

// Apply entire shadow object
<View style={tokens.shadows.md}>
  <Text>Card with shadow</Text>
</View>

// Available shadows
tokens.shadows.none
tokens.shadows.sm
tokens.shadows.md
tokens.shadows.lg
tokens.shadows.xl
```

### Motion

Animation timing and easing:

```tsx
const tokens = useTokens();

// Duration (in milliseconds)
tokens.motion.duration.fast    // 150
tokens.motion.duration.normal  // 250
tokens.motion.duration.slow    // 350

// Easing curves
tokens.motion.easing.linear
tokens.motion.easing.ease
tokens.motion.easing.easeIn
tokens.motion.easing.easeOut
tokens.motion.easing.easeInOut
```

### Opacity

Transparency values for states:

```tsx
const tokens = useTokens();

tokens.opacity.disabled  // 0.4
tokens.opacity.hover     // 0.8
tokens.opacity.active    // 0.6
```

### Z-Index

Layering system:

```tsx
const tokens = useTokens();

tokens.zIndex.base      // 0
tokens.zIndex.dropdown  // 1000
tokens.zIndex.sticky    // 1100
tokens.zIndex.fixed     // 1200
tokens.zIndex.modal     // 1300
tokens.zIndex.popover   // 1400
tokens.zIndex.tooltip   // 1500
```

## Using Tokens

### With useTokens Hook

```tsx
import { useTokens } from '@rn-unified-ui/tokens';

function MyComponent() {
  const tokens = useTokens();
  
  return (
    <View style={{
      padding: tokens.spacing.lg,
      backgroundColor: tokens.colors.surface,
      ...tokens.shadows.md,
    }}>
      <Text style={{
        fontSize: tokens.typography.heading.fontSize,
        color: tokens.colors.text.primary,
      }}>
        Title
      </Text>
    </View>
  );
}
```

### With Component Props

Some components accept token values directly:

```tsx
<View elevation="md" radius="lg" padding="xl">
  <Text variant="heading" weight="bold">Title</Text>
</View>
```

## Theme Switching

Tokens automatically update when the theme changes:

```tsx
import { useTheme } from '@rn-unified-ui/tokens';

function ThemeDemo() {
  const { theme, setTheme, tokens } = useTheme();
  
  return (
    <View style={{ backgroundColor: tokens.colors.background }}>
      <Text style={{ color: tokens.colors.text.primary }}>
        Current theme: {theme}
      </Text>
      <Button onPress={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </Button>
    </View>
  );
}
```

## Custom Token Values

### Override Specific Tokens

```tsx
import { createTheme } from '@rn-unified-ui/tokens';

const customTheme = createTheme({
  colors: {
    primary: '#FF6B6B',
    secondary: '#4ECDC4',
  },
  spacing: {
    md: 20, // override default 16
  },
});
```

### Add Custom Tokens

For app-specific tokens, extend the theme:

```tsx
const appTokens = {
  ...tokens,
  custom: {
    headerHeight: 60,
    tabBarHeight: 50,
    borderWidth: 2,
  },
};
```

## Best Practices

### ✅ Do

- Use semantic token names (`primary`, `surface`, `text.primary`)
- Reference tokens through the `useTokens` hook
- Keep token values in the design system
- Use tokens for all visual properties

### ❌ Don't

- Hardcode colors, spacing, or font sizes
- Reference token values directly from JSON
- Mix tokens and hardcoded values
- Create component-specific tokens

## Benefits

### Consistency
All components use the same design values, ensuring visual consistency.

### Maintainability
Update once, reflect everywhere. Change primary color in one place.

### Theming
Built-in support for light/dark themes and custom themes.

### Accessibility
Semantic tokens make it easier to ensure sufficient contrast and sizing.

### Scalability
Add new features without introducing visual drift.

## Advanced Usage

### Platform-Specific Tokens

```tsx
import { Platform } from 'react-native';

const platformSpacing = Platform.select({
  ios: tokens.spacing.lg,
  android: tokens.spacing.md,
});
```

### Responsive Tokens

```tsx
import { useWindowDimensions } from 'react-native';

function ResponsiveComponent() {
  const { width } = useWindowDimensions();
  const tokens = useTokens();
  
  const padding = width > 768 
    ? tokens.spacing.xl 
    : tokens.spacing.md;
    
  return <View style={{ padding }}>...</View>;
}
```

## Token Reference

For a complete list of all tokens and their values, see:

- [Base Tokens JSON](../../packages/tokens/tokens/base.json)
- [Type Definitions](../../packages/tokens/src/types.ts)
- [API Documentation](../api/tokens.md)

## Next Steps

- [Theming Guide](./theming.md)
- [Component API](../api/components.md)
- [Custom Themes](./custom-themes.md)
