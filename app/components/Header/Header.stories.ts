import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Header } from './Header';

const meta = {
  title: 'Example/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Header of the application displaying the logo and a units dropdown to easily switch measurement units across the application.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
