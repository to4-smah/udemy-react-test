import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const httpLink = new HttpLink({
    uri: 'https://api.devtouryo.com/graphql/profile',
})

const authMiddleware = new ApolloLink((operation, forward) => {

    const userDate = localStorage.getItem('user');
    const access_token = JSON.parse(userDate).access_token;
    operation.setContext({
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    })

    return forward(operation)
})

const link = ApolloLink.from([authMiddleware, httpLink]);
export default new ApolloClient({
    link: link,
    cache: new InMemoryCache()
})
