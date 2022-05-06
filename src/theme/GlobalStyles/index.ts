import { createGlobalStyle } from 'styled-components';
import normalize from './normalice';

const GlobalStyles = createGlobalStyle`
  ${normalize}
  body{
    overflow-x: hidden;
    font-family: 'Poppins', sans-serif;

  }
  *{
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
