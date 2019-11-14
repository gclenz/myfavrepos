import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background-color: #eee;
  }

  body, input, button {
    color: #202023;
    font-size: 1rem;
    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;

    &:hover {
      transform: scale(1.05);
      transition: .2s;
    }
  }
`;
