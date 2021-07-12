import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    AUTH,
    AUTHLOGOUT,
} from '../actions/types';

const initialState = {
    token: localStorage.getItem('token'),
    authData: null,
    isAuthenticated: null,
    loading: true,
    user: null
};
export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case AUTH:
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
            return {
                ...state,
                authData: action?.data,
                isAuthenticated: true,
                loading: false,
                user: payload
            };
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload
            }
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            }
        case REGISTER_FAIL:
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT:
        case AUTHLOGOUT:
            return {}
      
        default:
            return state;

    }
}

