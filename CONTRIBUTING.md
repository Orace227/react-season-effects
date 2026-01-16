# Contributing to React Season Effects

Thank you for your interest in contributing to React Season Effects! This document provides guidelines and instructions for contributing.

## 🌟 Ways to Contribute

- 🐛 Report bugs
- 💡 Suggest new features or seasons
- 📝 Improve documentation
- 🎨 Add new seasonal effects
- ⚡ Optimize performance
- 🧪 Write tests
- 🎯 Improve the demo app

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm (comes with Node.js)
- Git

### Setup

1. **Fork the repository** on GitHub

2. **Clone your fork**

   ```bash
   git clone https://github.com/YOUR_USERNAME/react-season-effects.git
   cd react-season-effects
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Start development**

   ```bash
   npm run dev
   ```

5. **Visit the demo**
   Open http://localhost:3000 to see your changes in action

## 📁 Project Structure

```
react-season-effects/
├── apps/
│   └── demo/              # Next.js demo application
├── packages/
│   └── react-season-effects/  # Main library
│       ├── src/
│       │   ├── effects/   # Seasonal effect components
│       │   ├── core/      # Core utilities and hooks
│       │   ├── SeasonEffect.tsx  # Main component
│       │   └── index.ts   # Public exports
└── turbo.json             # Turborepo configuration
```

## 🎨 Adding a New Season Effect

Here's how to add a new seasonal effect (e.g., Spring):

### 1. Create the Effect Component

Create `packages/react-season-effects/src/effects/Spring.tsx`:

```tsx
import React, { useRef, useEffect, useCallback } from 'react';
import { CanvasRenderer } from '../core/CanvasRenderer';
import { useAnimationLoop } from '../core/useAnimationLoop';
import { useResize } from '../core/useResize';

interface Petal {
  // Define your particle properties
  x: number;
  y: number;
  // ... other properties
}

export interface SpringProps {
  petalCount?: number;
  speed?: number | 'slow' | 'medium' | 'fast';
  colors?: string[];
  intensity?: number;
}

export const Spring: React.FC<SpringProps> = ({
  petalCount,
  speed = 'medium',
  colors = ['#FFB7C5', '#FFC0CB', '#FFE4E1'],
  intensity = 70,
}) => {
  // SSR safety check
  if (typeof window === 'undefined') return null;

  // Implement your effect logic here
  // Use the core utilities: CanvasRenderer, useAnimationLoop, useResize

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
};
```

### 2. Update Type Definitions

Update `packages/react-season-effects/src/SeasonEffect.tsx`:

```tsx
import { Spring, SpringProps } from './effects/Spring';

// Update the SpringEffectProps interface
export interface SpringEffectProps extends SpringProps {
  type: 'spring';
}

// Update the SeasonEffect component
export const SeasonEffect: React.FC<SeasonEffectProps> = (props) => {
  // ...
  switch (props.type) {
    // ... other cases
    case 'spring':
      return <Spring {...props} />;
    // ...
  }
};
```

### 3. Export the Component

Update `packages/react-season-effects/src/index.ts`:

```tsx
export { Spring } from './effects/Spring';
export type { SpringProps } from './effects/Spring';
```

### 4. Update the Demo

Add controls for the new season in `apps/demo/src/app/page.tsx`

### 5. Update Documentation

- Update README.md with the new season
- Add usage examples
- Update CHANGELOG.md

## 🧪 Testing Your Changes

1. **Visual Testing**
   - Start the dev server: `npm run dev`
   - Visit http://localhost:3000
   - Test your effect with different parameters

2. **Build Testing**

   ```bash
   npm run build
   ```

3. **Type Checking**
   ```bash
   cd packages/react-season-effects
   npm run lint
   ```

## 📝 Code Style Guidelines

### General

- Use TypeScript for all new code
- Follow the existing code structure
- Write descriptive variable names
- Add comments for complex logic

### React Components

- Use functional components with hooks
- Use React.FC for component types
- Include proper prop interfaces
- Add JSDoc comments for props

### Performance

- Use `useCallback` for animation functions
- Memoize expensive calculations
- Clean up effects properly (return cleanup functions)
- Avoid creating new objects in render loops

### Canvas Rendering

- Use the `CanvasRenderer` base class
- Clear canvas before each frame
- Use `requestAnimationFrame` via `useAnimationLoop`
- Handle window resize efficiently

### SSR Safety

Always include this check at the top of client-side components:

```tsx
if (typeof window === 'undefined') return null;
```

## 🔄 Pull Request Process

1. **Create a new branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Follow the code style guidelines
   - Test thoroughly
   - Update documentation

3. **Commit your changes**

   ```bash
   git add .
   git commit -m "feat: add spring cherry blossom effect"
   ```

   **Commit Message Format:**
   - `feat:` - New features
   - `fix:` - Bug fixes
   - `docs:` - Documentation changes
   - `perf:` - Performance improvements
   - `refactor:` - Code refactoring
   - `style:` - Code style changes
   - `test:` - Test additions/changes

4. **Push to your fork**

   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request**
   - Go to GitHub and create a PR from your fork
   - Provide a clear description of changes
   - Reference any related issues

## 🐛 Reporting Bugs

When reporting bugs, please include:

- Clear, descriptive title
- Steps to reproduce
- Expected behavior
- Actual behavior
- Browser/OS information
- Screenshots (if applicable)
- Code samples (if applicable)

## 💡 Feature Requests

For feature requests:

- Describe the feature clearly
- Explain the use case
- Consider implementation complexity
- Provide examples if possible

## 📚 Resources

- [React Documentation](https://react.dev/)
- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Canvas API Reference](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [Turborepo Documentation](https://turbo.build/repo/docs)

## 🎯 Development Tips

### Hot Reload

Both the library and demo app support hot reload. Changes to library files will automatically rebuild and update the demo.

### Debugging

- Use browser DevTools for canvas debugging
- Console.log particle states for debugging
- Use React DevTools for component inspection

### Performance Profiling

- Use browser Performance tab
- Monitor FPS with DevTools
- Test with different particle counts
- Test on mobile devices

## 📜 License

By contributing, you agree that your contributions will be licensed under the MIT License.

## 🙏 Thank You!

Your contributions make this project better for everyone. We appreciate your time and effort!

---

Questions? Feel free to open an issue for discussion.
