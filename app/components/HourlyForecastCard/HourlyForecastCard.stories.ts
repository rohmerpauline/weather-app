import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { HourlyForecastCard } from './HourlyForecastCard';

const meta = {
  title: 'Example/HourlyForecastCard',
  component: HourlyForecastCard,
  parameters: {
    layout: 'padded',
    description: {
      component:
        'Displays the hour of the day, an icon representing the weather condition, and the temperature.',
    },
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof HourlyForecastCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SunnyAM: Story = {
  args: {
    timeOfDay: '2025-09-24T06:00',
    weatherCode: 1,
    temp: 20,
  },
};

export const RainyPM: Story = {
  args: {
    timeOfDay: '2025-09-24T15:00',
    weatherCode: 61,
    temp: 25,
  },
};
