// Import External Dependencies
import * as React from 'react';

// Import Utilities
import CrumbsStore from './store';

type Props = {
  /**
   * The children elements
   *
   * @default null
   */
  children?: React.ReactNode;
  /**
   * Show or hide breadcrumbs
   *
   * @default false
   **/
  hidden?: boolean;
  /**
   * Wrapper for the breadcrumbs container
   *
   * @default '{}'
   **/
  data: any;
  /**
   * Classname for the breadcrumbs container
   *
   * @default ''
   **/
  className?: string;
  /**
   * Seperator between breadcrumb links
   *
   * @default '>'
   **/
  separator?: React.ReactNode;
  /**
   * Set/Update the crumbs list
   *
   * @default null
   **/
  setCrumbs?: Function;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

// Create and export the component
export const Breadcrumb: React.FunctionComponent<Props> = ({
  data,
  hidden = false,
  children = null,
}) => {
  let [id] = React.useState(new Date());

  /**
   * Dispatch the given `action`
   *
   * @param  {string} action - A valid action name accepted by the store
   * @param  {object} data   - The breadcrumb data to pass
   */

  function dispatchCrumb(action: any, data: any) {
    CrumbsStore().dispatch({
      type: action,
      payload: { id, ...data },
    });
  }

  React.useEffect(() => {
    // Remove/add crumb based on `hidden` prop
    if (!hidden) dispatchCrumb('ADD_CRUMB', data);
    else dispatchCrumb('REMOVE_CRUMB', data);
    // Update the crumb if its data has changed
    dispatchCrumb('UPDATE_CRUMB', data);
    return () => {
      dispatchCrumb('REMOVE_CRUMB', data);
    };
  }, [hidden, data]);

  return children;
};
