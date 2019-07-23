import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { toast } from 'react-toastify';

import { Notification } from '../';

storiesOf('Notification', module).add(
  'Notification',
  () => (
    <div>
      <Notification />
      <button onClick={() => toast('Wow so easy !')}>Notify !</button>
    </div>
  ),
  {
    info: {
      text: `
        ### Notes

        This is a Notification

        The default theme mode is dark.
        `,
    },
  },
);
