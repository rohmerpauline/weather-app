import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { BaseWrapper } from './BaseWrapper';

const meta = {
  title: 'Example/BaseWrapper',
  component: BaseWrapper,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A wrapper for sections that gives all content a consistent dark background and rounded corners.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof BaseWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultWrapper: Story = {
  args: {
    children: 'This is wrapped content',
  },
};
