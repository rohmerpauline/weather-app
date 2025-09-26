import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { UnitsDropDownElement } from './UnitsDropDownElement';

const meta = {
  title: 'Example/UnitsDropDownElement',
  component: UnitsDropDownElement,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Element inside the Units Dropdown. Displays a title and a list of selectable options. Highlights the currently selected option.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof UnitsDropDownElement>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Temperature',
    options: [
      { label: 'Celsius (°C)', value: 'celsius' },
      { label: 'Fahrenheit (°F)', value: 'fahrenheit' },
    ],
    selectedValue: 'celsius',
    onSelect: () => {},
  },
};
