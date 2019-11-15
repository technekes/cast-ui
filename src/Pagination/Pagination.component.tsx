import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import SPaginationButton from './SPaginationButton';
import SPaginationButtonNextPrev from './SPaginationButtonNextPrev';
import { Themes } from '../themes/index';
import Select from '../Select/Select.component';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Specify the size of the buttons to use
   *
   * @default 'md'
   **/
  btnSize: 'sm' | 'md' | 'lg';
  /**
   * Specify the text of the next button
   **/
  nextText: string;
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
  PageButtonComponent: any;
  /**
   * Specify the button definition to use for the previous and next buttons
   **/
  PageButtonNextPrevComponent: any;
  /**
   * Specify the text of the previous button
   **/
  previousText: string;
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
  padding: ${(props: any) => props.theme.pagination.padding};
  display: inline-flex;
`;

const SDivPaginationSectionWrapper = styled.div`
  display: inline-block;
`;

const SSpanPageSizeOptionsSelectWrapper = styled.span`
  display: inline-block;
  min-width: 120px;
`;

export class Pagination extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

    this.changePage = this.changePage.bind(this);
    this.changePageSize = this.changePageSize.bind(this);

    this.state = {
      activePage: 1,
      visiblePages: this.getVisiblePages(0, props.pages),
    };
  }
  readonly state: State = initialState;

  static defaultProps = {
    theme: Themes.defaultTheme,
    showPageSizeOptions: false,
    rowsSelectorText: '',
    rowsText: '',
    pageSizeOptions: [5, 10, 20, 25, 50, 100],
    pageSize: 10,
  };

  componentWillReceiveProps(nextProps: Props) {
    const nextActivePage = nextProps.page + 1;
    const nextVisiblePages = this.getVisiblePages(
      nextActivePage,
      nextProps.pages,
    );

    this.setState({
      activePage: nextActivePage,
      visiblePages: this.filterPages(nextVisiblePages, nextProps.pages),
    });

    nextActivePage !== this.state.activePage &&
      this.props.onPageChange!(nextProps.page);
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

  renderPageSizeOptions = ({
    pageSize,
    pageSizeOptions,
    rowsSelectorText,
    rowsText,
  }) => {
    const options = pageSizeOptions.map((option, i) => ({
      pageSize: option,
      label: `${option} ${rowsText}`,
      value: i,
    }));
    const defaultValue = options.find(option => option.pageSize === pageSize);

    return (
      <SSpanPageSizeOptionsSelectWrapper className="select-wrap -pageSizeOptions">
        <Select
          id="paginationRows"
          isMulti={false}
          isDisabled={this.props.pages <= 0}
          selectSize="sm"
          onChange={selectedOption =>
            this.changePageSize(
              Number(this.props.pageSizeOptions[selectedOption.value]),
            )
          }
          options={options}
          controlSpecificProps={{
            defaultValue,
            isSearchable: false,
            'aria-label': { rowsSelectorText },
          }}
        />
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
      PageButtonComponent = SPaginationButton,
      PageButtonNextPrevComponent = SPaginationButtonNextPrev,
      ...props
    } = this.props;

    const { activePage, visiblePages } = this.state;

    return (
      <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
        <SDivPaginationWrapper {...props}>
          {showPageSizeOptions &&
            this.renderPageSizeOptions({
              pageSize,
              pageSizeOptions,
              rowsSelectorText: this.props.rowsSelectorText,
              rowsText: this.props.rowsText,
            })}
          <SDivPaginationSectionWrapper>
            <PageButtonNextPrevComponent
              btnSize="md"
              onClick={() => {
                this.changePage(activePage - 1);
              }}
              disabled={activePage === 1 || this.props.pages === 0}
            >
              {this.props.previousText}
            </PageButtonNextPrevComponent>
          </SDivPaginationSectionWrapper>
          <SDivPaginationSectionWrapper>
            {visiblePages.map(
              (page: number, index: number, array: number[]) => {
                const showPrevNextGap = array[index - 1] + 2 < page;
                const prevNextGapPageIndex =
                  index === array.length - 1 ? array[index - 1] + 2 : page - 2;

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
          </SDivPaginationSectionWrapper>
          <SDivPaginationSectionWrapper>
            <PageButtonNextPrevComponent
              btnSize="md"
              onClick={() => {
                this.changePage(activePage + 1);
              }}
              disabled={activePage === this.props.pages}
            >
              {this.props.nextText}
            </PageButtonNextPrevComponent>
          </SDivPaginationSectionWrapper>
        </SDivPaginationWrapper>
      </ThemeProvider>
    );
  }
}

export default Pagination;
