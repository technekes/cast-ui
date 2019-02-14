import * as React from 'react';
import styled from 'styled-components';

type Props = {
  /**
   * Select Draggable color. Must be a color defined in theme colors
   *
   * @default 'lightGray'
   **/
  color: string;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

const SDraggable = styled.div`
  position: relative;
  margin: 100px auto;
`;

export const Draggable: React.FunctionComponent<Props> = ({
  color = 'lightGray',
  theme,
}) => (
  <SDraggable color={color} theme={theme}>
    <div>Comming</div>
  </SDraggable>
);
