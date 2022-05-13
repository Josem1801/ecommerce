/* eslint-disable @typescript-eslint/indent */
import styled from 'styled-components';

const Square = styled.button<{
  bgColor?: string;
  selected?: boolean;
  customBorderSelected?: string;
  border?: string;
  squareSize?: number;
}>`
  display: grid;
  place-items: center;
  width: ${({ squareSize }) => squareSize || 40}px;
  height: ${({ squareSize }) => squareSize || 40}px;
  border: ${({ theme, border, selected }) =>
    border || `1px solid ${selected ? 'transparent' : theme.colors.galery}`};
  border: ${({ customBorderSelected, selected }) =>
    selected && customBorderSelected};
  border-radius: 8px;
  background: ${({ theme, selected, bgColor }) =>
    bgColor || (selected && theme.colors.shark) || 'transparent'};
  color: ${({ theme, selected }) =>
    selected ? theme.colors.white : theme.colors.shark};
  transition: 0.3s ease-in-out;
  cursor: pointer;
  :hover {
    background: ${({ bgColor, theme }) => bgColor || theme.colors.shark};
    color: ${({ theme }) => theme.colors.white};
    border-color: transparent;
  }
`;

export default Square;
