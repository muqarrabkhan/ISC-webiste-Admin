import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { requestInterceptor } from './intercepter';
import { BrowserRouter as Router } from 'react-router-dom'
requestInterceptor();

ReactDOM.render(
    <Router>
        <App />
    </Router>
    , document.getElementById('root'));
