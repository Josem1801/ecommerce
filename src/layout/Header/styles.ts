import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  width: 100vw;
  font-weight: 400;
  height: auto;
  padding: 20px 0;
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
  color: ${({ theme }) => theme.colors.manatee};
  svg {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.shark};
  }
`;

export default HeaderContainer;
