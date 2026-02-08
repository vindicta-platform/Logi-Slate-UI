import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Badge } from './Badge';

describe('Badge', () => {
    it('renders children text', () => {
        render(<Badge>New</Badge>);
        expect(screen.getByText('New')).toBeInTheDocument();
    });

    it('applies variant class', () => {
        const { container } = render(<Badge variant="success">OK</Badge>);
        expect(container.firstChild).toHaveClass('success');
    });

    it('applies size class', () => {
        const { container } = render(<Badge size="sm">Sm</Badge>);
        expect(container.firstChild).toHaveClass('sm');
    });

    it('defaults to info variant and md size', () => {
        const { container } = render(<Badge>Default</Badge>);
        expect(container.firstChild).toHaveClass('info');
        expect(container.firstChild).toHaveClass('md');
    });

    it('renders all variants', () => {
        const variants = ['info', 'success', 'warning', 'error'] as const;
        variants.forEach((v) => {
            const { container } = render(<Badge variant={v}>{v}</Badge>);
            expect(container.firstChild).toHaveClass(v);
        });
    });
});
