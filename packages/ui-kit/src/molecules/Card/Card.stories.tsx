import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Button } from '../../atoms/Button';

const meta: Meta<typeof Card> = {
    title: 'Molecules/Card',
    component: Card,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
    args: {
        children: 'This is a standard card component.',
    },
};

export const Glass: Story = {
    args: {
        glass: true,
        header: 'Glassmorphism',
        children: 'Subtle backdrop blur and translucent background.',
    },
};

export const Interactive: Story = {
    args: {
        interactive: true,
        header: 'Hover Me',
        children: 'Card will lift and scale slightly on hover.',
    },
};

export const FullFeatured: Story = {
    args: {
        glass: true,
        header: 'Unit: Intercessors',
        children: (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <p>1x Intercessor Sergeant</p>
                <p>9x Intercessors</p>
                <p style={{ color: 'var(--v-primary)', fontWeight: 'bold' }}>200 pts</p>
            </div>
        ),
        footer: (
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
                <Button size="sm" variant="ghost">Remove</Button>
                <Button size="sm" variant="primary">Edit</Button>
            </div>
        ),
    },
};
