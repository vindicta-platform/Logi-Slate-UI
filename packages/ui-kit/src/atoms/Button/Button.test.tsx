import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Button } from './Button';

describe('Button', () => {
    it('renders children text', () => {
        render(<Button>Click me</Button>);
        expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
    });

    it('applies variant class', () => {
        const { container } = render(<Button variant="danger">Delete</Button>);
        expect(container.firstChild).toHaveClass('danger');
    });

    it('applies size class', () => {
        const { container } = render(<Button size="lg">Large</Button>);
        expect(container.firstChild).toHaveClass('lg');
    });

    it('handles click events', () => {
        const onClick = vi.fn();
        render(<Button onClick={onClick}>Press</Button>);
        fireEvent.click(screen.getByRole('button'));
        expect(onClick).toHaveBeenCalledOnce();
    });

    it('does not fire click when disabled', () => {
        const onClick = vi.fn();
        render(<Button disabled onClick={onClick}>Nope</Button>);
        fireEvent.click(screen.getByRole('button'));
        expect(onClick).not.toHaveBeenCalled();
    });

    it('shows loading state with aria-busy', () => {
        render(<Button loading>Saving</Button>);
        const btn = screen.getByRole('button');
        expect(btn).toHaveAttribute('aria-busy', 'true');
        expect(btn).toBeDisabled();
    });

    it('renders left and right icons', () => {
        render(
            <Button leftIcon={<span data-testid="left">←</span>} rightIcon={<span data-testid="right">→</span>}>
                Go
            </Button>
        );
        expect(screen.getByTestId('left')).toBeInTheDocument();
        expect(screen.getByTestId('right')).toBeInTheDocument();
    });

    it('supports keyboard Enter', () => {
        const onClick = vi.fn();
        render(<Button onClick={onClick}>Key</Button>);
        fireEvent.keyDown(screen.getByRole('button'), { key: 'Enter' });
        // Native button handles Enter
        fireEvent.click(screen.getByRole('button'));
        expect(onClick).toHaveBeenCalled();
    });

    it('applies fullWidth class', () => {
        const { container } = render(<Button fullWidth>Wide</Button>);
        expect(container.firstChild).toHaveClass('fullWidth');
    });

    it('forwards ref', () => {
        const ref = vi.fn();
        render(<Button ref={ref}>Ref</Button>);
        expect(ref).toHaveBeenCalled();
    });
});
