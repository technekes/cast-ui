import * as React from 'react';
import styled from 'styled-components';
import { DraggableInfo, DraggableFooter } from './';

type Props = {
  /**
   * Select Draggable color. Must be a color defined in theme colors
   *
   * @default 'lightGray'
   **/
  color: string;
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

export const Draggable: React.FunctionComponent<Props> = ({
  color = 'lightGray',
  size = 'md',
  theme,
}) => (
  <SDraggableParent color={color} size={size} theme={theme}>
    <DraggableInfo color={color} theme={theme} />
    <div>Comming</div>
    <DraggableFooter color={color} theme={theme} />
  </SDraggableParent>
);
