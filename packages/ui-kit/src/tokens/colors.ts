/**
 * Vindicta Glass-Neon Color Palette
 *
 * Primary: Amber-500/Gold for interactive elements
 * Accent: Cyan for highlights and hover states
 * Semantic: Standard success/warning/error/info
 */
export const colors = {
    primary: {
        amber: {
            400: '#FBBF24',
            500: '#F59E0B',
            600: '#D97706',
            700: '#B45309',
        },
        gold: '#FFD700',
        cyan: '#00D4FF',
    },
    semantic: {
        success: '#10B981',
        successLight: '#D1FAE5',
        warning: '#F59E0B',
        warningLight: '#FEF3C7',
        error: '#EF4444',
        errorLight: '#FEE2E2',
        info: '#3B82F6',
        infoLight: '#DBEAFE',
    },
    neutral: {
        0: '#FFFFFF',
        50: '#FAFAFA',
        100: '#F4F4F5',
        200: '#E4E4E7',
        300: '#D4D4D8',
        400: '#A1A1AA',
        500: '#71717A',
        600: '#52525B',
        700: '#3F3F46',
        800: '#27272A',
        850: '#1E1E22',
        900: '#18181B',
        950: '#0A0A0B',
    },
    dark: {
        bg: '#0A0A0B',
        surface: '#18181B',
        surfaceHover: '#27272A',
        border: '#3F3F46',
        text: '#FAFAFA',
        textMuted: '#A1A1AA',
    },
    light: {
        bg: '#FFFFFF',
        surface: '#FAFAFA',
        surfaceHover: '#F4F4F5',
        border: '#E4E4E7',
        text: '#18181B',
        textMuted: '#71717A',
    },
    glass: {
        bg: 'rgba(255, 255, 255, 0.05)',
        bgHover: 'rgba(255, 255, 255, 0.08)',
        border: 'rgba(255, 255, 255, 0.1)',
        borderHover: 'rgba(255, 255, 255, 0.15)',
    },
} as const;

export type ColorToken = typeof colors;
