import * as React from 'react';
import styled from 'styled-components';
import {
  DraggableInfo,
  DraggableParent,
  DraggableItem,
  DraggableFooter,
} from './';

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

const SDraggable = styled.div`
  position: relative;
  padding: ${(props: Props) => props.theme.common[props.size].padding};
`;

export const Draggable: React.FunctionComponent<Props> = ({
  color = 'lightGray',
  size = 'md',
  theme,
}) => (
  <SDraggable color={color} size={size} theme={theme}>
    <DraggableInfo color={color} theme={theme} />
    <DraggableParent color={color} size={size} theme={theme}>
      <DraggableItem color={color} size={size} theme={theme} />
    </DraggableParent>
    <DraggableFooter color={color} theme={theme} />
  </SDraggable>
);
