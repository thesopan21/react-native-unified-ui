# @rn-unified-ui/core

Core UI primitives and components for React Native Unified UI Framework.

## Installation

```bash
npm install @rn-unified-ui/core
# or
yarn add @rn-unified-ui/core
# or
pnpm add @rn-unified-ui/core
```

## Features

- 🎯 **Cross-Platform Primitives** - Unified View, Text, and other base components
- 🎨 **Token Integration** - Seamless design token support
- 🚀 **Fabric Ready** - Built for React Native's modern architecture
- 📦 **Tree-Shakeable** - Import only what you need
- 🔒 **Type-Safe** - Full TypeScript support

## Usage

### Basic Components

```tsx
import { View, Text, Pressable } from '@rn-unified-ui/core';

function MyComponent() {
  return (
    <View>
      <Text variant="heading">Hello World</Text>
      <Pressable onPress={() => console.log('Pressed')}>
        <Text>Click me</Text>
      </Pressable>
    </View>
  );
}
```

### With Design Tokens

```tsx
import { View, Text } from '@rn-unified-ui/core';
import { useTokens } from '@rn-unified-ui/tokens';

function ThemedComponent() {
  const tokens = useTokens();
  
  return (
    <View style={{ padding: tokens.spacing.md }}>
      <Text style={{ color: tokens.colors.primary }}>
        Themed Text
      </Text>
    </View>
  );
}
```

## Components

### View
Enhanced View component with token support

### Text
Typography component with variant support

### Pressable
Touch-enabled component with consistent feedback

### Container
Layout container with responsive utilities

### Stack
Flexbox-based layout component

## API Reference

See [documentation](https://rn-unified-ui.dev/docs/core) for full API reference.

## License

MIT © RN Unified UI Contributors
