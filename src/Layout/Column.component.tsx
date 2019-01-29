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

const SColumn = styled.div`
  flex: 1 1 auto;
  max-width: 100%;
  height: auto;
  min-height: 1px;
  position: relative;
  padding: ${(props: Props) => `calc(${props.theme.layout.gutters.xs} / 4)`};

  @media (min-width: ${(props: Props) => props.theme.layout.breakpoints.sm}) {
    padding: ${(props: Props) => `calc(${props.theme.layout.gutters.sm} / 4)`};
  }

  @media (min-width: ${(props: Props) => props.theme.layout.breakpoints.md}) {
    padding: ${(props: Props) => `calc(${props.theme.layout.gutters.md} / 4)`};
  }

  @media (min-width: ${(props: Props) => props.theme.layout.breakpoints.lg}) {
    padding: ${(props: Props) => `calc(${props.theme.layout.gutters.lg} / 4)`};
  }

  @media (min-width: ${(props: Props) => props.theme.layout.breakpoints.xl}) {
    padding: ${(props: Props) => `calc(${props.theme.layout.gutters.xl} / 4)`};
  }
`;

export const Column: React.FunctionComponent<Props> = ({ children, theme }) => (
  <SColumn theme={theme}>{children}</SColumn>
);
