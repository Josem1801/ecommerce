import { MaxWidth } from 'shared/styles';
import styled from 'styled-components';

export const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
  column-gap: 24px;
  width: fit-content;
`;
export const HeaderUserMenu = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  column-gap: 24px;
`;
export const Line = styled.div`
  height: 15px;
  width: 1px;
  background: #1a2224;
  opacity: 0.12;
`;
export const FlexContainer = styled.div<{ gap?: number | undefined }>`
  display: flex;
  align-items: center;
  white-space: nowrap;
  gap: ${({ gap }) => gap || 1}px;
`;

export const MaxWidthContainer = styled(MaxWidth)`
  display: flex;
  padding: 0 10px;
  align-items: center;
  flex-direction: column;
  row-gap: 15px;
  font-size: 12px;
  column-gap: 15px;

  @media (${({ theme }) => theme.breakpoints.tablet}) {
    & {
      flex-direction: row;
      justify-content: space-between;
      font-size: 14px;
    }
  }
`;
