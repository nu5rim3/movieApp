import { ADD_NEW, ADD_NEW_FAILD, ADD_NEW_SUCCESS } from "../constants";

let updateMovieData = { data: [], loading: false, error: false };

const updateMovieReducer = (state = updateMovieData, action: any) => {
    switch (action.type) {
        case ADD_NEW:
            state = Object.assign({}, state, { loading: true });
            return state;
        case ADD_NEW_SUCCESS:
            state = Object.assign({}, state, { data: action.data, loading: false });
            return state;
        case ADD_NEW_FAILD:
            state = Object.assign({}, state, { error: true, loading: false });
            return state;
        default:
            return state;
    }
};

export default updateMovieReducer;