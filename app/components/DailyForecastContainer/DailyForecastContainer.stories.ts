import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { DailyForecastContainer } from './DailyForecastContainer';

const meta = {
  title: 'Example/DailyForecastContainer',
  component: DailyForecastContainer,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Shows the upcoming daily weather forecast in a simple, easy-to-read grid. Each card displays the day, expected weather, and temperature range.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof DailyForecastContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    day: 'Tue',
    weatherCode: 1,
    minTemp: 12,
    maxTemp: 22,
  },
};
