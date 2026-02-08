/**
 * Vindicta Animation Tokens
 *
 * Smooth transitions for the Glass-Neon design system.
 */
export const transitions = {
    fast: '100ms ease',
    normal: '200ms ease',
    slow: '300ms ease',
    spring: '300ms cubic-bezier(0.34, 1.56, 0.64, 1)',
} as const;

export const durations = {
    fast: '100ms',
    normal: '200ms',
    slow: '300ms',
    slower: '500ms',
} as const;

export const easings = {
    ease: 'ease',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
} as const;

/** CSS keyframe names (defined in global CSS) */
export const keyframes = {
    spin: 'vindicta-spin',
    fadeIn: 'vindicta-fadeIn',
    fadeOut: 'vindicta-fadeOut',
    slideUp: 'vindicta-slideUp',
    slideDown: 'vindicta-slideDown',
    pulse: 'vindicta-pulse',
} as const;

export type TransitionToken = typeof transitions;
export type DurationToken = typeof durations;
export type EasingToken = typeof easings;
