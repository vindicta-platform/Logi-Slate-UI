import type { Meta, StoryObj } from '@storybook/react';
import { ToastProvider, useToast } from './Toast';
import { Button } from '../../atoms/Button';

const ToastDemo = () => {
    const { toast } = useToast();

    return (
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <Button variant="ghost" onClick={() => toast({ title: 'Info', message: 'Something happened', variant: 'info' })}>
                Info Toast
            </Button>
            <Button variant="primary" onClick={() => toast({ title: 'Success', message: 'Operation complete!', variant: 'success' })}>
                Success Toast
            </Button>
            <Button variant="ghost" onClick={() => toast({ title: 'Warning', message: 'Check your inputs', variant: 'warning' })}>
                Warning Toast
            </Button>
            <Button variant="danger" onClick={() => toast({ title: 'Error', message: 'System failure', variant: 'error' })}>
                Error Toast
            </Button>
        </div>
    );
};

const meta: Meta = {
    title: 'Molecules/Toast',
    decorators: [
        (Story) => (
            <ToastProvider>
                <Story />
            </ToastProvider>
        ),
    ],
};

export default meta;

export const Demo: StoryObj = {
    render: () => <ToastDemo />,
};
