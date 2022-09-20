import { configureStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from '@redux-devtools/extension';
import booksReducer from './books/books';
import categories from './categories/categories';

const rootReducer = combineReducers({
  books: booksReducer,
  categories: categories,
});
const store = configureStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger)),
);

export default store;
