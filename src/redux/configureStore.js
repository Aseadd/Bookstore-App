import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import booksReducer, { getBooks } from './books/books';
import categories from './categories/categories';

const rootReducer = combineReducers({
  booksReducer,
  categories,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
store.dispatch(getBooks());
export default store;
