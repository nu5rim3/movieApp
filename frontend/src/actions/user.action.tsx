import axios from 'axios';
import {
    USER_LOGIN,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILD,
    USER_REGISTER,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAILD,
    USER_LOGOUT,
    USER_LOGOUT_SUCCESS,
    USER_LOGOUT_FAILD
} from '../constants';

const API_URL = "http://localhost:8070";
const authorization = localStorage.getItem("Authorization");
/**
 * 
 * @param data 
 * @returns 
 */
export const loginUser = (data: any) => {

    return async (dispatch: any) => {
        dispatch({ type: USER_LOGIN });
        await axios({
            method: "POST",
            url: API_URL + "/user/login",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            data
        }
        )
            .then(response => {
                dispatch({ type: USER_LOGIN_SUCCESS, data: response.data });
                // set localstorage
                localStorage.setItem("Authorization", JSON.stringify(response.data.token));
                localStorage.setItem("Role", JSON.stringify(response.data.user.role));
                localStorage.setItem("userId", JSON.stringify(response.data.user.name));
                window.location.href = "/app/home"
            }).catch((err) => {
                console.log('loginUser Err- ', err);
                dispatch({ type: USER_LOGIN_FAILD });
            })
    };
}

/**
 * 
 * @param data 
 * @returns 
 */
export const register = (data: any) => {

    return async (dispatch: any) => {
        dispatch({ type: USER_REGISTER });
        await axios({
            method: "POST",
            url: API_URL + "/user/signup",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            data
        }
        )
            .then(response => {
                dispatch({ type: USER_REGISTER_SUCCESS, data: response.data });
                window.location.href = "/login"
            }).catch((err) => {
                console.log('loginUser Err- ', err);
                dispatch({ type: USER_REGISTER_FAILD });
            })
    };
}

/**
 * 
 * @param data 
 * @returns 
 */
export const logout = () => {
console.log('logout')
    return async (dispatch: any) => {
        dispatch({ type: USER_LOGOUT });
        await axios({
            method: "POST",
            url: API_URL + "/user/logout",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": JSON.parse(authorization || '')
            },
        }
        )
            .then(response => {
                dispatch({ type: USER_LOGOUT_SUCCESS, data: response.data });
                window.location.href = "/login"
            }).catch((err) => {
                console.log('logout Err- ', err);
                dispatch({ type: USER_LOGOUT_FAILD });
            })
    };
}