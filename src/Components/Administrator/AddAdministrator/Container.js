import React from "react";
import {Consumer} from "../../../Store/index";
import Child from "./addAdministrator";

const Container = (props) => {
    return (
        <Consumer>
            {
                ({dispatch, loaded, loggedIn, user}) => {
                    return (<Child user={user} dispatch={dispatch} loaded={loaded} loggedIn={loggedIn}
                    /> )
                }
            }
        </Consumer>)
};

export default Container;