import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBooksFromApi, chapter } from '../redux/books/books';
import CircularStatic from './progressBar';

function Book(props) {
  const { id, title, author } = props;
  const dispatch = useDispatch();
  const handleRemoveBook = () => {
    dispatch(removeBooksFromApi(id));
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
            <button type="button" className="remove" onClick={handleRemoveBook}>
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
              <CircularStatic />
            </div>
          </div>
          <div className="book-progress-info">
            <span className="book-progress-title">CURRENT CHAPTER</span>
            <span className="book-progress-chapter">{`Chapter ${chapter()}`}</span>
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
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
