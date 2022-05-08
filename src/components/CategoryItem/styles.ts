import styled from 'styled-components';

export const CategoryItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    border-radius: 50%;
  }
`;

export const CategoryInfo = styled.div`
  display: flex;
  margin-top: 18px;
  flex-direction: column;
  row-gap: 10px;
  .category__amount {
    color: ${({ theme }) => theme.colors.manatee};
  }
`;
