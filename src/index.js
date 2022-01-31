import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Inmy from './Route';
import Helmet from "react-helmet"

import * as serviceWorker from './serviceWorker';



ReactDOM.render(
    <React.StrictMode>
      
        <Inmy />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: httpss://bit.ly/CRA-PWA
serviceWorker.unregister();
