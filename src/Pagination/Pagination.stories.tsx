import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { number, select } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import Pagination from './Pagination.component';
import { wInfo } from '../storybook-utils';

storiesOf('Pagination', module).add(
  'Pagination',
  wInfo(`

  ### Notes

  This is a custom pagination control.
  `)(() => {
    return (
      <Pagination
        btnSize={select('btnSize', ['sm', 'md', 'lg'], 'md')}
        onPageChange={action('Page changed!')}
        pages={number('pages', 10)}
        page={number('page', 1)}
      />
    );
  }),
);
