import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs/react';

import { Container, Row, Column } from './';
import { wInfo } from '../storybook-utils';

storiesOf('Layout', module).add(
  'Layout',
  wInfo(`

  ### Notes

  This is the default layout system

  ### Usage
  ~~~js
    <Container fluid="false">
      <Row>
        <Column>We have more coming up</Column>
      </Row>
    </Container>
  ~~~`)(() => (
    <Container fluid={boolean('Fluid', true)}>
      <Row>
        <Column>We have more coming up</Column>
      </Row>
    </Container>
  )),
);
