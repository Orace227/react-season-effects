# Development Workflow Guide

This project uses automated quality checks to ensure code quality and consistency.

## 🛠 Development Tools

### Installed Tools

- ✅ **Husky** - Git hooks automation
- ✅ **Commitlint** - Commit message linting
- ✅ **ESLint** - Code linting
- ✅ **Prettier** - Code formatting
- ✅ **TypeScript** - Type checking
- ✅ **npm audit** - Vulnerability scanning
- ✅ **Lint-staged** - Run linters on staged files

---

## 📝 Commit Message Format

We follow [Conventional Commits](https://www.conventionalcommits.org/) specification.

### Format

```
<type>: <subject>

[optional body]

[optional footer]
```

### Types

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `perf:` - Performance improvements
- `test:` - Adding or updating tests
- `build:` - Build system changes
- `ci:` - CI/CD changes
- `chore:` - Other changes (dependencies, etc.)
- `revert:` - Revert a previous commit

### Examples

```bash
feat: add spring cherry blossom effect
fix: resolve snowflake reset issue
docs: update README with new examples
style: format code with prettier
refactor: extract animation logic to hook
perf: optimize canvas rendering
chore: update dependencies
```

### Rules

- ✅ Use lowercase for type
- ✅ Keep subject line under 72 characters
- ✅ Don't end subject with a period
- ✅ Use imperative mood ("add" not "added")

---

## 🔄 Git Workflow

### When You Commit

**Automatic checks run on `git commit`:**

1. **Lint-staged** - Runs on staged files only
   - ESLint fixes and checks TypeScript/React code
   - Prettier formats all files
2. **Type checking** - Validates TypeScript types across all packages

3. **Commit message validation** - Ensures conventional commit format

**Example:**

```bash
git add .
git commit -m "feat: add new effect parameter"
# ✅ Formatting...
# ✅ Type checking...
# ✅ Validating commit message...
```

### When You Push

**Automatic checks run on `git push`:**

1. **Type checking** - Full TypeScript validation
2. **Build** - Ensures project builds successfully
3. **Security audit** - Scans for vulnerabilities (moderate level)

**Example:**

```bash
git push origin main
# ✅ Type checking...
# ✅ Building project...
# ✅ Running security audit...
```

---

## 🎯 Available Scripts

### Code Quality

```bash
# Lint code
npm run lint

# Lint and auto-fix
npm run lint:fix

# Format code
npm run format

# Check formatting
npm run format:check

# Type check
npm run type-check

# Security audit
npm run audit
```

### Development

```bash
# Start dev server
npm run dev

# Build all packages
npm run build

# Clean build outputs
npm run clean
```

---

## 🚫 What Gets Blocked

### Commits are blocked if:

- ❌ Code has ESLint errors
- ❌ TypeScript type errors exist
- ❌ Commit message doesn't follow format

### Pushes are blocked if:

- ❌ TypeScript errors exist
- ❌ Build fails
- ❌ Moderate or higher security vulnerabilities found

---

## 💡 Quick Tips

### Format All Files

```bash
npm run format
```

### Fix Linting Issues

```bash
npm run lint:fix
```

### Check Before Committing

```bash
npm run lint && npm run type-check
```

### Bypass Hooks (Not Recommended)

```bash
git commit --no-verify -m "message"
git push --no-verify
```

### Fix Commit Message

If your commit fails due to message format:

```bash
# Use conventional format
git commit -m "feat: your feature description"

# Or edit the last commit message
git commit --amend
```

---

## 🎨 Code Style

### Prettier Config

- Semi-colons: Yes
- Single quotes: Yes
- Print width: 80 characters
- Tab width: 2 spaces
- Trailing commas: ES5

### ESLint Rules

- TypeScript strict mode
- React hooks rules enforced
- Unused variables warned
- Console statements allowed in development

---

## 🔧 Troubleshooting

### "Husky hooks not running"

```bash
npm run prepare
```

### "ESLint errors blocking commit"

```bash
npm run lint:fix
git add .
git commit -m "fix: resolve linting issues"
```

### "Type errors blocking push"

```bash
npm run type-check
# Fix the errors shown
```

### "Build failing"

```bash
npm run clean
npm install
npm run build
```

### "Security vulnerabilities"

```bash
npm audit
npm audit fix
# Or for major updates:
npm audit fix --force
```

---

## 📋 Pre-Commit Checklist

Before committing, ensure:

- [ ] Code is formatted (`npm run format`)
- [ ] No ESLint errors (`npm run lint`)
- [ ] No TypeScript errors (`npm run type-check`)
- [ ] Commit message follows conventional format
- [ ] Changes are tested

---

## 📋 Pre-Push Checklist

Before pushing, ensure:

- [ ] All tests pass (when implemented)
- [ ] Project builds successfully (`npm run build`)
- [ ] No security vulnerabilities (`npm run audit`)
- [ ] All commits follow conventional format

---

## 🎓 Learning Resources

- [Conventional Commits](https://www.conventionalcommits.org/)
- [Husky Documentation](https://typicode.github.io/husky/)
- [ESLint Rules](https://eslint.org/docs/rules/)
- [Prettier Options](https://prettier.io/docs/en/options.html)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

## 🤝 Team Guidelines

### For New Contributors

1. Install dependencies: `npm install`
2. Husky hooks are automatically set up
3. Read this guide
4. Start coding with `npm run dev`

### For Reviewers

Check that:

- Commits follow conventional format
- Code is properly formatted
- No type errors
- Build succeeds
- No new vulnerabilities

---

**Remember:** These checks are here to help maintain code quality and catch issues early. Don't bypass them unless absolutely necessary!
