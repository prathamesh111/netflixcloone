import React from 'react';
import ReactDOM, {render} from 'react-dom';
import {GlobalStyles} from './global-styles.js';
import 'normalize.css';
import App from './App';
render(
    <>
        <GlobalStyles />
        <App />
    </>
    , document.getElementById('root')
);

