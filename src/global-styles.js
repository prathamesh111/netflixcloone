import {createGlobalStyle} from  'styled-components';

export const GlobalStyles = createGlobalStyle`
html, body{
    font-family: 'Helvetica';
    background-color: #000;
    color:#333;
    font-size:16px;
    -webkit-font-smoothing: antialiased;
    
    -moz-osx-font-smoothing: grayscale;
}

*{box-sizing:border-box;}
`;