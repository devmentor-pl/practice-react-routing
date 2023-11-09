import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    padding: 2rem;
    font-family: 'Work Sans', sans-serif;
    background-color: #101010;
    color: #ededed;
  }

  h1 {
    text-transform: uppercase;
    font-size: 3rem;
    font-weight: 800;
  }

  h1, h2 {
    padding-bottom: 0.75rem;
  }

  p {
    font-weight: 600;
  }

  ul {
    list-style: none;
  }
`;

export default GlobalStyles;
