import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Card } from './Card';

describe('Card', () => {
    it('renders body content', () => {
        render(<Card>Card body</Card>);
        expect(screen.getByText('Card body')).toBeInTheDocument();
    });

    it('renders header when provided', () => {
        render(<Card header="Title">Body</Card>);
        expect(screen.getByText('Title')).toBeInTheDocument();
    });

    it('renders footer when provided', () => {
        render(<Card footer={<button>Save</button>}>Body</Card>);
        expect(screen.getByRole('button', { name: 'Save' })).toBeInTheDocument();
    });

    it('applies glass class', () => {
        const { container } = render(<Card glass>Glass</Card>);
        expect(container.firstChild).toHaveClass('glass');
    });

    it('applies interactive class', () => {
        const { container } = render(<Card interactive>Hover me</Card>);
        expect(container.firstChild).toHaveClass('interactive');
    });

    it('applies compact class', () => {
        const { container } = render(<Card compact>Compact</Card>);
        expect(container.firstChild).toHaveClass('compact');
    });
});
