import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { SearchContainer } from './SearchContainer';

const meta = {
  title: 'Example/SearchContainer',
  component: SearchContainer,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A container component that includes a SearchInput and a Button.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SearchContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultSearchContainer: Story = {
  args: {},
};
