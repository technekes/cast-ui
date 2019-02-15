// import * as React from 'react';
// import styled from 'styled-components';
// import { DraggableHandle } from './';

// type Props = {
//   /**
//    * Select DraggableParent color. Must be a color defined in theme colors
//    *
//    * @default 'lightGray'
//    **/
//   color?: string;
//   /**
//    * Select Draggable Parent borders' color. Must be a color defined in theme colors
//    *
//    * @default 'lightGray'
//    **/
//   bordercolor: string;
//   /**
//    * Select Draggable Size
//    *
//    * @default 'md'
//    **/
//   size: string;
//   /**
//    * Size of the handle in the draggable parent container
//    *
//    * @default '30'
//    **/
//   parenthandlesize?: number;
//   /**
//    * Active background for draggable parent container
//    *
//    * @default 'false'
//    **/
//   parentActive?: boolean;
//   /**
//    * From theme provider
//    *
//    * @default defaultTheme
//    **/
//   theme?: any;
// };

// const SDraggableParent = styled.div`
//   position: relative;
//   display: flex;
//   align-items: center;
//   justify-content: start;
//   padding: ${(props: Props) => props.theme.common[props.size].padding};
//   border: 1px dashed ${(props: Props) => props.theme.colors[props.bordercolor]};
//   border-radius: ${(props: Props) =>
//     props.theme.common[props.size].borderRadius};
//   background-color: ${(props: Props) =>
//     props.parentActive
//       ? props.theme.colors.panelBackground
//       : props.theme.colors.white};
//   .parentHandle {
//     cursor: pointer;
//     color: ${(props: Props) => props.theme.colors[props.bordercolor]};
//     padding: ${(props: Props) => props.theme.common[props.size].padding};
//     margin-left: -${(props: Props) => props.theme.common[props.size].padding.toString().split(' ')[1]};
//     &:hover {
//       color: ${(props: Props) => props.theme.colors.blue};
//     }
//   }
// `;

// // const SDraggableHandle = styled(DraggableHandle)`
// //   color: ${(props: Props) => props.theme.colors[props.bordercolor]};
// // `;

// export const DraggableParent: React.FunctionComponent<Props> = props => {
//   let [parentActive, setParentActive] = React.useState(false);
//   return (
//     <SDraggableParent parentActive={parentActive} {...props}>
//       <DraggableHandle
//         size={props.parenthandlesize}
//         className="parentHandle"
//         onMouseEnter={() => setParentActive(true)}
//         onMouseLeave={() => setParentActive(false)}
//       />
//       {props.children}
//       <div>right button</div>
//     </SDraggableParent>
//   );
// };
// DraggableParent.defaultProps = {
//   color: 'lightGray',
//   bordercolor: 'lightGray',
//   size: 'md' as 'md' | 'lg' | 'sm',
//   parenthandlesize: 30,
// };
