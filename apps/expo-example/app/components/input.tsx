import { Card, Input, Stack, Text, View } from '@rn-unified-ui/core';
import { useTokens } from '@rn-unified-ui/tokens';
import { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default function InputScreen() {
  const tokens = useTokens();
  const [value, setValue] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (text: string) => {
    setEmail(text);
    if (text && !text.includes('@')) {
      setError('Please enter a valid email');
    } else {
      setError('');
    }
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: tokens.colors.background }]}>
      <View padding="lg">
        <Stack direction="column" spacing="xl">
          {/* Basic */}
          <View>
            <Text variant="title" weight="semibold" style={{ marginBottom: 16 }}>
              Basic Input
            </Text>
            <Input
              value={value}
              onChangeText={setValue}
              placeholder="Enter text..."
              label="Name"
              helperText="This is a helper text"
            />
          </View>

          {/* Sizes */}
          <View>
            <Text variant="title" weight="semibold" style={{ marginBottom: 16 }}>
              Sizes
            </Text>
            <Stack direction="column" spacing="md">
              <Input
                value={value}
                onChangeText={setValue}
                placeholder="Small input"
                size="sm"
              />
              <Input
                value={value}
                onChangeText={setValue}
                placeholder="Medium input"
                size="md"
              />
              <Input
                value={value}
                onChangeText={setValue}
                placeholder="Large input"
                size="lg"
              />
            </Stack>
          </View>

          {/* Email with Validation */}
          <View>
            <Text variant="title" weight="semibold" style={{ marginBottom: 16 }}>
              With Validation
            </Text>
            <Input
              value={email}
              onChangeText={validateEmail}
              placeholder="your@email.com"
              label="Email"
              keyboardType="email-address"
              autoCapitalize="none"
              error={!!error}
              errorMessage={error}
            />
          </View>

          {/* Password */}
          <View>
            <Text variant="title" weight="semibold" style={{ marginBottom: 16 }}>
              Password Input
            </Text>
            <Input
              value={password}
              onChangeText={setPassword}
              placeholder="Enter password"
              label="Password"
              secureTextEntry
              helperText="At least 8 characters"
            />
          </View>

          {/* Disabled */}
          <View>
            <Text variant="title" weight="semibold" style={{ marginBottom: 16 }}>
              Disabled State
            </Text>
            <Input
              value="Disabled input"
              onChangeText={() => { }}
              placeholder="Disabled"
              disabled
            />
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
              {'<Input\n  value={value}\n  onChangeText={setValue}\n  placeholder="Enter text..."\n  label="Name"\n/>'}
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
