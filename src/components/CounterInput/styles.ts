import styled from 'styled-components';

const CounterContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  max-width: 150px;
  border: 1px solid ${({ theme }) => theme.colors.galery};
  padding: 8px 15px;
  input {
    flex: 1fr;
    max-width: 50px;
    text-align: center;
    border: none;
  }
`;
export default CounterContainer;
