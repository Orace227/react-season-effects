# react-season-effects

Lightweight, performant seasonal visual effects for React and Next.js applications.

## Features

- 🎨 Beautiful seasonal effects (snow, autumn leaves, and more)
- ⚡ Canvas-based rendering for optimal performance
- 🔧 Fully typed with TypeScript
- 🌐 SSR-safe for Next.js
- 🎯 Simple, intuitive API
- 📦 Tiny bundle size
- 🎭 Customizable colors, speed, and intensity

## Installation

```bash
npm install react-season-effects
```

```bash
yarn add react-season-effects
```

```bash
pnpm add react-season-effects
```

## Usage

### Basic Usage

```tsx
import { SeasonEffect } from 'react-season-effects';

function App() {
  return (
    <div>
      <h1>My App</h1>
      <SeasonEffect type="winter" />
    </div>
  );
}
```

### Winter (Snowfall)

```tsx
<SeasonEffect type="winter" intensity={80} speed="medium" color="#ffffff" />
```

**Props:**

- `intensity` (0-100, default: 80) - Controls snow density
- `speed` ('slow' | 'medium' | 'fast' | number, default: 'medium') - Animation speed
- `color` (string, default: '#ffffff') - Snow color

### Autumn (Falling Leaves)

```tsx
<SeasonEffect
  type="autumn"
  leafCount={50}
  colors={['#ff6b00', '#ffb703', '#d00000']}
  speed="medium"
/>
```

**Props:**

- `leafCount` (number, default: 50) - Number of leaves
- `intensity` (0-100, default: 70) - Controls leaf density (alternative to leafCount)
- `speed` ('slow' | 'medium' | 'fast' | number, default: 'medium') - Animation speed
- `colors` (string[], default: autumn colors) - Array of leaf colors

### Direct Component Usage

You can also import and use effect components directly:

```tsx
import { Snow, Autumn } from 'react-season-effects';

function WinterPage() {
  return (
    <>
      <h1>Winter Wonderland</h1>
      <Snow intensity={90} speed="fast" />
    </>
  );
}

function AutumnPage() {
  return (
    <>
      <h1>Fall Vibes</h1>
      <Autumn leafCount={60} colors={['#FF8C00', '#FF6347']} />
    </>
  );
}
```

## Next.js Usage

The package is fully SSR-safe and works out of the box with Next.js:

```tsx
// app/page.tsx (App Router)
import { SeasonEffect } from 'react-season-effects';

export default function Home() {
  return (
    <main>
      <h1>Welcome</h1>
      <SeasonEffect type="winter" intensity={70} />
    </main>
  );
}
```

```tsx
// pages/index.tsx (Pages Router)
import { SeasonEffect } from 'react-season-effects';

export default function Home() {
  return (
    <div>
      <h1>Welcome</h1>
      <SeasonEffect type="autumn" />
    </div>
  );
}
```

## Supported Seasons

### Version 1.0 (Current)

- ✅ **Winter** - Snowfall effect
- ✅ **Autumn** - Falling leaves effect

### Coming Soon

- 🔜 **Spring** - Cherry blossom petals (v1.1)
- 🔜 **Monsoon** - Rainfall effect (v1.1)
- 🔜 **Summer** - Heat waves, fireflies (v2.0)

## TypeScript

The package is fully typed. All props have proper TypeScript definitions:

```tsx
import { SeasonEffect, Season, SeasonEffectProps } from 'react-season-effects';

const season: Season = 'winter';

const MyComponent = () => {
  return <SeasonEffect type={season} intensity={80} />;
};
```

## Performance

- Uses `requestAnimationFrame` for smooth animations
- Automatically pauses when browser tab is hidden
- Debounced resize handling
- Canvas-based rendering (no DOM manipulation)
- Fixed position overlay with `pointer-events: none`

## Browser Support

- All modern browsers (Chrome, Firefox, Safari, Edge)
- IE11 not supported (uses ES6+ features)

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Author

Created with ❤️ for the React community
