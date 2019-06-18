import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, number, select } from '@storybook/addon-knobs/react';

import { Table } from './';

import SampleData from './sampleData';

storiesOf('Table', module).add(
  'Table',
  () => {
    return (
      <div>
        <Table
          data={SampleData.Customers}
          pivotBy={['Id']}
          columns={[
            {
              Header: 'ID',
              accessor: 'Id',
            },
            {
              Header: 'Company Name',
              accessor: 'CompanyName',
            },
            {
              id: 'ContactName',
              Header: 'Contact Name',
              accessor: 'CompanyName',
              className: 'table-column-readonly',
              headerClassName: 'table-column-readonly',
            },
            {
              Header: 'Contact Title',
              accessor: 'ContactTitle',
              className: 'table-column-highlight',
              headerClassName: 'table-column-highlight',
            },
            {
              Header: 'Address',
              accessor: 'Address',
            },
            {
              Header: 'City',
              accessor: 'City',
            },
            {
              Header: 'Postal Code',
              accessor: 'PostalCode',
              className: 'right-align',
              headerClassName: 'right-align',
            },
            {
              Header: 'Country',
              accessor: 'Country',
            },
            {
              Header: 'Phone',
              accessor: 'Phone',
            },
            {
              Header: 'Fax',
              accessor: 'Fax',
            },
          ]}
          getTrProps={(state, rowInfo, column) => {
            let className;
            if (rowInfo.row.Id === 'AROUT') {
              className = 'table-row-readonly';
            } else if (rowInfo.row.Id === 'BOLID') {
              className = 'table-row-highlight';
            }
            return {
              className,
            };
          }}
          tableSize={select('tableSize', ['sm', 'md', 'lg'], 'md')}
          showPagination={boolean('showPagination', true)}
          showPaginationTop={boolean('showPaginationTop', false)}
          showPaginationBottom={boolean('showPaginationBottom', true)}
          showPageSizeOptions={boolean('showPageSizeOptions', true)}
          pageSizeOptions={[5, 10, 25, 50, 100]}
          defaultPageSize={number('defaultPageSize', 10)}
          showPageJump={boolean('showPageJump', true)}
          collapseOnSortingChange={boolean('collapseOnSortingChange', true)}
          collapseOnPageChange={boolean('collapseOnPageChange', true)}
          collapseOnDataChange={boolean('collapseOnDataChange', true)}
          freezeWhenExpanded={boolean('freezeWhenExpanded', true)}
          filterable={boolean('filterable', false)}
          resizable={boolean('resizable', true)}
          sortable={boolean('sortable', true)}
          multiSort={boolean('multiSort', true)}
          striped={boolean('striped', true)}
          sizable={boolean('sizable', true)}
        />
      </div>
    );
  },
  {
    info: {
      text: `
### Notes

This is a wrapped version of [react-table](https://github.com/tannerlinsley/react-table)

It uses the *SelectTable* HOC for the checkbox column.

It uses the Popover component for the row controls on the right most column.

All the options available to react-table can be passed directly from the component.

##### Important note on Pagination

Controlled Pagination's **forcePage** doesn't display the correct page. For example, if "4" is passed into the prop, "5" displays.

It seems that the [react-table](https://github.com/tannerlinsley/react-table) package is built like this by default.

Based on tests running the [official demo](https://github.com/AdeleD/react-paginate#demo), the npm package works the same way as the implementation on here.

Moreover, looking at the tests used by the package, it clearly shows that the intended view for the link should outline +1 of the value of forcePage as evidenced [here](https://github.com/AdeleD/react-paginate/blob/74813adde216ab5337b15556749484b61c9f4500/__tests__/PaginationBoxView-test.js#L756) and [here](https://github.com/AdeleD/react-paginate/blob/74813adde216ab5337b15556749484b61c9f4500/__tests__/PaginationBoxView-test.js#L490)

The same effect is experienced when using **initialPage** props as well.
        `,
    },
  },
);
