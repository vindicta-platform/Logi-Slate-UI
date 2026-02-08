import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
    title: 'Atoms/Input',
    component: Input,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
    args: {
        label: 'Username',
        placeholder: 'Enter your username',
    },
};

export const Floating: Story = {
    args: {
        label: 'Email',
        floating: true,
        placeholder: ' ',
    },
};

export const WithError: Story = {
    args: {
        label: 'Password',
        type: 'password',
        error: 'Password must be at least 8 characters',
    },
};

export const WithHint: Story = {
    args: {
        label: 'API Key',
        hint: 'Generated from your project dashboard',
    },
};

export const Required: Story = {
    args: {
        label: 'Team Name',
        required: true,
    },
};
