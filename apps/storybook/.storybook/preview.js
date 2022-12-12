import React from 'react';

import { TarThemeProvider } from '@tar/core';
import themes from '@tar/themes';

import './styles/global.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  Story => (
    <TarThemeProvider theme={themes.dark}>
      <Story />
    </TarThemeProvider>
  ),
];
