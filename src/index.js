import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import store from './reducer'
import { ApolloProvider } from 'react-apollo'
import client from './client'
import App from './App'
import './index.css'

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
registerServiceWorker()
