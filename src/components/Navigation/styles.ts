import { MaxWidth } from 'shared/styles';
import styled from 'styled-components';

export const NavigationSection = styled.section`
  background: ${({ theme }) => theme.colors.galery};
  padding: 67px 0;
`;
export const MaxWidthContainer = styled.div`
  ${MaxWidth}
`;
