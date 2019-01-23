import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../src/themes/default';

addDecorator(withInfo);
addDecorator(withKnobs);
addDecorator(story => (
  <ThemeProvider theme={defaultTheme}>{story()}</ThemeProvider>
));

// automatically import all files ending in *.stories.tsx
const req = require.context('../src', true, /.stories.tsx$/);
function loadStories() {
  require('./castUI');
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
