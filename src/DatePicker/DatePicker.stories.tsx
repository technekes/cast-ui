import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs/react';

import { DatePicker } from './DatePicker.component';
import { wInfo } from '../storybook-utils';

storiesOf('DatePicker', module).add(
  'DatePicker',
  wInfo(`

  ### Notes

  This is a DatePicker

  ### Usage
  ~~~js
    <DatePicker
      color="lightGray"
      size={40}
      animationSpeed={2}
    />
  ~~~`)(() => (
    <DatePicker
      color={select(
        'color',
        ['lightGray', 'gray', 'blue', 'white', 'red', 'yellow'],
        'lightGray',
      )}
      size={select('size', [20, 30, 40, 50, 60], 40)}
      animationSpeed={select('animationSpeed', [1, 2, 3, 4, 5], 2)}
      transitionType={select(
        'transitionType',
        ['ease-in-out', 'ease-in', 'ease-out', 'linear', 'ease'],
        'ease-in-out',
      )}
    />
  )),
);
