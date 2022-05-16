import styled from 'styled-components';

const FormContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  row-gap: 20px;
  max-width: 538px;
  margin: 0 auto;
  background: white;
  padding: 43px;

  form {
    display: flex;
    flex-direction: column;
    row-gap: 25px;
  }
`;
export default FormContainer;
