import counterReducer from "./counter";
import isLogged from "./isLogged";
import {combineReducers} from 'redux';

export const allReducers = combineReducers({
    counter : counterReducer,
    logged : isLogged
})