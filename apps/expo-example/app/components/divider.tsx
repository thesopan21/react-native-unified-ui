import { Card, Divider, Stack, Text, View } from '@rn-unified-ui/core';
import { useTokens } from '@rn-unified-ui/tokens';
import { ScrollView, StyleSheet } from 'react-native';

export default function DividerScreen() {
  const tokens = useTokens();

  return (
    <ScrollView style={[styles.container, { backgroundColor: tokens.colors.background }]}>
      <View padding="lg">
        <Stack direction="column" spacing="xl">
          {/* Horizontal Divider */}
          <View>
            <Text variant="title" weight="semibold" style={{ marginBottom: 16 }}>
              Horizontal Divider
            </Text>
            <Card variant="outlined">
              <Text variant="body">Section 1</Text>
              <Divider spacing="md" />
              <Text variant="body">Section 2</Text>
              <Divider spacing="md" />
              <Text variant="body">Section 3</Text>
            </Card>
          </View>

          {/* Vertical Divider */}
          <View>
            <Text variant="title" weight="semibold" style={{ marginBottom: 16 }}>
              Vertical Divider
            </Text>
            <Card variant="outlined">
              <Stack direction="row" spacing="none" align="stretch">
                <View style={{ flex: 1, padding: 16 }}>
                  <Text variant="body">Left</Text>
                </View>
                <Divider orientation="vertical" />
                <View style={{ flex: 1, padding: 16 }}>
                  <Text variant="body">Center</Text>
                </View>
                <Divider orientation="vertical" />
                <View style={{ flex: 1, padding: 16 }}>
                  <Text variant="body">Right</Text>
                </View>
              </Stack>
            </Card>
          </View>

          {/* Spacing Options */}
          <View>
            <Text variant="title" weight="semibold" style={{ marginBottom: 16 }}>
              Spacing
            </Text>
            <Card variant="outlined">
              <Text variant="body">No spacing</Text>
              <Divider spacing="none" />
              <Text variant="body">Small spacing</Text>
              <Divider spacing="sm" />
              <Text variant="body">Medium spacing</Text>
              <Divider spacing="md" />
              <Text variant="body">Large spacing</Text>
              <Divider spacing="lg" />
              <Text variant="body">Extra large spacing</Text>
            </Card>
          </View>

          {/* Thickness */}
          <View>
            <Text variant="title" weight="semibold" style={{ marginBottom: 16 }}>
              Thickness
            </Text>
            <Card variant="outlined">
              <Text variant="caption">1px (default)</Text>
              <Divider spacing="md" thickness={1} />
              <Text variant="caption">2px</Text>
              <Divider spacing="md" thickness={2} />
              <Text variant="caption">4px</Text>
              <Divider spacing="md" thickness={4} />
            </Card>
          </View>

          {/* Custom Color */}
          <View>
            <Text variant="title" weight="semibold" style={{ marginBottom: 16 }}>
              Custom Color
            </Text>
            <Card variant="outlined">
              <Text variant="caption">Default</Text>
              <Divider spacing="md" />
              <Text variant="caption">Primary</Text>
              <Divider spacing="md" color={tokens.colors.primary} />
              <Text variant="caption">Success</Text>
              <Divider spacing="md" color={tokens.colors.success} />
              <Text variant="caption">Error</Text>
              <Divider spacing="md" color={tokens.colors.error} />
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
              {'<Divider spacing="md" />\n<Divider orientation="vertical" />'}
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
