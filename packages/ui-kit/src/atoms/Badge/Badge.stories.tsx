import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
    title: 'Atoms/Badge',
    component: Badge,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Info: Story = {
    args: {
        variant: 'info',
        children: 'Info',
    },
};

export const Success: Story = {
    args: {
        variant: 'success',
        children: 'Success',
    },
};

export const Warning: Story = {
    args: {
        variant: 'warning',
        children: 'Warning',
    },
};

export const Error: Story = {
    args: {
        variant: 'error',
        children: 'Error',
    },
};

export const Small: Story = {
    args: {
        size: 'sm',
        children: 'Small',
    },
};
