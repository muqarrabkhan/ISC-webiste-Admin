import React, { Component } from "react";
const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOGGED_IN':
            return {...state, loggedIn: action.payLoad};
        case 'USER_DATA':
            return {...state, user: action.payLoad};
        default:
            return state;
    }
};

export class Provider extends Component {
    state = {
        dispatch: action => {
            this.setState(state => reducer(state, action))
        },
        loggedIn: false,
        loaded: false,
        user: null,
    };

    render() {
        let { state, props: { children } } = this;
        return (
            <Context.Provider value={state}>{children}</Context.Provider>
        )
    }
}
export const Consumer = Context.Consumer;