# Quick Reference Guide

Fast reference for common tasks and patterns in RN Unified UI.

## 📦 Installation

```bash
pnpm add @rn-unified-ui/core @rn-unified-ui/tokens
```

## 🚀 Basic Setup

```tsx
import { ThemeProvider } from '@rn-unified-ui/tokens';

function App() {
  return (
    <ThemeProvider theme="light">
      <YourApp />
    </ThemeProvider>
  );
}
```

## 🎨 Common Patterns

### Using Tokens

```tsx
import { useTokens } from '@rn-unified-ui/tokens';

const tokens = useTokens();
// Access: tokens.colors.primary, tokens.spacing.md, etc.
```

### Basic Components

```tsx
import { View, Text, Pressable } from '@rn-unified-ui/core';

// View with elevation and radius
<View elevation="md" radius="lg" padding="md">
  <Text variant="heading">Title</Text>
</View>

// Pressable with feedback
<Pressable onPress={handlePress} feedback="scale">
  <Text>Click me</Text>
</Pressable>
```

### Layout

```tsx
import { Container, Stack } from '@rn-unified-ui/core';

// Centered container
<Container maxWidth="md" center padding="lg">
  <Text>Content</Text>
</Container>

// Vertical stack
<Stack direction="column" spacing="md">
  <Text>Item 1</Text>
  <Text>Item 2</Text>
</Stack>

// Horizontal stack
<Stack direction="row" spacing="sm" justify="between">
  <Text>Left</Text>
  <Text>Right</Text>
</Stack>
```

### Theming

```tsx
import { useTheme } from '@rn-unified-ui/tokens';

const { theme, setTheme, tokens } = useTheme();

// Toggle theme
setTheme(theme === 'light' ? 'dark' : 'light');

// Custom theme
import { createTheme } from '@rn-unified-ui/tokens';

const customTheme = createTheme({
  colors: { primary: '#FF6B6B' }
});
```

## 📐 Token Reference

### Colors
```tsx
tokens.colors.primary
tokens.colors.secondary
tokens.colors.success
tokens.colors.warning
tokens.colors.error
tokens.colors.background
tokens.colors.surface
tokens.colors.border
tokens.colors.text.primary
tokens.colors.text.secondary
```

### Spacing
```tsx
tokens.spacing.xs    // 4
tokens.spacing.sm    // 8
tokens.spacing.md    // 16
tokens.spacing.lg    // 24
tokens.spacing.xl    // 32
tokens.spacing['2xl'] // 40
```

### Typography
```tsx
tokens.typography.display
tokens.typography.heading
tokens.typography.title
tokens.typography.body
tokens.typography.caption
tokens.typography.label
```

### Radius
```tsx
tokens.radius.none  // 0
tokens.radius.sm    // 4
tokens.radius.md    // 8
tokens.radius.lg    // 16
tokens.radius.full  // 9999
```

### Shadows
```tsx
tokens.shadows.none
tokens.shadows.sm
tokens.shadows.md
tokens.shadows.lg
tokens.shadows.xl
```

## 🎯 Component Props Quick Reference

### View
```tsx
<View
  elevation="none" | "sm" | "md" | "lg" | "xl"
  radius="none" | "sm" | "md" | "lg" | "full"
  padding="none" | "xs" | "sm" | "md" | "lg" | "xl"
  style={...}
/>
```

### Text
```tsx
<Text
  variant="display" | "heading" | "title" | "body" | "caption" | "label"
  weight="regular" | "medium" | "semibold" | "bold"
  align="left" | "center" | "right" | "justify"
  color={string}
/>
```

### Pressable
```tsx
<Pressable
  onPress={() => {}}
  disabled={boolean}
  feedback="opacity" | "highlight" | "scale"
/>
```

### Container
```tsx
<Container
  maxWidth="sm" | "md" | "lg" | "xl" | "full"
  center={boolean}
  padding="none" | "xs" | "sm" | "md" | "lg" | "xl"
/>
```

### Stack
```tsx
<Stack
  direction="row" | "column"
  spacing="none" | "xs" | "sm" | "md" | "lg" | "xl"
  align="start" | "center" | "end" | "stretch"
  justify="start" | "center" | "end" | "between" | "around" | "evenly"
  wrap={boolean}
/>
```

## 💡 Common Use Cases

### Card
```tsx
<View elevation="md" radius="lg" padding="md">
  <Text variant="title" weight="semibold">Card Title</Text>
  <Text variant="body">Card content goes here</Text>
</View>
```

### Button
```tsx
<Pressable onPress={handlePress} feedback="scale">
  <View 
    padding="md" 
    radius="md"
    style={{ backgroundColor: tokens.colors.primary }}
  >
    <Text style={{ color: tokens.colors.text.inverse }}>
      Button Text
    </Text>
  </View>
</Pressable>
```

### Form Field
```tsx
<Stack direction="column" spacing="sm">
  <Text variant="label" weight="medium">Label</Text>
  <View 
    padding="sm" 
    radius="md"
    style={{ 
      borderWidth: 1,
      borderColor: tokens.colors.border 
    }}
  >
    <TextInput placeholder="Enter value..." />
  </View>
</Stack>
```

### List Item
```tsx
<Pressable onPress={handlePress} feedback="opacity">
  <Stack direction="row" spacing="md" align="center">
    <View /* icon */ />
    <Stack direction="column" spacing="xs">
      <Text variant="body" weight="medium">Title</Text>
      <Text variant="caption" color={tokens.colors.text.secondary}>
        Subtitle
      </Text>
    </Stack>
  </Stack>
</Pressable>
```

## 🔧 Development Commands

```bash
# Install dependencies
pnpm install

# Development mode
pnpm dev

# Build all packages
pnpm build

# Run tests
pnpm test

# Lint code
pnpm lint

# Format code
pnpm format

# Type check
pnpm type-check

# Clean build artifacts
pnpm clean
```

## 📚 Resources

- [Full Documentation](./docs/README.md)
- [API Reference](./docs/api/)
- [Examples](./apps/)
- [Contributing](./CONTRIBUTING.md)

## 🐛 Troubleshooting

### Theme not applying
```tsx
// ❌ Wrong - missing ThemeProvider
<App />

// ✅ Correct - wrapped in ThemeProvider
<ThemeProvider theme="light">
  <App />
</ThemeProvider>
```

### Tokens undefined
```tsx
// ❌ Wrong - useTokens outside provider
const tokens = useTokens(); // Error!

// ✅ Correct - useTokens inside provider
<ThemeProvider>
  <MyComponent /> {/* useTokens works here */}
</ThemeProvider>
```

### TypeScript errors
```bash
# Rebuild packages
pnpm build

# Check types
pnpm type-check
```

---

For detailed documentation, see [Getting Started Guide](./docs/guides/getting-started.md)
