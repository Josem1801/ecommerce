import { MaxWidth } from 'shared/styles';
import styled from 'styled-components';

export const ProductDetailContainer = styled.div`
  ${MaxWidth}
  margin: 100px auto;
  display: grid;
  grid-template-columns: 500px 1fr;
  column-gap: 54px;
`;
export const ProductInformation = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 32px;

  p {
    margin: 0;
  }
`;

export const LoveItButton = styled.button<{ active?: boolean }>`
  width: 62px;
  display: grid;
  place-items: center;
  height: 59px;
  border: 2px solid ${({ theme }) => theme.colors.dodgerBlue};
  color: ${({ theme, active }) =>
    active ? theme.colors.white : theme.colors.dodgerBlue};
  background: ${({ theme, active }) =>
    active ? theme.colors.dodgerBlue : theme.colors.white};
  transition: 0.3s ease-in-out;
  border-radius: 8px;
  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.dodgerBlue};
  }
  @keyframes loveit {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(2);
    }
    100% {
      transform: scale(1);
    }
  }
`;
