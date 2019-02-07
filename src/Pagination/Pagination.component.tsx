import * as React from 'react';
import styled from 'styled-components';
import SPaginationButton from './SPaginationButton';
import SPaginationButtonNextPrev from './SPaginationButtonNextPrev';

type Props = {
  /**
   * Specify the size of the buttons to use
   **/
  btnSize: string;
  /**
   * Specify the text of the next button
   **/
  nextText: string;
  /**
   * Specify the function to fire when a page is changed
   **/
  onPageChange: any;
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
};

const initialState = {
  visiblePages: [],
};
type State = {
  visiblePages: number[];
};

const SDivPaginationWrapper = styled.div`
  padding: ${(props: any) => props.theme.table.pagination.padding};
`;

const SDivPaginationSectionWrapper = styled.div`
  display: inline-block;
`;

class TablePagination extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

    this.changePage = this.changePage.bind(this);

    this.state = {
      visiblePages: this.getVisiblePages(0, props.pages),
    };
  }
  readonly state: State = initialState;

  componentWillReceiveProps(nextProps: Props) {
    if (this.props.pages !== nextProps.pages) {
      this.setState({
        visiblePages: this.getVisiblePages(0, nextProps.pages),
      });
    }

    this.changePage(nextProps.page + 1);
  }

  filterPages = (visiblePages: number[], totalPages: number) => {
    return visiblePages.filter((page: number) => page <= totalPages);
  }

  getVisiblePages = (page: number, total: number) => {
    if (total < 7) {
      return this.filterPages([1, 2, 3, 4, 5, 6], total);
    }

    if (page % 5 >= 0 && page > 4 && page + 2 < total) {
      return [1, page - 1, page, page + 1, total];
    }
    if (page % 5 >= 0 && page > 4 && page + 2 >= total) {
      return [1, total - 3, total - 2, total - 1, total];
    }
    return [1, 2, 3, 4, 5, total];
  }

  changePage(page: number) {
    const activePage = this.props.page + 1;

    if (page === activePage) {
      return;
    }

    const visiblePages = this.getVisiblePages(page, this.props.pages);

    this.setState({
      visiblePages: this.filterPages(visiblePages, this.props.pages),
    });

    this.props.onPageChange(page - 1);
  }

  render() {
    const { PageButtonComponent = SPaginationButton } = this.props;
    const {
      PageButtonNextPrevComponent = SPaginationButtonNextPrev,
    } = this.props;
    const { visiblePages } = this.state;
    const activePage = this.props.page + 1;

    return (
      <SDivPaginationWrapper>
        <SDivPaginationSectionWrapper>
          <PageButtonNextPrevComponent
            btnSize="md"
            onClick={() => {
              if (activePage === 1) return;
              this.changePage(activePage - 1);
            }}
            disabled={activePage === 1}
          >
            {this.props.previousText}
          </PageButtonNextPrevComponent>
        </SDivPaginationSectionWrapper>
        <SDivPaginationSectionWrapper>
          {visiblePages.map((page: number, index: number, array: number[]) => {
            return (
              <PageButtonComponent
                btnSize="md"
                key={page}
                data-selected={activePage === page ? '' : undefined}
                onClick={this.changePage.bind(null, page)}
              >
                {array[index - 1] + 2 < page ? `...${page}` : page}
              </PageButtonComponent>
            );
          })}
        </SDivPaginationSectionWrapper>
        <SDivPaginationSectionWrapper>
          <PageButtonNextPrevComponent
            btnSize="md"
            onClick={() => {
              if (activePage === this.props.pages) return;
              this.changePage(activePage + 1);
            }}
            disabled={activePage === this.props.pages}
          >
            {this.props.nextText}
          </PageButtonNextPrevComponent>
        </SDivPaginationSectionWrapper>
      </SDivPaginationWrapper>
    );
  }
}

export default TablePagination;
