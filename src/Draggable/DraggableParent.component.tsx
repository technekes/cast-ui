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
  size?: string;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

const SDraggableParent = styled.div`
  position: relative;
`;

export const DraggableParent: React.FunctionComponent<Props> = ({
  color = 'lightGray',
  children = null,
  theme,
}) => (
  <SDraggableParent color={color} theme={theme}>
    <div>This is the Parent section</div>
    {children}
  </SDraggableParent>
);
