import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs/react';

import { Draggable } from './';
import { wInfo } from '../storybook-utils';

storiesOf('Draggable', module).add(
  'Draggable',
  wInfo(`

  ### Notes

  This is a Draggable

  ### Usage
  ~~~js
    <Draggable
      color="lightGray"
      size={40}
      animationSpeed={2}
    />
  ~~~`)(() => (
    <Draggable
      color={select(
        'color',
        ['lightGray', 'gray', 'blue', 'white', 'red', 'yellow'],
        'lightGray',
      )}
      size={select('btnSize', ['sm', 'md', 'lg'], 'md')}
    />
  )),
);
