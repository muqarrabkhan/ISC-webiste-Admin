import React from 'react'
import {Route , Switch} from 'react-router-dom'
import Sidenav from './Components/Sidenav/sidenav'
import Administrator from './Components/Administrator/ViewAdministrators/viewAdministrator'
import User from './Components/User/ViewUser/viewUser'

export default () => {
    return (
        <div className="main-container">
            <Sidenav>
                <div className="main-routes">
                    <div className="right-section">
                        <Switch>
                            <Route path={"/"} exact component={Administrator} />
                            <Route path={"/user"} component={User} />
                        </Switch>
                    </div>
                </div>
            </Sidenav>    
        </div>
    );
}