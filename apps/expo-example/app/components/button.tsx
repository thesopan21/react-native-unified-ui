import { Button, Card, Stack, Text, View } from '@rn-unified-ui/core';
import { useTokens } from '@rn-unified-ui/tokens';
import { useState } from 'react';
import { Alert, ScrollView, StyleSheet } from 'react-native';

export default function ButtonScreen() {
  const tokens = useTokens();
  const [loading, setLoading] = useState(false);

  const handlePress = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

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
              <Button variant="primary" onPress={() => Alert.alert('Primary', 'Primary pressed')}>
                Primary Button
              </Button>
              <Button variant="secondary" onPress={() => Alert.alert('Secondary', 'Secondary pressed')}>
                Secondary Button
              </Button>
              <Button variant="outline" onPress={() => Alert.alert('Outline', 'Outline pressed')}>
                Outline Button
              </Button>
              <Button variant="ghost" onPress={() => Alert.alert('Ghost', 'Ghost pressed')}>
                Ghost Button
              </Button>
              <Button variant="danger" onPress={() => Alert.alert('Danger', 'Danger pressed')}>
                Danger Button
              </Button>
            </Stack>
          </View>

          {/* Sizes */}
          <View>
            <Text variant="title" weight="semibold" style={{ marginBottom: 16 }}>
              Sizes
            </Text>
            <Stack direction="column" spacing="md">
              <Button size="sm" onPress={() => Alert.alert('Small', 'Small pressed')}>
                Small Button
              </Button>
              <Button size="md" onPress={() => Alert.alert('Medium', 'Medium pressed')}>
                Medium Button
              </Button>
              <Button size="lg" onPress={() => Alert.alert('Large', 'Large pressed')}>
                Large Button
              </Button>
            </Stack>
          </View>

          {/* States */}
          <View>
            <Text variant="title" weight="semibold" style={{ marginBottom: 16 }}>
              States
            </Text>
            <Stack direction="column" spacing="md">
              <Button loading={loading} onPress={handlePress}>
                {loading ? 'Loading...' : 'Click to Load'}
              </Button>
              <Button disabled onPress={() => { }}>
                Disabled Button
              </Button>
            </Stack>
          </View>

          {/* Full Width */}
          <View>
            <Text variant="title" weight="semibold" style={{ marginBottom: 16 }}>
              Full Width
            </Text>
            <Button fullWidth onPress={() => Alert.alert('Full Width', 'Full width pressed')}>
              Full Width Button
            </Button>
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
              {'<Button variant="primary" onPress={handlePress}>\n  Click Me\n</Button>'}
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
