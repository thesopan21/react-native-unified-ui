import { Card, Container, Stack, Text, View } from '@rn-unified-ui/core';
import { useTokens } from '@rn-unified-ui/tokens';
import { ScrollView, StyleSheet } from 'react-native';

export default function LayoutScreen() {
  const tokens = useTokens();

  return (
    <ScrollView style={[styles.container, { backgroundColor: tokens.colors.background }]}>
      <View padding="lg">
        <Stack direction="column" spacing="xl">
          {/* Container */}
          <View>
            <Text variant="title" weight="semibold" style={{ marginBottom: 16 }}>
              Container
            </Text>
            <Text variant="caption" style={{ color: tokens.colors.text.secondary, marginBottom: 16 }}>
              Responsive container with max width constraints
            </Text>
            <Card variant="outlined" padding="sm">
              <Container maxWidth="md" center>
                <Text variant="caption">Centered content with max width</Text>
              </Container>
            </Card>
          </View>

          {/* Stack - Column */}
          <View>
            <Text variant="title" weight="semibold" style={{ marginBottom: 16 }}>
              Stack - Vertical
            </Text>
            <Card variant="outlined" padding="md">
              <Stack direction="column" spacing="md">
                <View style={[styles.box, { backgroundColor: tokens.colors.primary }]}>
                  <Text style={{ color: '#fff' }}>Item 1</Text>
                </View>
                <View style={[styles.box, { backgroundColor: tokens.colors.secondary }]}>
                  <Text style={{ color: '#fff' }}>Item 2</Text>
                </View>
                <View style={[styles.box, { backgroundColor: tokens.colors.success }]}>
                  <Text style={{ color: '#fff' }}>Item 3</Text>
                </View>
              </Stack>
            </Card>
          </View>

          {/* Stack - Row */}
          <View>
            <Text variant="title" weight="semibold" style={{ marginBottom: 16 }}>
              Stack - Horizontal
            </Text>
            <Card variant="outlined" padding="md">
              <Stack direction="row" spacing="md">
                <View style={[styles.box, { backgroundColor: tokens.colors.primary, flex: 1 }]}>
                  <Text style={{ color: '#fff' }}>1</Text>
                </View>
                <View style={[styles.box, { backgroundColor: tokens.colors.secondary, flex: 1 }]}>
                  <Text style={{ color: '#fff' }}>2</Text>
                </View>
                <View style={[styles.box, { backgroundColor: tokens.colors.success, flex: 1 }]}>
                  <Text style={{ color: '#fff' }}>3</Text>
                </View>
              </Stack>
            </Card>
          </View>

          {/* Stack - Alignment */}
          <View>
            <Text variant="title" weight="semibold" style={{ marginBottom: 16 }}>
              Stack Alignment
            </Text>
            <Stack direction="column" spacing="md">
              <Card variant="outlined" padding="md">
                <Text variant="caption" style={{ marginBottom: 8 }}>
                  Justify: between
                </Text>
                <Stack direction="row" spacing="md" justify="between">
                  <View style={[styles.smallBox, { backgroundColor: tokens.colors.primary }]} />
                  <View style={[styles.smallBox, { backgroundColor: tokens.colors.secondary }]} />
                  <View style={[styles.smallBox, { backgroundColor: tokens.colors.success }]} />
                </Stack>
              </Card>

              <Card variant="outlined" padding="md">
                <Text variant="caption" style={{ marginBottom: 8 }}>
                  Justify: center
                </Text>
                <Stack direction="row" spacing="md" justify="center">
                  <View style={[styles.smallBox, { backgroundColor: tokens.colors.primary }]} />
                  <View style={[styles.smallBox, { backgroundColor: tokens.colors.secondary }]} />
                  <View style={[styles.smallBox, { backgroundColor: tokens.colors.success }]} />
                </Stack>
              </Card>

              <Card variant="outlined" padding="md">
                <Text variant="caption" style={{ marginBottom: 8 }}>
                  Align: center
                </Text>
                <Stack direction="row" spacing="md" align="center">
                  <View style={[styles.smallBox, { backgroundColor: tokens.colors.primary, height: 40 }]} />
                  <View style={[styles.smallBox, { backgroundColor: tokens.colors.secondary, height: 60 }]} />
                  <View style={[styles.smallBox, { backgroundColor: tokens.colors.success, height: 50 }]} />
                </Stack>
              </Card>
            </Stack>
          </View>

          {/* View Primitives */}
          <View>
            <Text variant="title" weight="semibold" style={{ marginBottom: 16 }}>
              View with Tokens
            </Text>
            <View elevation="md" radius="lg" padding="md" style={{ backgroundColor: '#fff' }}>
              <Text variant="body">View with elevation, radius, and padding</Text>
            </View>
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
              {'<Stack direction="row" spacing="md">\n  <View>Item 1</View>\n  <View>Item 2</View>\n</Stack>'}
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
  box: {
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallBox: {
    width: 40,
    height: 40,
    borderRadius: 8,
  },
});
