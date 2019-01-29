import * as React from 'react';
import styled from 'styled-components';

type Props = {
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

const SRow = styled.div`
  width: 100%;
  height: auto;
  // margin-right: auto;
  // margin-left: auto;
  padding-right: ${(props: Props) => props.theme.layout.gutters.xs};
  padding-left: ${(props: Props) => props.theme.layout.gutters.xs};

  @media (min-width: ${(props: Props) => props.theme.layout.breakpoints.sm}) {
    padding-right: ${(props: Props) => props.theme.layout.gutters.sm};
    padding-left: ${(props: Props) => props.theme.layout.gutters.sm};
  }

  @media (min-width: ${(props: Props) => props.theme.layout.breakpoints.md}) {
    padding-right: ${(props: Props) => props.theme.layout.gutters.md};
    padding-left: ${(props: Props) => props.theme.layout.gutters.md};
  }

  @media (min-width: ${(props: Props) => props.theme.layout.breakpoints.lg}) {
    padding-right: ${(props: Props) => props.theme.layout.gutters.lg};
    padding-left: ${(props: Props) => props.theme.layout.gutters.lg};
  }

  @media (min-width: ${(props: Props) => props.theme.layout.breakpoints.xl}) {
    padding-right: ${(props: Props) => props.theme.layout.gutters.xl};
    padding-left: ${(props: Props) => props.theme.layout.gutters.xl};
  }
`;

export const Row: React.FunctionComponent<Props> = ({ children, theme }) => (
  <SRow theme={theme}>{children}</SRow>
);
