# @rn-unified-ui/tokens

Design token system for React Native Unified UI Framework.

## Installation

```bash
npm install @rn-unified-ui/tokens
# or
yarn add @rn-unified-ui/tokens
# or
pnpm add @rn-unified-ui/tokens
```

## Features

- 🎨 **Semantic Tokens** - Color, typography, spacing, and more
- 🌗 **Theme Support** - Light, dark, and custom themes
- 🔄 **Dynamic Theming** - Runtime theme switching
- 📱 **Platform Aware** - Platform-specific token values
- 🎯 **Type-Safe** - Full TypeScript support
- 📦 **Tree-Shakeable** - Import only what you need

## Usage

### Basic Usage

```tsx
import { useTokens } from '@rn-unified-ui/tokens';

function MyComponent() {
  const tokens = useTokens();
  
  return (
    <View style={{
      padding: tokens.spacing.md,
      backgroundColor: tokens.colors.surface,
      borderRadius: tokens.radius.md,
    }}>
      <Text style={{
        fontSize: tokens.typography.body.fontSize,
        color: tokens.colors.text.primary,
      }}>
        Hello World
      </Text>
    </View>
  );
}
```

### Theme Provider

```tsx
import { ThemeProvider } from '@rn-unified-ui/tokens';

function App() {
  return (
    <ThemeProvider theme="light">
      <MyApp />
    </ThemeProvider>
  );
}
```

### Custom Theme

```tsx
import { ThemeProvider, createTheme } from '@rn-unified-ui/tokens';

const customTheme = createTheme({
  colors: {
    primary: '#FF6B6B',
    secondary: '#4ECDC4',
  },
  spacing: {
    sm: 8,
    md: 16,
    lg: 24,
  },
});

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <MyApp />
    </ThemeProvider>
  );
}
```

### Dynamic Theme Switching

```tsx
import { useTheme } from '@rn-unified-ui/tokens';

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  
  return (
    <Button onPress={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Toggle Theme
    </Button>
  );
}
```

## Token Categories

### Colors
- `primary`, `secondary`, `success`, `warning`, `error`
- `background`, `surface`, `border`
- `text.primary`, `text.secondary`, `text.disabled`

### Typography
- `display`, `heading`, `title`, `body`, `caption`, `label`
- Font size, line height, font weight

### Spacing
- `none`, `xs`, `sm`, `md`, `lg`, `xl`, `2xl`

### Radius
- `none`, `sm`, `md`, `lg`, `full`

### Shadows
- `none`, `sm`, `md`, `lg`, `xl`

### Motion
- Duration and easing curves

### Opacity
- `disabled`, `hover`, `active`

### Z-Index
- Layering system

## API Reference

See [documentation](https://rn-unified-ui.dev/docs/tokens) for full API reference.

## License

MIT © RN Unified UI Contributors
