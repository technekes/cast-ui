import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

const COLLAPSED = 'collapsed';
const COLLAPSING = 'collapsing';
const EXPANDING = 'expanding';
const EXPANDED = 'expanded';

export type Props = {
  isOpen?: boolean;
  children?: any;
  elementType?: any;
  onInit?: any;
  onChange?: any;
  collapseHeight?: any;
  transition?: any;
  className?: any;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

type State = {
  collapseState: any;
  collapseStyle: any;
  hasReversed: boolean;
};

const CWrapper = styled.div`
  .collapse-css-transition {
    overflow: hidden;
    transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export class Collapse extends React.Component<Props, any> {
  state: State;
  content: HTMLElement;

  constructor(props: Props) {
    super(props);

    this.state = {
      collapseState: props.isOpen ? EXPANDED : COLLAPSED,
      collapseStyle: {
        height: getCollapseHeight(props),
        visibility: getCollapseVisibility(props),
      },
      hasReversed: false,
    };
  }

  render() {
    const {
      className,
      children,
      elementType,
      collapseHeight,
      onInit,
      onChange,
      isOpen,
      theme,
      ...props
    } = this.props;

    const transition = this.props.transition
      ? this.props.transition
      : 'height 300ms cubic-bezier(0.4, 0, 0.2, 1)';

    const style = {
      transition,
      ...this.state.collapseStyle,
    };

    const ElementType = elementType || 'div';
    const collapseClassName = `${className || 'collapse-css-transition'} --is-${
      this.state.collapseState
    }`;

    return (
      <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
        <CWrapper>
          <ElementType
            ref={(element: any) => {
              this.content = element;
            }}
            style={style}
            className={collapseClassName}
            onTransitionEnd={this.onTransitionEnd}
            {...props}
          >
            {children}
          </ElementType>
        </CWrapper>
      </ThemeProvider>
    );
  }

  // Detect a new collapse state from props.isOpen change
  static getDerivedStateFromProps(props: Props, state: State) {
    const isOpen =
      state.collapseState === EXPANDED || state.collapseState === EXPANDING;

    if (!isOpen && props.isOpen) {
      return {
        hasReversed: state.collapseState === COLLAPSING,
        collapseState: EXPANDING,
      };
    }
    if (isOpen && !props.isOpen) {
      return {
        hasReversed: state.collapseState === EXPANDING,
        collapseState: COLLAPSING,
      };
    }

    return null;
  }

  componentDidMount() {
    if (this.state.collapseState === EXPANDED) {
      this.setExpanded();
    }
    this.onCallback(this.props.onInit);
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (!this.content) return;

    if (this.state.collapseState === prevState.collapseState) return;

    switch (this.state.collapseState) {
      case EXPANDING:
        this.setExpanding();
        break;
      case COLLAPSING:
        this.setCollapsing();
        break;
      case EXPANDED:
        this.setExpanded();
        break;
      case COLLAPSED:
        this.setCollapsed();
        break;
      // no default
    }
  }

  onTransitionEnd = ({
    target,
    propertyName,
  }: {
    target: any;
    propertyName: any;
  }) => {
    if (target === this.content && propertyName === 'height') {
      switch (this.state.collapseState) {
        case EXPANDING:
          this.setState({ collapseState: EXPANDED });
          break;
        case COLLAPSING:
          this.setState({ collapseState: COLLAPSED });
          break;
        // no default
      }
    }
  };

  getHeight = () => `${this.content.scrollHeight}px`;

  onCallback = (callback: any) => {
    callback &&
      callback({
        ...this.state,
        isMoving: isMoving(this.state.collapseState),
      });
  };

  setCollapsed = () => {
    if (!this.content) return;

    this.setState(
      {
        collapseStyle: {
          height: getCollapseHeight(this.props),
          visibility: getCollapseVisibility(this.props),
        },
      },
      () => this.onCallback(this.props.onChange),
    );
  };

  setCollapsing = () => {
    if (!this.content) return;

    const height = this.getHeight();

    this.setState({
      collapseStyle: {
        height,
        visibility: '',
      },
    });

    nextFrame(() => {
      this.setState(
        {
          collapseStyle: {
            height: getCollapseHeight(this.props),
            visibility: '',
          },
        },
        () => this.onCallback(this.props.onChange),
      );
    });
  };

  setExpanding = () => {
    nextFrame(() => {
      if (this.content) {
        const height = this.getHeight();

        this.setState(
          {
            collapseStyle: {
              height,
              visibility: '',
            },
          },
          () => this.onCallback(this.props.onChange),
        );
      }
    });
  };

  setExpanded = () => {
    if (!this.content) return;

    this.setState(
      {
        collapseStyle: {
          height: '',
          visibility: '',
        },
      },
      () => this.onCallback(this.props.onChange),
    );
  };
}

function nextFrame(callback: any) {
  // Ensure it is always visible on collapsing, afterFrame didn't work
  requestAnimationFrame(() => requestAnimationFrame(callback));
}

function isMoving(collapseState: any) {
  return collapseState === EXPANDING || collapseState === COLLAPSING;
}

function getCollapseHeight(props: Props) {
  return props.collapseHeight || '0px';
}

function getCollapseVisibility(props: Props) {
  return props.collapseHeight ? '' : 'hidden';
}
