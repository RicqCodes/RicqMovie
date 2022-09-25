import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        font-size: 62.5%;
    }

    body {
        font-family: "Open Sans", sans-serif;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        background: ${({ theme }) => theme.colors.primaryColor};
    }

    a {
        text-decoration: none;
    }
`;

export default GlobalStyle;
