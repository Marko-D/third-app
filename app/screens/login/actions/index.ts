import {LOGIN_SUBMIT, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT} from '../types'

export const loginSubmit = (data) => {
    return {
        type: LOGIN_SUBMIT,
        payload: data
    };
}

// Triggered whenever a login request is dispatched from whenever point in the code
export const loginRequest = (data) => {
    return {
        type: LOGIN_REQUEST,
        payload: data
    };
}

// triggered when the login has succeded
export const loginSuccess = (data) => {
    return {
        type: LOGIN_SUCCESS,
        payload: data
    };
}

// triggered when the login failed
export const loginError = (errors) => {
    return {
        type: LOGIN_ERROR,
        error: true,
        payload: errors
    };
}

// triggered to logout the user
export const logout = () => {
    return {
        type: LOGOUT
    };
}