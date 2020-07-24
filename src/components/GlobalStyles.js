import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*,
 {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
}
body {
    padding: 0;
    margin: 0;
}
h1, h2, h3, h4, h5, h6{
    font-family: 'Roboto', sans-serif;
}

div, span, p, li, ul, ol {
    font-family: 'Roboto', sans-serif;
}
`;

export default GlobalStyles;
