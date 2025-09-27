import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { DaysDropDown } from './DaysDropDown';

const meta = {
  title: 'Example/DaysDropDown',
  component: DaysDropDown,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A dropdown component to select a day of the week.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof DaysDropDown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    selectedDay: 'Monday',
    setSelectedDay: () => {},
    isLoading: false,
  },
};

export const LoadingState: Story = {
  args: {
    selectedDay: 'Monday',
    setSelectedDay: () => {},
    isLoading: true,
  },
};
