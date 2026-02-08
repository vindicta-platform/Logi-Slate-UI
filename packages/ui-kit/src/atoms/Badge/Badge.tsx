import type { HTMLAttributes, ReactNode } from 'react';
import styles from './Badge.module.css';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    /** Badge variant */
    variant?: 'info' | 'success' | 'warning' | 'error';
    /** Badge size */
    size?: 'sm' | 'md';
    /** Badge content */
    children: ReactNode;
}

export function Badge({
    variant = 'info',
    size = 'md',
    children,
    className,
    ...props
}: BadgeProps) {
    const classes = [styles.badge, styles[variant], styles[size], className]
        .filter(Boolean)
        .join(' ');

    return (
        <span className={classes} {...props}>
            {children}
        </span>
    );
}

export default Badge;
