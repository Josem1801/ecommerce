import { ProductImage } from 'components/ProductCard/styles';
import { MaxWidth } from 'shared/styles';
import styled from 'styled-components';

export const FeaturedSection = styled.section`
  ${MaxWidth}
  display: flex;
  flex-direction: column;
`;
export const SliderContainer = styled.div`
  margin: 54px 0;
  @media (${({ theme }) => theme.breakpoints.mobileL}) {
    ${ProductImage} {
      max-height: 144px;
    }
  }
  @media (${({ theme }) => theme.breakpoints.tablet}) {
    ${ProductImage} {
      max-height: fit-content;
    }
  }
`;
