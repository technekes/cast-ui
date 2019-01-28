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
  width: 100%;
  height: auto;

  @media (min-width: ${(props: Props) => props.theme.layout.breakpoints.sm}) {
    max-width: ${(props: Props) =>
      `${props.fluid ? '100%' : props.theme.layout.breakpoints.sm}`};
  }

  @media (min-width: ${(props: Props) => props.theme.layout.breakpoints.md}) {
    max-width: ${(props: Props) =>
      `${props.fluid ? '100%' : props.theme.layout.breakpoints.md}`};
  }

  @media (min-width: ${(props: Props) => props.theme.layout.breakpoints.lg}) {
    max-width: ${(props: Props) =>
      `${props.fluid ? '100%' : props.theme.layout.breakpoints.lg}`};
  }

  @media (min-width: ${(props: Props) => props.theme.layout.breakpoints.xl}) {
    max-width: ${(props: Props) =>
      `${props.fluid ? '100%' : props.theme.layout.breakpoints.xl}`};
  }
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
