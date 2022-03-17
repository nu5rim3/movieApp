import { USER_REGISTER, USER_REGISTER_FAILD, USER_REGISTER_SUCCESS } from "../constants";

let userRegisterData = { data: [], loading: false, error: false };
/**
 * 
 * @param state 
 * @param action 
 * @returns 
 */
const userRegisterReducer = (state = userRegisterData, action: any) => {
    switch (action.type) {
        case USER_REGISTER:
            state = Object.assign({}, state, { loading: true });
            return state;
        case USER_REGISTER_SUCCESS:
            state = Object.assign({}, state, { data: action.data, loading: false });
            return state;
        case USER_REGISTER_FAILD:
            state = Object.assign({}, state, { error: true, loading: false });
            return state;
        default:
            return state;
    }
};

export default userRegisterReducer;