import * as React from 'react';
import styled from 'styled-components';

type Props = {
  /**
   * Select Spinner color. Must be a color defined in theme colors
   *
   * @default false
   **/
  fluid: boolean;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

const SContainer = styled.div`
  width: ${(props: Props) => `${props.size}px`}
  height: ${(props: Props) => `${props.size}px`};
  position: relative;
  margin: 100px auto;
`;

export const Container: React.FunctionComponent<Props> = ({
  fluid = false,
  children,
  theme,
}) => (
  <SContainer fluid={fluid} theme={theme}>
    {children}
  </SContainer>
);
