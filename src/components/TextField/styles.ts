/* eslint-disable @typescript-eslint/indent */
import styled from 'styled-components';

export const Placeholder = styled.span`
  position: absolute;
  left: 18px;
  top: 35%;
  width: fit-content;
  height: fit-content;
  font-size: ${({ theme }) => theme.typography.text.bodyRegular.fontSize}px;
  z-index: 1;
  transition: 0.3s ease-in-out;
  color: ${({ theme }) => theme.colors.manatee};
  border-radius: 5px;
`;

export const TextFieldContainer = styled.div<{ background?: string }>`
  position: relative;
  width: 100%;
  height: 59px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  background: ${({ background, theme }) => background || theme.colors.white};
  input {
    background: transparent;
    width: 100%;
    height: 100%;
    border: none;
    border: none;
    border-radius: 4px;
    outline: 1px solid ${({ theme }) => theme.colors.manatee}50;
    padding: 18px;
    z-index: 2;
    ::placeholder {
      color: transparent;
    }

    :hover {
      outline: 1px solid ${({ theme }) => theme.colors.galery};
    }
    :focus {
      outline: 2px solid ${({ theme }) => theme.colors.dodgerBlue};
    }

    :focus ~ ${Placeholder}, :not(:placeholder-shown) ~ ${Placeholder} {
      top: -15%;
      left: 8px;
      font-size: ${({ theme }) => theme.typography.text.bodySmall.fontSize}px;
      z-index: 3;
      background: ${({ background, theme }) =>
        background || theme.colors.white};
      padding: 0 5px;
    }
    :focus ~ ${Placeholder} {
      color: ${({ theme }) => theme.colors.dodgerBlue};
    }
  }
`;
