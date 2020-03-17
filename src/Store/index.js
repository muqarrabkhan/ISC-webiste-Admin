import React, {Component} from "./node_modules/react";
const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOGGED_IN':
            return {...state, loggedIn: action.payLoad, loaded: true};
        case 'USER_DATA':
            return {...state, user: action.payLoad};
        case 'LOGGED_IN_SET':
            return {
                ...state,
                loggedIn: action.payLoad,
                loaded: true,
                user: action.user
            };
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
        show: false,
        show_confirm_order: false
    };

    render() {
        let {state, props: {children}} = this;
        return (
            <Context.Provider value={state}>{children}</Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;