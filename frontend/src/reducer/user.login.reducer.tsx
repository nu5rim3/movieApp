import {
    USER_LOGIN,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILD
} from '../constants';

let userLoginData = { data: [], loading: false, error: false, errorStatus: '' };

/**
 * loginDataReducer
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
const loginDataReducer = (state = userLoginData, action: any) => {
    switch (action.type) {
        case USER_LOGIN:
            state = Object.assign({}, state, { loading: true });
            return state;
        case USER_LOGIN_SUCCESS:
            state = Object.assign({}, state, { data: action.data, loading: false });
            return state;
        case USER_LOGIN_FAILD:
            state = Object.assign({}, state, { error: true, loading: false, errorStatus: action.errorStatus });
            return state;
        default:
            return state;
    }
};

export default loginDataReducer;