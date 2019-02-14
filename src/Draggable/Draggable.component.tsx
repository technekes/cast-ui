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
   * Size of the handle in the draggable parent
   *
   * @default '30'
   **/
  parenthandlesize?: number;
  /**
   * Size of the handle in the draggable item
   *
   * @default '30'
   **/
  itemhandlesize?: number;
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

export const Draggable: React.FunctionComponent<Props> = props => (
  <SDraggable {...props}>
    <DraggableInfo {...props} />
    <DraggableParent {...props}>
      <DraggableItem {...props} />
    </DraggableParent>
    <DraggableFooter {...props} />
  </SDraggable>
);
Draggable.defaultProps = {
  color: 'lightGray',
  bordercolor: 'lightGray',
  size: 'md' as 'md' | 'lg' | 'sm',
};
