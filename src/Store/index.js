import React, {Component} from "react";
const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOGGED_IN':
            return {...state, loggedIn: action.payLoad, loaded: true};
        case 'USER_DATA':
            return {...state, user: action.payLoad};
        case 'SET_CART_DETAIL': {
            localStorage.setItem('cart', JSON.stringify(action.payLoad));
            return {...state, cartDetails: action.payLoad};
        }

        case 'LOGGED_IN_SET':
            return {
                ...state,
                loggedIn: action.payLoad,
                loaded: true,
                user: action.user
            };
        //global states for popup
        case 'HANDEL_SHOW':
            return {...state, show: action.payLoad};
        case 'HANDEL_CLOSE':
            return {...state, show: action.payLoad};
        case 'HANDEL_SHOW_CONFIRM_ORDER':
            return {...state, show_confirm_order: action.payLoad};
        case 'HANDEL_CLOSE_CONFIRM_ORDER':
            return {...state, show_confirm_order: action.payLoad};
        case 'HANDEL_SHOW_PURCHASE_CONFORMATION':
            return {...state, purchase_order: action.payLoad};
        case 'HANDEL_CLOSE_PURCHASE_CONFORMATION':
            return {...state, purchase_order: action.payLoad};
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
        show_confirm_order: false,
        purchase_order: false,
        cartDetails: typeof window !== 'undefined' && JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : null,
    };

    render() {
        let {state, props: {children}} = this;
        return (
            <Context.Provider value={state}>{children}</Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;