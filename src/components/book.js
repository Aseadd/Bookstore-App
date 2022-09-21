/* eslint-disable camelcase */
import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookFromApi } from '../redux/books/books';

const randomCompletion = Math.floor(Math.random() * 100);
const chapter = Math.floor(Math.random() * 20) + 1;
const percent = '%';

function Book(props) {
  const { item_id, title, author } = props;
  const dispatch = useDispatch();
  const handleRemoveBook = (id) => {
    dispatch(removeBookFromApi(id));
  };
  return (
    <section className="container">
      <div className="book">
        <div className="book-info">
          <span className="book-title">{title}</span>
          <span className="book-author">{author}</span>
          <div className="book-buttons">
            <button type="button" className="comment">
              Comment
            </button>
            <button
              type="button"
              className="remove"
              onClick={handleRemoveBook(item_id)}
            >
              Remove
            </button>
            <button type="button" className="edit">
              Edit
            </button>
          </div>
        </div>
        <div className="progress">
          <div className="book-progress">
            <div
              className="book-progress"
              role="progressbar"
              aria-valuenow="0"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {randomCompletion}
              {percent}
            </div>
          </div>
          <div className="book-progress-info">
            <span className="book-progress-title">CURRENT CHAPTER</span>
            <span className="book-progress-chapter">
              &nbsp;
              {chapter}
            </span>
            <button type="button" className="book-update">
              UPDATE PROGRESS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

Book.propTypes = {
  item_id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
