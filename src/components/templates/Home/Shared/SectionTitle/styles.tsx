/* eslint-disable @typescript-eslint/no-use-before-define */
import { ReactNode } from 'react';
import { HeaderStyles, HeaderStylesTypes } from 'shared/styles';
import styled from 'styled-components';

export default function SectionTitle({ children }: { children: ReactNode }) {
  return <Title fontVariant="heading2">{children}</Title>;
}
const Title = styled.header<HeaderStylesTypes>`
  color: ${({ theme }) => theme.colors.shark};
  text-align: center;
  margin-bottom: 54px;
  ${HeaderStyles}
`;
