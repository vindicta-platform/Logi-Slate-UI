import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Modal } from './Modal';

describe('Modal', () => {
    it('renders nothing when closed', () => {
        render(<Modal open={false} onClose={vi.fn()}>Content</Modal>);
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

    it('renders dialog when open', () => {
        render(<Modal open onClose={vi.fn()}>Content</Modal>);
        expect(screen.getByRole('dialog')).toBeInTheDocument();
        expect(screen.getByText('Content')).toBeInTheDocument();
    });

    it('has aria-modal attribute', () => {
        render(<Modal open onClose={vi.fn()}>Content</Modal>);
        expect(screen.getByRole('dialog')).toHaveAttribute('aria-modal', 'true');
    });

    it('shows title in header', () => {
        render(<Modal open onClose={vi.fn()} title="My Modal">Body</Modal>);
        expect(screen.getByText('My Modal')).toBeInTheDocument();
    });

    it('calls onClose when close button clicked', () => {
        const onClose = vi.fn();
        render(<Modal open onClose={onClose} title="Test">Body</Modal>);
        fireEvent.click(screen.getByLabelText('Close modal'));
        expect(onClose).toHaveBeenCalledOnce();
    });

    it('calls onClose on Escape key', () => {
        const onClose = vi.fn();
        render(<Modal open onClose={onClose}>Body</Modal>);
        fireEvent.keyDown(document, { key: 'Escape' });
        expect(onClose).toHaveBeenCalledOnce();
    });

    it('renders footer when provided', () => {
        render(
            <Modal open onClose={vi.fn()} footer={<button>OK</button>}>
                Body
            </Modal>
        );
        expect(screen.getByRole('button', { name: 'OK' })).toBeInTheDocument();
    });

    it('applies size class', () => {
        render(<Modal open onClose={vi.fn()} size="lg">Big</Modal>);
        expect(screen.getByRole('dialog')).toHaveClass('lg');
    });
});
