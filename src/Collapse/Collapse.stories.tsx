import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs/react';

import { Collapse } from '../';

storiesOf('Collapse', module).add(
  'Collapse',
  () => (
    <Collapse
      isOpen={boolean('isOpen', false)}
      transition={text(
        'transition',
        'height 300ms cubic-bezier(0.4, 0, 0.2, 1)',
      )}
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </Collapse>
  ),
  {
    info: {
      text: `
        ### Notes

        This is a Collapse
        `,
    },
  },
);
