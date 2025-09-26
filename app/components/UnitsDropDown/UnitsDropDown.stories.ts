import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { UnitsDropDown } from './UnitsDropDown';

const meta = {
  title: 'Example/UnitsDropDown',
  component: UnitsDropDown,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A dropdown component for selecting units.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof UnitsDropDown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
