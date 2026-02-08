import type { HTMLAttributes, ReactNode } from 'react';
import styles from './Card.module.css';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    /** Use glassmorphism styling */
    glass?: boolean;
    /** Enable hover lift effect */
    interactive?: boolean;
    /** Compact padding */
    compact?: boolean;
    /** Card header content */
    header?: ReactNode;
    /** Card footer content */
    footer?: ReactNode;
    /** Card body content */
    children: ReactNode;
}

export function Card({
    glass = false,
    interactive = false,
    compact = false,
    header,
    footer,
    children,
    className,
    ...props
}: CardProps) {
    const classes = [
        styles.card,
        glass && styles.glass,
        interactive && styles.interactive,
        compact && styles.compact,
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <div className={classes} {...props}>
            {header && <div className={styles.header}>{header}</div>}
            <div className={styles.body}>{children}</div>
            {footer && <div className={styles.footer}>{footer}</div>}
        </div>
    );
}

export default Card;
