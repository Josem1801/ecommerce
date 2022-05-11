import {
  HeaderStyles,
  HeaderStylesTypes,
  MaxWidth,
  TextStyles,
  TextStylesType,
} from 'shared/styles';
import styled from 'styled-components';

export const Title = styled.h2<HeaderStylesTypes>`
  margin: 0;
  margin-bottom: 22px;
  ${HeaderStyles}
`;
export const Description = styled.span<TextStylesType>`
  padding-bottom: 58px;
  ${TextStyles}
`;
export const HeroDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const HeroImage = styled.div`
  position: relative;
  width: 100%;
  height: 566px;
  border-radius: 60px 8px 8px 8px;
  background-color: ${({ theme }) => theme.colors.galery};
  overflow: hidden;
`;
export const HeroContainer = styled.section`
  ${MaxWidth}
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  row-gap: 70px;
  @media (${({ theme }) => theme.breakpoints.laptop}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 70px;
    ${HeroImage} {
      width: 529px;
      height: 566px;
    }
  }
`;
