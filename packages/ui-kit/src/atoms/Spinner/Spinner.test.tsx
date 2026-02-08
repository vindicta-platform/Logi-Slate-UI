import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Spinner } from './Spinner';

describe('Spinner', () => {
    it('renders with role=status', () => {
        render(<Spinner />);
        expect(screen.getByRole('status')).toBeInTheDocument();
    });

    it('has accessible label', () => {
        render(<Spinner label="Processing" />);
        expect(screen.getByRole('status')).toHaveAttribute('aria-label', 'Processing');
    });

    it('defaults to md size', () => {
        const { container } = render(<Spinner />);
        expect(container.firstChild).toHaveClass('md');
    });

    it('accepts size prop', () => {
        const { container } = render(<Spinner size="lg" />);
        expect(container.firstChild).toHaveClass('lg');
    });

    it('has aria-live announcement', () => {
        render(<Spinner label="Loading data" />);
        const announcement = screen.getByText('Loading data');
        expect(announcement.closest('[aria-live]')).toHaveAttribute('aria-live', 'polite');
    });
});
