import * as React from 'react';
// import styled from 'styled-components';

type Props = Partial<{
  theme: any;
  children: any;
  showBrand: boolean;
  showUser: boolean;
}>;

type RenderChildren = (props: Props) => JSX.Element;

// const SNavbar = styled.div`
//   font-family: ${(props: Props) => props.theme.typography.fontFamily};
// `;

// const defaultProps = {
//   showBrand: false,
//   showUser: false,
// };

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
      {(contextValue: Props) =>
        contextValue && contextValue.showBrand ? children : null
      }
    </NavbarConsumer>
  )
  static User: RenderChildren = ({ children }) => (
    <NavbarConsumer>
      {(contextValue: Props) =>
        contextValue && contextValue.showUser ? children : null
      }
    </NavbarConsumer>
  )
  static Menu: RenderChildren = ({ children }) => children;
  static Link: RenderChildren = ({ children }) => children;

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
        {this.props.children}
      </NavbarContext.Provider>
    );
  }
}
