import axios from 'axios';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const FETCH_BOOKS = 'bookStore/books/FETCH_BOOKS';
export const randomCompletion = () => Math.floor(Math.random() * 100);
export const chapter = () => Math.floor(Math.random() * 20) + 1;
// eslint-disable-next-line
const bookUrl =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/GQNZgO2lkYxh8W1hsS4k/books/';

const books = [];

const fetchBook = (payload) => ({
  type: FETCH_BOOKS,
  payload,
});

const getBooks = () => async (dispatch) => {
  const books = await axios.get(bookUrl);
  const booksFetched = Object.entries(books.data).map((item) => {
    const { title, author } = item[1][0];
    return {
      id: item[0],
      title,
      author,
    };
  });
  dispatch(fetchBook(booksFetched));
};

const addBooksToApi = (book) => async (dispatch) => {
  const newBook = {
    item_id: book.id,
    title: book.title,
    author: book.author,
    category: 'Action',
  };
  await axios.post(bookUrl, newBook);
  dispatch({
    type: ADD_BOOK,
    payload: book,
  });
};

const removeBooksFromApi = (book) => async (dispatch) => {
  await axios.delete(`${bookUrl}${book.id}`);
  dispatch({
    type: REMOVE_BOOK,
    payload: book,
  });
};
const booksReducer = (state = books, action = {}) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    case FETCH_BOOKS:
      return action.payload;
    default:
      return state;
  }
};

export { addBooksToApi, removeBooksFromApi, getBooks };
export default booksReducer;
