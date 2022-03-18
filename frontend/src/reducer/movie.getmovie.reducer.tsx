import { MOVIE_DETAIL, MOVIE_DETAIL_FAILD, MOVIE_DETAIL_SUCCESS } from "../constants";
import { MovieDetails, Movie } from "../types/types";

let getMovieData: MovieDetails = {
    data: {}, loading: false, error: false,
};
/**
 * 
 * @param state 
 * @param action 
 * @returns 
 */
const getMovieReducer = (state = getMovieData, action: any) => {
    switch (action.type) {
        case MOVIE_DETAIL:
            state = Object.assign({}, state, { loading: true });
            return state;
        case MOVIE_DETAIL_SUCCESS:
            state = Object.assign({}, state, { data: action.data, loading: false });
            return state;
        case MOVIE_DETAIL_FAILD:
            state = Object.assign({}, state, { error: true, loading: false });
            return state;
        default:
            return state;
    }
};

export default getMovieReducer;