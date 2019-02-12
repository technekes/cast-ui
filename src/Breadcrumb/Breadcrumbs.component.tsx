// Import External Dependencies
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// Import Utilities
import Store from './store';

type Props = {
  /** the content of the panel  */
  children?: React.ReactNode;
  /**
   * Show or hide breadcrumbs
   *
   * @default false
   **/
  hidden?: boolean;
  /**
   * HTML element tag e.g 'div' or React Element|Component for breadcrumbs container
   *
   * @default 'nav'
   * @default '(props: Props) => <nav {...props}>{props.children}</nav>'
   **/
  BreadcrumbsContainer?: React.ReactType;
  /**
   * HTML element tag e.g 'span' or React Element|Component for individual breadcrumb container
   *
   * @default 'span'
   * @default '(props: Props) => <span {...props}>{props.children}</span>'
   **/
  BreadcrumbItemContainer?: React.ReactType;
  /**
   * HTML element tag e.g 'a' or React Element|Component for individual breadcrumb item
   *
   * @default 'NavLink from `react-router-dom`''
   * @default '(props: Props) => <NavLink {...props}>{props.children}</NavLink>'
   **/
  BreadcrumbItem?: React.ReactType;
  /**
   * HTML content tag e.g '>' or React Element|Component for individual breadcrumb item seperator
   *
   * @default '>'
   * @default '(props: Props) => <span {...props}> > </span>'
   **/
  separator?: React.ReactType;
  /**
   * Set/Update the crumbs list
   *
   * @default null
   **/
  setCrumbs?: Function;
  /**
   * Style to be applied to inactive breadcrumb items
   *
   * @default 'default'
   **/
  breadcrumbdefaultstyle: string;
  /**
   * Style to be applied to active breadcrumb item
   *
   * @default 'primary'
   **/
  breadcrumbactivestyle: string;
  /**
   * Select Breadcrumbs Size
   *
   * @default 'md'
   **/
  breadcrumbsize: string;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

// Create and export the component
export const Breadcrumbs: React.FunctionComponent<Props> = ({
  hidden = false,
  setCrumbs = undefined,
  breadcrumbdefaultstyle = 'default',
  breadcrumbactivestyle = 'primary',
  breadcrumbsize = 'md',
}) => {

  // _unsubscribe: Function = () => true;

  return {
    const {
      hidden,
      setCrumbs,
      BreadcrumbsContainer: BCCWrapper,
      BreadcrumbItemContainer: BCICWrapper,
      BreadcrumbItem: BCIWrapper,
      separator: Separator,
      breadcrumbsize,
      breadcrumbdefaultstyle,
      breadcrumbactivestyle,
      theme,
    } = this.props;
    let crumbs = Store.getState();

    crumbs = crumbs.sort((a: any, b: any) => {
      return a.pathname.length - b.pathname.length;
    });
    if (setCrumbs) crumbs = setCrumbs(crumbs);

    const CrumbsWrapper = BCCWrapper
      ? (props: any) => <BCCWrapper {...props}>{props.children}</BCCWrapper>
      : (props: any) => <nav {...props}>{props.children}</nav>;
    const CrumbItemWrapper = BCICWrapper
      ? (props: any) => <BCICWrapper {...props}>{props.children}</BCICWrapper>
      : (props: any) => <span {...props}>{props.children}</span>;
    const CrumbItem = BCIWrapper
      ? (props: any) => <BCIWrapper {...props}>{props.children}</BCIWrapper>
      : (props: any) => <NavLink {...props}>{props.children}</NavLink>;
    const SeparatorWrapper = Separator
      ? (props: any) => <Separator {...props}>></Separator>
      : (props: any) => <span {...props}>></span>;

    const SCrumbsWrapper = styled(CrumbsWrapper)`
      display: ${(props: Props) => (props.hidden ? 'none' : 'block')};
    `;
    const SCrumbItemWrapper = styled(CrumbItemWrapper)`
      font-weight: 700;
      font-family: ${(props: Props) => props.theme.typography.fontFamily};
      font-size: ${(props: Props) =>
        props.theme.common[props.breadcrumbsize].fontSize};
      color: ${(props: Props) =>
        props.theme.styles[props.breadcrumbdefaultstyle].flood};
    `;
    const SCrumbItem = styled(CrumbItem)`
      text-decoration: none;
      color: ${(props: Props) =>
        props.theme.styles[props.breadcrumbdefaultstyle].flood};
      padding: ${(props: Props) =>
        props.theme.common[props.breadcrumbsize].padding};
      &.crumb-item--active {
        color: ${(props: Props) =>
          props.theme.styles[props.breadcrumbactivestyle].flood};
      }
    `;

    React.useEffect(() => {
      this._unsubscribe = Store.subscribe(() => {
        this.forceUpdate();
      });
      return () => {
        this._unsubscribe();
      }
    });

    return (
      <SCrumbsWrapper hidden={hidden}>
        {crumbs.map((crumb: any, i: any) => (
          <SCrumbItemWrapper
            key={crumb.id}
            breadcrumbsize={breadcrumbsize}
            breadcrumbdefaultstyle={breadcrumbdefaultstyle}
            theme={theme}>
            <SCrumbItem
              exact
              activeClassName="crumb-item--active"
              to={{
                pathname: crumb.pathname,
                search: crumb.search,
                state: crumb.state,
              }}
              breadcrumbsize={breadcrumbsize}
              breadcrumbdefaultstyle={breadcrumbdefaultstyle}
              breadcrumbactivestyle={breadcrumbactivestyle}
              theme={theme}>
              {crumb.title}
            </SCrumbItem>
            {i < crumbs.length - 1 ? <SeparatorWrapper /> : null}
          </SCrumbItemWrapper>
        ))}
      </SCrumbsWrapper>
    );
  }
}
