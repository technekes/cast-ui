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
  margin-right: ${(props: Props) => `-${props.theme.layout.gutters.xs}`};
  margin-left: ${(props: Props) => `-${props.theme.layout.gutters.xs}`};
  padding-right: ${(props: Props) => props.theme.layout.gutters.xs};
  padding-left: ${(props: Props) => props.theme.layout.gutters.xs};

  @media (min-width: ${(props: Props) => props.theme.layout.breakpoints.sm}) {
    margin-right: ${(props: Props) => `-${props.theme.layout.gutters.sm}`};
    margin-left: ${(props: Props) => `-${props.theme.layout.gutters.sm}`};
    padding-right: ${(props: Props) => props.theme.layout.gutters.sm};
    padding-left: ${(props: Props) => props.theme.layout.gutters.sm};
  }

  @media (min-width: ${(props: Props) => props.theme.layout.breakpoints.md}) {
    margin-right: ${(props: Props) => `-${props.theme.layout.gutters.md}`};
    margin-left: ${(props: Props) => `-${props.theme.layout.gutters.md}`};
    padding-right: ${(props: Props) => props.theme.layout.gutters.md};
    padding-left: ${(props: Props) => props.theme.layout.gutters.md};
  }

  @media (min-width: ${(props: Props) => props.theme.layout.breakpoints.lg}) {
    margin-right: ${(props: Props) => `-${props.theme.layout.gutters.lg}`};
    margin-left: ${(props: Props) => `-${props.theme.layout.gutters.lg}`};
    padding-right: ${(props: Props) => props.theme.layout.gutters.lg};
    padding-left: ${(props: Props) => props.theme.layout.gutters.lg};
  }

  @media (min-width: ${(props: Props) => props.theme.layout.breakpoints.xl}) {
    margin-right: ${(props: Props) => `-${props.theme.layout.gutters.xl}`};
    margin-left: ${(props: Props) => `-${props.theme.layout.gutters.xl}`};
    padding-right: ${(props: Props) => props.theme.layout.gutters.xl};
    padding-left: ${(props: Props) => props.theme.layout.gutters.xl};
  }
`;

export const Row: React.FunctionComponent<Props> = ({ children, theme }) => (
  <SRow theme={theme}>{children}</SRow>
);
