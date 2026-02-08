/**
 * Vindicta Spacing Tokens
 *
 * 4px base unit system.
 */
export const spacing = {
    px: '1px',
    0: '0',
    0.5: '0.125rem',  // 2px
    1: '0.25rem',     // 4px
    1.5: '0.375rem',  // 6px
    2: '0.5rem',      // 8px
    3: '0.75rem',     // 12px
    4: '1rem',        // 16px
    5: '1.25rem',     // 20px
    6: '1.5rem',      // 24px
    8: '2rem',        // 32px
    10: '2.5rem',     // 40px
    12: '3rem',       // 48px
    16: '4rem',       // 64px
} as const;

/** Semantic spacing aliases */
export const spacingScale = {
    xs: spacing[1],   // 0.25rem = 4px
    sm: spacing[2],   // 0.5rem  = 8px
    md: spacing[4],   // 1rem    = 16px
    lg: spacing[8],   // 2rem    = 32px
    xl: spacing[16],  // 4rem    = 64px
} as const;

export const radii = {
    none: '0',
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    full: '9999px',
} as const;

export const shadows = {
    sm: '0 1px 2px rgba(0, 0, 0, 0.3)',
    md: '0 4px 6px rgba(0, 0, 0, 0.3)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.3)',
    xl: '0 20px 25px rgba(0, 0, 0, 0.3)',
    glow: '0 0 20px rgba(245, 158, 11, 0.3)',
    glowCyan: '0 0 20px rgba(0, 212, 255, 0.3)',
} as const;

export type SpacingToken = typeof spacing;
export type SpacingScaleToken = typeof spacingScale;
export type RadiiToken = typeof radii;
export type ShadowToken = typeof shadows;
