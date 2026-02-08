/**
 * @vindicta/ui-kit
 *
 * Vindicta Glass-Neon component library.
 * React/TypeScript components with amber-500 accent, dark mode default,
 * Outfit typography, and glassmorphism effects.
 */

// Global styles (import at app root)
import './globals.css';

// Design Tokens
export {
    colors,
    typography,
    spacing,
    spacingScale,
    radii,
    shadows,
    transitions,
    durations,
    easings,
    keyframes,
} from './tokens';

export type {
    ColorToken,
    TypographyToken,
    SpacingToken,
    SpacingScaleToken,
    RadiiToken,
    ShadowToken,
    TransitionToken,
    DurationToken,
    EasingToken,
} from './tokens';

// Context
export { ThemeProvider, useTheme } from './context/ThemeProvider';
export type { Theme } from './context/ThemeProvider';

// Atoms
export { Button } from './atoms/Button';
export type { ButtonProps } from './atoms/Button';

export { Input } from './atoms/Input';
export type { InputProps } from './atoms/Input';

export { Badge } from './atoms/Badge';
export type { BadgeProps } from './atoms/Badge';

export { Spinner } from './atoms/Spinner';
export type { SpinnerProps } from './atoms/Spinner';

// Molecules
export { Card } from './molecules/Card';
export type { CardProps } from './molecules/Card';

export { Modal } from './molecules/Modal';
export type { ModalProps } from './molecules/Modal';

export { Toast, ToastProvider, useToast } from './molecules/Toast';
export type { ToastProps, ToastData, ToastVariant } from './molecules/Toast';
