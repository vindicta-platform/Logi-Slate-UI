import { type InputHTMLAttributes, forwardRef, useId } from 'react';
import styles from './Input.module.css';

export interface InputProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    /** Input label */
    label?: string;
    /** Error message */
    error?: string;
    /** Hint text */
    hint?: string;
    /** Use floating label animation */
    floating?: boolean;
    /** Mark as required */
    required?: boolean;
    /** Additional wrapper class */
    wrapperClassName?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            label,
            error,
            hint,
            floating = false,
            required = false,
            disabled,
            id: externalId,
            className,
            wrapperClassName,
            ...props
        },
        ref
    ) => {
        const autoId = useId();
        const inputId = externalId || autoId;
        const errorId = error ? `${inputId}-error` : undefined;
        const hintId = hint && !error ? `${inputId}-hint` : undefined;

        const describedBy = [errorId, hintId].filter(Boolean).join(' ') || undefined;

        const wrapperClasses = [
            styles.wrapper,
            error && styles.error,
            floating && styles.floating,
            wrapperClassName,
        ]
            .filter(Boolean)
            .join(' ');

        const inputClasses = [styles.input, className].filter(Boolean).join(' ');

        return (
            <div className={wrapperClasses}>
                {label && !floating && (
                    <label htmlFor={inputId} className={styles.label}>
                        {label}
                        {required && <span className={styles.required}>*</span>}
                    </label>
                )}

                <div className={styles.inputContainer}>
                    <input
                        ref={ref}
                        id={inputId}
                        className={inputClasses}
                        disabled={disabled}
                        required={required}
                        aria-invalid={!!error || undefined}
                        aria-describedby={describedBy}
                        placeholder={floating ? ' ' : props.placeholder}
                        {...props}
                    />
                    {label && floating && (
                        <label htmlFor={inputId} className={styles.floatingLabel}>
                            {label}
                            {required && <span className={styles.required}>*</span>}
                        </label>
                    )}
                </div>

                {error && (
                    <span id={errorId} className={styles.errorMessage} role="alert">
                        {error}
                    </span>
                )}

                {hint && !error && (
                    <span id={hintId} className={styles.hint}>
                        {hint}
                    </span>
                )}
            </div>
        );
    }
);

Input.displayName = 'Input';
export default Input;
