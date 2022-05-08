import styled from 'styled-components';

export const ProductImage = styled.div`
  position: relative;
  margin-bottom: 22px;
  border-radius: 12px;
  overflow: hidden;
  width: 100%;
  height: 80vw;
  cursor: pointer;
`;
export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  height: fit-content;
  width: 100%;
  padding: 10px;
  .card__title {
    text-decoration: none;
    cursor: pointer;
    width: fit-content;
    color: ${({ theme }) => theme.colors.shark};
    padding-bottom: 7px;
  }

  @media (${({ theme }) => theme.breakpoints.mobileL}) {
    width: fit-content;
    width: 100%;
    ${ProductImage} {
      height: 35vw;
      max-height: 200px;
    }
  }
  @media (${({ theme }) => theme.breakpoints.tablet}) {
    margin: 0 auto;
    padding: 0;
    width: fit-content;
    ${ProductImage} {
      width: 157px;
      height: 144px;
      max-height: none;
    }
  }
  @media (${({ theme }) => theme.breakpoints.laptop}) {
    ${ProductImage} {
      width: 290px;
      height: 266px;
    }
  }
  @media (${({ theme }) => theme.breakpoints.laptopL}) {
    ${ProductImage} {
      width: 360px;
      height: 330px;
    }
  }
`;
