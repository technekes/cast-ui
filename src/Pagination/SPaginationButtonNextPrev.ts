import styled from 'styled-components';

type Props = {
  /** this dictates what the button will do  */
  onClick(e: React.MouseEvent<HTMLElement>): void;
  /**
   * Select Button Style
   *
   * @default 'default'
   **/
  btnStyle: string;
  /**
   * Select Button Size
   *
   * @default 'md'
   **/
  btnSize: string;
  /**
   * Specify if the button is disabled
   *
   * @default false
   **/
  disabled?: boolean;
  /**
   * Specify if the button is selected
   *
   * @default false
   **/
  selected?: boolean;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

const SPaginationButtonNextPrev = styled.button`
  background: ${(props: Props) =>
    props.selected
      ? props.theme.styles.pagination.selectedFlood
      : props.theme.styles.pagination.flood}
  border: 1px solid ${(props: Props) =>
    props.theme.styles.pagination.borderColor};
  padding: ${(props: Props) =>
    props.theme.table.pagination.button.padding[props.btnSize]}
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.common[props.btnSize].fontSize}
  font-weight: ${(props: Props) =>
    props.theme.table.pagination.button.nextPrevious.fontWeight};
  color: ${(props: Props) => props.theme.styles.pagination.reverseText};
  outline: none;
  &:hover {
    background: ${(props: Props) => props.theme.styles.pagination.hoverFlood};
    border: 1px solid ${(props: Props) =>
      props.theme.styles.pagination.hoverFlood};
    cursor: pointer;
  }
  &:disabled {
    background: ${(props: Props) => props.theme.styles.pagination.hoverFlood};
    border: 1px solid ${(props: Props) =>
      props.theme.styles.pagination.hoverFlood};
    color: ${(props: Props) => props.theme.table.pagination.button.disabledText};
    cursor: not-allowed;
  }
`;

export default SPaginationButtonNextPrev;
