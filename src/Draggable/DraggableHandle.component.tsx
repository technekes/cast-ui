import * as React from 'react';
import Icon from 'react-icons-kit';
import { ic_view_headline as icViewHeadline } from 'react-icons-kit/md/ic_view_headline';

type Props = {
  /**
   * Pass in Handle Icon iconsize
   *
   * @default '40'
   **/
  size?: number;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

export const DraggableHandle: React.FunctionComponent<Props> = props => (
  <React.Fragment>
    <Icon icon={icViewHeadline} {...props} className="handleIcon" />
    {props.children}
  </React.Fragment>
);
DraggableHandle.defaultProps = {
  size: 25,
};
