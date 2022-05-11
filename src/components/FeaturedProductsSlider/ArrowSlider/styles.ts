import styled from 'styled-components';

const ArrowButon = styled.button<{ right?: boolean }>`
  border-radius: 50%;
  font-size: 25px;
  width: 52px;
  height: 52px;
  background: ${({ theme }) => theme.colors.white};
  ${({ right }) => (right ? 'right: -75px' : 'left: -75px')};
  border: 1px solid ${({ theme }) => theme.colors.galery};
  transition: 0.2s ease-in-out;
  color: ${({ theme }) => theme.colors.shark};
  :hover {
    background: ${({ theme }) => theme.colors.dodgerBlue};
    color: ${({ theme }) => theme.colors.white};
  }
  ::before {
    content: '';
  }
`;

export default ArrowButon;
