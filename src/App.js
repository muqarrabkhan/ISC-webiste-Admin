import React from 'react'
import 'bulma/css/bulma.css'
import './assets/Style/Common.scss'
import './assets/Style/Style.scss'
import 'bulma-helpers/css/bulma-helpers.min.css'
import Routes from './Routes'
import { BrowserRouter, Switch } from 'react-router-dom'

export default () => {
    return (
        <BrowserRouter>
                <Routes />
        </BrowserRouter>
    );
}

