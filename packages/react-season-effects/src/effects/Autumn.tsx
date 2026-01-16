import React, { useRef, useEffect, useCallback } from 'react';
import { CanvasRenderer } from '../core/CanvasRenderer';
import { useAnimationLoop } from '../core/useAnimationLoop';
import { useResize } from '../core/useResize';

interface Leaf {
  x: number;
  y: number;
  rotation: number;
  rotationSpeed: number;
  fallSpeed: number;
  sway: number;
  swayOffset: number;
  size: number;
  color: string;
}

export interface AutumnProps {
  /**
   * Number of leaves (default: 50)
   */
  leafCount?: number;
  /**
   * Animation speed multiplier (default: 1)
   */
  speed?: number | 'slow' | 'medium' | 'fast';
  /**
   * Array of leaf colors (default: autumn colors)
   */
  colors?: string[];
  /**
   * Intensity/density of leaves (0-100, default: 70)
   */
  intensity?: number;
}

const DEFAULT_COLORS = ['#ff6b00', '#ffb703', '#d00000', '#fb8500', '#ff4800'];

export const Autumn: React.FC<AutumnProps> = ({
  leafCount,
  speed = 'medium',
  colors = DEFAULT_COLORS,
  intensity = 70,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rendererRef = useRef<CanvasRenderer | null>(null);
  const leavesRef = useRef<Leaf[]>([]);
  const { width, height } = useResize();

  // Calculate actual count from intensity if not provided
  const actualLeafCount = leafCount ?? Math.floor((intensity / 100) * 80);

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

  // Initialize leaves
  const initLeaves = useCallback(
    (w: number, h: number) => {
      const leaves: Leaf[] = [];
      for (let i = 0; i < actualLeafCount; i++) {
        leaves.push({
          x: Math.random() * w,
          y: Math.random() * h - h, // Start above viewport
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.1,
          fallSpeed: Math.random() * 1 + 0.5,
          sway: Math.random() * 2 + 1,
          swayOffset: Math.random() * Math.PI * 2,
          size: Math.random() * 8 + 6,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
      leavesRef.current = leaves;
    },
    [actualLeafCount, colors]
  );

  // Initialize canvas and renderer
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    rendererRef.current = new CanvasRenderer(canvas);
    rendererRef.current.resize(width, height);
    initLeaves(width, height);

    return () => {
      rendererRef.current = null;
    };
  }, [width, height, initLeaves]);

  // Draw a simple leaf shape
  const drawLeaf = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    size: number,
    rotation: number,
    color: string
  ) => {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);

    // Draw leaf shape (ellipse)
    ctx.beginPath();
    ctx.ellipse(0, 0, size / 2, size, 0, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();

    // Draw stem
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, size / 2);
    ctx.strokeStyle = '#8B4513';
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.restore();
  };

  // Animation loop
  const animate = useCallback(
    (deltaTime: number) => {
      if (!rendererRef.current) return;

      const renderer = rendererRef.current;
      const ctx = renderer.getContext();
      const { width: w, height: h } = renderer.getDimensions();

      // Clear canvas
      renderer.clear();

      // Update and draw each leaf
      leavesRef.current.forEach((leaf) => {
        // Update position
        leaf.y += leaf.fallSpeed * speedMultiplier * (deltaTime / 16);
        leaf.rotation +=
          leaf.rotationSpeed * speedMultiplier * (deltaTime / 16);

        // Sway (zig-zag movement)
        leaf.swayOffset += 0.02 * speedMultiplier * (deltaTime / 16);
        leaf.x += Math.sin(leaf.swayOffset) * leaf.sway * (deltaTime / 16);

        // Reset leaf when it goes out of bounds
        if (leaf.y > h + 20) {
          leaf.y = -20;
          leaf.x = Math.random() * w;
          leaf.swayOffset = Math.random() * Math.PI * 2;
        }

        // Keep leaf within horizontal bounds (with wrapping)
        if (leaf.x > w + 20) {
          leaf.x = -20;
        } else if (leaf.x < -20) {
          leaf.x = w + 20;
        }

        // Draw leaf
        drawLeaf(ctx, leaf.x, leaf.y, leaf.size, leaf.rotation, leaf.color);
      });
    },
    [speedMultiplier]
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
