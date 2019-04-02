import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { DraggableHandle } from '../DraggableHandle.component';
import { DraggableProps } from '../defaultProps';
import DraggableContext, { useMergeWithParentProps } from '../draggableContext';
import { Themes } from '../../themes';

export type Props = Partial<DraggableProps> & {
  /** Listen to drag start event  */
  onDragStart?(e: React.MouseEvent<HTMLElement>): void;
  /** Listen to drag over event  */
  onDragOver?(e: React.MouseEvent<HTMLElement>): void;
  /** Listen to drop event  */
  onDrop?(e: React.MouseEvent<HTMLElement>): void;
  /**
   * Listen to drag start events
   *
   * @default true
   * */
  draggable?: boolean;
  /**
   * Size of the handle in the draggable parent
   *
   * @default '30'
   **/
  parenthandlesize?: number;
  /**
   * Optionally show the handle in the draggable parent
   *
   * @default 'true'
   **/
  showparenthandle?: boolean;
  /**
   * Active background for draggable parent container
   *
   * @default 'false'
   **/
  parentActive?: boolean;
};

const SDraggableParent = styled.div`
  position: relative;
  display: flex;
  align-items: start;
  justify-content: start;
  padding: ${(props: Props) => props.theme.common[props.guttersize!].padding};
  margin: ${(props: Props) =>
    `${
      props.theme.common[props.guttersize!].padding.toString().split(' ')[0]
    } 0`};
  border: 1px dashed ${(props: Props) => props.theme.colors[props.bordercolor!]};
  border-radius: ${(props: Props) =>
    props.theme.common[props.guttersize!].borderRadius};
  background-color: ${(props: Props) =>
    props.parentActive
      ? props.theme.colors.lightBackground
      : props.theme.colors.white};
  .parentHandle {
    cursor: ${(props: Props) => (props.draggable ? 'grab' : 'not-allowed')};
    color: ${(props: Props) => props.theme.colors[props.bordercolor!]};
    padding: ${(props: Props) => props.theme.common[props.guttersize!].padding};
    margin-left: ${(props: Props) =>
      `-${
        props.theme.common[props.guttersize!].padding.toString().split(' ')[1]
      }`};
    &:hover {
      color: ${(props: Props) =>
        props.draggable
          ? props.theme.colors.blue
          : props.theme.colors[props.bordercolor!]};
    }
  }
`;

export const ParentContainer: React.FunctionComponent<Props> = ({
  ...props
}) => {
  const [parentActive, setParentActive] = React.useState(false);
  const parentProps = React.useContext(DraggableContext).parentProps;
  const propsToMerge = [
    { key: 'guttersize', defaultVal: 'md' },
    { key: 'draggablestyle', defaultVal: 'primary' },
    { key: 'color', defaultVal: 'lightGray' },
    { key: 'bordercolor', defaultVal: 'lightGray' },
    { key: 'parenthandlesize', defaultVal: 30 },
    { key: 'parentActive', defaultVal: parentActive },
    { key: 'draggable', defaultVal: props.draggable },
    { key: 'theme', defaultVal: Themes.defaultTheme },
  ];
  const { theme, ...newProps }: any = useMergeWithParentProps(props, {
    propsToMerge,
    parentProps,
  });
  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <SDraggableParent
        {...newProps}
        key="draggableParent"
        draggable={parentActive && newProps.draggable}
        onDragStart={newProps.onDragStart}
        onDragOver={newProps.onDragOver}
        onDrop={newProps.onDrop}
      >
        {newProps.showparenthandle && (
          <DraggableHandle
            size={newProps.parenthandlesize}
            className="parentHandle"
            onMouseEnter={() => setParentActive(true)}
            onMouseLeave={() => setParentActive(false)}
          />
        )}
        {props.children}
      </SDraggableParent>
    </ThemeProvider>
  );
};

export default ParentContainer;
