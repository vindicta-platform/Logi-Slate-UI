import {
    type ReactNode,
    useCallback,
    useEffect,
    useRef,
} from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

export interface ModalProps {
    /** Whether the modal is visible */
    open: boolean;
    /** Called when modal should close */
    onClose: () => void;
    /** Modal title (shown in header) */
    title?: string;
    /** Modal size */
    size?: 'sm' | 'md' | 'lg';
    /** Show close button */
    showClose?: boolean;
    /** Close on backdrop click */
    closeOnBackdrop?: boolean;
    /** Close on Escape key */
    closeOnEscape?: boolean;
    /** Footer content */
    footer?: ReactNode;
    /** Body content */
    children: ReactNode;
}

export function Modal({
    open,
    onClose,
    title,
    size = 'md',
    showClose = true,
    closeOnBackdrop = true,
    closeOnEscape = true,
    footer,
    children,
}: ModalProps) {
    const dialogRef = useRef<HTMLDivElement>(null);
    const previousFocusRef = useRef<Element | null>(null);

    // Capture focus on open, restore on close
    useEffect(() => {
        if (open) {
            previousFocusRef.current = document.activeElement;
            // Focus the dialog after render
            requestAnimationFrame(() => {
                dialogRef.current?.focus();
            });
        } else if (previousFocusRef.current instanceof HTMLElement) {
            previousFocusRef.current.focus();
            previousFocusRef.current = null;
        }
    }, [open]);

    // Escape key handler
    useEffect(() => {
        if (!open || !closeOnEscape) return;
        const handler = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                e.stopPropagation();
                onClose();
            }
        };
        document.addEventListener('keydown', handler);
        return () => document.removeEventListener('keydown', handler);
    }, [open, closeOnEscape, onClose]);

    // Lock body scroll
    useEffect(() => {
        if (!open) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = prev;
        };
    }, [open]);

    // Focus trap
    const handleKeyDown = useCallback(
        (e: React.KeyboardEvent) => {
            if (e.key !== 'Tab' || !dialogRef.current) return;

            const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            if (focusable.length === 0) return;

            const first = focusable[0];
            const last = focusable[focusable.length - 1];

            if (e.shiftKey) {
                if (document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                }
            } else {
                if (document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        },
        []
    );

    const handleBackdropClick = useCallback(
        (e: React.MouseEvent) => {
            if (closeOnBackdrop && e.target === e.currentTarget) {
                onClose();
            }
        },
        [closeOnBackdrop, onClose]
    );

    if (!open) return null;

    return createPortal(
        <div
            className={styles.overlay}
            onClick={handleBackdropClick}
        >
            <div
                ref={dialogRef}
                className={`${styles.dialog} ${styles[size]}`}
                role="dialog"
                aria-modal="true"
                aria-label={title}
                tabIndex={-1}
                onKeyDown={handleKeyDown}
            >
                {(title || showClose) && (
                    <div className={styles.header}>
                        {title && <h2 className={styles.title}>{title}</h2>}
                        {showClose && (
                            <button
                                className={styles.closeButton}
                                onClick={onClose}
                                aria-label="Close modal"
                                type="button"
                            >
                                ✕
                            </button>
                        )}
                    </div>
                )}

                <div className={styles.body}>{children}</div>

                {footer && <div className={styles.footer}>{footer}</div>}
            </div>
        </div>,
        document.body
    );
}

export default Modal;
