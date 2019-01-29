import * as React from 'react';
import styled from 'styled-components';

type Props = {
  /**
   * Allows the container element to always occupy 100% with of the parent element
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
  width: auto;
  height: auto;
  margin: auto;
  flex: 1 1 100%;
  padding: ${(props: Props) => props.theme.layout.gutters.xs};

  @media (min-width: ${(props: Props) => props.theme.layout.breakpoints.sm}) {
    max-width: ${(props: Props) =>
      `${props.fluid ? '100%' : props.theme.layout.fluidWidths.sm}`};
    padding: ${(props: Props) => props.theme.layout.gutters.sm};
  }

  @media (min-width: ${(props: Props) => props.theme.layout.breakpoints.md}) {
    max-width: ${(props: Props) =>
      `${props.fluid ? '100%' : props.theme.layout.fluidWidths.md}`};
    padding: ${(props: Props) => props.theme.layout.gutters.md};
  }

  @media (min-width: ${(props: Props) => props.theme.layout.breakpoints.lg}) {
    max-width: ${(props: Props) =>
      `${props.fluid ? '100%' : props.theme.layout.fluidWidths.lg}`};
    padding: ${(props: Props) => props.theme.layout.gutters.lg};
  }

  @media (min-width: ${(props: Props) => props.theme.layout.breakpoints.xl}) {
    max-width: ${(props: Props) =>
      `${props.fluid ? '100%' : props.theme.layout.fluidWidths.xl}`};
    padding: ${(props: Props) => props.theme.layout.gutters.xl};
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
