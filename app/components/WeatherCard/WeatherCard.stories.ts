import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { WeatherCard } from './WeatherCard';

const meta = {
  title: 'Example/WeatherCard',
  component: WeatherCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Displays the day, an icon representing the weather condition, and the min/max temperatures.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof WeatherCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SunnyWeather: Story = {
  args: {
    day: 'Tue',
    weatherCode: 1,
    minTemp: 12,
    maxTemp: 22,
  },
};

export const RainyWeather: Story = {
  args: {
    day: 'Wed',
    weatherCode: 51,
    minTemp: 10,
    maxTemp: 18,
  },
};

export const SnowyWeather: Story = {
  args: {
    day: 'Thu',
    weatherCode: 71,
    minTemp: -2,
    maxTemp: 3,
  },
};

export const CloudyWeather: Story = {
  args: {
    day: 'Fri',
    weatherCode: 3,
    minTemp: 8,
    maxTemp: 15,
  },
};

export const StormyWeather: Story = {
  args: {
    day: 'Sat',
    weatherCode: 95,
    minTemp: 14,
    maxTemp: 20,
  },
};

export const FoggyWeather: Story = {
  args: {
    day: 'Sun',
    weatherCode: 45,
    minTemp: 7,
    maxTemp: 12,
  },
};

export const PartlyCloudyWeather: Story = {
  args: {
    day: 'Mon',
    weatherCode: 1,
    minTemp: 7,
    maxTemp: 12,
  },
};

export const LoadingState: Story = {
  args: {},
};
