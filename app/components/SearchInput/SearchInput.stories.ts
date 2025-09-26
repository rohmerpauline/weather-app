import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { SearchInput } from './SearchInput';

const meta = {
  title: 'Example/SearchInput',
  component: SearchInput,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A search input that filters and displays a dropdown of cities as you type.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
  },
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultSearchInput: Story = {
  args: {
    value: '',
    placeholder: 'Search for a place...',
    onChange: () => {},
  },
};
