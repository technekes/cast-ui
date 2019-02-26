import * as React from 'react';
import styled from 'styled-components';
import Icon from 'react-icons-kit';
import Button, { Props as ButtonProps } from '../Button';

const defaultProps = {
  color: 'lightGray',
  pixelbuttonsize: 32,
  iconsize: 24,
  rounded: true,
};

type DefaultProps = Readonly<typeof defaultProps>;

type Props = Partial<ButtonProps> &
  Partial<DefaultProps> & {
    /**
     * Select IconButton color. Must be a color defined in theme colors
     *
     * @default 'lightGray'
     **/
    color?: string;
    /**
     * Set button icon
     *
     * @default null
     **/
    icon?: React.ComponentType<any>;
    /**
     * Set button size in pixels
     *
     * @default '38'
     **/
    pixelbuttonsize?: number;
    /**
     * Set Icon size
     *
     * @default '28'
     **/
    iconsize?: number;
    /**
     * Specify if the button is rounded
     *
     * @default true
     **/
    rounded?: boolean;
    /**
     * From theme provider
     *
     * @default defaultTheme
     **/
    theme?: any;
  };

const SIconButton = styled(Button)`
  position: relative;
  border-radius: ${(props: any) =>
    props.rounded ? '50%' : props.theme.common[props.btnSize].borderRadius};
  min-width: ${(props: any) => (props.rounded ? '10px' : '75px')};
  width: ${(props: any) =>
    props.rounded ? `${props.pixelbuttonsize}px` : 'auto'};
  height: ${(props: any) =>
    props.rounded ? `${props.pixelbuttonsize}px` : 'auto'};
  padding: ${(props: any) =>
    props.rounded ? '0' : props.theme.common[props.btnSize].padding};
  outline: none;
`;

export const IconButton: React.FunctionComponent<Props> = props => (
  <SIconButton {...props}>
    {props.icon && <Icon icon={props.icon} size={props.iconsize} />}
    {props.children}
  </SIconButton>
);
