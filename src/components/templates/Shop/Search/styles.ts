import { Button, MaxWidth } from 'shared/styles';
import styled from 'styled-components';

export const SearchSection = styled.section`
  ${MaxWidth}
  margin: 60px auto;
`;

export const SearchForm = styled.form`
  width: 100%;
  max-width: 910px;
  margin: 0 auto;
  display: flex;
  height: 74px;
  border: 1px solid ${({ theme }) => theme.colors.galery};
  input {
    flex: 1;
    width: 100%;
    border: none;
    outline: none;
    padding: 0 30px;
  }
  ${Button} {
    width: 152px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;
