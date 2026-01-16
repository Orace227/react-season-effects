# Git Branching Strategy - React Season Effects

## Overview

This project uses a **modified GitHub Flow** optimized for npm library development.

## Branch Structure

```
main (protected)
├── develop (integration)
│   ├── feature/spring-cherry-blossoms
│   ├── feature/monsoon-rain
│   ├── feature/summer-fireflies
│   ├── fix/memory-leak-canvas
│   ├── chore/update-typescript
│   └── docs/api-improvements
└── hotfix/critical-ssr-bug (emergency fixes)
```

## Core Branches

### 1. `main` (Default & Protected)

- **Purpose**: Production-ready code
- **Synced with**: npm published versions
- **Protected**: Yes (require PR reviews)
- **Deploy**: Published to npm
- **Version**: Matches package.json version

**Rules:**

- ✅ Only merge from `develop` or `hotfix/*`
- ✅ Every merge = new release
- ✅ Must pass all CI checks
- ✅ Require 1+ code review
- ❌ No direct commits

### 2. `develop` (Integration Branch)

- **Purpose**: Next release development
- **Base for**: All feature branches
- **Merge to**: `main` for releases
- **Version**: Pre-release (e.g., 1.1.0-beta.1)

**Rules:**

- ✅ Merge feature branches here first
- ✅ Must be stable and tested
- ✅ Can have multiple features
- ❌ Don't merge broken code

## Working Branches

### Feature Branches

**Naming**: `feature/<description>`

**Examples:**

```bash
feature/spring-cherry-blossoms
feature/add-intensity-prop
feature/performance-monitoring
```

**Workflow:**

```bash
# Create from develop
git checkout develop
git pull origin develop
git checkout -b feature/spring-cherry-blossoms

# Work on feature
git add .
git commit -m "feat: add spring cherry blossom effect"

# Push and create PR to develop
git push origin feature/spring-cherry-blossoms
```

### Bug Fix Branches

**Naming**: `fix/<description>`

**Examples:**

```bash
fix/snow-memory-leak
fix/autumn-rotation-bug
fix/ssr-window-undefined
```

**Workflow:**

```bash
# Create from develop
git checkout develop
git checkout -b fix/snow-memory-leak

# Fix the bug
git add .
git commit -m "fix: resolve memory leak in snow effect"

# Create PR to develop
git push origin fix/snow-memory-leak
```

### Hotfix Branches (Critical Bugs in Production)

**Naming**: `hotfix/<version>`

**Examples:**

```bash
hotfix/1.0.1
hotfix/critical-ssr-fix
```

**Workflow:**

```bash
# Create from main (urgent fix for production)
git checkout main
git checkout -b hotfix/1.0.1

# Fix critical bug
git add .
git commit -m "fix: critical SSR bug causing crashes"

# Merge to BOTH main and develop
git checkout main
git merge hotfix/1.0.1
git tag v1.0.1
git push origin main --tags

git checkout develop
git merge hotfix/1.0.1
git push origin develop

# Delete hotfix branch
git branch -d hotfix/1.0.1
```

### Chore Branches

**Naming**: `chore/<description>`

**Examples:**

```bash
chore/update-dependencies
chore/setup-prettier
chore/improve-ci
```

### Documentation Branches

**Naming**: `docs/<description>`

**Examples:**

```bash
docs/api-reference
docs/contributing-guide
docs/usage-examples
```

## Release Process

### Regular Release (from develop to main)

```bash
# 1. Ensure develop is ready
git checkout develop
git pull origin develop
npm run build
npm run test
npm run lint

# 2. Update version in package.json
cd packages/react-season-effects
npm version minor  # or major/patch

# 3. Update CHANGELOG.md
# Add release notes

# 4. Commit version bump
git add .
git commit -m "chore: bump version to 1.1.0"
git push origin develop

# 5. Merge develop → main
git checkout main
git merge develop
git push origin main

# 6. Create release tag
git tag -a v1.1.0 -m "Release v1.1.0: Spring effects"
git push origin v1.1.0

# 7. Publish to npm
npm publish

# 8. Create GitHub Release
# Go to GitHub → Releases → Create new release
```

### Hotfix Release (urgent fix)

```bash
# 1. Create hotfix from main
git checkout main
git checkout -b hotfix/1.0.1

# 2. Fix bug and test
git add .
git commit -m "fix: critical memory leak"

# 3. Update version
npm version patch

# 4. Merge to main
git checkout main
git merge hotfix/1.0.1
git tag v1.0.1
git push origin main --tags

# 5. Merge back to develop
git checkout develop
git merge hotfix/1.0.1
git push origin develop

# 6. Publish
npm publish
```

## Commit Message Convention

We use **Conventional Commits** (enforced by commitlint):

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types:

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding/updating tests
- `chore`: Maintenance tasks
- `ci`: CI/CD changes

### Examples:

```bash
feat(snow): add customizable particle size
fix(autumn): resolve leaf rotation issue
docs(readme): update installation instructions
chore(deps): upgrade typescript to 5.3
perf(canvas): optimize rendering loop
```

## PR (Pull Request) Guidelines

### Before Creating PR:

```bash
# 1. Update from base branch
git checkout develop
git pull origin develop
git checkout your-branch
git rebase develop

# 2. Run all checks
npm run lint
npm run type-check
npm run build
npm run format:check

# 3. Test thoroughly
npm run dev  # Test in demo app
```

### PR Template:

```markdown
## Description

Brief description of changes

## Type of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing

- [ ] Tested in demo app
- [ ] Tested in Next.js app
- [ ] All lint checks pass
- [ ] Build succeeds

## Screenshots (if applicable)
```

### PR Merge Strategy:

- **Squash and Merge** for feature branches
- **Merge Commit** for develop → main
- Delete branch after merge

## Branch Protection Rules

### For `main` branch:

- ✅ Require pull request reviews (1+)
- ✅ Require status checks to pass
  - Lint
  - Type check
  - Build
  - Audit
- ✅ Require branches to be up to date
- ✅ No force push
- ✅ No deletions

### For `develop` branch:

- ✅ Require pull request reviews (1+)
- ✅ Require status checks to pass
- ✅ No force push

## Version Numbering (Semantic Versioning)

```
MAJOR.MINOR.PATCH

1.0.0 → 1.0.1 → 1.1.0 → 2.0.0
```

### When to bump:

- **MAJOR** (2.0.0): Breaking API changes
- **MINOR** (1.1.0): New features (backward compatible)
- **PATCH** (1.0.1): Bug fixes

### Pre-release versions:

```
1.1.0-beta.1
1.1.0-rc.1
2.0.0-alpha.1
```

## Daily Development Workflow

### Starting a new feature:

```bash
# 1. Update develop
git checkout develop
git pull origin develop

# 2. Create feature branch
git checkout -b feature/my-new-feature

# 3. Make changes
# ... code ...

# 4. Commit with conventional commit message
git add .
git commit -m "feat: add new amazing feature"

# 5. Push and create PR
git push origin feature/my-new-feature
# Create PR on GitHub: feature/my-new-feature → develop
```

### Updating your branch:

```bash
# Rebase on latest develop
git checkout develop
git pull origin develop
git checkout feature/my-feature
git rebase develop

# Or merge
git merge develop
```

### Quick fixes:

```bash
# For urgent fixes
git checkout develop
git checkout -b fix/quick-fix
# ... fix ...
git commit -m "fix: resolve critical issue"
git push origin fix/quick-fix
# Create PR → develop
```

## Common Commands

```bash
# List all branches
git branch -a

# Delete local branch
git branch -d feature/old-feature

# Delete remote branch
git push origin --delete feature/old-feature

# Rename current branch
git branch -m new-name

# See branch history
git log --oneline --graph --all

# Clean up merged branches
git fetch --prune
git branch --merged develop | grep -v develop | xargs git branch -d
```

## Tips & Best Practices

### ✅ DO:

- Keep branches short-lived (1-2 weeks max)
- Rebase on develop frequently
- Write descriptive commit messages
- Test before pushing
- Keep PRs focused (one feature/fix per PR)
- Delete branches after merge
- Tag releases properly

### ❌ DON'T:

- Commit directly to main
- Leave stale branches
- Mix multiple features in one branch
- Force push to shared branches
- Commit broken code to develop
- Forget to update CHANGELOG

## Troubleshooting

### Merge conflicts:

```bash
# Update from develop
git checkout develop
git pull origin develop

# Rebase your branch
git checkout your-branch
git rebase develop

# Resolve conflicts
# ... fix conflicts ...
git add .
git rebase --continue
```

### Accidentally committed to wrong branch:

```bash
# Undo last commit (keep changes)
git reset HEAD~1

# Switch to correct branch
git checkout correct-branch
git add .
git commit -m "feat: correct commit message"
```

### Need to update commit message:

```bash
# Last commit
git commit --amend -m "new message"

# Already pushed (careful!)
git commit --amend
git push --force-with-lease
```

## GitHub Settings Configuration

### Branch Protection for `main`:

1. Go to Settings → Branches
2. Add rule for `main`
3. Enable:
   - Require pull request reviews before merging (1 approval)
   - Require status checks to pass before merging
   - Require branches to be up to date before merging
   - Do not allow bypassing the above settings

### Required Status Checks:

- `lint`
- `type-check`
- `build`
- `audit`

---

## Quick Reference

| Task          | Command                                             |
| ------------- | --------------------------------------------------- |
| New feature   | `git checkout -b feature/name` from `develop`       |
| Bug fix       | `git checkout -b fix/name` from `develop`           |
| Hotfix        | `git checkout -b hotfix/name` from `main`           |
| Update branch | `git pull origin develop` then `git rebase develop` |
| Release       | Merge `develop` → `main`, tag, publish              |
| Delete branch | `git branch -d branch-name`                         |

---

**Remember:** Always create PRs, never commit directly to `main` or `develop`! 🚀
