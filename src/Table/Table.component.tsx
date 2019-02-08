import * as React from 'react';
import styled from 'styled-components';
import Pagination from '../Pagination/Pagination.component';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

type Props = {
  data: any;
  columns: any;
  inputSize: string;

  /**
   * Specify if pagination controls should be shown
   *
   * @default true
   **/
  showPagination?: boolean;
  /**
   * Specify if pagination controls should be shown at the top of the table
   *
   * @default false
   **/
  showPaginationTop?: boolean;
  /**
   * Specify if pagination controls should be shown at the bottom of the table
   *
   * @default true
   **/
  showPaginationBottom?: boolean;
  /**
   * Specify if the page size options dropdown should be shown
   *
   * @default true
   **/
  showPageSizeOptions?: boolean;
  /**
   * Specify the available page size options
   *
   * @default true
   **/
  pageSizeOptions?: number[];
  /**
   * Specify the default page size
   *
   * @default true
   **/
  defaultPageSize?: number;
  /**
   * Specify if the current page number should be editable
   *
   * @default true
   **/
  showPageJump?: boolean;
  /**
   * Specify if hierarchies should be collapsed on sorting change
   *
   * @default true
   **/
  collapseOnSortingChange?: boolean;
  /**
   * Specify if hierarchies should be collapsed on page change
   *
   * @default true
   **/
  collapseOnPageChange?: boolean;
  /**
   * Specify if hierarchies should be collapsed on data change
   *
   * @default true
   **/
  collapseOnDataChange?: boolean;
  /**
   * Specify if scrolling should be infinite
   *
   * @default true
   **/
  freezeWhenExpanded?: boolean;
  /**
   * Specify if the grid should be sortable
   *
   * @default true
   **/
  sortable?: boolean;
  /**
   * Specify if the grid should allow multi-column sorting
   *
   * @default true
   **/
  multiSort?: boolean;
  /**
   * Specify if grid columns should be resizable
   *
   * @default true
   **/
  resizable?: boolean;
  /**
   * Specify if grid data should be filterable
   *
   * @default true
   **/
  filterable?: boolean;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

/* tslint:disable:max-line-length */
const SWrapperDiv = styled.div`
  background: ${(props: any) => props.theme.input.background};
  border: 0;
  font-family: ${(props: any) => props.theme.typography.fontFamily};
  font-size: ${(props: any) => props.theme.common[props.inputSize].fontSize};

  .ReactTable .rt-thead.-header {
    box-shadow: none;
    color: ${(props: any) => props.theme.table.header.color};
  }
  .ReactTable .rt-thead .rt-tr {
    border-bottom-color: ${(props: any) =>
      props.theme.table.header.borderBottomColor};
    border-bottom-style: solid;
    border-bottom-width: 2px;
    font-weight: ${(props: any) => props.theme.table.header.fontWeight};
    text-align: left;
  }
  .ReactTable .rt-tbody .rt-tr {
    border-bottom-color: ${(props: any) =>
      props.theme.table.row.borderBottomColor};
    border-bottom-style: solid;
    border-bottom-width: 1px;
  }
  .ReactTable .rt-tbody .rt-tr:hover {
    background-color: ${(props: any) => props.theme.table.row.hoverColor};
  }
  .ReactTable .rt-thead .rt-th,
  .ReactTable .rt-tbody .rt-td,
  .ReactTable .rt-tfoot .rt-td {
    padding: ${(props: any) =>
      props.theme.common[props.inputSize].tableCellPadding};
    border-right: 0;
  }

  .ReactTable .rt-thead .rt-th.-cursor-pointer,
  .ReactTable .rt-thead .rt-th.rt-resizable-header,
  .ReactTable .rt-thead .rt-th.-sort-asc,
  .ReactTable .rt-thead .rt-td.-sort-asc,
  .ReactTable .rt-thead .rt-th.-sort-desc,
  .ReactTable .rt-thead .rt-td.-sort-desc {
    box-shadow: none;
    outline: none;
  }

  .ReactTable .rt-tbody .rt-tr-group {
    border: 0;
  }

  .ReactTable .rt-thead .rt-th {
    background-repeat: no-repeat;
    background-size: 18px 18px;
    background-position: right 4px center;
  }
  .ReactTable .rt-thead .rt-th.-sort-asc {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48cGF0aCBkPSJNMTYuMDAzIDE4LjYyNmw3LjA4MS03LjA4MUwyNSAxMy40NmwtOC45OTcgOC45OTgtOS4wMDMtOSAxLjkxNy0xLjkxNnoiLz48L3N2Zz4=");
  }
  .ReactTable .rt-thead .rt-th.-sort-desc {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48cGF0aCBkPSJNMTUuOTk3IDEzLjM3NGwtNy4wODEgNy4wODFMNyAxOC41NGw4Ljk5Ny04Ljk5OCA5LjAwMyA5LTEuOTE2IDEuOTE2eiIvPjwvc3ZnPg==");
  }
`;

class Table extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <SWrapperDiv {...this.props}>
        <ReactTable
          PaginationComponent={Pagination}
          data={this.props.data}
          columns={this.props.columns}
          showPagination={this.props.showPagination}
          showPaginationTop={this.props.showPaginationTop}
          showPaginationBottom={this.props.showPaginationBottom}
          showPageSizeOptions={this.props.showPageSizeOptions}
          pageSizeOptions={this.props.pageSizeOptions}
          defaultPageSize={this.props.defaultPageSize}
          showPageJump={this.props.showPageJump}
          collapseOnSortingChange={this.props.collapseOnSortingChange}
          collapseOnPageChange={this.props.collapseOnPageChange}
          collapseOnDataChange={this.props.collapseOnDataChange}
          freezeWhenExpanded={this.props.freezeWhenExpanded}
          sortable={this.props.sortable}
          multiSort={this.props.multiSort}
          resizable={this.props.resizable}
          filterable={this.props.filterable}
          nextText="Next >"
          previousText="< Previous"
        />
      </SWrapperDiv>
    );
  }
}

export default Table;
