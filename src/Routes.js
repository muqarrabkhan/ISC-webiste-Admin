import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Sidenav from './Components/Sidenav/sidenav'
import Administrator from './Components/Administrator/ViewAdministrators/viewAdministrator'

export default () => {
    return (
        <div className="main-container is-flex">
            <Sidenav/>
            <div className="main-routes">
                <div className="right-section">
                    <BrowserRouter>
                        <Switch>
                            <Route path={"/administrator"} component={Administrator}/>
                        </Switch>
                    </BrowserRouter>
                </div>
            </div>
        </div>
    );
}