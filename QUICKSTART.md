# 🚀 Quick Start Guide

Get up and running with React Season Effects in 2 minutes!

## For Library Users

### Installation

```bash
npm install react-season-effects
```

### Usage

```tsx
import { SeasonEffect } from 'react-season-effects';

function App() {
  return (
    <div>
      <h1>My Winter Wonderland</h1>
      <SeasonEffect type="winter" intensity={80} />
    </div>
  );
}
```

That's it! ✨

### More Examples

```tsx
// Autumn leaves
<SeasonEffect
  type="autumn"
  leafCount={60}
  colors={["#ff6b00", "#ffb703"]}
/>

// Fast snow
<SeasonEffect
  type="winter"
  speed="fast"
  intensity={90}
/>
```

## For Contributors

### Setup Development Environment

```bash
# 1. Clone the repo
git clone https://github.com/Orace227/react-season-effects.git
cd react-season-effects

# 2. Install dependencies
npm install

# 3. Start development
npm run dev
```

### View the Demo

Open http://localhost:3000 in your browser

### Make Changes

1. Edit files in `packages/react-season-effects/src/`
2. Changes auto-reload in the demo
3. Test your changes at http://localhost:3000

### Build for Production

```bash
npm run build
```

## Common Use Cases

### Next.js App Router

```tsx
// app/page.tsx
import { SeasonEffect } from 'react-season-effects';

export default function Home() {
  return (
    <main>
      <h1>Welcome</h1>
      <SeasonEffect type="winter" />
    </main>
  );
}
```

### Next.js Pages Router

```tsx
// pages/index.tsx
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

### React App

```tsx
// App.tsx
import { SeasonEffect } from 'react-season-effects';

function App() {
  return (
    <>
      <header>My App</header>
      <main>Content</main>
      <SeasonEffect type="winter" />
    </>
  );
}
```

## Props Reference

### Winter

| Prop        | Type                                     | Default     | Description     |
| ----------- | ---------------------------------------- | ----------- | --------------- |
| `intensity` | `number`                                 | `80`        | Density (0-100) |
| `speed`     | `'slow' \| 'medium' \| 'fast' \| number` | `'medium'`  | Animation speed |
| `color`     | `string`                                 | `'#ffffff'` | Snow color      |

### Autumn

| Prop        | Type                                     | Default       | Description      |
| ----------- | ---------------------------------------- | ------------- | ---------------- |
| `leafCount` | `number`                                 | `50`          | Number of leaves |
| `intensity` | `number`                                 | `70`          | Density (0-100)  |
| `speed`     | `'slow' \| 'medium' \| 'fast' \| number` | `'medium'`    | Animation speed  |
| `colors`    | `string[]`                               | autumn colors | Leaf colors      |

## Need Help?

- 📖 [Full Documentation](./README.md)
- 🎮 [Interactive Demo](http://localhost:3000) (when dev server is running)
- 🐛 [Report Issues](https://github.com/Orace227/react-season-effects/issues)
- 💬 [Discussions](https://github.com/Orace227/react-season-effects/discussions)

---

**Enjoy!** ❄️🍁
