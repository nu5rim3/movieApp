import {
    USER_LOGOUT,
    USER_LOGOUT_SUCCESS,
    USER_LOGOUT_FAILD
} from '../constants';

let logoutData = { data: [], loading: false, error: false };

/**
 * logoutDataReducer
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
const logoutDataReducer = (state = logoutData, action: any) => {
    switch (action.type) {
        case USER_LOGOUT:
            state = Object.assign({}, state, { loading: true });
            return state;
        case USER_LOGOUT_SUCCESS:
            state = Object.assign({}, state, { data: action.data, loading: false });
            return state;
        case USER_LOGOUT_FAILD:
            state = Object.assign({}, state, { error: true, loading: false });
            return state;
        default:
            return state;
    }
};

export default logoutDataReducer;