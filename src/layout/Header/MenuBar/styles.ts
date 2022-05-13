import SearchContainer from 'components/SearchInput/styles';
import { MaxWidth } from 'shared/styles';
import styled from 'styled-components';

export const NumberCircle = styled.span`
  position: absolute;
  top: -30%;
  right: -40%;
  display: grid;
  font-size: 10px;
  font-weight: 400;
  place-items: center;
  border: 1px solid ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.dodgerBlue};
  width: 18px;
  height: 18px;
`;
export const IconWithCircle = styled.span`
  position: relative;
`;
export const NavBar = styled.nav`
  display: none;
  flex: 1;
  ul {
    display: flex;
    align-items: center;
    column-gap: 10px;
    padding: 0;
    li {
      list-style: none;
    }
  }
  a {
    display: flex;
    column-gap: 8px;
    align-items: center;
    color: inherit;
    text-decoration: none;
  }
`;
export const AsideNavBar = styled.aside<{ isMenuActive: boolean }>`
  position: fixed;
  font-size: 16px;
  font-weight: 600;

  right: ${({ isMenuActive }) => (isMenuActive ? 0 : '-100%')};
  top: 0;
  width: 350px;
  height: 100vh;
  background: ${({ theme }) => theme.colors.white};
  visibility: ${({ isMenuActive }) => (isMenuActive ? 'visible' : 'hidden')};
  transition: 0.5s ease-in-out;
  z-index: 10;
  padding: 30px 0 0 30px;
  ul {
    display: flex;
    flex-direction: column;
    column-gap: 30px;
    padding: 0;
    li {
      padding: 20px;
      list-style: none;
      border-bottom: 1px solid #00000030;
    }
  }
  a {
    display: flex;
    column-gap: 8px;
    align-items: center;
    color: inherit;
    text-decoration: none;
  }
`;
export const MenuContainer = styled.div<{ fixed?: boolean }>`
  background: transparent;
  ${({ fixed, theme }) =>
    fixed
      ? `position: fixed;
        left: 0;
        right: 0;
        background: ${theme.colors.white};`
      : null};
  transition: 0.1s ease-in-out;
  z-index: 99;
`;
export const Menu = styled.div`
  ${MaxWidth}
  overflow: visible;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 50px;
  svg {
    font-size: 23px;
  }
  ${SearchContainer} {
    display: none;
  }
  @media (${({ theme }) => theme.breakpoints.tablet}) {
    ${SearchContainer} {
      display: flex;
    }
  }
  @media (${({ theme }) => theme.breakpoints.laptop}) {
    .menu {
      display: none;
    }
    ${NavBar} {
      display: flex;
    }
  }
`;
