// Import External Dependencies
import * as React from 'react';
import { Route } from 'react-router-dom';

// Import Components
import { Breadcrumb } from './';

type Props = {
  /**
   * The title of the crumb route
   *
   * @default ''
   **/
  title?: string;
  /**
   * The React Component to be rendered in the route
   *
   * @default null
   **/
  component?: React.ComponentType<any>;
  /**
   * Include route search params
   *
   * @default false
   **/
  includeSearch?: boolean;
  /**
   * Path
   *
   * @default defaultTheme
   **/
  path?: any;
  /**
   * The render function
   *
   * @default 'null'
   **/
  render?: Function;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

// Create and export the component
export const CrumbRoute: React.FunctionComponent<Props> = ({
  title = '',
  component: Component,
  includeSearch = false,
  render = () => true,
  ...props
}) => (
  <Route
    {...props}
    render={routeProps => (
      <Breadcrumb
        data={{
          title,
          pathname: routeProps.match.url,
          search: includeSearch ? routeProps.location.search : null,
        }}>
        {Component ? <Component {...routeProps} /> : render(routeProps)}
      </Breadcrumb>
    )}
  />
);
