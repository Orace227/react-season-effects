import React, { useRef, useEffect, useCallback } from 'react';
import { CanvasRenderer } from '../core/CanvasRenderer';
import { useAnimationLoop } from '../core/useAnimationLoop';
import { useResize } from '../core/useResize';

interface Snowflake {
  x: number;
  y: number;
  radius: number;
  speedY: number;
  speedX: number;
  opacity: number;
}

export interface SnowProps {
  /**
   * Number of snowflakes (default: 150)
   */
  count?: number;
  /**
   * Animation speed multiplier (default: 1)
   */
  speed?: number | 'slow' | 'medium' | 'fast';
  /**
   * Snow color (default: #ffffff)
   */
  color?: string;
  /**
   * Intensity/density of snow (0-100, default: 80)
   */
  intensity?: number;
}

export const Snow: React.FC<SnowProps> = ({
  count,
  speed = 'medium',
  color = '#ffffff',
  intensity = 80,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rendererRef = useRef<CanvasRenderer | null>(null);
  const snowflakesRef = useRef<Snowflake[]>([]);
  const { width, height } = useResize();

  // Calculate actual count from intensity if not provided
  const snowflakeCount = count ?? Math.floor((intensity / 100) * 200);

  // Convert speed to multiplier
  const getSpeedMultiplier = (s: number | string): number => {
    if (typeof s === 'number') return s;
    switch (s) {
      case 'slow':
        return 0.5;
      case 'medium':
        return 1;
      case 'fast':
        return 1.5;
      default:
        return 1;
    }
  };

  const speedMultiplier = getSpeedMultiplier(speed);

  // Initialize snowflakes
  const initSnowflakes = useCallback(
    (w: number, h: number) => {
      const flakes: Snowflake[] = [];
      for (let i = 0; i < snowflakeCount; i++) {
        flakes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          radius: Math.random() * 3 + 1,
          speedY: Math.random() * 1 + 0.5,
          speedX: Math.random() * 0.5 - 0.25,
          opacity: Math.random() * 0.5 + 0.5,
        });
      }
      snowflakesRef.current = flakes;
    },
    [snowflakeCount]
  );

  // Initialize canvas and renderer
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    rendererRef.current = new CanvasRenderer(canvas);
    rendererRef.current.resize(width, height);
    initSnowflakes(width, height);

    return () => {
      rendererRef.current = null;
    };
  }, [width, height, initSnowflakes]);

  // Animation loop
  const animate = useCallback(
    (deltaTime: number) => {
      if (!rendererRef.current) return;

      const renderer = rendererRef.current;
      const ctx = renderer.getContext();
      const { width: w, height: h } = renderer.getDimensions();

      // Clear canvas
      renderer.clear();

      // Update and draw each snowflake
      snowflakesRef.current.forEach((flake) => {
        // Update position
        flake.y += flake.speedY * speedMultiplier * (deltaTime / 16);
        flake.x += flake.speedX * speedMultiplier * (deltaTime / 16);

        // Reset snowflake when it goes out of bounds
        if (flake.y > h) {
          flake.y = -10;
          flake.x = Math.random() * w;
        }
        if (flake.x > w) {
          flake.x = 0;
        } else if (flake.x < 0) {
          flake.x = w;
        }

        // Draw snowflake
        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.globalAlpha = flake.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
      });
    },
    [speedMultiplier, color]
  );

  useAnimationLoop(animate, true);

  // SSR safety check
  if (typeof window === 'undefined') return null;

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
