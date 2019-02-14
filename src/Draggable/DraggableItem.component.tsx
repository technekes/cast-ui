import * as React from 'react';
import styled from 'styled-components';

type Props = {
  /**
   * Select DraggableItem color. Must be a color defined in theme colors
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

const SDraggableItem = styled.div`
  position: relative;
`;

export const DraggableItem: React.FunctionComponent<Props> = ({
  color = 'lightGray',
  theme,
}) => (
  <SDraggableItem color={color} theme={theme}>
    <div>This is the item section</div>
  </SDraggableItem>
);
