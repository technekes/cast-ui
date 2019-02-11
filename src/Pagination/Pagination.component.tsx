import * as React from 'react';
import styled from 'styled-components';
import SPaginationButton from './SPaginationButton';
import SPaginationButtonNextPrev from './SPaginationButtonNextPrev';

type Props = {
  /**
   * Specify the size of the buttons to use
   * @default 'md'
   **/
  btnSize?: string;
  /**
   * Specify the text of the next button
   * @default 'Next'
   **/
  nextText?: string;
  /**
   * Specify the function to fire when a page is changed
   **/
  onPageChange: (page: number) => any;
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
   * Specify the text of the previous button
   * @default 'Previous'
   **/
  previousText?: string;
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

const initialState: State = {
  visiblePages: [],
  page: 1,
};
type State = {
  visiblePages: number[];
  page: number;
};

const SDivPaginationWrapper = styled.div`
  padding: ${(props: any) => props.theme.table.pagination.padding};
`;

const SDivPaginationSectionWrapper = styled.div`
  display: inline-block;
`;

class Pagination extends React.Component<Props> {
  readonly state: State = initialState;
  constructor(props: Props) {
    super(props);
    this.changePage = this.changePage.bind(this);
  }

  componentDidMount() {
    this.setState({
      visiblePages: this.getVisiblePages(this.props.page, this.props.pages),
      page: this.props.page || initialState.page,
    });
    debugger;
    console.log('state: ', this.state);
    console.log('props: ', this.props);
  }

  componentWillReceiveProps(nextProps: Props) {
    if (this.props.pages !== nextProps.pages) {
      this.setState({
        visiblePages: this.getVisiblePages(nextProps.page, nextProps.pages),
      });
    }
    this.changePage(nextProps.page);
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
    const activePage = this.props.page;
    if (page === activePage) {
      return;
    }
    const visiblePages = this.getVisiblePages(page, this.props.pages);
    this.setState({
      page,
      visiblePages: this.filterPages(visiblePages, this.props.pages),
    });
    this.props.onPageChange(page);
  }

  render() {
    const { PageButtonComponent = SPaginationButton } = this.props;
    const {
      PageButtonNextPrevComponent = SPaginationButtonNextPrev,
    } = this.props;
    const { visiblePages } = this.state;
    const activePage = this.state.page;

    return (
      <SDivPaginationWrapper>
        <SDivPaginationSectionWrapper>
          <PageButtonNextPrevComponent
            btnSize={this.props.btnSize || 'md'}
            onClick={() => {
              if (activePage === 1) return;
              this.changePage(activePage - 1);
            }}
            disabled={activePage === 1}
          >
            {this.props.previousText || 'Previous'}
          </PageButtonNextPrevComponent>
        </SDivPaginationSectionWrapper>
        <SDivPaginationSectionWrapper>
          {visiblePages.map((page: number, index: number, array: number[]) => {
            return (
              <PageButtonComponent
                btnSize={this.props.btnSize || 'md'}
                key={page}
                data-selected={activePage === page ? '' : undefined}
                onClick={this.changePage.bind(null, page)}
              >
                {array[index] + 1 < page ? `...${page}` : page}
              </PageButtonComponent>
            );
          })}
        </SDivPaginationSectionWrapper>
        <SDivPaginationSectionWrapper>
          <PageButtonNextPrevComponent
            btnSize={this.props.btnSize || 'md'}
            onClick={() => {
              if (activePage === this.props.pages) return;
              this.changePage(activePage + 1);
            }}
            disabled={activePage === this.props.pages}
          >
            {this.props.nextText || 'Next'}
          </PageButtonNextPrevComponent>
        </SDivPaginationSectionWrapper>
      </SDivPaginationWrapper>
    );
  }
}

export default Pagination;
