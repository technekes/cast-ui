import * as React from 'react';
import styled from 'styled-components';
import { SideNavContext, propsDeepSearch } from './context';
import { SideNavToggle } from '../';

export type Props = {
  /**
   * Expand/collapse the sidebar
   *
   * @default false
   **/
  isOpen?: boolean;
  /**
   * A color defined in theme colors or a CSS color code
   * or shorthand string for setting element background
   *
   * @default 'white'
   **/
  background?: string;
  /**
   * The shorthand string for setting element border-top
   *
   * @default ''
   **/
  borderLeft?: string;
  /**
   * The shorthand string for setting element border-bottom
   *
   * @default ''
   **/
  borderRight?: string;
  /**
   * Adjust SideNavbar height.
   *
   * @default ''
   **/
  height?: string;
  /**
   * Adjust SideNavbar width.
   *
   * @default '50px'
   **/
  width?: string;
  /**
   * Expand/collapse the secondary sidebar
   *
   * @default false
   **/
  isSecondaryNavbarOpen?: boolean;
  /**
   * Adjust width of Secondary SideNavbar.
   *
   * @default '170px'
   **/
  secondaryNavbarWidth?: string;
  /**
   * Adjust height of Secondary SideNavbar.
   *
   * @default ''
   **/
  secondaryNavbarHeight?: string;
  /**
   * A color defined in theme colors or a CSS color code
   * or shorthand string for setting element background
   *
   * @default ''
   **/
  secondaryNavbarBackground?: string;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

const SSideNavbar = styled.div`
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.sidenav.fontSize};
  color: ${(props: Props) => props.theme.sidenav.color};
  height: ${(props: Props) => props.height || props.theme.sidenav.height};
  padding: ${(props: Props) => props.theme.sidenav.padding};
  margin: ${(props: Props) => props.theme.sidenav.margin};
  z-index: ${(props: Props) => props.theme.sidenav.zIndex};
  background: ${(props: Props) =>
    props.theme.colors[props.background!] ||
    props.background!.toString() ||
    props.theme.sidenav.background};
  border-left: ${(props: Props) =>
    props.borderLeft!.toString() || props.theme.sidenav.borderLeft};
  border-right: ${(props: Props) =>
    props.borderRight!.toString() || props.theme.sidenav.borderRight};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  min-width: ${(props: Props) =>
    props.width ||
    (props.isOpen ? props.theme.sidenav.openWidth : props.theme.sidenav.width)};
  transition: ${(props: Props) => props.theme.sidenav.transition};
  display: flex;
  flex-direction: column;
`;
const SSecondarySideNavbar = styled.div`
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.sidenav.fontSize};
  color: ${(props: Props) => props.theme.sidenav.color};
  height: ${(props: Props) =>
    props.secondaryNavbarHeight || props.theme.sidenav.secondaryNavbar.height};
  padding: ${(props: Props) => props.theme.sidenav.secondaryNavbar.padding};
  margin: ${(props: Props) => props.theme.sidenav.secondaryNavbar.margin};
  z-index: ${(props: Props) => props.theme.sidenav.secondaryNavbar.zIndex};
  background: ${(props: Props) =>
    props.theme.colors[props.secondaryNavbarBackground!] ||
    props.secondaryNavbarBackground!.toString() ||
    props.theme.sidenav.secondaryNavbar.background};
  border-left: ${(props: Props) =>
    props.borderLeft!.toString() ||
    props.theme.sidenav.secondaryNavbar.borderLeft};
  border-right: ${(props: Props) =>
    props.borderRight!.toString() ||
    props.theme.sidenav.secondaryNavbar.borderRight};
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props: Props) =>
    props.width ||
    (props.isOpen ? props.theme.sidenav.openWidth : props.theme.sidenav.width)};
  width: ${(props: Props) =>
    props.secondaryNavbarWidth ||
    (props.isSecondaryNavbarOpen
      ? props.theme.sidenav.secondaryNavbar.openWidth
      : props.theme.sidenav.secondaryNavbar.width)};
  transition: ${(props: Props) =>
    props.theme.sidenav.secondaryNavbar.transition};
  visibility: ${(props: any) =>
    props.isSecondaryNavbarOpen ? 'visible' : 'hidden'};
  display: flex;
  flex-direction: column;
`;

export const SideNavbar: React.FunctionComponent<Props> = ({
  isOpen = false,
  isSecondaryNavbarOpen = false,
  children,
  ...props
}) => {
  const [primaryToggle, setPrimaryToggle] = React.useState(isOpen);
  const [secondaryToggle, setSecondaryToggle] = React.useState(
    isSecondaryNavbarOpen,
  );
  const newProps = {
    ...props,
    isOpen: primaryToggle,
    isSecondaryNavbarOpen: secondaryToggle,
    primaryToggle,
    secondaryToggle,
    setSecondaryToggle,
    setPrimaryToggle,
  };

  // Perform deep search through sidenavbar props
  // Select the 'activeSideNavItem' and search through its children.
  // If a child has a SideNav with the 'secondary' prop set to true,
  // its children will automatically be displayed in the secondary SideNavbar
  const activeSideNavItems: any = [];
  propsDeepSearch(children, 'activeSideNavItem', true, activeSideNavItems);
  let activeSideNavItemsChildren: any = [];
  activeSideNavItems.map((child: any) => {
    activeSideNavItemsChildren = [
      ...activeSideNavItemsChildren,
      ...child.children.filter((child: any) =>
        child.props ? child.props.secondary : false,
      ),
    ];
  });

  // Allow user to override the state of toggle buttons
  React.useEffect(() => {
    setPrimaryToggle(isOpen);
    setSecondaryToggle(isSecondaryNavbarOpen);
    // tslint:disable-next-line
  }, [isOpen, isSecondaryNavbarOpen]);
  return (
    <SideNavContext.Provider
      value={{
        baseProps: {
          ...newProps,
          isOpen: primaryToggle,
          isSecondaryNavbarOpen: secondaryToggle,
          primaryToggle,
          secondaryToggle,
          setSecondaryToggle,
          setPrimaryToggle,
        },
      }}
    >
      <SSideNavbar role="side-nav-bar" {...newProps}>
        <SideNavToggle
          onClick={() =>
            setPrimaryToggle(!(newProps.primaryToggle || newProps.isOpen))
          }
        >
          Open
        </SideNavToggle>
        {children}
      </SSideNavbar>
      <SSecondarySideNavbar role="secondary-side-nav-bar" {...newProps}>
        {activeSideNavItemsChildren}
      </SSecondarySideNavbar>
    </SideNavContext.Provider>
  );
};

SideNavbar.defaultProps = {
  isOpen: false,
  width: '',
  background: '',
  borderLeft: '',
  borderRight: '',
  isSecondaryNavbarOpen: false,
  secondaryNavbarWidth: '',
  secondaryNavbarBackground: '',
  secondaryNavbarHeight: '',
};