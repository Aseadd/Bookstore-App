const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookStore/books/GET_BOOKS';
export const randomCompletion = () => Math.floor(Math.random() * 100);
export const chapter = () => Math.floor(Math.random() * 20) + 1;
// eslint-disable-next-line
const bookUrl =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/xB1q8AMuosJnQjqhWXrE/books';

const books = [];

const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
  randomCompletion,
  chapter,
});

const getBook = (allbookks) => ({
  type: GET_BOOKS,
  payload: allbookks,
});

const getBooks = () => async (dispatch) => {
  const books = await fetch(bookUrl);
  const bookInfo = await books.json();
  dispatch(getBook(bookInfo));
};

const addBooks = (book) => async (dispatch) => {
  const bookInfo = await fetch(bookUrl, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const bookData = await bookInfo.json();
  dispatch(addBook(bookData));
};

const removeBookFromApi = (id) => async (dispatch) => {
  await fetch(`${bookUrl}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  dispatch(removeBook(id));
};

const booksReducer = (state = books, action = {}) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    case GET_BOOKS:
      return Object.entries(action.payload).map(([key, value]) => ({
        item_id: key,
        ...value,
      }));
    default:
      return state;
  }
};

export { addBooks, removeBookFromApi, getBooks };
export default booksReducer;
