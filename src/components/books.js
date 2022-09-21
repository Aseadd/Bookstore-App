import React from 'react';
import BookCollection from './bookCollection';
import BookAdd from './bookAdd';

function Books() {
  return (
    <div className="container">
      <BookCollection />
      <BookAdd />
    </div>
  );
}

export default Books;
