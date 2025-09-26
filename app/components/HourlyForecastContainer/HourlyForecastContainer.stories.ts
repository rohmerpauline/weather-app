import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { HourlyForecastContainer } from './HourlyForecastContainer';

const meta = {
  title: 'Example/HourlyForecastContainer',
  component: HourlyForecastContainer,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Displays the hourly weather forecast for the selected day. The day can be chosen using the dropdown above.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof HourlyForecastContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
