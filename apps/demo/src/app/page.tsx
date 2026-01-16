'use client';

import { useState } from 'react';
import { SeasonEffect, Season } from 'react-season-effects';
import styles from './page.module.css';

export default function Home() {
  const [season, setSeason] = useState<Season>('winter');
  const [intensity, setIntensity] = useState(80);
  const [speed, setSpeed] = useState<'slow' | 'medium' | 'fast'>('medium');
  const [enabled, setEnabled] = useState(true);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>🌍 React Season Effects</h1>
        <p className={styles.subtitle}>
          Beautiful seasonal visual effects for React and Next.js
        </p>

        <div className={styles.controls}>
          <div className={styles.controlGroup}>
            <label className={styles.label}>Season</label>
            <div className={styles.buttonGroup}>
              <button
                className={`${styles.button} ${
                  season === 'winter' ? styles.active : ''
                }`}
                onClick={() => setSeason('winter')}
              >
                ❄️ Winter
              </button>
              <button
                className={`${styles.button} ${
                  season === 'autumn' ? styles.active : ''
                }`}
                onClick={() => setSeason('autumn')}
              >
                🍁 Autumn
              </button>
              <button
                className={`${styles.button} ${
                  season === 'spring' ? styles.active : ''
                }`}
                onClick={() => setSeason('spring')}
                disabled
              >
                🌸 Spring (Soon)
              </button>
              <button
                className={`${styles.button} ${
                  season === 'monsoon' ? styles.active : ''
                }`}
                onClick={() => setSeason('monsoon')}
                disabled
              >
                🌧️ Monsoon (Soon)
              </button>
            </div>
          </div>

          <div className={styles.controlGroup}>
            <label className={styles.label}>Intensity: {intensity}%</label>
            <input
              type="range"
              min="0"
              max="100"
              value={intensity}
              onChange={(e) => setIntensity(Number(e.target.value))}
              className={styles.slider}
            />
          </div>

          <div className={styles.controlGroup}>
            <label className={styles.label}>Speed</label>
            <div className={styles.buttonGroup}>
              <button
                className={`${styles.button} ${styles.small} ${
                  speed === 'slow' ? styles.active : ''
                }`}
                onClick={() => setSpeed('slow')}
              >
                Slow
              </button>
              <button
                className={`${styles.button} ${styles.small} ${
                  speed === 'medium' ? styles.active : ''
                }`}
                onClick={() => setSpeed('medium')}
              >
                Medium
              </button>
              <button
                className={`${styles.button} ${styles.small} ${
                  speed === 'fast' ? styles.active : ''
                }`}
                onClick={() => setSpeed('fast')}
              >
                Fast
              </button>
            </div>
          </div>

          <div className={styles.controlGroup}>
            <button
              className={`${styles.button} ${styles.toggle} ${
                enabled ? styles.active : ''
              }`}
              onClick={() => setEnabled(!enabled)}
            >
              {enabled ? '⏸️ Pause' : '▶️ Play'}
            </button>
          </div>
        </div>

        <div className={styles.codeSection}>
          <h2 className={styles.codeTitle}>Usage Example</h2>
          <pre className={styles.codeBlock}>
            <code>
              {`import { SeasonEffect } from 'react-season-effects';

<SeasonEffect
  type="${season}"
  intensity={${intensity}}
  speed="${speed}"
/>`}
            </code>
          </pre>
        </div>

        <div className={styles.features}>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>⚡</span>
            <h3>High Performance</h3>
            <p>Canvas-based rendering with requestAnimationFrame</p>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>🎨</span>
            <h3>Customizable</h3>
            <p>Control colors, speed, intensity, and more</p>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>🌐</span>
            <h3>SSR-Safe</h3>
            <p>Works perfectly with Next.js server rendering</p>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>📦</span>
            <h3>Lightweight</h3>
            <p>Tiny bundle size, zero dependencies</p>
          </div>
        </div>
      </div>

      {enabled && (
        <SeasonEffect type={season} intensity={intensity} speed={speed} />
      )}
    </main>
  );
}
