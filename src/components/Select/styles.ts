import styled from 'styled-components';

export const SelectInput = styled.select`
  background: ${({ theme }) => theme.colors.white};
  width: fit-content;
  height: fit-content;
  color: inherit;
  font-weight: inherit;
  border: none;
  padding: 7px 13px;
  transition: 0.3s ease-in-out;
  border-radius: 5px;
  -webkit-appearance: button;
  appearance: button;
  border: none;
  cursor: pointer;
  :hover {
    background: ${({ theme }) => theme.colors.galery};
  }
`;

export const Option = styled.option`
  outline: none;
  background: ${({ theme }) => theme.colors.white};
  :hover {
    background: ${({ theme }) => theme.colors.galery};
  }
`;
