import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

  body {
      margin: 0 !important;
      padding: 0 !important;
      font-family: 'Poppins', sans-serif;
  }
  html, #root {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
  }
`;

export default GlobalStyles;
