import { TextStyles, TextStylesType } from 'shared/styles';
import styled from 'styled-components';

const HeaderContainer = styled.header<TextStylesType>`
  position: relative;
  display: grid;
  grid-template-rows: auto 80px;
  grid-template-columns: 100%;
  height: auto;
  position: relative;
  overflow: visible;
  color: ${({ theme }) => theme.colors.manatee};
  ${TextStyles}
  svg {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.shark};
  }
`;

export default HeaderContainer;
