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
  padding: ${(props: Props) => props.theme.common[props.size].padding};
`;

export const DraggableParent: React.FunctionComponent<Props> = props => (
  <SDraggableParent {...props}>
    <div>This is the Parent section</div>
    {props.children}
  </SDraggableParent>
);
DraggableParent.defaultProps = {
  color: 'lightGray',
  size: 'md',
};
