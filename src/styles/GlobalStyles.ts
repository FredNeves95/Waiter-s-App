import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font-family: 'Roboto', sans-serif;
    min-height: 100vh;
    width: 100vw;
    background-color: ${(props) => props.theme.colors.background};
      h1,h2{
        color:${(props) => props.theme.colors.title}
    }

    h3{
        color:${(props) => props.theme.colors.subtitle}
    }

    p{
      color:${(props) => props.theme.colors.text}
    }
  }
`;
