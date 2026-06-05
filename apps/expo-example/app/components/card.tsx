import { Card, Stack, Text, View } from '@rn-unified-ui/core';
import { useTokens } from '@rn-unified-ui/tokens';
import { Alert, ScrollView, StyleSheet } from 'react-native';

export default function CardScreen() {
  const tokens = useTokens();

  return (
    <ScrollView style={[styles.container, { backgroundColor: tokens.colors.background }]}>
      <View padding="lg">
        <Stack direction="column" spacing="xl">
          {/* Variants */}
          <View>
            <Text variant="title" weight="semibold" style={{ marginBottom: 16 }}>
              Variants
            </Text>
            <Stack direction="column" spacing="md">
              <Card variant="elevated">
                <Text variant="body" weight="semibold">
                  Elevated Card
                </Text>
                <Text variant="caption" style={{ color: tokens.colors.text.secondary }}>
                  This card has elevation shadow
                </Text>
              </Card>

              <Card variant="outlined">
                <Text variant="body" weight="semibold">
                  Outlined Card
                </Text>
                <Text variant="caption" style={{ color: tokens.colors.text.secondary }}>
                  This card has a border
                </Text>
              </Card>

              <Card variant="filled">
                <Text variant="body" weight="semibold">
                  Filled Card
                </Text>
                <Text variant="caption" style={{ color: tokens.colors.text.secondary }}>
                  This card has a filled background
                </Text>
              </Card>
            </Stack>
          </View>

          {/* Padding Options */}
          <View>
            <Text variant="title" weight="semibold" style={{ marginBottom: 16 }}>
              Padding
            </Text>
            <Stack direction="column" spacing="md">
              <Card variant="elevated" padding="sm">
                <Text variant="caption">Small Padding</Text>
              </Card>

              <Card variant="elevated" padding="md">
                <Text variant="caption">Medium Padding (Default)</Text>
              </Card>

              <Card variant="elevated" padding="lg">
                <Text variant="caption">Large Padding</Text>
              </Card>
            </Stack>
          </View>

          {/* Pressable Card */}
          <View>
            <Text variant="title" weight="semibold" style={{ marginBottom: 16 }}>
              Interactive Card
            </Text>
            <Card
              variant="elevated"
              onPress={() => Alert.alert('Card Pressed', 'This card is interactive')}
            >
              <Text variant="body" weight="semibold">
                Tap Me
              </Text>
              <Text variant="caption" style={{ color: tokens.colors.text.secondary }}>
                This card has an onPress handler
              </Text>
            </Card>
          </View>

          {/* Complex Content */}
          <View>
            <Text variant="title" weight="semibold" style={{ marginBottom: 16 }}>
              Complex Content
            </Text>
            <Card variant="elevated">
              <Stack direction="column" spacing="sm">
                <Text variant="body" weight="bold">
                  Card Title
                </Text>
                <Text variant="caption" style={{ color: tokens.colors.text.secondary }}>
                  This is a more complex card with multiple elements and proper spacing using
                  Stack component.
                </Text>
                <View style={{ height: 1, backgroundColor: tokens.colors.border, marginVertical: 8 }} />
                <Stack direction="row" spacing="sm" justify="end">
                  <Text variant="caption" weight="medium" style={{ color: tokens.colors.primary }}>
                    Action
                  </Text>
                  <Text variant="caption" weight="medium" style={{ color: tokens.colors.primary }}>
                    Learn More
                  </Text>
                </Stack>
              </Stack>
            </Card>
          </View>

          {/* Code Example */}
          <Card variant="outlined" padding="md">
            <Text variant="caption" weight="medium" style={{ marginBottom: 8 }}>
              Example Usage
            </Text>
            <Text
              variant="caption"
              style={{
                fontFamily: 'monospace',
                color: tokens.colors.text.secondary,
              }}
            >
              {'<Card variant="elevated" onPress={handlePress}>\n  <Text>Content</Text>\n</Card>'}
            </Text>
          </Card>
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
