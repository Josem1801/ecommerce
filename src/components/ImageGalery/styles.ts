import styled from 'styled-components';

export const ImageGaleryContainer = styled.div`
  display: grid;
  gap: 5px;
  width: 100%;
  img {
    border-radius: 5px;
  }
`;
export const ImagesContainer = styled.div`
  display: flex;
  max-width: fit-content;
  overflow: auto;
  gap: 5px;
`;

export const ImageContainer = styled.div<{ active?: boolean }>`
  opacity: ${({ active }) => (active ? 0.5 : 1)};
  height: 100px;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  transition: 0.3s ease-in-out;
`;
