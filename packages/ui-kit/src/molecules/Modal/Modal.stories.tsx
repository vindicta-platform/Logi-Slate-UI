import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { Button } from '../../atoms/Button';
import { useState } from 'react';

const meta: Meta<typeof Modal> = {
    title: 'Molecules/Modal',
    component: Modal,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
    render: (args) => {
        const [open, setOpen] = useState(false);
        return (
            <>
                <Button onClick={() => setOpen(true)}>Open Modal</Button>
                <Modal {...args} open={open} onClose={() => setOpen(false)}>
                    <p>This is a modal dialog with focus trapping and accessibility support.</p>
                </Modal>
            </>
        );
    },
    args: {
        title: 'Example Modal',
    },
};

export const Sizes: Story = {
    render: () => {
        const [size, setSize] = useState<'sm' | 'md' | 'lg'>('md');
        const [open, setOpen] = useState(false);

        const openSize = (s: 'sm' | 'md' | 'lg') => {
            setSize(s);
            setOpen(true);
        };

        return (
            <div style={{ display: 'flex', gap: '8px' }}>
                <Button onClick={() => openSize('sm')}>Small</Button>
                <Button onClick={() => openSize('md')}>Medium</Button>
                <Button onClick={() => openSize('lg')}>Large</Button>
                <Modal open={open} onClose={() => setOpen(false)} size={size} title={`${size.toUpperCase()} Modal`}>
                    <p>Content for {size} modal.</p>
                </Modal>
            </div>
        );
    }
};
