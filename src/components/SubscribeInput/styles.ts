import styled from 'styled-components';

const SubscriptionContainer = styled.form`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.manatee};
  border-radius: 25px;
  width: 100%;
  max-width: 558px;
  height: 50px;
  overflow: hidden;
  input {
    flex: 1;
    min-width: 30px;
    border: none;
    height: 100%;
    padding-left: 15px;
    outline: none;
    background: transparent;
    color: ${({ theme }) => theme.colors.white};
  }
  button {
    min-width: fit-content;
    height: 40px;
    padding: 0 24px;
    border: none;
    border-radius: 40px;
    box-sizing: content-box;
    background: ${({ theme }) => theme.colors.white};
    margin: 5px;
    transition: 0.2s ease-in-out;
    cursor: pointer;
  }
  button:hover {
    background-color: ${({ theme }) => theme.colors.manatee}20;
  }
`;

export default SubscriptionContainer;
