import React from 'react';
import BookAdd from './bookAdd';

const bookList = [
  {
    genre: 'Action',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    progress: '64%',
    currentChapter: 'Chapter 17',
  },
  {
    genre: 'Science Fiction',
    title: 'Dune',
    author: 'Frank Herbert',
    progress: '8%',
    currentChapter: 'Chapter 3: "A Lesson Learned"',
  },
];
const Book = () => (
  <div className="container">
    {bookList.map((book) => (
      <div className="book" key={book.title}>
        <div className="book-info">
          <span className="book-genre">{book.genre}</span>
          <span className="book-title">{book.title}</span>
          <span className="book-author">{book.author}</span>
        </div>
        <div className="progress">
          <div className="book-oval"></div>
          <span className="book-progress">{book.progress}</span>
        </div>
        <div className="book-chapter">
          <span className="book-current-chapter">{book.currentChapter}</span>
          <button type="button" className="book-update">
            UPDATE PROGRESS
          </button>
        </div>
      </div>
    ))}
    <BookAdd />
  </div>
);

export default Book;
