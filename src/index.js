import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';

import App from './component/app/app';
import registerServiceWorker from './serviceWorker/registerServiceWorker';

ReactDOM.render(
    (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    ),
    document.getElementById('root'));
registerServiceWorker();
