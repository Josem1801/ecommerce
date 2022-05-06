import { createGlobalStyle } from 'styled-components';
import normalize from './normalice';

const GlobalStyles = createGlobalStyle`
  ${normalize}
  body{
    overflow: hidden;
  }
  *{
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
