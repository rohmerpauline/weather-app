import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { WeatherInfoContainer } from './WeatherInfoContainer';

const meta = {
  title: 'Example/WeatherInfoContainer',
  component: WeatherInfoContainer,
  parameters: {
    layout: 'fullscreen',
    description: {
      component: 'Part of the app that displays the current weather and associated details.',
    },
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof WeatherInfoContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
