import * as React from 'react';
import SButton from './SButton';

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
   * Specify if the button is in a button group
   *
   * @default false
   **/
  inButtonGroup?: boolean;
  /**
   * Specify if the button is selected
   *
   * @default false
   **/
  selected?: boolean;
  /**
   * The value of the button
   *
   * @default null
   **/
  value?: any;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

const noop = () => {}; // tslint:disable-line

export const Button: React.FunctionComponent<Props> = ({
  onClick,
  disabled,
  selected,
  children,
  btnStyle = 'default',
  btnSize = 'md',
  inButtonGroup,
  theme,
}) => (
  <SButton
    btnSize={btnSize}
    btnStyle={btnStyle}
    theme={theme}
    disabled={disabled}
    selected={selected}
    inButtonGroup={inButtonGroup}
    onClick={!disabled ? onClick : noop}
  >
    {children}
  </SButton>
);
