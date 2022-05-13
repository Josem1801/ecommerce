import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative;
  display: flex;
  height: fit-content;
  min-width: 80px;
  color: inherit;
  font-weight: inherit;
  border: none;
  -webkit-appearance: button;
  appearance: button;
  border: none;
`;
export const OptionList = styled.ul<{ activeList: boolean }>`
  position: absolute;
  left: 0;
  visibility: ${({ activeList }) => (activeList ? 'visible' : 'hidden')};
  opacity: ${({ activeList }) => (activeList ? '1' : '0')};
  max-height: 100px;
  overflow: auto;
  top: 100%;
  min-width: 100%;
  width: fit-content;
  display: flex;
  background: white;
  flex-direction: column;
  z-index: 999;
  padding: 0;
  margin: 0;
  transition: all 0.2s ease-in-out;
  scrollbar-width: thin; /* "auto" or "thin" */
  li {
    list-style: none;
  }
  ::-webkit-scrollbar {
    width: 5px; /* width of the entire scrollbar */
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.galery};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.manatee};

    border-radius: 2px; /* roundness of the scroll thumb */
  }
`;
export const Option = styled.a`
  display: grid;
  place-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.manatee};
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  padding: 7px 13px;
  transition: 0.3s ease-in-out;
  border-radius: 5px;

  cursor: pointer;
  :hover {
    background: ${({ theme }) => theme.colors.galery};
  }
`;
