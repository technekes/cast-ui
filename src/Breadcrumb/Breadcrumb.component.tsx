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
export class Breadcrumb extends React.Component<Props> {
  static defaultProps = {
    hidden: false,
    children: null,
  };

  state = {
    id: new Date(),
  };

  render() {
    return this.props.children;
  }

  componentDidMount() {
    const { data, hidden } = this.props;

    if (!hidden) this.dispatchCrumb('ADD_CRUMB', data);
  }

  componentWillReceiveProps(nextProps: Props) {
    const { data, hidden } = nextProps;

    // Update the crumb if its data has changed
    if (!(JSON.stringify(data) === JSON.stringify(this.props.data))) {
      this.dispatchCrumb('UPDATE_CRUMB', data);
    }

    // Remove/add crumb based on `hidden` prop
    if (hidden && !this.props.hidden) {
      this.dispatchCrumb('REMOVE_CRUMB', data);
    } else if (!hidden && this.props.hidden) {
      this.dispatchCrumb('ADD_CRUMB', data);
    }
  }

  componentWillUnmount() {
    this.dispatchCrumb('REMOVE_CRUMB', this.props.data);
  }

  /**
   * Dispatch the given `action`
   *
   * @param  {string} action - A valid action name accepted by the store
   * @param  {object} data   - The breadcrumb data to pass
   */
  dispatchCrumb(action: any, data: any) {
    const { id } = this.state;

    CrumbsStore().dispatch({
      type: action,
      payload: { id, ...data },
    });
  }
}
