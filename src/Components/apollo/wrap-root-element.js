import React from 'react'
// import {useQuery,useMutation} from '@apollo/react-hooks'
import {ApolloProvider} from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import fetch from 'isomorphic-fetch';

const WrapRootElement = ({children}) => {

    const client = new ApolloClient({
        uri: 'https://isc-website-cms-services.herokuapp.com/private/adminLogin',
        request: operation => {
            operation.setContext({
                headers: {
                    authorization: localStorage ? localStorage.getItem("token") : "",
                    fetch
                },
            });
        },
    });
    return (
        <ApolloProvider client={client}>{children}</ApolloProvider>
    )
}

export default WrapRootElement;