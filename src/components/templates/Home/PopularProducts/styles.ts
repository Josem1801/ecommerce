import { MaxWidth } from 'shared/styles';
import styled from 'styled-components';

export const PopularProductsContainer = styled.section`
  background: ${({ theme }) => theme.colors.galery};
  padding: 100px 0;
`;

export const MaxWidthContainer = styled.div`
  ${MaxWidth}
`;
