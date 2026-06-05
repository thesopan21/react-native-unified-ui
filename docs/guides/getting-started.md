# Getting Started

Welcome to RN Unified UI! This guide will help you get started with the framework.

## Installation

### Prerequisites

Before you begin, ensure you have:

- Node.js >= 18.0.0
- pnpm >= 8.0.0 (or npm/yarn)
- React Native >= 0.73.0
- Existing React Native project

### Install Packages

```bash
# Using pnpm
pnpm add @rn-unified-ui/core @rn-unified-ui/tokens

# Using npm
npm install @rn-unified-ui/core @rn-unified-ui/tokens

# Using yarn
yarn add @rn-unified-ui/core @rn-unified-ui/tokens
```

## Basic Setup

### 1. Wrap Your App with ThemeProvider

```tsx
// App.tsx
import React from 'react';
import { ThemeProvider } from '@rn-unified-ui/tokens';
import { MainApp } from './MainApp';

export default function App() {
  return (
    <ThemeProvider theme="light">
      <MainApp />
    </ThemeProvider>
  );
}
```

### 2. Use Components

```tsx
// MainApp.tsx
import React from 'react';
import { View, Text, Pressable } from '@rn-unified-ui/core';
import { useTokens } from '@rn-unified-ui/tokens';

export function MainApp() {
  const tokens = useTokens();

  return (
    <View padding="lg">
      <Text variant="heading" weight="bold">
        Welcome to RN Unified UI
      </Text>

      <View
        elevation="md"
        radius="lg"
        padding="md"
        style={{
          backgroundColor: tokens.colors.surface,
          marginTop: tokens.spacing.md,
        }}
      >
        <Text variant="body">Build beautiful, consistent UIs across platforms.</Text>
      </View>

      <Pressable onPress={() => console.log('Pressed!')} feedback="scale">
        <View
          padding="md"
          radius="md"
          style={{
            backgroundColor: tokens.colors.primary,
            marginTop: tokens.spacing.md,
          }}
        >
          <Text style={{ color: tokens.colors.text.inverse }}>Get Started</Text>
        </View>
      </Pressable>
    </View>
  );
}
```

## Core Concepts

### Design Tokens

Design tokens are the foundation of the framework. They provide consistent values for:

- Colors
- Typography
- Spacing
- Shadows
- And more...

```tsx
import { useTokens } from '@rn-unified-ui/tokens';

function MyComponent() {
  const tokens = useTokens();

  return (
    <View
      style={{
        padding: tokens.spacing.md,
        backgroundColor: tokens.colors.surface,
        borderRadius: tokens.radius.lg,
      }}
    >
      <Text
        style={{
          fontSize: tokens.typography.body.fontSize,
          color: tokens.colors.text.primary,
        }}
      >
        Styled with tokens
      </Text>
    </View>
  );
}
```

### Component Variants

Components support semantic variants for common use cases:

```tsx
// Text variants
<Text variant="display">Display Text</Text>
<Text variant="heading">Heading Text</Text>
<Text variant="body">Body Text</Text>
<Text variant="caption">Caption Text</Text>

// Text weights
<Text weight="regular">Regular</Text>
<Text weight="medium">Medium</Text>
<Text weight="bold">Bold</Text>
```

### Elevation and Shadows

Unified shadow system that works consistently across platforms:

```tsx
<View elevation="none">No shadow</View>
<View elevation="sm">Small shadow</View>
<View elevation="md">Medium shadow</View>
<View elevation="lg">Large shadow</View>
<View elevation="xl">Extra large shadow</View>
```

### Layout Components

Use layout components for consistent spacing and structure:

```tsx
// Container with max width
<Container maxWidth="md" center padding="lg">
  <Text>Centered content</Text>
</Container>

// Stack for vertical/horizontal layouts
<Stack direction="column" spacing="md">
  <Text>Item 1</Text>
  <Text>Item 2</Text>
  <Text>Item 3</Text>
</Stack>

<Stack direction="row" spacing="sm" justify="between">
  <Text>Left</Text>
  <Text>Right</Text>
</Stack>
```

## Theming

### Light and Dark Themes

Toggle between light and dark themes:

```tsx
import { useTheme } from '@rn-unified-ui/tokens';

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Pressable onPress={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      <Text>Current: {theme}</Text>
    </Pressable>
  );
}
```

### Custom Themes

Create custom themes for your brand:

```tsx
import { createTheme, ThemeProvider } from '@rn-unified-ui/tokens';

const brandTheme = createTheme({
  colors: {
    primary: '#FF6B6B',
    secondary: '#4ECDC4',
    // ... other color overrides
  },
  spacing: {
    md: 20, // override default
  },
});

function App() {
  return (
    <ThemeProvider theme={brandTheme}>
      <MyApp />
    </ThemeProvider>
  );
}
```

## Next Steps

- 📚 [Explore Components](../api/components.md)
- 🎨 [Design Tokens Guide](./design-tokens.md)
- 🎭 [Theming Guide](./theming.md)
- 🔧 [Advanced Usage](./advanced-usage.md)

## Examples

Check out complete examples in the repository:

- [Basic Usage](../../apps/expo-example)
- [Custom Theming](../../apps/expo-example/src/screens/ThemingExample.tsx)
- [Component Showcase](../../apps/playground)

## Need Help?

- 📖 [API Documentation](../api/)
- 💬 [Discord Community](https://discord.gg/rn-unified-ui)
- 🐛 [GitHub Issues](https://github.com/your-org/rn-unified-ui/issues)
- 💡 [Discussions](https://github.com/your-org/rn-unified-ui/discussions)
