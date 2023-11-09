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
    font-size: 3.5rem;
    font-weight: 800;
  }

  h1, h2 {
    padding: 0.75rem 0;
    border-color: #292929;
    line-height: 0.75em;
  }

  p {
    font-weight: 600;
  }

  ul {
    list-style: none;
  }

  .card {
    background-color: #846267;
    color: #000;
    width: 100%;
    min-height: 200px;
    padding: 20px;
    border-radius: 8px;
    background-image: linear-gradient(
      135deg,
      hsla(0, 0%, 100%, 0.6),
      hsla(0, 0%, 100%, 0.1)
    );

    
}

.grid-section {
      display: grid;
      grid-template-columns: repeat(auto-fill, 300px);
      grid-gap: 20px;

      p{
        color: #292929;
      }
    }

`;

export default GlobalStyles;
