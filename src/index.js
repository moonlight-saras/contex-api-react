import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import './assets/scss/base.scss'
import App from './App';
import * as serviceWorker from './serviceWorker';
// import { Provider } from '../src/contex/Contex'


ReactDOM.render(
    // <Provider value="saras">
        <App />
    //</Provider> 

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
