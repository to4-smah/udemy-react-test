import ApolloClient from 'apollo-boost'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { graphql } from 'react-apollo'
import {
    AuthCheck, USER_GET_POFILE,
    ESTIMATE_GET_LIST,
    ESTIMATE_GET_TIMEOUT_LIST,
    ESTIMATE_GET_CANCEL_LIST,
    ESTIMATE_GET_ORDERED_LIST,
    ESTIMATE_REQUEST_STATUS
} from '../helper'
import {
    LOGIN,
    LOGOUT,
    READ_USER,
    UPDATE_USER,
    READ_ALL_ESTIMATE,
    REQUEST_ESTIMATE
} from './actionType'

// Login
export const loginSuccess = () => async dispatch => {
    dispatch({ type: LOGIN })
};

//Logout
export const logoutSuccess = () => async dispatch => {
    dispatch({ type: LOGOUT })
};

// お客様情報詳細一覧を取得
export const userInfoData = () => async dispatch => {
    clientGetOption(USER_GET_POFILE, READ_USER, '/profile', dispatch)
};

// 見積もり一覧取得
export const estimateAllList = (status) => async dispatch => {
    switch (status) {
        case 0: // 未発注
            return clientGetOption(ESTIMATE_GET_LIST, READ_ALL_ESTIMATE, '/profile', dispatch)
        case 1: // 期限切れ
            return clientGetOption(ESTIMATE_GET_TIMEOUT_LIST, READ_ALL_ESTIMATE, '/profile', dispatch)
        case 2: // キャンセル
            return clientGetOption(ESTIMATE_GET_CANCEL_LIST, READ_ALL_ESTIMATE, '/profile', dispatch)
        case 9: // 発注済み
            return clientGetOption(ESTIMATE_GET_ORDERED_LIST, READ_ALL_ESTIMATE, '/profile', dispatch)
        default:
            return clientGetOption(ESTIMATE_GET_LIST, READ_ALL_ESTIMATE, '/profile', dispatch)
    }
};

export function clientGetOption(query, action, slug, dispatch) {
    // 認証トークンを更新
    AuthCheck();

    const apiUrl = 'https://api.devtouryo.com/graphql';
    const userToken = localStorage.getItem('user');
    const access_token = JSON.parse(userToken).access_token;

    const client = new ApolloClient ({
        uri: apiUrl + slug,
        cache: new InMemoryCache(),
        request: operation => {
            operation.setContext({
                headers: { Authorization: `Bearer ${ access_token }` }
            })
        }
    });

    client
        .query({ query })
        .then(
            result => {
                dispatch({ type: action, result })
            },
            error => console.log(error)
        )
}