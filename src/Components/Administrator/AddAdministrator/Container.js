import React from "react";
import {Consumer} from "../../../Store/index";
import Child from "./addAdministrator";

const Container = () => {
    return (
        <Consumer>
            {
                ({dispatch , loaded , loggedIn , user }) => (
                    <Child dispatch={dispatch} loaded={loaded} loggedIn={loggedIn} user={user}/>
                )
            }
        </Consumer>
    );
};
export default Container;