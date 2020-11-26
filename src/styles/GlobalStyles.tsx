import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${ props => props.theme.backoundColor };
    color: ${ props => props.theme.textColor };
    font-size: ${ props => props.theme.general.fontSizes[2] };
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
    font-family: 'Montserrat', sans-serif;
    outline: 0;
  }

  button { 
    cursor: pointer;
  }

  strong {
    font-weight: ${ props => props.theme.general.fontWeights.bold };
  }

  input, 
  textarea, 
  select {
    background-image: none;
    box-sizing: border-box;
    outline: none;
  }
  input, 
  textarea {
    -webkit-appearance: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: ${ props => props.theme.general.fontWeights.bold };
  }

  h1 {
    font-size: ${ props => props.theme.general.fontSizes[5] };
  }
`;