import * as React from 'react';
import styled from 'styled-components';
import { DraggableHandle } from './';

type Props = {
  /**
   * Select DraggableParent color. Must be a color defined in theme colors
   *
   * @default 'lightGray'
   **/
  color?: string;
  /**
   * Select Draggable Parent borders' color. Must be a color defined in theme colors
   *
   * @default 'lightGray'
   **/
  bordercolor: string;
  /**
   * Select Draggable Size
   *
   * @default 'md'
   **/
  size: string;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

const SDraggableParent = styled.div`
  position: relative;
  display: flex;
  align-items: start;
  justify-content: start;
  padding: ${(props: Props) => props.theme.common[props.size].padding};
  border: 1px dashed ${(props: Props) => props.theme.colors[props.bordercolor]};
  .handleIcon {
    cursor: pointer;
    color: ${(props: Props) => props.theme.colors[props.bordercolor]};
    padding: ${(props: Props) => props.theme.common[props.size].padding};
    margin-left: -${(props: Props) => props.theme.common[props.size].padding.toString().split(' ')[1]};
  }
  &:hover {
    background-color: ${(props: Props) => props.theme.colors.panelBackground};
    .handleIcon {
      color: ${(props: Props) => props.theme.colors.blue};
    }
  }
`;

// const SDraggableHandle = styled(DraggableHandle)`
//   color: ${(props: Props) => props.theme.colors[props.bordercolor]};
// `;

export const DraggableParent: React.FunctionComponent<Props> = props => (
  <SDraggableParent {...props}>
    <DraggableHandle size={30} theme={props.theme} />
    {props.children}
    <div>right button</div>
  </SDraggableParent>
);
DraggableParent.defaultProps = {
  color: 'lightGray',
  bordercolor: 'lightGray',
  size: 'md' as 'md' | 'lg' | 'sm',
};
