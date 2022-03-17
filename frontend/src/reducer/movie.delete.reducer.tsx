import { DELETE, DELETE_FAILD, DELETE_SUCCESS } from "../constants";

let deleteMovieData = { data: [], loading: false, error: false };

const deleteMovieReducer = (state = deleteMovieData, action: any) => {
    switch (action.type) {
        case DELETE:
            state = Object.assign({}, state, { loading: true });
            return state;
        case DELETE_SUCCESS:
            state = Object.assign({}, state, { data: action.data, loading: false });
            return state;
        case DELETE_FAILD:
            state = Object.assign({}, state, { error: true, loading: false });
            return state;
        default:
            return state;
    }
};

export default deleteMovieReducer;