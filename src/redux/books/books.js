const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
export const randomCompletion = () => Math.floor(Math.random() * 100);
export const chapter = () => Math.floor(Math.random() * 20) + 1;

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

const booksReducer = (state = books, action = {}) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);

    default:
      return state;
  }
};

export { addBook, removeBook };
export default booksReducer;
