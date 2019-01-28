import * as React from 'react';
import styled from 'styled-components';

type Props = {
  /**
   * Select Spinner color. Must be a color defined in theme colors
   *
   * @default 'lightGray'
   **/
  color: string;
  /**
   * Adjust spinner size in pixels
   *
   * @default 40px
   **/
  size: number;
  /**
   * Adjust animation speed in seconds
   *
   * @default 2s
   **/
  animationSpeed: number;
  /**
   * Select transition type
   *
   * @default 'ease-in-out'
   **/
  transitionType: string;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

const SSpinner = styled.div`
  width: ${(props: Props) => `${props.size}px`};
  height: ${(props: Props) => `${props.size}px`};
  position: relative;
  margin: 100px auto;

  .double-bounce1,
  .double-bounce2 {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: ${props => props.theme.colors[props.color]};
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;

    -webkit-animation: ${(props: Props) =>
      `sk-bounce ${props.animationSpeed}s infinite ${props.transitionType}`};
    animation: ${(props: Props) =>
      `sk-bounce ${props.animationSpeed}s infinite ${props.transitionType}`};
  }

  .double-bounce2 {
    -webkit-animation-delay: ${(props: Props) =>
      `-${props.animationSpeed / 2}s`};
    animation-delay: ${(props: Props) => `-${props.animationSpeed / 2}s`};
  }

  @-webkit-keyframes sk-bounce {
    0%,
    100% {
      -webkit-transform: scale(0);
    }
    50% {
      -webkit-transform: scale(1);
    }
  }

  @keyframes sk-bounce {
    0%,
    100% {
      transform: scale(0);
      -webkit-transform: scale(0);
    }
    50% {
      transform: scale(1);
      -webkit-transform: scale(1);
    }
  }
`;

export const Spinner: React.FunctionComponent<Props> = ({
  color = 'lightGray',
  size = 40,
  animationSpeed = 2,
  transitionType = 'ease-in-out',
  theme,
}) => (
  <SSpinner
    color={color}
    size={size}
    animationSpeed={animationSpeed}
    transitionType={transitionType}
    theme={theme}>
    <div className="double-bounce1" />
    <div className="double-bounce2" />
  </SSpinner>
);
