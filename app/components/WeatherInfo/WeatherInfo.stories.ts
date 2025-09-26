import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { WeatherInfo } from './WeatherInfo';

const meta = {
  title: 'Example/WeatherInfo',
  component: WeatherInfo,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Styled banner summarizing the the daily forecast for the selected city.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof WeatherInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    currentWeather: {
      temperature: 15,
      feelsLike: 12,
      windSpeed: 23,
      precipitation: 10,
      humidity: 12,
      iconPath: '/images/icon-sunny.webp',
    },
  },
};
