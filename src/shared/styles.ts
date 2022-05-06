import styled from 'styled-components';

export const MaxWidth = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 510px;
  @media (${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 690px;
  }
  @media (${({ theme }) => theme.breakpoints.laptop}) {
    max-width: 1200px;
  }
`;

export const hola = '';
