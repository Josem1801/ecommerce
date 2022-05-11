import styled from 'styled-components';

const SearchContainer = styled.form<{
  width: number | undefined;
  margin: string | undefined;
}>`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.galery};
  margin: ${({ margin }) => margin};
  border-radius: 25px;
  width: 100%;
  max-width: ${({ width }) => width}px;

  overflow: hidden;
  input {
    flex: 1;
    border: none;
    height: 100%;
    width: 100%;
    padding-left: 15px;
    outline: none;
  }
  button {
    width: 40px;
    height: 40px;
    border: none;
    padding: 0;
    border-radius: 50%;
    box-sizing: content-box;
    background: #ffffff00;
    margin: 5px;
    transition: 0.2s ease-in-out;
    cursor: pointer;
  }
  button:hover {
    background-color: ${({ theme }) => theme.colors.manatee}20;
  }
`;

export default SearchContainer;
