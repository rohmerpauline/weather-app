import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { WeatherDetailsContainer } from './WeatherDetailsContainer';

const meta = {
  title: 'Example/WeatherDetailsContainer',
  component: WeatherDetailsContainer,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Displays all the weather metrics.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof WeatherDetailsContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
