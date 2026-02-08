import styles from './Spinner.module.css';

export interface SpinnerProps {
    /** Spinner size */
    size?: 'sm' | 'md' | 'lg';
    /** Accessible label */
    label?: string;
    /** Additional class */
    className?: string;
}

export function Spinner({
    size = 'md',
    label = 'Loading',
    className,
}: SpinnerProps) {
    return (
        <span
            className={`${styles.spinner} ${styles[size]}${className ? ` ${className}` : ''}`}
            role="status"
            aria-label={label}
        >
            <span className="sr-only" aria-live="polite">
                {label}
            </span>
        </span>
    );
}

export default Spinner;
