import {
    createContext,
    useCallback,
    useContext,
    useRef,
    useState,
    type PropsWithChildren,
    type ReactNode,
} from 'react';
import { createPortal } from 'react-dom';
import styles from './Toast.module.css';

export type ToastVariant = 'info' | 'success' | 'warning' | 'error';

export interface ToastData {
    id: string;
    variant: ToastVariant;
    title?: string;
    message: string;
    duration?: number;
}

interface ToastContextValue {
    toast: (options: Omit<ToastData, 'id'>) => string;
    dismiss: (id: string) => void;
    dismissAll: () => void;
}

const ICONS: Record<ToastVariant, string> = {
    info: 'ℹ️',
    success: '✅',
    warning: '⚠️',
    error: '❌',
};

const ToastContext = createContext<ToastContextValue | null>(null);

export function useToast(): ToastContextValue {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
}

function ToastItem({
    data,
    onDismiss,
}: {
    data: ToastData;
    onDismiss: (id: string) => void;
}) {
    const [exiting, setExiting] = useState(false);

    const handleDismiss = useCallback(() => {
        setExiting(true);
        setTimeout(() => onDismiss(data.id), 200);
    }, [data.id, onDismiss]);

    // Auto-dismiss
    const timerRef = useRef<ReturnType<typeof setTimeout>>();
    if (!timerRef.current && data.duration !== 0) {
        timerRef.current = setTimeout(handleDismiss, data.duration ?? 5000);
    }

    const classes = [
        styles.toast,
        styles[data.variant],
        exiting && styles.exiting,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <div className={classes} role="alert" aria-live="assertive">
            <span className={styles.icon}>{ICONS[data.variant]}</span>
            <div className={styles.content}>
                {data.title && <div className={styles.title}>{data.title}</div>}
                <div className={styles.message}>{data.message}</div>
            </div>
            <button
                className={styles.close}
                onClick={handleDismiss}
                aria-label="Dismiss notification"
                type="button"
            >
                ✕
            </button>
        </div>
    );
}

export function ToastProvider({ children }: PropsWithChildren) {
    const [toasts, setToasts] = useState<ToastData[]>([]);
    const counterRef = useRef(0);

    const toast = useCallback((options: Omit<ToastData, 'id'>): string => {
        const id = `toast-${++counterRef.current}`;
        setToasts((prev) => [...prev, { ...options, id }]);
        return id;
    }, []);

    const dismiss = useCallback((id: string) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    }, []);

    const dismissAll = useCallback(() => {
        setToasts([]);
    }, []);

    return (
        <ToastContext.Provider value={{ toast, dismiss, dismissAll }}>
            {children}
            {createPortal(
                <div className={styles.container}>
                    {toasts.map((t) => (
                        <ToastItem key={t.id} data={t} onDismiss={dismiss} />
                    ))}
                </div>,
                document.body
            )}
        </ToastContext.Provider>
    );
}

/** Standalone Toast component for direct rendering */
export interface ToastProps {
    variant?: ToastVariant;
    title?: string;
    message: string;
    onClose?: () => void;
    children?: ReactNode;
}

export function Toast({
    variant = 'info',
    title,
    message,
    onClose,
}: ToastProps) {
    const classes = [styles.toast, styles[variant]].filter(Boolean).join(' ');

    return (
        <div className={classes} role="alert" aria-live="assertive">
            <span className={styles.icon}>{ICONS[variant]}</span>
            <div className={styles.content}>
                {title && <div className={styles.title}>{title}</div>}
                <div className={styles.message}>{message}</div>
            </div>
            {onClose && (
                <button
                    className={styles.close}
                    onClick={onClose}
                    aria-label="Dismiss notification"
                    type="button"
                >
                    ✕
                </button>
            )}
        </div>
    );
}

export default Toast;
