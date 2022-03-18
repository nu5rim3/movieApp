import { MOVIES_DETAIL, MOVIES_DETAIL_FAILD, MOVIES_DETAIL_SUCCESS } from "../constants";
import { MovieDetailsList } from "../types/types";

let getAllMovieData: MovieDetailsList = { data: [], loading: false, error: false };
/**
 * 
 * @param state 
 * @param action 
 * @returns 
 */
const getAllMovieReducer = (state = getAllMovieData, action: any) => {
    switch (action.type) {
        case MOVIES_DETAIL:
            state = Object.assign({}, state, { loading: true });
            return state;
        case MOVIES_DETAIL_SUCCESS:
            state = Object.assign({}, state, { data: action.data.data, loading: false });
            return state;
        case MOVIES_DETAIL_FAILD:
            state = Object.assign({}, state, { error: true, loading: false });
            return state;
        default:
            return state;
    }
};

export default getAllMovieReducer;