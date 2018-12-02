import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import store from './reducer'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import App from './App'
import './index.css'

// const enhancer = process.env.NODE_ENV === 'development' ?
//     composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk)
// const store = createStore(reducer, enhancer)

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
const client = new ApolloClient({
    link: link,
    cache: new InMemoryCache()
})

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <ApolloProvider client={client}>
                <App />
            </ApolloProvider>
        </Provider>
    </BrowserRouter>,
    document.querySelector('#app')
);
// ReactDOM.render(<Footer />, document.querySelector('#footer'));
registerServiceWorker()
