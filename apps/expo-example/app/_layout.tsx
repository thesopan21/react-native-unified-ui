import { ThemeProvider } from '@rn-unified-ui/tokens';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <ThemeProvider theme="light">
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#3B82F6',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: 'RN Unified UI',
          }}
        />
        <Stack.Screen
          name="components/button"
          options={{
            title: 'Button',
          }}
        />
        <Stack.Screen
          name="components/input"
          options={{
            title: 'Input',
          }}
        />
        <Stack.Screen
          name="components/card"
          options={{
            title: 'Card',
          }}
        />
        <Stack.Screen
          name="components/badge"
          options={{
            title: 'Badge',
          }}
        />
        <Stack.Screen
          name="components/avatar"
          options={{
            title: 'Avatar',
          }}
        />
        <Stack.Screen
          name="components/divider"
          options={{
            title: 'Divider',
          }}
        />
        <Stack.Screen
          name="components/layout"
          options={{
            title: 'Layout',
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
