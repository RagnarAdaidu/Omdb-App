import { createStore, combineReducers, applyMiddleware } from "redux"
import moviesReducer from "./features/movies/moviesSlice"
import thunk from 'redux-thunk'
import localStorageMiddleware from './localStorageMiddleware';

const rootReducer = combineReducers({
  movies: moviesReducer
})

const persistedState = JSON.parse(localStorage.getItem('reduxState')) || {};

const store = createStore(rootReducer, persistedState, applyMiddleware(thunk, localStorageMiddleware))

export default store