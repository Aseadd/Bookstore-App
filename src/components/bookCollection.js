import React from 'react';
import { useSelector } from 'react-redux';
import Book from './book';

function BookCollection() {
  const bookList = useSelector((state) => state.booksReducer);
  return (
    <div>
      {bookList.map((book) => (
        <Book
          key={book.id}
          id={book.id}
          genre={book.genre}
          title={book.title}
          author={book.author}
        />
      ))}
    </div>
  );
}

export default BookCollection;
