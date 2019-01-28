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
  margin-right: auto;
  margin-left: auto;
  padding-right: ${(props: Props) => props.theme.layout.gutters.xs};
  padding-left: ${(props: Props) => props.theme.layout.gutters.xs};

  @media (min-width: ${(props: Props) => props.theme.layout.breakpoints.sm}) {
    max-width: ${(props: Props) =>
      `${props.fluid ? '100%' : props.theme.layout.fluidWidths.sm}`};
    padding-right: ${(props: Props) => props.theme.layout.gutters.sm};
    padding-left: ${(props: Props) => props.theme.layout.gutters.sm};
  }

  @media (min-width: ${(props: Props) => props.theme.layout.breakpoints.md}) {
    max-width: ${(props: Props) =>
      `${props.fluid ? '100%' : props.theme.layout.fluidWidths.md}`};
    padding-right: ${(props: Props) => props.theme.layout.gutters.md};
    padding-left: ${(props: Props) => props.theme.layout.gutters.md};
  }

  @media (min-width: ${(props: Props) => props.theme.layout.breakpoints.lg}) {
    max-width: ${(props: Props) =>
      `${props.fluid ? '100%' : props.theme.layout.fluidWidths.lg}`};
    padding-right: ${(props: Props) => props.theme.layout.gutters.lg};
    padding-left: ${(props: Props) => props.theme.layout.gutters.lg};
  }

  @media (min-width: ${(props: Props) => props.theme.layout.breakpoints.xl}) {
    max-width: ${(props: Props) =>
      `${props.fluid ? '100%' : props.theme.layout.fluidWidths.xl}`};
    padding-right: ${(props: Props) => props.theme.layout.gutters.xl};
    padding-left: ${(props: Props) => props.theme.layout.gutters.xl};
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
