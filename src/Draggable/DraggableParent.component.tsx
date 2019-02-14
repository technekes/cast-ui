import * as React from 'react';
import styled from 'styled-components';

type Props = {
  /**
   * Select DraggableParent color. Must be a color defined in theme colors
   *
   * @default 'lightGray'
   **/
  color?: string;
  /**
   * Select Draggable borders' color. Must be a color defined in theme colors
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
  &:hover {
    background-color: ${(props: Props) => props.theme.colors.panelBackground};
  }
`;

export const DraggableParent: React.FunctionComponent<Props> = props => (
  <SDraggableParent {...props}>
    <div>This is the Parent section</div>
    {props.children}
  </SDraggableParent>
);
DraggableParent.defaultProps = {
  color: 'lightGray',
  bordercolor: 'lightGray',
  size: 'md',
};
