import { Card, Stack, Text, View } from '@rn-unified-ui/core';
import { useTokens } from '@rn-unified-ui/tokens';
import { Link } from 'expo-router';
import { ScrollView, StyleSheet } from 'react-native';

export default function HomeScreen() {
  const tokens = useTokens();

  return (
    <ScrollView style={[styles.container, { backgroundColor: tokens.colors.background }]}>
      <View padding="lg">
        <Text variant="display" weight="bold" style={{ marginBottom: 8 }}>
          RN Unified UI
        </Text>
        <Text variant="body" style={{ color: tokens.colors.text.secondary, marginBottom: 32 }}>
          A modern React Native UI framework for building consistent cross-platform applications
        </Text>

        <Text variant="title" weight="semibold" style={{ marginBottom: 16 }}>
          Components
        </Text>

        <Stack direction="column" spacing="md">
          <Link href="/components/button" asChild>
            <Card variant="elevated" onPress={() => { }}>
              <Text variant="body" weight="semibold">
                Button
              </Text>
              <Text variant="caption" style={{ color: tokens.colors.text.secondary }}>
                Interactive buttons with variants and loading states
              </Text>
            </Card>
          </Link>

          <Link href="/components/input" asChild>
            <Card variant="elevated" onPress={() => { }}>
              <Text variant="body" weight="semibold">
                Input
              </Text>
              <Text variant="caption" style={{ color: tokens.colors.text.secondary }}>
                Text inputs with validation and icons
              </Text>
            </Card>
          </Link>

          <Link href="/components/card" asChild>
            <Card variant="elevated" onPress={() => { }}>
              <Text variant="body" weight="semibold">
                Card
              </Text>
              <Text variant="caption" style={{ color: tokens.colors.text.secondary }}>
                Container cards with elevation variants
              </Text>
            </Card>
          </Link>

          <Link href="/components/badge" asChild>
            <Card variant="elevated" onPress={() => { }}>
              <Text variant="body" weight="semibold">
                Badge
              </Text>
              <Text variant="caption" style={{ color: tokens.colors.text.secondary }}>
                Status indicators and labels
              </Text>
            </Card>
          </Link>

          <Link href="/components/avatar" asChild>
            <Card variant="elevated" onPress={() => { }}>
              <Text variant="body" weight="semibold">
                Avatar
              </Text>
              <Text variant="caption" style={{ color: tokens.colors.text.secondary }}>
                User avatars with fallbacks
              </Text>
            </Card>
          </Link>

          <Link href="/components/divider" asChild>
            <Card variant="elevated" onPress={() => { }}>
              <Text variant="body" weight="semibold">
                Divider
              </Text>
              <Text variant="caption" style={{ color: tokens.colors.text.secondary }}>
                Content separators
              </Text>
            </Card>
          </Link>

          <Link href="/components/layout" asChild>
            <Card variant="elevated" onPress={() => { }}>
              <Text variant="body" weight="semibold">
                Layout Components
              </Text>
              <Text variant="caption" style={{ color: tokens.colors.text.secondary }}>
                Container, Stack, View primitives
              </Text>
            </Card>
          </Link>
        </Stack>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
