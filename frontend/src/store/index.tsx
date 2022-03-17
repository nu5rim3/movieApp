import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { rootReducer } from '../reducer/index'; //Import the reducer

// Connect our store to the reducers
export default createStore(rootReducer, applyMiddleware(thunk));