import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    color: ${ props => props.theme.colors.white }
  }
  
  html,
  body,
  #root {
    height: 100%;
    overflow-x: hidden;
  }

  *,
  button,
  input {
    border: 0;
    font-family: Montserrat, sans-serif;
    outline: 0;
  }

  button { 
    cursor: pointer;
  }
`;