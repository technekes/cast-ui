import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

export type Props = {
  /**
   * The content of the notification
   *
   * @default null
   * */
  children?: any;
  /**
   * Whether the notification is visible or not
   *
   *  @default false
   */
  isVisible?: boolean;
};

const initialState = {
  isVisible: true,
};
type State = Readonly<typeof initialState>;

export class Notification extends React.Component<Props, State> {
  notify = () => toast('Wow so easy !');

  render() {
    return <ToastContainer />;
  }
}

export default Notification;
