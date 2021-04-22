import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: "Open Sans", sans-serif;
  }
    
  body {
    width: 100%;
    height: 100vh;
  }

  :root {
    --border-radius: 4px;

    --background: #F2F2F2;
    --white-background: #FFFFFF;
    --transparent-background: rgba(0, 0, 0, 0.5);
    --error-background: rgba(255, 23, 68, 0.15);
    
    --header: #4DD0E1;

    --green-button: #28DD91;
    --grey-button: #DADADA;
    --purple-button: #A769B2;
    --white-button: #FFFFFF;
    --transparent-button: transparent;

    --purple-border-button: #A769B2;
    --grey-border-button: #DADADA;

    --tab-border: #4DD0E1;
    --tab-text: #4DD0E1;

    --input-background: #FFFBE6;
    --input-border: #CCCCCC;
    --input-text: #0A261D;

    --historic-text: #0A261D;
    --historic-border: #E4E3E3;

    --red-text: #FF0068;
    --purple-text: #A769B2;
    --grey-text: #9B9B9B;
    --white-text: #FFFFFF;
    --blue-text: #00BCD4;
    --black-text: #4A4A4A;
    }
`;

export default GlobalStyles;
