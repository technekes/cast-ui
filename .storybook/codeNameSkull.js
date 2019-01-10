import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

storiesOf('Code Name Skull', module).add(
  'TKXS Component Library 💀',
  withInfo({
    inline: true,
    source: false,
    text: `
    ### Description
    This is an open source React component library maintained by [TKXS](https://www.tkxs.com).
    Default theme adheres to the 
    [TKXS Design System](https://xd.adobe.com/view/88160b56-513e-4a81-44af-e5309fe8a1f7-fe27/).
  `,
  })(() => <div />),
);
