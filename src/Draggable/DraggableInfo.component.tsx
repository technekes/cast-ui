import * as React from 'react';
import styled from 'styled-components';

type Props = {
  /**
   * Select DraggableInfo color. Must be a color defined in theme colors
   *
   * @default 'lightGray'
   **/
  color?: string;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

const SDraggableInfo = styled.div`
  position: relative;
`;

export const DraggableInfo: React.FunctionComponent<Props> = ({
  color = 'lightGray',
  theme,
}) => (
  <SDraggableInfo color={color} theme={theme}>
    <div>This is the infor section</div>
  </SDraggableInfo>
);
