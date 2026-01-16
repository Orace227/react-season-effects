import React from 'react';
import { Snow, SnowProps } from './effects/Snow';
import { Autumn, AutumnProps } from './effects/Autumn';

/**
 * Props for Winter season effect
 */
export interface WinterEffectProps extends Omit<SnowProps, 'count'> {
  type: 'winter';
}

/**
 * Props for Autumn season effect
 */
export interface AutumnEffectProps extends AutumnProps {
  type: 'autumn';
}

/**
 * Placeholder props for future seasons
 */
export interface SpringEffectProps {
  type: 'spring';
  intensity?: number;
  speed?: number | 'slow' | 'medium' | 'fast';
  // Future: petal colors, count, etc.
}

export interface SummerEffectProps {
  type: 'summer';
  intensity?: number;
  // Future: heat wave effects, fireflies, etc.
}

export interface MonsoonEffectProps {
  type: 'monsoon';
  intensity?: number;
  speed?: number | 'slow' | 'medium' | 'fast';
  // Future: rain drops, lightning, etc.
}

/**
 * Union type for all season effect props
 */
export type SeasonEffectProps =
  | WinterEffectProps
  | AutumnEffectProps
  | SpringEffectProps
  | SummerEffectProps
  | MonsoonEffectProps;

/**
 * Main SeasonEffect component
 * Renders the appropriate seasonal effect based on the type prop
 */
export const SeasonEffect: React.FC<SeasonEffectProps> = (props) => {
  // SSR safety check
  if (typeof window === 'undefined') return null;

  switch (props.type) {
    case 'winter':
      return <Snow {...props} />;

    case 'autumn':
      return <Autumn {...props} />;

    case 'spring':
      // Placeholder for future implementation
      console.warn('Spring effect is not yet implemented. Coming in v1.1!');
      return null;

    case 'summer':
      // Placeholder for future implementation
      console.warn('Summer effect is not yet implemented. Coming in v2.0!');
      return null;

    case 'monsoon':
      // Placeholder for future implementation
      console.warn('Monsoon effect is not yet implemented. Coming in v1.1!');
      return null;

    default: {
      // Type safety: this should never happen
      const exhaustiveCheck: never = props;
      console.error('Unknown season type:', exhaustiveCheck);
      return null;
    }
  }
};

// Named exports for direct usage
export { Snow } from './effects/Snow';
export { Autumn } from './effects/Autumn';
export type { SnowProps } from './effects/Snow';
export type { AutumnProps } from './effects/Autumn';
export type { Season, Speed } from './types';
