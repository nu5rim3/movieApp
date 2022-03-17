import { ADD_NEW, ADD_NEW_FAILD, ADD_NEW_SUCCESS } from "../constants";

let addNewMovieData = { data: [], loading: false, error: false };

const addNewMovieReducer = (state = addNewMovieData, action: any) => {
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

export default addNewMovieReducer;