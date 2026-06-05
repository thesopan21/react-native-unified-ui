# Contributing to RN Unified UI

Thank you for your interest in contributing to the React Native Unified UI Framework! We welcome contributions from developers of all experience levels.

## 🎯 Ways to Contribute

### 💻 Engineering
- React Native components
- Native modules (Kotlin/Swift)
- Fabric integration
- Performance optimization
- Testing

### 🎨 Design Systems
- Token architecture
- Accessibility improvements
- Theme support
- Component API design

### 📚 Documentation
- Tutorials and guides
- API references
- Code examples
- Migration guides

### 🛠️ Tooling
- CLI development
- Code generators
- CI/CD improvements
- Build scripts

## 🚀 Getting Started

### Prerequisites
- Node.js >= 18.0.0
- pnpm >= 8.0.0
- Git

### Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/rn-unified-ui.git
   cd rn-unified-ui
   ```

3. Install dependencies:
   ```bash
   pnpm install
   ```

4. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 📝 Development Workflow

### Building
```bash
pnpm build
```

### Development Mode
```bash
pnpm dev
```

### Running Tests
```bash
pnpm test
```

### Linting
```bash
pnpm lint
```

### Type Checking
```bash
pnpm type-check
```

### Formatting
```bash
pnpm format
```

## 📦 Package Structure

When creating or modifying packages:

1. Follow the existing structure in `packages/`
2. Include a README.md with usage examples
3. Add appropriate tests
4. Update relevant documentation

## ✍️ Commit Convention

We use [Conventional Commits](https://www.conventionalcommits.org/):

```
type(scope): subject

body

footer
```

### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks
- `ci`: CI/CD changes

### Examples
```
feat(core): add unified shadow component

fix(tokens): correct color token transformation

docs(readme): update installation instructions
```

## 🔄 Pull Request Process

1. **Update Documentation**: Include relevant documentation updates
2. **Add Tests**: Ensure new features have test coverage
3. **Pass CI**: All checks must pass
4. **Describe Changes**: Provide a clear description of what and why
5. **Link Issues**: Reference related issues

### PR Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
How has this been tested?

## Checklist
- [ ] Code follows project style
- [ ] Tests added/updated
- [ ] Documentation updated
- [ ] Commits follow convention
```

## 🧪 Testing Guidelines

- Write tests for all new features
- Maintain or improve code coverage
- Test on both iOS and Android when applicable
- Include edge cases

## 📖 Documentation Guidelines

- Use clear, concise language
- Include code examples
- Add screenshots/GIFs for visual features
- Keep API references up to date

## 🎨 Code Style

- Follow TypeScript best practices
- Use meaningful variable/function names
- Add comments for complex logic
- Keep functions small and focused
- Follow existing patterns in the codebase

## 🐛 Reporting Bugs

When reporting bugs, include:

1. **Description**: Clear description of the bug
2. **Steps to Reproduce**: Detailed steps
3. **Expected Behavior**: What should happen
4. **Actual Behavior**: What actually happens
5. **Environment**: OS, React Native version, etc.
6. **Screenshots**: If applicable

## 💡 Suggesting Features

When suggesting features:

1. **Use Case**: Describe the problem you're solving
2. **Proposed Solution**: Your suggested approach
3. **Alternatives**: Other solutions considered
4. **Examples**: Similar implementations elsewhere

## ❓ Questions?

- Open a [Discussion](https://github.com/your-org/rn-unified-ui/discussions)
- Join our community chat
- Check existing documentation

## 📜 Code of Conduct

- Be respectful and inclusive
- Welcome newcomers
- Assume good intentions
- Give constructive feedback
- Focus on the issue, not the person

## 🙏 Recognition

Contributors will be:
- Listed in CONTRIBUTORS.md
- Mentioned in release notes
- Acknowledged in documentation

Thank you for contributing to RN Unified UI! 🎉
