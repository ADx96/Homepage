import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor}
  }

`;

export default GlobalStyle;
