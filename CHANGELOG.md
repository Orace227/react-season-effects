# Changelog

All notable changes to the react-season-effects project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-01-16

### Added

- Initial release of `react-season-effects` library
- ❄️ Winter (Snowfall) effect with full customization
- 🍁 Autumn (Falling Leaves) effect with multiple colors
- Canvas-based rendering for optimal performance
- TypeScript definitions for all components
- SSR-safe implementation for Next.js
- `SeasonEffect` main component with discriminated union props
- Core utilities:
  - `useAnimationLoop` - RAF animation hook with visibility detection
  - `useResize` - Debounced window resize handling
  - `CanvasRenderer` - Base canvas utility class
- Turborepo monorepo structure
- Interactive Next.js demo application with:
  - Real-time parameter controls
  - Season switcher
  - Live code examples
  - Feature showcase
  - Responsive design
- Comprehensive documentation:
  - Main README
  - Package README
  - Demo README
  - Project summary
  - Contributing guidelines

### Future Releases

#### [1.1.0] - Planned

- 🌸 Spring (Cherry Blossom) effect
- 🌧️ Monsoon (Rainfall) effect
- Enhanced customization options
- Performance monitoring utilities

#### [2.0.0] - Planned

- ☀️ Summer effects (heat waves, fireflies)
- 🎆 Festival effects (fireworks, confetti)
- Auto season detection based on date/location
- Preset themes (minimalist, vibrant, subtle)
- Accessibility improvements
- Animation performance profiler

---

## Version Guidelines

### Major (x.0.0)

- Breaking API changes
- Removal of deprecated features
- Major architectural changes

### Minor (1.x.0)

- New season effects
- New features (backward compatible)
- Significant performance improvements
- New configuration options

### Patch (1.0.x)

- Bug fixes
- Performance optimizations
- Documentation updates
- Dependency updates
