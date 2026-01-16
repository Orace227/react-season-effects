# 🌍 React Season Effects - Monorepo

A professional monorepo containing the `react-season-effects` library and demo applications.

## 📦 What's Inside?

This Turborepo includes:

### Packages

- **`react-season-effects`** - The main npm package with seasonal visual effects

### Apps

- **`demo`** - Next.js demo application showcasing all effects

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

Run all packages in development mode:

```bash
npm run dev
```

This will start:

- The demo Next.js app at `http://localhost:3000`
- The library in watch mode for hot reloading

### Building

Build all packages:

```bash
npm run build
```

Build specific package:

```bash
cd packages/react-season-effects
npm run build
```

## 📁 Project Structure

```
react-season-effects/
├── apps/
│   └── demo/              # Next.js demo application
│       ├── src/
│       │   └── app/
│       │       ├── page.tsx
│       │       └── layout.tsx
│       ├── package.json
│       └── next.config.js
├── packages/
│   └── react-season-effects/  # Main library
│       ├── src/
│       │   ├── effects/
│       │   │   ├── Snow.tsx
│       │   │   └── Autumn.tsx
│       │   ├── core/
│       │   │   ├── CanvasRenderer.ts
│       │   │   ├── useAnimationLoop.ts
│       │   │   └── useResize.ts
│       │   ├── SeasonEffect.tsx
│       │   ├── types.ts
│       │   └── index.ts
│       ├── package.json
│       ├── tsconfig.json
│       └── README.md
├── package.json
├── turbo.json
└── README.md
```

## 🎯 Features

- ✅ **Winter** (Snowfall) - Fully implemented
- ✅ **Autumn** (Falling Leaves) - Fully implemented
- 🔜 **Spring** (Cherry Blossoms) - Coming in v1.1
- 🔜 **Monsoon** (Rain) - Coming in v1.1
- 🔜 **Summer** (Heat Waves) - Coming in v2.0

## 🛠 Technology Stack

- **Build System**: Turborepo
- **Language**: TypeScript
- **Bundler**: tsup (for library)
- **Framework**: React 18, Next.js 14
- **Rendering**: HTML Canvas API
- **Animation**: requestAnimationFrame

## 📝 Usage

See the [package README](./packages/react-season-effects/README.md) for detailed usage instructions.

Quick example:

```tsx
import { SeasonEffect } from 'react-season-effects';

function App() {
  return (
    <>
      <h1>My App</h1>
      <SeasonEffect type="winter" intensity={80} speed="medium" />
    </>
  );
}
```

## 🧪 Testing the Demo

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the demo:

   ```bash
   npm run dev
   ```

3. Open `http://localhost:3000` in your browser

4. Use the controls to:
   - Switch between seasons
   - Adjust intensity and speed
   - Pause/play animations

## 📦 Publishing the Package

To publish `react-season-effects` to npm:

1. Build the package:

   ```bash
   cd packages/react-season-effects
   npm run build
   ```

2. Login to npm:

   ```bash
   npm login
   ```

3. Publish:
   ```bash
   npm publish
   ```

## 🏗 Architecture Decisions

### Why Canvas?

- **Performance**: Canvas rendering is much faster than DOM manipulation for particle effects
- **Smooth animations**: Direct pixel manipulation allows for 60fps animations
- **Lower memory**: No need to create hundreds of DOM elements

### Why Turborepo?

- **Efficient builds**: Only rebuilds what changed
- **Parallel execution**: Runs tasks across packages simultaneously
- **Easy scaling**: Simple to add more apps or packages

### SSR Safety

All effects check for `window` existence and return `null` on the server, making them safe for Next.js SSR.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

### Adding a New Season Effect

1. Create effect component in `packages/react-season-effects/src/effects/`
2. Add props interface
3. Update `SeasonEffect.tsx` to include the new season
4. Update type definitions in `types.ts`
5. Add demo to the demo app

## 📄 License

MIT

## 🙏 Credits

Built with ❤️ for the React community

---

**Happy Coding!** ❄️🍁🌸☀️🌧️
