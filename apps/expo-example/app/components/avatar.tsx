import { Avatar, Card, Stack, Text, View } from '@rn-unified-ui/core';
import { useTokens } from '@rn-unified-ui/tokens';
import { ScrollView, StyleSheet } from 'react-native';

export default function AvatarScreen() {
  const tokens = useTokens();

  return (
    <ScrollView style={[styles.container, { backgroundColor: tokens.colors.background }]}>
      <View padding="lg">
        <Stack direction="column" spacing="xl">
          {/* Sizes */}
          <View>
            <Text variant="title" weight="semibold" style={{ marginBottom: 16 }}>
              Sizes
            </Text>
            <Stack direction="row" spacing="md" align="center">
              <Avatar size="sm" fallback="SM" />
              <Avatar size="md" fallback="MD" />
              <Avatar size="lg" fallback="LG" />
              <Avatar size="xl" fallback="XL" />
            </Stack>
          </View>

          {/* Shapes */}
          <View>
            <Text variant="title" weight="semibold" style={{ marginBottom: 16 }}>
              Shapes
            </Text>
            <Stack direction="row" spacing="md" align="center">
              <Avatar shape="circle" fallback="AB" />
              <Avatar shape="square" fallback="CD" />
            </Stack>
          </View>

          {/* With Initials */}
          <View>
            <Text variant="title" weight="semibold" style={{ marginBottom: 16 }}>
              User Initials
            </Text>
            <Stack direction="row" spacing="md" align="center">
              <Avatar fallback="JD" alt="John Doe" />
              <Avatar fallback="AS" alt="Alice Smith" />
              <Avatar fallback="BJ" alt="Bob Johnson" />
              <Avatar fallback="EW" alt="Emily Williams" />
            </Stack>
          </View>

          {/* With Images */}
          <View>
            <Text variant="title" weight="semibold" style={{ marginBottom: 16 }}>
              With Images
            </Text>
            <Stack direction="row" spacing="md" align="center">
              <Avatar
                source={{ uri: 'https://i.pravatar.cc/150?img=1' }}
                alt="User 1"
              />
              <Avatar
                source={{ uri: 'https://i.pravatar.cc/150?img=2' }}
                alt="User 2"
              />
              <Avatar
                source={{ uri: 'https://i.pravatar.cc/150?img=3' }}
                alt="User 3"
              />
            </Stack>
          </View>

          {/* Use Cases */}
          <View>
            <Text variant="title" weight="semibold" style={{ marginBottom: 16 }}>
              Use Cases
            </Text>
            <Stack direction="column" spacing="md">
              <Card variant="outlined">
                <Stack direction="row" spacing="md" align="center">
                  <Avatar fallback="JD" />
                  <View>
                    <Text variant="body" weight="semibold">
                      John Doe
                    </Text>
                    <Text variant="caption" style={{ color: tokens.colors.text.secondary }}>
                      john.doe@example.com
                    </Text>
                  </View>
                </Stack>
              </Card>

              <Card variant="outlined">
                <Stack direction="row" spacing="md" align="center">
                  <Avatar
                    source={{ uri: 'https://i.pravatar.cc/150?img=4' }}
                    shape="square"
                  />
                  <View>
                    <Text variant="body" weight="semibold">
                      Alice Smith
                    </Text>
                    <Text variant="caption" style={{ color: tokens.colors.text.secondary }}>
                      Product Designer
                    </Text>
                  </View>
                </Stack>
              </Card>

              <Card variant="outlined">
                <Stack direction="row" spacing="sm" align="center">
                  <Avatar size="sm" fallback="You" />
                  <Avatar size="sm" fallback="+" />
                  <Avatar size="sm" fallback="AB" />
                  <Avatar size="sm" fallback="CD" />
                  <Text variant="caption" style={{ color: tokens.colors.text.secondary }}>
                    +5 more
                  </Text>
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
              {'<Avatar\n  source={{ uri: "..." }}\n  fallback="JD"\n  alt="John Doe"\n/>'}
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
