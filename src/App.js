import React, { useEffect } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import 'bulma/css/bulma.css'
import './assets/Style/Common.scss'
import './assets/Style/Style.scss'
import 'bulma-helpers/css/bulma-helpers.min.css'
import AllRoutes from './Routes'
import Signin from './Components/Signin/signin'
// import {ApolloProvider} from '@apollo/react-hooks';
import WrapElement from './Components/apollo/wrap-root-element'
import cookie from 'react-cookies'

const App = (props) => {
    let { history, location } = props;
    useEffect(() => {
        let token = cookie.load("token");
        if (token) {
            if (location.pathname.indexOf("sigin") !== -1) {
                history.push("/signin");
            }
            else {
                history.push("/");
            }
        }
    }, [history, location.pathname])
    return (
        <WrapElement>
            <Switch>
                <Route path={"/sigin"} exact component={Signin} />
                <Route path={"/"} component={AllRoutes} />
            </Switch>
        </WrapElement>
    );
}
export default withRouter(App);
