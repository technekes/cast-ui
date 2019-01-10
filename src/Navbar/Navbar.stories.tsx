import * as React from 'react';
import { storiesOf } from '@storybook/react';
// import { boolean, select } from '@storybook/addon-knobs/react';
// import { action } from '@storybook/addon-actions';

import { Navbar } from './Navbar.component';
import { wInfo } from '../storybook-utils';

storiesOf('Navbar', module).add(
  'Navbar',
  wInfo(`

  ### Notes

  This is a navbar

  ### Usage
  ~~~js
  <Navbar />
  ~~~`)(() => (
    <Navbar showBrand={true} showUser={true}>
      <Navbar.Brand>Logo</Navbar.Brand>
      <Navbar.Menu>
        <Navbar.Link>Link 1</Navbar.Link>
        <Navbar.Link>Link 2</Navbar.Link>
        {/* <Navbar.Link>
          <Navbar.Dropdown>
            <Navbar.Link>Link 3</Navbar.Link>
            <Navbar.Link>Link 4</Navbar.Link>
          </Navbar.Dropdown>
        </Navbar.Link> */}
      </Navbar.Menu>
      <Navbar.User>User name</Navbar.User>
    </Navbar>
  )),
);
