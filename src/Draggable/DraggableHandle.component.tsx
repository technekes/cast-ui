// import * as React from 'react';
// import Icon from 'react-icons-kit';
// import { ic_view_headline as icViewHeadline } from 'react-icons-kit/md/ic_view_headline';

// type Props = {
//   /** Activae Hover handle  */
//   onMouseEnter?: Function;
//   /** Deactivate Hover handle  */
//   onMouseLeave?: Function;
//   /**
//    * Pass in Handle Icon iconsize
//    *
//    * @default '40'
//    **/
//   size?: number;
//   /**
//    * Pass in Handle css className
//    *
//    * @default 'handleIcon'
//    **/
//   className?: string;
//   /**
//    * From theme provider
//    *
//    * @default defaultTheme
//    **/
//   theme?: any;
// };

// export const DraggableHandle: React.FunctionComponent<Props> = props => (
//   <div
//     onMouseEnter={() => props.onMouseEnter}
//     onMouseLeave={() => props.onMouseLeave}>
//     <Icon
//       icon={icViewHeadline}
//       {...props}
//       className={`handleIcon ${props.className}`}
//     />
//     {props.children}
//   </div>
// );
// DraggableHandle.defaultProps = {
//   size: 25,
// };
