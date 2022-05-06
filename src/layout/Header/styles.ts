import { TextStyles, TextStylesType } from 'shared/styles';
import styled from 'styled-components';

const HeaderContainer = styled.header<TextStylesType>`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: auto;
  position: relative;
  overflow-x: hidden;
  overflow-y: visible;
  color: ${({ theme }) => theme.colors.manatee};
  ${TextStyles}
  svg {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.shark};
  }
`;

export default HeaderContainer;
