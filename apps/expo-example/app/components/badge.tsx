import { Badge, Card, Stack, Text, View } from '@rn-unified-ui/core';
import { useTokens } from '@rn-unified-ui/tokens';
import { ScrollView, StyleSheet } from 'react-native';

export default function BadgeScreen() {
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
            <Stack direction="row" spacing="sm" wrap>
              <Badge variant="primary" label="Primary" />
              <Badge variant="secondary" label="Secondary" />
              <Badge variant="success" label="Success" />
              <Badge variant="warning" label="Warning" />
              <Badge variant="error" label="Error" />
              <Badge variant="neutral" label="Neutral" />
            </Stack>
          </View>

          {/* Sizes */}
          <View>
            <Text variant="title" weight="semibold" style={{ marginBottom: 16 }}>
              Sizes
            </Text>
            <Stack direction="row" spacing="sm" align="center">
              <Badge variant="primary" size="sm" label="Small" />
              <Badge variant="primary" size="md" label="Medium" />
              <Badge variant="primary" size="lg" label="Large" />
            </Stack>
          </View>

          {/* Dot Badges */}
          <View>
            <Text variant="title" weight="semibold" style={{ marginBottom: 16 }}>
              Dot Indicators
            </Text>
            <Stack direction="row" spacing="md" align="center">
              <Stack direction="row" spacing="xs" align="center">
                <Badge variant="primary" dot />
                <Text variant="caption">Online</Text>
              </Stack>
              <Stack direction="row" spacing="xs" align="center">
                <Badge variant="success" dot />
                <Text variant="caption">Available</Text>
              </Stack>
              <Stack direction="row" spacing="xs" align="center">
                <Badge variant="warning" dot />
                <Text variant="caption">Away</Text>
              </Stack>
              <Stack direction="row" spacing="xs" align="center">
                <Badge variant="error" dot />
                <Text variant="caption">Busy</Text>
              </Stack>
            </Stack>
          </View>

          {/* Use Cases */}
          <View>
            <Text variant="title" weight="semibold" style={{ marginBottom: 16 }}>
              Use Cases
            </Text>
            <Stack direction="column" spacing="md">
              <Card variant="outlined">
                <Stack direction="row" spacing="md" align="center" justify="between">
                  <Text variant="body">Task Status</Text>
                  <Badge variant="success" label="Completed" />
                </Stack>
              </Card>

              <Card variant="outlined">
                <Stack direction="row" spacing="md" align="center" justify="between">
                  <Text variant="body">Notification</Text>
                  <Badge variant="error" label="5" />
                </Stack>
              </Card>

              <Card variant="outlined">
                <Stack direction="row" spacing="md" align="center" justify="between">
                  <Text variant="body">Premium User</Text>
                  <Badge variant="secondary" label="PRO" />
                </Stack>
              </Card>

              <Card variant="outlined">
                <Stack direction="row" spacing="md" align="center" justify="between">
                  <Text variant="body">System Status</Text>
                  <Stack direction="row" spacing="xs" align="center">
                    <Badge variant="success" dot />
                    <Text variant="caption">Online</Text>
                  </Stack>
                </Stack>
              </Card>
            </Stack>
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
              {'<Badge variant="success" label="New" />\n<Badge variant="primary" dot />'}
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
