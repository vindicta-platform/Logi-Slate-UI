import { type ButtonHTMLAttributes, type ReactNode, forwardRef } from 'react';
import { Spinner } from '../Spinner';
import styles from './Button.module.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /** Visual variant */
    variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
    /** Button size */
    size?: 'sm' | 'md' | 'lg';
    /** Show loading spinner */
    loading?: boolean;
    /** Icon before text */
    leftIcon?: ReactNode;
    /** Icon after text */
    rightIcon?: ReactNode;
    /** Stretch to full width */
    fullWidth?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            variant = 'primary',
            size = 'md',
            loading = false,
            leftIcon,
            rightIcon,
            fullWidth = false,
            disabled,
            children,
            className,
            ...props
        },
        ref
    ) => {
        const classes = [
            styles.button,
            styles[variant],
            styles[size],
            loading && styles.loading,
            fullWidth && styles.fullWidth,
            className,
        ]
            .filter(Boolean)
            .join(' ');

        return (
            <button
                ref={ref}
                className={classes}
                disabled={disabled || loading}
                aria-busy={loading || undefined}
                aria-disabled={disabled || loading || undefined}
                {...props}
            >
                {loading && (
                    <span className={styles.spinnerWrapper}>
                        <Spinner
                            size={size === 'lg' ? 'md' : 'sm'}
                            label="Loading"
                        />
                    </span>
                )}
                <span className={styles.content}>
                    {leftIcon && <span className={styles.iconLeft}>{leftIcon}</span>}
                    {children}
                    {rightIcon && <span className={styles.iconRight}>{rightIcon}</span>}
                </span>
            </button>
        );
    }
);

Button.displayName = 'Button';
export default Button;
