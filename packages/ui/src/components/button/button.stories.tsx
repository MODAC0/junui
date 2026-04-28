import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from './button.js';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'outline',
        'ghost',
        'destructive',
        'link',
      ],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'icon'],
    },
    block: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: { variant: 'secondary' },
};

export const Outline: Story = {
  args: { variant: 'outline' },
};

export const Ghost: Story = {
  args: { variant: 'ghost' },
};

export const Destructive: Story = {
  args: { variant: 'destructive', children: '삭제' },
};

export const Link: Story = {
  args: { variant: 'link', children: '자세히 보기' },
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-center gap-3">
      <Button {...args} size="sm">
        Small
      </Button>
      <Button {...args} size="md">
        Medium
      </Button>
      <Button {...args} size="lg">
        Large
      </Button>
    </div>
  ),
};

export const Block: Story = {
  args: { block: true, children: '전체 너비' },
  parameters: { layout: 'padded' },
};

export const Disabled: Story = {
  args: { disabled: true, children: 'Disabled' },
};
