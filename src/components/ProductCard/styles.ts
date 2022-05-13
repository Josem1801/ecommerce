import styled from 'styled-components';

export const AbsoluteCircleButton = styled.button<{
  right?: number;
  selected?: boolean;
}>`
  position: absolute;
  right: ${({ right }) => right || 24}px;
  top: 22px;
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  background: ${({ theme, selected }) =>
    selected ? theme.colors.shark : theme.colors.white};
  color: ${({ theme, selected }) =>
    selected ? theme.colors.white : theme.colors.shark};
  border: none;
  border-radius: 50%;
  z-index: 9;
  cursor: pointer;
  :hover {
    background: ${({ theme }) => theme.colors.galery};
  }
`;

export const ProductImage = styled.div`
  position: relative;
  margin-bottom: 22px;
  border-radius: 12px;
  overflow: hidden;
  width: 100%;
  height: 80vw;
  background: white;
  cursor: pointer;
  img {
    object-fit: cover;
    object-position: center;
  }
`;
export const ProductCardContainer = styled.div`
  position: relative;
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
    max-width: 157px;
    ${ProductImage} {
      width: 157px;
      height: 144px;
      max-height: 144px;
    }
  }
  @media (${({ theme }) => theme.breakpoints.laptop}) {
    max-width: fit-content;
    ${ProductImage} {
      width: 290px;
      height: 266px;
      max-height: 266px;
    }
  }
  @media (${({ theme }) => theme.breakpoints.laptopL}) {
    ${ProductImage} {
      width: 360px;
      height: 330px;
      max-height: none;
    }
  }
`;
