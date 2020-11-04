import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import {
  PaginationPageButton,
  PaginationButtonNextPrev,
  PaginationButtonFirstLast,
} from './PaginationButtons';
import { Themes } from '../themes/index';
import Select from '../Select/Select.component';
import uuid from 'uuid';
export const PAGE_SIZE_OPTIONS = [10, 20, 50, 100];
export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Specify the function to fire when a page is changed
   **/
  onPageChange?(page: number): any;
  /**
   * Specify the total number of pages
   **/
  pages: number;
  /**
   * Specify the currently selected page (zero-based)
   **/
  page: number;
  /**
   * Specify the button definition to use for the individual page buttons
   **/
  PageButtonComponent?: any;
  /**
   * Specify the button definition to use for the previous and next buttons
   **/
  PageButtonNextPrevComponent?: any;
  /**
   * Specify the button definition to use for the first and last buttons
   **/
  PageButtonFirstLastComponent?: any;
  /**
   * Specify any child objects (if applicable)
   **/
  children?: any;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
  onPageSizeChange?(pageSize: number, page?: number): any;
  onFetchData?: () => {};
  showPageSizeOptions?: boolean;
  pageSize?: number;
  pageSizeOptions: [];
  rowsSelectorText?: string;
  rowsText?: string;
}
const initialState = {
  activePage: 1,
  visiblePages: [],
};
type State = {
  activePage: number;
  visiblePages: number[];
};
const SDivPaginationWrapper = styled.div`
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: ${props => props.theme.body.fontSize}
  padding: ${props => props.theme.pagination.padding};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const SSpanPageSizeOptionsSelectWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.pagination.text};
  .select-wrapper {
    min-width: 80px;
  }
  .showText {
    margin-left: 8px;
    white-space: nowrap;
  }
`;
const SPagninationControls = styled.div`
  display: flex;
  align-items: center;
`;
export class Pagination extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.changePage = this.changePage.bind(this);
    this.changePageSize = this.changePageSize.bind(this);
    this.state = {
      activePage: props.page + 1,
      visiblePages: this.getVisiblePages(0, props.pages),
    };
  }
  readonly state: State = initialState;
  static defaultProps = {
    theme: Themes.defaultTheme,
    btnSize: 'md',
    showPageSizeOptions: false,
    rowsSelectorText: '',
    rowsText: '',
    page: 0,
    pageSizeOptions: PAGE_SIZE_OPTIONS,
    pageSize: 10,
  };
  componentWillReceiveProps(nextProps: Props) {
    if (this.props.pages !== nextProps.pages) {
      this.setState({
        activePage: this.props.page + 1,
        visiblePages: this.getVisiblePages(0, nextProps.pages),
      });
    } else {
      this.changePage(nextProps.page + 1);
    }
  }
  filterPages = (visiblePages: number[], totalPages: number) => {
    return visiblePages.filter((page: number) => page <= totalPages);
  };
  getVisiblePages = (page: number, total: number) => {
    if (total < 7) {
      return this.filterPages([1, 2, 3, 4, 5, 6], total);
    }
    if (page % 5 >= 0 && page > 4 && page + 3 < total) {
      return [1, page - 1, page, page + 1, total];
    }
    if (page % 5 >= 0 && page > 4 && page + 3 >= total) {
      return [1, total - 3, total - 2, total - 1, total];
    }
    return [1, 2, 3, 4, 5, total];
  };
  changePage(page: number) {
    if (page === this.state.activePage) {
      return;
    }
    const visiblePages = this.getVisiblePages(page, this.props.pages);
    this.setState({
      activePage: page,
      visiblePages: this.filterPages(visiblePages, this.props.pages),
    });
    this.props.onPageChange!(page - 1);
  }
  changePageSize(pageSize: number, page?: number) {
    if (this.props.onPageSizeChange) {
      this.props.onPageSizeChange(pageSize);
    }
  }
  renderPageSizeOptions = props => {
    const { pageSize, pageSizeOptions, rowsSelectorText, rowsText } = props;
    const options = pageSizeOptions.map((option, i) => ({
      pageSize: option,
      label: `${option} ${rowsText}`,
      value: i,
    }));
    const selectedOption = options.find(option => option.pageSize === pageSize);
    return (
      <SSpanPageSizeOptionsSelectWrapper className="select-wrap -pageSizeOptions">
        <Select
          id={uuid.v4()}
          isMulti={false}
          isDisabled={this.props.pages <= 0}
          selectSize="md"
          onChange={selectedOption =>
            this.changePageSize(
              Number(this.props.pageSizeOptions[selectedOption.value]),
            )
          }
          options={options}
          selectedOption={selectedOption}
          controlSpecificProps={{
            defaultValue: selectedOption,
            isSearchable: false,
            'aria-label': rowsSelectorText,
          }}
        />
        <div className="showText">Rows per page</div>
      </SSpanPageSizeOptionsSelectWrapper>
    );
  };
  render() {
    const {
      theme,
      onFetchData,
      onPageSizeChange,
      onPageChange,
      pageSize,
      showPageSizeOptions,
      pageSizeOptions,
      PageButtonComponent = PaginationPageButton,
      PageButtonNextPrevComponent = PaginationButtonNextPrev,
      PageButtonFirstLastComponent = PaginationButtonFirstLast,
      ...props
    } = this.props;
    const { activePage, visiblePages } = this.state;
    return (
      <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
        <SDivPaginationWrapper>
          {showPageSizeOptions &&
            this.renderPageSizeOptions({
              pageSize,
              pageSizeOptions,
              ...props,
            })}
          <SPagninationControls>
            <PageButtonFirstLastComponent
              disabled={activePage === 1}
              isForwardDirection={false}
              onClick={() => {
                this.changePage(1);
              }}
            />
            <PageButtonNextPrevComponent
              disabled={activePage === 1}
              isForwardDirection={false}
              onClick={() => {
                this.changePage(activePage - 1);
              }}
            />
            <div>
              {visiblePages.map(
                (page: number, index: number, array: number[]) => {
                  const showPrevNextGap = array[index - 1] + 2 < page;
                  const prevNextGapPageIndex =
                    index === array.length - 1
                      ? array[index - 1] + 2
                      : page - 2;
                  return (
                    <span key={page}>
                      {showPrevNextGap && (
                        <PageButtonComponent
                          btnSize="md"
                          onClick={this.changePage.bind(
                            null,
                            prevNextGapPageIndex,
                          )}
                        >
                          ...
                        </PageButtonComponent>
                      )}
                      <PageButtonComponent
                        btnSize="md"
                        data-selected={activePage === page ? '' : undefined}
                        onClick={this.changePage.bind(null, page)}
                      >
                        {page}
                      </PageButtonComponent>
                    </span>
                  );
                },
              )}
            </div>
            <PageButtonNextPrevComponent
              disabled={activePage === this.props.pages}
              isForwardDirection={true}
              onClick={() => {
                this.changePage(activePage + 1);
              }}
            />
            <PageButtonFirstLastComponent
              disabled={activePage === this.props.pages}
              isForwardDirection={true}
              onClick={() => {
                this.changePage(this.props.pages);
              }}
            />
          </SPagninationControls>
        </SDivPaginationWrapper>
      </ThemeProvider>
    );
  }
}
export default Pagination;
