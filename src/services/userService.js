import React, { Component } from 'react';
import { dispatch } from 'dispatch';

export const clientId = '1_2btqfoz9qs9wsoss848c4kc4kws4gcsso8gsc0sokgg8wg8w0c';
export const clientSecret = '3s3sbfmu3ikgo4wgsskswkw0c4k4g4wsocgwo80w0wgocosk0k';
export const userService = {
    login,
    logout
};

function login(username, password) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    }

    const authUrl = 'http://api.devtouryo.com/oauth/v2/token?grant_type=password'
        + '&username=' + username
        + '&password=' + password
        + '&client_id=' + clientId
        + '&client_secret=' + clientSecret;

    return fetch(authUrl, requestOptions)
        .then(handleResponse)
        .then(user => {
            if (user.access_token) {
                // 認証トークンをlocalStorageに保存
                localStorage.setItem('user', JSON.stringify(user))
            }
        })
}

function logout() {
    localStorage.removeItem('user');
}

export function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                window.location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}