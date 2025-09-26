// .storybook/preview.tsx
import type { Preview } from '@storybook/nextjs-vite';
import { ReactElement } from 'react';

import { FiltersProvider } from '../app/context/FilterContext';
import { WeatherProvider } from '../app/context/WeatherContext';
import '../app/globals.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (StoryFn, context): ReactElement => (
      <FiltersProvider>
        <WeatherProvider>
          <StoryFn {...context} />
        </WeatherProvider>
      </FiltersProvider>
    ),
  ],
};

export default preview;
