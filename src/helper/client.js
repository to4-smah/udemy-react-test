import React from 'react'
import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const headersLink = new ApolloLink((operation, forward) => {

    const userDate = localStorage.getItem('user');
    const access_token = JSON.parse(userDate).access_token;
    operation.setContext({
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    });
    return forward(operation)
});

const endpoint = 'https://api.devtouryo.com/graphql/profile';
const httpLink = new HttpLink({ uri: endpoint });
const link = ApolloLink.from([headersLink, httpLink]);

export default new ApolloClient({
    link,
    cache: new InMemoryCache()
})
