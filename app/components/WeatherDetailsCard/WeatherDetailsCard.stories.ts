import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { WeatherDetailsCard } from './WeatherDetailsCard';

const meta = {
  title: 'Example/WeatherDetailsCard',
  component: WeatherDetailsCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Displays a weather metric with a label and its corresponding value.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof WeatherDetailsCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithInfo: Story = {
  args: {
    label: 'Feels like',
    value: '25°',
  },
};

export const LoadingState: Story = {
  args: {
    label: 'Feels like',
    value: undefined,
  },
};
