import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Input } from './Input';

describe('Input', () => {
    it('renders with label', () => {
        render(<Input label="Email" />);
        expect(screen.getByLabelText('Email')).toBeInTheDocument();
    });

    it('renders with placeholder', () => {
        render(<Input placeholder="Enter email" />);
        expect(screen.getByPlaceholderText('Enter email')).toBeInTheDocument();
    });

    it('shows error message with role=alert', () => {
        render(<Input label="Email" error="Invalid email" />);
        const alert = screen.getByRole('alert');
        expect(alert).toHaveTextContent('Invalid email');
    });

    it('links error to input via aria-describedby', () => {
        render(<Input label="Email" error="Bad" />);
        const input = screen.getByLabelText('Email');
        expect(input).toHaveAttribute('aria-invalid', 'true');
        const describedById = input.getAttribute('aria-describedby');
        expect(describedById).toBeTruthy();
        expect(document.getElementById(describedById!)).toHaveTextContent('Bad');
    });

    it('shows hint text', () => {
        render(<Input label="Name" hint="Your full name" />);
        expect(screen.getByText('Your full name')).toBeInTheDocument();
    });

    it('does not show hint when error is present', () => {
        render(<Input label="X" error="Err" hint="Hint" />);
        expect(screen.queryByText('Hint')).not.toBeInTheDocument();
        expect(screen.getByText('Err')).toBeInTheDocument();
    });

    it('handles disabled state', () => {
        render(<Input label="Disabled" disabled />);
        expect(screen.getByLabelText('Disabled')).toBeDisabled();
    });

    it('shows required indicator', () => {
        render(<Input label="Name" required />);
        expect(screen.getByText('*')).toBeInTheDocument();
    });

    it('fires onChange', () => {
        render(<Input label="Name" />);
        const input = screen.getByLabelText('Name');
        fireEvent.change(input, { target: { value: 'test' } });
        expect(input).toHaveValue('test');
    });
});
