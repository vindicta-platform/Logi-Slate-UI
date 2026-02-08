import { render, screen, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { ToastProvider, useToast } from './Toast';

function TestConsumer() {
    const { toast } = useToast();
    return (
        <button
            onClick={() =>
                toast({ variant: 'success', title: 'Done', message: 'Task completed' })
            }
        >
            Trigger
        </button>
    );
}

describe('Toast', () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    it('renders toast on trigger', () => {
        render(
            <ToastProvider>
                <TestConsumer />
            </ToastProvider>
        );
        act(() => {
            screen.getByText('Trigger').click();
        });
        expect(screen.getByText('Task completed')).toBeInTheDocument();
        expect(screen.getByText('Done')).toBeInTheDocument();
    });

    it('has role=alert', () => {
        render(
            <ToastProvider>
                <TestConsumer />
            </ToastProvider>
        );
        act(() => {
            screen.getByText('Trigger').click();
        });
        expect(screen.getByRole('alert')).toBeInTheDocument();
    });

    it('stacks multiple toasts', () => {
        render(
            <ToastProvider>
                <TestConsumer />
            </ToastProvider>
        );
        act(() => {
            screen.getByText('Trigger').click();
            screen.getByText('Trigger').click();
        });
        expect(screen.getAllByRole('alert')).toHaveLength(2);
    });

    it('dismisses on close button click', () => {
        render(
            <ToastProvider>
                <TestConsumer />
            </ToastProvider>
        );
        act(() => {
            screen.getByText('Trigger').click();
        });
        expect(screen.getByRole('alert')).toBeInTheDocument();

        act(() => {
            screen.getByLabelText('Dismiss notification').click();
            vi.advanceTimersByTime(300); // exit animation
        });
        expect(screen.queryByRole('alert')).not.toBeInTheDocument();
    });

    it('throws if useToast used outside provider', () => {
        function Orphan() {
            useToast();
            return null;
        }
        expect(() => render(<Orphan />)).toThrow(
            'useToast must be used within a ToastProvider'
        );
    });
});
