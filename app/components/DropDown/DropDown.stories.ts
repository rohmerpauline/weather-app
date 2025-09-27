import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { DropDown } from './DropDown';

const meta = {
  title: 'Example/DropDown',
  component: DropDown,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A reusable dropdown trigger with label, optional icon, and chevron',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof DropDown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DropDownIcon: Story = {
  args: {
    label: 'Units',
    iconPath: '/images/icon-units.svg',
    onClick: () => {},
    height: 'medium',
  },
};

export const DropDownNoIcon: Story = {
  args: {
    label: 'Tuesday',
    onClick: () => {},
    height: 'small',
  },
};

export const LoadingState: Story = {
  args: {
    label: '-',
    onClick: () => {},
    height: 'small',
  },
};
