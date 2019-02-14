import * as React from 'react';
import styled from 'styled-components';

type Props = {
  /**
   * Select DraggableFooter color. Must be a color defined in theme colors
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

const SDraggableFooter = styled.div`
  position: relative;
`;

export const DraggableFooter: React.FunctionComponent<Props> = ({
  color = 'lightGray',
  theme,
}) => (
  <SDraggableFooter color={color} theme={theme}>
    <div>This is the footer section</div>
  </SDraggableFooter>
);
