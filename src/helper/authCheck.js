
import { clientId, clientSecret, handleResponse } from "../services";
import React from "react";

export function AuthCheck() {
    const User = localStorage.getItem('user');
    const refresh_token = JSON.parse(User).refresh_token;

    const authUrl = 'http://api.devtouryo.com/oauth/v2/token?grant_type=refresh_token'
        + '&refresh_token=' + refresh_token
        + '&client_id=' + clientId
        + '&client_secret=' + clientSecret;

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    }

    return fetch(authUrl, requestOptions)
        .then(handleResponse)
        .then(user => {
            if (user.access_token) {
                // 認証トークンを更新
                localStorage.setItem('user', JSON.stringify(user))
            }
        })
}