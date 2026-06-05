module.exports = {
  extends: ['./index.js', 'plugin:react-native/all'],
  plugins: ['react-native'],
  env: {
    'react-native/react-native': true,
  },
  rules: {
    // Disable overly strict rules that don't work with dynamic styles
    'react-native/no-unused-styles': 'off',
    'react-native/sort-styles': 'off',
    'react-native/no-inline-styles': 'warn',
    'react-native/no-color-literals': 'off', // Allow color literals in design system
    'react-native/no-raw-text': 'off',
  },
};
