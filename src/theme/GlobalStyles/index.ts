import { createGlobalStyle } from 'styled-components';
import normalize from './normalice';

const GlobalStyles = createGlobalStyle`
  ${normalize}
  
  *{
    box-sizing: border-box;
  }
  body{
    font-family: 'Poppins', sans-serif;
  }
`;

export default GlobalStyles;
