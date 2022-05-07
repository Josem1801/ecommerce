import styled from 'styled-components';

const ItemsGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(216.5px, 1fr));
  row-gap: 50px;
  margin-top: 54px;
  @media (${({ theme }) => theme.breakpoints.laptop}) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`;

export default ItemsGridContainer;
