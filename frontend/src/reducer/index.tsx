import { combineReducers } from 'redux';
import loginDataReducer from './user.login.reducer';
import userRegisterReducer from './user.register.reducer';
import addNewMovieReducer from './movie.addnew.reducer';
import getAllMovieReducer from './movie.getallmovie.reducer';
import getMovieReducer from './movie.getmovie.reducer';
import deleteMovieReducer from './movie.delete.reducer';
import updateMovieReducer from './movie.update.reducer';

// Combine all the reducers
export const rootReducer = combineReducers({
    movie: getMovieReducer,
    userLogin: loginDataReducer,
    userRegister: userRegisterReducer,
    newMoive: addNewMovieReducer,
    allMovie: getAllMovieReducer,
    delete: deleteMovieReducer,
    update: updateMovieReducer
});

export type RootState = ReturnType<typeof rootReducer>;