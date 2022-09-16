import React from 'react';

const BookAdd = () => (
  <div className="add-book">
    <h1 className="add-book-title">ADD NEW BOOK</h1>
    <form className="add-book-form">
      <input type="text" placeholder="Book title" className="title" />
      <input type="text" placeholder="Author" className="author" />
      <button type="submit" className="submit">
        ADD BOOK
      </button>
    </form>
  </div>
);

export default BookAdd;
