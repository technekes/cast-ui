import * as React from 'react';
import styled from 'styled-components';

type Props = Partial<{
  theme: any;
  children: any;
  position: 'top' | 'bottom';
  sticky: boolean;
  fixed: boolean;
  showBrand: boolean;
  showUser: boolean;
}>;

type CompoundProps = Props & {
  left?: boolean;
  right?: boolean;
  center?: boolean;
};

type RenderChildren = (props: CompoundProps) => JSX.Element;

const SNavbar = styled.div`
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  position: ${(props: Props) =>
    props.fixed ? 'absolute' : props.sticky ? 'sticky' : 'relative'};
  position: ${(props: Props) =>
    props.fixed ? 'absolute' : props.sticky ? '-webkit-sticky' : 'relative'};
  top: 0;
  background: ${(props: Props) => props.theme.nav.background};
  color: ${(props: Props) => props.theme.nav.color};
  height: ${(props: Props) => props.theme.nav.height};
  .navbar-menu {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
`;

const NavbarConsumer = (props: Props) => {
  return (
    <NavbarContext.Consumer>
      {(context: Props) => {
        if (!context) {
          throw new Error(
            'Navbar compound components must be rendered within the Navbar component.',
          );
        }
        return props.children(context);
      }}
    </NavbarContext.Consumer>
  );
};

const NavbarContext = React.createContext<Props | null>(null);

export class Navbar extends React.Component<Props> {
  static Brand: RenderChildren = ({ children }) => (
    <NavbarConsumer>
      {(contextValue: CompoundProps) =>
        contextValue && contextValue.showBrand ? (
          <div className="navbar-brand">{children}</div>
        ) : null
      }
    </NavbarConsumer>
  )
  static User: RenderChildren = ({ children }) => (
    <NavbarConsumer>
      {(contextValue: CompoundProps) =>
        contextValue && contextValue.showUser ? (
          <div className="navbar-user">{children}</div>
        ) : null
      }
    </NavbarConsumer>
  )
  static Menu: RenderChildren = ({ children }) => (
    <div className="navbar-menu">{children}</div>
  )
  static Link: RenderChildren = ({ children }) => (
    <div className="navbar-link">{children}</div>
  )

  public render() {
    // event handlers should be placed in state to prevent unnecessary
    // re-renders on context value change
    return (
      <NavbarContext.Provider
        value={{
          showBrand: this.props.showBrand,
          showUser: this.props.showUser,
        }}
      >
        <SNavbar className="navbar" {...this.props}>
          {this.props.children}
        </SNavbar>
      </NavbarContext.Provider>
    );
  }
}
