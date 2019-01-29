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
  display: flex;
  flex: 1 1 auto;
  flex-wrap: nowrap;
  min-width: 0;
  margin: ${(props: Props) => `calc(-${props.theme.layout.gutters.xs} / 4)`};

  @media (min-width: ${(props: Props) => props.theme.layout.breakpoints.sm}) {
    margin: ${(props: Props) => `calc(-${props.theme.layout.gutters.sm} / 4)`};
  }

  @media (min-width: ${(props: Props) => props.theme.layout.breakpoints.md}) {
    margin: ${(props: Props) => `calc(-${props.theme.layout.gutters.md} / 4)`};
  }

  @media (min-width: ${(props: Props) => props.theme.layout.breakpoints.lg}) {
    margin: ${(props: Props) => `calc(-${props.theme.layout.gutters.lg} / 4)`};
  }

  @media (min-width: ${(props: Props) => props.theme.layout.breakpoints.xl}) {
    margin: ${(props: Props) => `calc(-${props.theme.layout.gutters.xl} / 4)`};
  }
`;

export const Row: React.FunctionComponent<Props> = ({ children, theme }) => (
  <SRow theme={theme}>{children}</SRow>
);
