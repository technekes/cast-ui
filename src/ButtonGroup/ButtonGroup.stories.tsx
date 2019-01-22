import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs/react';
import { wInfo } from '../storybook-utils';

import ButtonGroup from './ButtonGroup.component';
import { Button } from '../Button/Button.component';

storiesOf('ButtonGroup', module).add(
  'ButtonGroup',
  wInfo(`
  ### Notes
  This is a ButtonGroup.  Selected values will end up in the
  ButtonGroup's state.SelectedValues property.
  ### Usage
  ~~~js
  <ButtonGroup role="group" mode='checkbox'>
    <Button btnStyle="primary" btnSize="md"
      value="1"
      onClick={() => console.log('Button 1')}>One</Button>
    <Button btnStyle="primary" btnSize="md"
      value="2"
      onClick={() => console.log('Button 2')}>Two</Button>
    <Button btnStyle="primary" btnSize="md"
      value="3"
      onClick={() => console.log('Button 3')}>Three</Button>
  </ButtonGroup>
  ~~~`)(() => (
    <ButtonGroup role={select('role', ['group', 'toolbar'], 'group')}
      mode={select('mode', ['checkbox', 'radio'], 'checkbox')}>
      <Button btnStyle="primary" btnSize="md"
        value="1" inButtonGroup={true}
        onClick={() => console.log('Button 1')}>One</Button>
      <Button btnStyle="primary" btnSize="md"
        value="2" inButtonGroup={true}
        onClick={() => console.log('Button 2')}>Two</Button>
      <Button btnStyle="primary" btnSize="md"
        value="3" inButtonGroup={true}
        onClick={() => console.log('Button 3')}>Three</Button>
    </ButtonGroup>
  )),
);
