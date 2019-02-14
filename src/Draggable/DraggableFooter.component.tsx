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

export const DraggableFooter: React.FunctionComponent<Props> = props => (
  <SDraggableFooter {...props}>
    <div>Footer Button</div>
  </SDraggableFooter>
);
DraggableFooter.defaultProps = {
  color: 'lightGray',
};
