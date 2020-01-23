import React from 'react'
import {Route, Switch } from 'react-router-dom'
import Sidenav from './Components/Sidenav/sidenav'
import Administrator from './Components/Administrator/ViewAdministrators/viewAdministrator'

export default () => {
    return (
        <div className="main-container">
            <Sidenav>
                <div className="main-routes">
                    <div className="right-section">
                        <Switch>
                            <Route path={"/administrator"} component={Administrator} />
                        </Switch>
                    </div>
                </div>
            </Sidenav>
        </div>
    );
}