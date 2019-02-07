import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { number, select, text } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import Pagination from './Pagination.component';
import { wInfo } from '../storybook-utils';
import SPaginationButton from './SPaginationButton';
import SPaginationButtonNextPrev from './SPaginationButtonNextPrev';

storiesOf('Pagination', module).add(
  'Pagination',
  wInfo(`

  ### Notes

  This is a custom pagination control intended for use with the Table component.

  ### Usage
  ~~~js
  <Pagination
    btnSize='md'
    nextText='Next'
    onPageChange={action('Page changed!')}
    onPageChange={action('Page changed!')}
    pages={10}
    page={0}
    PageButtonComponent={SPaginationButton}
    PageButtonNextPrevComponent={SPaginationButtonNextPrev}
    previousText='Previous'
  >
  </Pagination>
  ~~~`)(() => {
    return (
      <Pagination
        btnSize={select('btnSize', ['sm', 'md', 'lg'], 'md')}
        nextText={text('nextText', 'Next')}
        onPageChange={action('Page changed!')}
        pages={number('pages', 10)}
        page={number('page', 0)}
        PageButtonComponent={SPaginationButton}
        PageButtonNextPrevComponent={SPaginationButtonNextPrev}
        previousText={text('previousText', 'Previous')}
      />
    );
  }),
);
