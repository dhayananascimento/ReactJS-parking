import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }
    
    body {
        width: 100%;
        height: 100vh;
    }
`;

export default GlobalStyles;
