# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Initial project setup with Turborepo monorepo structure
- Core package (`@rn-unified-ui/core`) with base primitives
  - View component with elevation, radius, and padding props
  - Text component with variant and weight support
  - Pressable component with feedback animations
  - Container component for responsive layouts
  - Stack component for flexbox layouts
- Design tokens package (`@rn-unified-ui/tokens`)
  - JSON-based token system
  - ThemeProvider for theme context
  - useTokens hook for accessing design tokens
  - useTheme hook for theme management
  - createTheme utility for custom themes
  - Light and dark theme presets
- Shared configuration packages
  - TypeScript configurations (`@rn-unified-ui/tsconfig`)
  - ESLint configurations (`@rn-unified-ui/eslint-config`)
- CI/CD workflows
  - Continuous Integration (lint, type-check, test, build)
  - Release automation with Changesets
  - Documentation validation
- Documentation
  - Architecture overview
  - Getting started guide
  - Design tokens guide
  - API reference structure
- GitHub templates
  - Pull request template
  - Bug report template
  - Feature request template
- Development tooling
  - Prettier formatting
  - PNPM workspace
  - Git configuration

### Documentation

- Comprehensive README with project overview
- CONTRIBUTING guide for contributors
- ROADMAP outlining future development
- PROJECT_STATUS tracking current progress
- Architecture documentation
- Setup and usage guides

## [0.0.0] - 2026-06-05

### Added

- Initial project scaffolding
- Repository initialization
- License (MIT)
- Basic package structure

---

## Release Notes

### Versioning Strategy

- **Major**: Breaking changes
- **Minor**: New features (backward compatible)
- **Patch**: Bug fixes (backward compatible)

### Pre-release Tags

- **alpha**: Early development, unstable API
- **beta**: Feature complete, testing phase
- **rc**: Release candidate, production-ready

---

[Unreleased]: https://github.com/your-org/rn-unified-ui/compare/v0.0.0...HEAD
[0.0.0]: https://github.com/your-org/rn-unified-ui/releases/tag/v0.0.0
