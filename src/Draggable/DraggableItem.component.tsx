// import * as React from 'react';
// import styled from 'styled-components';
// import { DraggableHandle } from './';

// type Props = {
//   /**
//    * Select DraggableItem color. Must be a color defined in theme colors
//    *
//    * @default 'lightGray'
//    **/
//   color?: string;
//   /**
//    * Select Draggable Item borders' color. Must be a color defined in theme colors
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
//    * Size of the handle in the draggable item
//    *
//    * @default '30'
//    **/
//   itemhandlesize?: number;
//   /**
//    * From theme provider
//    *
//    * @default defaultTheme
//    **/
//   theme?: any;
// };

// const SDraggableItem = styled.div`
//   position: relative;
//   width: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: start;
//   background: ${(props: Props) => props.theme.colors.white};
//   border: 1px solid ${(props: Props) => props.theme.colors[props.bordercolor]};
//   border-radius: ${(props: Props) =>
//     props.theme.common[props.size].borderRadius};
// `;

// const SItemLeftContent = styled.div`
//   position: relative;
//   border-right: 1px solid
//     ${(props: Props) => props.theme.colors[props.bordercolor]};
//   .itemHandle {
//     cursor: pointer;
//     color: ${(props: Props) => props.theme.colors[props.bordercolor]};
//     padding: ${(props: Props) => props.theme.common.sm.padding};
//   }
//   &:hover {
//     cursor: pointer;
//     background-color: ${(props: Props) => props.theme.colors.panelBackground};
//     .itemHandle {
//       color: ${(props: Props) => props.theme.colors.blue};
//     }
//   }
// `;

// const SItemMainContent = styled.div`
//   position: relative;
//   width: 100%;
//   padding: ${(props: Props) => props.theme.common[props.size].padding};
// `;

// const SItemRightContent = styled.div`
//   position: relative;
//   border-left: 1px solid
//     ${(props: Props) => props.theme.colors[props.bordercolor]};
// `;

// export const DraggableItem: React.FunctionComponent<Props> = props => (
//   <SDraggableItem {...props}>
//     <SItemLeftContent {...props}>
//       <DraggableHandle size={props.itemhandlesize} className="itemHandle" />
//     </SItemLeftContent>
//     <SItemMainContent {...props}>
//       This is the main item content
//     </SItemMainContent>
//     <SItemRightContent {...props}>Right Button</SItemRightContent>
//   </SDraggableItem>
// );
// DraggableItem.defaultProps = {
//   color: 'lightGray',
//   bordercolor: 'lightGray',
//   size: 'md' as 'md' | 'lg' | 'sm',
//   itemhandlesize: 30,
// };
