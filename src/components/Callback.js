/**
 * Created by chigui on 26-06-17.
 */
import { Component } from 'react';
import { setIdToken, setAccessToken } from './../utils/AuthService';

export default class Callback extends Component {
    componentDidMount () {
        setAccessToken();
        setIdToken();
        window.location.href = '/';
    }

    render () {
        return null
    }
}