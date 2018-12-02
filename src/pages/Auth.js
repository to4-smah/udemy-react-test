import React from 'react'
import { Redirect } from 'react-router-dom'

const Auth = (props) => (localStorage.getItem('user') ? props.children : <Redirect to={ '/' }/>)

export default Auth